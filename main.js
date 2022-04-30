
// nav ---------------
let nav =document.querySelector('nav'),
nav_open=document.querySelector(".nav-list"),
nav_cancel=document.querySelector(".nav-cancel")
nav_open.addEventListener('click',()=>{
  nav.style.cssText=`display:block;`
  nav_open.style.display='none'
  nav_cancel.style.display='flex'
})
nav_cancel.addEventListener('click',()=>{
  nav.style.cssText=`display:none;`
  nav_open.style.display='flex'
  nav_cancel.style.display='none'
})

// top-message -----------------------
let cancelBtnTop=document.querySelector("#cancelBtnTop"),
note=document.querySelector('.note');
cancelBtnTop.addEventListener("click",()=>{
  note.style.display='none'
})

// 1 section slider ---------

let left_arr=document.querySelector(".left-arr"),
right_arr=document.querySelector(".right-arr"),
slider_2=document.querySelector(".slider-2"),
slider_1=document.querySelector(".slider-1");


left_arr.addEventListener("click",()=>{
  slider_1.style.cssText=`display:flex;`
  slider_2.style.cssText=`display:none;`
})
right_arr.addEventListener("click",()=>{
  slider_1.style.cssText=`display:none;`
  slider_2.style.cssText=`display:flex;`
})


// section 3 -----------------
let Blood_pressure=document.querySelector("#Blood_pressure"),
Face_masks=document.querySelector("#Face_masks"),Toothbrushes=document.querySelector("#Toothbrushes"),
small_cont_2=document.querySelectorAll(".small-cont-2");
let choose_item =document.querySelectorAll("#choose_item li")

Blood_pressure.classList.add("active")
small_cont_2[0].style.display='grid'

for(let i=0;i < choose_item.length;i++){
  choose_item[i].addEventListener("click",(el)=>{
    choose_item.forEach(e=>{
      e.classList.remove("active")
    })
    el.currentTarget.classList.add("active")
  })
}

Blood_pressure.addEventListener("click",()=>{
  small_cont_2.forEach(e=>{
    e.style.display='none'
  })
  small_cont_2[0].style.display='grid'
})
Face_masks.addEventListener("click",()=>{
  small_cont_2.forEach(e=>{
    e.style.display='none'
  })
  small_cont_2[1].style.display='grid'
})
Toothbrushes.addEventListener("click",()=>{
  small_cont_2.forEach(e=>{
    e.style.display='none'
  })
  small_cont_2[2].style.display='grid'

})