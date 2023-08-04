---
title: text-align
slug: Web/CSS/text-align
---

{{CSSRef}}

`text-align` CSS 属性定义行内内容（例如文字）如何相对它的块父元素对齐。`text-align` 并不控制块元素自己的对齐，只控制它的行内内容的对齐。

```css
/* Keyword values */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;

/* Block alignment values (Non-standard syntax) */
text-align: -moz-center;
text-align: -webkit-center;

/* Global values */
text-align: inherit;
text-align: initial;
text-align: unset;
```

{{cssinfo}}

## 语法

text-align 属性指定为从以下值列表中选择的单个关键字。

### 值

- `start` {{experimental_inline}}
  - : 如果内容方向是左至右，则等于`left`，反之则为`right`。
- `end` {{experimental_inline}}
  - : 如果内容方向是左至右，则等于`right`，反之则为`left`。
- `left`
  - : 行内内容向左侧边对齐。
- `right`
  - : 行内内容向右侧边对齐。
- `center`
  - : 行内内容居中。
- `<string>` {{experimental_inline}}
  - : 第一个出现的该（单字符）字符串被用来对齐。跟随的关键字定义对齐的方向。例如，可用于让数字值根据小数点对齐。
- `justify`
  - : 文字向两侧对齐，对最后一行无效。
- `justify-all` {{experimental_inline}}
  - : 和 justify 一致，但是强制使最后一行两端对齐。
- `match-parent`
  - : 和`inherit`类似，区别在于`start`和`end`的值根据父元素的{{cssxref("direction")}}确定，并被替换为恰当的`left`或`right`。

### 形式语法

{{csssyntax("text-align")}}

## 示例

### 开始处对齐

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: start;
  border: solid;
}
```

#### 结果

{{EmbedLiveSample("开始处对齐","100%","100%")}}

### 文本居中

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: center;
  border: solid;
}
```

#### 结果

{{EmbedLiveSample("文本居中","100%","100%")}}

### 使用“justify”的示例

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: justify;
  border: solid;
}
```

#### 结果

{{EmbedLiveSample('使用“justify”的示例',"100%","100%")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("margin","margin:auto")}}, {{Cssxref("margin-left","margin-left:auto")}}, {{Cssxref("vertical-align")}}
