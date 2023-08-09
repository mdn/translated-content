---
title: 在網頁應用程式中使用本地檔案
slug: Web/API/File_API/Using_files_from_web_applications
---

現在可以透過新增至 HTML5 DOM 的 File API 讓 web 內容要求使用者選取本地端的檔案後讀取被選取檔案中的內容。檔案的選取動作可以使用 HTML 的 [`input`](/zh-TW/DOM/HTMLInputElement) 元素，或是用拖曳檔案（drag and drop）的方式來完成。

如果你想要使用 DOM 檔案 API 的文件擴展或是其他 Chrome 程式碼，你可以參考[使用 DOM 檔案 API 在 FireFox 外觀代碼中](/zh-TW/Extensions/Using_the_DOM_File_API_in_chrome_code)。

## 使用 HTML 選擇本地檔案

HTML 語法：

```html
<input type="file" id="input" />
```

File API 可以從 {{ domxref("File") }} 物件中讀取 {{ domxref("FileList") }} ，{{domxref("FileList") }} 內包含使用者所選取的檔案。

如果使用者只選擇一個檔案，那麼我們只需要考慮第一個檔案物件。

使用 DOM 獲取選擇的檔案：

```js
var selectedFile = document.getElementById("input").files[0];
```

使用 [jQuery](http://jquery.com/) 獲取選擇的檔案：

```js
var selectedFile = $("#input").get(0).files[0];

var selectedFile = $("#input")[0].files[0];
```

> **備註：** 如果獲取 "files is undefined" 錯誤: 代表未選擇正確的 HTML 元素, 這時忘記 jQuery 回傳符合 DOM 元素的清單. 改使用 DOM 元素呼叫 "files" 方法.

## 使用 change event 獲取選擇的檔案

使用 File API 選擇單一檔案是非常簡單的，如下

```html
<input type="file" id="input" onchange="handleFiles(this.files)" />
```

當使用者選取一個檔案，呼叫 `handleFiles()` 會得到一個 {{domxref("FileList") }} 的物件。{{domxref("FileList") }} 裡面還會有一個 {{domxref("File")}} 的物件，裡面的東西就是使用者選取的檔案。

如果你想要讓使用者一次選擇多個檔案，可以在 `input` 元素中使用 `multiple` 的屬性：

```html
<input
  type="file"
  id="input"
  multiple="true"
  onchange="handleFiles(this.files)" />
```

在上述這個例子中，檔案名單會傳遞到 `handleFiles()` 函數，其中包含了使用者選的每個檔案 {{domxref("File")}} 物件。

### 使用 EventListener 動態地監聽

如果使用了其他的函數庫（[jQuery](http://www.jquery.com/)），你會需要使用 {{domxref("EventTarget.addEventListener()") }} 去監聽事件，例如：

```js
var inputElement = document.getElementById("inputField");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  var fileList = this.files;

  /* now you can work with the file list */
}
```

在這個例子中，`handleFiles()` 函數找尋檔案清單而非接收參數, 因為這樣增加的 event listeners 不能接受參數.

## 獲得選取檔案的資訊

由 DOM 提供的 {{domxref("FileList") }} 物件代表使用者選取的所有檔案，每個又是 {{domxref("File")}} 物件。可以藉由 {{domxref("FileList") }} 的 length 屬性得知使用者選取的檔案數量：

```js
var numFiles = files.length;
```

使用陣列獲取 {{domxref("File")}} 物件：

```js
for (var i = 0; i < files.length; i++) {
  var file = files[i];
  ..
}
```

上述的例子顯示獲取在檔案清單裡所有檔案物件的方法。

{{domxref("File")}} 提供三個包含檔案重要訊息的屬性。

- `name`
  - : 唯讀的檔案名稱，並未包含檔案路徑。
- `size`
  - : 為 64 位元的整數，用以表示檔案的 byte 的長度。
- `type`
  - : 為唯讀字串。表示檔案的 MIME-type 。若是無法取得檔案的 Mime-type ，則其值會是一個空字串 `""`。

## 使用 click() 方法隱藏檔案輸入元素

從 Gecko 2.0 開始，為了顯示個人化開啟檔案的 UI 和使用者選擇的檔案可以隱藏 {{ HTMLElement("input") }} 元素和顯示個人化的設計。可以藉由設置 CSS 「display:none」 和對 {{ HTMLElement("input") }} 元素呼叫 `click()` 方法。

HTML 如下：

```html
<input
  type="file"
  id="fileElem"
  multiple="true"
  accept="image/*"
  style="display:none"
  onchange="handleFiles(this.files)" />
<a href="#" id="fileSelect">Select some files</a>
```

`doClick()` 方法:

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

很明顯的，可以使用 CSS 來設計新的上傳檔案的按鈕。

## 使用拖放選取檔案

使用者可以使用拖放來選取檔案，首先要設置放的區域，確定文件可以接收放的檔案，方法如下：

```js
var dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
```

在這個範例中，我們將 ID "dropbox" 設為放的區域，這是由於我們監聽了 `dragenter`、`dragover` 和 `drop`事件。

我們甚至不需要處理 `dragenter` 和 `dragover` 事件，所以這些函數很簡單。他們阻止了事件的傳播和預設事件的發生：

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

神奇的 `drop()` 函數:

```js
function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}
```

`這邊我們用 dataTransfer` 來獲取檔案清單, 並傳遞給 `handleFiles()`。 我們可以發現，不論使用拖放或是其他取得檔案，處理檔案的方式都是相同。

## 範例：顯示選取的圖片

假設要開發一個分享照片的網站，想使用 HTML5 來讓使用者在上傳圖片前預覽縮圖。簡單來說就是像先前討論地一樣建立 input 元素或是 drop 區域，接著再呼叫類似 `handleFiles()` 的函數。

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

這邊迴圈處理了使用者選取的每個檔案並檢查每個檔案的類型是不是圖檔(藉由使用正規表達式檢查是否符合字串 "image.\*")。每一個是圖片的檔案，我們創建一個 `img` 元素。CSS 被使用來美化外框、陰影、還有設定圖片的尺寸，所以那些並不需要在這邊寫入。

為了使圖片可以在 DOM 裡面更容易被找到，所以每個圖片都有設定 CSS class 「obj」。 我們也在每個圖檔標記 `file` 屬性以辨認 [`File`](/zh-TW/DOM/File)；這使我們更容易取得真正要上傳的圖檔。最後我們使用{{ domxref("Node.appendChild()") }} 在文件中增加縮圖的元素。

[`FileReader`](/zh-TW/DOM/FileReader) 處理要非同步讀取的圖檔並跟 `img` 元素連接。在創建 `FileReader` 物件後，我們設置了 `onload`並 呼叫 `readAsDataURL()` 在背景呼叫讀取的程序。當所有圖檔都被讀取時，他們被轉換為傳到 `onload callback` 的 `data` URL。 這個範例簡易的設置`img` 元素的 `src` 屬性來讀取圖檔並在螢幕上顯示。

## 使用 object URLs

Gecko 2.0 支援 DOM 的{{ domxref("window.URL.createObjectURL()") }} 和 {{ domxref("window.URL.revokeObjectURL()") }} 方法。可以藉由這些方法創建表示任何為 DOM [`File`](/zh-TW/DOM/File) 物件的 data URL 字串，包含了使用者電腦上的檔案。

可以使 [`File`](/zh-TW/DOM/File) 物件作為 HTML 元素 URL 的參考，創建 object URL 的方法：

```js
var objectURL = window.URL.createObjectURL(fileObj);
```

object URL 為表示 [`File`](/zh-TW/DOM/File) 物件的字串。即使已經對相同檔案創建了 object URL，每次呼叫 {{ domxref("window.URL.createObjectURL()") }}，就會創建一個 object URL。當文檔卸載時他們將會被自動釋放，如果要動態地使用，需要呼叫 {{ domxref("window.URL.revokeObjectURL()") }} 釋放：

```js
window.URL.revokeObjectURL(objectURL);
```

## 範例：使用 object URLs 顯示圖片

這個範例使用 object URLs 顯示圖像縮圖。此外也顯示了其他包含檔案名稱和檔案大小的訊息。[線上範例](/samples/domref/file-click-demo.html) (註:瀏覽器版本要求 11/22 之後的火狐版本)。

> **備註：** 這個 API 在較早的 Firefox 4 betas 存在但是 11/22 號後的版本有改變, 所以確定瀏覽器在最新的版本!

HTML：

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

This establishes our file {{ HTMLElement("input") }} element, as well as a link that invokes the file picker, since we keep the file input hidden to prevent that less-than-attractive UI from being displayed. This is explained above in the section [Using hidden file input elements using the click() method](<#使用click()_方法隱藏檔案輸入元素>), as is the `doClick()` method that invokes the file picker.

The `handleFiles()` method follows:

```js
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
      img.onload = function () {
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

This starts by fetching the URL of the {{ HTMLElement("div") }} with the ID "fileList". This is the block into which we'll insert out file list, including thumbmails.

If the {{ domxref("FileList") }} object passed to `handleFiles()` is `null`, we simply set the inner HTML of the block to display "No files selected!". Otherwise, we start building our file list, as follows:

1. A new unordered list ({{ HTMLElement("ul") }} element is created.
2. The new list element is inserted into the {{ HTMLElement("div") }} block by calling its {{ domxref("element.appendChild()") }} method.
3. For each {{ domxref("File") }} in the {{ domxref("FileList") }} represented by `files`:

   1. Create a new list item ({{ HTMLElement("li") }}) element and insert it into the list.
   2. Create a new image ({{ HTMLElement("img") }}) element.
   3. Set the image's source to a new object URL representing the file, using {{ domxref("window.URL.createObjectURL()") }} to create the blob URL.
   4. Set the image's height to 60 pixels.
   5. Set up the image's load event handler to release the object URL, since it's no longer needed once the image has been loaded. This is done by calling the {{ domxref("window.URL.revokeObjectURL()") }} method, passing in the object URL string as specified by `img.src`.
   6. Append the new list item to the list.

## 範例：上傳檔案

接下來這個範例顯示如何非同步的上傳檔案到伺服器。

### 新增上傳的工作

接續先前創建縮圖的範例，將每個縮圖都設置 CSS class 「obj」， 這使得我們可以很容易地使用{{ domxref("Document.querySelectorAll()") }} 選擇使用者要上傳的圖檔，例如：

```js
function sendFiles() {
  var imgs = document.querySelectorAll(".obj");

  for (var i = 0; i < imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
```

第二行創建了 `imgs` 陣列，存放著所有文件中 CSS class 為 「obj」 的 Node。在這個範例中，我們使用這個來創建縮圖。Once we have that list, it's trivial to go through the list, creating a new `FileUpload` instance for each. Each of these handles uploading the corresponding file.

### 處理上傳檔案的程序

`FileUpload` 函數接受圖檔和檔案.

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

`FileUpload()` 函數創建被用來顯示上傳進度的 throbber，接著創建 {{domxref("XMLHttpRequest")}} 上傳檔案.

傳輸資料前的幾個準備工作:

1. The `XMLHttpRequest`'s upload "progress" listener is set to update the throbber with new percentage information, so that as the upload progresses, the throbber will be updated based on the latest information.
2. The `XMLHttpRequest`'s upload "load" event handler is set to update the throbber with 100% as the progress information (to ensure the progress indicator actually reaches 100%, in case of granularity quirks during the process). It then removes the throbber, since it's no longer needed. This causes the throbber to disappear once the upload is complete.
3. The request to upload the image file is opened by calling `XMLHttpRequest`'s `open()` method to start generating a POST request.
4. The MIME type for the upload is set by calling the `XMLHttpRequest` function `overrideMimeType()`. In this case, we're using a generic MIME type; you may or may not need to set the MIME type at all, depending on your use case.
5. The `FileReader` object is used to convert the file to a binary string.
6. Finally, when the content is loaded the `XMLHttpRequest` function `sendAsBinary()` is called to upload the file's content.

> **備註：** 範例中非標準的 `sendAsBinary` 方法已經在 Gecko 31 廢棄且很快將會被移除。可以改使用標準的 `send(Blob data)。`

### 非同步處理上傳檔案的程序

```js
function fileUpload(file) {
  // Please report improvements to: marco.buratto at tiscali.it

  var fileName = file.name,
    fileSize = file.size,
    fileData = file.getAsBinary(), // works on TEXT data ONLY.
    boundary = "xxxxxxxxx",
    uri = "serverLogic.php",
    xhr = new XMLHttpRequest();

  xhr.open("POST", uri, true);
  xhr.setRequestHeader(
    "Content-Type",
    "multipart/form-data, boundary=" + boundary,
  ); // simulate a file MIME POST request.
  xhr.setRequestHeader("Content-Length", fileSize);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status <= 200) || xhr.status == 304) {
        if (xhr.responseText != "") {
          alert(xhr.responseText); // display response.
        }
      }
    }
  };

  var body = "--" + boundary + "\r\n";
  body +=
    "Content-Disposition: form-data; name='fileId'; filename='" +
    fileName +
    "'\r\n";
  body += "Content-Type: application/octet-stream\r\n\r\n";
  body += fileData + "\r\n";
  body += "--" + boundary + "--";

  xhr.send(body);
  return true;
}
```

_使用二進制數據時，這些程式碼還需要修改。_

## 你也可以參考這些文章

- {{domxref("File")}}
- {{domxref("FileList")}}
- {{domxref("FileReader") }}
- [Using XMLHttpRequest](/zh-TW/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using the DOM File API in chrome code](/zh-TW/Extensions/Using_the_DOM_File_API_in_chrome_code)
- {{domxref("XMLHttpRequest")}}
