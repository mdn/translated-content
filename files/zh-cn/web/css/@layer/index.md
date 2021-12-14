---
title: '@layer'
slug: Web/CSS/@layer
tags:
  - At-rule
  - CSS
  - Reference
  - Web
  - layer
  - cascade
browser-compat: css.at-rules.layer
---
{{CSSRef}}{{SeeCompatTable}}

[CSS](/en-US/docs/Web/CSS) [@规则](/en-US/docs/Web/CSS/At-rule) 中的`@layer`声明了一个 _堆叠层_， 同一层内的规则将级联在一起， 这给予了开发者对层叠机制的更多控制。

```css
@layer utilities {
  /* 创建一个名为 utilities 的堆叠层 */
}
```

## 语法

`@layer` @规则可以通过三种方式其一来创建堆叠层。第一种方法如上方代码所示，它创建了一个块级的@规则，其中包含作用于该层内部的CSS规则。

```css
@layer utilities {
  .padding-sm {
    padding: .5rem;
  }

  .padding-lg {
    padding: .8rem;
  }
}
```
一个堆叠层同样可以通过 {{cssxref("@import")}} 来创建，规则存在于被引入的样式表内：


```css
@import(utilities.css) layer(utilities);
```

你也可以创建带命名的堆叠层，但不指定任何样式。例如，单一的命名层：

```css
@layer utilities
```


或者，多个命名层也可以被同时定义。例如：

```css
@layer theme, layout, utilities
```

这一做法很有用，因为层最初被指定的顺序决定了它是否有父级层。对于声明而言，如果同一声明在多个堆叠层中被指定，最后一层中的将优先于其他层。因此，在上面的例子中，如果 `theme` 层和 `utilities` 层中存在冲突的规则，那么 `utilities` 层中的将优先被应用。

即使 `utilities` 层中规则的 _优先级低于_ `theme` 层中的，该规则仍会被应用。一旦堆叠层顺序建立之后，优先级和出现顺序都会被忽略。这将使创建CSS选择器变得更加简单，因为你不需要确保每一个选择器都有足够高的优先级来覆盖其他冲突的规则，你只需要确保它们出现在一个顺序更靠后的堆叠层中。

> **注**：在已经声明堆叠层的名字后，它们的顺序随即被确立，你可以重复声明某堆叠层的名字来向其添加CSS规则。这些样式将被附加到该层的末尾，且堆叠层之间的顺序不会改变。

其他不属于任何一堆叠层的样式将被集中到同一匿名层，并置于所有层的前部，这意味着任何堆叠层内定义的规则都将覆盖外部声明的规则。

### 嵌套层

堆叠层允许嵌套，例如：

```css
@layer framework {
  @layer layout {

  }
}
```

向 `layout` 层内部的 `framework` 层附加规则，只需用 `.` 连接这两层。

```css
@layer framework.layout {
  p {
    margin-block: 1rem;
  }
}
```

### 匿名层

如果创建了一个堆叠层但并未指定名字，例如：

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

那么则称为创建了一个匿名层。除创建后无法向其添加规则外，该层和其他命名层功能一致。

## 标准语法

{{CSSSyntax}}

## 例子

### 基本例子

下方的例子创建了两条CSS规则。其中一条为 `type` 层内部的 {{htmlelement("p")}} 元素创建。另一条规则创建于堆叠层外部，作用于 `.box p`。

没有堆叠层时，选择器 `.box p` 将会有最高的优先级，因此文字 `Hello, world!` 将被显示为绿色。有堆叠层时，其外部的顺序和优先级将被忽略。因为 `type` 层的次序排在存储非层级信息的匿名层之后，文字的颜色将显示为紫色。

#### HTML

```html
<div class="box">
  <p>Hello, world!</p>
</div>
```

#### CSS

```css
@layer type {
  p {
    color: rebeccapurple;
  }
}

.box p {
  font-weight: bold;
  color: green;
}
```

#### 结果

{{EmbedLiveSample("Simple_example")}}

### 向已存在的层中添加规则

下方的例子创建了两个没有规则的堆叠层，随后，CSS规则被添加到这两层中。`base` 层定义了color、border、font-size和padding。`special` 层定义了不同的color属性。因为 `special` 层在定义时排在最后，其中的color属性将被应用，文字的颜色将显示为`rebeccapurple`。`base` 层中的其他规则仍然有效。

#### HTML

```html
<div class="item">I am displayed in <code>color: rebeccapurple</code>
because the <code>type</code> layer comes after the <code>base</code> layer.
My green border, font-size, and padding come from the <code>base</code> layer.</div>
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
    padding: .5em;
  }
}
```

#### 结果

{{EmbedLiveSample("Assigning_rules_to_existing_layers")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The Future of CSS: Cascade Layers](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/)
