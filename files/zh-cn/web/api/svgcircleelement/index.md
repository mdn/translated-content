---
title: SVGCircleElement
slug: Web/API/SVGCircleElement
---

{{APIRef("SVG")}}

## SVG Circle DOM 接口

`SVGCircleElement` 接口提供了对{{ SVGElement("circle") }}元素的属性的访问，而且还提供了操作该元素的方法。

### 接口概览

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">又作用于</th>
      <td>
        {{ domxref("SVGElement") }}、
        {{ domxref("SVGTests") }}、
        {{ domxref("SVGLangSpace") }}、{{ domxref("SVGExternalResourcesRequired") }}、{{ domxref("SVGStylable") }}、
        {{ domxref("SVGTransformable") }}
      </td>
    </tr>
    <tr>
      <th scope="row">方法</th>
      <td><em>无</em></td>
    </tr>
    <tr>
      <th scope="row">属性</th>
      <td>
        <ul>
          <li>
            只读 {{ domxref("SVGAnimatedLength") }} <code>cx</code>
          </li>
          <li>
            只读 {{ domxref("SVGAnimatedLength") }} <code>cy</code>
          </li>
          <li>
            只读 {{ domxref("SVGAnimatedLength") }} <code>r</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">规范文档</th>
      <td>
        <a
          href="http://www.w3.org/TR/SVG11/shapes.html#InterfaceSVGCircleElement"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## 属性

| 名称 | 类型                               | 描述                                                              |
| ---- | ---------------------------------- | ----------------------------------------------------------------- |
| `cx` | {{ domxref("SVGAnimatedLength") }} | 对应于给定{{ SVGElement("circle") }}元素的{{ SVGAttr("cx") }}属性 |
| `cy` | {{ domxref("SVGAnimatedLength") }} | 对应于给定{{ SVGElement("circle") }}元素的{{ SVGAttr("cy") }}属性 |
| `r`  | {{ domxref("SVGAnimatedLength") }} | 对应于给定{{ SVGElement("circle") }}元素的{{ SVGAttr("r") }}属性  |

## 方法

该`SVGCircleElement`接口没有提供任何专有方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ SVGElement("circle") }} SVG Element
