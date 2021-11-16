
const firebaseConfig = {
    apiKey: "AIzaSyA6cgemqckNsnfuCqZ1XY22AaLStTuS7rU",
    authDomain: "language-shop-25351.firebaseapp.com",
    projectId: "language-shop-25351",
    storageBucket: "language-shop-25351.appspot.com",
    messagingSenderId: "232480020898",
    appId: "1:232480020898:web:7644b0d8fe7e749b953afb",
    measurementId: "G-FSZ5GF166X"
};

var push_to_firebase = function(data){
    const app = firebase.initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
    const storageService = firebase.storage();
    const storageRef = storageService.ref();
    
    //alert("Thanks for sending a message. I'll try and get back to you as soon as possible.")
    var db = firebase.firestore();

    db.collection("messages").add({
        name: data["name"],
        email: data["email"],
        subject: data["sbj"],
        message: data["msg"],
        timestamp: Date.now()
    })
    .then(function(docRef){
        console.log("Message sent, ID: ", docRef.id);
        //window.location.href = "/thank-you.html";
        //location.reload();
    })
    .catch(function(err){
        console.error("Message could not sent: ", error);
        alert("Sorry, don't know what happened. Try later :(")

    });
}

var contact_submit = function(){
    
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var sbj = document.getElementById("subject")
    var msg = document.getElementById("message");
    
    var data = {
        "name": name.value,
        "email": email.value,
        "sbj": sbj.value,
        "msg": msg.value
    }

    let emailVal = validateEmail(email);

    if((name.value.lenght != '' ) && (msg.value.lenght != '') && (emailVal == false)){
        push_to_firebase(data)
    }
}

function validateEmail(email){
    
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let s = email.value;
    if (regex.test(s)) {
        
        emailError = false;
    }
    else {
        
        emailError = true;
    }

    return emailError;
}
    
document.getElementById("contact-submit").addEventListener("click", contact_submit);
