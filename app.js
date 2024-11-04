
let icon = document.querySelector('.icon')

icon.addEventListener('click', function(){
    document.body.classList.toggle('darkMood')


    if( document.body.classList.contains('darkMood')){

        icon.innerHTML = '<i class="fa-regular fa-sun fa-2xl"></i>'
    }else{
        icon.innerHTML = '<i class="fa-regular fa-moon fa-2xl"></i>'
    }
}

)