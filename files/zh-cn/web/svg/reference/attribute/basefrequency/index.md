---
title: baseFrequency
slug: Web/SVG/Reference/Attribute/baseFrequency
l10n:
  sourceCommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

**`baseFrequency`** 属性表示 {{SVGElement("feTurbulence")}} 滤镜原语的噪点函数的基础频率参数。

你可以将此属性与以下 SVG 元素一起使用：

- {{SVGElement("feTurbulence")}}

## 示例

### 示例 1

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise1" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.025" />
  </filter>
  <filter id="noise2" x="0" y="0" width="100%" height="100%">
    <feTurbulence baseFrequency="0.05" />
  </filter>

  <rect x="0" y="0" width="200" height="200" style="filter: url(#noise1);" />
  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    style="filter: url(#noise2); transform: translateX(220px);" />
</svg>
```

{{EmbedLiveSample("示例 1", "220", "220")}}

### 示例 2

```html
<svg
  width="200"
  height="200"
  viewBox="0 0 220 220"
  xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.05"
      numOctaves="2"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="50"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>

  <circle cx="100" cy="100" r="100" style="filter: url(#displacementFilter)" />
</svg>
```

{{EmbedLiveSample("示例 2", "220", "250")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <a href="/zh-CN/docs/Web/SVG/Guides/Content_type#带可取舍的后缀数字的数字"
          >&#x3C;number-optional-number></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>有</td>
    </tr>
  </tbody>
</table>

- `<number-optional-number>`
  - : 如果提供了两个数字，第一个数字表示水平方向的基础频率，第二个数字表示垂直方向的基础频率。如果提供了一个数字，则该值同时作用于 x 轴 和 y 轴。

    禁止使用负值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
