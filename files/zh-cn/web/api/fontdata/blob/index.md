---
title: FontData：blob() 方法
slug: Web/API/FontData/blob
l10n:
  sourceCommit: 372bd292256cc90f4a99413bd4e3613e271e5275
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

{{domxref("FontData")}} 接口的 **`blob()`** 方法返回一个兑现包含底层字体文件的原始字节的 {{domxref("Blob")}} 的 {{jsxref("Promise")}}。

## 语法

```js-nolint
blob()
```

### 参数

无。

### 返回值

一个兑现包含底层字体文件的原始字节的 {{domxref("Blob")}} 的 {{jsxref("Promise")}}。

## 示例

{{domxref("FontData.blob", "blob()")}} 方法提供对底层 [SFNT](https://zh.wikipedia.org/wiki/SFNT) 数据的访问——这是一种可以包含其他字体格式的字体文件格式，例如 PostScript、TrueType、OpenType 或 Web 开放字体格式（WOFF）。

```js
async function computeOutlineFormat() {
  try {
    const availableFonts = await window.queryLocalFonts({
      postscriptNames: ["ComicSansMS"],
    });
    for (const fontData of availableFonts) {
      // `blob()` 方法返回一个包含有效且完整的 SFNT 包装字体数据的 Blob。
      const sfnt = await fontData.blob();
      // 仅裁剪出我们需要的字节部分：前 4 个字节是 SFNT 版本信息。
      // 规范：https://learn.microsoft.com/zh-cn/typography/opentype/spec/otff#organization-of-an-opentype-font
      const sfntVersion = await sfnt.slice(0, 4).text();

      let outlineFormat = "UNKNOWN";
      switch (sfntVersion) {
        case "\x00\x01\x00\x00":
        case "true":
        case "typ1":
          outlineFormat = "truetype";
          break;
        case "OTTO":
          outlineFormat = "cff";
          break;
      }
      console.log("矢量字体格式：", outlineFormat);
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

- [使用带有本地字体的高级排版](https://developer.chrome.com/articles/local-fonts/)
- {{cssxref("@font-face")}}
