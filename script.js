const images = document.querySelectorAll('.image');
let draggedElement = null;

images.forEach((image) => {
  image.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    // Add a 'dragging' class to style the image when it is being dragged
    e.target.classList.add('dragging');
  });

  image.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
    draggedElement = null;
  });

  image.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow the drop
  });

  image.addEventListener('drop', (e) => {
    e.preventDefault();

    if (draggedElement && draggedElement !== e.target) {
      const draggedBackground = draggedElement.style.backgroundImage || "";
      const targetBackground = e.target.style.backgroundImage || "";

      // Swap the background images
      draggedElement.style.backgroundImage = targetBackground;
      e.target.style.backgroundImage = draggedBackground;

      // Add more safety checks before swapping if needed
      // If you're dealing with the DOM elements, ensure both are valid.

      // Swap the order in flex layout to change their position in the container
      const draggedPosition = draggedElement.style.order;
      draggedElement.style.order = e.target.style.order;
      e.target.style.order = draggedPosition;
    }
  });
});


