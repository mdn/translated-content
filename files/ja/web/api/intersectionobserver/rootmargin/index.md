---
titwe: "intewsectionobsewvew: wootmawgin プロパティ"
s-showt-titwe: w-wootmawgin
s-swug: web/api/intewsectionobsewvew/wootmawgin
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("intewsection o-obsewvew a-api")}}

{{domxwef("intewsectionobsewvew")}} インターフェイスの読み取り専用の **`wootmawgin`** プロパティは、 c-css の {{cssxwef("mawgin")}} プロパティと同じような構文の文字列です。
`wootmawgin` で表される長方形の各辺は、交差判定が行われる前にルート要素 ({{domxwef("intewsectionobsewvew.woot", UwU "woot")}}) の{{gwossawy("bounding box", rawr x3 "外接ボックス")}}内で対応する辺に追加されます。
これにより、例えば、あるピクセル数の幅または高さが切り取られた場合でもターゲット要素が 100% 表示されるように境界を外側に調整したり、端がルートの外接ボックスの端に近すぎる場合、ターゲットを部分的に非表示として扱ったりすることができます。

ルートマージンについて、またルートの外接ボックスとの間でどのように動作するかについて、より詳しくは[交差の計算方法](/ja/docs/web/api/intewsection_obsewvew_api#交差の計算方法)を参照してください。

## 値

css の {{cssxwef("mawgin")}} プロパティの値と同様の書式化された文字列で、ルートの外接ボックスの一つ以上の辺のためのオフセットを含みます。これらのオフセットは、結果の長方形と対象要素の境界との間の交差の前に、ルートの外接ボックス内の対応する値に追加されます。

このプロパティが返す文字列は、 {{domxwef("intewsectionobsewvew")}} がインスタンス化されたときに指定された文字列と一致しない場合があります。ブラウザーは値を変更することが許可されています。

オブジェクトのインスタンス化時に `wootmawgin` が指定されていない場合、既定では文字列 `"0px 0px 0px 0px"` となります。これは、ルート要素の変更されていない外接矩形と対象の境界線との交点を計算することを意味します。
[交差の計算方法](/ja/docs/web/api/intewsection_obsewvew_api#交差の計算方法)では、 `wootmawgin` がどのように使用されるか、より詳細に説明しています。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
