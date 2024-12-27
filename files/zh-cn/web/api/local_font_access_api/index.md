---
title: Local Font Access API
slug: Web/API/Local_Font_Access_API
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{SeeCompatTable}}{{DefaultAPISidebar("Local Font Access API")}}

**Local Font Access API** 提供了一种访问用户本地安装的字体数据的机制——这包括更高层次的详细信息，例如名称、样式和系列，以及底层字体文件的原始字节内容。

## 概念和用法

[Web 字体](/zh-CN/docs/Learn_web_development/Core/Text_styling/Web_fonts)允许 Web 设计人员提供在 Web 文档上使用的自定义字体，因而在实现 Web 排版方面具有革命性意义。通过 {{cssxref("@font-face")}} at 规则，Web 字体可以通过 `url()` 函数中提供的 URL 加载。

`@font-face` 还有其他几个有用的特性。特别是，你还可以在 `local()` 函数中指定字体的完整名称或 Postscript 名称，以告诉浏览器在用户计算机上安装了该字体时使用本地副本。这并非没有问题——`local()` 作为[指纹向量](https://developer.chrome.google.cn/docs/capabilities/web-apis/local-fonts#local_fonts_as_fingerprint_vector)已经变得臭名昭著。

此外，由于准确的字体枚举和访问底层字体数据（例如，应用过滤器和转换）方面的挑战，高端设计工具历来难以在 Web 上提供。当前的应用程序通常依赖于变通办法，例如要求用户将字体上传到服务器，在服务器上处理字体以获取原始字节数据，或者安装单独的本地程序以提供附加功能。

Local Font Access API 的创建就是为了解决这些问题。

{{domxref("Window.queryLocalFonts()")}} 方法提供对本地安装的字体的数组的访问，每个字体都由一个 {{domxref("FontData")}} 对象实例表示。{{domxref("FontData")}} 有多个属性，提供对名称、样式和字体族的访问，并且它还有一个 {{domxref("FontData.blob", "blob()")}} 方法，提供对包含底层字体文件的原始字节内容的 {{domxref("Blob")}} 的访问。

在隐私和安全方面：

- 本地字体访问 API 旨在仅提供对解决上述问题所需的数据的访问。它既不要求浏览器提供可用本地字体的完整列表，也不要求按照磁盘上出现的顺序提供数据。
- 当调用 {{domxref("Window.queryLocalFonts()")}} 时，系统会请求用户授予访问其本地字体的权限。此权限的状态可以通过 [Permissions API](/zh-CN/docs/Web/API/Permissions_API)（`local-fonts` 权限）查询。
- 你可以使用 {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)控制对此特性的访问。

## 接口

- {{domxref("FontData")}}
  - : 代表单个本地字体。

## 其他接口的扩展

- {{domxref("Window.queryLocalFonts()")}}
  - : 返回一个 {{jsxref("Promise")}}，它会兑现一个表示本地可用字体的 {{domxref("FontData")}} 对象的数组。

## 示例

有关实时演示，请参阅[字体选择演示](https://local-font-access.glitch.me/demo/)。

### 特性检测

```js
if ("queryLocalFonts" in window) {
  // 支持本地字体访问 API
}
```

### 字体枚举

以下代码片段将查询所有可用字体并打印元数据。例如，这可以用于填充字体选择器控件。

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
- {{httpheader("Permissions-Policy/local-fonts", "local-fonts")}} [权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)指令
