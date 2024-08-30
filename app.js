let todo = [];

let request = prompt("Enter our request:").toLowerCase();

while(true){
    
    if(request == "quit"){
        console.log("Quiting the app.");
        break;
    }

    else if(request == "add"){
        let todoAdd = prompt("Enter the todo list:").toLowerCase();  
        while(todoAdd !="exit"){
            if(todoAdd == "exit"){
                break;
            }else{
                todo.push(todoAdd);
            }
            todoAdd = prompt("Enter the todo again").toLowerCase();
        }
    }else if(request == "delete"){
        let deleteNum = prompt("Enter which no. to delete?");

        while(deleteNum !="exit"){
            if(deleteNum == "exit"){
                console.log("The lsit has been deleted.");
                break;
            }else if(deleteNum == "All"){
                todo.splice(0,todo.length);
                console.log("all list has been deleted");
                break;
            }else if(deleteNum >= todo.length || deleteNum < 1){
                console.log("INvalid");
                // break;
            
            }else{
                todo.splice(deleteNum-1,1);  
            }
            deleteNum = prompt("Enter which no. to delete?");
        }
        
    }else if(request == "list"){
        if(todo.length == 0){
            console.log("TOdo list is empty.");
        }else{
            console.log("______________________");
            for(let i=0; i<todo.length; i++){
                console.log(i+1, todo[i]);
            }
            console.log("______________________");
        }
    }else{
        console.log("Wrong request.");
    }
    request = prompt("Enter our request:").toLowerCase();
}
