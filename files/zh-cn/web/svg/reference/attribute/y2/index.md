---
title: y2
slug: Web/SVG/Reference/Attribute/y2
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`y2`** 属性用于为需要多个坐标才能绘制的 SVG 元素指定第二个 y 坐标。只需一个坐标的元素则使用 {{SVGAttr("y")}} 属性。

## 元素

你可以将此属性与以下各节所述的 SVG 元素一起使用。

### `<line>`

对于 {{SVGElement('line')}}，`y2` 定义线段终点的 y 坐标。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <strong
          ><a href="/zh-CN/docs/Web/SVG/Guides/Content_type#长度"
            >&#x3C;length></a
          ></strong
        >|<strong
          ><a href="/zh-CN/docs/Web/SVG/Guides/Content_type#百分数"
            >&#x3C;percentage></a
          ></strong
        >|<strong
          ><a href="/zh-CN/docs/Web/SVG/Guides/Content_type#数字"
            >&#x3C;number></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <line x1="1" x2="9" y1="5" y2="1" stroke="red" />
  <line x1="1" x2="9" y1="5" y2="5" stroke="green" />
  <line x1="1" x2="9" y1="5" y2="9" stroke="blue" />
</svg>
```

{{EmbedLiveSample('line', '100%', 200)}}

### `<linearGradient>`

对于 {{SVGElement('linearGradient')}}，`y2` 定义用于映射色标值的*渐变向量*终点的 y 坐标。该属性的具体行为受 {{SVGAttr('gradientUnits')}} 属性影响。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <strong
          ><a href="/zh-CN/docs/Web/SVG/Guides/Content_type#长度"
            >&#x3C;length></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>0%</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  默认情况下，渐变向量终止于其所应用到的形状的包围盒右上角。
  -->
  <linearGradient y2="0%" id="g0">
    <stop offset="5%" stop-color="black" />
    <stop offset="50%" stop-color="red" />
    <stop offset="95%" stop-color="black" />
  </linearGradient>

  <rect x="1" y="1" width="8" height="8" fill="url(#g0)" />

  <!--
  此处渐变向量终止于其所应用到的形状的包围盒右下角。
  -->
  <linearGradient y2="100%" id="g1">
    <stop offset="5%" stop-color="black" />
    <stop offset="50%" stop-color="red" />
    <stop offset="95%" stop-color="black" />
  </linearGradient>

  <rect x="11" y="1" width="8" height="8" fill="url(#g1)" />
</svg>
```

{{EmbedLiveSample('linearGradient', '100%', 200)}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
  <line x1="2" x2="22" y1="20" y2="0" stroke="red" />
  <line x1="2" x2="22" y1="20" y2="10" stroke="green" />
  <line x1="2" x2="22" y1="20" y2="20" stroke="blue" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
