
function addUser() 
{
user_name=document.getElementById("userName").Value;
localStorage.setItem("userName",user_name);
window.location="kwitter_room.html";
}

