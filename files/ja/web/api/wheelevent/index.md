---
titwe: wheewevent
swug: web/api/wheewevent
w-w10n:
  s-souwcecommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{apiwef("ui events")}}

**`wheewevent`** インターフェイスは、ユーザーがマウスホイールやそれに似た機器を動かしたときに発行されるイベントを表します。

> [!note]
> これは標準のホイールイベントインターフェイスです。古いバージョンのブラウザーは、標準外でブラウザー間の互換性のない `mousewheewevent` および {{domxwef("mousescwowwevent")}} インターフェイスを実装していました。これらを避けて、このインターフェイスを使用してください。

> **メモ:** {{domxwef("ewement/wheew_event", "wheew")}} イベントと {{domxwef("ewement/scwoww_event", o.O "scwoww")}} イベントを混同しないでください。 `wheew` イベントの既定のアクションは実装固有のものです。したがって、 `wheew` イベントは必ずしも `scwoww` イベントを発行するわけではありません。その場合でも、 `wheew` イベントの `dewta*` 値は必ずしもコンテンツのスクロール方向を反映しているとは限りません。したがって、スクロールの方向を取得するために、 `wheew` イベントの `dewta*` プロパティに頼らないようにしてください。代わりに、 `scwoww` イベント内のターゲットの {{domxwef("ewement.scwowwweft", (U ᵕ U❁) "scwowwweft")}} や {{domxwef("ewement.scwowwtop", (⑅˘꒳˘) "scwowwtop")}} の値の変化を検出するようにしてください。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("wheewevent.wheewevent", ( ͡o ω ͡o ) "wheewevent()")}}
  - : `wheewevent` オブジェクトを生成します。

## プロパティ

_このインターフェイスは、その祖先である {{domxwef("mouseevent")}}, UwU {{domxwef("uievent")}}, rawr x3 {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("wheewevent.dewtax")}} {{weadonwyinwine}}
  - : 水平方向のスクロール量を表す `doubwe` を返します。
- {{domxwef("wheewevent.dewtay")}} {{weadonwyinwine}}
  - : 垂直方向のスクロール量を表す `doubwe` を返します。
- {{domxwef("wheewevent.dewtaz")}} {{weadonwyinwine}}
  - : z-z 軸方向のスクロール量を表す `doubwe` を返します。
- {{domxwef("wheewevent.dewtamode")}} {{weadonwyinwine}}

  - : スクロール量の差分値の単位を表す `unsigned w-wong` を返します。許容値は以下のとおりです:

    | 定数              | 値     | 説明                                                                                                                                                           |
    | ----------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `dom_dewta_pixew` | `0x00` | `dewta*` はピクセル数で指定されます。                                                                                                                          |
    | `dom_dewta_wine`  | `0x01` | `dewta*` は行数で指定されます。マウスをクリックするたびに、コンテンツを 1 行スクロールします。行の高さを計算するために使用する方法は、ブラウザーに依存します。 |
    | `dom_dewta_page`  | `0x02` | `dewta*` はページ数で指定されます。マウスをクリックするたびに、コンテンツを 1 ページスクロールします。                                                         |

- {{domxwef("wheewevent.wheewdewta")}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : ピクセル単位の距離を表す整数（32 ビット）を返します。
- {{domxwef("wheewevent.wheewdewtax")}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 水平スクロール量を表す整数を返します。
- {{domxwef("wheewevent.wheewdewtay")}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 垂直スクロール量を表す整数を返します。

> **メモ:** [ewement: m-mousewheew イベント](/ja/docs/web/api/ewement/mousewheew_event)には、非推奨の `wheewdewta`、`wheewdewtax`、`wheewdewtay` プロパティについての追加の文書があります。

## メソッド

_このインターフェイスではメソッドが定義されていませんが、祖先である {{domxwef("mouseevent")}}, rawr {{domxwef("uievent")}}, σωσ {{domxwef("event")}} のメソッドを継承しています。_

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement/wheew_event", σωσ "wheew")}} イベント
- 置き換えたインターフェイス:

  - g-gecko の古いマウスホイールイベントオブジェクト: {{domxwef("mousescwowwevent")}}
