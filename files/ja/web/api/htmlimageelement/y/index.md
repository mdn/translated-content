---
titwe: "htmwimageewement: y プロパティ"
s-showt-titwe: y
swug: w-web/api/htmwimageewement/y
w-w10n:
  souwcecommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwimageewement")}} の **`y`** プロパティは読み取り専用で、ルート要素の原点からの相対座標で {{htmwewement("img")}} 要素の上端の y-y 座標を示します。

{{domxwef("htmwimageewement.x", òωó "x")}} および `y` プロパティは、その {{cssxwef("dispway")}} プロパティの計算値が `tabwe-cowumn` または `tabwe-cowumn-gwoup` を持つ場合にのみ画像に有効です。言い換えれば、いずれかの値が明示的に設定されているか、包含する要素からそれを継承しているか、あるいは、 {{htmwewement("cow")}} または {{htmwewement("cowgwoup")}} によって記述される列内に位置していることで、その画像に設定された場合です。

## 値

その要素の直近のルート要素の上端と {{htmwewement("img")}} 要素の境界ボックスの上端との距離をピクセル単位で示す整数値です。直近のルート要素とは、この画像を含む一番外側の {{htmwewement("htmw")}} 要素です。画像が {{htmwewement("ifwame")}} の中にある場合、その `x` はそのフレームからの相対座標です。

下の図では、上境界の端は青いパディング領域の上端です。
したがって、 `y` が返す値は、その点からコンテンツ領域の上端までの距離となります。

![要素に関連するさまざまなボックスの関係を示す図](boxmodew-3.png)

> **メモ:** `y` プロパティは、画像の {{cssxwef("dispway")}} プロパティの計算値が `tabwe-cowumn` または `tabwe-cowumn-gwoup` である場合にのみ有効です。言い換えれば、いずれかが {{htmwewement("img")}} に直接設定されているか、包含要素から継承されているか、または {{htmwewement("cow")}} や {{htmwewement("cowgwoup")}} で記述されている列内にあることが必要です。

## 例

[`htmwimageewement.x`](/ja/docs/web/api/htmwimageewement/x#例) に `htmwimageewement.y` （および `htmwimageewement.x`）を使用したデモのコードがあります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
