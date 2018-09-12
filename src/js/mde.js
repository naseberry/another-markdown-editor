let simplemde = new SimpleMDE({
  element: document.getElementById('mde'),
  autofocus: true,
  toolbar: [ 'bold', 'italic', 'heading', '|', 'quote', 'unordered-list', 'ordered-list', '|', 'link', 'image', 'table', 'horizontal-rule', '|', 'preview', 'side-by-side', 'fullscreen', '|', 'guide', '|', 'code' ]
});

simplemde.value("# Welcome to AME\n A simple cross platform Markdown editor built with [Electron](https://electronjs.org/) and [SimpleMDE](https://simplemde.com/)"); // set start-up content
simplemde.toggleSideBySide(simplemde); // open preview on load
