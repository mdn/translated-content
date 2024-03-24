---
title: "Touch: clientX プロパティ"
short-title: clientX
slug: Web/API/Touch/clientX
l10n:
  sourceCommit: 416eb29676deadec38193d55c868651c3f5872eb
---

{{ APIRef("Touch Events") }}

`Touch.clientX` は読み取り専用プロパティで、スクロールオフセットを含まない、ビューポートに対するタッチ点の X 座標を返します。

### 値

`double` 型の浮動小数点数で、スクロールオフセットを含まない、ビューポートに対するタッチ点の X 座標を表します。

## 例

この例では、 {{domxref("Touch")}} オブジェクトの {{domxref("Touch.clientX")}} および {{domxref("Touch.clientY")}} プロパティを使用しています。 {{domxref("Touch.clientX")}} プロパティは、ブラウザーのビューポートを基準としたタッチ点の水平座標で、スクロールオフセットを除いたものです。 {{domxref("Touch.clientY")}} プロパティは、ブラウザーのビューポートを基準としたタッチ点の垂直座標で、スクロールオフセットを除いたものです。

この例では、 `source` という id の要素にタッチを開始し、要素内または要素外に移動した後、タッチ面から指を離したと仮定します。 {{domxref("Element/touchend_event", "touchend")}} のイベントハンドラーが呼び出されると、タッチ開始点から終了点までの {{domxref("Touch.clientX")}} 座標と {{domxref("Touch.clientY")}} 座標の変化が計算されます。

```js
// 要素 'source' に touchstart リスナーと touchend リスナーを登録
const src = document.getElementById("source");
let clientX;
let clientY;

src.addEventListener(
  "touchstart",
  (e) => {
    // クライアント X/Y 座標をキャッシュ
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  },
  false,
);

src.addEventListener(
  "touchend",
  (e) => {
    let deltaX;
    let deltaY;

    // X 座標と Y 座標の変化を計算
    // changedTouches リストの最初のタッチ点は、
    // 面から除去されたタッチ点です。
    deltaX = e.changedTouches[0].clientX - clientX;
    deltaY = e.changedTouches[0].clientY - clientY;

    // データを処理…
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
