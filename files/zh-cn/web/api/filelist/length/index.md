---
title: FileList：length 属性
slug: Web/API/FileList/length
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("FileList")}} 接口的 **`length`** 只读属性返回 `FileList` 中的文件数量。

## 值

指示列表中文件数量的数字。

## 示例

### 打印所选文件的数量

在此示例中，我们使用 `length` 属性来查看 `FileList` 中的项目数。

#### HTML

```html
<input type="file" multiple />
<div class="output"></div>
```

#### JavaScript

```js
const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector(".output");

fileInput.addEventListener("change", () => {
  const fileList = fileInput.files;
  output.textContent = `你已选择了：${fileList.length} 个文件`;
});
```

#### 结果

{{EmbedLiveSample("打印所选文件的数量")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
