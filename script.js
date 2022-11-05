
const image = document.querySelector(".image");


// setInterval(myTimer, 3000);

// function myTimer(){
//         console.log("hello");
//     image.classList.toggle("image-change");
//     image.classList.toggle("image-change1");
    
// };


// setInterval(()=>{

//    console.log("hello");
//     image.classList.toggle("image-change");
//     other();

// }, 3000);



     var img_array=["url('./images/airplane3.jpg')" , "url('./images/airplane2.jpg')" , "url('./images/airplane.jpg')" , "url('./images/john-mcarthur-X_MOr6oa4-k-unsplash.jpg')"];
     
    var index=0;

    setInterval(timer, 3000);
   
    function timer() { 
     image.style.backgroundImage = img_array[index]; 
     index++;
     if(index===4 ) index=0;
       
    }



    const dark_btn=document.querySelector(".dark");
    
    const body=document.querySelector(".body");
    const navlinks=document.querySelector(".navlinks");
    const navbar=document.querySelector(".navbar");
    const covid=document.querySelector(".covid");

 
   
    

    dark_btn.addEventListener("click",()=>{
    
    const initial = 'DARK';
      
     if(dark_btn.textContent.includes(initial)){
          dark_btn.textContent='LIGHT'; 
          dark_btn.style.backgroundColor = 'grey'; 
     }
     else{

          dark_btn.textContent= initial;
          dark_btn.style.backgroundColor = 'white';  
     }
     
    body.classList.toggle("body-dark");
    navlinks.classList.toggle("navlinks-dark");
    navbar.classList.toggle("navbar-dark"); 
    covid.classList.toggle("covid-dark"); 
    box.classList.toggle("box-dark"); 
     
     
    
      
    });



    