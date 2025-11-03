---
title: initial-letter
slug: Web/CSS/Reference/Properties/initial-letter
l10n:
  sourceCommit: 33cd63a518c57caded1b43ff9fff071230a2397a
---

`initial-letter` CSS 属性用于设置首字符的样式，包括嵌入、凸起和下沉。这个属性适用于 {{cssxref("::first-letter")}} 伪元素以及区块容器内的首个行内级子元素。

## 语法

```css
/* 关键字值 */
initial-letter: normal;

/* 一个值 */
initial-letter: 3; /* 高度为 3 行，基线位于第 3 行 */
initial-letter: 1.5; /* 高度为 1.5 行，基线位于第 2 行 */

/* 两个值 */
initial-letter: 3 2; /* 高度为 3 行，基线在第 2 行（上升了 1 行） */
initial-letter: 3 1; /* 高度为 3 行，基线未变（上升了 2 行） */

/* 全局值 */
initial-letter: inherit;
initial-letter: initial;
initial-letter: revert;
initial-letter: revert-layer;
initial-letter: unset;
```

### 值

关键字值为 `normal`，或者是可以后跟一个 `<integer>` 的 `<number>`。

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

p {
  outline: 1px dashed red;
}
```

#### 结果

{{EmbedLiveSample('设置首字母大小', 250, 180)}}

### 设置下沉值

在这个例子中，所有首字母的大小都相同，但下沉值不同。

#### HTML

```html
<p class="four">首字母大写：下沉值 = 4</p>
<p class="same">首字母大写：未声明下沉值（与大小相同）</p>
<p class="two">首字母大写：下沉值 = 2</p>
<p class="one">首字母大写：下沉值 = 1</p>
```

#### CSS

```css
.four::first-letter {
  -webkit-initial-letter: 3 4;
  initial-letter: 3 4;
}

.same::first-letter {
  -webkit-initial-letter: 3;
  initial-letter: 3;
}

.two::first-letter {
  -webkit-initial-letter: 3 2;
  initial-letter: 3 2;
}

.one::first-letter {
  -webkit-initial-letter: 3 1;
  initial-letter: 3 1;
}

p {
  outline: 1px dashed red;
}
```

#### 结果

{{EmbedLiveSample('设置下沉值', 250, 240)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("::first-letter")}}
- {{cssxref(":first-child")}}
- [CSS 中的首字母下沉效果](https://www.oddbird.net/2017/01/03/initial-letter/)，由 Oddbird 提供（2017）
