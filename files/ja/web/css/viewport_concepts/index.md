---
title: ビューポートの概念
slug: Web/CSS/Viewport_concepts
---

{{CSSRef}}

この記事では、ビューポートの概念 — ビューポートとは何か、ビューポートとは何か、 CSS, SVG, モバイル端末における影響 — および、視覚ビューポートとレイアウトビューポートの違いをを説明します。

## ビューポートとは何か

ビューポートはコンピューターグラフィックの中で現在表示されている領域を表します。ウェブブラウザーの用語では、これは一般にブラウザーウィンドウのうち、ユーザーインターフェイス、メニューバーなどを除いた部分です。すなわち、あなたが見ている文書の部分です。

文書は、この記事のように、とても長くなることがあります。今のビューポートは現在見えているものすべてであり、特に「ビューポートとは何か」の節や、おそらくナビゲーションメニューの一部もあるでしょう。ビューポートの大きさは画面の大きさ、ブラウザーが全画面モードであるかどうか、ユーザーがズームしているかどうかに依存します。この文書における*関連情報*の節のように、ビューポートの外にあるコンテンツは、スクロールして表示するまで画面上で表示されていません。

- アプリケーションを全画面にする必要がないような大きなモニターでは、ビューポートはブラウザーのウィンドウの大きさです。
- 多くのモバイル端末やブラウザーが全画面モードである場合、ビューポートは画面全体です。
- 全画面モードでは、ビューポートは端末の画面であり、ウィンドウはブラウザーのウィンドウであり、ビューポートと同じか小さく、文書はウェブサイトで、これはビューポートよりも高さや幅が大きくなることがあります。

まとめると、ビューポートは基本的に文書のうち、現在見えている部分です。

### ビューポートの大きさは変化する

ビューポートの幅はウィンドウの幅であるとは限りません。ウィンドウや文書の幅や高さを Chrome や Firefox で求めるには、次のようにします。

```js
document.documentElement.clientWidth; /* 1200 */
window.innerWidth; /* 1200 */
window.outerWidth; /* 1200 */
```

```js
document.documentElement.clientHeight; /* 800 */
window.innerHeight; /* 800 */
window.outerHeight; /* 900 */
```

ビューポートの大きさや、同様の大きさを求めるのに役立つ DOM プロパティがあります。

