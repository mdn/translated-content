---
title: target
slug: Web/SVG/Attribute/target
---

{{SVGRef}}

**`target`** 当结束资源有多个可能的目标时，例如，当父文档嵌入在 HTML 或 XHTML 文档中或使用选项卡式浏览器查看时，应使用该属性。此属性指定激活链接时要在其中打开文档的浏览上下文的名称（例如，浏览器选项卡或（X）HTML iframe 或 object 元素）：

只有一个元素正在使用此属性：{{SVGElement("a")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}

text {
  font:
    20px Arial,
    Helvetica,
    sans-serif;
  fill: blue;
  text-decoration: underline;
}
```

```html
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
  <a href="https://developer.mozilla.org" target="_self">
    <text x="0" y="20">在 iframe 中打开链接</text>
  </a>
  <a href="https://developer.mozilla.org" target="_blank">
    <text x="0" y="60">在新标签页或窗口中打开链接</text>
  </a>
  <a href="https://developer.mozilla.org" target="_top">
    <text x="0" y="100">在此标签或窗口中打开链接</text>
  </a>
</svg>
```

{{EmbedLiveSample("示例", "300", "120")}}

## 使用说明

| 值       | `_self`\| `_parent`\| `_top`\| `_blank`\|`<XML-Name>` |
| -------- | ----------------------------------------------------- |
| 默认值   | `_self`                                               |
| 可动画的 | 是                                                    |

- `_replace` {{deprecated_inline}}

  - : 当前 SVG 图像被与当前 SVG 图像在同一帧中相同矩形区域中的链接内容替换。

    > **备注：** 这个值是从来没有很好的执行，之间的区别 `_replace`，并 `_self` 已通过在浏览上下文的 HTML 定义的变化变得多余。使用 `_self` 以取代目前的 SVG 文件。

- `_self`
  - : 在与当前 SVG 图像相同的浏览上下文中，当前 SVG 图像被链接的内容替换。
- `_parent`
  - : SVG 图像的直接父浏览上下文将被链接的内容替换（如果存在），并且可以从此文档中安全地访问它。
- `_top`
  - : 完整活动窗口或选项卡的内容将由链接的内容替换（如果存在），并且可以从此文档中安全地访问
- `_blank`
  - : 如果此文档可以安全地显示，则需要一个新的未命名窗口或标签来显示链接的内容。如果用户代理不支持多个窗口/选项卡，则结果与\_top 相同。
- `<XML-Name>`
  - : 指定用于显示链接内容的浏览上下文的名称（选项卡，内联框架，对象等）。如果具有该名称的上下文已经存在，并且可以从此文档中安全地访问，则可以重新使用该上下文，替换现有内容。如果不存在，则创建它（与'\_blank'相同，但现在有了一个名称）。该名称必须是有效的 XML 名称 \[XML11]，并且不能以下划线（U + 005F LOW LINE 字符）开头，以满足来自 HTML 的有效浏览上下文名称的要求。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
