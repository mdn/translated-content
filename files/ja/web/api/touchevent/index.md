---
title: TouchEvent
slug: Web/API/TouchEvent
---

{{APIRef("Touch Events")}}

**`TouchEvent`** インターフェイスは、タッチ感応面への接触状態が変化したときに発生する {{domxref("UIEvent")}} を表します。この面は、例えばタッチ画面やトラックパッドです。このイベントは画面との 1 か所以上の接触を表すことが可能であり、また接触個所の移動、増加、減少などに対応することができます。

タッチは {{domxref("Touch")}} オブジェクトで表されます。それぞれのタッチで位置、大きさと形状、圧力の量、対象要素を示します。タッチのリストは {{domxref("TouchList")}} オブジェクトで表されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("TouchEvent.TouchEvent", "TouchEvent()")}}
  - : `TouchEvent` オブジェクトを生成します。

## プロパティ

_このインターフェイスは、親である {{domxref("UIEvent")}} および {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("TouchEvent.altKey")}} {{readonlyInline}}
  - : タッチイベントが発生したときに alt キーが押下されていたかを示す論理値です。
- {{domxref("TouchEvent.changedTouches")}} {{readonlyInline}}
  - : {{domxref("TouchList")}} で、前回のタッチイベントと今回との間に接触状態が変化したそれぞれの接触点を表すすべての {{domxref("Touch")}} オブジェクトです。
- {{domxref("TouchEvent.ctrlKey")}} {{readonlyInline}}
  - : タッチイベントが発生したときに control キーが押下されていたかを示す論理値です。
- {{domxref("TouchEvent.metaKey")}} {{readonlyInline}}
  - : タッチイベントが発生したときに meta キーが押下されていたかを示す論理値です。
- {{domxref("TouchEvent.shiftKey")}} {{readonlyInline}}
  - : タッチイベントが発生したときに shift キーが押下されていたかを示す論理値です。
- {{domxref("TouchEvent.targetTouches")}}{{readonlyInline}}
  - : 現在タッチ面に接触している、**かつ**イベントのターゲットと同じ要素でタッチを始めた {{domxref("Touch")}} オブジェクトすべてで構成される {{domxref("TouchList")}} です。
- {{domxref("TouchEvent.touches")}} {{readonlyInline}}
  - : {{domxref("TouchList")}} で、対象や状態の変化にかかわらず、この面における現在のすべての接触点を表すすべての {{domxref("Touch")}} オブジェクトが入ります。
- {{domxref("TouchEvent.rotation")}} {{non-standard_inline()}} {{readonlyInline}}
  - : イベントの開始以来の回転の変化 (角度) です。正の数は時計回りの回転です。負の数は逆時計回りの回転です。初期値は `0.0` です。
- {{domxref("TouchEvent.scale")}} {{non-standard_inline()}} {{readonlyInline}}
  - : イベントの開始以来の 2 本の指の間の距離です。イベントの開始時における最初の指の間の距離に対する浮動小数点の倍数で表現します。 1.0 より小さな値は内側へのピンチ (ズームアウト) です。 1.0 より大きな値は外側へのピンチ (ズームイン) です。初期値は `1.0` です。

## タッチイベントの種類

タッチ関連の変化があったことを示すために発生するイベントは、数種類あります。イベントの {{domxref("event.type", "TouchEvent.type")}} プロパティを確認すると、何が発生したかを判断できます。

### {{domxref("Element/touchstart_event", "touchstart")}}

ユーザーがタッチ面のタッチ点に触れたときに発生します。イベントのターゲットは、タッチが発生した場所の要素 ({{domxref("Element")}}) です。

### {{domxref("Element/touchend_event", "touchend")}}

ユーザーがタッチ面からタッチ点を削除したとき (すなわち、指やスタイラスをタッチ面から離したとき) に発生します。これはタッチ点がタッチ面の端の外へ移動した場合にも発生します。例えば、ユーザーの指が画面の端よりも外に移動した場合です。

イベントのターゲットは、タッチ点が要素の外に移動した場合であっても、タッチ点に対応する `touchstart` イベントを受信したのと同じ要素 ({{domxref("Element")}}) です。

タッチ面から削除されたタッチ点所 (複数の場合を含む) は、 `changedTouches` 属性で示される {{domxref("TouchList")}} でわかります。

### {{domxref("Element/touchmove_event", "touchmove")}}

