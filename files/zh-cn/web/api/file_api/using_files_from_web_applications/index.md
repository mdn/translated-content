---
title: 在 web 应用程序中使用文件
slug: Web/API/File_API/Using_files_from_web_applications
---

{{APIRef("File API")}}

通过使用在 HTML5 中加入到 DOM 的 File API，使在 web 内容中让用户选择本地文件然后读取这些文件的内容成为可能。用户可以通过 HTML 中的 {{HTMLElement("input/file", '&lt;input type="file"&gt;')}} 元素或者是通过拖拽来选择本地文件。

如果你想通过扩展或者其他的 chrome 源码浏览器（browser chrome code）使用 DOM File API，是可行的；然而，需要注意有一些附加特性。详细请见 [Using the DOM File API in chrome code](/zh-CN/Extensions/Using_the_DOM_File_API_in_chrome_code)。

## 访问被选择的文件

考虑这段 HTML:

```html
<input type="file" id="input">
```

通过 File API，我们可以访问 {{DOMxRef("FileList")}}，它包含了表示用户所选文件的 {{DOMxRef("File")}} 对象

如果用户只选择了一个文件，那么只需要考虑列表中的第一个文件。

使用传统的 DOM 选择器访问一个被选择的文件：

```js
const selectedFile = document.getElementById('input').files[0];
```

### 通过 change 事件访问被选择的文件

可以（但不是强制的）通过 `change` 事件访问 {{DOMxRef("FileList")}}：

```html
<input type="file" id="input" onchange="handleFiles(this.files)">
```

当用户选择一个文件时，`handleFiles()` 方法会用一个 {{DOMxRef("FileList")}} 对象作为参数被调用，{{DOMxRef("FileList")}} 对象包含表示用户选择的文件的 {{DOMxRef("File")}} 对象。

如果你想让用户选择多个文件，只需在 `input` 元素上使用 `multiple` 属性：

```html
<input type="file" id="input" multiple onchange="handleFiles(this.files)">
```

在这个例子中，对于每个用户选择的文件，传递给 `handleFiles()`方法的文件列表都包含一个对应的 {{DOMxRef("File")}} 对象。

### 动态添加 change 监听器

你需要使用 {{DOMxRef("EventTarget.addEventListener()")}} 去添加 `change` 事件监听器，像这样：

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}
```

注意在这个例子里，`handleFiles()` 方法本身是一个事件处理器，不像之前的例子中，它被事件处理器调用然后传递给它一个参数。

## 获取被选择文件的信息

DOM 提供 {{ domxref("FileList") }} 对象列出了用户选择的所有文件，每一个文件被指定为一个 {{ domxref("File") }} 对象。你可以通过检查文件列表 {{ domxref("FileList") }} 的 `length` 属性来确定用户选择了多少个文件：

```js
const numFiles = files.length;
```

可以像数组一样简单地访问文件列表来检索各个 {{ domxref("File") }} 对象：

```js
for (let i = 0, numFiles = files.length; i < numFiles; i++) {
  const file = files[i];
  // ...
}
```

这个循环遍历了文件列表里的所有文件。

{{ domxref("File") }} 对象提供了三个属性，包含了文件的有用信息。

- `name`
  - : 文件名称，只读字符串。只包含文件名，不包含任何路径信息。
- `size`
  - : 以字节数为单位的文件大小，只读的 64 位整数。
- `type`
  - : 文件的 MIME 类型，只读字符串，当类型不能确定时为 `""`。

### 示例：显示文件大小

下面的例子展示了 `size` 属性的一种可能用法：

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>File(s) size</title>
<script>
function updateSize() {
  let nBytes = 0,
      oFiles = document.getElementById("uploadInput").files,
      nFiles = oFiles.length;
  for (let nFileId = 0; nFileId < nFiles; nFileId++) {
    nBytes += oFiles[nFileId].size;
  }
  let sOutput = nBytes + " bytes";
  // optional code for multiples approximation
  const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
  for (nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
  }
  // end of optional code
  document.getElementById("fileNum").innerHTML = nFiles;
  document.getElementById("fileSize").innerHTML = sOutput;
}
</script>
</head>

<body onload="updateSize()">
  <form name="uploadForm">
    <div>
      <input id="uploadInput" type="file" name="myFiles" onchange="updateSize();" multiple>
      selected files: <span id="fileNum">0</span>;
      total size: <span id="fileSize">0</span>
    </div>
    <div><input type="submit" value="Send file"></div>
  </form>
</body>
</html>
```

