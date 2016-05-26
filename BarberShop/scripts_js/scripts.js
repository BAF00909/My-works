var popup = document.querySelector('.popup');
var popup_map = document.querySelector('.popup_map');
var close = document.querySelector('.close');
var close_map = document.querySelector('.close_map');
var linck = document.querySelector('.login');
var linck_map = document.querySelector('.where');

linck.addEventListener('click', function(event){
    event.preventDefault();
    popup.classList.add('show');
});

close.addEventListener('click', function(event){
    event.preventDefault();
    if(popup.classList.contains('show')){
        popup.classList.remove('show');
    }
});

linck_map.addEventListener('click', function(event){
    event.preventDefault();
    popup_map.classList.add('show');
});

close_map.addEventListener('click', function(event){
    event.preventDefault();
    if(popup_map.classList.contains('show')){
        popup_map.classList.remove('show');
    }
});