---
title: height
slug: Web/SVG/Attribute/height
---

{{SVGRef}}

该属性在用户坐标系统中标识了一个垂直长度。该坐标的确切效果依赖于每个元素。大多数时候，它体现引用元素的矩形区域的高度（请阅读每个元素的文档以了解例外情况）。

除了{{ SVGElement("svg") }}元素之外，别的元素都必须指定该属性，{{ SVGElement("svg") }}的高度默认是 **100%**，而 {{ SVGElement("filter") }} 元素以及 {{ SVGElement("mask") }} 元素的默认高度是 **120%**。

## 示例

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="100" height="100" />
</svg>
```

## 元素

下列元素可以使用 `height` 属性：

- [滤镜元素](/zh-CN/SVG/Element#FilterPrimitive) »
- {{ SVGElement("filter") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("image") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("rect") }}
- {{ SVGElement("svg") }}
- {{ SVGElement("use") }}
- {{ SVGElement("mask") }}

## 用法

对于 {{SVGElement('use')}} 元素，`height` 定义了引用元素的垂直长度。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <code>auto</code> |
        <strong
          ><a href="/docs/Web/SVG/Content_type#Length">&#x3C;length></a></strong
        >
        |
        <strong
          ><a href="/docs/Web/SVG/Content_type#Percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><code>auto</code>（视为 <code>0</code>）</td>
    </tr>
    <tr>
      <th scope="row">可变性</th>
      <td>是</td>
    </tr>
  </tbody>
</table>

## 规范

{{Specifications}}
