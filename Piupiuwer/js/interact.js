function interactPost(){
//like
interact(".like", ".value-like");
//Retweet
interact(".retweet", ".value-retweet");
//Comment
interact(".comment", ".value-comment");
//Highlight
highlightPost();
}


function interact(local, localValue){
    var buttonLocal = document.querySelectorAll(local);
    var id=0; 
    buttonLocal.forEach(function(button) {
        var valueLocal = document.querySelector(localValue+ id);
        button.addEventListener("click", function(){
            number = valueLocal.textContent;
            valueLocal.textContent = parseInt(number) + 1;
            button.classList.add("Done");
        });
        id = id +1;
    });
}

function highlightPost(){
    var buttonLocal = document.querySelectorAll(".highlight");
    buttonLocal.forEach(function(button) {
        button.addEventListener("click", function(event){

            (((event.target.parentNode).parentNode).parentNode).parentNode.classList.add("highlight-post");
        });
    });
}