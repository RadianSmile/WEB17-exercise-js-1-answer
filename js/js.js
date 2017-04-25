var todoInputEle    = document.getElementById("todo-input") ;
var submitBtnEle    = document.getElementById("todo-submit") ;
var allDoneBtnEle   = document.getElementById("todo-allDone");
var todoListEle     = document.getElementById("todo-todoList") ;
var todoEles 		= document.getElementsByClassName("list-group-item");

//var todoDataArray = [] ;

submitBtnEle.addEventListener("click",function(e){
	var value = todoInputEle.value;

	if(value){
		var todoData = {};
		todoData.title = value;
		todoData.done = false;

		//todoDataArray.push(todoData);
		var todoEle = createTodoElement(todoData) ;
		todoListEle.appendChild(todoEle);

		todoInputEle.value = "" ;
	}
})

allDoneBtnEle.addEventListener("click",function(e){
	
	var listLength = todoEles.length;
	console.log(listLength);

	for(var i=0;i<listLength;i++){
		if(todoEles[i].done != true){
			todoEles[i].done = true;
			todoEles[i].className += " list-group-item-success";
		}
	}
})

/*function updatetodoListEle (todoDataArray){
	todoListEle.innerHTML = "";
	for (var i = 0 ; i < todoDataArray.length ; i++){
		var todoData = todoDataArray[i] ;
		var todoEle = createTodoElement(todoData);
		todoListEle.appendChild(todoEle);
	}
}*/

function createTodoElement(todoData){
	var todoEle = document.createElement("a");
	todoEle.className = "list-group-item";
	todoEle.textContent = todoData.title;
	if(todoData.done){
		todoEle.className += " list-group-item-success";
	}

	todoEle.addEventListener("click",function(e){
		if (todoData.done != true) {
			todoData.done = true ;
			todoEle.className+= " list-group-item-success";
		}
	});
	return todoEle;
}


