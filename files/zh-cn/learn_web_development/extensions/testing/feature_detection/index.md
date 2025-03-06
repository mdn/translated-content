---
title: 实现特性检测
slug: Learn_web_development/Extensions/Testing/Feature_detection
original_slug: Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

特性检测包括确定浏览器是否支持某个代码块，并根据支持（或不支持）运行不同的代码，这样浏览器就能始终提供正常的使用体验，而不会在某些浏览器中崩溃或出错。本文详细介绍了如何编写自己的简单特征检测、如何使用库加快实现速度，以及原生的特征检测特性（如 `@supports`）。

<table>
  <tbody>
    <tr>
      <th scope="row">前提：</th>
      <td>
        熟悉核心的 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a
          href="/zh-CN/docs/Learn_web_development/Core/Styling_basics"
          >CSS</a
        >
        以及 <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a> 语言，了解顶层的<a
          href="/zh-CN/docs/Learn_web_development/Extensions/Testing/Introduction"
          >跨浏览器测试原则</a
        >。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        了解特性检测的概念，并能够在 CSS 和 JavaScript 中实现合适的解决方案。
      </td>
    </tr>
  </tbody>
</table>

## 特性检测的概念

特性检测的理念在于，通过执行一个测试来确认当前浏览器是否支持某项特性。然后，根据测试结果有条件地执行代码，确保在*支持*该特性的浏览器和*不支持*的浏览器中都能提供一个可接受的用户体验。如果不采取这种做法，那么在那些不支持你代码中所用特性的浏览器上，你的网站将无法正确显示，从而导致糟糕的用户体验。