## 通过 click() 方法使用隐藏的 file input 元素

你可以隐藏公认难看的 file {{ HTMLElement("input") }} 元素并显示你自己的界面来打开文件选择器，然后显示哪个或哪些文件被用户选中了。你可以通过给 input 元素添加 `display:none` 的样式，再调用 {{HTMLElement("input") }} 元素的 {{domxref("element.click","click()") }} 方法来实现。

考虑这段 HTML：

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
<button id="fileSelect">Select some files</button>
```

处理 `click` 事件的代码类似于这样：

```js
const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
}, false);
```

你可以给这个用来打开文件选择器的新按钮添加任何你想要的样式。

## 使用 label 元素来触发一个隐藏的 file input 元素

允许在不使用 JavaScript（click() 方法）来打开文件选择器，可以使用 {{ HTMLElement("label") }} 元素。注意在这种情况下，input 元素不能使用 `display: none`（或 `visibility: hidden`）隐藏，否则 label 将无法通过键盘访问。使用 [visually-hidden technique](https://a11yproject.com/posts/how-to-hide-content/) 作为替代。

考虑这段 HTML：

```html
<input type="file" id="fileElem" multiple accept="image/*" class="visually-hidden">
<label for="fileElem">Select some files</label>
```

和这段 CSS：

```css
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

/* Separate rule for compatibility, :focus-within is required on modern Firefox and Chrome */
input.visually-hidden:focus + label {
  outline: thin dotted;
}
input.visually-hidden:focus-within + label {
  outline: thin dotted;
}
```

这里不需要添加任何 JavaScript 代码来调用`fileElem.click()`，另外，这时你也可以给 label 元素添加你想要的样式。您需要在其 label 上提供隐藏 input 字段的焦点状态的视觉提示，比如上面用的轮廓，或者背景颜色或边框阴影。（截至编写时为止，Firefox 不显示 `<input type="file">` 元素的视觉提示。）

## 使用拖放来选择文件

你还可以让用户将文件拖拽到你的网页应用中。

第一步是创建一个 drop 区域。虽然你网页内容的哪部分接受拖放取决于你的应用设计，但是使一个元素接收 drop 事件是很容易的。

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

在这个例子中，我们将 ID 为`dropbox`的元素变为了我们的 drop 区域。这是通过给元素添加[`dragenter`](/zh-CN/docs/Web/API/HTMLElement/dragenter_event), [`dragover`](/zh-CN/docs/Web/API/HTMLElement/dragover_event), 和[`drop`](/zh-CN/docs/Web/API/HTMLElement/drop_event) 事件监听器实现的。

我们其实并不需要对`dragenter` and `dragover` 事件进行处理，所以这些函数都很简单。他们只需要包括禁止事件传播和阻止默认事件：

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

真正的奥妙在`drop()`这个函数中：

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
```

这里，我们从事件中获取到了`dataTransfer` 这个域，然后从中得到文件列表，再将它们传递给`handleFiles()`函数。在这之后，处理文件的方法和用`input`元素或者用拖拽就是一样的了。

## 例子：显示用户选择的图片的缩略图

