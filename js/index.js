
function calculate(){
  let name = document.getElementById('name-input').value;
  if(name ==""){
    alert('이름 입력하고 다시하세여');
    return;
  }
  let score;
  if(name == "배설영" || name == "최은기" || name == "최승규" || name == "고송주"){
    score = 950;
  }else if(name == "Seolyeongbae" || name == "eungichoi"){
    score = 990;
  }else{
    score = rand(650,991)
  }
  if(name=="이승현" || name=='승현'){
    score+=500;
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