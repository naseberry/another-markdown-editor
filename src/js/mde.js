let simplemde = new SimpleMDE({
  element: document.getElementById('mde'),
  autofocus: true,
  forceSync: true

  // ToDo: Custom ToolBar
});

simplemde.toggleSideBySide(simplemde); // open preview on load