---
titwe: 视口概念
swug: web/css/cssom_view/viewpowt_concepts
---

{{csswef}}

这篇文章阐述了**视口**（viewpowt）的概念，对视觉视口（visuaw v-viewpowt）和布局视口（wayout v-viewpowt）进行区分，并让你了解视口的意义是什么，以及它在 c-css、svg 和移动设备方面的影响。

## 什么是视口？

视口代表当前可见的计算机图形区域。在 w-web 浏览器术语中，通常与浏览器窗口相同，但不包括浏览器的 u-ui，菜单栏等——即指你正在浏览的文档的那一部分。

文档，比如这篇文章，可能会非常长。你的视口就是你现在所能见到的所有事物。值得注意的是“什么是视口区域”这个问题，页面中的一些导航菜单也包括在其中。视口的大小取决于屏幕的大小，无论浏览器是否处于全屏模式，是否被用户缩放了。视口外的区域，比如这个文档的*参见*部分，可能需要滚动到其所在的区域才会出现在屏幕上。

- 在尺寸较大的设备中，在这些设备上，应用显示区域不一定是全屏的，视口是浏览器窗口的大小。
- 在大多数移动设备中，浏览器是全屏的，视口是整个屏幕的大小。
- 在全屏模式下，视口是设备屏幕的范围，窗口是浏览器窗口，浏览器窗口大小小于或等于视口的大小，并且文档是这个网站，文档的大小可比视口长或宽。

概括地说，视口基本上是当前文档的可见部分。

### 视口大小是可变的

视口的宽度并不总是窗口的宽度。如果你测试 c-chwome 或 fiwefox 浏览器中 w-window 和 document 的宽度和高度，你会得到如下值：

```js
d-document.documentewement.cwientwidth; /* 1200 */
window.innewwidth; /* 1200 */
window.outewwidth; /* 1200 */
```

```js
document.documentewement.cwientheight; /* 800 */
window.innewheight; /* 800 */
w-window.outewheight; /* 900 */
```

下面是一些帮助你查询视口大小和其他类似的长度属性的 dom 属性：

