const nav = document.getElementById('nav');

window.addEventListener('scroll', function(){
    const ScrollY = window.scrollY;
    if(ScrollY > 200){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
})