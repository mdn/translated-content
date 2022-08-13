---
title: Zugriff auf Dateien von Webapplikationen
slug: Web/API/File_API/Using_files_from_web_applications
translation_of: Web/API/File/Using_files_from_web_applications
original_slug: Web/API/File/Using_files_from_web_applications
---
Mithilfe der File API, welche mit HTML5 zum DOM hinzugefügt wurde, ist es nun für Webinhalte möglich den Benutzer lokale Dateien auswählen zu lassen und den Inhalt dieser Dateien auszulesen. Die Auswahl kann entweder durch das HTML Element {{ HTMLElement("input") }} oder durch Drag and Drop erfolgen.

Es ist auch möglich die DOM File API von Erweiterungen oder anderem Chrome Code zu benutzen. In diesem Fall müssen einige zusätzliche Dinge beachtet werden, die im Abschnitt [Using the DOM File API in chrome code](/en/Extensions/Using_the_DOM_File_API_in_chrome_code "en/Extensions/Using the DOM File API in chrome code") näher erläutert werden.

## Auf ausgewählte Dateien zugreifen

Gehen wir von folgendem HTML-Code aus:

```html
<input type="file" id="input">
```

Die File API erlaubt den Zugriff auf eine {{ domxref("FileList") }} mit {{ domxref("File") }} Objekten, die die vom Benutzer ausgewählten Dateien repräsentieren.

Wenn der Benutzer nur eine Datei auswählt, dann muss nur die erste Datei in der Liste betrachtet werden.

Eine ausgewählte Datei erhält man über den üblichen DOM Selektor:

```js
var selectedFile = document.getElementById('input').files[0];
```

