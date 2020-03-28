
//Set the click handler to the addTask function.
//addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


let bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
//select ListItems children
    let checkBox=taskListItem.querySelector("input[type=checkbox]");
    let editButton=taskListItem.querySelector("button.edit");
    let deleteButton=taskListItem.querySelector("button.delete");


			//Bind editTask to edit button.
			editButton.onclick=editTask;
			//Bind deleteTask to delete button.
			deleteButton.onclick=deleteTask;
			//Bind taskCompleted to checkBoxEventHandler.
			checkBox.onchange=checkBoxEventHandler;
}
console.log( incompleteTaskHolder.children );

console.log( completedTasksHolder.children );

//cycle over incompleteTaskHolder ul list items
	//for each list item
	//for (let i=0; i<incompleteTaskHolder.children.length;i++){

		//bind events to list items chldren(tasksCompleted)
		//bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	//}




//cycle over completedTasksHolder ul list items
	//for (let i=0; i<completedTasksHolder.children.length;i++){
	//bind events to list items chldren(tasksIncompleted)
		//bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	//}


