//your code here
const images = document.querySelectorAll('.image');

let draggedElement = null;

images.forEach((image) => {
  // Drag Start
  image.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    e.target.classList.add('selected');
  });

  // Drag End
  image.addEventListener('dragend', (e) => {
    e.target.classList.remove('selected');
    draggedElement = null;
  });

  // Drag Over
  image.addEventListener('dragover', (e) => {
    e.preventDefault(); // Prevent default to allow dropping
  });

  // Drop
  image.addEventListener('drop', (e) => {
    e.preventDefault();

    if (draggedElement && draggedElement !== e.target) {
      // Swap content
      const draggedBackground = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedBackground;
    }
  });
});

