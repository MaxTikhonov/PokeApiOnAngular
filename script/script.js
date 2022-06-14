let mainLi = document.querySelectorAll('.main-flex-li');
let popUp = document.querySelector('.popup');
console.log(mainLi);
mainLi.forEach((elem)=>{
   elem.addEventListener('click',()=>{
       popUp.classList.add('active');
   })
 })
 popUp.addEventListener('click', () => {
   popUp.classList.remove('active');
 })