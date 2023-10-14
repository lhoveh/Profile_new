let menuIcon = document.getElementById("menu_icon");
menuIcon.addEventListener("click", function () {

    let modalMenu = document.getElementById("modalMenu");
    modalMenu.classList.add("show_janela");
    console.log("click")

})

let xIcon = document.getElementById("x_icon");
xIcon.addEventListener("click", function () {

    let modalMenu = document.getElementById("modalMenu");
    modalMenu.classList.remove("show_janela");
    console.log("click")

})