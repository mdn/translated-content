---
title: 实现特性检测
slug: Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

特性检测涉及到确定浏览器是否支持某个代码块，并根据是否支持（或不支持）运行不同的代码，从而使浏览器能够始终提供工作体验，而不是在某些浏览器中崩溃/出错。本文详细介绍了如何编写自己的简单特性检测，如何使用库来加速实现，以及特性检测的本地功能，如 `@supports`。

<table>
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        熟悉核心的 <a href="/zh-CN/docs/Learn/HTML">HTML</a>、<a
          href="/zh-CN/docs/Learn/CSS"
          >CSS</a
        >
        以及 <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> 语言，对<a
          href="/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >跨浏览器测试</a
        >原则有充分了解。
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

特性检测的思想是，你可以运行一个测试来确定当前浏览器是否支持某个特性，然后有条件地运行代码，以便在*支持*该特性的浏览器和*不支持*该特性的浏览器中提供可接受的体验，如果不这样做，在不支持你在代码中使用的特性的浏览器中将无法正确地显示你的网站，从而产生糟糕的用户体验。

让我们回顾一下，看看我们在[处理常见的 JavaScript 问题](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#特性检测)中提到的例子——[地理位置 API](/zh-CN/docs/Web/API/Geolocation_API)（它暴露了网络浏览器所运行设备的可用位置数据）有其主要入口点。全局 [Navigator](/zh-CN/docs/Web/API/Navigator) 对象上有一个 `geolocation` 属性。因此，你可以通过使用类似以下的方法来检测浏览器是否支持地理位置：

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // 使用如 Google Maps API 显示地图上的位置
  });
} else {
  // 为用户提供静态地图的选择
}
```

要检测一个单一的特性，`if` 语句效果很好。对于复杂的应用，考虑使用一个成熟的特性检测库，而不是自己编写。Modernizr 是特性检测测试的工业标准，我们将在后面讲述一下。

在我们继续之前，先说一件事——不要把特性检测和**浏览器嗅探**混淆起来（检测什么特定的浏览器在访问网站）——这是一种糟糕的做法，应该不惜一切代价加以阻止。参见[使用不良的浏览器嗅探代码](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#使用不良的浏览器嗅探代码)以了解更多细节。

## 撰写自己的特性检测代码

在本节中，我们将研究如何在 CSS 和 JavaScript 中实现自己的特性检测测试。

### CSS

你可以通过在 JavaScript 中测试 [_element.style.property_](/zh-CN/docs/Web/API/HTMLElement/style)（例如 `paragraph.style.rotate`）的存在来编写 CSS 特性测试。

一个经典的例子可能是测试浏览器是否支持 [Subgrid](/zh-CN/docs/Web/CSS/CSS_grid_layout/Subgrid)；对于支持 [`grid-template-columns`](/zh-CN/docs/Web/CSS/grid-template-columns) 和 [`grid-template-rows`](/zh-CN/docs/Web/CSS/grid-template-rows) 的 subgrid 值的浏览器，我们可以在布局上使用 subgrid。对于不使用 subgrid 的浏览器，我们可以使用普通的网格，它可以正常工作，但没有那么酷的外观。

以此为例，如果支持该值，我们可以包含一个 subgrid 样式表，如果不支持，则包含一个普通网格样式表。为此，我们可以在 HTML 文件的头部包含两个样式表：一个是所有的样式表，另一个在不支持 subgrid 的情况下实现默认布局：

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

这里，`basic-styling.css` 处理所有我们想给每个浏览器的样式。我们还有两个 CSS 文件，`grid-layout.css` 和 `subgrid-layout.css`，它们包含了我们想根据浏览器的支持程度有选择地应用的 CSS。

我们使用 JavaScript 来测试对 subgrid 值的支持，然后根据浏览器的支持情况更新我们的条件样式表的 `href`。

我们可以在我们的文档中添加 `<script></script>` 元素，填充以下 JavaScript：

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css.css");
}
```

在我们的条件语句中，我们使用 [`CSS.supports()`](/zh-CN/docs/Web/API/CSS/supports) 测试 {{cssxref("grid-template-columns")}} 属性是否支持 `subgrid` 值。

#### @supports

CSS 有一个原生的特性检测机制：{{cssxref("@supports")}} at-规则。这与[媒体查询](/zh-CN/docs/Web/CSS/CSS_media_queries)的工作方式类似，只是它不是根据分辨率、屏幕宽度或长宽比等媒体特性选择性地应用 CSS，而是根据是否支持某个 CSS 特性来选择性地应用 CSS，类似于 `CSS.supports()`。

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

只有当前浏览器支持 `grid-template-columns: subgrid;` 声明时，这个 at-规则块才会应用里面的 CSS 规则。为了使一个带值的条件生效，你需要包含一个完整的声明（而不仅仅是一个属性名称），并且不包括结尾的分号。

`@supports` 也支持 `AND`、`OR` 和 `NOT` 逻辑——如果 subgrid 选项不可用，另一个块应用常规网格布局：

