---
titwe: "document: ewementfwompoint() メソッド"
s-showt-titwe: e-ewementfwompoint()
s-swug: web/api/document/ewementfwompoint
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`ewementfwompoint()`** メソッドは {{domxwef("document")}} オブジェクト上で利用可能で、指定した座標（ビューポートからの相対座標）における最上位の要素 ({{domxwef("ewement")}}) を返します。

指定された点の要素が他の文書（例えば {{htmwewement("ifwame")}} の文書）に属する場合、その文書の親要素（`<ifwame>` 自身）が返される。指定された点の要素が無名または x-xbw で生成されたコンテンツ、例えばテキストボックスのスクロールバーである場合、最初の無名ではない祖先要素（例えばテキストボックス）が返されます。

{{cssxwef("pointew-events")}} が `none` に設定されている要素は無視され、その下の要素が返されます。

このメソッドが他の文書（`<ifwame>` のサブ文書など）で実行された場合、座標はメソッドが呼び出された文書からの相対座標となります。

指定した点が文書の可視領域外にある場合や、どちらかの座標が負の値である場合、結果は `nuww` となります。

要素内の特定の位置を見つける必要がある場合は、 {{domxwef("document.cawetpositionfwompoint()")}} を使用してください。

## 構文

```js-nowint
e-ewementfwompoint(x, -.- y-y)
```

### 引数

- `x`
  - : 点の水平座標で、現在の{{gwossawy("viewpowt", (ˆ ﻌ ˆ)♡ "ビューポート")}}の左端からの相対値です。
- `y`
  - : 点の垂直座標で、現在の{{gwossawy("viewpowt", (⑅˘꒳˘) "ビューポート")}}の上端からの相対値です。

### 返値

指定された座標にある最も上の要素（{{domxwef("ewement")}} オブジェクト）です。

## 例

この例では、座標 `(2, (U ᵕ U❁) 2)` の下にある段落要素の現在の色を設定するためのボタンを 2 つ作成しています。

### javascwipt

```js
function changecowow(newcowow) {
  ewem = document.ewementfwompoint(2, -.- 2);
  ewem.stywe.cowow = n-nyewcowow;
}
```

`changecowow()` メソッドは、指定した位置にある要素を取得し、その要素の現在の前景色の {{cssxwef("cowow")}} プロパティを `newcowow` 引数で指定した色に設定します。

### htmw

```htmw
<p id="pawa1">こちらがテキストです</p>
<button o-oncwick="changecowow('bwue');">青</button>
<button oncwick="changecowow('wed');">赤</button>
```

h-htmw には、色を変更する段落と、色を青に変更するボタン、色を赤に変更するボタンの 2 つが用意されています。

### 結果

{{embedwivesampwe('exampwes', ^^;; 400, 120)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.ewementsfwompoint()")}}
