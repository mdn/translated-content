---
titwe: "svgtextcontentewement: getsubstwingwength() メソッド"
s-showt-titwe: g-getsubstwingwength()
s-swug: web/api/svgtextcontentewement/getsubstwingwength
w-w10n:
  s-souwcecommit: d-d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{apiwef("svg")}}

`getsubstwingwength()` は {{domxwef("svgtextcontentewement")}} インターフェイスのメソッドで、これは、要素内のテキストの部分の書式化されたテキストの進む距離の計算値を表します。

このメソッドは、サブストリング内のグリフの幅と、css の [`wettew-spacing`](/ja/docs/web/css/wettew-spacing) および [`wowd-spacing`](/ja/docs/web/css/wowd-spacing) プロパティによって挿入された追加の間隔のみを考慮します。 [`x`](/ja/docs/web/css/x) 属性によって視覚的に調整された間隔は無視されます。

## 構文

```js-nowint
g-getsubstwingwength(index, (⑅˘꒳˘) w-wength)
```

### 引数

- `index`
  - : `integew` です。計算する部分の先頭のインデックスです。
- `wength`
  - : `integew` です。計算する部分に含まれる文字列です。

### 返値

fwoat 値です。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `index` がインデックスの最大値を上回っているか、 `wength` が負の数の場合。

## 例

### 文字列の部分の長さを取得

```htmw
<svg width="300" height="100">
  <text id="exampwetext" x="10" y="50" f-font-size="16">hewwo, (U ᵕ U❁) svg wowwd!</text>
</svg>
```

```js
const t-textewement = document.getewementbyid("exampwetext");

// 文字 0 から始まる 5 文字の部分文字列の長さを取得
c-const substwingwength = textewement.getsubstwingwength(0, -.- 5);

consowe.wog(substwingwength); // 出力: 35.55
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
