// Получаем элементы модального окна и кнопки
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");
var modal11 = document.getElementById("myModal11");
var modal12 = document.getElementById("myModal12");
var btn1 = document.getElementById("openModalBtn1");
var btn2 = document.getElementById("openModalBtn2");
var btn3 = document.getElementById("openModalBtn3");
var btn4 = document.getElementById("openModalBtn4");
var btn5 = document.getElementById("openModalBtn5");
var btn6 = document.getElementById("openModalBtn6");
var btn7 = document.getElementById("openModalBtn7");
var btn8 = document.getElementById("openModalBtn8");
var btn9 = document.getElementById("openModalBtn9");
var btn10 = document.getElementById("openModalBtn10");
var btn11 = document.getElementById("openModalBtn11");
var btn12 = document.getElementById("openModalBtn12");
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];
var span9 = document.getElementsByClassName("close9")[0];
var span10 = document.getElementsByClassName("close10")[0];
var span11 = document.getElementsByClassName("close11")[0];
var span12 = document.getElementsByClassName("close12")[0];

// Открываем модальное окно при клике на кнопку
btn1.onclick = function () {
    modal1.style.display = "block";
}
btn2.onclick = function () {
    modal2.style.display = "block";
}
btn3.onclick = function () {
    modal3.style.display = "block";
}
btn4.onclick = function () {
    modal4.style.display = "block";
}
btn5.onclick = function () {
    modal5.style.display = "block";
}
btn6.onclick = function () {
    modal6.style.display = "block";
}
btn7.onclick = function () {
    modal7.style.display = "block";
}
btn8.onclick = function () {
    modal8.style.display = "block";
}
btn9.onclick = function () {
    modal9.style.display = "block";
}
btn10.onclick = function () {
    modal10.style.display = "block";
}
btn11.onclick = function () {
    modal11.style.display = "block";
}
btn12.onclick = function () {
    modal12.style.display = "block";
}

// Закрываем модальное окно при клике на крестик
span1.onclick = function () {
    modal1.style.display = "none";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
span3.onclick = function () {
    modal3.style.display = "none";
}
span4.onclick = function () {
    modal4.style.display = "none";
}
span5.onclick = function () {
    modal5.style.display = "none";
}
span6.onclick = function () {
    modal6.style.display = "none";
}
span7.onclick = function () {
    modal7.style.display = "none";
}
span8.onclick = function () {
    modal8.style.display = "none";
}
span9.onclick = function () {
    modal9.style.display = "none";
}
span10.onclick = function () {
    modal10.style.display = "none";
}
span11.onclick = function () {
    modal11.style.display = "none";
}
span12.onclick = function () {
    modal12.style.display = "none";
}



// Закрываем модальное окно при клике вне его
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
    if (event.target == modal7) {
        modal7.style.display = "none";
    }
    if (event.target == modal8) {
        modal8.style.display = "none";
    }
    if (event.target == modal9) {
        modal9.style.display = "none";
    }
    if (event.target == modal10) {
        modal10.style.display = "none";
    }
    if (event.target == modal11) {
        modal11.style.display = "none";
    }
    if (event.target == modal12) {
        modal12.style.display = "none";
    }
}