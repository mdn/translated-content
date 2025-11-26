---
title: display
slug: Web/SVG/Reference/Attribute/display
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

**`display`** 属性让你可以控制图形元素或容器元素的渲染。

`display="none"` 表示给定元素和它的子元素不会被渲染。而非 `none` 或 `inherit` 的值表示给定元素会被浏览器渲染。

当应用到容器元素时，将 `display` 设为 `none` 会导致容器与它所有的子元素不可见，如此看来，它在一组元素中表现地像一个元素组。这表示具有 `display="none"` 属性元素的所有子元素都不会被渲染，即使子元素的 `display` 并不是 `none`。

`display` 属性被设为 `none` 的元素不会成为渲染树的组成部分。它涉及到 {{SVGElement("tspan")}} 元素、事件处理、边界框计算和裁剪路径计算：

- 如果将 {{SVGElement("tspan")}} 元素的 `display` 设置为 `none`，则文本字符串在文本布局时将被忽略。
- 至于事件，如果 `display` 被设为 `none` 则该元素不接受任何事件。
- [图形元素](/zh-CN/docs/Web/SVG/Reference/Element#图形元素)的 `display` 属性被设为 `none`，则其几何形状不会被边界框和剪裁路径计算中包含进去。

`display` 属性只影响能被直接渲染的元素，但不会阻止其他元素对其进行引用。例如：将 {{SVGElement("path")}} 元素设为 `none`，会使得该元素不会被直接渲染到画布（canvas）上，但是 {{SVGElement("textPath")}} 元素依旧可以引用 {{SVGElement("path")}}。此外，即便 {{SVGElement("path")}} 的 `display` 值为 `none`，其几何形状仍会用于路径文本处理。

该属性同样影响直接渲染到离屏画布的情况，例如使用蒙版或剪裁路径时。因此，把 {{SVGElement("mask")}} 元素的一个子元素设为 `display="none"` 将会阻止 {{SVGElement("clipPath")}} 的子元素参与到路径剪裁中。

> [!NOTE]
> 作为表现属性，`display` 也有一个对应的 CSS 属性：{{cssxref("display")}}。当两者都被指定时，CSS 属性优先。

你可以将此属性用于任何 SVG 元素。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 此处显示黄色矩形 -->
  <rect x="0" y="0" width="100" height="100" fill="skyblue"></rect>
  <rect x="20" y="20" width="60" height="60" fill="yellow"></rect>

  <!-- 此处未显示黄色矩形 -->
  <rect x="120" y="0" width="100" height="100" fill="skyblue"></rect>
  <rect
    x="140"
    y="20"
    width="60"
    height="60"
    fill="yellow"
    display="none"></rect>
</svg>
```

{{EmbedLiveSample("示例", "240", "120")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">默认值</th>
      <td><code>inline</code></td>
    </tr>
    <tr>
      <th scope="row">值</th>
      <td>参见 {{cssxref("display", "", "#形式语法")}}</td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

有关这些值的描述，请参阅 CSS {{cssxref("display")}} 属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{SVGAttr("visibility")}} 属性
- CSS {{cssxref("display")}} 属性
