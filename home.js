
function login(){
    const adminUsername = ["user1","user2","user3"];
    const adminPassword = ["user1" , "user2" , "user3"];
    
    let username = document.getElementById("UserName").value;
    let password = document.getElementById("password").value;

    for(i=0; i<3 ; i++){
        if(adminPassword[i]== password && adminUsername[i] == username){
            window.location.href="neworder.html";
            alert("Login successful!");
            break;
        }else{
            document.getElementById('UserName').value = '';
            document.getElementById('password').value = '';
            alert("Wrong credentials. Please try again.");                      
        }
        
    }
}