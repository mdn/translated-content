---
title: attr
slug: Web/CSS/Reference/Values/attr
l10n:
  sourceCommit: 4cc24f96aebd031e636185532c6310601c3b5926
---

> [!NOTE]
> `attr()` 可以和任意 CSS 属性使用，但对于 {{CSSxRef("content")}} 之外的属性的支持都是实验性的。

`attr()` 用于检索所选元素的属性值并应用于 CSS 属性，类似 {{cssxref("var", "var()")}} 替换自定义属性值的方式。可以在[伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)上使用，采用伪元素的原始元素上的属性值。

`attr()` 表达式可以用于任何 CSS 属性。 {{ experimental_inline() }}

{{InteractiveExample("CSS attr() 演示")}}

```css interactive-example
blockquote {
  margin: 1em 0;
}

blockquote::after {
  display: block;
  content: " (source: " attr(cite) ") ";
  color: hotpink;
}
```

```html interactive-example
<blockquote cite="https://mozilla.org/en-US/about/">
  Mozilla is working to put control of the internet back in the hands of the
  people using it.
</blockquote>

<blockquote cite="https://web.dev/about/">
  Build beautiful, accessible, fast, and secure websites that work
  cross-browser.
</blockquote>
```

## 语法

```css
/* 基本用法 */
attr(data-count)
attr(href)

/* 使用类型 */
attr(data-width px)
attr(data-size rem)
attr(data-name raw-string)
attr(id type(<custom-ident>))
attr(data-count type(<number>))
attr(data-size type(<length> | <percentage>))

/* 使用回退值 */
attr(data-count type(<number>), 0)
attr(data-width px, inherit)
attr(data-something, "default")
```

### 参数

`attr()` 的语法表示如下：

```plain
attr(<attr-name> <attr-type>? , <fallback-value>?)
```

参数说明：

- `<attr-name>`
  - : 会从选择的 HTML 元素上选取使用的属性名称。
