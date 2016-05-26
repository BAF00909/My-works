
var slade_1 = document.querySelector('.slider');
var slade_2 = document.querySelector('.slider_2');
var left = document.querySelector('.left_slide');
var right = document.querySelector('.right_slide');
            
left.addEventListener('click', function (event) {            
    if (slade_1.classList.contains('next') && slade_2.classList.contains('show')) {
        event.preventDefault();
        slade_1.classList.remove('next');
        slade_2.classList.remove('show'); }else{
            
        event.preventDefault();   
        slade_1.classList.add('next');
        slade_2.classList.add('show');
        }
        });
            
right.addEventListener('click', function (event) {            
    if (slade_1.classList.contains('next') && slade_2.classList.contains('show')) {
        event.preventDefault();
        slade_1.classList.remove('next');
        slade_2.classList.remove('show'); }else{
            
        event.preventDefault();   
        slade_1.classList.add('next');
        slade_2.classList.add('show');
        }
        });

