---
title: "@layer"
slug: Web/CSS/@layer
---

{{CSSRef}}{{SeeCompatTable}}

[CSS](/zh-CN/docs/Web/CSS) [@规则](/zh-CN/docs/Web/CSS/At-rule) 中的`@layer`声明了一个 _级联层_，同一层内的规则将级联在一起，这给予了开发者对层叠机制的更多控制。

```css
@layer utilities {
  /* 创建一个名为 utilities 的级联层 */
}
```

## 语法

`@layer` @规则可以通过三种方式其一来创建级联层。第一种方法如上方代码所示，它创建了一个块级的 @规则，其中包含作用于该层内部的 CSS 规则。

```css
@layer utilities {
  .padding-sm {
    padding: 0.5rem;
  }

  .padding-lg {
    padding: 0.8rem;
  }
}
```

一个级联层同样可以通过 {{cssxref("@import")}} 来创建，规则存在于被引入的样式表内：

```css
@import (utilities.css) layer(utilities);
```

你也可以创建带命名的级联层，但不指定任何样式。例如，单一的命名层：

```css
@layer utilities;
```

或者，多个命名层也可以被同时定义。例如：

```css
@layer theme, layout, utilities;
```

这一做法很有用，因为层最初被指定的顺序决定了它是否有优先级。对于声明而言，如果同一声明在多个级联层中被指定，最后一层中的将优先于其他层。因此，在上面的例子中，如果 `theme` 层和 `utilities` 层中存在冲突的规则，那么 `utilities` 层中的将优先被应用。

即使 `utilities` 层中规则的 _优先级低于_ `theme` 层中的，该规则仍会被应用。一旦级联层顺序建立之后，优先级和出现顺序都会被忽略。这将使创建 CSS 选择器变得更加简单，因为你不需要确保每一个选择器都有足够高的优先级来覆盖其他冲突的规则，你只需要确保它们出现在一个顺序更靠后的级联层中。

> **备注：** 在已经声明级联层的名字后，它们的顺序随即被确立，你可以重复声明某级联层的名字来向其添加 CSS 规则。这些样式将被附加到该层的末尾，且级联层之间的顺序不会改变。

其他不属于任何一级联层的样式将被集中到同一匿名层，并置于所有层的后部，这意味着任何在层外声明的样式都会覆盖在层内声明的样式。

### 嵌套层

级联层允许嵌套，例如：

```css
@layer framework {
  @layer layout {
  }
}
```

向 `framework` 层内部的 `layout` 层附加规则，只需用 `.` 连接这两层。

```css
@layer framework.layout {
  p {
    margin-block: 1rem;
  }
}
```

### 匿名层

如果创建了一个级联层但并未指定名字，例如：

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

那么则称为创建了一个匿名层。除创建后无法向其添加规则外，该层和其他命名层功能一致。

## 形式语法

{{CSSSyntax}}

## 示例

### 基本示例

下方的例子创建了两条 CSS 规则。其中一条为 `type` 层内部的 {{htmlelement("p")}} 元素创建。另一条规则创建于级联层外部，作用于 `.box p`。

没有级联层时，选择器 `.box p` 将会有最高的优先级，因此文字 `Hello, world!` 将被显示为绿色。当`type`层应用在匿名层创建之前时，文本将会是紫色的。

并且还要注意顺序，即使我们先声明了`non-layered style`，它仍然会应用在`layer`层级之后。

#### HTML

```html
<div class="box">
  <p>Hello, world!</p>
</div>
```

#### CSS

```css
p {
  color: rebeccapurple;
}

@layer type {
  .box p {
    font-weight: bold;
    font-size: 1.3em;
    color: green;
  }
}
```

#### 结果

{{EmbedLiveSample("基本示例")}}

### 向已存在的层中添加规则

下方的例子创建了两个没有规则的级联层，随后，CSS 规则被添加到这两层中。`base` 层定义了 color、border、font-size 和 padding。`special` 层定义了不同的 color 属性。因为 `special` 层在定义时排在最后，其中的 color 属性将被应用，文字的颜色将显示为`rebeccapurple`。`base` 层中的其他规则仍然有效。

#### HTML

```html
<div class="item">
  I am displayed in <code>color: rebeccapurple</code> because the
  <code>type</code> layer comes after the <code>base</code> layer. My green
  border, font-size, and padding come from the <code>base</code> layer.
</div>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: rebeccapurple;
  }
}

@layer base {
  .item {
    color: green;
    border: 5px solid green;
    font-size: 1.5em;
    padding: 0.5em;
  }
}
```

#### 结果

{{EmbedLiveSample("向已存在的层中添加规则")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The Future of CSS: Cascade Layers](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/)
