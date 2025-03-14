---
title: Blob：size 属性
slug: Web/API/Blob/size
l10n:
  sourceCommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("Blob")}} 接口的 **`size`** 属性返回 {{domxref("Blob")}} 或 {{domxref("File")}} 的字节数。

## 值

`Blob`（或基于 `Blob` 的对象，例如 {{domxref("File")}}）所包含数据的字节数。

## 示例

该实例使用 `file` 类型的 {{HTMLElement("input")}} 元素向用户请求一组文件，然后遍历这些文件，输出它们的名称和大小（以字节为单位）。

### HTML

```html
<input type="file" id="input" multiple />
<output id="output">选择文件……</output>
```

```css hidden
output {
  display: block;
  margin-top: 16px;
}
```

### JavaScript

```js
const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("change", (event) => {
  output.innerText = "";

  for (const file of event.target.files) {
    output.innerText += `${file.name} 文件具有 ${file.size} 字节的大小。\n`;
  }
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Blob")}}
- [在 web 应用程序中使用文件](/zh-CN/docs/Web/API/File_API/Using_files_from_web_applications)
