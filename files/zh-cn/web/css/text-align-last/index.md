---
title: text-align-last
slug: Web/CSS/text-align-last
---

{{CSSRef}}

CSS 属性 **`text-align-last`** 描述的是一段文本中最后一行在被强制换行之前的对齐规则。

```css
/* Keyword values */
text-align-last: auto;
text-align-last: start;
text-align-last: end;
text-align-last: left;
text-align-last: right;
text-align-last: center;
text-align-last: justify;

/* Global values */
text-align-last: inherit;
text-align-last: initial;
text-align-last: unset;
```

{{cssinfo}}

## 语法

### 属性值

- `auto`
  - : 每一行的对齐规则由 {{cssxref("text-align")}} 的值来确定，当 {{cssxref("text-align")}} 的值是 `justify`，`text-align-last` 的表现和设置了 `start` 的表现是一样的，即如果文本的展示方向是从左到右，则最后一行左侧对齐与内容盒子。
- `start`
  - : 与 {{cssxref("direction")}} 的设置有关。
    如果文本展示方向是从左到右，起点在左侧，则是左对齐；
    如果文本展示方向是从右到左，起点在右侧，则是右对齐。
    如果没有设置 {{cssxref("direction")}} ，则按照浏览器文本的默认显示方向来确定。
- `end`
  - : 与 {{cssxref("direction")}} 的设置有关。
    如果文本展示方向是从左到右，末尾在右侧，则是右对齐；
    如果文本展示方向是从右到左，末尾在左侧，则是左对齐。
    如果没有设置 {{cssxref("direction")}} ，则按照浏览器文本的默认显示方向来确定。
- `left`
  - : 最后一行文字与内容盒子的左侧对齐
- `right`
  - : 最后一行文字与内容盒子的右侧对齐
- `center`
  - : 最后一行文字与内容盒子居中对齐
- `justify`
  - : 最后一行文字的开头与内容盒子的左侧对齐，末尾与右侧对齐。

### 语法

{{csssyntax}}

## 示例

```html hidden
<p>
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

```css
p {
  font-size: 1.4em;
  text-align: justify;
  -moz-text-align-last: center;
  text-align-last: center;
}
```

{{EmbedLiveSample('示例','100%')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("text-align")}}
- {{cssxref("direction")}}
