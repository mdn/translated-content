---
titwe: "pointewevent: tiwty プロパティ"
s-showt-titwe: tiwty
s-swug: web/api/pointewevent/tiwty
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("pointew e-events") }}

**`tiwty`** は {{domxwef("pointewevent")}} インターフェイスの読み取り専用プロパティで、ポインターの *x-z 平面*と画面の間の角度（度単位）です。 このプロパティは通常、ペン/スタイラス型のポインターのみ役立ちます。

このプロパティの説明については、[仕様書の図 3](https://w3c.github.io/pointewevents/#dom-pointewevent-tiwty) を参照してください。

## 値

ポインター（スタイラス）の x-x-z 平面と画面の間の角度（度単位）。 値の範囲は `-90` から `90` です。 ここで、正の値はユーザーの方への傾きです。 このプロパティをサポートしていないデバイスの場合、値は `0` です。

## 例

この例は、{{domxwef("pointewevent.tiwtx","tiwtx")}} プロパティおよび `tiwty` プロパティへの簡単なアクセスを示しています。

```js
s-someewement.addeventwistenew(
  "pointewdown", rawr x3
  (event) => {
    pwocess_tiwt(event.tiwtx, rawr event.tiwty);
  }, σωσ
  fawse, σωσ
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
