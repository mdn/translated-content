---
title: stroke-miterlimit
slug: Web/SVG/Attribute/stroke-miterlimit
---

{{SVGRef}}

如果两条线交汇在一起形成一个尖角，而且属性 {{ SVGAttr("stroke-linejoin") }} 指定了 `miter`，斜接有可能扩展到远远超过出路径轮廓线的线宽。属性 `stroke-miterlimit` 对斜接长度和 {{ SVGAttr("stroke-width") }} 的比率强加了一个极限。当极限到达时，交汇处由斜接变成倒角。

斜接长度（斜接的外尖角和内夹角之间的距离）与 {{ SVGAttr("stroke-width") }} 的比率，直接跟两条线之间的角度（θ）有关，用如下方程表示：

```plain
miterLength / stroke-width = 1 / sin ( theta / 2 )
```

举个例子，一个极限为 1.414 斜接，θ 小于 90 度的把斜接会转换成倒角，一个极限为 4.0 的斜接，θ 小于 29 度的斜接会转换成倒角，一个极限为 10.0 的斜接，θ 小于大约 11.5 度的斜接会转换成倒角。

## 用法

| 类别   | 外观属性                 |
| ------ | ------------------------ |
| 值     | \<miterlimit> \| inherit |
| 初始值 | 4                        |
| 可动性 | Yes                      |

- \<miterlimit>
  - : 对斜角长度与{{ SVGAttr("stroke-width") }}的比率的限制。\<miterlimit>的值必须是一个大于或等于 1 的[\<number>](/zh-CN/SVG/Content_type#Number)。

## 示例

## 元素

下列元素可以使用`stroke-miterlimit`属性：

- [形状元素](/zh-CN/SVG/Element#Shape) »
- [文本内容元素](/zh-CN/SVG/Element#TextContent) »

## 规范

{{Specifications}}
