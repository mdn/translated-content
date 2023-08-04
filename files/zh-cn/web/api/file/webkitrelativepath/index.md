---
title: File.webkitRelativePath
slug: Web/API/File/webkitRelativePath
---

{{APIRef("File API")}}{{non-standard_header}}

**`File.webkitRelativePath`** 是只读属性，包含 {{domxref("USVString")}}，它规定了文件的路径，相对于用户在 {{HTMLElement("input")}} 元素中选择的目录，这个元素设置了 [`webkitdirectory`](/zh-CN/docs/Web/HTML/Element/input#webkitdirectory) 属性。

## 语法

```plain
 relativePath = File.webkitRelativePath
```

### 值

{{domxref("USVString")}} 包含文件路径，相对于用户所选的祖先目录。

## 示例

这个示例展示了目录选择器，它让用户选择一个或多个目录。[`change`](/zh-CN/docs/Web/API/HTMLElement/change_event) 事件触发时，所选目录包含的所有文件的列表，会生成并展示，带有所选目录的层次结构。

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

特别提醒：假设文件路径是 C:\f1\f2\f3\file.txt, 用户选择的是 f1 文件夹，则 Chrome、Firefox、Edge 都能正确返回 f2/f3/file.txt 值。而国产的 QQ 浏览器、360 浏览器、UC 浏览器、搜狗浏览器都只能返回 f3/file.txt。也就是国产浏览器调用 webkitRelativePath 返回的结果都不会是你希望得到的路径，请注意使用时的细微差距。

## 规范

{{Specifications}}

这个 API 没有官方的 W3C 或者 WHATWG 规范。

## 浏览器兼容性

{{Compat}}

## 另见

- [文件和目录条目 API](/zh-CN/docs/Web/API/File_and_Directory_Entries_API)
- {{domxref("HTMLInputElement.webkitEntries")}}
- {{domxref("HTMLInputElement.webkitdirectory")}}
