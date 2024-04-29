function dateFunc(){
    let date = new Date()
let time = date.toLocaleTimeString()
let otherData = date.toDateString()

document.querySelector("#time").innerHTML = time
document.querySelector("#date").innerHTML = otherData
console.log(time);
console.log(otherData);
}


setInterval(dateFunc,1000)