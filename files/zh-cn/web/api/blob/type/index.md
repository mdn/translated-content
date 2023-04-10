---
title: Blob.type
slug: Web/API/Blob/type
---

{{APIRef("File API")}}

[`Blob`](/zh-CN/docs/Web/API/Blob) 对象的 **`type`** 属性给出文件的 [MIME 类型](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)。

## 值

一个包含 MIME 类型的字符串，如果无法确定类型的话则返回空字符串。

## 示例

这个示例要求用户选择一些文件，然后检查每个文件以确保其是指定的图片文件类型之一。

### HTML

```html
<input type="file" id="input" multiple />
<output id="output">选择图片文件……</output>
```

```css hidden
output {
  display: block;
  margin-top: 16px;
}
```

### JavaScript

```js
// 我们的程序只允许 GIF、PNG 和 JPEG 类型的图片
const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("change", (event) => {
  const files = event.target.files;

  if (files.length === 0) {
    output.innerText = "选择图片文件…";
    return;
  }

  const allAllowed = Array.from(files).every((file) =>
    allowedFileTypes.includes(file.type)
  );
  output.innerText = allAllowed
    ? "所有文件都满足！"
    : "请只选择图片文件。";
});
```

### 结果

{{EmbedLiveSample("Examples")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Blob")}}
- [在 web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
