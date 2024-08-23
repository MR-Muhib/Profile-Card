var inputImg = document.getElementById("input-img");
var inputField = document.getElementById("input-fild");

inputField.onchange = () => {
  inputImg.src = URL.createObjectURL(inputField.files[0]);
};