让我们回顾一下我们在[处理常见 JavaScript 问题](/zh-CN/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#特性检测)一文中提及的例子——[地理位置 API](/zh-CN/docs/Web/API/Geolocation_API)（它能够访问运行网页浏览器的设备的位置数据），其主要使用入口点是全局 [Navigator](/zh-CN/docs/Web/API/Navigator) 对象上的 `geolocation` 属性。因此，你可以使用类似以下的方法来检测浏览器是否支持地理位置特性：

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // 使用如 Google Maps API 显示地图上的位置
  });
} else {
  // 为用户提供静态地图
}
```

在我们继续之前，先说一件事——不要把特性检测和**浏览器嗅探**（检测什么浏览器在访问网站）混淆起来——后者是一种糟糕的做法，应该不惜一切代价加以阻止。参见[不要嗅探浏览器](/zh-CN/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#不要嗅探浏览器)以了解更多细节。

## 撰写自己的特性检测代码

在本节中，我们将研究如何在 CSS 和 JavaScript 中实现特性检测测试。

### CSS

你可以通过在 JavaScript 中测试[_元素.style.属性_](/zh-CN/docs/Web/API/HTMLElement/style)（例如 `paragraph.style.rotate`）的存在来检测 CSS 特性。

一个经典的例子可能是在浏览器中测试[子网格](/zh-CN/docs/Web/CSS/CSS_grid_layout/Subgrid)的支持情况。对于支持 [`grid-template-columns`](/zh-CN/docs/Web/CSS/grid-template-columns) 和 [`grid-template-rows`](/zh-CN/docs/Web/CSS/grid-template-rows) 属性的 `subgrid` 值的浏览器来说，我们可以在布局中使用子网格。对于不支持的浏览器，我们可以使用常规的网格布局，虽然不太酷，但也能正常工作。

以此为例，我们可用在支持该值的情况下包含子网格样式表，而在不支持的情况下包含常规网格样式表。要实现这一点，我们可以在 HTML 文件的 head 部分包含两个样式表：一个包含所有的样式，另一个在不支持子网格的情况下实现默认的布局。

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

这里，`basic-styling.css` 处理所有每个浏览器都支持的样式。我们还有两个额外的 CSS 文件，`grid-layout.css` 和 `subgrid-layout.css`，它们包含了我们想根据浏览器的支持程度有选择地应用的 CSS。

我们先使用 JavaScript 来测试对 subgrid 值的支持，然后根据浏览器的支持情况更新我们的条件样式表的 `href`。

我们可以在我们的文档中添加 `<script></script>` 元素，填充以下 JavaScript：

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

在我们的条件语句中，我们使用 [`CSS.supports()`](/zh-CN/docs/Web/API/CSS/supports_static) 测试 {{cssxref("grid-template-columns")}} 属性是否支持 `subgrid` 值。

#### @supports

CSS 有一个原生的特性检测机制：{{cssxref("@supports")}} at-规则。它的工作方式与[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries)类似，但不同的是，媒体查询是根据分辨率、屏幕宽度或{{glossary("aspect ratio", "长宽比")}}等媒体特性来选择性地应用 CSS，而 @supports 则是根据是否支持某个 CSS 特性来选择性地应用 CSS，类似于 `CSS.supports()`。

例如，我们可以使用 `@supports` 重写我们之前的例子：

```css
@supports (grid-template-columns: subgrid) {
  main {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, minmax(100px, auto));
  }

  .item {
    display: grid;
    grid-column: 2 / 7;
    grid-row: 2 / 4;
    grid-template-columns: subgrid;
    grid-template-rows: repeat(3, 80px);
  }

  .subitem {
    grid-column: 3 / 6;
    grid-row: 1 / 3;
  }
}
```

只有当浏览器支持 `grid-template-columns: subgrid;` 声明时，这个 at 规则块才会应用其中的 CSS 规则。为了使带有值的条件生效，你需要包含完整的声明（而不仅仅是属性名称），并且不包括结尾的分号。

`@supports` 还支持 `AND`、`OR` 和 `NOT` 逻辑——如果 subgrid 选项不可用，则另一个代码块会应用常规网格布局：

```css
@supports not (grid-template-columns: subgrid) {
  /* 这里写其他规则 */
}
```

这比前面的例子更方便，因为我们可以在 CSS 中进行所有的特性检测，而不需要使用 JavaScript。此外，我们可以在一个 CSS 文件中处理所有的逻辑，从而减少 HTTP 请求。因此，这是确定浏览器对 CSS 特性支持的首选方法。

### JavaScript

我们在前面已经看到了一个 JavaScript 特性检测的例子。一般来说，这种测试是通过几种常见的模式之一完成的。

常见的探测特性的模式包括：

- 对象的成员

  - : 检查一个特定的方法或属性（通常是使用 API 的入口或你正在检测的其他特性）是否存在于其父 `Object` 中。

    我们前面的例子使用这种模式（通过测试 [`navigator`](/zh-CN/docs/Web/API/Navigator) 对象的 `geolocation` 成员）来检测 [Geolocation](/zh-CN/docs/Web/API/Geolocation_API) 的支持：

    ```js
    if ("geolocation" in navigator) {
      // 访问 navigator.geolocation API
    }
    ```

- 元素的属性

  - : 使用 {{domxref("Document.createElement()")}} 在内存中创建一个元素，然后检查其上是否存在属性。

    这个例子展示了一种检测 [Canvas API](/zh-CN/docs/Web/API/Canvas_API) 支持的方法：

    ```js
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }
    if (supports_canvas()) {
      // 创建 canvas 元素并在其上作画
    }
    ```

    > [!NOTE]
    > 上例中的双非运算符（`!!`）是一种将返回值强制转换为“适当的”布尔值的方法，而不是{{glossary("Truthy","真值")}}/{{glossary("Falsy","假值")}}，后者可能使结果偏离。

- 方法在元素上的特定返回值

  - : 使用 {{domxref("Document.createElement()")}} 在内存中创建一个元素，然后检查该元素是否存在方法。如果有的话，检查它的返回值。请参阅[深入了解 HTML 视频格式检测](https://diveinto.html5doctor.com/detect.html#video-formats)中的特性测试，了解这种模式的一个例子。

- 元素保留分配的属性值

  - : 使用 {{domxref("Document.createElement()")}} 在内存中创建一个元素，将一个属性设置为特定值，然后检查该值是否被保留。关于这种模式的例子，请参见[深入了解 HTML \<input> 类型检测](https://diveinto.html5doctor.com/detect.html#input-types)中的特性测试。

不过要记住，有些特征是无法检测到的。在这种情况下，你需要使用其他的方法，例如使用 {{Glossary("Polyfill", "polyfill")}}。

#### matchMedia

现在，我们还想提到 {{domxref("Window.matchMedia")}} 这个 JavaScript 特性。借助这个属性，你可以在 JavaScript 内部运行媒体查询测试。它看起来像这样：

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // 在这里运行 JavaScript
}
```

举个例子，我们的 [Snapshot](https://github.com/chrisdavidmills/snapshot) 演示了如何有选择地应用 Brick JavaScript 库来处理 UI 布局，使其仅应用于小屏幕布局（宽度为 480px 或以下）。我们首先使用 `media` 属性，仅在页面宽度为 480px 或更小的情况下，将 Brick CSS 应用于页面：

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

然后我们在 JavaScript 中多次使用 `matchMedia()`，只在小屏幕布局时运行 Brick 导航功能（在宽屏幕布局中，所有内容都可以一次看到，所以我们不需要在不同的视图之间导航）。

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## 总结

本文详细介绍了特征检测的主要概念，并向你展示了如何实施自己的特征检测测试。

接下来，我们将开始了解自动化测试。

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
