---
title: File：lastModified 属性
slug: Web/API/File/lastModified
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("File API")}}{{AvailableInWorkers}}

{{domxref("File")}} 接口的 **`lastModified`** 只读属性提供文件的上次修改日期，作为自 Unix 纪元（1970 年 1 月 1 日午夜）以来的毫秒数。没有已知最后修改日期的文件返回当前日期。

## 值

一个数字，表示自 Unix 纪元以来的毫秒数。

## 示例

下面的示例将循环遍历你选择的文件，并打印每个文件在过去一年内是否被修改过。

### HTML

```html
<input type="file" id="file-picker" name="fileList" multiple />
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
const filePicker = document.getElementById("file-picker");

filePicker.addEventListener("change", (event) => {
  const files = event.target.files;
  const now = new Date();
  output.textContent = "";

  for (const file of files) {
    const date = new Date(file.lastModified);
    // 如果文件超过 1 年没有修改，则为 true
    const stale = now.getTime() - file.lastModified > 31_536_000_000;
    output.textContent += `${file.name} 是${
      stale ? "陈旧的" : "新的"
    }（${date}）。\n`;
  }
});
```

### 结果

{{EmbedLiveSample('示例')}}

### 动态创建文件

如果文件是动态创建的，可以在 {{domxref("File.File()", "File()")}} 构造函数中提供最后修改时间。如果未提供该参数，`lastModified` 将会继承文件对象被创建时的时间（来自 {{jsxref("Date.now()")}}）。

```js
const fileWithDate = new File([], "file.bin", {
  lastModified: new Date(2017, 1, 1),
});
console.log(fileWithDate.lastModified); // 返回 1485903600000

const fileWithoutDate = new File([], "file.bin");
console.log(fileWithoutDate.lastModified); // 返回当前时间
```

## 时间精度降低

为了防止计时攻击和[指纹识别](/zh-CN/docs/Glossary/Fingerprinting)，`someFile.lastModified` 的精度可能会根据浏览器设置进行舍入。在 Firefox 中，`privacy.reduceTimerPrecision` 首选项默认启用，默认为 2ms。你还可以启用 `privacy.resistFingerprinting`，在这种情况下精度将为 100ms 或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 的值，以较大者为准。

例如，在降低时间精度的情况下，`someFile.lastModified` 的结果将始终是 2 的倍数，或者在启用 `privacy.resistFingerprinting` 的情况下为 100 的倍数（或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）。

```js
// Firefox 60 中的时间精度降低（2 毫秒）
someFile.lastModifiedDate.getTime();
// 可能是：
// 1519211809934
// 1519211810362
// 1519211811670
// …

// 启用 `privacy.resistFingerprinting` 会降低时间精度
someFile.lastModifiedDate.getTime();
// 可能是：
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("File")}}
