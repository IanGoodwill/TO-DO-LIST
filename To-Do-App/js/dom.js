

let taskInput=document.getElementById("new-task");//Add a new task.
let addButton=document.getElementsByTagName("button")[0];//first button
let incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
let completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks


//New task list item
let createNewTaskElement=function(taskString){

    let listItem=document.createElement("li");

	//input (checkbox)
	let checkBox=document.createElement("input");//checkbx
	//label
	let label=document.createElement("label");//label
	//input (text)
	let editInput=document.createElement("input");//text
	//button.edit
	let editButton=document.createElement("button");//edit button

	//button.delete
	let deleteButton=document.createElement("button");//delete button

	label.innerText=taskString;

	//Each elements, needs appending
	checkBox.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";



	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



let addTask=function(){
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	let listItem=createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}

//Edit an existing task.

let editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");


let listItem=this.parentNode;

let editInput=listItem.querySelector('input[type=text]');
let label=listItem.querySelector("label");
let containsClass=listItem.classList.contains("editMode");
		//If class of the parent is .editmode
		if(containsClass){

		//switch to .editmode
		//label becomes the inputs value.
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		//toggle .editmode on the parent.
		listItem.classList.toggle("editMode");
}




//Delete task.
let deleteTask=function(){
		console.log("Delete Task...");

		let listItem=this.parentNode;
		let ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);

}


//Mark task completed
let taskCompleted=function(){
		console.log("Complete Task...");
	
	//Append the task list item to the #completed-tasks
	let listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);

}


let taskIncomplete=function(){
		console.log("Incomplete Task...");
//Mark task as incomplete.
	//When the checkbox is unchecked
		//Append the task list item to the #incomplete-tasks.
		let listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}



let ajaxRequest=function(){
	console.log("AJAX Request");
}










