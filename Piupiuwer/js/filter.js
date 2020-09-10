
function searchPeople(){
var filterBox = document.querySelector("#search");

filterBox.addEventListener("input", function() {
    var varpius = document.querySelectorAll(".piu");
    if (this.value.length > 0) {
        for (var i = 0; i < varpius.length; i++) {
            var piu = varpius[i];
            var strongName = piu.querySelector(".info-name");
            var name = strongName.textContent;
            var expression = new RegExp(this.value, "i");
            
            if (!expression.test(name)) {
                piu.classList.add("invisible");
            } else {
                piu.classList.remove("invisible");
            }
        }
    } else {
        for (var i = 0; i < varpius.length; i++) {
            var piu = varpius[i];
            piu.classList.remove("invisible");
        }
    }
});

}
