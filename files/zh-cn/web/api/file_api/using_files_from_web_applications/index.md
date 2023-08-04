---
title: 在 web 应用程序中使用文件
slug: Web/API/File_API/Using_files_from_web_applications
---

{{APIRef("File API")}}

通过使用文件 API，web 内容可以要求用户选择本地文件，然后读取这些文件的内容。这种选择可以通过使用 HTML `{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}` 元素或通过拖放来完成。

## 访问被选择的文件

考虑这段 HTML:

```html
<input type="file" id="input" multiple />
```

通过文件 API，我们可以访问 {{DOMxRef("FileList")}}，它包含了表示用户所选文件的 {{DOMxRef("File")}} 对象。

`input` 元素的 `multiple` 属性允许用户选择多个文件。

使用传统的 DOM 选择器访问一个被选择的文件：

```js
const selectedFile = document.getElementById("input").files[0];
```

### 通过 change 事件访问被选择的文件

可以（但不是强制的）通过 `change` 事件访问 {{DOMxRef("FileList")}}。你需要使用 {{DOMxRef("EventTarget.addEventListener()")}} 添加 `change` 事件的处理器，像这样：

```js
const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* 现在你可以处理文件列表 */
}
```

## 获取被选择文件的信息

DOM 提供的 {{DOMxRef("FileList")}} 对象列出了用户选择的所有文件，每个文件都被指定为一个 {{DOMxRef("File")}} 对象。你可以通过检查文件列表的 `length` 属性值来确定用户选择了多少个文件：

```js
const numFiles = files.length;
```

可以像数组一样简单地访问文件列表来检索各个 {{DOMxRef("File")}} 对象。

{{DOMxRef("File")}} 对象提供了三个属性，包含了关于文件的有用信息。

- `name`
  - : 文件名称，只读字符串。只包含文件名，不包含任何路径信息。
- `size`
  - : 以字节数为单位的文件大小，只读的 64 位整数。
- `type`
  - : 文件的 MIME 类型，只读字符串，当类型不能确定时为 `""`。

### 示例：显示文件大小

下面的例子展示了 `size` 属性的一种可能用法：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>文件大小</title>
  </head>

  <body>
    <form name="uploadForm">
      <div>
        <input id="uploadInput" type="file" multiple />
        <label for="fileNum">选择的文件数量：</label>
        <output id="fileNum">0</output>；
        <label for="fileSize">总大小：</label>
        <output id="fileSize">0</output>
      </div>
      <div><input type="submit" value="上传文件" /></div>
    </form>

    <script>
      const uploadInput = document.getElementById("uploadInput");
      uploadInput.addEventListener(
        "change",
        () => {
          // Calculate total size
          let numberOfBytes = 0;
          for (const file of uploadInput.files) {
            numberOfBytes += file.size;
          }
          // Approximate to the closest prefixed unit
          const units = [
            "B",
            "KiB",
            "MiB",
            "GiB",
            "TiB",
            "PiB",
            "EiB",
            "ZiB",
            "YiB",
          ];
          const exponent = Math.min(
            Math.floor(Math.log(numberOfBytes) / Math.log(1024)),
            units.length - 1,
          );
          const approx = numberOfBytes / 1024 ** exponent;
          const output =
            exponent === 0
              ? `${numberOfBytes} bytes`
              : `${approx.toFixed(3)} ${
                  units[exponent]
                } (${numberOfBytes} bytes)`;
          document.getElementById("fileNum").textContent =
            uploadInput.files.length;
          document.getElementById("fileSize").textContent = output;
        },
        false,
      );
    </script>
  </body>
</html>
```

## 通过 click() 方法使用隐藏的文件 input 元素

你可以隐藏公认难看的文件 {{HTMLElement("input")}} 元素并显示你自己的界面来打开文件选择器，然后显示哪个或哪些文件被用户选中了。你可以通过给 input 元素添加 `display:none` 的样式，再调用 {{HTMLElement("input")}} 元素的 {{DOMxRef("HTMLElement.click","click()")}} 方法来实现。

考虑这段 HTML：

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none" />
<button id="fileSelect" type="button">选择一些文件</button>
```

处理 `click` 事件的代码类似于这样：

```js
const fileSelect = document.getElementById("fileSelect");
const fileElem = document.getElementById("fileElem");

fileSelect.addEventListener(
  "click",
  (e) => {
    if (fileElem) {
      fileElem.click();
    }
  },
  false,
);
```

你可以给这个用来打开文件选择器的 {{HTMLElement("button")}} 元素添加任何你想要的样式。

## 使用 label 元素来触发一个隐藏的文件 input 元素

