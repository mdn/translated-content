---
title: HTMLInputElement.webkitdirectory
slug: Web/API/HTMLInputElement/webkitdirectory
---

{{APIRef("HTML DOM")}}{{non-standard_header}}

**`HTMLInputElement.webkitdirectory`**是属于{{HTMLElement("input")}}元素的一个 HTML 属性[`webkitdirectory`](/zh-CN/docs/Web/HTML/Element/input#webkitdirectory)，它指示`<input>`元素应该允许用户选择文件目录，而不是文件。当一个文件目录被选中，该目录及其整个内容层次结构将包含在所选项目集里面。可以使用{{domxref("HTMLInputElement.webkitEntries",
    "webkitEntries")}}属性获取选定的文件系统条目。

## 语法

```js
HTMLInputElement.webkitdirectory = boolValue;
```

### 值

一个布尔值; 如果设置为`true`，则{{HTMLElement("input")}}元素只允许选择目录；如果设置为`false`，则只允许选择文件。

## 了解结果

在用户进行选择后，`files`里的每个{{domxref("File")}}对象都会将其拥有的{{domxref("File.webkitRelativePath")}}属性设置为所选目录内文件所在的相对路径。例如，考虑以下文件系统：

- PhotoAlbums

  - Birthdays

    - Jamie's 1st birthday

      - PIC1000.jpg
      - PIC1004.jpg
      - PIC1044.jpg

    - Don's 40th birthday

      - PIC2343.jpg
      - PIC2344.jpg
      - PIC2355.jpg
      - PIC2356.jpg

  - Vacations

    - Mars

      - PIC5533.jpg
      - PIC5534.jpg
      - PIC5556.jpg
      - PIC5684.jpg
      - PIC5712.jpg

如果用户选择了`PhotoAlbums`，则文件列表上将会包含上面列出的每个文件的{{domxref("File")}}对象，而不是文件目录。条目`PIC2343.jpg`的`webkitRelativePath`属性将会得到`PhotoAlbums/Birthdays/Don's 40th birthday/PIC2343.jpg`的值。即使{{domxref("FileList")}}是扁平的，这也使得知道层次结构成为可能。

> **备注：** 在 _Chromium < 72_ 里，`webkitRelativePath` 的行为表现有所不同。有关更多详细信息，请参见[此 bug](https://bugs.chromium.org/p/chromium/issues/detail?id=124187)。

## 示例

在这个例子中，提供了一个目录选择器，它使用户可以选择一个或多个目录。当[`change`](/zh-CN/docs/Web/API/HTMLElement/change_event)事件被触发的时候，将生成并显示所选目录层次结构中包含的所有文件的列表。

### HTML

```html
<input type="file" id="filepicker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript

```js
document.getElementById("filepicker").addEventListener(
  "change",
  function (event) {
    let output = document.getElementById("listing");
    let files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      let item = document.createElement("li");
      item.innerHTML = files[i].webkitRelativePath;
      output.appendChild(item);
    }
  },
  false,
);
```

### 结果

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

这个 API 没有官方的 W3C 或者 WHATWG 规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [文件和目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("File.webkitRelativePath")}}
