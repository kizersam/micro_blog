console.log("Sanity Check: JS is working!");

$(document).ready(function(){
 	
 	$('[data-toggle="tooltip"]').tooltip(); 
 	
 	//Here I have my button function
	$(".btn").on("click", function(){
		var post = $("#input-box").val();
		var title= $("#title-input").val();
		$("ul").prepend("<li><div class='panel panel-primary'><div class='panel-heading'>"+title+"</div><div class='panel-body'>"+post+"<span class='glyphicon glyphicon-trash pull-right'></span></div></li>");
		$("#input-box").val("");
		$("#title-input").val("");
		deletePost();
		numberOfPosts();
	});

	var deletePost= function(){
		$(".glyphicon").on("click",function(e){ 
			$(this).closest("li").remove();
			numberOfPosts();
			}
		);
	};
	
	var numberOfPosts= function(){
		var postCount = $("li").length;
			if(postCount === 1){
				$("h3").text("There is 1 post on this page.");
			}
			else{
				$("h3").text("There are "+postCount+" posts on this page.");
			}
	};

});

// Here are the two post display formats I was playing around with
// "<li class='list-group-item'>"+post+"<span class='glyphicon glyphicon-trash pull-right'></span></li>"	
// "<li><div class='panel panel-primary'><div class='panel-heading'>"+title+"</div><div class='panel-body'>"+post+"</div><span class='glyphicon glyphicon-trash pull-right'></span></li>";

