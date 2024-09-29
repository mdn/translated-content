---
title: Blob：type 属性
slug: Web/API/Blob/type
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("Blob")}} 接口的 **`type`** 属性给出文件的 {{Glossary("MIME type", "MIME 类型")}}。

> [!NOTE]
> 基于当前的实现，浏览器不会读取文件的字节流来确定其媒体类型。其根据文件扩展名进行假设；一个被重命名为 .txt 的 PNG 图像文件会返回“_text/plain_”而不是“_image/png_”。此外，`blob.type` 通常只对常见的文件类型（如图像、HTML 文档、音频和视频）有效。不常见的文件扩展名会返回空字符串。客户端配置（例如 Windows 注册表）可能会导致常见类型出现意外值。**开发者不应该仅依赖此属性作为验证方案。**

## 值

一个包含文件 MIME 类型的字符串，如果无法确定类型则返回空字符串。

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
    allowedFileTypes.includes(file.type),
  );
  output.innerText = allAllowed ? "所有文件都符合！" : "请只选择图片文件。";
});
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Blob")}}
- [在 web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
