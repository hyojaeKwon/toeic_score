
function calculate(){
  let name = document.getElementById('name-input').value;
  let score = 0
  // console.log(name)
  if(name == "배설영" || name == "최은기" || name == "최승규" || name == "고송주"){
    score = 950;
  }else if(name == "Seolyeongbae" || name == "eungichoi"){
    score = 990;
  }else{
    score = rand(500,991)
  }
  return score
}
function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function changeByJS() {
  let x = document.querySelector("#score");
  let score = calculate();
  let scoreText = score+"점";
  x.innerText= scoreText;
}

let btn = document.querySelector("#button")
btn.addEventListener('click',changeByJS)