- 文書の要素の {{DOMxRef("Element.clientWidth")}} は、文書の内部的な幅を [CSS ピクセル](/ja/docs/Mozilla/Mobile/Viewport_meta_tag#A_pixel_is_not_a_pixel)単位で、パディングを含みます (ただし、境界、マージン、ある場合は垂直スクロールバーは含みません)。**これがビューポートの幅です**。
- {{DOMxRef("Window.innerWidth")}} は、ブラウザーウィンドウのビューポートの CSS ピクセル単位の幅で、もしあれば垂直スクロールバーの幅を含みます。
- {{DOMxRef("Window.outerWidth")}} は、ブラウザーウィンドウの外寸の幅で、すべてのウィンドウ{{glossary("chrome", "クローム")}}を含みます。

これらを実験してみると、 `innerWidth` と `outerWidth` は同じに見えましたが、　`innerHeight`　よりも `outerHeight` の方が高さが 100px だけ高くなっていました。これは `outerHeight` にはブラウザーのクロームが含まれているためです。測定はアドレスバーとブックマークバーの合計の高さが 100px のブラウザーで行われましたが、ウィンドウの左右にはクロームが表示されていません。

`innerHeight` と `innerWidth` 内の領域は、一般的に**レイアウトビューポート**と考えられています。ブラウザのクロームはビューポートの一部とはみなされません。

拡大すると、 Firefox と Chrome の両方で、 `innerWidth` と `clientWidth` の新しい CSS ピクセルサイズが報告されます。 `outerWidth` と `outerHeight` で返される値はブラウザーに依存します。 Firefox では新しい値を CSS ピクセルで報告しますが、 Chrome では長さを既定のピクセルサイズで返します。拡大縮小すると次のようになるかもしれません。

```js
document.documentElement.clientWidth; /* 800 */
window.innerWidth; /* 800 */
window.outerWidth; /* 800 in Firefox, 1200 in chrome */
```

```js
document.documentElement.clientHeight; /* 533 */
window.innerHeight; /* 533 */
window.outerHeight; /* 596 in Firefox, 900 in chrome */
```

The viewport was originally 1200 x 800 pixels. Upon zooming in, the viewport became 800 x 533 pixels. This is the _layout viewport_. Sticky headers or footers, with the following styles, will stick to the top and bottom of the _layout viewport_ respectively.

```css
body > header {
  position: fixed;
  top: 0;
}
body > footer {
  position: fixed;
  bottom: 0;
}
```

We got the 800 x 533 measurement when we zoomed in using the keyboard. The header and footer stayed flush against the top and bottom of the window. But what if we had pinched-zoomed on a tablet? What if a dynamic keyboard pops open on a phone?

The web contains two viewports, the **layout viewport** and the **visual viewport**. The visual viewport is the part of the web page that is currently visible in the browser and can change. When the user pinch-zooms the page, pops open a dynamic keyboard, or when a previously hidden address bar becomes visible, the visual viewport shrinks but the layout viewport is unchanged.

Sticky headers or footers, as discussed above, stick to the top and bottom of the _layout viewport_, and therefore remain in view when we zoom in with the keyboard. If you pinch-zoom, the layout viewport may not be fully visible. If you magnify from the middle of the layout viewport, the content would expand in all four directions. If you had a sticky header or footer, they would still be stuck to the top or bottom of the layout viewport, but they may not be visible at the top and bottom of the device's screen — which is the visual viewport. The visual viewport is the currently visible portion of the layout viewport. If you scroll down, you are changing the contents of the visual viewport and bringing the bottom of the layout viewport into view, displaying the sticky footer, which will then stay stuck at the bottom.

The visual viewport is the visual portion of a screen not including on-screen keyboards, areas outside of a pinch-zoom area, or other feature that doesn't scale with the dimensions of a page. The visual viewport is the same size as the layout viewport or smaller.

For a page containing iframes, objects, or external SVG, both the containing pages and each included file has their own unique window object. Only the top-level window has a visual viewport that may be distinct from the layout viewport. For included documents, the visual viewport and layout viewport are the same.

### CSS

The layout viewport and visual viewport described above are not the only viewports you will encounter. Any sub-viewport that is fully or partially displayed within the layout viewport is considered a visual viewport.

We generally think of width and height media queries as being relative to the width and height of the browser window. They are actually relative to the viewport, which is the window in the main document but is the intrinsic size of the element's parent in a nested browsing context like objects, iframes and SVG. In CSS, we also have length units based on the viewport size. A `vh` unit is 1% of the layout viewport's height. Similarly, the `vw` unit is 1% of the layout viewport's width.

#### `<iframe>`

Inside an iframe, the visual viewport is the size of the inner width and height of the iframe, rather than the parent document. You can set any height and width on an iframe, but the whole document may not be visible.

If you use viewport length units in your CSS within the iframe document, `1vh` will be 1% of the height of the iframe, and `1vw` will be 1% of the width of the document.

```css
iframe {
  width: 50vw;
}
```

If the iframe is set to 50vw, it will be 50% of the width of the `1200px` parent document in our example above, or `600px`, with `1vw` being `6px`. When zoomed in, the iframe shrinks to `400px` and `1vw` becomes `4px`.

A width-based media query within the iframe document is relative to the iframe's viewport.

```css
@media screen and (min-width: 500px) {
  p {
    color: red;
  }
}
```

If the above CSS is included in the iframe, the paragraphs will become red when the user has zoomed in, but this style does not apply in the non-zoomed-in state.

#### SVG

In an SVG document, the viewport is the visible area of the SVG image. You can set any height and width on an SVG, but the whole image might not be visible. The area that is visible is called the viewport. The size of the viewport can be defined using the width and height attributes of the {{SVGElement("svg")}} element.

```html
<svg height="300" width="400"></svg>
```

In this examples, the viewport has an aspect ratio of 3::4, and is, but default, 400 by 300 units, with a unit generally being a CSS pixel.

SVG also has an internal coordinate system defined via the [viewbox](/ja/docs/Web/SVG/Attribute/viewBox) attribute, which is not related to this viewport discussion.

If you include an SVG file in your HTML, the viewport of the SVG is the initial containing block, or the width and height of the SVG container. Using the {{CSSxRef("@media")}} query in your SVG's CSS is relative to that container, not the browser.

```css
@media screen and (min-width: 400px) and (max-width: 500px) {
  /* css goes here */
}
```

Generally, when you write the above media query, the styles are applied if the viewport, generally the browser window, is between 400px and 500px, inclusive. The width media query in the SVG is based on the element in which the SVG is contained — the {{htmlelement("img")}} if the source is an SVG file, the SVG itself if the SVG is included directly into the HTML, or the parent if the parent element has a width assigned and — not the viewport's width. With the above media query being in our SVG file, the CSS is applied if the SVG container is between 400 and 500px.

### JavaScript

The [Visual Viewport API](/ja/docs/Web/API/Visual_Viewport_API) provides a mechanism for querying and modifying the properties of the visual viewport.

## モバイルのビューポート

Mobile devices come in all ~~shapes and~~ sizes, with screens of differing device pixel ratios. The mobile browser's viewport is the area of the window in which web content can be seen, which is not necessarily the same size as the rendered page. Mobile browsers render pages in a virtual window or viewport, generally at 980px, which is usually wider than the screen, and then shrink the rendered result down so it can all be seen at once. Users can then pan and zoom to see different areas of the page. For example, if a mobile screen has a width of 320px, a website might be rendered with a virtual viewport of 980px, and then it will be shrunk down to fit into the 320px space, which, depending on the design, is illegible for many if not everyone. To tell a mobile browser to use the viewport width instead of the default 980px as the width of the screen, developers can include a viewport meta tag, like the following:

```html
<meta name="viewport" content="width=device-width" />
```

The `width` property controls the size of the viewport. It should preferably be set to `device-width`, which is the width of the screen in CSS pixels at a scale of 100%. There are other properties, including `maximum-scale`, `minimum-scale`, and `user-scalable`, which control whether users can zoom the page in or out, but the default values are the best for accessibility and user experience, so these can be omitted.

## 関連情報

- [Visual Viewport API](/ja/docs/Web/API/Visual_Viewport_API)
- {{HTMLElement("meta")}}, specifically `<meta name="viewport">`
- [Using the viewport meta tag to control layout on mobile browsers](/ja/docs/Mobile/Viewport_meta_tag)