为了允许在不使用 JavaScript（click() 方法）的情况下打开文件选择器，可以使用 {{HTMLElement("label")}} 元素。注意，在这种情况下，input 元素不能用 `display: none` 来隐藏（也不能用 `visibility: hidden`），否则标签就不具有键盘无障碍性。请使用 [visually-hidden 技术](https://www.a11yproject.com/posts/how-to-hide-content/)代替。

考虑这段 HTML：

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  class="visually-hidden" />
<label for="fileElem">选择一些文件</label>
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

input.visually-hidden:is(:focus, :focus-within) + label {
  outline: thin dotted;
}
```

这里不需要添加任何 JavaScript 代码来调用 `fileElem.click()`，你也可以给 label 元素添加你想要的样式。你需要在其 label 上提供隐藏 input 字段的焦点状态的视觉提示，比如上面用的轮廓，或者背景颜色或边框阴影。（截至编写时为止，Firefox 不显示 `<input type="file">` 元素的视觉提示。）

## 使用拖放来选择文件

你还可以让用户将文件拖拽到你的 web 应用中。

第一步是创建一个 drop 区域。虽然你网页内容的哪部分接受拖放取决于你的应用设计，但是使一个元素接收 drop 事件是很容易的。

```js
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

在这个例子中，我们将 ID 为 `dropbox` 的元素变为了我们的 drop 区域。这是通过给元素添加 {{domxref("HTMLElement/dragenter_event", "dragenter")}}、{{domxref("HTMLElement/dragover_event", "dragover")}} 和 {{domxref("HTMLElement/drop_event", "drop")}} 事件监听器实现的。

我们其实并不需要对 `dragenter` 和 `dragover` 事件进行处理，所以这些函数都很简单。它们只需要包括禁止事件传播和阻止默认事件：

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

真正的奥妙在 `drop()` 这个函数中：

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
```

这里，我们从事件中获取到了 `dataTransfer` 这个字段，然后从中得到文件列表，再将它们传递给 `handleFiles()` 函数。在这之后，处理文件的方法和用 `input` 元素或者用拖拽就是一样的了。

## 示例：显示用户选择的图片的缩略图

比方说，你正在开发一个炫酷的下一代图片分享网站，并且想使用 HTML 来展示用户在实际上传之前的图片的缩略图。你可以像我们之前讨论的那样创建自己的 input 元素或者 drop 区域，然后对它们使用一个回调函数，比如下面的 `handleFiles()`。

```js
function handleFiles(files) {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith("image/")) {
      continue;
    }

    const img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // 假设“preview”就是用来显示内容的 div

    const reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
```

这里我们循环处理用户选择的文件，看每个文件的 `type` 属性是不是以“`image/`”开头。对每个文件而言，如果它是图片，我们就创建一个新的 `img` 元素。可以使用 CSS 来创建一个漂亮的边框或阴影来显示图片的具体大小，在这儿就不具体做了。

为了在 DOM 树中更容易地找到他们，每个图片元素都被添加了一个名为 `obj` 的 CSS 类。我们还给每个图片添加了 `file` 属性以指定其 {{DOMxRef("File")}} 属性；这样做可以让我们拿到稍后需要实际上传的图片。我们在预览页中使用 {{DOMxRef("Node.appendChild()")}} 来添加新的缩略图。

接下来，我们创建了 {{DOMxRef("FileReader")}} 来处理异步的图片加载并把它赋给 `img` 元素。在创建一个新的 `FileReader` 对象后，我们设定了它的 `onload` 函数，然后调用 `readAsDataURL()` 函数开始后台读取文件。当整个图片文件的内容都被全部加载完后，它们被转换成了一个被传递到 `onload` 回调函数的 `data:` URL。我们对这个程序的实现是将 `img` 元素的 `src` 属性设置为加载的图片，从而使图片出现在用户屏幕的缩略图中。

## 使用对象 URL

DOM 的 {{DOMxRef("URL.createObjectURL()")}} 和 {{DOMxRef("URL.revokeObjectURL()")}} 方法让你创建简单的 URL 字符串，可以用来引用任何可以用 DOM {{DOMxRef("File")}} 对象引用的数据，包括用户电脑中的本地文件。

当你需要在 HTML 中通过 URL 来引用一个 {{DOMxRef("File")}} 对象时，你可以创建一个对象 URL，就像这样：

```js
const objectURL = window.URL.createObjectURL(fileObj);
```

这个对象 URL 是一个标识 {{DOMxRef("File")}} 对象的字符串。每次你调用 {{DOMxRef("URL.createObjectURL()")}} ，都会创建一个唯一的对象 URL，即使你已经为该文件创建了一个对象 URL。每一个 URL 都必须被释放。虽然它们会在文档卸载时自动释放，但如果你的页面动态地使用它们，你应该通过调用 {{DOMxRef("URL.revokeObjectURL()")}} 明确地释放它们：

```js
URL.revokeObjectURL(objectURL);
```

## 示例：使用对象 URL 来显示图片

这个示例使用对象 URL 来显示图片缩略图。另外，示例也会显示文件名和文件大小等其他文件信息。

呈现界面的 HTML 看起来像这样：

```html
<input
  type="file"
  id="fileElem"
  multiple
  accept="image/*"
  style="display:none" />
<a href="#" id="fileSelect">选择一些文件</a>
<div id="fileList">
  <p>没有选择任何文件！</p>
</div>
```

这就建立了我们的文件 {{HTMLElement("input")}} 元素，以及调用文件选取器的链接（因为我们把文件 input 隐藏起来，以防止显示那个不那么吸引人的用户界面）。这在[使用 click() 方法隐藏文件 input 元素](<#通过_click()_方法使用隐藏的_file_input_元素>)一节中有所说明，调用文件选取器的方法也是如此。

`handleFiles()` 方法如下：

```js
const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener(
  "click",
  (e) => {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault(); // 避免导航至“#”
  },
  false,
);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>没有选择任何文件！</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 60;
      img.onload = () => {
        URL.revokeObjectURL(img.src);
      };
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = `${this.files[i].name}: ${this.files[i].size} bytes`;
      li.appendChild(info);
    }
  }
}
```

首先，获取 ID 为 `fileList` 的 {{HTMLElement("div")}} 。这个区块里我们会插入我们的文件列表，包括缩略图。

如果传入 `handleFiles()` 的 {{DOMxRef("FileList")}} 对象值为 `null` 时，我们只要简单将这块的内部 HTML 为显示“没有选择任何文件！”。否则，我们就需要像下面这样编写我们的文件列表：

1. 创建一个无序列表（{{HTMLElement("ul")}}）元素。
2. 通过调用列表的 {{DOMxRef("Node.appendChild()")}} 方法来将新的列表元素插入到 {{HTMLElement("div")}} 块。
3. 遍历 `files` 代表的文件集合 {{DOMxRef("FileList")}} 中的每个 {{DOMxRef("File")}}：

   1. 创建一个新的列表项（{{HTMLElement("li")}}）元素并插入到列表中。
   2. 创建一个新的图片（{{HTMLElement("img")}}）元素。
   3. 设置图片的源为一个新的指代文件的对象 URL，使用 {{DOMxRef("URL.createObjectURL()")}} 来创建 blob URL。
   4. 设置图片的高度为 60 像素。
   5. 设置图片的 load 事件处理器来释放对象 URL，当图片加载完成之后对象 URL 就不再需要了。这个可以通过调用 {{DOMxRef("URL.revokeObjectURL()")}} 方法并且传递 `img.src`中的对象 URL 字符串来实现。
   6. 将新的列表项添加到列表中。

这是上面代码的一个在线示例：

{{EmbedLiveSample('示例：使用对象 URL 来显示图片', '100%', '300px')}}

## 示例：上传一个用户选择的文件

另一件你可能想要做的事是让用户将选定的一个或多个文件（例如前一个示例中选择的图像）上传到服务器。这用异步可以很容易地完成。

### 创建上传任务

继续前面示例中构建缩略图的代码，回想一下每个缩略图图像都在 CSS 类 `obj` 中，并且 `file` 属性中附加了相应的 {{DOMxRef("File")}}。这允许我们使用 {{DOMxRef("Document.querySelectorAll()")}} 选择用户决定上传的所有图像，如下所示：

```js
function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

