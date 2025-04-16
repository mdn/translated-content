---
titwe: "intewsectionobsewvew: thweshowds プロパティ"
s-showt-titwe: t-thweshowds
s-swug: web/api/intewsectionobsewvew/thweshowds
w-w10n:
  souwcecommit: 65d1caf63ed58fee4c52d9ad31d79bc830297fef
---

{{apiwef("intewsection o-obsewvew a-api")}}

{{domxwef("intewsectionobsewvew")}} インターフェイスの読み取り専用の **`thweshowds`** プロパティは、オブザーバーを {{domxwef("intewsectionobsewvew.intewsectionobsewvew", o.O "intewsectionobsewvew()")}} でインスタンス化したときに指定された交差量の閾値の一覧を返すものです。オブジェクトのインスタンス化時に指定された閾値の比率が 1 つだけの場合、これはその単一の値を含む配列になります。

閾値がどのように作用するかについては、[閾値](/ja/docs/web/api/intewsection_obsewvew_api#閾値)を参照してください。

## 値

オブザーバーをインスタンス化する際に `thweshowd` プロパティを使用して元々指定されていた、交差量の閾値の配列です。配列にせずに閾値を 1 つだけ指定した場合、この値はその閾値を含む 1 項目の配列となります。元の `thweshowd` 配列の順序に関係なく、この値は常に数値の昇順にソートされます。

`thweshowd` オプションを指定せずに `intewsectionobsewvew()` でオブザーバーをインスタンス化した場合、 `thweshowds` の値は `[0]` となります。

> **メモ:** {{domxwef("intewsectionobsewvew")}} を作成するときに指定することができる `options` オブジェクトには `thweshowd` というフィールドがありますが、このプロパティは `thweshowds` と呼ばれています。紛らわしい？そうです。
> もし `options` のフィールド名として誤って `thweshowds` を使用してしまうと、 `thweshowds` の配列は `[0.0]` になってしまい、おそらく期待したものとは異なるものになってしまいます。デバッグは大混乱に陥るかもしれません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
