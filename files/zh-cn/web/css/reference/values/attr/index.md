---
title: attr()
slug: Web/CSS/Reference/Values/attr
l10n:
  sourceCommit: 4cc24f96aebd031e636185532c6310601c3b5926
---

> [!NOTE]
> `attr()` 函数可以和任意 CSS 属性使用，但对于 {{CSSxRef("content")}} 之外的属性的支持都是实验性的。

`attr()` [CSS](/zh-CN/docs/Web/CSS) [函数](/zh-CN/docs/Web/CSS/Reference/Values/Functions)用于检索所选元素的属性值并应用于属性值，类似 {{cssxref("var", "var()")}} 替换自定义属性值的方式。可以在[伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)上使用，在这种情况下，将返回伪元素的源元素上的属性值。

{{InteractiveExample("CSS attr() 演示", "tabbed-shorter")}}

```css interactive-example
blockquote {
  margin: 1em 0;
}

blockquote::after {
  display: block;
  content: "（来源：" attr(cite) "）";
  color: hotpink;
}
```

```html interactive-example
<blockquote cite="https://mozilla.org/zh-CN/about/">
  Mozilla 正致力于让网民重掌互联网。
</blockquote>

<blockquote cite="https://web.dev/about/">
  构建美观、无障碍、快速、安全且跨浏览器运行的网站。
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

`attr()` 函数的语法表示如下：

```plain
attr(<attr-name> <attr-type>? , <fallback-value>?)
```

参数：

- `<attr-name>`
  - : 要从选定的 HTML 元素中检索其值的属性名称。
- `<attr-type>`
  - : 指定如何将属性值解析为 CSS 值。可以是 `raw-string` 关键字、{{cssxref("type()")}} 函数或 CSS 尺寸单位（使用 `<attr-unit>` 标识符指定）。如果省略，默认使用 `raw-string`。
    - `raw-string`
      - : `raw-string` 关键字会将属性字面值直接作为 CSS 字符串，不进行任何 CSS 解析（包括 CSS 转义、空白移除、注释等）。使用时，`<fallback-value>` 仅在属性不存在时生效，即使属性值为空，也不会触发回退。

        ```css
        attr(data-name raw-string, "stranger")
        ```

        > [!NOTE]
        > 这个关键字最初在 Chromium 浏览器中被命名为 `string` 得到支持，出于向后兼容考虑，两者都将被短暂支持。

    - {{cssxref("type()")}}
      - : `type()` 函数使用 `<syntax>` 作为参数，指定属性值会被解析为哪种数据类型。
        > [!NOTE]
        > 出于[安全原因](#限制与安全性)，不允许使用 {{CSSxRef("url_value", "&lt;url&gt;")}} 作为 `attr()` 的数据类型。

    - `<attr-unit>`
      - : `<attr-unit>` 标识符被用于指定有数值时，数值的单位。例如可以是 `%` 字符（百分比）或 [CSS 尺寸单位](/zh-CN/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#尺寸单位)，如 `px`、`rem`、`deg`、`s` 等。

        ```css
        attr(data-size rem)
        attr(data-width px, inherit)
        attr(data-rotation deg)
        ```

- `<fallback-value>`
  - : 当指定的属性不存在或值无效时使用的回退值。

### 返回值

`attr()` 的返回值是 HTML 属性 `<attr-name>` 的值，按照指定的 `<attr-type>` 进行解析，或解析为 CSS 字符串。

当设置了 `<attr-type>` 时，`attr()` 会尝试将属性值解析为指定 `<attr-type>` 并返回。如果属性无法解析为指定的数据类型，将返回 `<fallback-value>`。如果没有设置 `<attr-type>`，那么属性值将会被解析为 CSS 字符串。

如果没有设置 `<fallback-value>`，且没有设置 `<attr-type>`，默认返回空字符串；或者如果设置了 `<attr-type>` 但未设置 `<fallback-value>` 将默认返回一个[保证无效值](/zh-CN/docs/Glossary/guaranteed_invalid_value)。

## 解释

### 限制与安全性

`attr()` 函数可以引用那些原本并非用于样式的属性，这些属性可能包含敏感信息（如页面脚本使用的安全令牌）。通常情况下这是没问题的，但如果被用于 URL，就可能造成安全风险，因此不能使用 `attr()` 来进行动态构造 URL。

```html
<!-- 这将不会生效 -->
<span data-icon="https://example.org/icons/question-mark.svg">帮助</span>
```

```css
span[data-icon] {
  background-image: url(attr(data-icon));
}
```

使用 `attr()` 的值会被标记为*被污染的 `attr()`*。如果在 `<url>` 中使用*被污染的 `attr()`* 值会导致该声明会在[计算值时无效（IACVT，Invalid At Computed Value Time）](https://www.bram.us/2024/02/26/css-what-is-iacvt/)。

### 向后兼容性

一般而言，现代 `attr()` 语法是向后兼容的，因为旧的用法——不指定 `<attr-type>`——的行为和以前一样。在代码中编写 `attr(data-attr)` 与 `attr(data-attr type(<string>))` 和更简洁的 `attr(data-attr string)` 是等价的。

然而，有两个边界情况，现代的 `attr()` 语法的行为会与旧的语法行为不同。

在以下代码片段中，不支持现代 `attr()` 语法的浏览器会丢弃第二条声明，因为浏览器无法解析它。因此在这些浏览器中的结果是 `"你好世界"`。

```html
<div text="你好"></div>
```

```css
div::before {
  content: attr(text) "世界";
}
div::before {
  content: attr(text) 1px;
}
```

在支持现代语法的浏览器中，输出将是空的。浏览器会成功解析第二条声明，但由于解析结果对于 `content` 属性来说是无效内容，该声明会变为[计算值时无效（IACVT，Invalid At Computed Value Time）](https://www.bram.us/2024/02/26/css-what-is-iacvt/)。

为防止这种情况，建议使用[特性检测](#特性检测)。

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

不支持现代 `attr()` 语法的浏览器会显示为 `"foo"`，支持现代 `attr()` 语法的则没有输出。

这是因为 `attr()`（类似于使用 `var()` 的自定义属性）是在[计算值时](https://www.bram.us/2024/02/26/css-what-is-iacvt/#custom-properties)进行替换的。根据现代行为，`--x` 会首先尝试从 `#parent` 中读取 `data-attr` 属性，但 `#parent` 并没有此属性，所以得到空字符串。这个空字符串随后被 `#child` 元素继承，最终设置了 `content: ;` 声明。

