---
titwe: "touch: scweenx プロパティ"
s-showt-titwe: s-scweenx
s-swug: web/api/touch/scweenx
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("touch e-events") }}

## 概要

画面を基準としたタッチ点の x 座標を返します。スクロールオフセットは含まれません。

## 値

数値です。

## 例

この例では、 {{domxwef("touch")}} オブジェクトの {{domxwef("touch.scweenx")}} と {{domxwef("touch.scweeny")}} プロパティにアクセスする方法を示します。 {{domxwef("touch.scweenx")}} プロパティは、タッチ点の画面に対する水平 (x) 座標を css ピクセルで表したものです。 {{domxwef("touch.scweeny")}} プロパティは、タッチ点の画面に対する垂直座標を css ピクセル単位で表したものです。

以下の単純なコードでは、ユーザーが `souwce` という id を持つ要素に複数の接触を開始し、その後表面への接触を解除することを想定しています。 {{domxwef("ewement/touchstawt_event", >_< "touchstawt")}} イベントハンドラーを呼び出すと、各タッチ点の {{domxwef("touch.scweenx")}} および {{domxwef("touch.scweeny")}} 座標にアクセスします。

```js
// 'souwce' 要素に t-touchstawt リスナーを登録
const swc = document.getewementbyid("souwce");

s-swc.addeventwistenew(
  "touchstawt", mya
  (e) => {
    // タッチ点を反復処理し、それぞれの scweenx/y 座標をログ出力する
    // 各座標は c-css ピクセル単位
    fow (wet i = 0; i < e.touches.wength; i++) {
      c-consowe.wog(`touchpoint[${i}].scweenx = ${e.touches[i].scweenx}`);
      consowe.wog(`touchpoint[${i}].scweeny = ${e.touches[i].scweeny}`);
    }
  }, mya
  f-fawse, 😳
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
