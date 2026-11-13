---
title: 在 SVG 中使用字体
slug: Web/SVG/Tutorials/SVG_from_scratch/Using_fonts
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}

当规定 SVG 时，在浏览器支持 web 字体并不流行。因为访问正确的字体文件对于正确呈现字体是有确定性的，SVG 中添加了一个字体描述技术，以提供这个能力。它并不是为了和别的格式比如说 PostScript 或 OTF 兼容，而是为了将字形信息嵌入 SVG 呈现的一个简单的方法。

## 使用 CSS @font-face

你可以使用`@font-face`以引用远程（或者非远程）字体：

```html
<font id="Super_Sans">
  <!-- and so on -->
</font>

<style>
  @font-face {
    font-family: "Super Sans";
    src: url(#Super_Sans);
  }
</style>

<text font-family="Super Sans">My text uses Super Sans</text>
```

## 引用一个远程字体

上面的部分使用 CSS 来应用系统字体，但是你还可以以相同的方式使用 {{cssxref("@font-face")}} at 规则来应用 Web 字体

示例展示了如何首先定义然后使用名为“FiraSans”的字体家族：

```html
<svg
  viewBox="0 0 400 50"
  width="350"
  height="50"
  xmlns="http://www.w3.org/2000/svg">
  <style>
    /* 使用 Web 字体定义字体家族 */
    @font-face {
      font-family: "FiraSans";
      src:
        url("https://mdn.github.io/shared-assets/fonts/FiraSans-Italic.woff2")
          format("woff2"),
        url("https://mdn.github.io/shared-assets/fonts/FiraSans-Bold.woff2")
          format("woff2");
    }

    /* 装饰文本 */
    text {
      /* 指定使用的系统字体或自定义字体 */
      font-family: "FiraSans", sans-serif;

      /* 添加其他样式 */
      font-size: 24px;
      font-weight: bold;
      font-style: italic;
    }
  </style>
  <text x="10" y="20">使用自定义字体装饰的文本</text>
</svg>
```

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Filter_effects", "Web/SVG/Tutorials/SVG_from_scratch/Image_element") }}
