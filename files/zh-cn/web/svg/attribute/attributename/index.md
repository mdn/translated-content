---
title: attributeName
slug: Web/SVG/Attribute/attributeName
l10n:
  sourceCommit: 54eb3a678b4d4cbc94588d2234103e74dfa063a0
---

{{SVGRef}}

**`attributeName`** 属性表示动画期间将要更改的目标元素的 CSS 属性或属性的名称。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement("animate")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
  <rect x="50" y="50" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="5s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("示例", "400", "250")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td><code>&#x3C;name></code></td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>无</td>
    </tr>
  </tbody>
</table>

- `<name>`
  - ：此值表示要动画化的目标元素的 CSS 属性或属性的名称。

## 规范

{{Specifications}}

## 参见

- [SMIL 动画规范](https://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute)
