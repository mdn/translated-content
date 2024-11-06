---
title: MathML 属性值
slug: Web/MathML/Values
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{MathMLRef}}

## MathML 特定类型

除了 [CSS 数据类型](/zh-CN/docs/Web/CSS/CSS_Types)外，一些 MathML 属性还接受以下类型：

- `<unsigned-integer>`：一个不以 U+002D HYPHEN-MINUS 字符（-）或 U+002B PLUS SIGN（+）开头的 [`<integer>`](/zh-CN/docs/Web/CSS/integer)，例如 `1234`。
- `<boolean>`：表示布尔值的字符串 `true` 或 `false`。

## 旧版 MathML 长度

{{deprecated_header}}

在 {{cssxref("length-percentage")}} 之外，MathML 曾经定义了自己的[用于描述长度的类型](https://www.w3.org/TR/MathML3/chapter2.html#type.length)。接受的值包括非零无单位长度值（例如 `5` 表示 `500%`）、以点结尾的数字（例如 `34.px`）或命名空间（例如 `thinmathspace`）。出于兼容性考虑，建议将非零无单位长度值替换为等效的 {{cssxref("percentage")}} 值，删除数字中不必要的点，并使用以下替代方案替换具名长度：

```plain
veryverythinmathspace  => 0.05555555555555555em
verythinmathspace      => 0.1111111111111111em
thinmathspace          => 0.16666666666666666em
mediummathspace        => 0.2222222222222222em
thickmathspace         => 0.2777777777777778em
verythickmathspace     => 0.3333333333333333em
veryverythickmathspace => 0.3888888888888889em
```

### 单位

| 单位 | 描述                                                                                                             |
| ---- | ---------------------------------------------------------------------------------------------------------------- |
| `em` | {{Cssxref("font-size", "Font-relative")}} 单位                                                                   |
| `ex` | [与字体相关的](/zh-CN/docs/Web/CSS/font-size)单位。（表示元素的 x-高度，在许多字体中大约等于 `em` 单位的一半。） |
| `px` | 像素                                                                                                             |
| `in` | 英寸（1 英寸 = 2.54 厘米）                                                                                       |
| `cm` | 厘米                                                                                                             |
| `mm` | 厘米                                                                                                             |
| `pt` | 点（1 点 = 1/72 英寸）                                                                                           |
| `pc` | 派卡（1 派卡 = 12 点）                                                                                           |
| `%`  | 默认值的百分比                                                                                                   |

### 常数

| 常数                             | 值        |
| -------------------------------- | --------- |
| `veryverythinmathspace`          | 1/18`em`  |
| `verythinmathspace`              | 2/18`em`  |
| `thinmathspace`                  | 3/18`em`  |
| `mediummathspace`                | 4/18`em`  |
| `thickmathspace`                 | 5/18`em`  |
| `verythickmathspace`             | 6/18`em`  |
| `veryverythickmathspace`         | 7/18`em`  |
| `negativeveryverythinmathspace`  | -1/18`em` |
| `negativeverythinmathspace`      | -2/18`em` |
| `negativethinmathspace`          | -3/18`em` |
| `negativemediummathspace`        | -4/18`em` |
| `negativethickmathspace`         | -5/18`em` |
| `negativeverythickmathspace`     | -6/18`em` |
| `negativeveryverythickmathspace` | -7/18`em` |

## 浏览器兼容性

{{Compat}}