第 2 行获取了文档中所有 CSS 类为 `obj` 的元素的 {{DOMxRef("NodeList")}}，命名为 `imgs`。在我们的例子中，这些是包含所有图像缩略图的列表。有了这个列表，遍历并为每一项创建一个新的 `FileUpload` 实例就很简单了。每个实例都可以处理相应文件的上传。

### 处理文件的上传过程

`FileUpload` 函数接受两个输入：一个 image 元素和一个包含图像数据的文件。

```js
function FileUpload(img, file) {
  const reader = new FileReader();
  this.ctrl = createThrobber(img);
  const xhr = new XMLHttpRequest();
  this.xhr = xhr;

  const self = this;
  this.xhr.upload.addEventListener(
    "progress",
    (e) => {
      if (e.lengthComputable) {
        const percentage = Math.round((e.loaded * 100) / e.total);
        self.ctrl.update(percentage);
      }
    },
    false,
  );

  xhr.upload.addEventListener(
    "load",
    (e) => {
      self.ctrl.update(100);
      const canvas = self.ctrl.ctx.canvas;
      canvas.parentNode.removeChild(canvas);
    },
    false,
  );
  xhr.open(
    "POST",
    "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php",
  );
  xhr.overrideMimeType("text/plain; charset=x-user-defined-binary");
  reader.onload = (evt) => {
    xhr.send(evt.target.result);
  };
  reader.readAsBinaryString(file);
}

function createThrobber(img) {
  const throbberWidth = 64;
  const throbberHeight = 6;
  const throbber = document.createElement("canvas");
  throbber.classList.add("upload-progress");
  throbber.setAttribute("width", throbberWidth);
  throbber.setAttribute("height", throbberHeight);
  img.parentNode.appendChild(throbber);
  throbber.ctx = throbber.getContext("2d");
  throbber.ctx.fillStyle = "orange";
  throbber.update = (percent) => {
    throbber.ctx.fillRect(
      0,
      0,
      (throbberWidth * percent) / 100,
      throbberHeight,
    );
    if (percent === 100) {
      throbber.ctx.fillStyle = "green";
    }
  };
  throbber.update(0);
  return throbber;
}
```

