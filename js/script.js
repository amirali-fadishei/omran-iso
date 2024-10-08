// دکمه بازگشت به ابتدا صفحه
To_top = document.getElementById("To-top");

//زمانی که کاربر به اندازه 300 اسکرول کرد دکمه را نشان بده
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    To_top.style.display = "flex";
  } else {
    To_top.style.display = "none";
  }
}

// زمانی که کاربر روی دکمه کلیک کرد به بالای صفحه منقل شو
function topFunction() {
  document.body.scrollTop = 0; // کد مخصوص مروگر سفاری
  document.documentElement.scrollTop = 0; // کد مخصوص مروگر فایرفاکس،کروم،اپرا و ...
}
