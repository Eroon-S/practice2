// const toggleBtn = document.querySelector('.navbar___toggleBtn');
// const menu = document.querySelector('.navbar___menu');
// const icons = document.querySelector('.navbar___icons');

// toggleBtn.addEventListener('click', () => {
//     menu.classList.toggle('active');
//     icons.classList.toggle('active');
// }
// );

const toggle = document.querySelector('.navbar_toggle');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

//클릭될때마다 우리가 지정하고 있는 함수를 호출해줘
//버튼이 클릭될때마다 menu와 icons에 있는 class리스트 중에 active class를 토글링할 것
//클릭했을 때 menu와 icons의 class가 active가 없다면 active를 추가해주고
//active가 있다면 active를 빼줌
toggle.addEventListener('click', () =>{
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});