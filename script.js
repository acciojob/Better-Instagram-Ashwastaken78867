const images = document.querySelectorAll('.image');

let draggedElement = null;

images.forEach((image) => {
  image.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    e.target.classList.add('selected');
  });

  image.addEventListener('dragend', (e) => {
    e.target.classList.remove('selected');
    draggedElement = null;
  });

  image.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  image.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement && draggedElement !== e.target) {
      const draggedBackground = draggedElement.style.backgroundImage || "";
      const targetBackground = e.target.style.backgroundImage || "";

      draggedElement.style.backgroundImage = targetBackground;
      e.target.style.backgroundImage = draggedBackground;
    }
  });
});
