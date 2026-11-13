---
title: "Window: resize イベント"
short-title: resize
slug: Web/API/Window/resize_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

**`resize`** イベントは、この文書のビュー (ウィンドウ) の大きさが変更されたときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

一部の初期のブラウザーでは、 `resize` イベントのハンドラーをすべての HTML 要素に設定することができました。現在でも `onresize` 属性や {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して、どの要素にもハンドラーを設定することができます。しかし、 `resize` イベントは {{domxref("Window", "window")}} オブジェクト (すなわち {{domxref("document.defaultView")}} で返されるもの) でのみ発行されます。 `window` オブジェクトに登録されたハンドラーのみが、 `resize` イベントを受け取ります。

現在では `resize` イベントはウィンドウに対してのみ発生しますが、[ResizeObserver](/ja/docs/Web/API/ResizeObserver) API を使用すれば、他の要素のサイズ変更通知を受け取ることができます。

アプリケーションにおいてリサイズイベントが頻繁に発生する場合は、[window.onresize の最適化](https://bencentra.com/code/2015/02/27/optimizing-window-resize.html)<sup>（英語）</sup>を参照し、イベントが発生するまでの間隔を制御してください。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nolint
addEventListener("resize", (event) => { })

onresize = (event) => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

### ウィンドウの大きさのログ出力

以下の例では、ウィンドウの大きさが変更されるたびに報告を出力します。

#### HTML

```html
<p>
  ブラウザーウィンドウを変更すると <code>resize</code> イベントが発生します。
</p>
<p>ウィンドウの高さ: <span id="height"></span></p>
<p>ウィンドウの幅: <span id="width"></span></p>
```

#### JavaScript

```js
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
```

#### 結果

{{EmbedLiveSample("Window_size_logger")}}

> [!NOTE]
> ここでの出力例は {{HTMLElement("iframe")}} 内に表示されているため、報告される幅と高さの値は、このページが表示されているウィンドウではなく、`<iframe>` に関するものです。特に、報告される高さに違いが見えるようにウィンドウのサイズを調整するのは難しいでしょう。
>
> {{LiveSampleLink("Window_size_logger", "例を別ウィンドウで開く")}}を実行すると、その効果がより分かりやすくなります。

### addEventListener による同等の実装

イベントハンドラーを設定するために [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) メソッドを使用することもできます。

```js
window.addEventListener("resize", reportWindowSize);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
