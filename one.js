//  L0 - Understanding Global and Function Execution Context

let age = 20;
function displayAge() {
  console.log("Age inside displayAge():", age);
}
function changeAge() {
  age = 25; 
  console.log("Age after updating inside changeAge():", age);
}
displayAge();   
changeAge();    
displayAge();   