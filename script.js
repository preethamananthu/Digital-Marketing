

window.onload=function digital_fn(){        //exectues after the page loads
    
    //toggle button
    let toggle=document.querySelector("#nav .toggle-btn")
    let collapse=document.querySelector("#nav .collapse")
    
    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active');        //adds 'active to the class. If already present, removes it.
    });

}