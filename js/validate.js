// متغیر های ثابت مورد نیاز
const form = document.querySelector(".job-form");
const error_1 = document.querySelector(".error-1");
const error_2 = document.querySelector(".error-2");
const error_3 = document.querySelector(".error-3");
const error_4 = document.querySelector(".error-4");
const error_5 = document.querySelector(".error-5");
const error_6 = document.querySelector(".error-6");
const error_7 = document.querySelector(".error-7");
const error_8 = document.querySelector(".error-8");
const main_error = document.querySelector(".main-error");

const user_patt = /^[\u0600-\u06FF\s][\u0600-\u06FF\s]{1,12}$/; //ریجکس برای نام و نام خانوادگی
const email_patt = /[a-zA-Z0-9.-]+@[a-z-]+\.com/; //ریجکس برای پسورد
const phone_patt = /09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}/; //ریجکس برای شماره تلفن همراه

//جلوگیری از ارسال فرم تا زمان اعتبار سنجی
form.addEventListener("submit", (e) => {
  if (Ffirstname == 1 && Flastname == 1 && Femail == 1 && Fphone == 1) {
    main_error.style.display = "none";
    alert("فرم با موفقیت ارسال شد !");
    return true;
  } else {
    e.preventDefault();
    main_error.style.display = "block";
  }
});

var Ffirstname,
  Flastname,
  Femail,
  Fphone = 0;

//اعتبار سنجی نام
form.firstname.addEventListener("keyup", (e) => {
  var Unametext = e.target.value;
  if (Unametext == "" || Unametext == null) {
    error_1.style.display = "block";
    error_2.style.display = "none";
    e.target.classList.remove("success");
    e.target.classList.add("i-error");
  } else if (user_patt.test(Unametext)) {
    error_1.style.display = "none";
    error_2.style.display = "none";
    e.target.classList.add("success");
    e.target.classList.remove("i-error");
    Ffirstname = 1;
  } else {
    error_1.style.display = "none";
    error_2.style.display = "block";
    e.target.classList.remove("success");
    e.target.classList.add("i-error");
  }
});
//اعتبار سنجی نام خانوادگی
form.lastname.addEventListener("keyup", (e) => {
  var Unametext = e.target.value;
  if (Unametext == "" || Unametext == null) {
    error_3.style.display = "block";
    error_4.style.display = "none";
    e.target.classList.remove("success");
    e.target.classList.add("i-error");
  } else if (user_patt.test(Unametext)) {
    error_3.style.display = "none";
    error_4.style.display = "none";
    e.target.classList.add("success");
    e.target.classList.remove("i-error");
    Flastname = 1;
  } else {
    error_3.style.display = "none";
    error_4.style.display = "block";
    e.target.classList.remove("success");
    e.target.classList.add("i-error");
  }
});
//اعتبار سنجی ایمیل
form.email.addEventListener("keyup", (e) => {
  var Unametext = e.target.value;
  if (Unametext == "" || Unametext == null) {
    error_5.style.display = "block";
    error_6.style.display = "none";
    e.target.classList.remove("success");
    e.target.classList.add("i-error");
  } else if (email_patt.test(Unametext)) {
    error_5.style.display = "none";
    error_6.style.display = "none";
    e.target.classList.add("success");
    e.target.classList.remove("i-error");
    Femail = 1;
  } else {
    error_5.style.display = "none";
    error_6.style.display = "block";
    e.target.classList.remove("success");
    e.target.classList.add("i-error");
  }
});
//اعتبار سنجی شماره تلفن
form.phone.addEventListener("keyup", (e) => {
  var Unametext = e.target.value;
  if (Unametext == "" || Unametext == null) {
    error_7.style.display = "block";
    error_8.style.display = "none";
    e.target.classList.remove("success");
    e.target.classList.add("i-error");
  } else if (phone_patt.test(Unametext)) {
    error_7.style.display = "none";
    error_8.style.display = "none";
    e.target.classList.add("success");
    e.target.classList.remove("i-error");
    Fphone = 1;
  } else {
    error_7.style.display = "none";
    error_8.style.display = "block";
    e.target.classList.remove("success");
    e.target.classList.add("i-error");
  }
});
