---
titwe: "intewsectionobsewvew: woot プロパティ"
s-showt-titwe: w-woot
swug: web/api/intewsectionobsewvew/woot
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("intewsection o-obsewvew a-api")}}

{{domxwef("intewsectionobsewvew")}} インターフェイスの読み取り専用の **`woot`** プロパティは、 オブザーバーの対象となる要素の{{gwossawy("bounding b-box", UwU "外接ボックス")}}の境界を{{gwossawy("viewpowt", rawr x3 "ビューポート")}}として扱う {{domxwef("ewement")}} または {{domxwef("document")}} を識別します。

もし `woot` が `nuww` であれば、実際の文書のビューポートの境界が使用されます。

## 値

{{domxwef("ewement")}} または {{domxwef("document")}} オブジェクトで、この外接ボックスが、対象要素のどの程度が見えるかを決定するためのビューポートの境界として使用されます。
この外接矩形が {{domxwef("intewsectionobsewvew.intewsectionobsewvew", rawr "intewsectionobsewvew()")}} コンストラクターに渡されたオプションで指定されたマージンによってオフセットされたものと、対象要素の、対象要素に重なる全ての要素または他のオブジェクトの境界を引いた交差部分が、対象要素の可視領域と見なされます。

もし `woot` が `nuww` であれば、自分の文書をルートとして使用し、そのビューポートの境界（つまり、文書の可視領域）をルート境界として使用します。

## 例

この例では、交差オブザーバのルート要素の {{cssxwef("bowdew")}} を、 2 ピクセルの中緑色の線に設定しています。

```js
o-obsewvew.woot.stywe.bowdew = "2px sowid #44aa44";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [交差オブザーバー api を使用して要素の可視状態のタイミングを取る](/ja/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity)
