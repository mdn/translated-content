---
title: Resize Observer API
slug: Web/API/Resize_Observer_API
page-type: web-api-overview
browser-compat: api.ResizeObserver
---

{{DefaultAPISidebar("Resize Observer API")}}

Resize Observer API は要素のサイズ変化を監視し、変化するたびにオブザーバーに報告できる、実行可能な方法を提供します。

## 概念と使い方

要素のサイズの変化を検出する方法 (やそのほかの手法) はたくさんありますが、これまでの実装はハック的で脆弱なことがよくありました。

例えば、 [メディアクエリー](/en-US/docs/Web/CSS/Media_Queries) / {{domxref("window.matchMedia")}} はビューポートのサイズの変化を検出したときに特定の箇所に対してレイアウト更新を行う場合に最適ですが、これが特定の要素のサイズの変更を検出したい場合はどうすればよいでしょうか？

この問題を解決するために、サイズの変化を検出させたい要素を示唆する適切なイベント ( [Window: resize イベント](/ja-JP/docs/Web/API/Window/resize_event) など) で監視し、 {{domxref("Element.getBoundingClientRect")}} や {{domxref("Window.getComputedStyle")}} などを使用して要素の新しいサイズやその他の特徴を探し出す方法が考えられます。

そのような方法では、限られたユースケースでしか機能せず、パフォーマンス面でも悪影響があり (上記のメソッドを連続的に呼び出すと大きなパフォーマンス低下につながる) 、ブラウザーのウインドウサイズが変わらないと機能しないことが多い傾向があります。

Resize Observer API では、このような問題に対する解決策を提供する他、要素の内容やボーダーボックスのサイズの変化までも簡単に監視し、実行できるようにします。これは Web プラットフォームでしばしば議論されている [要素クエリ](https://www.xanthir.com/b4PR0) の欠如に対する解決策として提供します。

使い方は簡単で、 [Performance Observer](/ja-JP/docs/Web/API/PerformanceObserver) や [Intersection Observer](/ja-JP/docs/Web/API/Intersection_Observer_API) の他のオブザーバーとほとんど同じです。[`ResizeObserver()`](/ja-JP/docs/Web/API/ResizeObserver/ResizeObserver) コンストラクターで新しい {{domxref("ResizeObserver")}} オブジェクトを作成できます。 {{domxref("ResizeObserver.observe()")}} で特定の要素のサイズの変更を検出するようにします。コールバック関数はコンストラクターの中で設定し、要素のサイズが変わるたびに毎回実行され、変化後のサイズを通して自由に実行できるようになります。

## インターフェイス

- {{domxref("ResizeObserver")}}
  - : Provides the ability to register new observers and to start and stop observing elements.
- {{domxref("ResizeObserverEntry")}}
  - : Describes a single element which has been resized, identifying the element and its new size.

## 例

You find a couple of simple examples on our GitHub repo:

- [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([see source](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)): A simple example with a green box, sized as a percentage of the viewport size. When the viewport size is changed, the box's rounded corners change in proportion to the size of the box. We could just implement this using {{cssxref("border-radius")}} with a percentage, but that quickly leads to ugly-looking elliptical corners, whereas the above solution gives you nice round corners that scale with the box size.
- [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([see source](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)): Here we use the resize observer to change the {{cssxref("font-size")}} of a header and paragraph as a slider's value is changed causing the containing `<div>` to change width. This shows that you can respond to changes in an element's size, even if they have nothing to do with the viewport.

The code will usually follow this kind of pattern (taken from resize-observer-border-radius.html):

```js
const resizeObserver = new ResizeObserver((entries) => {
  const calcBorderRadius = (size1, size2) =>
    `${Math.min(100, size1 / 10 + size2 / 10)}px`;

  for (const entry of entries) {
    if (entry.borderBoxSize) {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.borderBoxSize[0].inlineSize,
        entry.borderBoxSize[0].blockSize
      );
    } else {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.contentRect.width,
        entry.contentRect.height
      );
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ResizeObserver: It's Like document.onresize for Elements](https://web.dev/resize-observer/)
