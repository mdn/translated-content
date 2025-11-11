---
title: mode
slug: Web/SVG/Reference/Attribute/mode
---

**`mode`** 属性定义了 {{SVGElement("feBlend")}} 滤镜原语上的混合模式。

可在以下 SVG 元素中使用该属性：

- {{SVGElement("feBlend")}}

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
  <filter id="blending1" x="0" y="0" width="100%" height="100%">
    <feFlood
      result="floodFill"
      x="0"
      y="0"
      width="100%"
      height="100%"
      flood-color="seagreen"
      flood-opacity="1" />
    <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
  </filter>
  <filter id="blending2" x="0" y="0" width="100%" height="100%">
    <feFlood
      result="floodFill"
      x="0"
      y="0"
      width="100%"
      height="100%"
      flood-color="seagreen"
      flood-opacity="1" />
    <feBlend in="SourceGraphic" in2="floodFill" mode="color-dodge" />
  </filter>

  <image
    xlink:href="mdn_logo_only_color.png"
    width="200"
    height="200"
    style="filter:url(#blending1);" />
  <image
    xlink:href="mdn_logo_only_color.png"
    width="200"
    height="200"
    style="filter:url(#blending2); transform:translateX(220px);" />
</svg>
```

{{EmbedLiveSample("示例", "480", "200")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>{{cssxref("blend-mode")}}</td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th scope="row">可变性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

有关值的说明，请参阅 {{cssxref("blend-mode")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
