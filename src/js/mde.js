let simplemde = new SimpleMDE({
  element: document.getElementById('mde'),
  autofocus: true,
  forceSync: true,
  toolbar: [ 'bold', 'italic', 'heading', '|', 'quote', 'unordered-list', 'ordered-list', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'side-by-side', 'fullscreen', '|', 'guide', '|', 'code' ],
});

simplemde.toggleSideBySide(simplemde); // open preview on load