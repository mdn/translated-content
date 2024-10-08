---
title: Window：queryLocalFonts() 方法
slug: Web/API/Window/queryLocalFonts
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{APIRef("Local Font Access API")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`window.queryLocalFonts()`** 方法返回一个 {{jsxref("Promise")}}，其兑现为一个表示本地可用字体的 {{domxref("FontData")}} 对象数组。

要使用此方法，用户必须同意授予 `local-fonts` 权限（可以通过 {{domxref("Permissions API", "", "", "nocode")}} 查询权限状态）。此外，此功能可能会被服务器上设置的[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)阻止。

## 语法

```js-nolint
queryLocalFonts(options)
```

### 参数

- `options` {{optional_inline}}
  - : 包含可选配置参数。目前仅定义了一个属性：
    - `postscriptNames` {{optional_inline}}
      - : 一个包含字体 PostScript 名称的数组。如果指定了此项，则只有 PostScript 名称与数组中的 PostScript 名称匹配的字体才会包含在结果中；如果没有，所有字体都将包含在结果中。

### 返回值

一个 {{jsxref("Promise")}}，其兑现为一个表示本地可用字体的 {{domxref("FontData")}} 对象数组。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 首次调用该方法后，当浏览器出现权限提示时，用户选择拒绝授予此功能的权限。
- `SecurityError` {{domxref("DOMException")}}
  - : 此功能的使用被[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)阻止，或者不是通过用户交互（如按下按钮）调用此特性，或当前的{{glossary("origin", "源")}}不透明。

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

### 限制返回结果

要将返回的字体数据限制为特定的字体列表，使用 `postscriptNames` 选项。

```js
async function returnSpecificFonts() {
  const availableFonts = await window.queryLocalFonts({
    postscriptNames: ["Verdana", "Verdana-Bold", "Verdana-Italic"],
  });

  return availableFonts;
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
      // `blob()` 方法返回一个包含有效且完整的 SFNT 封装字体数据的 Blob。
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

- {{domxref("Local Font Access API", "Local Font Access API", "", "nocode")}}
- [使用带有本地字体的高级排版](https://developer.chrome.google.cn/docs/capabilities/web-apis/local-fonts)
- {{cssxref("@font-face")}}
