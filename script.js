var menubtn = document.getElementsByClassName("menu");
var closebtn = document.getElementsByClassName("close");
var menu = document.getElementsByClassName("nav");
var closebase = document.getElementsByClassName("close-base");
var modal = document.getElementsByClassName("privacy-policy");
var modalSpanner = document.getElementsByClassName("policy-spanner");
var donation = document.getElementsByClassName("donate-sect")

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

function modalOpen() {
    modal[0].style.display = "block";
    modalSpanner[0].style.display = "block";
}

function modalClose() {
    modal[0].style.display = "none";
    modalSpanner[0].style.display = "none";
}
