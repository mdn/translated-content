---
title: FontData：family 属性
slug: Web/API/FontData/family
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

{{domxref("FontData")}} 接口的 **`family`** 只读属性返回字体的字体族。

这是在代码中引用字体族时使用的名称，例如在 {{cssxref("font-family")}} 属性中或在 {{cssxref("@font-face")}} at-规则中，如 `local()` 函数。

示例包括：

- Apple SD Gothic Neo
- Arial Black
- Avenir Next
- Katari
- YuMincho +36p Kana

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
