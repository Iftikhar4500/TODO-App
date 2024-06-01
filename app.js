// let todo = [];
// let req = prompt("Please Enter the reuest");

// while(true){
//   if(req == "quit"){
//     console.log("quiting app");
//     break;
//   }
//   if(req == "list"){
//     console.log("-------------");
//     for(let i=0; i<todo.length; i++){
//       console.log(i,todo[i]);
//     }
//     console.log("-------------");
//   }
//   else if(req == "add"){
//     let task = prompt("Please Enter the task you want to add");
//     todo.push(task);
//     console.log("task added");
//   }
//   else if (req == "delete"){
//     let idx = prompt("Please enter the index");
//     todo.splice(idx);
//     console.log("task delteted");
//   }
//   else{
//     console.log("Wrong request");
//   }
//   req = prompt("Please enter you request");
// }




//Using bubbling and Delegation Concept

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){    
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete Task";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);////Adding Item inside the ul 
    inp.value = "";
});

//using Event Delegation
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});

