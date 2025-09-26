---
title: id
slug: Web/SVG/Reference/Attribute/id
l10n:
  sourceCommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

**`id`** 属性为元素分配一个唯一的名称。

此属性可用于任何 SVG 元素。

## 示例

```html
<svg
  width="120"
  height="120"
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <style>
    <![CDATA[
      #smallRect {
        stroke: #000066;
        fill: #00cc00;
      }
    ]]>
  </style>

  <rect id="smallRect" x="10" y="10" width="100" height="100" />
</svg>
```

{{EmbedLiveSample("示例", "120", "120")}}

## 使用说明

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>&#x3C;id></td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><em>无</em></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>无</td>
    </tr>
  </tbody>
</table>

- \<id>
  - : 指定元素的 ID。该 ID 在节点树中必须是唯一的，不能为空字符串，并且不能包含任何空格字符。

    > [!NOTE]
    > 你应该避免使用会被解析为 SVG 视图规范（例如 `MyDrawing.svg#svgView(viewBox(0,200,1000,1000))`）或基本媒体片段的 `id` 值，尤其是在用作 URL 目标片段时。

    它必须在 XML 文档中有效。独立的 SVG 文档使用 XML 1.0 语法，规定有效的 ID 只能包含指定的字符（字母、数字和一些标点符号），且不能以数字、句号（.）字符或连接号（-）开头。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTML `id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id)
- {{SVGAttr("class")}}
