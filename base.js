console.log("Sanity Check: JS is working!");

$(document).ready(function(){
 	
 
 	

	$(".btn").on("click", function(){
		var post = $("#input-box").val();
		console.log(post);
		$("ul").prepend("<li class='list-group-item'>"+post+"<span class='glyphicon glyphicon-trash pull-right'></span></li>");
		$("#input-box").val("");
		deletePost();
		numberOfPosts();
	});

	var deletePost= function(){
		$(".glyphicon").on("click",function(e){ 
			console.log("clicked");
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

