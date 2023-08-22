---
title: Resize Observer API
slug: Web/API/Resize_Observer_API
l10n:
  sourceCommit: 2937558d5ed1e03d7f60b2de71dd9c17f490166e
---

{{DefaultAPISidebar("Resize Observer API")}}

Resize Observer API は要素のサイズ変化を監視し、変化するたびにオブザーバーに報告できる、実行可能な方法を提供します。

## 概念と使い方

要素のサイズの変化を検出する方法 (やそのほかの手法) はたくさんありますが、これまでの実装はハック的で脆弱なことがよくありました。

例えば、 [メディアクエリー](/ja/docs/Web/CSS/Media_Queries) / {{domxref("window.matchMedia")}} はビューポートのサイズの変化を検出したときに特定の箇所に対してレイアウト更新を行う場合に最適ですが、これが特定の要素のサイズの変更を検出したい場合はどうすればよいでしょうか？

この問題を解決するために、サイズの変化を検出させたい要素を示唆する適切なイベント ( [Window: resize イベント](/ja/docs/Web/API/Window/resize_event) など) で監視し、 {{domxref("Element.getBoundingClientRect")}} や {{domxref("Window.getComputedStyle")}} などを使用して要素の新しいサイズやその他の特徴を探し出す方法が考えられます。

そのような方法では、限られたユースケースでしか機能せず、パフォーマンス面でも悪影響があり (上記のメソッドを連続的に呼び出すと大きなパフォーマンス低下につながる) 、ブラウザーのウインドウサイズが変わらないと機能しないことが多い傾向があります。

Resize Observer API では、このような問題に対する解決策を提供する他、要素の内容やボーダーボックスのサイズの変化までも簡単に監視し、実行できるようにします。これはウェブプラットフォームでしばしば議論されている [要素クエリー](https://www.xanthir.com/b4PR0) の欠如に対する解決策として提供します。

使い方は簡単で、 [Performance Observer](/ja/docs/Web/API/PerformanceObserver) や [Intersection Observer](/ja/docs/Web/API/Intersection_Observer_API) など、他のオブザーバーとほとんど同じです。[`ResizeObserver()`](/ja/docs/Web/API/ResizeObserver/ResizeObserver) コンストラクターで新しい {{domxref("ResizeObserver")}} オブジェクトを作成できます。 {{domxref("ResizeObserver.observe()")}} で特定の要素のサイズの変更を検出するようにします。コールバック関数はコンストラクターの中で設定し、要素のサイズが変わるたびに毎回実行され、変化後のサイズを通して自由に実行できるようになります。

## インターフェイス

- {{domxref("ResizeObserver")}}
  - : 新しいオブザーバーを登録し、要素の監視を開始あるいは停止する機能を提供します。
- {{domxref("ResizeObserverEntry")}}
  - : サイズが変化された単一の要素を記述し、要素とその新しいサイズを識別します。

## 例

GitHub リポジトリーでは、いくつか簡単な実装例があります。

- [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([ソース](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)): ビューポートサイズに応じてパーセント割合のサイズで表示する、緑色のボックスの簡単な実装例。ビューポートサイズが変化すると、ボックスの角丸もボックスのサイズに応じて変化します。これを {{cssxref("border-radius")}} を使用してパーセント割合で実装することもできますが、見苦しいような楕円形の角丸ができてしまいます。上記の解決策では、ボックスのサイズに応じてサイズが変わるきれいな角丸を表示できます。
- [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([ソース](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-text.html)): ここでは、スライダーで調整すると内部の `div` 要素のサイズが変化し、 Resize Observer を通してヘッダーと文章の {{cssxref("font-size")}} を変更します。これはビューポートとは関係なくても、要素のサイズ変更を検出して実行できることを示しています。

通常、コードは次のようなパターンに従います (resize-observer-border-radius.html からの引用)。

```js
const resizeObserver = new ResizeObserver((entries) => {
  const calcBorderRadius = (size1, size2) =>
    `${Math.min(100, size1 / 10 + size2 / 10)}px`;

  for (const entry of entries) {
    if (entry.borderBoxSize) {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.borderBoxSize[0].inlineSize,
        entry.borderBoxSize[0].blockSize,
      );
    } else {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.contentRect.width,
        entry.contentRect.height,
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
