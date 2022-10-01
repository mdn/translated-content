---
title: ':active'
slug: Web/CSS/:active
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`:active`** [伪类](/zh-CN/docs/CSS/Pseudo-classes)匹配被用户激活的元素。它让页面能在浏览器监测到激活时给出反馈。当用鼠标交互时，它代表的是用户按下按键和松开按键之间的时间。

```css
/* Selects any <a> that is being activated */
a:active {
  color: red;
}
```

`:active` 伪类一般被用在 {{HTMLElement("a")}} 和 {{HTMLElement("button")}} 元素中。这个伪类的一些其他适用对象包括包含激活元素的元素，以及可以通过他们关联的{{HTMLElement("label")}}标签被激活的表格元素。

这个样式可能会被后声明的其他链接相关的伪类覆盖，这些伪类包括 {{cssxref(":link")}}，{{cssxref(":hover")}} 和 {{cssxref(":visited")}}。为保证样式生效，需要把 `:active` 的样式放在所有链接相关的样式之后。这种链接伪类先后顺序被称为 _LVHA 顺序_：`:link` — `:visited` — `:hover` — `:active`。

> **备注：** 在有多键鼠标的系统中，CSS 3 规定 `:active` 伪类必须只匹配主按键；对于右手操作鼠标来说，就是左键。

## 语法

{{csssyntax}}

## 示例

### 激活链接

#### HTML

```html
<p>This paragraph contains a link:
  <a href="#">This link will turn red while you click on it.</a>
  The paragraph will get a gray background while you click on it or the link.
</p>
```

#### CSS

```css
a:link { color: blue; }          /* 未访问链接 */
a:visited { color: purple; }     /* 已访问链接 */
a:hover { background: yellow; }  /* 用户鼠标悬停 */
a:active { color: red; }         /* 激活链接 */

p:active { background: #eee; }   /* 激活段落 */
```

#### 结果

{{EmbedLiveSample('Active_links')}}

### 激活表单元素

#### HTML

```html
<form>
  <label for="my-button">My button: </label>
  <button id="my-button" type="button">Try Clicking Me or My Label!</button>
</form>
```

#### CSS

```css
form :active {
  color: red;
}

form button {
  background: white;
}
```

#### 结果

{{EmbedLiveSample('Active_form_elements')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 链接相关伪类：{{cssxref(":link")}}、{{cssxref(":visited")}} 和 {{cssxref(":hover")}}。
