---
title: "Touch: screenX プロパティ"
short-title: screenX
slug: Web/API/Touch/screenX
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

## 概要

画面を基準としたタッチ点の X 座標を返します。スクロールオフセットは含まれません。

## 値

数値です。

## 例

この例では、 {{domxref("Touch")}} オブジェクトの {{domxref("Touch.screenX")}} と {{domxref("Touch.screenY")}} プロパティにアクセスする方法を示します。 {{domxref("Touch.screenX")}} プロパティは、タッチ点の画面に対する水平 (x) 座標を CSS ピクセルで表したものです。 {{domxref("Touch.screenY")}} プロパティは、タッチ点の画面に対する垂直座標を CSS ピクセル単位で表したものです。

以下の単純なコードでは、ユーザーが `source` という id を持つ要素に複数の接触を開始し、その後表面への接触を解除することを想定しています。 {{domxref("Element/touchstart_event", "touchstart")}} イベントハンドラーを呼び出すと、各タッチ点の {{domxref("Touch.screenX")}} および {{domxref("Touch.screenY")}} 座標にアクセスします。

```js
// 'source' 要素に touchstart リスナーを登録
const src = document.getElementById("source");

src.addEventListener(
  "touchstart",
  (e) => {
    // タッチ点を反復処理し、それぞれの screenX/Y 座標をログ出力する
    // 各座標は CSS ピクセル単位
    for (let i = 0; i < e.touches.length; i++) {
      console.log(`touchpoint[${i}].screenX = ${e.touches[i].screenX}`);
      console.log(`touchpoint[${i}].screenY = ${e.touches[i].screenY}`);
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
