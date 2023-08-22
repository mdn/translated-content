---
title: ":first"
slug: Web/CSS/:first
---

{{CSSRef}}

**`:first`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)与 {{cssxref("@page")}} [at 规则](/zh-CN/docs/Web/CSS/At-rule)一起使用。表示打印文档的第一页。（有关节点的第一个元素，请参阅 {{cssxref(":first-child")}}。）

```css
/* 打印时选择第一页 */
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}
```

> **备注：** 你不能使用此伪类更改所有的 CSS 属性。你只能更改文档的边距、{{cssxref("orphans")}}、{{cssxref("widows")}} 和分页符。此外，在定义边距时，你只能使用[绝对长度](/zh-CN/docs/Web/CSS/length#绝对长度单位)单位。所有其他属性都将被忽略。

## 语法

```css
:first {
  /* ... */
}
```

## 示例

### HTML

```html
<p>第一页。</p>
<p>第二页。</p>
<button>打印！</button>
```

### CSS

```css
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}

p {
  page-break-after: always;
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", () => {
  window.print();
});
```

### 结果

按下“打印！”按钮以打印此示例。第一页的文字应该大致位于中心位置，而其他页的内容将位于默认位置。

{{ EmbedLiveSample('示例', '80%', '150px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("@page")}}
- 其他页面相关的伪类：{{Cssxref(":left")}}、{{Cssxref(":right")}}
