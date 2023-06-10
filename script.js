const slides= document.querySelectorAll(".slide")
var counter=0;

slides.forEach(
    (slide,index)=>{
        slide.style.left= `${index*100}%`
    }
)

const slideimg=()=>{
    slides.forEach(
        
        (slide)=>{
           
             slide.style.transform= `translateX(-${counter *100}%)`
        }
    )
}

const goPrev=()=>{
    counter--;
    slideimg()
}
const goNext=()=>{
    if(counter<7){
     counter++;   
    }
    
    slideimg();
}