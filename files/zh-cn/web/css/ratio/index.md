---
title: <ratio>
slug: Web/CSS/ratio
---

{{CSSRef}}

\<ratio> CSS 数据类型，用于描述媒体查询中的宽高比，表示两个无单位值之间的比例。

## 句法

在 Media Queries Level 3 中，\<ratio>数据类型包括一个正数的[\<integer>](/zh-CN/docs/Web/CSS/integer)值，后跟一个正斜杠（'/'，Unicode U + 002F SOLIDUS）和第二个正数的[\<integer>](/zh-CN/docs/Web/CSS/integer)值。斜杠前后的空格是可选的。第一个数字代表宽度，第二个数字代表高度。

在 Media Queries Level 4 中，\<ratio>数据类型包括一个正数的[\<number>](/zh-CN/docs/Web/CSS/number)值，后跟一个正斜杠（'/'，Unicode U + 002F SOLIDUS）和第二个正数的[\<number>](/zh-CN/docs/Web/CSS/number)值。此外，允许使用单个[\<number>](/zh-CN/docs/Web/CSS/number)作为值。

## 例子

### 在媒体查询中使用

```css
@media screen and (min-aspect-ratio: 16/9) { ... }
```

### 常见的宽高比

( (

|                                     | 比                                            | 用法                                     |
| ----------------------------------- | --------------------------------------------- | ---------------------------------------- |
| ![Ratio4_3.png](ratio4_3.png)       | `4/3`                                         | 在 20 传统电视制式格式。                 |
| ![Ratio16_9.png](ratio16_9.png)     | `16/9`                                        | 现代"宽屏”电视格式。                     |
| ![Ratio1_1.85.png](ratio1_1.85.png) | `185/100`= `91/50` _(不允许非整数除数和除数)_ | 自 20 世纪 60 年代以来最常见的电影格式。 |
| ![Ratio1_2.39.png](ratio1_2.39.png) | `239/100` _(不允许使用非整数红利和除数)_      | "宽屏”,变形电影格式。                    |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`aspect-ratio`](/zh-CN/docs/Web/CSS/@media/aspect-ratio) 媒体功能
