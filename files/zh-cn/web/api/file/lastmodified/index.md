---
title: File：lastModified 属性
slug: Web/API/File/lastModified
l10n:
  sourceCommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("File")}} 接口的 **`lastModified`** 只读属性提供文件的上次修改日期，作为自 Unix 纪元（1970 年 1 月 1 日午夜）以来的毫秒数。没有已知最后修改日期的文件返回当前日期。

## 值

一个数字，表示自 Unix 纪元以来的毫秒数。

## 示例

下面的示例将循环遍历你选择的文件，并打印每个文件在过去一年内是否被修改过。

### HTML

```html
<input type="file" id="filepicker" name="fileList" multiple />
<output id="output"></output>
```

```css hidden
output {
  display: block;
  white-space: pre-wrap;
}
```

### JavaScript

```js
const output = document.getElementById("output");
const filepicker = document.getElementById("filepicker");

filepicker.addEventListener("change", (event) => {
  const files = event.target.files;
  const now = new Date();
  output.textContent = "";

  for (const file of files) {
    const date = new Date(file.lastModified);
    // 如果文件超过 1 年没有修改，则为 true
    const stale = now.getTime() - file.lastModified > 31_536_000_000;
    output.textContent += `${file.name} is ${
      stale ? "stale" : "fresh"
    } (${date}).\n`;
  }
});
```

### 结果

{{EmbedLiveSample('示例')}}

### 动态创建文件

如果文件是动态创建的，可以在 {{domxref("File.File()", "new File()")}} 构造函数中提供最后修改时间。如果未提供则会继承文件对象被创建时的 {{jsxref("Date.now()")}}。

```js
const fileWithDate = new File([], "file.bin", {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); // 返回 1485903600000

const fileWithoutDate = new File([], "file.bin");
console.log(fileWithoutDate.lastModified); // 返回当前时间
```

## 时间精度降低

为了防止计时攻击和{{glossary("fingerprinting", "指纹识别")}}，`someFile.lastModifiedDate.getTime()` 的精度可能会根据浏览器设置进行舍入。

在 Firefox 中，`privacy.reduceTimerPrecision` 首选项默认启用，在 Firefox 59 中默认为 20 微秒；Firefox 60 中为 2 毫秒。

```js
// Firefox 60 中的时间精度降低（2 毫秒）
someFile.lastModifiedDate.getTime();
// 1519211809934
// 1519211810362
// 1519211811670
// …

// 启用 `privacy.resistFingerprinting` 会降低时间精度
someFile.lastModifiedDate.getTime();
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

在 Firefox 中，你还可以启用 `privacy.resistFingerprinting`，精度将为 100 毫秒 或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 的值，以较大者为准。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("File")}}