上面的 `FileUpload()` 函数创建了一个“加载中”指示器，用于显示进度信息，然后创建了一个 {{DOMxRef("XMLHttpRequest")}} 来处理上传数据。

实际传输数据前，采取了几道准备步骤：

1. `XMLHttpRequest` 的 `progress` 监听器被设为将加载指示器更新为新的百分比信息，这样随着上传进行，指示器会显示最新的信息。
2. `XMLHttpRequest` 的 `load` 监听器被设为将加载指示器的进度信息更新为 100%，以保证进度显示确实达到了 100%（以防在上传过程中出现粒度误差）。然后它移除了已经不再需要的加载指示器。这样上传一完成指示器就会消失。
3. 上传图像文件的请求，是由调用 `XMLHttpRequest` 的 `open()` 函数发送 POST 请求完成的。
4. 上传的 MIME 类型是通过调用 `XMLHttpRequest` 的 `overrideMimeType()` 函数来设置的。这个例子中，我们使用通用 MIME 类型。是否需要设置 MIME 类型取决于你的具体使用情况。
5. `FileReader` 对象用于将文件转换为二进制字符串。
6. 最后，当内容被加载时，会调用 `XMLHttpRequest` 的 `send()` 函数来上传文件内容。

### 异步处理文件上传

这个例子演示了如何异步上传文件，在服务器端使用了 PHP，在客户端使用了 JavaScript。

```js
<?php
if (isset($_FILES['myFile'])) {
    // Example:
    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    exit;
}
?><!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <title>dnd binary upload</title>
    <script type="application/javascript">
        function sendFile(file) {
            const uri = "/index.php";
            const xhr = new XMLHttpRequest();
            const fd = new FormData();

            xhr.open("POST", uri, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert(xhr.responseText); // 处理响应
                }
            };
            fd.append('myFile', file);
            // 初始化 multipart/form-data 上传
            xhr.send(fd);
        }

        window.onload = () => {
            const dropzone = document.getElementById("dropzone");
            dropzone.ondragover = dropzone.ondragenter = (event) => {
                event.stopPropagation();
                event.preventDefault();
            }
            dropzone.ondrop = (event) => {
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
        <div id="dropzone" style="margin:30px; width:500px; height:300px; border:1px dotted grey;">将文件拖放到这里</div>
    </div>
</body>
</html>
```

## 示例：用对象 URL 显示 PDF

对象 URL 可以用于图像之外的其他东西！它可以用于显示嵌入的 PDF 文件或任何其他浏览器能显示的资源。

在 Firefox 中，要让 PDF 嵌入式地显示在 iframe 中（而不是作为下载的文件弹出），必须将 `pdfjs.disabled` 设为 `false` {{non-standard_inline()}}.

```html
<iframe id="viewer"></iframe>
```

这是 `src` 属性的改动：

```js
const obj_url = URL.createObjectURL(blob);
const iframe = document.getElementById("viewer");
iframe.setAttribute("src", obj_url);
URL.revokeObjectURL(obj_url);
```

## 示例：将对象 URL 用于其他文件类型

你可以用同样方式操作其他格式的文件。这是预览上传的视频的方法：

```js
const video = document.getElementById("video");
const obj_url = URL.createObjectURL(blob);
video.src = obj_url;
video.play();
URL.revokeObjectURL(obj_url);
```

## 参见

- {{DOMxRef("File")}}
- {{DOMxRef("FileList")}}
- {{DOMxRef("FileReader")}}
- {{DOMxRef("URL")}}
- {{DOMxRef("XMLHttpRequest")}}
- [使用 XMLHttpRequest](/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
