---
title: Using files from web applications
slug: Web/API/File_API/Using_files_from_web_applications
---

Usando a File API adicionada ao DOM em HTML5, agora é possível para conteúdo web solicitar ao usuário para selecionar arquivos locais, e então ler o conteúdo desses arquivos. Essa seleção pode ser feita usando um elemento HTML {{HTMLElement("input") }} ou por arrastar e soltar.

Se você quiser usar a DOM File API através de extensões ou outro código chrome, você pode; Na verdade, há algumas funcionalidades adicionais para se estar ciente. Veja [Usando a DOM File API em código chrome](/pt-BR/Extensions/Using_the_DOM_File_API_in_chrome_code) para detalhes.

## Selecionando arquivos usando HTML

Selecionar um único arquivo para uso com a File API é simples:

```
<input type="file" id="input" onchange="handleFiles(this.files)">
```

Quando um usuário seleciona um arquivo, a função `handleFiles()` é chamada com um objeto {{ domxref("FileList") }} contendo o objeto {{ domxref("File") }} representando o arquivo selecionado pelo usuário.

If you want to let the user select multiple files, simply use the `multiple` attribute on the `input` element:

```
<input type="file" id="input" multiple onchange="handleFiles(this.files)">
```

In this case, the file list passed to the `handleFiles()` function contains one {{ domxref("File") }} object for each file the user selected.

### Using hidden file input elements using the click() method

Starting in Gecko 2.0, you can hide the admittedly ugly file {{ HTMLElement("input") }} element and present your own interface for opening the file picker and displaying which file or files the user has selected. You can do this by styling the input element with `display:none` and calling the {{ domxref("element.click","click()") }} method on the {{ HTMLElement("input") }} element.

Consider this HTML:

```
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
<a href="#" id="fileSelect">Select some files</a>
```

The code that handles the `click` event can look like this:

```js
var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener(
  "click",
  function (e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  },
  false,
);
```

Obviously you can style the new button for opening the file picker as you wish.

### Dynamically adding a change listener

