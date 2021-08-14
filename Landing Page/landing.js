
   
   let mousecursor = document.querySelector('.li')
   document.querySelector("p").addEventListener("mouseover",()=>{
    mousecursor.classList.add('li2') 
   
   });
   document.querySelector("p").addEventListener("mouseleave", () => {
    mousecursor.classList.remove('li2') 

 });


document.querySelectorAll("a").forEach(link => {
  
  
    
    link.addEventListener("mouseover", () => {
        mousecursor.classList.add('li2') 
  
        
    

    });
    link.addEventListener("mouseleave", () => {
        mousecursor.classList.remove('li2') 
    
     });
    
    
   
     });

     
window.addEventListener("mousemove", function main(e) {
    mousecursor.style.left = e.pageX + 'px';
    mousecursor.style.top = e.pageY + 'px';
})


