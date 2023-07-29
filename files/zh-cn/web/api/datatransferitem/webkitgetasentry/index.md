---
title: DataTransferItem.webkitGetAsEntry()
slug: Web/API/DataTransferItem/webkitGetAsEntry
---

{{APIRef("HTML Drag and Drop API")}}{{Non-standard_header}}

如果由文件描述的项目[`DataTransferItem`](/zh-CN/docs/Web/API/DataTransferItem)是文件，则`webkitGetAsEntry()`返回[`FileSystemFileEntry`](/zh-CN/docs/Web/API/FileSystemFileEntry)或[`FileSystemDirectoryEntry`](/zh-CN/docs/Web/API/FileSystemDirectoryEntry)表示它。如果该项不是文件，`null`则返回。

> **备注：** 此功能`webkitGetAsEntry()`在此时非包含 Firefox 的非 WebKit 浏览器中实现; 它可能会`getAsEntry()`在以后简单地重命名，所以你应该进行防御性编码，寻找两者。

## 语法

```
DataTransferItem.webkitGetAsEntry();
```

### 参数

没有。

### 返回值

[`FileSystemEntry`](/zh-CN/docs/Web/API/FileSystemEntry)基于 A 的对象描述被删除的项目。这将是[`FileSystemFileEntry`](/zh-CN/docs/Web/API/FileSystemFileEntry)或[`FileSystemDirectoryEntry`](/zh-CN/docs/Web/API/FileSystemDirectoryEntry)。

## 示例

在此示例中，创建了一个放置区域，该放置区域[`drop`](/zh-CN/docs/Web/Events/drop)通过扫描已删除的文件和目录来响应事件，从而输出分层目录列表。

### HTML

HTML 建立了放置区本身，它是[`<div>`](/zh-CN/docs/Web/HTML/Element/div)具有 ID 的元素`"dropzone"`，以及带有 ID 的无序列表元素`"listing"`。

```html
<p>Drag files and/or directories to the box below!</p>

<div id="dropzone">
  <div id="boxtitle">Drop Files Here</div>
</div>

<h2>Directory tree:</h2>

<ul id="listing"></ul>
```

### CSS

此处显示示例使用的样式。

```css
#dropzone {
  text-align: center;
  width: 300px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  border: 4px dashed red;
  border-radius: 10px;
}

#boxtitle {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  color: black;
  font:
    bold 2em "Arial",
    sans-serif;
  width: 300px;
  height: 100px;
}

body {
  font:
    14px "Arial",
    sans-serif;
}
```

### JavaScript

首先，让我们看一下递归`scanFiles()`函数。该函数将[`FileSystemEntry`](/zh-CN/docs/Web/API/FileSystemEntry)表示要扫描和处理的文件系统中的条目（`item`参数）和插入内容列表（`container`参数）的元素作为输入。

> **备注：** 要读取目录中的所有文件，`readEntries`需要重复调用，直到它返回一个空数组。在基于 Chromium 的浏览器中，以下示例仅返回最多 100 个条目。

```js
let dropzone = document.getElementById("dropzone");
let listing = document.getElementById("listing");

function scanFiles(item, container) {
  let elem = document.createElement("li");
  elem.innerHTML = item.name;
  container.appendChild(elem);

  if (item.isDirectory) {
    let directoryReader = item.createReader();
    let directoryContainer = document.createElement("ul");
    container.appendChild(directoryContainer);
    directoryReader.readEntries(function (entries) {
      entries.forEach(function (entry) {
        scanFiles(entry, directoryContainer);
      });
    });
  }
}
```

`scanFiles()`首先创建一个新[`<li>`](/zh-CN/docs/Web/HTML/Element/li)元素来表示正在扫描的项目，将项目的名称作为文本内容插入其中，然后将其附加到容器中。容器在此示例中始终是列表元素，您很快就会看到。

一旦当前项目在列表中，[`isDirectory`](/zh-CN/docs/Web/API/FileSystemEntry/isDirectory)就会检查项目的属性。如果该项目是目录，我们需要递归到该目录。第一步是创建一个[`FileSystemDirectoryReader`](/zh-CN/docs/Web/API/FileSystemDirectoryReader)to 来处理获取目录的内容。这是通过调用 item 的[`createReader()`](/zh-CN/docs/Web/API/FileSystemDirectoryEntry/createReader)方法完成的。然后[`<ul>`](/zh-CN/docs/Web/HTML/Element/ul)创建一个 new 并将其附加到父列表; 这将包含列表层次结构中下一级别的目录内容。

之后，[`directoryReader.readEntries()`](/zh-CN/docs/Web/API/FileSystemDirectoryReader/readEntries)调用读取目录中的所有条目。反过来，这些都被传递到递归调用`scanFiles()`以处理它们。其中任何文件都只是插入到列表中; 将任何目录插入到列表中，并在下面添加列表层次结构的新级别，依此类推。

然后是事件处理程序。首先，我们阻止[`dragover`](/zh-CN/docs/Web/Events/dragover)事件由默认处理程序处理，以便我们的 drop 区域可以接收 drop：

```js
dropzone.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();
  },
  false,
);
```

当然，关闭所有事件的事件处理程序是事件的处理程序[`drop`](/zh-CN/docs/Web/Events/drop)：

```js
dropzone.addEventListener(
  "drop",
  function (event) {
    let items = event.dataTransfer.items;

    event.preventDefault();
    listing.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
      let item = items[i].webkitGetAsEntry();

      if (item) {
        scanFiles(item, listing);
      }
    }
  },
  false,
);
```

这将获取表示从 `event.dataTransfer.items` 中删除的项目的 {{domxref("DataTransferItem")}} 对象列表。然后我们调用 {{domxref("Event.preventDefault()")}} 来防止事件在完成后被进一步处理。

现在是时候开始构建列表了。首先，通过设置[`listing.innerHTML`](/zh-CN/docs/Web/API/Element/innerHTML)为空来清空列表。这使我们[`ul`](/zh-CN/docs/Web/API/Ul)开始插入目录条目为空。

然后我们遍历已删除项目列表中的项目。对于每一个，我们调用它的[`webkitGetAsEntry()`](/zh-CN/docs/Web/API/DataTransferItem/webkitGetAsEntry)方法来获得[`FileSystemEntry`](/zh-CN/docs/Web/API/FileSystemEntry)表示文件。如果成功，我们会调用`scanFiles()`处理项目 - 如果它只是一个文件，或者添加它，如果它是一个目录，则将其添加到列表中。

### 结果

你可以通过下面的尝试看看它是如何工作的。找到一些文件和目录并将其拖入，然后查看生成的输出。

{{ EmbedLiveSample('示例', 600, 400) }}

## 规范

此 API 没有官方的 W3C 或 WHATWG 规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [文件和目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- [文件系统 API 简介](/zh-CN/docs/Web/API/File_and_Directory_Entries_API/Introduction)
- {{domxref("DataTransferItem")}}
- {{domxref("FileSystemEntry")}}，{{domxref("FileSystemFileEntry")}}和{{domxref("FileSystemDirectoryEntry")}}
- 活动：[`dragover`](/zh-CN/docs/Web/API/HTMLElement/dragover_event)和[`drop`](/zh-CN/docs/Web/API/HTMLElement/drop_event)
