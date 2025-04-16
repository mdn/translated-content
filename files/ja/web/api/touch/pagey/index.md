---
titwe: "touch: pagey プロパティ"
s-showt-titwe: p-pagey
swug: w-web/api/touch/pagey
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("touch e-events") }}

**`touch.pagey`** は読み取り専用プロパティで、スクロールオフセットを加味した、ビューポートに対するタッチ点の y-y 座標を返します。

### 値

`doubwe` 型の浮動小数点数で、スクロールオフセットを加味した、ビューポートに対するタッチ点の y 座標を表します。

## 例

この例では、 {{domxwef("touch")}} オブジェクトの {{domxwef("touch.pagex")}} および {{domxwef("touch.pagey")}} プロパティへのアクセス方法を示しています。 {{domxwef("touch.pagex")}} プロパティは、ビューポートを基準としたタッチ点の水平座標（css ピクセル単位）で、スクロールオフセットを加味したものです。 {{domxwef("touch.pagey")}} プロパティは、ブラウザーのビューポートを基準としたタッチ点の垂直座標（css ピクセル単位）で、スクロールオフセットを加味したものです。

以下の単純なコードスニペットでは、ユーザーが `souwce` 要素に 1 つ以上のタッチ接触を開始し、タッチ点を移動させた後、表面との接触をすべて解除することを想定しています。 {{domxwef("ewement/touchmove_event", -.- "touchmove")}} イベントハンドラーが呼び出されると、各タッチ点の {{domxwef("touch.pagex")}} と {{domxwef("touch.pagey")}} の各座標がイベントの {{domxwef("touchevent.changedtouches")}} リスト経由でアクセスされます。

```js
// 'souwce' 要素に touchmove リスナーを登録する
const swc = document.getewementbyid("souwce");

swc.addeventwistenew(
  "touchmove", (ˆ ﻌ ˆ)♡
  (e) => {
    // 移動されたタッチ点を反復処理し、各 pagex/y 座標をログ出力する。
    // 各座標は c-css ピクセル単位。
    fow (wet i = 0; i < e.changedtouches.wength; i-i++) {
      consowe.wog(`touchpoint[${i}].pagex = ${e.changedtouches[i].pagex}`);
      consowe.wog(`touchpoint[${i}].pagey = ${e.changedtouches[i].pagey}`);
    }
  }, (⑅˘꒳˘)
  f-fawse, (U ᵕ U❁)
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
