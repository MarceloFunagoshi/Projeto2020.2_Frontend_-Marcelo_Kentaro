var post = document.querySelector("#post");
var id = 0;
post.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#insert");
    var myPost = messageReader(form);
    
    var error = verify(myPost); 

    if (error.length > 0){
        showError(error);

        return;
    }

    addPost(myPost);

    form.reset();

    var message_error = document.querySelector("#message-error");
    message_error.innerHTML = "";
    interactPost();
});

function messageReader(form){
    var post = {
        nome: "Piupiu",
        username: "@Piupiu",
        mensagem: form.piu.value,
        imagem: "./images/avatar.png"
    }
    return post;
}


//Todas as funções para adiconar novos post ou mostrar os posts pegos com a API

function addPost(post){ 
    var pius_li = makePost(post);
    var list = document.querySelector("#list"); 
    list.appendChild(pius_li);
    return list;
}


function makePost(post) { 
    var pius_li = document.createElement("li");
    pius_li.classList.add("piu");
    var image = create_img(post.imagem, "img", "info-avatar");
    pius_li.appendChild(image);
    var content = create_div("info", post);
    pius_li.appendChild(content);

    return pius_li; 
}


function create_div(name_class, post)  {
    var create = document.createElement("div");
    create.classList.add(name_class);

    create.appendChild(create_strong(post, "info-name"));
    create.appendChild(create_info(post.mensagem, "p", "info-message"));

    actions = create_actions();
    create.appendChild(actions);

    return create;
}

function create_strong(data, name_class) {
    var createStrong = document.createElement("strong");
    createStrong.classList.add(name_class);
    createStrong.textContent = data.nome;
    createStrong.appendChild(create_info(data.username, "span", "info-user"));
    return createStrong;
}

function create_info(data, type, name_class) {
    var createInfo = document.createElement(type);
    createInfo.classList.add(name_class);
    createInfo.textContent = data;

    return createInfo;
}

function create_img(data, type, name_class){

    var createInfo = document.createElement(type);
    createInfo.classList.add(name_class);

    if(data ==""){
        data="./images/unknown.png";
    }
    createInfo.setAttribute("src", data );

    return createInfo;
}

function create_actions(){
    var actions = document.createElement("div");
    actions.classList.add("actions");

    var comment = document.createElement("button");
    comment.classList.add("comment");
    comment.appendChild(create_img("./images/comments.svg", "img", "icon"));
    comment.appendChild(create_info(0, "span", "value-comment" + id));

    var retweet = document.createElement("button");
    retweet.classList.add("retweet");
    retweet.appendChild(create_img("./images/retweet.svg", "img", "icon"));
    retweet.appendChild(create_info(0, "span", "value-retweet" + id));

    var like = document.createElement("button");
    like.classList.add("like");
    like.appendChild(create_img("./images/like.svg", "img", "icon"));
    like.appendChild(create_info(0, "span", "value-like" + id));

    var highlight = document.createElement("button");
    highlight.classList.add("highlight");
    highlight.appendChild(create_img("./images/highlight.svg", "img", "icon"));

    actions.appendChild(comment);
    actions.appendChild(retweet);
    actions.appendChild(like);
    actions.appendChild(highlight);
    id = id +1;
    return actions;
}

// Verificação de erros

function verify(post){
    var erros = [];

    if (post.mensagem.length == 0){
        erros.push("Caixa de texto vazia!");
    }

    if (post.mensagem.length > 140){
        erros.push("Passou do limite de caracteres!");
    }

    return erros;
}

function showError(errors){
    var ul = document.querySelector("#message-error");
    ul.innerHTML = "";

    errors.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}