---
title: File.name
slug: Web/API/File/name
---

{{APIRef("File API")}}

返回由 {{domxref("File")}} 对象表示的文件的名称。由于安全原因，该属性并不包含文件路径。

## 值

一个字符串，包含不带路径的文件名，例如“My Resume.rtf”。

## 示例

### HTML

```html
<input type="file" id="filepicker" multiple />
<div>
  <p>选定文件列表：</p>
  <ul id="output"></ul>
</div>
```

### JavaScript

```js
const output = document.getElementById("output");
const filepicker = document.getElementById("filepicker");

filepicker.addEventListener("change", (event) => {
  const files = event.target.files;
  output.textContent = "";

  for (const file of files) {
    const li = document.createElement("li");
    li.textContent = file.name;
    output.appendChild(li);
  }
});
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
