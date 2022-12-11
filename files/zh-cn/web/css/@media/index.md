---
title: '@media'
slug: Web/CSS/@media
---

{{CSSRef}}

`@media` [CSS](/zh-CN/CSS) [@ 规则](/zh-CN/docs/Web/CSS/At-rule)可用于基于一个或多个[媒体查询](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries)的结果来应用样式表的一部分。使用它，您可以指定一个媒体查询和一个 CSS 块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该 CSS 块才能应用于该文档。

> **备注：** 在 JavaScript 中，可以使用{{domxref("CSSMediaRule")}}CSS 对象模型接口访问使用 @media 创建的规则。

## 语法

`@media` 规则可置于您代码的顶层或位于其它任何[@条件规则组](/zh-CN/docs/Web/CSS/At-rule#条件规则组)内。

```css
/* At the top level of your code */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Nested within another conditional at-rule */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

有关媒体查询语法的讨论，请参阅[使用媒体查询](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries#语法)。

## 媒体特性

*媒体特性*描述了{{glossary("user agent", "用户代理")}}、输出设备或环境的具体特征。媒体特性表达式是完全可选的，其用于测试这些特征是否存在存在和它们的值。每个媒体特性表达式都必须用括号括起来。

- {{cssxref("@media/any-hover", "any-hover")}}
  - : 是否有任何可用的输入机制允许用户（将鼠标等）悬停在元素上。在 Media Queries Level 4 中被添加。
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : 可用的输入机制中是否有任何指针设备，如果有，它的精度如何？在 Media Queries Level 4 中被添加。
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : 视口（viewport）的宽高比。
- {{cssxref("@media/color", "color")}}
  - : 输出设备每个像素的比特值，如果设备不支持输出彩色，则该值为 0。
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : 用户代理和输出设备大致程度上支持的色域。在 Media Queries Level 4 中被添加。
- {{cssxref("@media/color-index", "color-index")}}
  - : 输出设备的颜色查询表（color lookup table）中的条目数量，如果设备不使用颜色查询表，则该值为 0。
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}}
  - : 输出设备的宽高比。已在 Media Queries Level 4 中被弃用。
- {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}
  - : 输出设备渲染表面（如屏幕）的高度。已在 Media Queries Level 4 中被弃用。
- {{cssxref("@media/device-width", "device-width")}} {{deprecated_inline}}
  - : 输出设备渲染表面（如屏幕）的宽度。已在 Media Queries Level 4 中被弃用。
- {{cssxref("@media/display-mode", "display-mode")}}
  - : 应用程序的显示模式，如 web app 的 manifest 中的 [`display`](/zh-CN/docs/Web/Manifest#display) 成员所指定。在 [Web App Manifest spec](https://w3c.github.io/manifest/#the-display-mode-media-feature) 中被定义。
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : 用户代理和输出设备支持的亮度、对比度和颜色深度的组合。在 Media Queries Level 5 中被添加。
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : 检测用户代理是否限制调色板。在 Media Queries Level 5 中被添加。
- {{cssxref("@media/grid", "grid")}}
  - : 输出设备使用网格屏幕还是点阵屏幕？
- {{cssxref("@media/height", "height")}}
  - : 视口的高度。
- {{cssxref("@media/hover", "hover")}}
  - : 主输入机制是否允许用户在元素上悬停。在 Media Queries Level 4 中被添加。
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : 用户代理或者底层操作系统是否反转了颜色。在 Media Queries Level 5 中被添加。
- {{cssxref("@media/monochrome", "monochrome")}}
  - : 输出设备单色帧缓冲区中每个像素的位深度。如果设备并非黑白屏幕，则该值为 0。
- {{cssxref("@media/orientation", "orientation")}}
  - : 视口的旋转方向。
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : 输出设备如何处理沿块轴溢出视口的内容。在 Media Queries Level 4 中被添加。
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : 沿内联轴溢出视口的内容是否可以滚动。在 Media Queries Level 4 中被添加。
- {{cssxref("@media/pointer", "pointer")}}
  - : 主输入机制是一个指针设备吗？如果是，它的精度如何？在 Media Queries Level 4 中被添加。
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : 检测用户倾向于选择亮色还是暗色的配色方案。在 Media Queries Level 5 中被添加。
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : 检测用户是否有向系统要求提高或降低相近颜色之间的对比度。在 Media Queries Level 5 中被添加。
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : 用户是否希望页面上出现更少的动态效果。在 Media Queries Level 5 中被添加。
- {{cssxref("@media/resolution", "resolution")}}
  - : 输出设备的像素密度（分辨率）。
- {{cssxref("@media/scripting", "scripting")}}
  - : 检测脚本（例如 JavaScript）是否可用。在 Media Queries Level 5 中被添加。
- {{cssxref("@media/update-frequency", "update")}} {{Experimental_Inline}}
  - : 输出设备修改渲染内容的频率。在 Media Queries Level 4 中被添加。
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : 用户代理的视频平面（video plane）和输出设备支持的亮度、对比度及颜色深度的组合。在 Media Queries Level 5 中被添加。
- {{cssxref("@media/width", "width")}}
  - : 视口的宽度，包括纵向滚动条的宽度。

### 形式语法

{{csssyntax}}

## 示例

```css
@media print {
  body { font-size: 10pt; }
}

@media screen {
  body { font-size: 13px; }
}

@media screen, print {
  body { line-height: 1.2; }
}

@media only screen
  and (min-width: 320px)
  and (max-width: 480px)
  and (resolution: 150dpi) {
    body { line-height: 1.4; }
}
```

媒体查询第 4 级引入了一种新的范围语法，在测试接受范围的任何特性时允许更简洁的媒体查询，如下面的示例所示：

```css
@media (height > 600px) {
    body { line-height: 1.4; }
}

@media (400px <= width <= 700px) {
    body { line-height: 1.4; }
}
```

更多示例，请查看[使用媒体查询](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax)。

## 无障碍

为了最好地调整网站文本大小，当您需要{{cssxref("&lt;length&gt;")}} 进行[媒体查询](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries)时，请使用[`em`](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Numeric_values)。

[`em`](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Numeric_values)和[`px`](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Numeric_values)都是有效单位，但如果用户更改浏览器文本大小，[`em`](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#Numeric_values)的效果会更好。

考虑使用 4 级媒体查询来改善用户体验。例如，使用`prefers-reduced-motion`以[检测用户是否已请求系统最小化其使用的动画](/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion)或动作量。

## 安全

由于媒体查询可以洞察用户正在使用的设备的功能（以及扩展的功能和设计），因此有可能滥用它们来构造“指纹”来识别设备，或者至少 将其分类为某些细节，这可能是用户不希望看到的。

由于存在这种潜力，浏览器可能会选择以某种方式捏造返回的值，以防止它们被用来精确地标识计算机。浏览器可能还会在此区域提供其他措施。例如，如果启用了 Firefox 的“抵抗指纹”设置，则许多媒体查询会报告默认值，而不是代表实际设备状态的值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多资料

- [Using media queries](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries)
- 在 JavaScript 里，`@media` can be 可以通过 css 对象模型接口被调用 .{{domxref("CSSMediaRule")}}.
- [Extended Mozilla media features](/zh-CN/docs/Web/CSS/Mozilla_Extensions#Media_features)
- [Extended WebKit media features](/zh-CN/docs/Web/CSS/Webkit_Extensions#Media_features)
