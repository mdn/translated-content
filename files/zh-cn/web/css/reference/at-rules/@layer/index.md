---
title: "@layer"
slug: Web/CSS/Reference/At-rules/@layer
---

[CSS](/zh-CN/docs/Web/CSS) [@规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules) 中的 `@layer` 声明了一个*层叠层*，可用于定义多层叠层中的各层优先级顺序。

{{InteractiveExample("CSS Demo: @layer", "tabbed-standard")}}

```css interactive-example
@layer module, state;

@layer state {
  .alert {
    background-color: brown;
  }
  p {
    border: medium solid limegreen;
  }
}

@layer module {
  .alert {
    border: medium solid violet;
    background-color: yellow;
    color: white;
  }
}
```

```html interactive-example
<p class="alert">小心僵尸</p>
```

## 语法

```css
/* 语句 @规则 */
@layer layer-name;
@layer layer-name, layer-name, layer-name;

/* 块级 @规则 */
@layer {rules}
@layer layer-name {rules}
```

其中：

- _layer-name_
  - : 是层叠层的名称。
- _rules_
  - : 是层叠层中的 CSS 规则集。

## 描述

同一层内的规则将级联在一起，这给予了开发者对层叠机制的更多控制。未在层中定义的样式总是覆盖在命名和匿名层中声明的样式。

下图展示了层优先级，其中层按 1、2、...、N 的顺序声明。

![层叠层优先级示意图](https://mdn.github.io/shared-assets/images/diagrams/css/at-rules/layer-cascade.svg)

如上图所示，**重要声明**，即带 `!important` 标志的声明，优先于**普通声明**，即无 `!important` 标志的常规声明。重要规则的优先顺序与正常规则相反。过渡具有最高的优先级。随后的优先级从高到低依次是重要{{glossary("用户代理")}}声明、重要用户声明和重要作者声明。用户可以通过浏览器偏好设置、操作系统偏好设置或浏览器扩展来指定样式。它们的重要声明优先于**作者**即**网页开发者**指定的重要声明。

在作者样式中，CSS 层内所有重要声明优先于层外重要声明，而 CSS 层内的普通声明优先级低于层外声明。 声明顺序很重要。第一个声明的层优先级最低，最后声明的层优先级最高。但当使用 [`!important`](/en-US/docs/Web/CSS/Reference/Values/important) 标志时，优先级会被反转。

`@layer` @规则可以通过三种方式其一来创建层叠层。

第一种方式是使用 `@layer` 块级 @规则以创建命名的层叠层，其中包含作用于该层内部的 CSS 规则，如下所示：

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

第二种方式是使用 `@layer` 块级 @规则以创建带单个命名或用逗号分隔的多个命名的层叠层，但不指定任何样式。例如，单一的命名层：

```css
@layer utilities;
```

多个命名层可以被同时定义。例如：

```css
@layer theme, layout, utilities;
```

这一做法很有用，因为层最初被指定的顺序决定了它是否有优先级。对于声明而言，如果同一声明在多个层叠层中被指定，最后一层中的将优先于其他层。因此，在上面的例子中，如果 `theme` 层和 `utilities` 层中存在冲突的规则，那么 `utilities` 层中的将优先被应用。

即使 `utilities` 层中规则的 _优先级低于_ `theme` 层中的，该规则仍会被应用。一旦层叠层顺序建立之后，优先级和出现顺序都会被忽略。这将使创建 CSS 选择器变得更加简单，因为你不需要确保每一个选择器都有足够高的优先级来覆盖其他冲突的规则，你只需要确保它们出现在一个顺序更靠后的层叠层中。

> [!NOTE]
> 在已经声明层叠层的名字后，它们的顺序随即被确立，你可以重复声明某层叠层的名字来向其添加 CSS 规则。这些样式将被附加到该层的末尾，且层叠层之间的顺序不会改变。

第三种方式是使用 `@layer` 块级 @规则创建一个层叠层而不指定名字，例如：

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

这创建了一个**匿名层叠层**。除创建后无法向其添加规则外，该层和其他命名层功能一致。匿名层的优先级顺序即层被声明的先后顺序，且层内样式的优先级低于层外声明的样式。

一个层叠层同样可以通过 {{cssxref("@import")}} 来创建，规则存在于被引入的样式表内。注意除 `@charset` 与 `@layer` 语句（不是 `@layer` 块）外， `@import` @规则必须处于其他各种规则之前。

```css
@import "theme.css" layer(utilities);
```

### 嵌套层

层叠层允许嵌套，例如：

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

## 形式语法

{{CSSSyntax}}

## 示例

### 基本示例

下方的例子创建了两条 CSS 规则。其中一条为 `type` 层内部的 {{htmlelement("p")}} 元素创建。另一条规则创建于层叠层外部，作用于 `.box p`。

没有层叠层时，选择器 `.box p` 将会有最高的优先级，因此文字 `Hello, world!` 将被显示为绿色。当`type`层应用在匿名层创建之前时，文本将会是紫色的。

并且还要注意顺序，即使我们先声明了无层的样式，它仍然会应用在有层的层级**之后**。

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

下方的例子创建了两个没有规则的层叠层，随后，CSS 规则被添加到这两层中。`base` 层定义了 `color`、`border`、`font-size` 和 `padding`。`special` 层定义了不同的 color 属性。因为 `special` 层在定义时排在最后，其中的 color 属性将被应用，文字的颜色将显示为`rebeccapurple`。`base` 层中的其他规则仍然有效。

#### HTML

```html
<div class="item">
  我以 <code>color: rebeccapurple</code> 的样式显示，因为
  <code>special</code> 层定义在 <code>base</code>
  层之后。我的绿色边框、font-size 和内边距来自于
  <code>base</code> 层。
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

- {{cssxref("@import")}}
- {{domxref("CSSLayerBlockRule")}}
- {{domxref("CSSLayerStatementRule")}}
- [`!important`](/en-US/docs/Web/CSS/Reference/Values/important)
- {{cssxref("revert-layer")}}
- [Introducing the CSS cascade](/en-US/docs/Web/CSS/Guides/Cascade/Introduction)
- [Learn: Handling conflicts](/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Learn: Cascade layers](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [The future of CSS: Cascade layers](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/) on bram.us (2021)
