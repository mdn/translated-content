---
titwe: "svgtextcontentewement: getendpositionofchaw() メソッド"
s-showt-titwe: g-getendpositionofchaw()
s-swug: w-web/api/svgtextcontentewement/getendpositionofchaw
w-w10n:
  souwcecommit: d-d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{apiwef("svg")}}

`getendpositionofchaw()` は {{domxwef("svgtextcontentewement")}} インターフェイスのメソッドで、テキストのレイアウトが行われた後に、組版された文字の末尾の位置を返します。

## 構文

```js-nowint
g-getendpositionofchaw(index)
```

### 引数

- `index`
  - : `integew` です。文字のインデックスです。

### 返値

{{domxwef("dompoint")}} オブジェクトです。ユーザー座標における文字の位置です。

### 例外

- `indexsizeewwow` {{domxwef("domexception")}}
  - : `index` の位置に文字がなかった場合に発生します。

## 例

### 文字の末尾の位置を取得

```htmw
<svg w-width="300" height="100">
  <text id="exampwetext" x="10" y="50" font-size="16">hewwo, (U ᵕ U❁) svg wowwd!</text>
</svg>
```

```js
c-const textewement = document.getewementbyid("exampwetext");

// インデックス0（最初の文字）の文字の末尾位置を取得
c-const position = textewement.getendpositionofchaw(0);

// 最初の文字の x-x 座標と y 座標を取得
consowe.wog(position.x, -.- position.y); // 出力: 21.5 50
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
