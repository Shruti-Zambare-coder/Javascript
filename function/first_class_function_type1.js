function sayHello(){
    console.log("Good morning everyone");
}
function greetUser(func) {
    func();
    console.log("Good Morning");
    func();

}
greetUser(sayHello);