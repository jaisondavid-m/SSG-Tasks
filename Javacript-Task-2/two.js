let user = prompt("Enter username:");
let pass = prompt("Enter password:");


if (user === "User07" && pass === "password") {
    let borrow = confirm("Do you want to borrow a book?");
    if (borrow) {
        let category = prompt("Choose a book category:\n1 = Tamil\n2 = English\n3 = Maths\n4 = Science\n5 = Social");
        switch (category) {
           case "1":
              alert("You selected Tamil Book");
              break;
            case "2":
              alert("You selected English Book");
              break;
            case "3":
              alert("You selected Maths Book");
              break;
            case "4":
              alert("You selected Science Book");
              break;
            case "5":
              alert("You selected Social Book");
              break;
            default:
              alert("Invalid input");
              break;
        }
    } 
    else {
       alert("Thank You for Coming");
    }
} else {
    alert("User Name or Password is Invalid !!");
}