Oder mit einem [jQuery](http://jquery.com/) Selektor:

```js
var selectedFile = $('#input').get(0).files[0];

var selectedFile = $('#input')[0].files[0];
```

> **Note:** Tritt der Fehler "`files is undefined`" auf:
> Es wurde das falsche HTML element ausgewählt. Es ist zu beachten, dass ein jQuery Selektor eine Liste von zutreffenden DOM Elementen zurückliefert. Das richtige DOM Element muss ausgewählt werden, um "`files`" darauf anzuwenden.

## Zugriff auf ausgewählte Dateien über den Change Event

Es ist auch möglich (aber nicht unbedingt erforderlich), auf die {{ domxref("FileList") }} über das change event zuzugreifen:

```html
<input type="file" id="input" onchange="handleFiles(this.files)">
```

Wenn der Benutzer eine Datei auswählt, wird die Funktion `handleFiles()` aufgerufen. Als Parameter wird die {{ domxref("FileList") }} übergeben. Sie enthält die {{ domxref("File") }} Objekte, die die vom Benutzer ausgewählten Dateien repräsentieren.

Soll der Benutzer mehrere Dateien auswählen können, dann kann einfach das Attribut `multiple` auf das `input` Element angewendet werden:

```html
<input type="file" id="input" multiple onchange="handleFiles(this.files)">
```

In diesem Fall enthält die Dateiliste, die an die `handleFiles()` Funktion übergeben wird, ein {{ domxref("File") }} für jede Datei, die der Benutzer ausgewählt hat.

### Dynamisch einen Change Listener hinzufügen

Wurde das `input` Feld mit einer JavaScript Bibliothek wie [jQuery](http://www.jquery.com/) erzeugt, dann muss der event Listener mit {{ domxref("element.addEventListener()") }} hinzugefügt werden:

```js
var inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  var fileList = this.files; /* Jetzt kann die Dateiliste verarbeitet werden */
}
```

In diesem Fall ist die `handleFiles()` Funktion selbst der Event Handler, anders als in den vorigen Beispielen, wo sie von einem Event Handler aufgerufen wurde.

## Informationen über die ausgewählte(n) Datei(en)

Das {{ domxref("FileList") }} Objekt, das vom DOM geliefert wurde, enthält eine Liste aller Dateien, die vom Benutzer ausgewählt wurden. Jede der Dateien wird durch ein {{ domxref("File") }} Objekt repräsentiert. Die Anzahl der ausgewälten Dateien kann über das `length` Attribut der Liste ermittelt werden:

```js
var numFiles = files.length;
```

Die einzelnen {{ domxref("File") }} Objekte erhält man, indem das {{ domxref("FileList") }} Objekt einfach wie ein Array behandelt wird:

```js
for (var i = 0, numFiles = files.length; i < numFiles; i++) {
  var file = files[i];
  ..
}
```

Diese Schleife iteriert über alle Dateien in der Liste.

Im {{ domxref("File") }} Objekt liefern drei Attribute hilfreiche Informationen über die Datei:

- `name`
  - : Der Dateiname als read-only String. Es ist nur der Dateiname enthalten, keine Pfadinformationen.
- `size`
  - : Die Dateigröße in Bytes als read-only 64-Bit Integer.
- `type`
  - : Der MIME type der Datei als read-only String oder `""`, wenn der Typ nicht ermittelt werden konnte.

### Beispiel: Dateigröße anzeigen

Das folgende Beispiel zeigt eine mögliche Verwendung des `size` Attributs:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
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
  for (var aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
  }
  // end of optional code
  document.getElementById("fileNum").innerHTML = nFiles;
  document.getElementById("fileSize").innerHTML = sOutput;
}
</script>
</head>

<body onload="updateSize();">
<form name="uploadForm">
<p><input id="uploadInput" type="file" name="myFiles" onchange="updateSize();" multiple> selected files: <span id="fileNum">0</span>; total size: <span id="fileSize">0</span></p>
<p><input type="submit" value="Send file"></p>
</form>
</body>
</html>
```

## Verstecktes input Element mit click() Methode

Ab Gecko 2.0 {{ geckoRelease("2.0") }}, kann das zugegebenermaßen hässliche Datei-{{ HTMLElement("input") }} Element versteckt und durch eigene Oberflächenelemente zum Zugriff auf den Datei-Öffnen-Dialog ersetzt werden. Dazu wird das `input` Element mit dem CSS Stil `display:none` versehen und mit der Methode {{ domxref("element.click","click()") }} aufgerufen.

Gehen wir von folgendem HTML-Code aus:

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
<a href="#" id="fileSelect">Bitte Dateien auswählen</a>
```

Der Code, der auf den `click` Event reagiert, kann wie folgt aussehen:

```js
var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);
```

Das neue Oberflächenelement zum Zugriff auf den Datei-Öffnen-Dialog kann nun beliebig gestaltet werden.

## label Element zum Auslösen eines versteckten input Elements

Wird statt eines Links ({{ HTMLElement("a") }} Element) ein {{ HTMLElement("label") }} Element verwendet, dann kann das versteckte `input` Element auch ohne JavaScript ausgelöst werden. Dabei darf das input-Element aber weder mit `display: none` noch mit `visibility: hidden` versteckt werden, weil es in diesen Fällen nicht mit der Tastatur bedienbar wäre. Es darf nur [visuell versteckt](https://a11yproject.com/posts/how-to-hide-content/) werden.

Gehen wir von folgendem HTML-Code aus:

```html
<input type="file" id="fileElem" multiple accept="image/*" class="visually-hidden">
<label for="fileElem">Bitte Dateien auswählen</label>
```

und folgendem CSS:

```css
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

input.visually-hidden:focus + label {
  outline: thin dotted;
}
```

Bei einem Klick auf das `label` Element wird der Datei-Öffnen-Dialog angezeigt.

Das `label` Element kann per CSS beliebig gestaltet werden. Man muss aber das Label des versteckten Eingabefelds hervorheben, wenn dieses den Fokus hat, d.h. per Tab-Taste angewählt wurde – sei es durch outline wie im obigen Beispiel oder background-color oder box-shadow. (Gegenwärtig stellt Firefox das Label von fokussierten `<input type="file">`-Elementen nicht hervorgehoben dar.)

## Dateien per Drag and Drop auswählen

Es ist auch möglich, per Drag and Drop Dateien an die Webanwendung zu übergeben.

Zuerst muss eine Drop Zone eingerichtet werden. Welcher Teil der Oberfläche Drops entgegen nimmt, ist vom Design der Anwendung abhängig. Generell ist das Empfangen von Drop Events aber einfach:

```js
var dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

In diesem Beispiel wird das Element mit der ID `dropbox` als Drop Zone verwendet. Das wird durch Registrieren der Listener für {{event('dragenter')}}, {{event('dragover')}} und {{event('drop')}} Events erreicht.

dragenter und dragover benötigen wir in unserem Fall eigentlich nicht. Wir verhindern lediglich eine weitere Behandlung der Events durch Aufruf von `e.stopPropagation()` und `e.preventDefault()`:

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

Das Wesentliche geschieht in der Behandlung des `drop` Events:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
```

Hier ermitteln wir das `dataTransfer` Feld aus dem Event, entnehmen ihm die Dateiliste und übergeben diese an `handleFiles()`. Von da an ist die Weiterverarbeitung die gleiche wie bei Verwendung des `input` Elements.

## Beispiel: Thumbnails von ausgewählten Bildern anzeigen

Gehen wir davon aus, dass auf einer Foto-Webseite mit HTML5 eine Thumbnail Vorschau von Bildern angezeigt werden soll, bevor sie hochgeladen werden. Das input Element oder die Drop Zone kann wie oben beschrieben eingerichtet werden. Diese rufen die folgende handleFiles() Funktion auf:

```js
function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    var imageType = /^image\//;

    if (!imageType.test(file.type)) {
      continue;
    }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // Gehen wird davon aus, dass "preview" das div-Element ist, in dem der Inhalt angezeigt wird.

    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
  }
}
```

Mit der Schleife wird über die ausgewählten Dateien iteriert. Bei jeder Datei wird mit Hilfe des `type` Attributs (indem der Reguläre Ausdruck "^image\\/" darauf angewendet wird) geprüft, ob es sich um eine Bild Datei handelt. Liegt eine Bild Datei vor, dann wird ein neues `img` Element erzeugt. Mit CSS können z.B. hübsche Ränder oder Schatten erzeugt und die Größe des Bildes festgelegt werden, das muss also nicht hier im Code erfolgen.

Jedem Bild wird die CSS Klasse `obj` zugewiesen, so dass es einfach ist, es im DOM Baum zu finden. Außerdem wird jedem Bild im `file` Attribut das {{ domxref("File") }} Objekt für das Bild zugewiesen; das benötigen wir später für den tatsächlichen Upload der Datei. Mit {{ domxref("Node.appendChild()") }} wird das neue Thumbnail dem `preview` Bereich unserer Anwendung hinzugefügt.

Dann erstellen wir einen {{ domxref("FileReader") }}, um das Bild asynchron zu laden und es dem `img` Element hinzuzufügen. Nach dem Erstellen des FileReader Objektes definieren wir die `onload` Funktion und rufen `readAsDataURL()` auf, um die Leseoperation im Hintergrund zu starten. Ist der komplette Inhalt der Bilddatei geladen, dann wird er in eine `data:` URL umgewandelt, die an den `onload` Callback übergeben wird. Unsere Implementation dieser Routine setzt das `src` Attribut des `img` Elements auf das geladene Bild, was dazu führt, dass das Bild im Thumbnail auf dem Bildschirm des Benutzers erscheint.

## Verwendung von Objekt URLs

Mit Gecko 2.0 {{ geckoRelease("2.0") }} wurde die Unterstützung für die DOM Methoden {{ domxref("window.URL.createObjectURL()") }} und {{ domxref("window.URL.revokeObjectURL()") }} eingeführt. Mit ihnen lassen sich einfache URL Strings erzeugen, die beliebige Daten referenzieren, auf die per DOM {{ domxref("File") }} Objekte zugegriffen werden kann; einschließlich lokale Dateien auf dem Computer des Anwenders.

Wenn man aus HTML mit einer URL auf ein {{ domxref("File") }} Objekt verweisen möchte, dann kann man dafür eine Objekt URL erzeugen:

```js
var objectURL = window.URL.createObjectURL(fileObj);
```

Die Objekt URL ist ein String, der das {{ domxref("File") }} Objekt identifiziert. Jedes Mal, wenn {{ domxref("window.URL.createObjectURL()") }} aufgerufen wird, wird eine eindeutige Objekt URL erzeugt, auch wenn vorher bereits eine Objekt URL für diese Datei erzeugt wurde. Jede von ihnen muss wieder freigegeben werden. Sie werden automatisch freigegeben, wenn das Dokument entladen wird. Wenn ihre Anwendung die Objekt URLs dynamisch verwendet, dann sollten Sie sie auch explizit durch Aufruf von {{ domxref("window.URL.revokeObjectURL()") }} freigeben:

```js
window.URL.revokeObjectURL(objectURL);
```

## Beispiel: Mit Objekt URLs Bilder anzeigen

Dieses Beispiel verwendet Objekt URLs, um Thumbnails von Bildern anzuzeigen. Darüber hinaus werden weitere Dateiinformationen einschließlich Name und Größe angezeigt. [Live Ansicht des Beispiels](/samples/domref/file-click-demo.html "https://developer.mozilla.org/samples/domref/file-click-demo.html").

Das HTML für die Oberfläche sieht folgendermaßen aus:

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
<a href="#" id="fileSelect">Bitte Dateien auswählen</a>
<div id="fileList">
  <p>Keine Dateien ausgewählt!</p>
</div>
```

Das erstellt ein Datei {{ HTMLElement("input") }} Element, zusammen mit einem Link, der den Datei-Öffnen-Dialog anzeigt (so kann das Datei `input` Element versteckt werden, da es nicht so attraktiv aussieht). Das wird oben im Abschnitt [Verstecktes input Element mit click() Methode](#verstecktes_input_element_mit_click_methode) näher beschrieben.

Die `handleFiles()` Methode sieht folgendermaßen aus:

```js
window.URL = window.URL || window.webkitURL;

var fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

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
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
      li.appendChild(img);
      var info = document.createElement("span");
      info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}
```

Das {{ HTMLElement("div") }} Element mit der ID `fileList` wird ermittelt. Das ist der Block, in den wir später unsere Dateiliste einschließlich Thumbnails einfügen.

Ist das {{ domxref("FileList") }} Objekt, das an `handleFiles()` übergeben wird, `null`, dann wird einfach "No files selected!" ausgegeben. Ansonsten bauen wir unsere Dateiliste wie folgt:

1. Ein neues ({{ HTMLElement("ul") }}) Element wird erzeugt.
2. Das neue Listenelement wird dem {{ HTMLElement("div") }} Block hinzugefügt durch Aufruf der {{ domxref("element.appendChild()") }} Methode.
3. Für jedes {{ domxref("File") }} in der {{ domxref("FileList") }}, die durch `files` repräsentiert wird:

    1. Erzeuge ein neues Listenelement ({{ HTMLElement("li") }}) und füge es der Liste hinzu.
    2. Erzeuge ein neues Bildelement ({{ HTMLElement("img") }}).
    3. Setze das src Attribut des Bildes auf die neue Objekt URL, die die Datei repräsentiert, wobei die Objekt URL mit {{ domxref("window.URL.createObjectURL()") }} erzeugt wird.
    4. Setze die Bildgröße auf 60 Pixel.
    5. Richte den `onload` Event Handler ein, um die Objekt URL wieder freizugeben, da sie nach dem Laden des Bildes nicht mehr benötigt wird. Das wird durch Aufruf der Methode {{ domxref("window.URL.revokeObjectURL()") }} und Übergabe des Objekt URL Strings aus `img.src` gemacht.
    6. Füge das neue Bildelement dem Listenelement hinzu.

## Example: Uploading a user-selected file

Another thing you might want to do is let the user upload the selected file or files (such as the images selected using the previous example) to a server. This can be done asynchronously very easily.

### Creating the upload tasks

Continuing with the code that built the thumbnails in the previous example, recall that every thumbnail image is in the CSS class `obj` with the corresponding {{ domxref("File") }} attached in a `file` attribute. This allows us to select all of the images the user has chosen for uploading using {{ domxref("Document.querySelectorAll()") }}, like this:

```js
function sendFiles() {
  var imgs = document.querySelectorAll(".obj");

  for (var i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

Line 2 fetches a {{ domxref("NodeList") }}, called `imgs`, of all the elements in the document with the CSS class `obj`. In our case, these will be all of the image thumbnails. Once we have that list, it's trivial to go through it and create a new `FileUpload` instance for each. Each of these handles uploading the corresponding file.

### Handling the upload process for a file

The `FileUpload` function accepts two inputs: an image element and a file from which to read the image data.

```js
function FileUpload(img, file) {
  var reader = new FileReader();
  this.ctrl = createThrobber(img);
  var xhr = new XMLHttpRequest();
  this.xhr = xhr;

  var self = this;
  this.xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
          var percentage = Math.round((e.loaded * 100) / e.total);
          self.ctrl.update(percentage);
        }
      }, false);

  xhr.upload.addEventListener("load", function(e){
          self.ctrl.update(100);
          var canvas = self.ctrl.ctx.canvas;
          canvas.parentNode.removeChild(canvas);
      }, false);
  xhr.open("POST", "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php");
  xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
  reader.onload = function(evt) {
    xhr.sendAsBinary(evt.target.result);
  };
  reader.readAsBinaryString(file);
}
```

The `FileUpload()` function shown above creates a throbber, which is used to display progress information, and then creates an {{ domxref("XMLHttpRequest") }} to handle uploading the data.

Before actually transferring the data, several preparatory steps are taken:

1. The `XMLHttpRequest`'s upload `progress` listener is set to update the throbber with new percentage information so that as the upload progresses the throbber will be updated based on the latest information.
2. The `XMLHttpRequest`'s upload `load` event handler is set to update the throbber progress information to 100% to ensure the progress indicator actually reaches 100% (in case of granularity quirks during the process). It then removes the throbber since it's no longer needed. This causes the throbber to disappear once the upload is complete.
3. The request to upload the image file is opened by calling `XMLHttpRequest`'s `open()` method to start generating a POST request.
4. The MIME type for the upload is set by calling the `XMLHttpRequest` function `overrideMimeType()`. In this case, we're using a generic MIME type; you may or may not need to set the MIME type at all depending on your use case.
5. The `FileReader` object is used to convert the file to a binary string.
6. Finally, when the content is loaded the `XMLHttpRequest` function `sendAsBinary()` is called to upload the file's content.

> **Note:** The non-standard `sendAsBinary` method in the example above is considered deprecated as of Gecko 31 {{ geckoRelease(31) }} and will be removed soon. The standard `send(Blob data)` method can be used instead.

### Handling the upload process for a file, asynchronously

```js
<?php
if (isset($_FILES['myFile'])) {
    // Example:
    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    exit;
}
?><!DOCTYPE html>
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

## Example: Using object URLs to display PDF

Object URLs can be used for other things than just images! They can be used to display embedded PDF files or any other resources that can be displayed by the browser.

In Firefox, to have the PDF appear embedded in the iframe (rather than proposed as a downloaded file), the preference `pdfjs.disabled` must be set to `false` {{non-standard_inline()}}.

```html
<iframe id="viewer">
```

And here is the change of the `src` attribute:

```js
var obj_url = window.URL.createObjectURL(blob);
var iframe = document.getElementById('viewer');
iframe.setAttribute('src', obj_url);
window.URL.revokeObjectURL(obj_url);
```

## Example: Using object URLs with other file types

You can manipulate files of other formats the same way. Here is how to preview uploaded video:

```js
var video = document.getElementById('video');
var obj_url = window.URL.createObjectURL(blob);
video.src = obj_url;
video.play()
window.URL.revokeObjectURL(obj_url);
```

## Specifications

- [File upload state](http://www.w3.org/TR/progress-events/) (HTML 5 working draft)
- [File API](http://www.w3.org/TR/FileAPI/)

## See also

- {{ domxref("File") }}
- {{ domxref("FileList") }}
- {{ domxref("FileReader") }}
- [Using XMLHttpRequest](/en/DOM/XMLHttpRequest/Using_XMLHttpRequest "En/Using XMLHttpRequest")
- [Using the DOM File API in chrome code](/en/Extensions/Using_the_DOM_File_API_in_chrome_code "en/Extensions/Using the DOM File API in chrome code")
- {{ domxref("XMLHttpRequest") }}
- [jQuery](http://www.jquery.com/) JavaScript library
