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
      if (dragDuration <= 250) {
            // Navigate to the link
            window.location.href = "https://google.com";
        }
        else {
            dragStartTimestamp = 0
        }
    });
});
