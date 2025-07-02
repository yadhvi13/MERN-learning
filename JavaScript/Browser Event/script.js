// Method
function changeText(){
  let fpara = document.getElementById('fpara');
  fpara.textContent = "Hello Yogeeta Miss";
}
let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);

// fpara.removeEventListener('click',changeText);



