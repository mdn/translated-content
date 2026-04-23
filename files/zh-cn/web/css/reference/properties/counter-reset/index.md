---
title: counter-reset
slug: Web/CSS/Reference/Properties/counter-reset
---

**`counter-reset`** [CSS](/zh-CN/docs/Web/CSS) 属性用于创建具名 [CSS 计数器](/zh-CN/docs/Web/CSS/Guides/Counter_styles/Using_counters)，并将其初始化为指定值。它支持创建从 1 向上计数到元素数量的计数器，以及从元素数量向下计数到 1 的计数器。

{{InteractiveExample("CSS Demo: counter-reset")}}

```css interactive-example-choice
counter-reset: none;
```

```css interactive-example-choice
counter-reset: chapter-count 0;
```

```css interactive-example-choice
counter-reset: chapter-count;
```

```css interactive-example-choice
counter-reset: chapter-count 5;
```

```css interactive-example-choice
counter-reset: chapter-count -5;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="chapters">
    <h1>Alice's Adventures in Wonderland</h1>
    <h2>Down the Rabbit-Hole</h2>
    <h2 id="example-element">The Pool of Tears</h2>
    <h2>A Caucus-Race and a Long Tale</h2>
    <h2>The Rabbit Sends in a Little Bill</h2>
  </div>
</section>
```

```css interactive-example
#default-example {
  text-align: left;
  counter-reset: chapter-count;
}

#example-element {
  background-color: lightblue;
  color: black;
}

h2 {
  counter-increment: chapter-count;
  font-size: 1em;
}

h2::before {
  content: "Chapter " counters(chapter-count, ".") ": ";
}
```

> [!NOTE]
> 计数器的值能够通过 CSS 属性 {{cssxref("counter-increment")}} 控制递增或递减。

## 语法

```css
/* Set counter-name to 0 */
counter-reset: counter-name;

/* Set counter-name to -1 */
counter-reset: counter-name -1;

/* Set counter1 to 1, and counter2 to 4 */
counter-reset: counter1 1 counter2 4;

/* Cancel any reset that could have been set in less specific rules */
counter-reset: none;

/* Global values */
counter-reset: inherit;
counter-reset: initial;
counter-reset: unset;
```

`counter-reset` 属性可以指定为以下之一：

- `<自定义 ID> [<数值>]`。你可以指定任意数量的计数器进行重置，每个名称或“名称 - 数字”对之间用空格分隔。
- 特殊值 `none`。

### 可选值

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : 要递增的计数器的名称。

> [!NOTE]
> 该名称由不区分大小写的字母 a 到 z，数字 0 到 9，下划线（\_）和 / 或短划线（ - ）的组合组成，并且第一个非破折号字符必须是一个字母（即，在它的开头没有数字，即使前面有破折号）。此外，在标识符的开头禁止使用两个破折号。在任何案例组合中都不能是 none，unset，initial 或 inherit。

- {{cssxref("&lt;integer&gt;")}}
  - : 每次出现元素时将计数器重置为的值。如果不指定，则默认为 `0`。
- `none`
  - : 该关键字表示不执行计数器重置。它可用于重置隐藏在不太具体的规则中定义的计数器。你可以指定要根据需要重置的计数器，每个计数器用空格分隔。

### 语法形式

{{csssyntax}}

## 示例

```css
h1 {
  counter-reset: chapter section 1 page;
  /* Sets the chapter and page counters to 0
     and the section counter to 1. */
}
```

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参考

- [CSS Counters](/zh-CN/docs/Web/CSS/Guides/Counter_styles/Using_counters), {{Cssxref("counter-increment")}}
- {{cssxref("counter-increment")}}
- {{cssxref("counter-set")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter")}} and {{cssxref("counters")}} functions
- {{cssxref("content")}} property
