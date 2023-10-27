const ctx = canvas.getContext("2d");

// Object to hold mouse coords
const lookat = {x: 150, y: 75};
// details need to make eye look at mouse coords
const eye = {
  radius: 50,
  iris: 40,
  // limits of movement
  limMin: -0.1,
  limMax: 1.1,
};

// add mouse move listener to whole page
addEventListener("mousemove",e => {

    // make mouse coords relative to the canvas  ignoring scroll in this case
    const bounds = canvas.getBoundingClientRect();
    lookat.x = e.pageX - bounds.left;// - scrollX;
    lookat.y = e.pageY - bounds.top;// - scrollY;    
   
    ctx.clearRect(0, 0, 300, 150);
    drawEyes(lookat);
});


drawEyes(lookat);
function drawEyes(lookat) {
  var {x,y} = lookat;
  
  // normalise lookat range from 0 to 1 across and down canvas
  x /= canvas.width;
  y /= canvas.height;
  
  // limit eye movement to -0.1 to 1.1  or what ever you prefer
  x = x < eye.limMin ? eye.limMin : x > eye.limMax ? eye.limMax : x;  
  y = y < eye.limMin ? eye.limMin : y > eye.limMax ? eye.limMax : y;  
  
  // move lookat so that 0.5 is center
  x -= 0.5;
  y -= 0.5;
  
  // get range of movement of iris
  const range = (eye.radius - eye.iris) * 2;
  // scale the lookats to the range of movement
  x *= range;
  y *= range;
  
  

  // draw outer eyes  left, right
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(75, 75, eye.radius, 0, Math.PI * 2, false);
  ctx.moveTo(225 + eye.radius, 75);
  ctx.arc(225, 75, eye.radius, 0, Math.PI * 2, false);
  ctx.fill();  
  
  // use eyes to create a clip so iris does not draw outside the eye.
  // first save canvas state so clip can be turned off at end
  ctx.save();
  // turn on clip which will use the two circles currently the active path
  ctx.clip();
  
  // draw  iris & pupil are offset by x,y within the clip

  //iris left, right
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(75 + x, 75 + y, eye.iris, 0, Math.PI * 2, false);
  ctx.moveTo(225 + x + eye.iris, 75 + y);
  ctx.arc(225 + x, 75 + y, eye.iris, 0, Math.PI * 2, false);
  ctx.fill();  
  

  
  // turn the clip off by restoring canvas state 
  ctx.restore();
}

