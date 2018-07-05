let simplemde = new SimpleMDE({
  element: document.getElementById('mde'),
  autofocus: true,
  toolbar: [ 'bold', 'italic', 'heading', '|', 'quote', 'unordered-list', 'ordered-list', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'side-by-side', 'fullscreen', '|', 'guide', '|', 'code' ],
  placeholder: 'Welcome to AME'
});

simplemde.toggleSideBySide(simplemde); // open preview on load
