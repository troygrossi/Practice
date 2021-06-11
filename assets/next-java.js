var test = "this is also a string";

var testFunction = function () {
  document.addEventListener("click", testFunction);
  pageCheck();
};

var pageCheck = function () {
  console.log("page 2");
  document.querySelector("h1").textContent = localStorage.getItem("key name");
};