- `<attr-type>`
  - : 指定如何解析获取的 HTML 属性，可以是关键字 `raw-string`、 {{cssxref("type()")}} 或 CSS 属性单位。默认为 `raw-string`。
    - `raw-string`
      - : 是 `<attr-type>` 的默认值，会使属性字面量被视为 CSS 字符串，不进行 CSS 解析（如 CSS 转义、空白移除、注释等）。如果设为空值则无法触发回退行为。

        ```css
        attr(data-name raw-string, "stranger")
        ```

        > [!NOTE]
        > 这个关键字最初在 Chromium 浏览器中被命名为 `string` 得到支持，出于向后兼容考虑，两者都将被短暂支持。

    - {{cssxref("type()")}}
      - : 使用 `<syntax>` 作为参数来指定解析的类型。无法进行解析将触发回退。
        > [!NOTE]
        > 因[安全原因](#限制与安全性)，不允许将 {{CSSxRef("url_value", "&lt;url&gt;")}} 用于 `attr()`。

    - `<attr-unit>`
      - : 指定一个数值可能的单位，例如可以是 `%` 字符或 [CSS 单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#distance_units)，如 `px`, `rem`, `deg`, `s` 等。

        ```css
        attr(data-size rem)
        attr(data-width px, inherit)
        attr(data-rotation deg)
        ```

- `<fallback-value>`
  - : 指定在属性值解析失败或无法解析为指定类型时的回退值。

### 返回值

`attr()` 返回的是选取 HTML 属性值，选取目标是 `<attr-name>` 指定的属性名称、解析为 `<attr-type` 指定的类型或 CSS 字符串。

如果设置 `<attr-type>`，`attr()` 会尝试解析为指定类型，若无法解析为给定的 `<attr-type>`，则返回 `<fallback-value>`。若没有设置，则会解析为 CSS 字符串。

如果没有设置 `<fallback-value>`，且没有设置 `<attr-type>`，默认返回空字符串，若设置 `<attr-type>` 将默认返回一个[保证无效值](/zh-CN/docs/Glossary/guaranteed_invalid_value)。

## 解释

### 限制与安全性

因为 `attr()` 可以引用未应用于样式，可能包含敏感信息的属性（例如页面中引用的脚本 Token 等），一般而言，这并没有什么问题。

但如果用于 `url()` 则可能造成安全风险，因此不能用于 `attr()` 进行动态构造 URL。

```html
<!-- 这将不会生效 -->
<span data-icon="https://example.org/icons/question-mark.svg">help</span>
```

```css
span[data-icon] {
  background-image: url(attr(data-icon));
}
```

使用 `attr()` 时，值会被标记为 _`attr()`-tainted_，如果在 `<url>` 中使用 _`attr()`-tainted_ 会导致声明在[计算值时无效（IACVT，Invalid At Computed Value Time）](https://www.bram.us/2024/02/26/css-what-is-iacvt/)。

### 向后兼容性

`attr()` 语法是向后兼容的。因为旧的用法——不指定 `<attr-type>` 的使用方法——依然按照先前的工作方式进行。

编写 `attr(data-attr)` 是等效于 `attr(data-attr type(<string>))` 和 `attr(data-attr string)` 的。

但是有两个边界情况会使得现代语法与旧语法表现不同。

在以下示例中，不支持现代 `attr()` 语法的浏览器无法解析第二条声明，会将其丢弃。因此最终输出是 `"Hello World"`。

```html
<div text="Hello"></div>
```

```css
div::before {
  content: attr(text) " World";
}
div::before {
  content: attr(text) 1px;
}
```

而在支持现代语法的浏览器中，输出将是空的。因为浏览器可以解析第二条声明，但值对于 `content` 是无效的，因此会导致声明在[计算值时无效（IACVT，Invalid At Computed Value Time）](https://www.bram.us/2024/02/26/css-what-is-iacvt/)。

为避免此问题，可使用[特性检测](#特性检测)。

第二个边界情况如下：

```html
<div id="parent"><div id="child" data-attr="foo"></div></div>
```

```css
#parent {
  --x: attr(data-attr);
}
#child::before {
  content: var(--x);
}
```

若浏览器不支持 `attr()` 现代用法，则输出为 `"foo"`。否则将没有输出。

这是因为 `attr()`（类似于使用 `var()` 的自定义属性）是在[计算值时（Computed value time）](https://www.bram.us/2024/02/26/css-what-is-iacvt/#custom-properties)进行替换的。

而在支持现代行为的浏览器中，`--x` 会首先尝试从 `#parent` 中读取 `data-attr` 属性，但元素并没有此属性，因此得到空字符串，随后被继承到 `#child` 元素，因此最终得到没有任何输出的 `content: ;`。

为避免此问题，不要将基于 `attr()` 的继承值传递给子元素，除非明确希望如此。

### 特性检测

可使用 {{CSSxRef("@supports")}} at-rule 来检测对于现代语法的支持。

```css
@supports (x: attr(x type(*))) {
  /* 浏览器支持现代 attr()  */
}

@supports not (x: attr(x type(*))) {
  /* 浏览器不支持现代 attr()  */
}
```

也可以在 JavaScript 中使用 [`CSS.supports()`](/zh-CN/docs/Web/API/CSS/supports_static) 进行相同检查：

```js
if (CSS.supports("x: attr(x type(*))")) {
  /* 浏览器支持现代 attr()  */
}

if (!CSS.supports("x: attr(x type(*))")) {
  /* 浏览器不支持现代 attr()  */
}
```

## 语法格式

{{CSSSyntax}}

## 示例

### content 属性

在此示例中，我们将 `data-foo` —— [`data-*`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*) [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes) ——的值添加到 {{HTMLElement("p")}} 元素的内容前。

#### HTML

```html
<p data-foo="hello">world</p>
```

#### CSS

```css
[data-foo]::before {
  content: attr(data-foo) " ";
}
```

#### Result

{{EmbedLiveSample("content_属性", "100%", 50)}}

### 使用回退值

{{SeeCompatTable}}

在此示例中，我们将 `data-browser` —— [`data-*`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*) [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes) ——的值添加到 {{HTMLElement("p")}} 元素的内容后。如果该属性缺失，则附加 "**Unknown**" 的回退值。

#### HTML

```html
<p data-browser="Firefox">我喜欢的浏览器是：</p>
<p>你喜欢的浏览器是：</p>
```

#### CSS

```css
p::after {
  content: " " attr(data-browser, "Unknown");
  color: tomato;
}
```

#### Result

{{EmbedLiveSample("使用回退值", "100%", 90)}}

### 使用颜色值

{{SeeCompatTable}}

在此示例中，我们将 {{CSSXRef("background-color")}}的值分配给 {{HTMLElement("div")}} 的 `data-background` ——[`data-*`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*) [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes) ——上。

#### HTML

```html
<div class="background" data-background="lime">
  如果浏览器并不支持 attr() 的高级用法，那么颜色将是红色
</div>
```

#### CSS

```css hidden
.background {
  height: 100vh;
}
```

```css
.background {
  background-color: red;
}

.background[data-background] {
  background-color: attr(data-background type(<color>), red);
}
```

{{EmbedLiveSample("使用颜色值", "100%", 50)}}

### 使用尺寸单位

{{SeeCompatTable}}

在此示例中，`data-rotation` 会被解析为 CSS `deg` 单位来指定元素的旋转。

#### HTML

```html
<div data-rotation="-3">我旋转 -3 度</div>
<div data-rotation="2">我旋转 2 度</div>
<div>我使用回退值旋转 1.5 度</div>
```

#### CSS

```css hidden
body {
  min-height: 100svh;
  display: grid;
  place-content: center;
  gap: 1em;
}
div {
  margin: 0 auto;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.5em;
}
```

```css
div {
  width: fit-content;
  transform-origin: 50% 50%;
  rotate: attr(data-rotation deg, 1.5deg);
}
```

#### Result

{{EmbedLiveSample("使用尺寸单位", "100%", 300)}}

### 解析 `attr()` 为 `<custom-ident>`

{{SeeCompatTable}}

在此示例中，{{cssxref("view-transition-name")}} 属性的值会取自 `id` 属性。该属性会被解析为会被其接受的 {{CSSxRef("&lt;custom-ident&gt;")}} 值。

{{cssxref("view-transition-name")}} 的结果值分别是 `card-1`、`card-2`、`card-3`、`card-4` 等。

#### HTML

```html
<div class="cards">
  <div class="card" id="card-1">1</div>
  <div class="card" id="card-2">2</div>
  <div class="card" id="card-3">3</div>
  <div class="card" id="card-4">4</div>
</div>
<button>Shuffle cards</button>
```

```html hidden
<div class="warning">
  <p>
    Your browser does not support advanced <code>attr()</code>. As a result,
    this demo won’t do anything.
  </p>
</div>
```

#### CSS

```css
.cards {
  display: flex;
  flex-direction: row;
  gap: 1em;
  padding: 1em;
}
```

```css hidden
:root {
  view-transition-name: none;
}
::view-transition {
  pointer-events: none;
}

@supports (x: attr(x type(*))) {
  .warning {
    display: none;
  }
}

@layer layout {
  .card {
    border-radius: 0.25em;
    width: 20vw;
    max-width: 5em;
    aspect-ratio: 1 / 1.6;
    background: lightgrey;

    display: grid;
    place-content: center;
    font-size: 2em;
  }

  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100svh;
    display: grid;
    place-content: center;
  }

  button {
    justify-self: center;
  }
}

@layer warning {
  .warning {
    padding: 1em;
    border: 1px solid #cccccc;
    background: rgb(255 255 205 / 0.8);
    text-align: center;
    order: -1;
    margin: 1em;
  }

  .warning > :first-child {
    margin-top: 0;
  }
  .warning > :last-child {
    margin-bottom: 0;
  }
}
```

在每张卡片上、`attr()` 会获取 `id` 属性并解析为 {{CSSxRef("&lt;custom-ident&gt;")}} 作为 {{cssxref("view-transition-name")}} 的值。当未设置 `id` 时，使用回退值 `none`。

```css
.card {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

#### JavaScript

当按下按钮时，会进行洗牌。这是通过随机化对存放所有卡片引用的数组顺序，然后更新每张卡片的 {{CSSxRef("order")}} 更新为新的索引进行的。

通过[视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API/Using)可以让卡片移动到新位置时产生动画效果。

具体做法为将更新 `order` 的操作包裹在 [`document.startViewTransition`](/zh-CN/docs/Web/API/Document/startViewTransition) 调用中。

```js
const shuffle = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

document.querySelector("button").addEventListener("click", (e) => {
  const $cards = Array.from(document.querySelectorAll(".card"));
  shuffle($cards);
  document.startViewTransition(() => {
    $cards.forEach(($card, i) => {
      $card.style.setProperty("order", i);
    });
  });
});
```

#### Result

{{EmbedLiveSample("解析_attr_为_custom-ident_", "100%", 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Attribute selectors](/zh-CN/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [HTML `data-*` attributes](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*)
- [SVG `data-*` attributes](/zh-CN/docs/Web/SVG/Reference/Attribute/data-*)
