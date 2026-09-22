const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");

const themeBtn = document.getElementById("themeBtn");

// القائمة في الجوال

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});

// إغلاق القائمة عند الضغط على أحد الروابط

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});

// الوضع الليلي / الفاتح

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

});7