ユーザがタッチ面でタッチ点を動かしたときに発生します。イベントのターゲットは、タッチ点が要素の外に移動した場合であっても、タッチ点に対応する `touchstart` イベントを受信したのと同じ要素 ({{domxref("Element")}}) です。

このイベントはタッチ点の範囲、回転角、強さの属性が変化したときにも発生します。

> **メモ:** `touchmove` イベントが発生する頻度はブラウザーごとに異なります。また、ユーザーのハードウェアの能力にも大きく依存するでしょう。特定のイベント粒度に依存してはいけません。

### {{domxref("Element/touchcancel_event", "touchcancel")}}

タッチ個所が何らかの方法で取り消されたときに発生します。このイベントが発生する理由はいくつか考えられます (正確な理由はデバイスごと、およびブラウザごとに異なるでしょう):

- タッチを取り消す、ある種のイベントが発生した。これは、操作中にモーダルなアラートがポップアップした場合に発生するでしょう。
- タッチ個所がドキュメントウィンドウから外れて、ブラウザの UI 領域、プラグイン、あるいは他の外部コンテンツに移動した。
- スクリーンがサポートする個数より多くのタッチ個所にユーザがタッチすると、{{domxref("TouchList")}} の中でもっとも古い {{domxref("Touch")}} が取り消される。

### addEventListener() および preventDefault() の使用

重要なのは多くの場合、タッチイベントとマウスイベントの両方が送られることです (タッチに特化していないコードがユーザーと対話するため)。タッチイベントを使用する場合は、 {{domxref("Event.preventDefault","preventDefault()")}} を呼び出してマウスイベントが送信されないようにしてください。

Chrome のバージョン 56 以降 (デスクトップ版, Android 版 Chrome, Android WebView) は例外で、 `passive` オプションの {{domxref("Element/touchstart_event", "touchstart")}} および {{domxref("Element/touchmove_event", "touchmove")}} における既定値は `true` であり、 {{domxref("Event.preventDefault","preventDefault()")}} の呼び出しは効果がありません。この動作を変更するためには、`passive` オプションを `false` に設定します。そうすると {{domxref("Event.preventDefault","preventDefault()")}} が仕様書通りに動作します。リスナーを既定で `passive` と扱うことで、ユーザーがスクロール中にページのレンダリングがブロックされることを防いでいます。デモが [Google Developer](https://developers.google.com/web/updates/2016/06/passive-event-listeners) サイトにあります。

## GlobalEventHandlers

{{domxref("GlobalEventHandlers")}} ミックスインは以下のイベントをグローバルイベントとして定義しており、 DOM 中のユーザーと対話できるあらゆる要素で利用できます。

- {{domxref("GlobalEventHandlers.ontouchstart")}} {{experimental_inline}}
  - : {{domxref("Element/touchstart_event", "touchstart")}} イベントの {{domxref("GlobalEventHandlers","グローバルイベントハンドラー", "", 1)}}。
- {{domxref("GlobalEventHandlers.ontouchend")}} {{experimental_inline}}
  - : {{domxref("Element/touchend_event", "touchend")}} イベントの {{domxref("GlobalEventHandlers","グローバルイベントハンドラー", "", 1)}}。
- {{domxref("GlobalEventHandlers.ontouchmove")}} {{experimental_inline}}
  - : {{domxref("Element/touchmove_event", "touchmove")}} イベントの {{domxref("GlobalEventHandlers","グローバルイベントハンドラー", "", 1)}}。
- {{domxref("GlobalEventHandlers.ontouchcancel")}} {{experimental_inline}}
  - : {{domxref("Element/touchcancel_event", "touchcancel")}} イベントの {{domxref("GlobalEventHandlers","グローバルイベントハンドラー", "", 1)}}。

## 例

[タッチイベントのメイン記事にある例](/ja/docs/Web/API/Touch_events#Example)をご覧ください。

## 仕様書

| 仕様書                                                                                       | 状態                                 | 備考                                                                                        |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| {{SpecName('Touch Events 2','#touchevent-interface', 'TouchEvent')}} | {{Spec2('Touch Events 2')}} | グローバル属性ハンドラーの `ontouchstart`, `ontouchend`, `ontouchmove`, `ontouchend` を追加 |
| {{SpecName('Touch Events', '#touchevent-interface', 'TouchEvent')}}     | {{Spec2('Touch Events')}}     | 初回定義                                                                                    |

## ブラウザーの互換性

{{Compat("api.TouchEvent")}}

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- {{domxref("GestureEvent")}}
- {{domxref("MSGestureEvent")}}
