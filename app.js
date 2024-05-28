let todo = [];
let req = prompt("Please Enter the reuest");

while(true){
  if(req == "quit"){
    console.log("quiting app");
    break;
  }
  if(req == "list"){
    console.log("-------------");
    for(let i=0; i<todo.length; i++){
      console.log(i,todo[i]);
    }
    console.log("-------------");
  }
  else if(req == "add"){
    let task = prompt("Please Enter the task you want to add");
    todo.push(task);
    console.log("task added");
  }
  else if (req == "delete"){
    let idx = prompt("Please enter the index");
    todo.splice(idx);
    console.log("task delteted");
  }
  else{
    console.log("Wrong request");
  }
  req = prompt("Please enter you request");
}