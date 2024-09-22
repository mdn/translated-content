---
title: FileList：item() 方法
slug: Web/API/FileList/item
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("FileList")}} 接口的 **`item()`** 方法返回一个 {{domxref("File")}} 对象，表示文件列表中指定索引处的文件。

## 语法

```js-nolint
item(index)
```

### 参数

- `index`
  - : 要从列表中检索的文件的从零开始的索引。

### 返回值

表示所请求文件的 {{domxref("File")}} 对象。

## 示例

### 打印文件名

在此示例中，我们使用 `item()` 选择 `FileList` 中的第一项。

#### HTML

```html
<input type="file" />
<div class="output"></div>
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", () => {
  const fileList = fileInput.files;
  if (fileList.length > 0) {
    const file = fileList.item(0);
    output.textContent = `你选择了：${file.name}`;
  }
});
```

#### 结果

{{EmbedLiveSample("打印文件名")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