比方说，你正在开发一个炫酷的下一代图片分享网站，并且想使用 HTML5 来展示用户在实际上传之前的图片的缩略图。你可以像我们之前讨论的那样创建自己的 input 元素或者 drop 区域，然后对他们使用一个回调函数，比如下面的`handleFiles()`。

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
    preview.appendChild(img); // 假设"preview"就是用来显示内容的 div

    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
  }
}
```

这里我们循环处理用户选择的文件，看每个文件的`type`属性是不是 image（通过正则表达式来匹配 MIME 类型字符串模式"`image/*`"）。对每个文件而言，如果它是 image，我们就创建一个新的`img`元素。可以使用 css 来创建一个漂亮的边框或阴影来显示图片的具体大小，在这儿就不具体做了。

为了在 DOM 树中更容易地找到他们，每个图片元素都被添加了一个名为`obj`的 CSS 类。我们还给每个图片添加了`file`属性使它具有 {{ domxref("File") }}；这样做可以让我们拿到稍后需要实际上传的图片。我们在预览页中使用 {{ domxref("Node.appendChild()") }}来添加新的缩略图。

接下来，我们创建了{{ domxref("FileReader") }}来处理异步的图片加载并把他赋给`img`元素。在创建一个新的 `FileReader`对象后，我们新建了它的`onload` 函数，然后调用`readAsDataURL()`函数开始后台读取文件。当整个图片文件的内容都被全部加载完后，它们被转换成了一个被传递到`onload`回调函数的`data:`URL。我们再执行常规操作将`img`元素的`src`属性设置为刚刚加载完毕的 URL，使得图像可以显示在用户屏幕上的缩略图中。

## 使用对象 URL

Gecko 2.0 引入了对 DOM {{ domxref("window.URL.createObjectURL()") }} 和 {{ domxref("window.URL.revokeObjectURL()") }} 方法的支持。这使得你可以创建用于引用任何数据的简单 URL 字符串，也可以引用一个包括用户电脑上的本地文件的 DOM {{ domxref("File") }}对象。

当你需要在 HTML 中通过 URL 来引用一个{{ domxref("File") }}对象时，你可以创建一个对象 URL，就像这样：

```js
var objectURL = window.URL.createObjectURL(fileObj);
```

这个对象 URL 是一个标识{{ domxref("File") }}对象的字符串。每次你调用{{ domxref("window.URL.createObjectURL()") }}，就会产生一个唯一的对象 URL，即使是你对一个已创建了对象 URL 的文件再次创建一个对象 URL。每个创建了的对象 URL 必须要释放。当文档关闭时，它们会自动被释放。如果你的网页要动态使用它们，你需要显式调用 {{ domxref("window.URL.revokeObjectURL()") }}来释放它们：

```js
window.URL.revokeObjectURL(objectURL);
```

## 示例：使用对象 URL 来显示图片

这个例子使用对象 URL 来显示图片缩略图。另外，示例也会显示文件名和文件大小等其他文件信息。

显示接口的 HTML 类似于这样：

```html
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
<a href="#" id="fileSelect">Select some files</a>
<div id="fileList">
  <p>No files selected!</p>
</div>
```

这确定我们的文件 {{ HTMLElement("input") }} 元素显示为一个可以调用文件选择器的链接（我们隐藏了文件输入元素来阻止显示用户不友好的界面）。这个在 [通过 click() 方法使用隐藏的 file input 元素](#通过_click_方法使用隐藏的_file_input_元素)已经说明了这种调用文件选择器的方法。

`handleFiles()` 方法如下：

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
        fileList.innerHTML = "";
        var list = document.createElement("ul");
        fileList.appendChild(list);
        for (var i = 0; i < files.length; i++) {
            var li = document.createElement("li");
            list.appendChild(li);
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(files[i]);
            img.height = 60;
            img.onload = function () {
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

首先，获取 ID 为 `fileList` 的 {{ HTMLElement("div") }} 。这个区块里我们会插入我们的文件列表，包括缩略图。

如果传入 `handleFiles()` 的 {{ domxref("FileList") }} 对象值为 `null` 时，我们只要简单将这块的内部 HTML 为显示“No files selected!”。否则，我们就需要像下面这样编写我们的文件列表：

1. 创建一个无序列表 ({{ HTMLElement("ul") }}) 元素。
2. 通过调用列表的{{ domxref("Node.appendChild()") }}方法来将新的列表元素插入到 {{ HTMLElement("div") }}块。
3. 遍历文件集合 {{ domxref("FileList") }}（即`files`）中的每个 {{ domxref("File") }}：

    1. 创建一个新的列表项（{{ HTMLElement("li") }}）元素并插入到列表中。
    2. 创建一个新的图片（{{ HTMLElement("img") }}）元素。
    3. 设置图片的源为一个新的指代文件的对象 URL，使用{{ domxref("window.URL.createObjectURL()") }}来创建 blob URL。
    4. 设置图片的高度为 60 像素。
    5. 设置图片的 load 事件处理器来释放对象 URL，当图片加载完成之后对象 URL 就不再需要了。这个可以通过调用{{ domxref("window.URL.revokeObjectURL()") }}方法并且传递 `img.src`中的对象 URL 字符串来实现。
    6. 将新的列表项添加到列表中。

这是上面代码的一个在线示例：

{{EmbedLiveSample('示例：使用对象 URL 来显示图片', '100%', '300px')}}

## 例子：上传一个用户选择的文件

另一件您可能想要做的事是让用户将选定的一个或多个文件（例如前一个示例中选择的图像）上传到服务器。这用异步可以很容易地完成。

### 创建上传任务

继续前面示例中构建缩略图的代码，回想一下每个缩略图图像都在 CSS 类`obj`中，并且`file`属性中附加了相应的 {{ domxref("File") }} 。这允许我们使用 {{ domxref("Document.querySelectorAll()") }} 选择用户决定上传的所有图像，如下所示：

```js
function sendFiles() {
  var imgs = document.querySelectorAll(".obj");

  for (var i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

第 2 行获取了文档中所有 CSS 类为`obj`的元素的 {{ domxref("NodeList") }}，命名为`imgs`。在我们的例子中，这些是包含所有图像缩略图的列表。有了这个列表，遍历并为每一项创建一个新的`FileUpload`实例就很简单了。每个实例都可以处理相应文件的上传。

### Handling the upload process for a file 处理文件的上传过程

`FileUpload`函数接受两个输入：一个 image 元素和一个包含图像数据的文件。

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
    xhr.send(evt.target.result);
  };
  reader.readAsBinaryString(file);
}
```

上面的`FileUpload()` 函数创建了一个“加载中”指示器，用于显示进度信息，然后创建了一个 {{ domxref("XMLHttpRequest") }} 来处理上传数据。

实际传输数据前，采取了几道准备步骤：

1. `XMLHttpRequest`的`progress`监听器被设为将加载指示器更新为新的百分比信息，这样随着上传进行，指示器会显示最新的信息。
2. `XMLHttpRequest`的`load`事件监听器被设为将加载指示器的进度信息更新为 100%，以保证进度显示确实达到了 100%（以防在上传过程中出现粒度误差）。然后它移除了已经不再需要的加载指示器。这样上传一完成指示器就会消失。
3. 上传图像文件的请求，是由调用`XMLHttpRequest`的`open()`函数发送 POST 请求完成的。
4. 上传的 MIME 类型是通过调用`XMLHttpRequest`的`overrideMimeType()`函数来设置的。这个例子中，我们使用通用 MIME 类型。是否需要设置 MIME 类型取决于你的具体使用情况。
5. `FileReader`对象用于将文件转换为二进制字符串。
6. 最后，当内容被加载时，会调用`XMLHttpRequest`的`send()`函数来上传文件内容。

> **备注：** 上面例子中使用的非标准的`sendAsBinary`方法在 Gecko 31 中已废弃。请使用标准的`send(Blob data)`方法代替。

### 异步处理文件上传

这个例子演示了如何异步上传文件，在服务器端使用了 php、在客户端使用了 JavaScript。

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
    <script type="application/javascript">
        function sendFile(file) {
            const uri = "/index.php";
            const xhr = new XMLHttpRequest();
            const fd = new FormData();

            xhr.open("POST", uri, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    alert(xhr.responseText); // handle response.
                }
            };
            fd.append('myFile', file);
            // Initiate a multipart/form-data upload
            xhr.send(fd);
        }

        window.onload = function() {
            const dropzone = document.getElementById("dropzone");
            dropzone.ondragover = dropzone.ondragenter = function(event) {
                event.stopPropagation();
                event.preventDefault();
            }

            dropzone.ondrop = function(event) {
                event.stopPropagation();
                event.preventDefault();

                const filesArray = event.dataTransfer.files;
                for (let i=0; i<filesArray.length; i++) {
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

## 例子：用对象 URL 显示 PDF

对象 URL 可以用于 image 之外的其他东西！它可以用于显示嵌入的 PDF 文件或任何其他浏览器能显示的资源。

在 Firefox 中，要让 PDF 嵌入式地显示在 iframe 中（而不是作为下载的文件弹出），必须将`pdfjs.disabled`设为`false` {{non-standard_inline()}}.

```html
<iframe id="viewer">
```

这是`src`属性的改动：

```js
const obj_url = window.URL.createObjectURL(blob);
const iframe = document.getElementById('viewer');
iframe.setAttribute('src', obj_url);
window.URL.revokeObjectURL(obj_url);
```

## 例子：将对象 URL 用于其他文件类型

你可以用同样方式操作其他格式的文件。这是预览上传的视频的方法：

```js
const video = document.getElementById('video');
const obj_url = window.URL.createObjectURL(blob);
video.src = obj_url;
video.play()
window.URL.revokeObjectURL(obj_url);
```

## 相关链接

- {{DOMxRef("File")}}
- {{DOMxRef("FileList")}}
- {{DOMxRef("FileReader")}}
- {{DOMxRef("URL")}}
- {{DOMxRef("XMLHttpRequest")}}
- [Using XMLHttpRequest](/zh-CN/DOM/XMLHttpRequest/Using_XMLHttpRequest)
