---
title: text-size-adjust
slug: Web/CSS/text-size-adjust
---

{{CSSRef}}{{SeeCompatTable}}

**`text-size-adjust`** [CSS](/zh-CN/docs/Web/API/CSS) 控制将一些手机或平板设备上使用的文本溢出算法（text inflation algorithm）。其他类型的设备上的浏览器会忽略此属性。

```css
/* 专有属性值 */
text-size-adjust: none;
text-size-adjust: auto;

/* <percentage> 值 */
text-size-adjust: 80%;

/* 全局属性值 */
text-size-adjust: inherit;
text-size-adjust: initial;
text-size-adjust: unset;
```

因为许多网站还没有适配屏幕较小的设备，移动设备的浏览器和桌面浏览器在渲染网页时可能会有不同。他们不是以设备屏幕宽度布局网页，而是用比屏幕宽一些的 {{glossary("viewport", "视窗")}} 去布局网页，通常是 800 到 1000 像素。为了将视窗上的布局映射到原始设备屏幕上，手机浏览器要么只渲染整个页面的一部分，要么将视窗缩放至原始屏幕大小。

因为缩放适配小屏幕而导致文字会变得很小，许多手机浏览器会使用文本溢出算法放大文本，改善可读性。当一个包含文本的元素使用了 100% 的屏幕宽度，该算法会增加文本大小，但是不会修改布局。`text-size-adjust` 这个属性允许开发者去除或者修改浏览器的这种行为，比如，当网页已经适配了小屏幕之后，就不需要这么做了。

> **备注：** 这个属性并不是标准。你必须为每个你想要应用的浏览器加上属性前缀。
>
> - 不同浏览器，这个属性有不同的行为和语法。更多的信息，请查看下面的浏览器兼容性部分。
> - **这个属性只在一些智能手机和平板电脑上使用。**桌面浏览器和一些平板电脑浏览器并没有一些溢出算法。
> - 如果 `-webkit-text-size-adjust` 显式设置为 `none`, 老的基于桌面的 WebKit 和平板电脑浏览器，像 Chrome≤26 或者 Safari≤5，不会忽略这个属性，反而会阻止用户在 web 界面放大或缩小。[#](https://bugs.webkit.org/show_bug.cgi?id=56543)
> - 不是所有的浏览器都支持这个属性使用百分比值 (例如 Webkit 和 Trident , 但是 Gecko 不支持). 检查下面浏览器兼容的部分查看更多的信息。

{{cssinfo}}

## 语法

`text-size-adjust` 属性的值为 [`none`](#none), [`auto`](#auto)，或 [`<percentage>`](#percentage)

### 属性值

- `none`
  - : 禁用浏览器的文本溢出算法。
- `auto`
  - : 启用浏览器的文本溢出算法。该值一般用于取消先前使用 CSS 设置的 `none`。
- `<percentage>`
  - : 启用浏览器的文本溢出算法，并使用用一个百分数来确定文本放大程度。

### 形式化语法

{{csssyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

\[1] There is a bug in older WebKit-based desktop browsers. If `-webkit-text-size-adjust` is explicitly set to `none`, older Webkit-based desktop browsers, instead of ignoring the property, will prevent the user from zooming in or out of the web page. See [Bug 56543](https://bugs.webkit.org/show_bug.cgi?id=56543) (affected Safari≤5 & Chrome≤26), [Bug 163359](https://code.google.com/p/chromium/issues/detail?id=163359), and [Bug 84186](https://bugs.webkit.org/show_bug.cgi?id=84186).

\[2] In addition to the `-moz-` prefixed support, Gecko 44.0 {{geckoRelease("44.0")}} added support for a `-webkit-` prefixed version of the property for web compatibility reasons behind the `layout.css.prefixes.webkit` flag, defaulting to `false`. Since Gecko 49.0 {{geckoRelease("49.0")}} the preference defaults to `true`.

\[3] If the viewport is set using {{HTMLElement("meta")}} element, the value of the CSS `text-size-adjust` property is ignored. See [detailed implementation hints on MSDN](<https://msdn.microsoft.com/library/windows/apps/ff462082(v=vs.105).aspx#BKMK_AdjustingTextSizewithCustomCSS>).

## 参见

- [Apple's documentation](https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16)
- [Gecko's behavior description](http://dbaron.org/log/20111126-font-inflation), by L. David Baron
- [Microsoft's documentation](<https://msdn.microsoft.com/library/windows/apps/ff462082(v=vs.105).aspx#BKMK_AdjustingTextSizewithCustomCSS>)
