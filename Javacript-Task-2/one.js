function vote_fntcn(){
    let name=prompt("Enter Your Name : ");
    let age=prompt("Enter Your Age : ");
    if(age>=18){
        alert("🕺Vanakam da "+name+" ,You are eligible to Vote");
    }
    else{
        alert("😞Sorry da nanba "+name+"👶"+" ,You are not eligible to Vote🔞");
    }
}

vote_fntcn();
let result = confirm("Do You Want Re-Enter the Age Correctly ⁉️");
if (result){
    vote_fntcn();
}
else{
    alert("Good Bye👋🙂")
}
