---
title: ":first-of-type"
slug: Web/CSS/:first-of-type
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) **`:first-of-type`** 表示一组兄弟元素中其类型的第一个元素。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-first-of-type.html", "tabbed-shorter")}}

## 语法

```css
:first-of-type {
  /* ... */
}
```

## 示例

### 装饰第一个段落

#### HTML

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 1</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

#### 结果

{{EmbedLiveSample('装饰第一个段落')}}

### 嵌套元素

下面这个例子展示了如何选中多层嵌套元素。注意当不存在简单选择器时，[通配符](/zh-CN/docs/Web/CSS/Universal_selectors)（`*`）是默认应用的。

#### HTML

```html
<article>
  <div>This `div` is first!</div>
  <div>This <span>nested `span` is first</span>!</div>
  <div>
    This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
  </div>
  <div>This <span>nested `span` gets styled</span>!</div>
  <p>This `p` qualifies!</p>
  <div>This is the final `div`.</div>
</article>
```

#### CSS

```css
article :first-of-type {
  background-color: pink;
}
```

#### 结果

{{EmbedLiveSample('嵌套元素', 500)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref(":first-child")}}, {{Cssxref(":last-of-type")}}, {{Cssxref(":nth-of-type")}}
