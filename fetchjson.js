container = document.getElementById("linklist")
popup = document.getElementById("overlay")
let eggLink
// retrieve the data in your JSON file and save it as a variable
let collection;
fetch('https://opensheet.elk.sh/1hIj-l4jj64S-OlMHcGf1igE98lUVvgcpP-LBSYJV8QQ/1')
   .then(response => response.json())
   .then((data) => {
  collection = data, 
  renderTemplate()
})

function showOverlay() {
  popup.style.display = "flex";
}

function hideOverlay() {
  popup.style.display = "none";
  console.log("hellos")
}

function renderTemplate() {
  // create a string where your dynamic HTML will be stored
  let html = '';
  
  
  for (let item of collection) {
    html +=
      // this is where you define you template
      `<div class="child" onclick="eggLink = '${item.Link}'; showOverlay(); console.log(eggLink);">
      <a>${item.Title}</a></div>`;
      // `<a href="${item.Link}"><div class="child">${item.Title}</div></a>`;
  }
  
  // insert the dynamic HTML in the website!
  container.innerHTML += html;
};


// load link on egg click

document.addEventListener("DOMContentLoaded", function () {
  const modelViewer = document.getElementById("myModel");
  let dragStartTimestamp = 0;

  modelViewer.addEventListener("mousedown", (event) => {
      
      dragStartTimestamp = event.timeStamp;
      console.log(dragStartTimestamp)
  });

  modelViewer.addEventListener("mouseup", (event) => {
    const dragDuration = event.timeStamp - dragStartTimestamp;
  console.log(dragDuration)
    if (dragDuration <= 100) {
          // Navigate to the link
          window.location.href = eggLink;
      }
      else {
          dragStartTimestamp = 0
      }
  });
});
