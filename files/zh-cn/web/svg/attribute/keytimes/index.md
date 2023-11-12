---
title: keyTimes
slug: Web/SVG/Attribute/keyTimes
---

{{SVGRef}}

keyTimes 属性是一个以分号分隔的时间值列表，用于控制动画的执行步骤。列表中的每个值与 {{ SVGAttr("values") }} 中的值一一对应，定义了 {{ SVGAttr("values") }} 中的值在动画中何时执行，keyTimes 列表中的每一个值都是指定在 \[0-1] 之间的浮点数，表示动画的完成时间。

如果指定了 keyTimes 列表，那么一定有与之完全对应的{{ SVGAttr("values") }}列表。

每一个连续的时间值必须大于等于前一个时间值。

keyTimes 列表的语义取决于插值模式：

- 对于 linear(线性) 和 spline(样条) 动画，列表中的第一个时间值必须为 0，列表的最后一个时间值必须为 1。与每个 value 关联的时间值定义了何时设置该 value，该 value 在 keyTimes 的时间 值的中间插值。
- 对于 discrete(离线) 动画，列表中的第一个值必须为 0。与每个 value 关联的时间值定义了何时设置该 value，动画函数使用该 value，直到 keyTimes 中定义的下一个时间值。

如果插值模式是 paced（踏步），keyTimes 属性被忽略。

如果 duration（持续时间）不确定，则将忽略任何 keyTimes 规范。

## 用法

| 类别   | 动画值属性 |
| ------ | ---------- |
| 值     | \<list>    |
| 可变性 | No         |

## 示例

```html
<?xml version="1.0"?>
<svg
  width="120"
  height="120"
  viewPort="0 0 120 120"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="10" r="10">
    <animate
      attributeName="cx"
      attributeType="XML"
      dur="4s"
      values="60 ; 110 ; 60 ; 10 ; 60"
      keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
      repeatCount="indefinite" />

    <animate
      attributeName="cy"
      attributeType="XML"
      dur="4s"
      values="10 ; 60 ; 110 ; 60 ; 10 "
      keyTimes="0 ; 0.25 ; 0.5 ; 0.75 ; 1"
      repeatCount="indefinite" />
  </circle>
</svg>
```

## 元素

以下元素可以使用 `keyTimes 属性`

- {{ SVGElement("animate") }}
- {{ SVGElement("animateColor") }}
- {{ SVGElement("animateMotion") }}
- {{ SVGElement("animateTransform") }}

## 规范

{{Specifications}}
