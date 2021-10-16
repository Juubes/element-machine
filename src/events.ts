const canvas: HTMLDivElement = document.querySelector("#canvas-area")!;

let selectedElement: Elem | null;

let elemMap = {};

canvas.addEventListener("mouseup", (event) => {
  selectedElement = null;
});

canvas.addEventListener("mousedown", (event: MouseEvent) => {
  event.preventDefault();

  selectedElement && (selectedElement.x = event.clientX);
});

canvas.addEventListener("mousemove", (event) => {
  // selectedElement = event.x;
});
