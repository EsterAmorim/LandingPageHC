/*image slide
-------------*/
function imgSlider(anything){
    document.querySelector('.cookies').src = anything;
  }
  function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background=color;
  }
/*responsive menu
-----------------*/
  class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }-5
      return this;
    }
  }
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();

  /*localstorag
  ---------------*/

let name = document.querySelector('#username');
let labelName = document.querySelector ('#labelName')
let validName = false
let Email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
validEmail = false


username.addEventListener('keyup',() =>{
  if(username.value.length <=2){
    labelName.setAttribute('style','color: red')
    labelName.innerHTML = '<strong> Nome *Insira no minímo 3 caracteres</strong>'
    validName = false
  } else{
    labelName.setAttribute('style','color: green')
    labelName.innerHTML = '<strong>Nome</strong>'
    validName = true
  }
})

function validateEmail(){
  var email = document.querySelector('#email');
  var error = document.querySelector('#error-email');
  if(!email.checkValidity()){
    error.innerHTML = "";
    labelEmail.setAttribute('style','color: red')
    labelEmail.innerHTML = '<strong>Email *Insira um email correto</strong>'
    validEmail = false
  } else{
    labelEmail.setAttribute('style','color: green')
    labelEmail.innerHTML = '<strong>Email</strong>'
    validEmail = true
  }
   
}

function resetMsg(){
  var error = document.querySelector('#error-email');
  if (error.innerHTML == ""){
    error.innerHTML = "";
  }
}

function register() {
  if(validName && validEmail) {
    let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')
    listUser.push(
      {
        nameReg: username.value,
        emailReg: email.value
      }
    )
    localStorage.setItem('listUser', JSON.stringify(listUser))

    alert('Obrigada por se registrar, você realmente é o(a) maior biscoitero(a) de todos!!');
  }else{
    alert('Por favor, preencha o formulario corretamente');
  }
 
  
}  