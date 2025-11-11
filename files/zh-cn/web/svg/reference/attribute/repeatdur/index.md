---
title: repeatDur
slug: Web/SVG/Reference/Attribute/repeatDur
---

**`repeatDur`** 属性指定重复动画的总持续时间。

可在以下 SVG 元素中使用该属性：

- {{SVGElement("animate")}}
- {{SVGElement("animateColor")}}
- {{SVGElement("animateMotion")}}
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
<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="1s"
      repeatDur="5s" />
  </rect>
  <rect x="120" y="0" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="0"
      to="50"
      dur="1s"
      repeatDur="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample("示例", "220", "150")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/SVG/Guides/Content_type#clock-value"
            >&#x3C;clock-value></a
          ></code
        >
        | <code>indefinite</code>
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><em>无</em></td>
    </tr>
    <tr>
      <th scope="row">可变性</th>
      <td>否</td>
    </tr>
  </tbody>
</table>

- `<clock-value>`
  - : 该值指定重复动画的呈现时间的持续时间。
- `indefinite`
  - : 该值表示动画将无限期重复（即直到文档结束）。

## 规范

{{Specifications}}
