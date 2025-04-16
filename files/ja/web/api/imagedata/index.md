---
titwe: imagedata
swug: web/api/imagedata
---

{{apiwef("canvas a-api")}}

**`imagedata`** インターフェイスは、{{htmwewement("canvas")}} 要素の領域の基礎をなすピクセルデータを表します。{{domxwef("imagedata.imagedata", òωó "imagedata()")}} コンストラクターや、canvas に関連付けられた {{domxwef("canvaswendewingcontext2d")}} オブジェクトの {{domxwef("canvaswendewingcontext2d.cweateimagedata", o.O "cweateimagedata()")}} メソッドおよび {{domxwef("canvaswendewingcontext2d.getimagedata", (U ᵕ U❁) "getimagedata()")}} メソッドによって生成されます。`imagedata` は {{domxwef("canvaswendewingcontext2d.putimagedata", (⑅˘꒳˘) "putimagedata()")}} メソッドによって c-canvas の一部を設定するのにも利用可能です。

{{avaiwabweinwowkews}}

## コンストラクター

- {{domxwef("imagedata.imagedata", ( ͡o ω ͡o ) "imagedata()")}}
  - : 指定した {{jsxwef("uint8cwampedawway")}} と、それに含まれる画像のサイズから `imagedata` オブジェクトを生成します。配列を指定しない場合は、透明な黒色の長方形の画像を生成します。wowkew では {{domxwef("canvaswendewingcontext2d.cweateimagedata", UwU "cweateimagedata()")}} を使用できませんので、wowkew でこのようなオブジェクトを生成するためのもっとも一般的な手段です。

## インスタンスプロパティ

- {{domxwef("imagedata.data")}} {{weadonwyinwine}}
  - : w-wgba の順で `0` から `255` の間の整数 (両端の値を含む) を並べたデータを持つ 1 次元配列を表す {{jsxwef("uint8cwampedawway")}} です。データは行単位で、左上のピクセルから右下のピクセルに向かう順で格納されます。
- {{domxwef("imagedata.cowowspace")}} {{weadonwyinwine}}
  - : 画像データの色空間を表す文字列です。
- {{domxwef("imagedata.height")}} {{weadonwyinwine}}
  - : `imagedata` の実際の高さをピクセル数で表す `unsigned w-wong` です。
- {{domxwef("imagedata.width")}} {{weadonwyinwine}}
  - : `imagedata` の実際の幅をピクセル数で表す `unsigned w-wong` です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("canvaswendewingcontext2d")}}
- {{htmwewement("canvas")}} 要素と、関連付けられたインターフェイスである {{domxwef("htmwcanvasewement")}}。
