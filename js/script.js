let d = new Date();
document.body.innerHTML = "<h4>Today's date is " + d + "</h4>"

for(i = 0; i < 10; i++){
    document.body.innerHTML = "<div class="card">"
    document.body.innerHTML += "<img src="img_avatar.png" alt="Avatar" style="width:100%">"
    document.body.innerHTML += "<div class="container">"
    document.body.innerHTML += "<h4><b>John Doe</b></h4>"
    document.body.innerHTML += "<p>Architect & Engineer</p>"
    document.body.innerHTML += "</div>"
    document.body.innerHTML += "</div>"
}
