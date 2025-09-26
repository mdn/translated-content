---
title: HTMLInputElement：webkitdirectory 属性
slug: Web/API/HTMLInputElement/webkitdirectory
---

{{APIRef("File and Directory Entries API")}}

**`HTMLInputElement.webkitdirectory`** 是一个反应了 HTML 属性 [`webkitdirectory`](/zh-CN/docs/Web/HTML/Reference/Elements/input/file#webkitdirectory) 的属性，其指示 {{HTMLElement("input")}} 元素应该让用户选择文件目录而非文件。在选择文件目录后，该目录及其整个内容层次结构将包含在所选项目集内。可以使用 {{domxref("HTMLInputElement.webkitEntries", "webkitEntries")}} 属性获取选定的文件系统条目。

> [!NOTE]
> 该属性在规范中被称为 `webkitEntries` 的原因是，其起源于 Google Chrome 特定的 API。它有可能会被重命名。

## 值

一个布尔值；如果设置为 `true`，则 {{HTMLElement("input")}} 元素只允许选择目录；如果设置为 `false`，则只允许选择文件。

## 理解结果

在用户进行选择后，`files` 里的每个 {{domxref("File")}} 对象都会将其 {{domxref("File.webkitRelativePath")}} 属性设置为所选目录内文件所在的相对路径。例如，考虑以下文件系统：

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

如果用户选择了 `PhotoAlbums`，则文件列表上将会包含上面列出的每个文件（而不包含目录）的 {{domxref("File")}} 对象。条目 `PIC2343.jpg` 的 `webkitRelativePath` 属性值将会是 `PhotoAlbums/Birthdays/Don's 40th birthday/PIC2343.jpg`。即使 {{domxref("FileList")}} 是扁平的，这也使得知道层次结构成为可能。

> [!NOTE]
> 在 _Chromium < 72_ 的版本中，`webkitRelativePath` 的行为表现有所不同。有关更多详细信息，请参见[此 bug](https://crbug.com/124187)。

## 示例

这个示例提供了一个目录选择器，它允许用户选择一个或多个目录。当触发 {{domxref("HTMLElement/change_event", "change")}} 事件时，将生成并显示所选目录层次结构中包含的所有文件的列表。

### HTML

```html
<input type="file" id="filepicker" name="fileList" webkitdirectory multiple />
<ul id="listing"></ul>
```

### JavaScript

```js
document.getElementById("filepicker").addEventListener(
  "change",
  (event) => {
    let output = document.getElementById("listing");
    for (const file of event.target.files) {
      let item = document.createElement("li");
      item.textContent = file.webkitRelativePath;
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

## 浏览器兼容性

{{Compat}}

## 参见

- [文件和目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("File.webkitRelativePath")}}
