let na=document.getElementById("name");
let comm = document.getElementById("comment");

function submithandler(){
    let name = na.value;
    let comment = comm.value;
    
    let date = new Date();
    let newDate =  `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} `
    let newtime =    date.getHours()+":" + date.getMinutes()+":"+date.getSeconds();
    let dateele = newDate + " " + newtime;

    let  div = document.createElement("div");
    div.setAttribute("id" , "content-add-list");
    div.innerHTML =   `
    <div class="content-add" >
        <div class="content-top">
        <img
          src="data:image/png;base64,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"
          alt="" />
        <span>${name}</span>
        <p>${comment}</p>
          
      </div>
      <div class="content-bottom" id="conn">
        <p><i class="fa-solid fa-pen"></i> <i class="fa-solid fa-trash" onclick="deleteHandler()"></i> 
           <i class="fa-solid fa-heart" id="like"></i>
        </p>        
      </div>
      <div id="conn">
      ${dateele}
      </div>
    </div>`
document.getElementById("whole-content-body").appendChild(div);
}

const deleteHandler=()=>{
    const element = document.getElementById("content-add-list")
    element.remove();
}

let liked = document.querySelectorAll("#like");
console.log(liked);
for(const like of liked){
    like.addEventListener("click" , ()=>{
        like.style.color="red";
    })
    like.addEventListener("dblclick" , ()=>{
            like.style.color="white";
    })
}



    


   


