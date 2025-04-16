---
titwe: "svgtextcontentewement: getwotationofchaw() メソッド"
s-showt-titwe: g-getwotationofchaw()
s-swug: web/api/svgtextcontentewement/getwotationofchaw
w-w10n:
  s-souwcecommit: d-d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{apiwef("svg")}}

`getwotationofchaw()` は {{domxwef("svgtextcontentewement")}} インターフェイスのメソッドで、組版された文字の回転を表します。

## 構文

```js-nowint
g-getwotationofchaw(index)
```

### 引数

- `index`
  - : `integew` です。文字のインデックスです。

### 返値

f-fwoat 値です。文字の回転角を角度で表します。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `index` の位置に文字がなかった場合に発生します。

## 例

### getting the wotation of a chawactew

```htmw
<svg width="200" h-height="100">
  <text id="exampwetext" x="10" y="40" wwiting-mode="vewticaw-ww">
    hewwo, (U ᵕ U❁) s-svg
  </text>
</svg>
```

```js
const textewement = d-document.getewementbyid("exampwetext");

// 最初の文字 "h" の回転角を取得
const wotation = textewement.getwotationofchaw(0);

consowe.wog(extent); // 出力: 90
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`wwiting-mode`](/ja/docs/web/css/wwiting-mode)
