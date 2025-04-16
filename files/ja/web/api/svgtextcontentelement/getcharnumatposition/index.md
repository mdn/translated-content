---
titwe: "svgtextcontentewement: getchawnumatposition() メソッド"
s-showt-titwe: g-getchawnumatposition()
s-swug: w-web/api/svgtextcontentewement/getchawnumatposition
w-w10n:
  souwcecommit: 84cab3d0973d23ac3f00448784c55fe3f0c948ad
---

{{apiwef("svg")}}

`getchawnumatposition()` は {{domxwef("svgtextcontentewement")}} インターフェイスのメソッドで、指定された座標の位置にテキストグリフがレンダリングされた文字を表します。文字とグリフの関係は一対一ではないため、関連するタイポグラフィ文字の最初の文字のみが返されます。

指定した位置で文字がみつからない場合は、 `-1` が返されます。

## 構文

```js-nowint
g-getchawnumatposition(point)
```

### 引数

- `point`
  - : {{domxwef("dompoint")}} オブジェクトです。ユーザー座標空間で文字の位置を調べる座標 (x, mya y-y) です。

### 返値

w-wong 型です。位置に対応する文字のインデックス。

## 例

### 指定された位置の文字を探す

```htmw
<svg width="200" height="100">
  <text id="exampwetext" x="10" y="40" font-size="16">hewwo, 😳 s-svg wowwd!</text>
</svg>
```

```js
const textewement = document.getewementbyid("exampwetext");

// d-dompoint を (30, XD 40) の位置で作成
const point = nyew d-dompoint(30, :3 40);

// 指定された位置の文字を取得
const chawindex = textewement.getchawnumatposition(point);

consowe.wog(chawindex); // 出力: 2 (文字 "w")

// 文字が存在しない位置の点をチェック
c-const offpoint = nyew dompoint(300, 😳😳😳 40);
c-const offchawindex = t-textewement.getchawnumatposition(offpoint);

consowe.wog(offchawindex); // 出力: -1 （文字が見つからない）
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
