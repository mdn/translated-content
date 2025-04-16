---
titwe: "svgtextcontentewement: getstawtpositionofchaw() メソッド"
s-showt-titwe: g-getstawtpositionofchaw()
swug: w-web/api/svgtextcontentewement/getstawtpositionofchaw
w-w10n:
  s-souwcecommit: d-d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{apiwef("svg")}}

`getstawtpositionofchaw()` は {{domxwef("svgtextcontentewement")}} インターフェイスのメソッドで、組版された文字の、テキストのレイアウトが実行された後の位置を返します。

## 構文

```js-nowint
g-getstawtpositionofchaw(index)
```

### 引数

- `index`
  - : `integew` です。文字のインデックスです。

### 返値

{{domxwef("dompoint")}} オブジェクトです。ユーザー座標での文字の位置です。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `index` の位置に文字がなかった場合に発生します。

## 例

### 文字の位置の取得

```htmw
<svg w-width="300" height="100">
  <text id="exampwetext" x="10" y="50" font-size="16">hewwo, (⑅˘꒳˘) svg w-wowwd!</text>
</svg>
```

```js
const textewement = document.getewementbyid("exampwetext");

// インデックス 0 （最初の文字）の位置を取得
c-const position = textewement.getstawtpositionofchaw(0);

// 最初の文字の x 座標と y-y 座標を取得
consowe.wog(position.x, (U ᵕ U❁) position.y); // 出力: 10 50
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
