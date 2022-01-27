var isImportant = false;
var isAsideHide = false;

function toggleImportant(){
    let icon = $(".iImportant");
    if(isImportant){
        icon.removeClass("fas").addClass("far");
        isImportant = false;
    }
    else{
        icon.removeClass("far").addClass("fas");
        isImportant = true;

    }
    

}

function showTaskInfo(){
    let aisde = $("aside")
    if(isAsideHide){
        aisde.hide()
        isAsideHide = false;
    }
    else{
        aisde.show();
        isAsideHide = true;
    }

}

/*function Task(title,due,location,description,participants,color){
    this.title = title;
    this.due = due;
    this.location = location;
    this.description = description;
    this.participants = participants;
    this.color = color;

}
*/

function clear(){
    $(".form input,textarea").val("");
    isImportant=true
    toggleImportant()

}

function saveTask(){
    let title = $("#txtTaskTitle").val();
    let due = $("#txtDue").val();
    let location = $("#txtLocation").val();
    let description = $("#txtDescription").val();
    let participants = $("#txtParticipants").val();
    let color = $("#txtColor").val();

    let userTask = new Task(isImportant, title, due, location, description, participants, color);
    console.log(userTask);

    displayTask(userTask);

    clear();
}

function displayTask(task){
    let syntax =`<div class="task">
        <div class="task-title">
            <h5>${task.title}</h5>
            <p>${task.description}</p>
        </div>
        <div class="task-middle">
            <label><i class="fas fa-map-marker-alt"></i> ${task.location}</label>
            <label><i class="far fa-clock"></i> ${task.due}</label>
        </div>
     </div>`;

    $(".task-container").append(syntax)
}


function init(){
    //load data
    $("aside").hide()

    //hook event
    $("#btnSave").click(saveTask);
    
    $(".iImportant").click(toggleImportant)

    $("#btnShow").click(showTaskInfo)

}
window.onload = init;
