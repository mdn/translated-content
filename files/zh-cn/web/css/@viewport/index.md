---
title: '@viewport'
slug: Web/CSS/@viewport
---

{{CSSRef}}{{deprecated_header}}

**`@viewport`** 规则让我们可以对文档的大小进行设置 {{glossary("viewport")}} 。这个特性主要被用于移动设备，但是也可以用在支持类似“固定到边缘”等特性的桌面浏览器，如微软的 Edge。

按百分比计算尺寸的时候，就是参照的**初始视口（viewport）**。初始视口指的是任何用户代理和样式对它进行修改之前的视口。桌面浏览器如果不是全屏模式的话，一般是基于窗口大小。

在移动设备上（或者桌面浏览器的全屏模式），初始视口通常就是应用程序可以使用的屏幕部分。它可能是全屏或者减去由操作系统或者其它应用程序所占用的部分（例如状态栏）。

```css
@viewport {
  width: 100vw; /*将视口宽度设为与设备宽度相同*/
}
```

## 语法

@规则包含一组包含在 CSS 代码块中的嵌套的 {{glossary("descriptor (CSS)", "descriptor")}}。

缩放因子`1.0` 或者 `100%` 表示不缩放，大于 1 表示放大，小于 1 表示缩小。

### 描述符

目前，大多数浏览器对 `@viewport` 的支持很差，Internet Explorer 和 Edge 对其支持较好。但即使在这些浏览器中，也只有少量的描述符可用。如果浏览器不支持 `@viewport`，浏览器会忽略 `@viewport` 以及任何和其相关的描述符。

- [`min-width`](/zh-CN/docs/Web/CSS/@viewport/min-width)
  - : 设置 viewport 的最小宽度
- [`max-width`](/zh-CN/docs/Web/CSS/@viewport/max-width)
  - : 设置 viewport 的最大宽度
- [`width`](/zh-CN/docs/Web/CSS/@viewport/width)
  - : 同时设置 `min-width` 和 `max-width`
- [`min-height`](/zh-CN/docs/Web/CSS/@viewport/min-height)
  - : 设置 viewport 的最小高度
- [`max-height`](/zh-CN/docs/Web/CSS/@viewport/max-height)
  - : 设置 viewport 的最大高度
- [`height`](/zh-CN/docs/Web/CSS/@viewport/height)
  - : 同时设置 `min-height` 和 `max-height`
- [`zoom`](/zh-CN/docs/Web/CSS/@viewport/zoom)
  - : 设置初始缩放系数
- [`min-zoom`](/zh-CN/docs/Web/CSS/@viewport/min-zoom)
  - : 设置最小缩放系数
- [`max-zoom`](/zh-CN/docs/Web/CSS/@viewport/max-zoom)
  - : 设置最大缩放系数
- [`user-zoom`](/zh-CN/docs/Web/CSS/@viewport/user-zoom)
  - : 设置用户是能更改缩放系数
- [`orientation`](/zh-CN/docs/Web/CSS/@viewport/orientation)
  - : 设置文档的方向
- {{cssxref("@viewport/viewport-fit", "viewport-fit")}}
  - : Controls the display of the document on non-rectangular displays.

### Formal syntax

{{csssyntax}}

## Examples

```css
@viewport {
  min-width: 640px;
  max-width: 800px;
}

@viewport {
  zoom: 0.75;
  min-zoom: 0.5;
  max-zoom: 0.9;
}

@viewport {
  orientation: landscape;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}, specifically `<meta name="viewport">`
- [Using the viewport meta tag to control layout on mobile browsers](/zh-CN/docs/Mobile/Viewport_meta_tag)
