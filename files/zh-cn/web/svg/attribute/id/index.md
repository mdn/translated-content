---
title: id
slug: Web/SVG/Attribute/id
---

{{SVGRef}}

**`id`** 属性给予元素一个唯一名称。

所有元素均可使用该属性。

## 示例

```html
<svg
  width="120"
  height="120"
  viewPort="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg">
  <style type="text/css">
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

## 用法说明

| 值     | \<id>  |
| ------ | ------ |
| 默认值 | _None_ |
| 可动画 | No     |

- \<id>

  - : 指定元素的 ID。该 ID 在节点树中必须是唯一的，不能为空字符串，并且不能包含任何空格字符。

    > **备注：** 应当避免使用会被解析为 SVG 视图规范的 `id` 值（如 `MyDrawing.svg#svgView(viewBox(0,200,1000,1000))`），或被解析为用作 URL 目标片段的基本媒体片段的 `id` 值。

    该属性取值必须在 XML 文档中有效。独立的 SVG 文档使用 XML 1.0 语法，该语法指定有效的 ID 仅包含指定的字符（字母，数字和一些标点符号），开头不能是数字，点（.）字符或 连字符减号（-）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [HTML `id`](/zh-CN/docs/Web/HTML/Global_attributes/id)
- {{SVGAttr("class")}}
