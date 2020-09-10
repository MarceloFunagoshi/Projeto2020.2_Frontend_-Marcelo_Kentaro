var xhr = new XMLHttpRequest();

xhr.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");

xhr.addEventListener("load", function(event) {
    event.preventDefault();
    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
        erroAjax.classList.add("erro-inv");
        var answer = xhr.responseText;
        var Allposts = JSON.parse(answer);

        Allposts.forEach(function(post) {
            addPost(post);
        });

    } else {
        erroAjax.classList.remove("erro-inv");
    }

    searchPeople();
    interactPost();

});
xhr.send();


