---
title: FontData：fullName 属性
slug: Web/API/FontData/fullName
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

{{domxref("FontData")}} 接口的 **`fullName`** 只读属性返回字体的全名。这通常是一个用于识别字体的人类可读的名称，例如：“Optima Bold”。

示例包括：

- Apple SD Gothic Neo UltraLight
- Arial Black
- Avenir Next Heavy
- Katari Medium Italic
- YuMincho +36p Kana Extrabold

## 值

一个字符串。

## 示例

以下代码片段将查询所有可用的字体并打印元数据。例如，这可以用于填充字体选择器控件。

```js
async function logFontData() {
  try {
    const availableFonts = await window.queryLocalFonts();
    for (const fontData of availableFonts) {
      console.log(fontData.postscriptName);
      console.log(fontData.fullName);
      console.log(fontData.family);
      console.log(fontData.style);
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用带有本地字体的高级排版](https://developer.chrome.google.cn/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
