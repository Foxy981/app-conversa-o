function addUser()

    {strUserName = document.getElementById("txtUserName").value;
  
    localStorage.setItem("dbUserName************************", strUserName);
    
      window.location = "kwitter_room.html";}