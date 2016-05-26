var link = document.querySelectorAll(".by");
var modal_w = document.querySelector(".modal_window");
var close_mw=document.querySelector('.close');
        close_mw.addEventListener('click',function(event){
              if(modal_w.classList.contains('show')) { 
            event.preventDefault();
            modal_w.classList.remove('show')};});
        
        for(i=0;i<=link.length;i=i+1){
            link[i].addEventListener('click',function(event){
                if(!modal_w.classList.contains('show')){
                     event.preventDefault();
                     modal_w.classList.add('show');}
                  else{
                    modal_w.classList.remove('show');
                    }
            }
            );}

