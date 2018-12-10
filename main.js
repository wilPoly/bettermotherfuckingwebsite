//Pop-up pour rickroller
function popUp(){
  if (confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please.")) {
    location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
}
//Timer pour le pop-up
let timer = setTimeout(popUp, 10000);

let bouton_1 = document.getElementById("methode_1");
let bouton_2 = document.getElementById("methode_2");

bouton_1.addEventListener("click", function(){
  let sheet = document.createElement("style")
  sheet.innerHTML = "p {color: blue; font-family: papyrus} h1, h2, h3 {color:green; font-family: 'Comic Sans'}"
  document.body.appendChild(sheet);
})

bouton_2.addEventListener("click", function(){
  let paragraph = document.querySelectorAll("p")
  let headings = document.querySelectorAll("h1, h2, h3")

  for (i = 0; i < paragraph.length; i++){
    paragraph[i].style.color = "red";
    paragraph[i].style.fontFamily = "sans-serif";
  }

  for (i = 0; i < headings.length; i++){
    headings[i].style.color = "blue";
    headings[i].style.fontFamily = "mono"
  }
})