If your input field was created using a JavaScript library such as [jQuery](http://www.jquery.com/), you'll need to use {{ domxref("element.addEventListener()") }} to add the `change` event listener, like this:

```js
var inputElement = document.getElementById("inputField");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  var fileList = this.files;

  /* now you can work with the file list */
}
```

Note that in this case, the `handleFiles()` function looks up the file list instead of accepting a parameter, since event listeners added in this way can't accept an input parameter.

## Using object URLs

Gecko 2.0 introduces support for the DOM {{ domxref("window.URL.createObjectURL()") }} and {{ domxref("window.URL.revokeObjectURL()") }} methods. These let you create simple URL strings that can be used to reference any data that can be referred to using a DOM {{ domxref("File") }} object, including local files on the user's computer.

When you have a {{ domxref("File") }} object you'd like to reference by URL from HTML, you can create an object URL for it like this:

```
var objectURL = window.URL.createObjectURL(fileObj);
```

The object URL is a string identifying the {{ domxref("File") }} object. Each time you call {{ domxref("window.URL.createObjectURL()") }}, a unique object URL is created, even if you've created an object URL for that file already. Each of these must be released. While they are released automatically when the document is unloaded, if your page uses them dynamically, you should release them explicitly by calling {{ domxref("window.URL.revokeObjectURL()") }}:

```
window.URL.revokeObjectURL(objectURL);
```

## Selecting files using drag and drop

You can also let the user drag and drop files into your web application.

The first step is to establish a drop zone. Exactly what part of your content will accept drops may vary depending on the design of your application, but making an element receive drop events is easy:

```js
var dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In this example, we're turning the element with the ID `dropbox` into our drop zone. This is done by adding listeners for the `dragenter`, `dragover`, and `drop` events.

We don't actually need to do anything with the `dragenter` and `dragover` events in our case, so these functions are both simple. They just stop propagation of the event and prevent the default action from occurring:

```js
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
```

The real magic happens in the `drop()` function:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
```

Here, we retrieve the `dataTransfer` field from the event, then pull the file list out of it, passing that to `handleFiles()`. From this point on, handling the files is the same whether the user used the `input` element or drag and drop.

## Getting information about selected files

The {{ domxref("FileList") }} object provided by the DOM lists all the files selected by the user, each specified as a {{ domxref("File") }} object. You can determine how many files the user selected by checking the value of the file list's `length` attribute:

```
var numFiles = files.length;
```

Individual {{ domxref("File") }} objects can be retrieved by simply accessing the list as an array:

```js
for (var i = 0, numFiles = files.length; i < numFiles; i++) {
  var file = files[i];
  ..
}
```

This loop iterates over all the files in the file list.

There are three attributes provided by the {{ domxref("File") }} object that contain useful information about the file.

- `name`
  - : The file's name as a read-only string. This is just the file name, and does not include any path information.
- `size`
  - : The size of the file in bytes as a read-only 64-bit integer.
- `type`
  - : The MIME type of the file as a read-only string, or `""` if the type couldn't be determined.

### Example: Showing file(s) size

The following example shows a possible use of the `size` property:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>File(s) size</title>
    <script>
      function updateSize() {
        var nBytes = 0,
          oFiles = document.getElementById("uploadInput").files,
          nFiles = oFiles.length;
        for (var nFileId = 0; nFileId < nFiles; nFileId++) {
          nBytes += oFiles[nFileId].size;
        }
        var sOutput = nBytes + " bytes";
        // optional code for multiples approximation
        for (
          var aMultiples = [
              "KiB",
              "MiB",
              "GiB",
              "TiB",
              "PiB",
              "EiB",
              "ZiB",
              "YiB",
            ],
            nMultiple = 0,
            nApprox = nBytes / 1024;
          nApprox > 1;
          nApprox /= 1024, nMultiple++
        ) {
          sOutput =
            nApprox.toFixed(3) +
            " " +
            aMultiples[nMultiple] +
            " (" +
            nBytes +
            " bytes)";
        }
        // end of optional code
        document.getElementById("fileNum").innerHTML = nFiles;
        document.getElementById("fileSize").innerHTML = sOutput;
      }
    </script>
  </head>

  <body onload="updateSize();">
    <form name="uploadForm">
      <p>
        <input
          id="uploadInput"
          type="file"
          name="myFiles"
          onchange="updateSize();"
          multiple />
        selected files: <span id="fileNum">0</span>; total size:
        <span id="fileSize">0</span>
      </p>
      <p><input type="submit" value="Send file" /></p>
    </form>
  </body>
</html>
```

## Example: Showing thumbnails of user-selected images

Let's say you're developing the next great photo-sharing web site, and want to use HTML5 to display thumbnail previews of images before the user actually uploads them. Simply establish your input element or drop zone as discussed previously, and have them call a function such as the `handleFiles()` function below.

```js
function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var imageType = /image.*/;

    if (!file.type.match(imageType)) {
      continue;
    }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img);

    var reader = new FileReader();
    reader.onload = (function (aImg) {
      return function (e) {
        aImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file);
  }
}
```

Here our loop handling the user-selected files looks at each file's `type` attribute to see if it's an image file (by doing a regular expression match on the string "`image.*`"). For each file that is an image, we create a new `img` element. CSS can be used to establish any pretty borders, shadows, and to specify the size of the image, so that doesn't even need to be done here.

Each image has the CSS class `obj` added to it, to make them easy to find in the DOM tree. We also add a `file` attribute to each image specifying the {{ domxref("File") }} for the image; this will let us fetch the images for actually uploading later. Finally, we use {{ domxref("Node.appendChild()") }} to add the new thumbnail to the preview area of our document.

Then we establish the {{ domxref("FileReader") }} to handle actually asynchronously loading the image and attaching it to the `img` element. After creating the new `FileReader` object, we set up its `onload` function, then call `readAsDataURL()` to start the read operation in the background. When the entire contents of the image file are loaded, they are converted into a `data:` URL, which is passed to the `onload` callback. Our implementation of this routine simply sets the `img` element's `src` attribute to the loaded image, which results in the image appearing in the thumbnail on the user's screen.

## Example: Using object URLs to display images

This example uses object URLs to display image thumbnails. In addition, it displays other file information including their names and sizes. You can [view the example live](/samples/domref/file-click-demo.html).

The HTML that presents the interface looks like this:

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none"
  onchange="handleFiles(this.files)" />
<a href="#" id="fileSelect">Select some files</a>
<div id="fileList">
  <p>No files selected!</p>
</div>
```

