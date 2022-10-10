---
title: ':only-child'
slug: Web/CSS/:only-child
---

{{CSSRef}}

CSS[伪类](/zh-CN/docs/CSS/Pseudo-classes)`:only-child` 匹配没有任何兄弟元素的元素。等效的选择器还可以写成 `:first-child:last-child`或者`:nth-child(1):nth-last-child(1)`,当然，前者的权重会低一点。

```css
/* Selects each <p>, but only if it is the */
/* only child of its parent */
p:only-child {
  background-color: lime;
}
```

> **备注：** 在起初定义，被选择的元素必须拥有一个父级元素。从 Selectors Level 4 开始，这不再是必须的了。

## 语法

{{csssyntax}}

## 示例

### 基础示例

#### HTML

```html
<main>
  <div>
    <i>I am a lonely only child.</i>
  </div>

  <div>
    <i>I have siblings.</i><br>
    <b>So do I!</b><br>
    <span>I also have siblings, <span>but this is an only child.</span></span>
  </div>
</main>
```

#### CSS

```css
main :only-child {
  color: red;
}
```

#### 结果

{{EmbedLiveSample('基础示例','100%',180)}}

### 一个列表示例

#### HTML

```html
<ol>
  <li>First
    <ul>
      <li>This list has just one element.</li>
    </ul>
  </li>
  <li>Second
    <ul>
      <li>This list has three elements.</li>
      <li>This list has three elements.</li>
      <li>This list has three elements.</li>
    </ul>
  </li>
</ol>
```

#### CSS

```css
li li {
  list-style-type: disc;
}
li:only-child {
  color: red;
  list-style-type: square;
}
```

#### 结果

{{EmbedLiveSample('一个列表示例', '100%', 210)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref(":only-of-type")}}
- {{Cssxref(":first-child")}}
- {{Cssxref(":last-child")}}
- {{Cssxref(":nth-child")}}
