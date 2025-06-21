---
title: VisualViewport
slug: Web/API/VisualViewport
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("Visual Viewport")}}

**`VisualViewport`** は{{domxref("Visual Viewport API", "視覚的ビューポート API", "", "nocode")}} のインターフェイスで、指定されたウィンドウの視覚的ビューポートを表します。 iframe があるページでは、コンテナーページだけでなく、それぞれの iframe にも固有のウィンドウオブジェクトが存在します。ページ上の各ウィンドウには、そのウィンドウに関連付けられたプロパティを表す固有の `VisualViewport` が存在します。

ウィンドウの視覚的ビューポートは、 {{domxref("Window.visualViewport")}} を使用して取得することができます。

> [!NOTE]
> レイアウトビューポートとは異なる視覚的ビューポート持つのは最上位のウィンドウのみです。したがって、一般的には最上位のウィンドウの `VisualViewport` オブジェクトのみが使用されます。 {{htmlelement("iframe")}} の場合、 {{domxref("VisualViewport.width")}} のような視覚的ビューポートのメトリクスは、常に {{domxref("Element.clientWidth", "document.documentElement.clientWidth")}} などのレイアウトビューポートのメトリクスに対応します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_親インターフェイスである {{domxref("EventTarget")}} から継承したプロパティもあります。_

- {{domxref("VisualViewport.offsetLeft")}} {{ReadOnlyInline}}
  - : 視覚的ビューポートの左端のオフセットを、レイアウトビューポートの左端からの CSS ピクセル数で返します。
- {{domxref("VisualViewport.offsetTop")}} {{ReadOnlyInline}}
  - : 視覚的ビューポートの上端のオフセットを、レイアウトビューポートの上端からの CSS ピクセルで返します。
- {{domxref("VisualViewport.pageLeft")}} {{ReadOnlyInline}}
  - : 視覚的ビューポートの x 座標を、初期包含ブロックの上端の原点からの相対 CSS ピクセル数で返します。
- {{domxref("VisualViewport.pageTop")}} {{ReadOnlyInline}}
  - : 視覚的ビューポートの y 座標を、初期包含ブロックの上端の原点からの相対 CSS ピクセル数で返します。
- {{domxref("VisualViewport.width")}} {{ReadOnlyInline}}
  - : 視覚的ビューポートの幅を、 CSS ピクセル単位で返します。
- {{domxref("VisualViewport.height")}} {{ReadOnlyInline}}
  - : 視覚的ビューポートの幅を、 CSS ピクセル単位で返します。
- {{domxref("VisualViewport.scale")}} {{ReadOnlyInline}}
  - : 視覚ビューポートに適用されたピンチズームの倍率を返します。

## インスタンスメソッド

_親インターフェイスである {{domxref("EventTarget")}} から継承したメソッドもあります。_

## イベント

これらのイベントは、 {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用するか、イベントリスナーをこのインターフェイスの関連する `onイベント名` プロパティに代入するかして待ち受けします。

- {{domxref("VisualViewport/resize_event", "resize")}}
  - : 視覚的ビューポートがリサイズされると発行されます。
    `onresize` プロパティからも利用できます。
- {{domxref("VisualViewport/scroll_event", "scroll")}}
  - : 視覚的ビューポートがスクロールされると発行されます。
    `onscroll` プロパティからも利用できます。
- {{domxref("VisualViewport/scrollend_event", "scrollend")}}
  - : 視覚的ビューポートでのスクロール操作が終了すると発行されます。
    `onscrollend` プロパティからも利用できます。

## 例

### ズーム時に重なったボックスを非表示にする

この例では、 [Visual Viewport の README](https://github.com/WICG/visual-viewport) から引用し、ユーザーがズームインした際に、オーバーレイされたボックス（例えば広告を含む）を非表示にするコードを少し書く方法を示しています。これは、ページをズームインする際のユーザーの使い勝手を向上させる良い方法です。[ライブサンプル](https://wicg.github.io/visual-viewport/examples/hide-on-zoom.html)も利用できます。

```js
const bottomBar = document.getElementById("bottom-bar");
const viewport = window.visualViewport;

function resizeHandler() {
  bottomBar.style.display = viewport.scale > 1.3 ? "none" : "block";
}

window.visualViewport.addEventListener("resize", resizeHandler);
```

### 位置のシミュレーション: device-fixed

この例も、 [Visual Viewport の README](https://github.com/WICG/visual-viewport) から引用したものですが、この API を使用して `position: device-fixed` という、要素を視覚的ビューポートに固定する方法を示しています。[ライブサンプル](https://wicg.github.io/visual-viewport/examples/fixed-to-viewport.html)も利用できます。

```js
const bottomBar = document.getElementById("bottom-bar");
const viewport = window.visualViewport;
function viewportHandler() {
  const layoutViewport = document.getElementById("layoutViewport");

  // バーは position: fixed であるため、レイアウトビューポートの原点から
  // 視覚的ビューポートのオフセットを差し引く必要があります。
  const offsetLeft = viewport.offsetLeft;
  const offsetTop =
    viewport.height -
    layoutViewport.getBoundingClientRect().height +
    viewport.offsetTop;

  // これは style.left と style.top を設定することで、
  // width: 100% と同じことができます。
  bottomBar.style.transform = `translate(${offsetLeft}px, ${offsetTop}px) scale(${
    1 / viewport.scale
  })`;
}
window.visualViewport.addEventListener("scroll", viewportHandler);
window.visualViewport.addEventListener("resize", viewportHandler);
```

> [!NOTE]
> このテクニックは慎重に使用しましょう。このように `position: device-fixed` を模倣すると、修正された要素がスクロール時にちらつくことがあります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Viewports Explainer](https://github.com/bokand/bokand.github.io/blob/master/web_viewports_explainer.md) — 視覚的ビューポートとレイアウトビューポートの違いなど、ウェブビューポートの概念に関する有益な説明が記載されています。
