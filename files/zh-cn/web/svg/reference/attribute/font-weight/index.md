---
title: font-weight
slug: Web/SVG/Reference/Attribute/font-weight
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`font-weight`** 属性表示用于渲染文本的字形相对于同一字体家族中其他字体的粗细程度。

> [!NOTE]
> 作为表现属性，`font-weight` 也有一个对应的 CSS 属性：{{cssxref("font-weight")}}。当两者都被指定时，CSS 属性优先。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 示例

### 控制 SVG 粗细

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <text y="20" font-weight="normal">正常文本</text>
  <text x="100" y="20" font-weight="bold">粗体文本</text>
</svg>
```

{{EmbedLiveSample("控制 SVG 粗细")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code>normal</code> | <code>bold</code> | <code>bolder</code> |
        <code>lighter</code> | {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

有关各值的说明，请参阅 [CSS `font-weight`](/zh-CN/docs/Web/CSS/Reference/Properties/font-weight#值) 属性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- CSS {{cssxref("font-weight")}} 属性
