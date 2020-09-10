var counter = document.querySelector("#piu");
var counter_length = document.querySelector(".counter");
counter.addEventListener("keyup", function() {
    

    if(this.value.length > 0 && this.value.length <= 140){
        counter.classList.remove("limite");
    }

    else{
        counter.classList.add("limite");
    }
    counter_length.textContent = this.value.length;

    var post = document.querySelector("#post");

    post.addEventListener("click",function(){
        counter_length.textContent = "0";

    });

});


