var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}

var text1 = "Mungkin ini adalah hadiah yang nggak ada gunanya banget, tapi ya terserah kamu aja mau diapain, yang penting udah dikasih, kan? :P";
var text2 = "Terkadang, hadiah kecil bisa menyimpan makna besar. Semoga ini jadi sesuatu yang berkesan buat kamu, ya! 😄";
var text3 = "Kalau hadiah nya meminang mu, mungkin hanya bisa ku pinang dengan Bismika Allahumma Ahya Wabismika Amut, karena ku sadar memiliki mu hanya sebuah mimpi. :v";
var text4 = "Tetaplah tersenyum dengan nayanika, karna itu bagaikan indahnya Arutala pada malam hari,<br>dan seperti Swastamita pada sore hari :)<br><br>~Senandika";

var index1 = 0, index2 = 0, index3 = 0, index4 = 0;

function typeWriter1() {
    if (index1 < text1.length) {
        document.getElementById("typingText1").innerHTML += text1.charAt(index1);
        index1++;
        setTimeout(typeWriter1, 50); 
    } else {
        setTimeout(typeWriter2, 2000); 
    }
}

function typeWriter2() {
    if (index2 < text2.length) {
        document.getElementById("typingText2").innerHTML += text2.charAt(index2);
        index2++;
        setTimeout(typeWriter2, 50); 
    } else {
        setTimeout(replaceWithText3, 2000); 
    }
}

function replaceWithText3() {
    document.getElementById("typingText2").innerHTML = ""; 
    typeWriter3();
}

function typeWriter3() {
    if (index3 < text3.length) {
        document.getElementById("typingText2").innerHTML += text3.charAt(index3);
        index3++;
        setTimeout(typeWriter3, 50); 
    } else {
        setTimeout(replaceWithText4, 2000); 
    }
}

function replaceWithText4() {
    document.getElementById("typingText1").innerHTML = ""; 
    document.getElementById("typingText2").innerHTML = "";
    typeWriter4();
}

function typeWriter4() {
    if (index4 < text4.length) {
        if (text4.charAt(index4) === "<") {
            let tag = "";
            while (text4.charAt(index4) !== ">") {
                tag += text4.charAt(index4);
                index4++;
            }
            tag += ">";
            document.getElementById("typingText1").innerHTML += tag;
        } else {
            document.getElementById("typingText1").innerHTML += text4.charAt(index4);
        }
        index4++;
        setTimeout(typeWriter4, 50);  
    }
}

window.onload = function() {
    typeWriter1();
}