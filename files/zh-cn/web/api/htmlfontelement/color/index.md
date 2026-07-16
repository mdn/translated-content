---
title: HTMLFontElement：color 属性
slug: Web/API/HTMLFontElement/color
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{deprecated_header}}{{APIRef("HTML DOM")}}

已过时的 **`HTMLFontElement.color`** 属性是一个反映 [`color`](/zh-CN/docs/Web/HTML/Reference/Elements/font#color) HTML 属性的字符串，包含命名颜色或以十六进制 #RRGGBB 格式指定的颜色。

字符串的格式必须遵循以下 HTML 微语法（参见 [`<color>`](/zh-CN/docs/Web/CSS/Reference/Values/color_value)）之一：

| 微语法                   | 描述                              | 示例                      |
| ------------------------ | --------------------------------- | ------------------------- |
| 有效的命名颜色字符串     | _颜色命名（大小写不敏感）_        | `Green`、`green`、`GREEN` |
| 有效的十六进制颜色字符串 | _#RRGGBB_                         | `#008000`                 |
| 使用十进制的 RGB         | _rgb(x x x)（x 在 0-255 范围内）_ | `rgb(0 128 0)`            |

## 值

一个字符串。

当设置为 `null` 时，`null` 值会被转化为空字符串（`""`），因此 `elt.color = null` 相当于 `elt.color = ""`。

## 示例

```js
// 假设在 HTML 中存在 <font id="f"> 元素
const f = document.getElementById("f");
f.color = "green";
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("HTMLFontElement")}} 接口。