为防止这种情况，除非明确希望如此，否则不要将继承的 `attr()` 值传递给子元素。

### 特性检测

可以使用 {{CSSxRef("@supports")}} at 规则来检测浏览器是否支持现代的 `attr()` 语法。在下方测试中，尝试将一个高级的 `attr()` 赋值给一个（非自定义的）CSS 属性。

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

在此示例中，我们将 `data-foo` 这个 [`data-*`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*) [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)的值添加到 {{HTMLElement("p")}} 元素的内容前。

#### HTML

```html
<p data-foo="你好">世界</p>
```

#### CSS

```css
[data-foo]::before {
  content: attr(data-foo);
}
```

#### 结果

{{EmbedLiveSample("content 属性", "100%", 50)}}

### 使用回退值

{{SeeCompatTable}}

在此示例中，我们将 `data-browser` 这个 [`data-*`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*) [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)的值添加到 {{HTMLElement("p")}} 元素的内容后。如果 {{HTMLElement("p")}} 缺失 `data-browser` 属性，则使用回退值“**未知**”。

#### HTML

```html
<p data-browser="Firefox">我喜欢的浏览器是：</p>
<p>你喜欢的浏览器是：</p>
```

#### CSS

```css
p::after {
  content: attr(data-browser, "未知");
  color: tomato;
}
```

#### 结果

{{EmbedLiveSample("使用回退值", "100%", 90)}}

### 使用颜色值

{{SeeCompatTable}}

在此示例中，我们将 {{CSSXRef("background-color")}} 的 CSS 值设置为 {{HTMLElement("div")}} 的 `data-background` 这个 [`data-*`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*) [全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)的属性值。

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

在此示例中，`data-rotation` 会被解析为 `deg` 单位来指定元素的旋转。

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

#### 结果

{{EmbedLiveSample("使用尺寸单位", "100%", 300)}}

### 将 `attr()` 值解析为 `<custom-ident>`

{{SeeCompatTable}}

在此示例中，{{cssxref("view-transition-name")}} 属性的值来自元素的 `id` 属性。该属性会被解析为一个 {{CSSxRef("&lt;custom-ident&gt;")}} 值，这是 {{cssxref("view-transition-name")}} 属性接受的值。

最终获得的 {{cssxref("view-transition-name")}} 的值分别是 `card-1`、`card-2`、`card-3` 等。

#### HTML

```html
<div class="cards">
  <div class="card" id="card-1">1</div>
  <div class="card" id="card-2">2</div>
  <div class="card" id="card-3">3</div>
  <div class="card" id="card-4">4</div>
</div>
<button>打乱卡片</button>
```

```html hidden
<div class="warning">
  <p>你的浏览器并不支持高级 <code>attr()</code>，因此这个演示什么也做不了。</p>
</div>
```

#### CSS

这些卡片被放置在一个弹性容器中。

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

对每张卡片，`attr()` 函数会获取 `id` 属性并解析为 {{CSSxRef("&lt;custom-ident&gt;")}} 来作为 {{cssxref("view-transition-name")}} 的值。如果卡片没有设置 `id` 属性，使用回退值 `none`。

```css
.card {
  view-transition-name: attr(id type(<custom-ident>), none);
  view-transition-class: card;
}
```

#### JavaScript

当按下按钮（`<button>`）时，卡片会被重新打乱。这是通过将卡片引用组成的数组随机排序，然后将每张卡片的 {{CSSxRef("order")}} 属性更新为它在数组中的新索引位置来实现的。

为了让卡片能够以动画的方式移动到新位置，示例中使用了[视图过渡](/zh-CN/docs/Web/API/View_Transition_API/Using)。实现方式是将对 `order` 的更新包裹在 [`document.startViewTransition`](/zh-CN/docs/Web/API/Document/startViewTransition) 调用中。

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

#### 结果

{{EmbedLiveSample("将 attr() 值解析为 custom-ident", "100%", 400)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [属性选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [HTML `data-*` 属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*)
- [SVG `data-*` 属性](/zh-CN/docs/Web/SVG/Reference/Attribute/data-*)
