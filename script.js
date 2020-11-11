const navButton = document.getElementById('navbtn');
const body = document.getElementsByTagName('body')[0];
const sidebar = document.querySelector('.sidebar');
const navButtonMobile = document.getElementById('navbtn_mobile');
const root = document.documentElement;
const main = document.getElementById('main');
const newsdiv = document.getElementById('news-div');
const frnd = document.getElementById('frnd');
const news = document.getElementById('news');
const cancelbtn = document.getElementById('cancelbtn');
const showmore = document.getElementById('showmore');
const showless = document.getElementById('showless');
const modal = document.getElementById('modal');

window.onresize = resize;

function OpenModal(){
    if (modal.style.display == "none"){
        modal.style.display = "block";
    }
    else if (modal.style.display == "block"){
        modal.style.display = "none";
    }
}

function showMore(){
    showmore.style.display="none";
    showless.style.display="block";
}

function showLess(){
    showmore.style.display="block";
    showless.style.display="none";
}

function showFrnd(){
    main.style.display="none";
    frnd.style.display="block";
}

function All(){
    main.style.display="block";
    frnd.style.display="none";
}

function remove(){

    newsdiv.style.display="none";
    news.style.display="none";
    cancelbtn.style.display="none";
}

function resize(){
    if (window.innerWidth < 550) {
        root.style.setProperty("--margin-left", '0');
    }
    else{
        root.style.setProperty("--margin-left", '270px');
    }
}

navButton.addEventListener('click', e=>{
    if (window.innerWidth > 550) {
        sidebar.classList.toggle('side-trigger');
    }
    else{
        sidebar.classList.toggle('mobile');
        body.classList.toggle('overlay');
    }

    if (sidebar.classList.contains('side-trigger')) {
        root.style.setProperty("--margin-left", '100px');
    }
    else if(sidebar.classList.contains('mobile')){
        root.style.setProperty("--margin-left", '0');
    }
    else{
        root.style.setProperty("--margin-left", '270px');
    }
})

navButtonMobile.addEventListener('click', e =>{
    sidebar.classList.toggle('mobile');
    body.classList.toggle('overlay');
})

body.addEventListener('click', e =>{
    if (e.target.classList.contains('overlay')) {
        sidebar.classList.toggle('mobile');
        body.classList.toggle('overlay');
    }
})