This establishes our file {{ HTMLElement("input") }} element, as well as a link that invokes the file picker, since we keep the file input hidden to prevent that less-than-attractive UI from being displayed. This is explained above in the section [Using hidden file input elements using the click() method](#using_hidden_file_input_elements_using_the_click_method), as is the method that invokes the file picker.

The `handleFiles()` method follows:

```js
window.URL = window.URL || window.webkitURL;

var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener(
  "click",
  function (e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // prevent navigation to "#"
  },
  false,
);

function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    var list = document.createElement("ul");
    for (var i = 0; i < files.length; i++) {
      var li = document.createElement("li");
      list.appendChild(li);

      var img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 60;
      img.onload = function (e) {
        window.URL.revokeObjectURL(this.src);
      };
      li.appendChild(img);

      var info = document.createElement("span");
      info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
      li.appendChild(info);
    }
    fileList.appendChild(list);
  }
}
```

This starts by fetching the URL of the {{ HTMLElement("div") }} with the ID `fileList`. This is the block into which we'll insert out file list, including thumbmails.

If the {{ domxref("FileList") }} object passed to `handleFiles()` is `null`, we simply set the inner HTML of the block to display "No files selected!". Otherwise, we start building our file list, as follows:

1. A new unordered list ({{ HTMLElement("ul") }}) element is created.
2. The new list element is inserted into the {{ HTMLElement("div") }} block by calling its {{ domxref("element.appendChild()") }} method.
3. For each {{ domxref("File") }} in the {{ domxref("FileList") }} represented by `files`:

   1. Create a new list item ({{ HTMLElement("li") }}) element and insert it into the list.
   2. Create a new image ({{ HTMLElement("img") }}) element.
   3. Set the image's source to a new object URL representing the file, using {{ domxref("window.URL.createObjectURL()") }} to create the blob URL.
   4. Set the image's height to 60 pixels.
   5. Set up the image's load event handler to release the object URL, since it's no longer needed once the image has been loaded. This is done by calling the {{ domxref("window.URL.revokeObjectURL()") }} method, passing in the object URL string as specified by `img.src`.
   6. Append the new list item to the list.

## Example: Uploading a user-selected file

Another thing you might want to do is let the user upload the selected file or files (such as the images selected using the previous example) to a server. This can be done asynchronously very easily.

### Creating the upload tasks

Continuing with the code that builds the thumbnails in the previous example, recall that every thumbnail image is in the CSS class `obj`, with the corresponding {{ domxref("File") }} attached in a `file` attribute. This lets us very easily select all the images the user has chosen for uploading using {{ domxref("Document.querySelectorAll()") }}, like this:

```js
function sendFiles() {
  var imgs = document.querySelectorAll(".obj");

  for (var i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

Line 2 creates an array, called `imgs`, of all the elements in the document with the CSS class `obj`. In our case, these will be all the image thumbnails. Once we have that list, it's trivial to go through the list, creating a new `FileUpload` instance for each. Each of these handles uploading the corresponding file.

### Handling the upload process for a file

The `FileUpload` function accepts two inputs: an image element and a file from which to read the image data.

```js
function FileUpload(img, file) {
  var reader = new FileReader();
  this.ctrl = createThrobber(img);
  var xhr = new XMLHttpRequest();
  this.xhr = xhr;

  var self = this;
  this.xhr.upload.addEventListener(
    "progress",
    function (e) {
      if (e.lengthComputable) {
        var percentage = Math.round((e.loaded * 100) / e.total);
        self.ctrl.update(percentage);
      }
    },
    false,
  );

  xhr.upload.addEventListener(
    "load",
    function (e) {
      self.ctrl.update(100);
      var canvas = self.ctrl.ctx.canvas;
      canvas.parentNode.removeChild(canvas);
    },
    false,
  );
  xhr.open(
    "POST",
    "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php",
  );
  xhr.overrideMimeType("text/plain; charset=x-user-defined-binary");
  reader.onload = function (evt) {
    xhr.sendAsBinary(evt.target.result);
  };
  reader.readAsBinaryString(file);
}
```

The `FileUpload()` function shown above creates a throbber, which is used to display progress information, then creates an {{ domxref("XMLHttpRequest") }} to handle uploading the data.

Before actually transferring the data, several preparatory steps are taken:

1. The `XMLHttpRequest`'s upload `progress` listener is set to update the throbber with new percentage information, so that as the upload progresses, the throbber will be updated based on the latest information.
2. The `XMLHttpRequest`'s upload `load` event handler is set to update the throbber with 100% as the progress information (to ensure the progress indicator actually reaches 100%, in case of granularity quirks during the process). It then removes the throbber, since it's no longer needed. This causes the throbber to disappear once the upload is complete.
3. The request to upload the image file is opened by calling `XMLHttpRequest`'s `open()` method to start generating a POST request.
4. The MIME type for the upload is set by calling the `XMLHttpRequest` function `overrideMimeType()`. In this case, we're using a generic MIME type; you may or may not need to set the MIME type at all, depending on your use case.
5. The `FileReader` object is used to convert the file to a binary string.
6. Finally, when the content is loaded the `XMLHttpRequest` function `sendAsBinary()` is called to upload the file's content.

### Handling the upload process for a file, asynchronously

```php
<?php
if (isset($_FILES['myFile'])) {
    // Example:
    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    exit;
}
?>
<!DOCTYPE html>
<html>
  <head>
    <title>dnd binary upload</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript">
      function sendFile(file) {
        var uri = "/index.php";
        var xhr = new XMLHttpRequest();
        var fd = new FormData();

        xhr.open("POST", uri, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            // Handle response.
            alert(xhr.responseText); // handle response.
          }
        };
        fd.append('myFile', file);
        // Initiate a multipart/form-data upload
        xhr.send(fd);
      }

      window.onload = function() {
        var dropzone = document.getElementById("dropzone");
        dropzone.ondragover = dropzone.ondragenter = function(event) {
          event.stopPropagation();
          event.preventDefault();
        }

        dropzone.ondrop = function(event) {
          event.stopPropagation();
          event.preventDefault();

          var filesArray = event.dataTransfer.files;
          for (var i=0; i<filesArray.length; i++) {
            sendFile(filesArray[i]);
          }
        }
      }
  </script>
  </head>
  <body>
    <div>
      <div id="dropzone" style="margin:30px; width:500px; height:300px; border:1px dotted grey;">Drag & drop your file here...</div>
    </div>
  </body>
</html>
```

## See also

- {{ domxref("File") }}
- {{ domxref("FileList") }}
- {{ domxref("FileReader") }}
- [Using XMLHttpRequest](/pt-BR/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using the DOM File API in chrome code](/pt-BR/Extensions/Using_the_DOM_File_API_in_chrome_code)
- {{ domxref("XMLHttpRequest") }}
