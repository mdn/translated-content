---
title: font-weight
slug: Web/CSS/font-weight
---

{{CSSRef}}

## 概述

{{Cssxref("font-weight")}} [CSS](/zh-CN/docs/CSS) 属性指定了字体的粗细程度。一些字体只提供 `normal` 和 `bold` 两种值。

{{EmbedInteractiveExample("pages/css/font-weight.html")}}

```css
/* Keyword values */
font-weight: normal;
font-weight: bold;

/* Keyword values relative to the parent */
font-weight: lighter;
font-weight: bolder;

/* Numeric keyword values */
font-weight: 1
font-weight: 100;
font-weight: 100.6;
font-weight: 123;
font-weight: 200;
font-weight: 300;
font-weight: 321;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900;
font-weight: 1000;

/* Global values */
font-weight: inherit;
font-weight: initial;
font-weight: unset;
```

{{EmbedGHLiveSample("css-examples/variable-fonts/font-weight.html", '100%', 860)}}

{{cssinfo}}

## 语法

### 值

- `normal`
  - : 正常粗细。与 `400` 等值。
- `bold`
  - : 加粗。与 `700` 等值。
- `lighter`
  - : 比从父元素继承来的值更细 (处在字体可行的粗细值范围内)。
- `bolder`
  - : 比从父元素继承来的值更粗 (处在字体可行的粗细值范围内)。
- `<number>`
  - : 一个介于 1 和 1000 (包含) 之间的 [`<number>`](/zh-CN/docs/Web/CSS/number) 类型值。更大的数值代表字体重量粗于更小的数值 (或一样粗)。一些常用的数值对应于通用的字体重量名称，如章节[常见粗细值名称和数值对应](#常见粗细值名称和数值对应)所描述。

### 回退机制

如果指定的权重值不可用，则使用以下规则来确定实际呈现的权重：

- 如果指定的权重值在 `400`和 `500`之间（包括`400`和`500`）：

  - 按升序查找指定值与`500`之间的可用权重；
  - 如果未找到匹配项，按**降序**查找小于指定值的可用权重；
  - 如果未找到匹配项，按**升序**查找大于`500`的可用权重。

- 如果指定值小于`400`，按**降序**查找小于指定值的可用权重。如果未找到匹配项，按**升序**查找大于指定值的可用权重（先尽可能的小，再尽可能的大）。
- 如果指定值大于`500`，按**升序**查找大于指定值的可用权重。如果未找到匹配项，按**降序**查找小于指定值的可用权重（先尽可能的大，再尽可能的小）。

以上策略意味着，如果一个字体只有 `normal` 和 `bold` 两种粗细值选择，指定粗细值为 `100-500` 时，实际渲染时将使用 `normal`，指定粗细值为 `501-900` 时，实际渲染时将使用 `bold` 。

### 相对粗细值的解析

当指定的是相对粗细值 `lighter` 或 `bolder` 时，将使用如下图表来决定元素渲染时的绝对粗细值：

| 继承值（Inherited value） | `bolder` | `lighter` |
| ------------------------- | -------- | --------- |
| 100                       | 400      | 100       |
| 200                       | 400      | 100       |
| 300                       | 400      | 100       |
| 400                       | 700      | 100       |
| 500                       | 700      | 100       |
| 600                       | 900      | 400       |
| 700                       | 900      | 400       |
| 800                       | 900      | 700       |
| 900                       | 900      | 700       |

### 常见粗细值名称和数值对应

100 到 900 之间的数值大致对应如下的常见粗细值名称：

- `100`
  - : Thin (Hairline)
- `200`
  - : Extra Light (Ultra Light)
- `300`
  - : Light
- `400`
  - : Normal
- `500`
  - : Medium
- `600`
  - : Semi Bold (Demi Bold)
- `700`
  - : Bold
- `800`
  - : Extra Bold (Ultra Bold)
- `900`
  - : Black (Heavy)

### 插值规律

`font-weight` 数值采取离散式定义（使用 100 的整倍数）。数值为实数，非 100 的整数倍的值将被四舍五入转换为 100 的整倍数，遇到 \*50 时，将向上转换，如 150 将转换为 200。

### 形式语法

{{csssyntax("font-weight")}}

## 示例

### HTML

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the bank,
  and of having nothing to do: once or twice she had peeped into the book her
  sister was reading, but it had no pictures or conversations in it, 'and what
  is the use of a book,' thought Alice 'without pictures or conversations?'
</p>

<div>
  I'm heavy<br />
  <span>I'm lighter</span>
</div>
```

### CSS

```css
/* Set paragraph text to be bold. */
p {
  font-weight: bold;
}

/* Set div text to two steps darker than
   normal but less than a standard bold. */
div {
  font-weight: 600;
}

/* Sets text enclosed within span tag
   to be one step lighter than the parent. */
span {
  font-weight: lighter;
}
```

### 结果

{{EmbedLiveSample("示例","400","300")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
