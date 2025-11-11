---
title: 使用数据属性
slug: Web/HTML/How_to/Use_data_attributes
l10n:
  sourceCommit: 73021b277185437b5d8194dc5c12f4fa2d9b0ea9
---

HTML 在设计时考虑到了数据的可扩展性，这些数据应与特定元素相关联，但无需具有任何定义的含义。[`data-*` 属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes/data-*)允许我们在标准、语义化的 HTML 元素中存储额外的信息，而不需要使用类似于非标准属性或者 DOM 额外属性之类的技巧。

## HTML 语法

语法非常简单。所有在元素上以 `data-` 开头的属性均为数据属性。比如说你有一篇文章，而你又想要存储一些不需要显示在浏览器上的额外信息。请使用 `data` 属性：

```html
<main>
  <article
    id="electric-cars"
    data-columns="3"
    data-index-number="12314"
    data-parent="cars">
    <!-- 有关电车的内容 -->
  </article>

  <article
    id="solar-cars"
    data-columns="3"
    data-index-number="12315"
    data-parent="cars">
    <!-- 有关太阳能车的内容 -->
  </article>

  <article
    id="flying-cars"
    data-columns="4"
    data-index-number="12316"
    data-parent="cars">
    <!-- 有关飞行车的内容 -->
  </article>
</main>
```

## JavaScript 访问

在外部使用 [JavaScript](/zh-CN/docs/Web/JavaScript) 去访问这些属性的值同样非常简单。你可以使用 {{domxref("Element.getAttribute", "getAttribute()")}} 配合它们完整的 HTML 名称去读取它们，但标准定义了一个更简单的方法：你可以通过 {{domxref("HTMLElement/dataset", "dataset")}} 属性读取到一个 {{domxref("DOMStringMap")}}。

为了使用 `dataset` 对象去获取到数据属性，需要获取属性名中 `data-` 之后的部分（要注意，破折号连接的名称需要改写为{{Glossary("camel_case", "驼峰命名")}}）。

```js
const article = document.querySelector("#electric-cars");
// 以下代码同样奏效：
// const article = document.getElementById("electric-cars")

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

每一个属性都是一个可读写的字符串。在上面的例子中，`article.dataset.columns = 5` 将会调整属性的值为 5。

还可以将 [`document.querySelector()`](/zh-CN/docs/Web/API/Document/querySelector) 或 [`document.querySelectorAll()`](/zh-CN/docs/Web/API/Document/querySelectorAll) 与数据属性选择器一起使用，以查找匹配的一个元素或所有元素：

```js
// 查找所有具有 data-columns 属性的元素
const articles = document.querySelectorAll("[data-columns]");

// 查找所有具有 data-columns="3" 的元素
const threeColumnArticles = document.querySelectorAll('[data-columns="3"]');
// 可以在这些结果中迭代
threeColumnArticles.forEach((article) => {
  console.log(article.dataset.indexNumber);
});
```

## CSS 访问

注意，即使 data 属性为纯 HTML 属性，也同样能被 [CSS](/zh-CN/docs/Web/CSS) 访问。比如可以通过 CSS 的[生成内容](/zh-CN/docs/Web/CSS/Reference/Properties/content)使用函数 [`attr()`](/zh-CN/docs/Web/CSS/Reference/Values/attr) 来显示文章父数据的内容：

```css
article::before {
  content: attr(data-parent);
}
```

你也同样可以在 CSS 中使用[属性选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Attribute_selectors)根据数据来改变样式：

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

数据值是字符串。必须在选择器中将数值用引号括起来，样式才能生效。

## 示例

### 样式变体

假如你有一个 `callout` 类，现在需要实现不同的变体，如“note”和“warning”。传统上，人们只是使用不同的类名。

```html
<div class="callout callout--note">...</div>
<div class="callout callout--warning">...</div>
```

```css
.callout {
  margin: 0.5em 0;
  padding: 0.5em;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
}

.callout--note {
  border-color: rgb(15 15 235);
  background-color: rgb(15 15 235 / 0.2);
}
.callout--warning {
  border-color: rgb(235 15 15);
  background-color: rgb(235 15 15 / 0.2);
}
```

通过数据属性，可以有这样的替代方案：

```html live-sample___callout-data-attr
<div class="callout">...</div>
<div class="callout" data-variant="note">...</div>
<div class="callout" data-variant="warning">...</div>
```

```css live-sample___callout-data-attr
.callout {
  margin: 0.5em 0;
  padding: 0.5em;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
}

/* Default style */
.callout:not([data-variant]) {
  border-color: rgb(15 15 15);
  background-color: rgb(15 15 15 / 0.2);
}
.callout[data-variant="note"] {
  border-color: rgb(15 15 235);
  background-color: rgb(15 15 235 / 0.2);
}
.callout[data-variant="warning"] {
  border-color: rgb(235 15 15);
  background-color: rgb(235 15 15 / 0.2);
}
```

{{EmbedLiveSample("callout-data-attr", "", "200")}}

这样做有多种好处：

- 它消除了许多无效状态，例如在应用 `callout--note` 时不同时添加 `callout`，或同时应用多个变体。
- 单独的 `data-variant` 属性允许通过内衬或类型检查对有效值进行静态分析。
- 切换变体更加直观：可以使用 `div.dataset.variant = "warning";` 代替操作 [`classList`](/zh-CN/docs/Web/API/Element/classList)，后者需要多个步骤。

### 将任意数据与 DOM 元素关联

许多 web 应用程序将 JavaScript 数据作为其用户界面状态的真实来源。在这种情况下，只需添加渲染所需的 HTML 属性即可。数据属性在以下情况下非常有用：所有内容都存在于标记中，JavaScript 仅用于处理事件、同步状态等。

例如，在我们的[带有滚动边距的图片动画](/zh-CN/docs/Web/API/IntersectionObserver/scrollMargin#带有滚动边距的图片动画)示例中，我们有一个已经填充了许多 `<img>` 元素的 HTML 页面。图片源最初存储在 `data-src` 中，以防止触发任何请求，而真正的 `src` 仅在 `<img>` 滚动到视图时才会添加。数据（图片源）与元素位于同一位置，JavaScript 只负责定义行为。

## 议题

不要在数据属性中存储应可见和可访问的内容，因为辅助技术可能无法访问这些内容。此外，搜索爬虫可能不会索引数据属性的值。通常情况下，如果只打算显示数据属性，可以直接操作 [`textContent`](/zh-CN/docs/Web/API/Node/textContent)。

## 参见

- 该文章源自 hacks.mozilla.org 的[在 JavaScript 和 CSS 中使用数据属性](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/)。
- 在 SVG 2 中也同样支持自定义 data 属性；参见 {{domxref("SVGElement.dataset")}} 和 {{SVGAttr("data-*")}}。
- [如何使用 HTML 数据属性](https://www.sitepoint.com/use-html5-data-attributes/)（Sitepoint）
