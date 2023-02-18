---
title: border-image-repeat
slug: Web/CSS/border-image-repeat
---

{{CSSRef}}

`border-image-repeat` 定义图片如何填充边框。或为单个值，设置所有的边框；或为两个值，分别设置水平与垂直的边框。

{{cssinfo}}

## Syntax

```
Formal syntax: {{csssyntax("border-image-repeat")}}
```

```
border-image-repeat: type                      /* One-value syntax */       E.g. border-image-value: stretch;
border-image-repeat: horizontal vertical       /* Two-value syntax */       E.g. border-image-width: round space;

border-image-repeat: inherit
```

### Values

- _type_
  - : `stretch`, `repeat`, `round`, `space` 选一。属于单个值的情况。
- _horizontal_
  - : `stretch`, `repeat`, `round`, `space` 选一。属于两个值的情况。
- _vertical_
  - : `stretch`, `repeat`, `round`, `space` 选一。属于两个值的情况。
- `stretch`
  - : 拉伸图片以填充边框。
- `repeat`
  - : 平铺图片以填充边框。
- `round`
  - : 平铺图像。当不能整数次平铺时，根据情况放大或缩小图像。
- `space`
  - : 平铺图像。当不能整数次平铺时，会用空白间隙填充在图像周围（不会放大或缩小图像）
- `inherit`
  - : 继承父级元素的计算值。

## Examples

不同的取值，查看 {{cssxref("border-image")}} 的示例。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
