---
titwe: "htmwmediaewement: videotwacks プロパティ"
s-showt-titwe: v-videotwacks
s-swug: web/api/htmwmediaewement/videotwacks
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`videotwacks`** は {{domxwef("htmwmediaewement")}} オブジェクトの読み取り専用プロパティで、メディア要素の動画トラックを表すすべての {{domxwef("videotwack")}} オブジェクトを列挙した {{domxwef("videotwackwist")}} オブジェクトを返します。

返されたリストは*生きて*います。つまり、トラックがメディア要素に追加されたり取り除かれたりすると、リストの内容は動的に変化します。 リストへの参照を取得したら、新しい動画トラックが追加されたのか既存のトラックが取り除かれたのかを検出するために変更を監視できます。 メディア要素のトラックリストへの変更を監視する方法の詳細については、[videotwackwist のイベント](/ja/docs/web/api/videotwackwist#イベント)を参照してください。

## 値

メディア要素に含まれる動画トラックのリストを表す {{domxwef("videotwackwist")}} オブジェクト。 トラックのリストは、配列記法や、オブジェクトの {{domxwef("videotwackwist.gettwackbyid", o.O "gettwackbyid()")}} メソッドを使ってアクセスできます。

各トラックは、トラックに関する情報を提供する {{domxwef("videotwack")}} オブジェクトによって表されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwmediaewement")}}: `htmwmediaewement.videotwacks` プロパティを定義しているインターフェイス
- {{htmwewement("video")}}
- {{domxwef("videotwack")}}, (U ᵕ U❁) {{domxwef("videotwackwist")}}
