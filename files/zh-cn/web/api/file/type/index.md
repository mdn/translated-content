---
title: File.type
slug: Web/API/File/type
---

{{APIRef("File API")}}

返回 {{domxref("File")}} 对象所表示文件的媒体类型（MIME）。

## 语法

```js
var name = file.type;
```

## 值

字符串，包含媒体类型（MIME），表示文本是什么类型，例如 PNG 图像是 "image/png"。

## 示例

```html
<input type="file" multiple onchange="showType(this)" />
```

```js
function showType(fileInput) {
  var files = fileInput.files;

  for (var i = 0; i < files.length; i++) {
    var name = files[i].name;
    var type = files[i].type;
    alert("Filename: " + name + " , Type: " + type);
  }
}
```

**注：** 基于当前的实现，浏览器不会实际读取文件的字节流，来判断它的媒体类型。它基于文件扩展来假设；重命名为 .txt 的 PNG 图像文件为 "_text/plain_" 而不是 "_image/png_" 。而且，file.type 仅仅对常见文件类型可靠。例如图像、文档、音频和视频。不常见的文件扩展名会返回空字符串。开发者最好不要依靠这个属性，作为唯一的验证方案。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [在 Web 应用中使用文件](/zh-CN/docs/Using_files_from_web_applications)
