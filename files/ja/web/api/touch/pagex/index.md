---
title: "Touch: pageX プロパティ"
short-title: pageX
slug: Web/API/Touch/pageX
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Touch Events") }}

**`Touch.pageX`** は読み取り専用プロパティで、スクロールオフセットを加味した、ビューポートに対するタッチ点の X 座標を返します。

### 値

`double` 型の浮動小数点数で、スクロールオフセットを加味した、ビューポートに対するタッチ点の X 座標を表します。

## 例

この例では、 {{domxref("Touch")}} オブジェクトの {{domxref("Touch.pageX")}} および {{domxref("Touch.pageY")}} プロパティへのアクセス方法を示しています。 {{domxref("Touch.pageX")}} プロパティは、ビューポートを基準としたタッチ点の水平座標（CSS ピクセル単位）で、スクロールオフセットを加味したものです。 {{domxref("Touch.pageY")}} プロパティは、ブラウザーのビューポートを基準としたタッチ点の垂直座標（CSS ピクセル単位）で、スクロールオフセットを加味したものです。

以下の単純なコードスニペットでは、ユーザーが `source` 要素に 1 つ以上のタッチ接触を開始し、タッチ点を移動させた後、表面との接触をすべて解除することを想定しています。 {{domxref("Element/touchmove_event", "touchmove")}} イベントハンドラーが呼び出されると、各タッチ点の {{domxref("Touch.pageX")}} と {{domxref("Touch.pageY")}} の各座標がイベントの {{domxref("TouchEvent.changedTouches")}} リスト経由でアクセスされます。

```js
// 'source' 要素に touchmove リスナーを登録する
const src = document.getElementById("source");

src.addEventListener(
  "touchmove",
  (e) => {
    // 移動されたタッチ点を反復処理し、各 pageX/Y 座標をログ出力する。
    // 各座標は CSS ピクセル単位。
    for (let i = 0; i < e.changedTouches.length; i++) {
      console.log(`touchpoint[${i}].pageX = ${e.changedTouches[i].pageX}`);
      console.log(`touchpoint[${i}].pageY = ${e.changedTouches[i].pageY}`);
    }
  },
  false,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