```css
@supports not (grid-template-columns: subgrid) {
  /* 这里写其他规则 */
}
```

这比前面的例子更方便，我们可以在 CSS 中进行所有的特性检测，不需要 JavaScript；而且我们可以在一个 CSS 文件中处理所有的逻辑，减少 HTTP 请求。由于这个原因，它是确定浏览器对 CSS 特性支持的首选方法。

### JavaScript

我们在前面已经看到了一个 JavaScript 特性检测测试的例子。一般来说，这种测试是通过几种常见的模式之一完成的。

但请记住，有些特性是已知不可检测的，见 Modernizr 在 2016 年发布的[不可检测的列表](https://github.com/Modernizr/Modernizr/wiki/Undetectables)。

- 对象的成员

  - : 检查一个特定的方法或属性（通常是使用 API 的入口或你正在检测的其他特性）是否存在于其父 `Object` 中。

    我们前面的例子使用这种模式来检测 [Geolocation](/zh-CN/docs/Web/API/Geolocation_API) 的支持，通过测试 [`navigator`](/zh-CN/docs/Web/API/Navigator) 对象的 `geolocation`成员：

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

    > **备注：** 上例中的双非运算符（`!!`）是一种将返回值强制转换为“适当的”布尔值的方法，而不是{{glossary("Truthy","真值")}}/{{glossary("Falsy","假值")}}，后者可能使结果偏离。

- 方法在元素上的特定返回值

  - : 使用 {{domxref("Document.createElement()")}} 在内存中创建一个元素，然后检查该元素上是否存在一个方法。如果有的话，检查它的返回值。请参阅[深入了解 HTML 视频格式检测](https://diveinto.html5doctor.com/detect.html#video-formats)中的特性测试，了解这种模式的一个例子。

- 元素保留分配的属性值

  - : 使用 {{domxref("Document.createElement()")}} 在内存中创建一个元素，将一个属性设置为特定值，然后检查该值是否被保留。关于这种模式的例子，请参见[深入了解 HTML \<input> 类型检测](https://diveinto.html5doctor.com/detect.html#input-types)中的特性测试。

#### matchMedia

现在，我们还想提到 {{domxref("Window.matchMedia")}} 这个 JavaScript 特性。这是一个允许你在 JavaScript 内部运行媒体查询测试的属性。它看起来像这样：

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // 在这里运行 JavaScript
}
```

举个例子，我们的 [Snapshot](https://github.com/chrisdavidmills/snapshot) 演示利用它来有选择地应用 Brick JavaScript 库，用它来处理 UI 布局，但只适用于小屏幕布局（480px 宽或以下）。我们首先使用 `media` 属性，仅在页面宽度为 480px 或更小的情况下，将 Brick CSS 应用于页面：

```css
<link href="dist/brick.css" rel="stylesheet" media="all and (max-width: 480px)">
```

然后我们在 JavaScript 中多次使用 `matchMedia()`，只在小屏幕布局时运行 Brick 导航特性（在宽屏幕布局中，所有东西都可以一次看到，所以我们不需要在不同的视图之间导航）。

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## 使用 Modernizr 实现特性检测

使用上述技术实现自己的特性检测测试是可能的。然而，你也可以使用一个专门的特性检测库，因为它使事情变得更加简单。所有特性检测库之母是 [Modernizr](https://modernizr.com/)，它可以检测你所需要的一切。现在让我们来看看如何使用它。

当你在尝试使用 Modernizr 时，你不妨使用开发版，它包括所有可能的特性检测测试。现在就来下载吧：

1. 点击 [Development build](https://modernizr.com/download?do_not_use_in_production) 链接。
2. 点击页面上方的粉色大型 _Build_ 按钮。
3. 在出现的对话框中，点击顶部的 _Download_ 链接。

把它保存在合理的地方，就像你在本系列其他指南那样使用一个目录。

当你在生产环境中使用 Modernizr 时，你可以到你已经访问过的[下载页面](https://modernizr.com/download)，点击加号按钮，只包括你需要的特性检测。然后，当你点击 _Build_ 按钮时，你将下载一个只包含这些特性检测的自定义构建，使文件大小更小。

### CSS

让我们来看看 Modernizr 在选择性应用 CSS 方面是如何工作的。

1. 首先，复制提供的 [`supports-feature-detect.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/feature-detection/supports-feature-detect.html) 和 [`supports-styling.css`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/feature-detection/supports-styling.css) 文件中的内容。将它们保存为 `modernizr-css.html` 和 `modernizr-css.css`。
2. 更新 HTML 中的 {{htmlelement("link")}} 元素，使其指向正确的 CSS 文件（你也应该将 {{htmlelement("title")}} 元素更新为更合适的内容！）：

   ```html
   <link href="modernizr-css.css" rel="stylesheet" />
   ```

3. 在这个 `<link>` 元素上面，添加一个 {{htmlelement("script")}} 元素，将 Modernizr 库应用到页面，如下图所示。这需要在任何可能使用它的 CSS（或 JavaScript）之前应用到页面上。

   ```html
   <script src="modernizr-custom.js"></script>
   ```

4. 现在编辑你的 `<html>` 起始标签，使它改变成以下这样：

   ```html
   <html lang="en-us" class="no-js">
     …
   </html>
   ```

此时，试着加载你的页面，你会对 Modernizr 在 CSS 特性方面的工作有一个概念。如果你看一下浏览器开发者工具的 DOM 检查器，你会发现 Modernizr 已经像这样更新了你的 `<html>` 元素的 `class` 属性：

```html
<html
  class="js no-htmlimports no-proximity sizes no-flash transferables applicationcache blobconstructor blob-constructor no-contextmenu (and loads of more values)">
  …
</html>
```

它现在包含了大量的类，表示对不同技术特性的支持状态。举例来说，如果浏览器完全不支持 grid，`<html>` 将被赋予 `no-cssgrid` 的类名。如果你在类列表中搜索，你还会看到其他与网格有关的类，比如：

- `cssgridlegacy` 或 `no-cssgridlegacy`，取决于是否支持传统版本的网格。

> **备注：** 你可以找到大部分类名的含义列表——见 [Modernizr 检测的特性](https://modernizr.com/docs#features)。

不幸的是，Modernizr 并没有测试对一些新的 CSS 特性的支持，如容器查询、层叠层或子网格。如果它这样做了，我们将以如下方式更新我们的 `@supports` 例子：

```css
main {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-rows: repeat(3, 80px);
}

/* 支持 subgrid 的浏览器的属性 */
.csssubgrid .item {
  grid-template-columns: subgrid;
}

.csssubgrid .subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}

/* 不支持 subgrid 的浏览器的回落 */
.no-csssubgrid .subitem {
  display: flex;
  flex: 33%;
}
```

那么，这是如何工作的呢？因为所有这些类名都被放在了 `<html>` 元素上，你可以使用特定的后代选择器来针对那些支持或不支持某个特性的浏览器。所以在这里，我们只对支持 subgrid 的浏览器应用最上面的规则，而对不支持的浏览器应用最下面的规则（`no-csssubgrid`）。

> **备注：** Modernizr 的所有 HTML 和 JavaScript 特性测试都以类名的形式报告，因此，如果需要，你可以根据浏览器是否支持 HTML 或 JavaScript 特性，有选择地应用 CSS。

### JavaScript

Modernizr 也同样为实现 JavaScript 特性检测做了充分准备。它通过使全局的 `Modernizr` 对象对它所应用的页面可用，它包含了作为 `true`/`false` 属性的特性检测结果。

例如，在浏览器中加载我们的 [`modernizr-css.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/feature-detection/modernizr-css.html) 示例，然后试着在你的 JavaScript 控制台中输入 `Modernizr.`，然后再输入其中的一些类名（这里也一样）。比如：

```
Modernizr.flexbox
Modernizr.xhr2
Modernizr.fetch
```

控制台将返回 `true`/`false` 值，表示你的浏览器是否支持这些特性。

让我们看一个示例来说明你如何使用这些属性。

1. 首先，将 [`modernizr-js.html`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/feature-detection/modernizr-js.html) 示例文件复制到本地。
2. 使用 `<script>` 元素将 Modernizr 库附加到 HTML 中，正如我们在以前的演示中所做的那样。把它放在现有的 `<script>` 元素上面，该元素将谷歌地图 API 附加到页面上。
3. 接下来，在第二个 `<script>` 元素中的 `YOUR-API-KEY` 占位符文本（就像现在这样）填写一个有效的谷歌地图 API 密钥。要获得密钥，请登录谷歌账户，进入[获取密钥/认证](https://developers.google.com/maps/documentation/javascript/get-api-key)页面，然后点击蓝色的*获取密钥*按钮并按照说明操作。
4. 最后，在 HTML 主体的底部（就在 `</body>` 标签之前）再添加一个 `<script>` 元素，并在标签内放入以下脚本：

   ```js
   if (Modernizr.geolocation) {
     navigator.geolocation.getCurrentPosition(function (position) {
       let latlng = new google.maps.LatLng(
         position.coords.latitude,
         position.coords.longitude,
       );
       let myOptions = {
         zoom: 8,
         center: latlng,
         mapTypeId: google.maps.MapTypeId.TERRAIN,
         disableDefaultUI: true,
       };
       let map = new google.maps.Map(
         document.getElementById("map_canvas"),
         myOptions,
       );
     });
   } else {
     const para = document.createElement("p");
     para.textContent = "啊，没有地理位置支持！";
     document.body.appendChild(para);
   }
   ```

试试你的例子吧！这里我们使用 `Modernizr.geolocation` 测试来检查当前浏览器是否支持地理定位。如果支持，我们就运行一些代码，获取你的设备的当前位置，并将其绘制在谷歌地图上。

## 总结

这篇文章合理地涵盖了特性检测的细节，通过主要的概念，向你展示了如何实现你自己的特性检测测试和使用 Modernizr 库来更容易地实现测试。

接下来，我们将了解一下自动测试。

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
