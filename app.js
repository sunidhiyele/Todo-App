let input=document.querySelector("input");
let addBtn=document.querySelector("#add-btn");
let task=document.querySelector(".task");
let p=document.querySelector("p");
addBtn.addEventListener("click",()=>{
   if(input.value.trim() != 0){
   let item=document.createElement("div");
   item.classList.add("item");   
   item.innerHTML=
                  `  
                    <p >${input.value}</p>
                    <div class="btns">
                       
                         <i class="fa-solid fa-trash"></i>
                    </div>`
                      

                    task.appendChild(item);
                    input.value="";
                    saveData();
   }
   else{
      alert("please enter task to add");
   }               
});

task.addEventListener("click",(e)=>{
       if(e.target.classList.contains("fa-trash")){
         e.target.parentElement.parentElement.remove();
         saveData();
       }

       if(e.target.tagName ==="p" || e.target.closest("p")){
               let targetPara=e.target.tagName === "p" ? e.target:e.target.closest("p");
               targetPara.classList.toggle("checked");
               saveData();
   }

  
});

function saveData(){
   localStorage.setItem("tasks",task.innerHTML);
};

function showData(){
   task.innerHTML=localStorage.getItem("tasks");
};

showData();


