---
title: counter-increment
slug: Web/CSS/Reference/Properties/counter-increment
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`counter-increment`** [CSS](/zh-CN/docs/Web/CSS) 属性可用于按指定值增加或减少命名的 [CSS 计数器](/zh-CN/docs/Web/CSS/Guides/Counter_styles/Using_counters)的数值，或用于阻止所有计数器或某个特定计数器的值发生变化。

如果在由空格分隔的计数器和值列表中某个命名计数器不存在，则会创建该计数器。如果列表中的某个计数器未提供数值，则其值会增加 `1`。

计数器的值可以通过 {{cssxref("counter-reset")}} CSS 属性重置为任意整数。

{{InteractiveExample("CSS 演示：counter-increment")}}

```css interactive-example-choice
counter-increment: example-counter;
```

```css interactive-example-choice
counter-increment: example-counter 0;
```

```css interactive-example-choice
counter-increment: example-counter 5;
```

```css interactive-example-choice
counter-increment: example-counter -5;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">计数值：</div>
</section>
```

```css interactive-example
#default-example {
  text-align: left;
  counter-reset: example-counter;
}

#example-element::after {
  content: counter(example-counter);
}
```

## 语法

```css
/* 将 "my-counter" 增加 1 */
counter-increment: my-counter;

/* 将 "my-counter" 减少 1 */
counter-increment: my-counter -1;

/* 将 "counter1" 增加 1，将 "counter2" 减少 4 */
counter-increment: counter1 counter2 -4;

/* 将 "page" 增加 1，将 "section" 增加 2，而 "chapter" 不变 */
counter-increment: chapter 0 section 2 page;

/* 不进行任何增减：用于覆盖优先级较低的规则 */
counter-increment: none;

/* 全局值 */
counter-increment: inherit;
counter-increment: initial;
counter-increment: revert;
counter-increment: revert-layer;
counter-increment: unset;
```

### 值

`counter-increment` 属性的取值可以是由空格分隔的计数器名称列表（使用 `<custom-ident>` 指定），每个名称后可以跟一个可选的 `<integer>` 值；也可以使用关键字 `none`。你可以按需指定任意数量的计数器，每个名称或名称与数字的组合之间以空格分隔。

- {{cssxref("&lt;custom-ident&gt;")}}
  - : 指定要增加或减少的计数器名称。
- {{cssxref("&lt;integer&gt;")}}
  - : 指定要添加到计数器的数值。如果该整数前带有 `-` 符号，则会从计数器中减去该值。如果未指定，默认值为 `1`。
- `none`
  - : 表示不应增加或减少任何计数器。该值也可用于在更具体的规则中取消所有计数器的增加或减少。这是该属性的默认值。

> [!NOTE]
> 使用 `none` 值会阻止在此规则适用的选定元素上对所有计数器进行增加或减少。若只想阻止特定计数器的增减，请将相关计数器的 `integer` 值设为 `0`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 减少计数器的值

在这个示例中，我们展示一个倒序的数字序列。为此，我们使用计数器从 100 开始显示数字，并每次递减 7。

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

我们通过 {{cssxref("counter-reset")}} 将名为 `sevens` 的计数器初始值设置为 `100`。然后，对每个 {{HTMLElement("i")}} 元素，将计数器减少 `7`。

为了让第一次计数显示为 `100`，我们使用 {{cssxref(":first-of-type")}} 伪类选中第一个 `<i>` 元素，并设置 `counter-increment: none;`。此外，在 {{cssxref("::before")}} 伪元素中使用 {{cssxref("content")}} 属性，通过 [`counter()`](/zh-CN/docs/Web/CSS/Reference/Values/counter) 函数来展示计数器的值。

```css
div {
  counter-reset: sevens 100;
}
i {
  counter-increment: sevens -7;
}
i:first-of-type {
  counter-increment: none;
}
i::before {
  content: counter(sevens);
}
```

```css hidden
div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  width: 200px;
}
i {
  flex: 0 0 2em;
}
```

#### 结果

{{EmbedLiveSample("减少计数器的值", 140, 300)}}

如果我们没有使用 `counter-reset`（或 {{cssxref("counter-set")}}）来创建计数器并将其值设置为 `100`，`sevens` 计数器仍然会被创建，但其初始值将为 `0`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 计数器属性：{{cssxref("counter-set")}}、{{cssxref("counter-reset")}}
- 计数器 at-规则：{{cssxref("@counter-style")}}
- 计数器函数：{{cssxref("counter", "counter()")}}、{{cssxref("counters", "counters()")}}
- [使用 CSS 计数器](/zh-CN/docs/Web/CSS/Guides/Counter_styles/Using_counters)指南
- [CSS 列表与计数器](/zh-CN/docs/Web/CSS/Guides/Lists)模块
- [CSS 计数器样式](/zh-CN/docs/Web/CSS/Guides/Counter_styles)模块
