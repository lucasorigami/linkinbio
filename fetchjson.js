container = document.getElementById("linklist")
popup = document.getElementById("overlay")
// retrieve the data in your JSON file and save it as a variable
let collection;
fetch('https://opensheet.elk.sh/1hIj-l4jj64S-OlMHcGf1igE98lUVvgcpP-LBSYJV8QQ/1')
   .then(response => response.json())
   .then((data) => {
  collection = data, 
  renderTemplate()
})


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
      `<div class="child" onclick="window.location.href = '${item.Link}';">
      <a>${item.Title}</a></div>`;
      // `<a href="${item.Link}"><div class="child">${item.Title}</div></a>`;
  }
  
  
  // insert the dynamic HTML in the website!
  container.innerHTML += html;
};