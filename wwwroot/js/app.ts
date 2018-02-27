let greeting = App.Talk.GetGreeting(new Date());
let p = document.getElementById("hello");
if (p!=null) {
    p.innerHTML = greeting;
}
