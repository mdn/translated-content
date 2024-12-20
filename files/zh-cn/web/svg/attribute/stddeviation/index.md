---
title: stdDeviation
slug: Web/SVG/Attribute/stdDeviation
---

{{SVGRef}}

**`stdDeviation`** 属性定义了模糊操作的标准差。

你可以将该属性与以下 SVG 元素一起使用：

- {{SVGElement("feGaussianBlur")}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="gaussianBlur1">
    <feGaussianBlur stdDeviation="1" />
  </filter>
  <filter id="gaussianBlur2">
    <feGaussianBlur stdDeviation="5" />
  </filter>
  <filter id="gaussianBlur3" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="10" />
  </filter>

  <circle cx="100" cy="100" r="50" style="filter: url(#gaussianBlur1);" />
  <circle
    cx="100"
    cy="100"
    r="50"
    style="filter: url(#gaussianBlur2); transform: translateX(140px);" />
  <circle
    cx="100"
    cy="100"
    r="50"
    style="filter: url(#gaussianBlur3); transform: translateX(280px);" />
</svg>
```

{{EmbedLiveSample("示例", "480", "200")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code
          ><a href="/zh-CN/docs/Web/SVG/Content_type#number-optional-number"
            >&#x3C;number-optional-number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">可变性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`

  - : 如果列出两个数值，第一个数字表示沿着 x 轴的标准差值。第二个值表示沿着 y 轴的标准差值。如果只提供了一个数字，那个值就表示在 x 轴和 y 轴上有着相同的标准差。

    负值是不允许的。设为零即禁用了已有滤镜的原本效果（比如，结果是滤镜输入图像）。如果 `stdDeviation` 在 x 轴和 y 轴上只有一个为 0，那么模糊效果就只会应用于非 0 的那个方向。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
