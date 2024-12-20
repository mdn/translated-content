---
title: FontData
slug: Web/API/FontData
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}

{{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}} 的 **`FontData`** 接口表示单个本地字体。

## 实例属性

- {{domxref('FontData.family')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回字体的字体族。
- {{domxref('FontData.fullName')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回字体的全名。
- {{domxref('FontData.postscriptName')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回字体的 PostScript 名称。
- {{domxref('FontData.style')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回字体的样式。

## 实例方法

- {{domxref('FontData.blob()')}} {{Experimental_Inline}}
  - : 返回一个会兑现包含底层字体文件的原始字节的 {{domxref("Blob")}} 的 {{jsxref("Promise")}}。

## 示例

有关实时演示，请参阅[字体选择演示](https://local-font-access.glitch.me/demo/)。

### 字体枚举

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

### 访问底层数据

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

- [使用带有本地字体的高级排版](https://developer.chrome.google.cn/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
