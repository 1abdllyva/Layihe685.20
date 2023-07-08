let li=document.querySelectorAll("li");
let image=document.querySelectorAll(".elements div");
// console.log(image);
li.forEach(item=>{
     item.addEventListener("click",function(){    
      let atribut=item.getAttribute("filter"); 
      image.forEach(element=>{
        if(element.className==atribut){
          element.style.display="block"
          // console.log(element.className);
        }
        else{
          element.style.display="none"
        }
      })
      li.forEach(x=>{
        x.classList.remove("active")
      })
      item.classList.add("active")
     })
})
