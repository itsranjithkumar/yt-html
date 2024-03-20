var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");

menuIcon.onclick = function(){
    sidebar.classlist.toggle("small-sidebar");
}