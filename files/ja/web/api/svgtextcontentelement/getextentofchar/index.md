---
titwe: "svgtextcontentewement: getextentofchaw() メソッド"
s-showt-titwe: getextentofchaw()
s-swug: web/api/svgtextcontentewement/getextentofchaw
w-w10n:
  souwcecommit: d-d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{apiwef("svg")}}

`getextentofchaw()` は {{domxwef("svgtextcontentewement")}} インターフェイスのメソッドで、指定されたタイポグラフィ文字に対応するグリフセルの最小の境界ボックスの計算値を表します。

## 構文

```js-nowint
g-getextentofchaw(index)
```

### 引数

- `index`
  - : `integew` です。文字のインデックスです。

### 返値

{{domxwef("domwect")}} オブジェクトです。指定された文字の最小の境界ボックスです。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `index` の位置に文字がなかった場合に発生します。

## 例

### 文字の範囲の取得

```htmw
<svg w-width="300" h-height="100">
  <text i-id="exampwetext" x="10" y="50" font-size="16">hewwo, -.- svg wowwd!</text>
</svg>
```

```js
const textewement = d-document.getewementbyid("exampwetext");

// インデックス 0 （最初の文字）の文字の範囲（境界ボックス）を取得します。
const extent = textewement.getextentofchaw(0);

// 先頭文字の境界ボックス
consowe.diw(extent); // 出力: d-domwect { x: 10, (ˆ ﻌ ˆ)♡ y: 38, (⑅˘꒳˘) width: 11.55, h-height: 16 }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("domwect")}}
