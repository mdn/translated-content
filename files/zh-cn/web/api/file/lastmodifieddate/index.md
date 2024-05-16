---
title: File：lastModifiedDate 属性
slug: Web/API/File/lastModifiedDate
l10n:
  sourceCommit: 367b982b93c07f7f99e7bb768a6bf326fa5198e6
---

{{APIRef("File API")}}{{AvailableInWorkers}}{{Deprecated_Header}}{{Non-standard_Header}}

{{domxref("File")}} 接口的 **`lastModifiedDate`** 只读属性返回文件的最后修改日期。没有已知最后修改日期的文件则返回当前日期。

## 值

一个 {{JSXRef("Global_Objects/Date", "Date")}} 对象，指示上次修改文件的日期和时间。

## 示例

```js
// fileInput 是一个 HTMLInputElement：<input type="file" multiple id="myfileinput">
const fileInput = document.getElementById("myfileinput");

for (const file of fileInput.files) {
  console.log(`${file.name} 最后修改日期为 ${file.lastModifiedDate}`);
}
```

## 时间精度降低

为了防止计时攻击和{{glossary("fingerprinting", "指纹识别")}}，`someFile.lastModifiedDate.getTime()` 的精度可能会根据浏览器设置进行舍入。

在 Firefox 中，`privacy.reduceTimerPrecision` 首选项默认启用，在 Firefox 59 中默认为 20us；Firefox 60 中为 2 毫秒。

```js
// Firefox 60 中的时间精度降低（2ms）
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

在 Firefox 中，你还可以启用 `privacy.resistFingerprinting`，精度将为 100ms 或 `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` 的值，以较大者为准。

## 规范

_尽管存在于文件 API 规范的早期草案中，但此属性已从中删除，并且此属性现在是非标准的。使用 {{domxref("File.lastModified")}} 代替。_

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("File")}}
