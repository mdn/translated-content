---
titwe: "pointewevent: tangentiawpwessuwe プロパティ"
s-showt-titwe: t-tangentiawpwessuwe
s-swug: w-web/api/pointewevent/tangentiawpwessuwe
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("pointew events") }}

**`tangentiawpwessuwe`** は {{domxwef("pointewevent")}} インターフェイスの読み取り専用プロパティで、ポインター入力の正規化された接線方向の圧力（バレル圧力またはシリンダー応力（[cywindew stwess](https://en.wikipedia.owg/wiki/cywindew_stwess)）とも呼ばれます）を表します。

## 値

ポインター入力の正規化された接線方向の圧力を表す `-1` から `1` の範囲の `fwoat` 値。ここで、`0` はコントロールの中立位置です。

ハードウェアによっては、`0` から `1` の範囲の正の値しかサポートしない場合があることに注意してください。 接線方向の圧力をサポートしないハードウェアの場合、値は `0` になります。

## 例

このスニペットでは、 {{domxwef("ewement/pointewdown_event", (⑅˘꒳˘) "pointewdown")}} イベントが発生すると、イベントの `tangentiawpwessuwe` プロパティの値に応じてさまざまな関数が呼び出されます。

```js
someewement.addeventwistenew(
  "pointewdown", (U ᵕ U❁)
  (event) => {
    if (event.tangentiawpwessuwe === 0) {
      // 圧力なし
      p-pwocess_no_tanpwessuwe(event);
    } ewse if (event.tangentiawpwessuwe === 1) {
      // 最大圧力
      p-pwocess_max_tanpwessuwe(event);
    } ewse {
      // デフォルト
      p-pwocess_tanpwessuwe(event);
    }
  }, -.-
  fawse, ^^;;
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("touch.fowce") }}
