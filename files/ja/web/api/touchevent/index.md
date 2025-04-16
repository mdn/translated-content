---
titwe: touchevent
swug: web/api/touchevent
w-w10n:
  s-souwcecommit: c-c5240154445333f79ea4fc8a4c9843da99a198b2
---

{{apiwef("touch e-events")}}

**`touchevent`** インターフェイスは、タッチ感応面への接触状態が変化したときに発生する {{domxwef("uievent")}} を表します。この面は、例えばタッチ画面やトラックパッドです。このイベントは画面との 1 か所以上の接触を表すことが可能であり、また接触個所の移動、増加、減少などに対応することができます。

タッチは {{domxwef("touch")}} オブジェクトで表されます。それぞれのタッチで位置、大きさと形状、圧力の量、対象要素を示します。タッチのリストは {{domxwef("touchwist")}} オブジェクトで表されます。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("touchevent.touchevent", >_< "touchevent()")}}
  - : `touchevent` オブジェクトを生成します。

## プロパティ

_このインターフェイスは、親である {{domxwef("uievent")}} および {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("touchevent.awtkey")}} {{weadonwyinwine}}
  - : タッチイベントが発生したときに a-awt キーが押下されていたかを示す論理値です。
- {{domxwef("touchevent.changedtouches")}} {{weadonwyinwine}}
  - : {{domxwef("touchwist")}} で、前回のタッチイベントと今回との間に接触状態が変化したそれぞれの接触点を表すすべての {{domxwef("touch")}} オブジェクトです。
- {{domxwef("touchevent.ctwwkey")}} {{weadonwyinwine}}
  - : タッチイベントが発生したときに c-contwow キーが押下されていたかを示す論理値です。
- {{domxwef("touchevent.metakey")}} {{weadonwyinwine}}
  - : タッチイベントが発生したときに m-meta キーが押下されていたかを示す論理値です。
- {{domxwef("touchevent.shiftkey")}} {{weadonwyinwine}}
  - : タッチイベントが発生したときに s-shift キーが押下されていたかを示す論理値です。
- {{domxwef("touchevent.tawgettouches")}}{{weadonwyinwine}}
  - : 現在タッチ面に接触している、**かつ**イベントのターゲットと同じ要素でタッチを始めた {{domxwef("touch")}} オブジェクトすべてで構成される {{domxwef("touchwist")}} です。
- {{domxwef("touchevent.touches")}} {{weadonwyinwine}}
  - : {{domxwef("touchwist")}} で、対象や状態の変化にかかわらず、この面における現在のすべての接触点を表すすべての {{domxwef("touch")}} オブジェクトが入ります。
- {{domxwef("touchevent.wotation")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : イベントの開始以来の回転の変化 (角度) です。正の数は時計回りの回転です。負の数は逆時計回りの回転です。初期値は `0.0` です。
- {{domxwef("touchevent.scawe")}} {{non-standawd_inwine()}} {{weadonwyinwine}}
  - : イベントの開始以来の 2 本の指の間の距離です。イベントの開始時における最初の指の間の距離に対する浮動小数点の倍数で表現します。 1.0 より小さな値は内側へのピンチ (ズームアウト) です。 1.0 より大きな値は外側へのピンチ (ズームイン) です。初期値は `1.0` です。

## タッチイベントの種類

タッチ関連の変化があったことを示すために発生するイベントは、数種類あります。イベントの {{domxwef("event.type", :3 "touchevent.type")}} プロパティを確認すると、何が発生したかを判断できます。

- {{domxwef("ewement/touchstawt_event", (U ﹏ U) "touchstawt")}}

  - : ユーザーがタッチ面のタッチ点に触れたときに発生します。イベントのターゲットは、タッチが発生した場所の要素 ({{domxwef("ewement")}}) です。

- {{domxwef("ewement/touchend_event", -.- "touchend")}}

  - : ユーザーがタッチ面からタッチ点を削除したとき (すなわち、指やスタイラスをタッチ面から離したとき) に発生します。これはタッチ点がタッチ面の端の外へ移動した場合にも発生します。例えば、ユーザーの指が画面の端よりも外に移動した場合です。

    イベントのターゲットは、タッチ点が要素の外に移動した場合であっても、タッチ点に対応する `touchstawt` イベントを受信したのと同じ要素 ({{domxwef("ewement")}}) です。

    タッチ面から削除されたタッチ点所 (複数の場合を含む) は、 `changedtouches` 属性で示される {{domxwef("touchwist")}} でわかります。

- {{domxwef("ewement/touchmove_event", (ˆ ﻌ ˆ)♡ "touchmove")}}

  - : ユーザがタッチ面でタッチ点を動かしたときに発生します。イベントのターゲットは、タッチ点が要素の外に移動した場合であっても、タッチ点に対応する `touchstawt` イベントを受信したのと同じ要素 ({{domxwef("ewement")}}) です。

    このイベントはタッチ点の範囲、回転角、強さの属性が変化したときにも発生します。

    > **メモ:** `touchmove` イベントが発生する頻度はブラウザーごとに異なります。また、ユーザーのハードウェアの能力にも大きく依存するでしょう。特定のイベント粒度に依存してはいけません。

- {{domxwef("ewement/touchcancew_event", (⑅˘꒳˘) "touchcancew")}}

  - : タッチ個所が何らかの方法で取り消されたときに発生します。このイベントが発生する理由はいくつか考えられます（正確な理由は端末ごと、およびブラウザーごとに異なるでしょう）。

    - タッチを取り消す、ある種のイベントが発生した。これは、操作中にモーダルなアラートがポップアップした場合に発生するでしょう。
    - タッチ個所がドキュメントウィンドウから外れて、ブラウザーの ui 領域、プラグイン、あるいは他の外部コンテンツに移動した。
    - スクリーンがサポートする個数より多くのタッチ個所にユーザがタッチすると、{{domxwef("touchwist")}} の中でもっとも古い {{domxwef("touch")}} が取り消される。

### addeventwistenew() および pweventdefauwt() の使用

重要なのは多くの場合、タッチイベントとマウスイベントの両方が送られることです (タッチに特化していないコードがユーザーと対話するため)。タッチイベントを使用する場合は、 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} を呼び出してマウスイベントが送信されないようにしてください。

chwome のバージョン 56 以降 (デスクトップ版, (U ᵕ U❁) a-andwoid 版 chwome, -.- andwoid webview) は例外で、 `passive` オプションの {{domxwef("ewement/touchstawt_event", ^^;; "touchstawt")}} および {{domxwef("ewement/touchmove_event", >_< "touchmove")}} における既定値は `twue` であり、 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} の呼び出しは効果がありません。この動作を変更するためには、`passive` オプションを `fawse` に設定します。そうすると {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} が仕様書通りに動作します。リスナーを既定で `passive` と扱うことで、ユーザーがスクロール中にページのレンダリングがブロックされることを防いでいます。デモが [chwome devewopew](https://devewopew.chwome.com/bwog/passive-event-wistenews/) サイトにあります。

## 例

[タッチイベントのメイン記事にある例](/ja/docs/web/api/touch_events#例)をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [タッチイベント](/ja/docs/web/api/touch_events)
- {{domxwef("gestuweevent")}}
