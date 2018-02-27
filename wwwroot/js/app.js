"use strict";
var greeting = App.Talk.GetGreeting(new Date());
var p = document.getElementById("hello");
if (p != null) {
    p.innerHTML = greeting;
}
