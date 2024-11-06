---
title: <ratio>
slug: Web/CSS/ratio
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{CSSRef}}

**`<ratio>`** [CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/CSS_Types)用于在[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries)中描述[纵横比](/zh-CN/docs/Web/CSS/@media/aspect-ratio)，表示两个无单位值之间的比例关系。

## 语法

在媒体查询第 3 版中，`<ratio>` 数据类型由一个严格正整数 {{cssxref("&lt;integer&gt;")}} 后跟一个斜杠（“/”，Unicode `U+002F SOLIDUS`）以及第二个严格正整数 {{cssxref("&lt;integer&gt;")}} 组成。斜线前后的空格是可选的。第一个数字代表宽度，而第二个数字代表高度。

在媒体查询第 4 版中，`<ratio>` 数据类型已更新，现在由一个严格正整数 {{cssxref("&lt;number&gt;")}} 开头，后跟一个斜杠（“/”，Unicode `U+002F SOLIDUS`）和第二个严格正整数 {{cssxref("&lt;number&gt;")}}。此外，也允许使用单一的 {{cssxref("&lt;number&gt;")}} 值。

## 形式语法

{{csssyntax}}

## 示例

### 在媒体查询中使用

```css
@media screen and (min-aspect-ratio: 16/9) {
  /* … */
}
```

### 常见的纵横比

|                                                               | Ratio               | 说明                               |
| ------------------------------------------------------------- | ------------------- | ---------------------------------- |
| ![一个高为 3 个单位，宽为 4 个单位的矩形](ratio4_3.png)       | `4/3`               | 二十世纪的传统电视格式。           |
| ![一个高为 9 个单位，宽为 16 个单位的矩形](ratio16_9.png)     | `16/9`              | 现代“宽屏”电视格式。               |
| ![一个高为 1 个单位，宽为 1.85 个单位的矩形](ratio1_1.85.png) | `185/100` = `91/50` | 自 1960 年代以来最普遍的电影格式。 |
| ![一个高为 1 个单位，宽为 2.39 个单位的矩形](ratio1_2.39.png) | `239/100`           | “宽屏”，失真电影格式。             |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`aspect-ratio`](/zh-CN/docs/Web/CSS/@media/aspect-ratio) 媒体特性
