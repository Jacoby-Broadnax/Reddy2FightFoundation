var menubtn = document.getElementsByClassName("menu");
var closebtn = document.getElementsByClassName("close");
var menu = document.getElementsByClassName("nav");
var closebase = document.getElementsByClassName("close-base");

function expand() {
    menu[0].style.display = "block";
    menubtn[0].style.display = "none";
    closebtn[0].style.display = "block";
    closebase[0].style.display = "block";

}

function collapse() {
    menubtn[0].style.display = "block";
    closebtn[0].style.display = "none";
    menu[0].style.display = "none";
    closebase[0].style.display = "none";
}
