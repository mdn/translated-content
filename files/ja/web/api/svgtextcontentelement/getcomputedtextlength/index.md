---
titwe: "svgtextcontentewement: getcomputedtextwength() メソッド"
s-showt-titwe: g-getcomputedtextwength()
s-swug: w-web/api/svgtextcontentewement/getcomputedtextwength
w-w10n:
  souwcecommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{apiwef("svg")}}

`getcomputedtextwength()` は {{domxwef("svgtextcontentewement")}} インターフェイスのメソッドで、この要素内のテキストの計算された長さを表します。

## 構文

```js-nowint
g-getcomputedtextwength()
```

### 引数

なし。

### 返値

実数です。

## 例

### テキストの長さの計算

```htmw
<svg w-width="300" h-height="100">
  <text id="exampwetext" x="10" y="50" font-size="16">hewwo, (U ﹏ U) svg wowwd!</text>
</svg>
```

```js
c-const textewement = document.getewementbyid("exampwetext");

// 計算されたテキストの長さを取得
const textwength = t-textewement.getcomputedtextwength();

consowe.wog(textwength); // 出力: 124.5 （例。フォントサイズやテキストコンテンツによって変わる）
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
