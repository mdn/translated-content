---
title: initial-letter
slug: Web/CSS/initial-letter
l10n:
  sourceCommit: c77cfcd17e85db6c1b93160c70668f2ff6c2809c
---

{{CSSRef}}{{SeeCompatTable}}

`initial-letter` CSS 属性用于设置首字符的样式，包括嵌入、凸起和下沉。

## 语法

```css
/* 关键字值 */
initial-letter: normal;

/* 数值 */
initial-letter: 1.5; /* 首字母占据了 1.5 行 */
initial-letter: 3; /* 首字母占据了 3 行 */
initial-letter: 3 2; /* 首字母占据了 3 行并下沉了 2 行 */

/* 全局值 */
initial-letter: inherit;
initial-letter: initial;
initial-letter: revert;
initial-letter: revert-layer;
initial-letter: unset;
```

关键词值为 `normal`，或者是一个 `<number>`，后面可以跟一个 `<integer>`。

### 值

- `normal`
  - : 没有特殊首字母效果，像正常文本一样显示。
- `<number>`
  - : 该属性定义首字母的大小，以其占据的行数为单位，不允许使用负值。
- `<integer>`
  - : 该属性定义首字母下沉的行数（当指定其尺寸时）。数值必须大于零。如果省略，则会复制尺寸值，并向下取整到最接近的正整数。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置首字母大小

#### HTML

```html
<p class="normal">首字母大小是正常的</p>
<p class="onefive">首字母大小占据了 1.5 行</p>
<p class="three">首字母大小占据了 3 行</p>
```

#### CSS

```css
.normal::first-letter {
  -webkit-initial-letter: normal;
  initial-letter: normal;
}

.onefive::first-letter {
  -webkit-initial-letter: 1.5;
  initial-letter: 1.5;
}

.three::first-letter {
  -webkit-initial-letter: 3;
  initial-letter: 3;
}
```

#### 结果

{{EmbedLiveSample('设置首字母大小', 250, 180)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("initial-letter-align")}}
- [CSS 中的首字母下沉效果](https://www.oddbird.net/2017/01/03/initial-letter/)
