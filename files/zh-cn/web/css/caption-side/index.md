---
title: caption-side
slug: Web/CSS/caption-side
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 中 **`caption-side`** 属性会将表格的标题（{{HTMLElement("caption")}}）放到规定的位置。但是具体显示的位置与表格的 {{cssxref('writing-mode')}} 属性值有关。

{{InteractiveExample("CSS Demo: caption-side")}}

```css interactive-example-choice
caption-side: top;
```

```css interactive-example-choice
caption-side: bottom;
```

```html interactive-example
<section class="default-example" id="default-example">
  <table class="transition-all" id="example-element">
    <caption>
      Famous animals
    </caption>
    <tr>
      <th>Name</th>
      <th>Location</th>
    </tr>
    <tr>
      <td>Giraffe</td>
      <td>Africa</td>
    </tr>
    <tr>
      <td>Penguin</td>
      <td>Antarctica</td>
    </tr>
    <tr>
      <td>Sloth</td>
      <td>South America</td>
    </tr>
    <tr>
      <td>Tiger</td>
      <td>Asia</td>
    </tr>
  </table>
</section>
```

```css interactive-example
table {
  font-size: 1.2rem;
  text-align: left;
  color: #000;
}

th,
td {
  padding: 0.2rem 1rem;
}

caption {
  background: #fc3;
  padding: 0.5rem 1rem;
}

tr {
  background: #eee;
}

tr:nth-child(even) {
  background: #ccc;
}
```

## 语法

```css
/* 方向值 */
caption-side: top;
caption-side: bottom;

/* 逻辑值 */
caption-side: block-start;
caption-side: block-end;
caption-side: inline-start;
caption-side: inline-end;

/* 全局值 */
caption-side: inherit;
caption-side: initial;
caption-side: revert;
caption-side: revert-layer;
caption-side: unset;
```

`caption-side` 属性的取值必须是下面所列值中的一个。

### 取值

- `top`
  - : 标题盒应置于表格上方。
- `bottom`
  - : 标题盒应置于表格下方。
- `block-start`
  - : 标题盒应置于表格的块首一侧。
- `block-end`
  - : 标题盒应置于表格的块末一侧。
- `inline-start`
  - : 标题盒应置于表格的行首一侧。
- `inline-end`
  - : 标题盒应置于表格的行末一侧。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 在上方和下方设置标题

#### HTML

```html
<table class="top">
  <caption>
    表格上方的标题
  </caption>
  <tr>
    <td>一些数据</td>
    <td>又一些数据</td>
  </tr>
</table>

<br />

<table class="bottom">
  <caption>
    表格下方的标题
  </caption>
  <tr>
    <td>一些数据</td>
    <td>又一些数据</td>
  </tr>
</table>
```

#### CSS

```css
.top caption {
  caption-side: top;
}

.bottom caption {
  caption-side: bottom;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid blue;
}
```

#### 结果

{{EmbedLiveSample("在上方和下方设置标题", "auto", 160)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
