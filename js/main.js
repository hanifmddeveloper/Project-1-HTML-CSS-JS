let manu = document.querySelector(".manu")
let back2Top = document.querySelector(".back2Top")


window.addEventListener("scroll",()=>{
    let scrolling = window.scrollY
    if(scrolling > 50){
        manu.classList.add("bggg")
    }
    else{
        manu.classList.remove("bggg")
    }
})

back2Top.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,behavior:'smooth'
    })
})

window.addEventListener("scroll",()=>{
    let scrolling = window.scrollY
    console.log(scrolling);
    
    if(scrolling > 40 ){
        back2Top.style.display = "block"
    }else
    {
        back2Top.style.display = "none"
    }
})

let type = document.querySelector(".type")
let typeText = type.innerHTML
let typeArr = typeText.split(" ")
// let type.innerHTML= ""
let typing = 0

function typejs(){
    if(typing < typeText.length){
        type.innerHTML += typeText.charAt(typing)
        typing++
        typeArr = typeText.split(" ")
    }
    else{
        typeArr.pop()
        type.innerHTML = typeArr.join(" ")
        if(typeArr.length == 0 ){
         typing = 0
        }

        }
    }
    setInterval(()=>{
    typejs()
    },300)

    // count part 

    let counter = document.querySelectorAll(".counter")
let countArr = Array.from(counter)

countArr.map((item)=>{
    let count=0
  function countadd(){
    count++
    if(count< item.dataset.number){
        
        item.innerHTML = count

    }
   
}
setInterval(()=>{
    countadd()
},item.dataset.speed)
})

// pricing part 

let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let list = document.querySelector(".list")
let ubtn = document.querySelector(".ubtn")

let todo = []
let id;

btn.addEventListener("click",()=>{
    todo.push(input.value)
    addTodo()
    input.value = ""
    
})

ubtn.addEventListener("click",()=>{
   todo[id] = input.value
    addTodo()
    input.value = ""
})

function addTodo(){
    list.innerHTML = ""
   todo.map((item)=>{
    list.innerHTML += `<li>${item}

    
    <button class="edit">Edit</button>
      
    <button class="delete">Delete</button>
    </li>`
     let delete1 = document.querySelectorAll(".delete")
     let deleteArr = Array.from(delete1)
     deleteArr.map((ditem,index)=>{
        ditem.addEventListener("click",()=>{
           todo.splice(index,1)
             addTodo()
        }) 
        
         
     })

     let edit = document.querySelectorAll(".edit")
     let editArr = Array.from(edit)
     editArr.map((eitem, i)=>{
        eitem.addEventListener("click",()=>{
            input.value = todo[i]
            id = i
            addTodo()
         })
     })
    

   })
}