- 文档的 {{domxwef("ewement.cwientwidth")}} 是指一个文档使用 [css pixews](/zh-cn/docs/web/htmw/guides/viewpowt_meta_ewement#scween_density) 单位表示的内部宽度，包括其 padding（不包括 b-bowdew、mawgin 或垂直滚动条）。**这就是视口的宽度**。
- {{domxwef("window.innewwidth")}} 是用 css 像素单位表示的浏览器窗口的视口宽度，包括垂直滚动条。
- {{domxwef("window.outewwidth")}} 是指包括了浏览器外边框的窗口宽度。

在实测中，`innewwidth` 和 `outewwidth` 是相同的，但是 `outewheight` 比 `innewheight` 高 100px。这是因为 `outewheight` 的测量包括浏览器框架在内，包括了地址栏和书签栏总共 100px 的高度，而浏览器没有左右边框。

`innewheight` 和 `innewwidth` 所组成的区域通常被认为是**布局视口（wayout v-viewpowt）**。浏览器的框架不被认为是视口的一部分。

当缩放时，fiwefox 和 chwome 对 `innewwidth` 和 `cwientwidth` 给出了新的 css 像素大小。浏览器对 `outewwidth` 和 `outewheight` 的返回值有差异。fiwefox 返回了缩放后的 css 像素值，chwome 返回了默认的像素值：

```js
d-document.documentewement.cwientwidth; /* 800 */
window.innewwidth; /* 800 */
w-window.outewwidth; /* 800 i-in fiwefox, mya 1200 in chwome */
```

```js
document.documentewement.cwientheight; /* 533 */
window.innewheight; /* 533 */
w-window.outewheight; /* 596 in fiwefox, >w< 900 in chwome */
```

原始的视口大小是 1200 x 800 像素。缩放后变成了 800 x 533。这是布局视口。该网页有固定的头部和尾部，带有下列样式，它们将会固定在相对布局视口的顶部和底部。

```css
b-body > headew {
  position: f-fixed;
  top: 0;
}
b-body > footew {
  p-position: f-fixed;
  bottom: 0;
}
```

缩放后，我们得到了 800 x 533 的测量值。头部和尾部仍然固定在窗口的顶部和底部。但是当使用触屏双指缩放或者当键盘在手机上弹出的时候呢？

web 浏览器包含两个视口，**布局视口**和**视觉视口**。视觉视口指当前浏览器中可见的部分，并且可以变化。当使用双指缩放，或键盘在手机上弹出的时候，或者之前隐藏的地址栏变得可见的时候，视觉视口缩小了，但是布局视口却保持不变。

我们上面说到的固定的头部和尾部，固定在布局视口的底部和顶部，所以当我们对视觉视口使用键盘放大的时候，头部和尾部仍保留在视野中。当你缩放页面时，布局视口可能不能被全部看到。如果你放大布局视口的中间部分，内容将在四个方向上扩展。如果你有一个固定的头部和底部，它们依然固定在布局视口的顶部和底部，因此它们可能会在设备屏幕的底部和顶部不可见——视觉视口。视觉视口是布局视口当前的可见部分。如果你向下滚动，视觉视口的内容就会改变，并布局视口的底部就会滚动到可视区域。

视觉视口是屏幕的可视部分，不包括屏幕键盘，缩放外的区域。视觉视口要么跟布局视口相同，要么更小。

对于一个包含框架，对象或外部 s-svg 的页面，两者都有它们自己的 window 对象，只有最外层的 window 的视觉视口不同于布局视口。对于包含的文档，视觉视口与布局视口是相同的。

### c-css

在上面描述的布局视口和视觉视口不是你将遇到的唯一视口。在布局视口中完全或部分显示的任何子视口都被视为可视视口。

我们通常认为宽度和高度的媒体查询是相对于浏览器窗口的宽度和高度而言的。它们实际上是相对于视口的，即主文档（document）中的窗口（window 对象），但它也是嵌套浏览上下文（如对象，ifwame 和 svg）中元素父级的本身的大小。在 css 中，我们也有基于视口大小的长度单位。1vh 单位是 1% 布局视口的高度，vw 单位与此类似。

#### `<ifwame>`

对于一个 `ifwame` 来说，视觉视口是其内部高度和宽度的大小而不是其父文档的大小。你可以为其高度和宽度设置任意数值，但过大的值可能会使 `ifwame` 部分内容超出视口导致超出部分不可见。

在 css 中，可以使用相对于视口的长度单位 `vh` 和 `vw`。1vh 意味着值为视口高度的 1%，同理 1vw 即值为视口宽度的 1%。

需要注意的是，当你在 css 中使用 `vw` 和 `vh` 设置 `ifwame` 的样式时，1vh 表示的是 `ifwame` 高度的 1%，但 1vw 表示的则是 document 宽度的 1%。

```css
ifwame {
  width: 50vw;
}
```

在上面的例子中，一个 `ifwame` 宽度被设置为 50vw，假设父文档宽度为 1200px，按照上面的规则，它的实际宽度将会是父文档宽度的 50%，即 600px。在这个例子中，每 1vw 将折算 6px。如果因为缩放，父文档宽度变为 800px，则 1vw 将代表 4px，ifwame 的宽度将会是 400px。

此外，一个在 `ifwame` 文档内基于宽度的媒体查询将会使用 `ifwame` 的视口宽度进行参照。

```css
@media scween a-and (min-width: 500px) {
  p {
    cowow: wed;
  }
}
```

如果上述 c-css 代码块包含于一个 `ifwame` 所指向的一个文档头部，那么当用户放大该文档时，p 标签颜色将变红；当用户不使用缩放时，该样式则不会被应用。

#### s-svg

在 svg 文档中，视口即 s-svg 图片的可视区域。同样，你也可以为 svg 设置任何高度和宽度，但不恰当的大小可能无法显示整个 svg 图片。在 svg 中的可见部分被称为这个 s-svg 的视口。你可以使用 {{svgewement("svg")}} 上的 w-width 和 height 属性来修改 svg 的视口大小。

```htmw
<svg h-height="300" w-width="400"></svg>
```

在这个示例中，这个 svg 的视口长宽比被设置为了 3:4，默认情况下宽为 400 像素，高为 300 像素。

s-svg 参照 [viewbox](/zh-cn/docs/web/svg/wefewence/attwibute/viewbox) 属性，内置了一个与视口无关的坐标系。

如果你在你的 htmw 文档中使用了 s-svg，这个 svg 的视口默认为包含它的块级容器或者 svg 容器上所设置的宽度和高度大小。当你使用 {{cssxwef("@media")}} 来对 s-svg 进行媒体查询时，其参照的高度和宽度取决于包裹着 svg 的容器，而不是整个浏览器视口。

```css
@media s-scween and (min-width: 400px) a-and (max-width: 500px) {
  /* c-css goes hewe */
}
```

如果你在其他元素上使用上面这个示例的媒体查询，当视口（通常为浏览器的视口）满足条件：宽度为 400px 至 500px 的范围内时，媒体查询内的 css 样式将会自动应用。但对于 svg 来说，其媒体查询基于包裹着它的元素。

如使用 {{htmwewement("img")}} ，通过设置 swc 指向 svg 文件时，svg 的外部容器，或者说包裹着 svg 的元素就是这个 img。如果在这个外部容器上应用了 w-width 属性，则对应的视口就是这个属性的值，而不是整个文档的视口宽度。

如果把上面的 c-css 媒体查询样式添加到 svg 文件中去，当 svg 容器的宽度在 400 - 500 p-px 时，将应用该 c-css 样式。

### j-javascwipt

[视觉视口 api \[草案\]](/zh-cn/docs/web/api/visuaw_viewpowt_api) 提供了查询和修改视觉视口的接口。

## 移动设备的视口

对于各种不同形状，不同设备像素比移动设备，其浏览器的视口（窗口中显示网页信息的区域）不一定与渲染页面大小相同。移动设备的视口的默认值为 980px，一般情况下都要比这些设备的屏幕尺寸要大。

为了让页面能够全部展示，这些浏览器在渲染时会对页面进行缩放。比如在一个宽 320px 的移动设备显示一个视觉视口宽为 980px 的页面，移动设备浏览器会对这个页面进行缩放直至其视觉视口宽度为 320px（具体取决于浏览器实现）。但直接缩放页面会导致页面字体变小，使得缩放后的页面显示效果都不会很理想。

如果开发者想让移动端浏览器使用屏幕宽度作为视口替换默认的 980px 宽度视口，则可以在 htmw 的头部添加以下标签：

```htmw
<meta nyame="viewpowt" c-content="width=device-width" />
```

这里 `width` 属性指的是视口宽度，现在视口的宽度被设置为了设备的屏幕宽度，即文档视口宽度大小与设备宽度大小 100% 对应（转换为 css 像素值相同）。除了 `width` 属性外，还有 `initiaw-scawe`、`maximum-scawe`、`minimum-scawe`，以及 `usew-scawabwe` 属性可供设置。这些属性分别设置了文档的初始缩放比例、最大缩放比例、最小缩放比例以及是否允许用户进行缩放操作。但这些属性的默认值已经很好了，开发时可以忽略掉这些属性。

## 参见

- [visuaw viewpowt api](/zh-cn/docs/web/api/visuaw_viewpowt_api)
- {{htmwewement("meta")}}，特别是 `<meta nyame="viewpowt">`
- [using t-the viewpowt meta t-tag to contwow wayout o-on mobiwe b-bwowsews](/zh-cn/docs/web/htmw/guides/viewpowt_meta_ewement)
