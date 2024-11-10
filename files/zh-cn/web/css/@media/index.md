---
title: "@media"
slug: Web/CSS/@media
---

{{CSSRef}}

**`@media`** [CSS](/zh-CN/docs/Web/CSS) [at 规则](/zh-CN/docs/Web/CSS/At-rule)可用于基于一个或多个[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)的结果来应用样式表的一部分。使用它，你可以指定一个媒体查询和一个 CSS 块，当且仅当该媒体查询与正在使用其内容的设备匹配时，该 CSS 块才能应用于该文档。

> [!NOTE]
> 在 JavaScript 中，可以使用 {{domxref("CSSMediaRule")}} CSS 对象模型接口访问使用 `@media` 创建的规则。

{{EmbedInteractiveExample("pages/tabbed/at-rule-media.html", "tabbed-standard")}}

## 语法

`@media` at 规则可置于你代码的顶层或嵌套至其他任何的 [at 条件规则组](/zh-CN/docs/Web/CSS/At-rule#条件规则组)中。

```css
/* 在你的代码的顶层 */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* 嵌套至其他的 at 条件规则中 */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

有关媒体查询语法的讨论，请参阅[使用媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries#语法)。

## 描述

### 媒体类型

_媒体类型_（media type）描述设备的一般类别。除非使用 `not` 或 `only` 逻辑运算符，否则媒体类型是可选的，并且会（隐式地）应用 `all` 类型。

- `all`
  - : 适用于所有设备。
- `print`
  - : 适用于在打印预览模式下在屏幕上查看的分页材料和文档。（有关特定于这些格式的格式问题的信息，请参阅[分页媒体](/zh-CN/docs/Web/CSS/CSS_paged_media)。）
- `screen`
  - : 主要用于屏幕。

> [!NOTE]
> CSS2.1 和[媒体查询第 3 版](https://drafts.csswg.org/mediaqueries-3/#background)定义了一些额外的媒体类型（`tty`、`tv`、`projection`、`handheld`、`braille`、`embossed` 以及 `aural`），但是它们在[媒体查询第 4 版](https://drafts.csswg.org/mediaqueries/#media-types)中已被弃用，不应继续使用。

## 媒体特性

_媒体特性_（media feature）描述了{{glossary("user agent", "用户代理")}}、输出设备或环境的具体特征。媒体特性表达式是完全可选的，其用于测试这些特征是否存在以及它们的值。每个媒体特性表达式都必须用括号括起来。

- {{cssxref("@media/any-hover", "any-hover")}}
  - : 是否有任何可用的输入机制允许用户（将鼠标等）悬停在元素上？于媒体查询第 4 版中被添加。
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : 可用的输入机制中是否有任何指针设备，如果有，它的精度如何？于媒体查询第 4 版中被添加。
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : 视口（viewport）的宽高比。
- {{cssxref("@media/color", "color")}}
  - : 输出设备每个颜色分量的比特值，如果设备不支持输出彩色，则该值为 0。
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : 用户代理和输出设备大致程度上支持的色域。于媒体查询第 4 版中被添加。
- {{cssxref("@media/color-index", "color-index")}}
  - : 输出设备的颜色查询表（color lookup table）中的条目数量，如果设备不使用颜色查询表，则该值为 0。
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}} {{deprecated_inline}}
  - : 输出设备的宽高比。于媒体查询第 4 版中被弃用。
- {{cssxref("@media/device-height", "device-height")}} {{deprecated_inline}}
  - : 输出设备渲染表面的高度。于媒体查询第 4 版中被弃用。
- {{cssxref("@media/device-width", "device-width")}} {{deprecated_inline}}
  - : 输出设备渲染表面的宽度。于媒体查询第 4 版中被弃用。
- {{cssxref("@media/display-mode", "display-mode")}}
  - : 应用程序的显示模式，显示模式由 web 应用的清单（manifest）中的 [`display`](/zh-CN/docs/Web/Manifest#display) 成员所指定。定义于 [Web App Manifest 规范](https://w3c.github.io/manifest/#the-display-mode-media-feature)。
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : 用户代理和输出设备支持的亮度、对比度和色彩深度的组合。于媒体查询第 5 版中被添加。
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : 检测用户代理是否限制调色板。于媒体查询第 5 版中被添加。
- {{cssxref("@media/grid", "grid")}}
  - : 输出设备使用网格屏幕还是点阵屏幕？
- {{cssxref("@media/height", "height")}}
  - : 视口的高度。
- {{cssxref("@media/hover", "hover")}}
  - : 主输入机制是否允许用户在元素上悬停。于媒体查询第 4 版中被添加。
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : 用户代理或者底层操作系统是否反转了颜色。于媒体查询第 5 版中被添加。
- {{cssxref("@media/monochrome", "monochrome")}}
  - : 输出设备单色帧缓冲区中每个像素的位深度。如果设备并非单色屏幕，则该值为 0。
- {{cssxref("@media/orientation", "orientation")}}
  - : 视口的旋转方向。
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : 输出设备如何处理沿块轴溢出视口的内容。于媒体查询第 4 版中被添加。
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : 沿行轴溢出视口的内容是否可以滚动。于媒体查询第 4 版中被添加。
- {{cssxref("@media/pointer", "pointer")}}
  - : 主输入机制是一个指针设备吗？如果是，它的精度如何？于媒体查询第 4 版中被添加。
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : 检测用户倾向于选择亮色还是暗色的配色方案。于媒体查询第 5 版中被添加。
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : 检测用户是否有向系统要求提高或降低相近颜色之间的对比度。于媒体查询第 5 版中被添加。
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : 用户是否希望页面上出现更少的动态效果。于媒体查询第 5 版中被添加。
- {{cssxref("@media/resolution", "resolution")}}
  - : 输出设备的像素密度（分辨率）。
- {{cssxref("@media/scripting", "scripting")}}
  - : 检测脚本（例如 JavaScript）是否可用。于媒体查询第 5 版中被添加。
- {{cssxref("@media/update-frequency", "update")}} {{Experimental_Inline}}
  - : 输出设备修改渲染内容的频率。于媒体查询第 4 版中被添加。
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : 用户代理的视频平面（video plane）和输出设备支持的亮度、对比度及色彩深度的组合。于媒体查询第 5 版中被添加。
- {{cssxref("@media/width", "width")}}
  - : 视口（包括纵向滚动条）的宽度。

### 逻辑运算符

_逻辑运算符_（logical operator）`not`、`and`、`only` 和 `or` 可用于联合构造复杂的媒体查询，你还可以通过用逗号分隔多个媒体查询，将它们组合为一个规则。

- `and`
  - : 用于将多个媒体查询规则组合成单条媒体查询，当每个查询规则都为真时则该条媒体查询为 `true`，它还用于将媒体特性与媒体类型结合在一起。
- `not`

  - : 用于否定媒体查询，如果不满足这个条件则返回 `true`，否则返回 `false`。如果出现在以逗号分隔的查询列表中，它将仅否定应用了该查询的特定查询。如果使用 `not` 运算符，则*还必须*指定媒体类型。

    > [!NOTE]
    > 在第 3 版中，`not` 关键字不能用于否定单个媒体特性表达式，而只能用于否定整个媒体查询。

- `only`
  - : 仅在整个查询匹配时才应用样式。这对于防止较老的浏览器应用所选样式很有用。当不使用 `only` 时，较老的浏览器会将 `screen and (max-width: 500px)` 简单地解释为 `screen`，忽略查询的其余部分，并将其样式应用于所有屏幕。如果使用 `only` 运算符，则*还必须*指定媒体类型。
- `,`（逗号）
  - : 逗号用于将多个媒体查询合并为一个规则。逗号分隔列表中的每个查询都与其他查询分开处理。因此，如果列表中的任何查询为 `true`，则整个媒体查询语句返回 `true`。换句话说，列表的行为类似于逻辑或（`or`）运算符。
- `or`
  - : 等价于 `,` 运算符。于媒体查询第 4 版中被添加。

### 用户代理客户端提示

一些媒体查询有相应的[用户代理客户端提示](/zh-CN/docs/Web/HTTP/Client_hints)。这是请求特定媒体要求的预优化内容的 HTTP 标头，其包括 {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} 和 {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}。

## 无障碍考虑

为了最好地适应调整了网站文本大小的用户，当你需要在[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)中使用 {{cssxref("&lt;length&gt;")}} 时，请使用 [`em`](/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#长度) 单位。

[`em`](/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#长度) 和 [`px`](/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#长度) 都是有效单位，但如果用户更改浏览器文本大小，[`em`](/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units#长度) 的效果会更好。

考虑使用媒体查询第 4 版来改善用户体验。例如，使用 `prefers-reduced-motion` 以[检测用户是否已请求系统最小化其使用的动画](/zh-CN/docs/Web/CSS/@media/prefers-reduced-motion)或动作。

## 安全

由于媒体查询可以洞察用户正在使用的设备的功能（以及扩展的特性和设计），因此有可能滥用它们来构造“[指纹](/zh-CN/docs/Glossary/Fingerprinting)”以识别设备，或者至少将其细分类别到用户可能不希望看到的程度。

由于存在这种潜在的安全问题，浏览器可能会选择以某种方式伪造返回的值，以防止它们被用于精确地标识计算机。浏览器可能还会在这方面提供额外措施。例如，如果启用了 Firefox 的“拦截指纹跟踪”设置，则许多媒体查询会报告默认值，而不是代表实际设备状态的值。

## 形式语法

{{csssyntax}}

## 示例

### 测试 print 和 screen 媒体类型

```css
@media print {
  body {
    font-size: 10pt;
  }
}

@media screen {
  body {
    font-size: 13px;
  }
}

@media screen, print {
  body {
    line-height: 1.2;
  }
}

@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi) {
  body {
    line-height: 1.4;
  }
}
```

媒体查询第 4 版引入了一种新的范围语法，在测试接受范围的任何特性时允许更简洁的媒体查询，如下面的示例所示：

```css
@media (height > 600px) {
  body {
    line-height: 1.4;
  }
}

@media (400px <= width <= 700px) {
  body {
    line-height: 1.4;
  }
}
```

更多示例，请查看[使用媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- 在 JavaScript 中，可以通过 CSS 对象模型接口 {{domxref("CSSMediaRule")}} 访问 `@media`。
- [扩展的 Mozilla 媒体特性](/zh-CN/docs/Web/CSS/Mozilla_Extensions#媒体特性)
- [扩展的 WebKit 媒体特性](/zh-CN/docs/Web/CSS/WebKit_Extensions#媒体特性)
