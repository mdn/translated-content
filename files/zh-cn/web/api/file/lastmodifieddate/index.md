---
title: File：lastModifiedDate 属性
slug: Web/API/File/lastModifiedDate
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}{{Non-standard_Header}}

{{domxref("File")}} 接口的 **`lastModifiedDate`** 只读属性返回文件的最后修改日期。没有已知最后修改日期的文件则返回当前日期。

## 值

一个 {{JSXRef("Global_Objects/Date", "Date")}} 对象，指示上次修改文件的日期和时间。

## 示例

```js
// fileInput 是一个 HTMLInputElement：<input type="file" multiple id="my-file-input">
const fileInput = document.getElementById("my-file-input");

for (const file of fileInput.files) {
  console.log(`${file.name} 最后修改日期为 ${file.lastModifiedDate}`);
}
```

## 时间精度降低

为了防止计时攻击和[指纹识别](/zh-CN/docs/Glossary/Fingerprinting)，`someFile.lastModifiedDate` 的精度可能会根据浏览器设置进行舍入。在 Firefox 中，`privacy.reduceTimerPrecision` 首选项默认启用，默认为 2ms。你还可以启用 `privacy.resistFingerprinting`，在这种情况下精度将为 100ms 或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 的值，以较大者为准。

例如，在降低时间精度的情况下，`someFile.lastModifiedDate.getTime()` 的结果将始终是 2 的倍数，或者在启用 `privacy.resistFingerprinting` 的情况下为 100 的倍数（或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`）。

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

_尽管存在于文件 API 规范的早期草案中，但此属性已从中删除，并且此属性现在是非标准的。使用 {{domxref("File.lastModified")}} 代替。_

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("File")}}
