---
title: タッチイベントの使用
slug: Web/API/Touch_events/Using_Touch_Events
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{DefaultAPISidebar("Touch Events")}}

今日、ほとんどのウェブコンテンツはキーボードとマウス入力用に設計されています。しかし、タッチ画面を備えた端末（特に携帯端末）が主流となっており、ウェブアプリケーションは{{domxref("Touch_events", "タッチイベント", "", 1)}}を用いることでタッチベースの入力を直接処理するか、アプリケーションが入力用に*解釈されたマウスイベント*を使用することができます。マウスイベントを使用することの欠点は、ユーザーによる同時入力に対応していないことです。一方、タッチイベントは複数の同時入力（タッチ面上の異なる場所での入力も可能）に対応しているため、ユーザーによる使い勝手を向上させることができます。

タッチイベントインターフェイスは、2本指ジェスチャのようなアプリケーション特有のシングルおよびマルチタッチ操作に対応します。マルチタッチ操作は、指（またはスタイラス）が最初に接触面に触れたときに始まります。他の指が続けて接触面に触れ、オプションで接触面を移動することもあります。この操作は、指がタッチ面から除去されると終わります。この操作中、アプリケーションは開始、移動、終わりの各フェーズでタッチイベントを受信します。アプリケーションはタッチ入力に自分自身で意味づけを適用することができます。

## インターフェイス

タッチイベントは、 3 つのインターフェイス（{{domxref("Touch")}}、{{domxref("TouchEvent")}}、{{domxref("TouchList")}}）と以下のイベント種別で構成されます。

- {{domxref("Element/touchstart_event", "touchstart")}} - タッチ面にタッチ点が配置されると発行されます。
- {{domxref("Element/touchmove_event", "touchmove")}} - タッチ点がタッチ面に沿って移動すると発行されます。
- {{domxref("Element/touchend_event", "touchend")}} - タッチ点がタッチ面から除去されると発行されます。
- {{domxref("Element/touchcancel_event", "touchcancel")}} - タッチ点が実装固有の方法で中断された場合に発行されます（例えば、作成されたタッチ点が多すぎる場合など）。

{{domxref("Touch")}} インターフェイスは、タッチ感応機器上の単一のタッチ点を表します。この接触点は通常タッチ点 (_touch point_) またはタッチ (_touch_) と呼ばれます。タッチは通常、タッチスクリーン、ペン、トラックパッド上の指やスタイラスによって生成されます。タッチ点の[プロパティ](/ja/docs/Web/API/Touch#インスタンスプロパティ)には、固有の識別子、タッチ点の対象要素、ビューポート、ページ、画面とタッチ点の相対関連の位置の _X_ および _Y_ 座標があります。

{{domxref("TouchList")}} インターフェイスはタッチ面の接触点のリストを表します。したがって、ユーザーが 1 本の指でタッチ面を操作した場合、リストには 1 つの項目が格納され、ユーザーが 3 本の指でタッチ面に触れた場合、リストの長さは 3 つになります。

{{domxref("TouchEvent")}} インターフェイスは、タッチ感応面との接触の状態が変化したときに送信されるイベントを表します。状態の変化とは、タッチ面との接触を始めること、タッチ面との接触を維持したままタッチ点を移動すること、タッチ点を離すこと、タッチイベントを取り消すことです。このインターフェイスの属性には、いくつかの修飾キー（<kbd>shift</kbd> キーなど）の状態と、次のタッチリストが含まれています。

- {{domxref("TouchEvent.touches","touches")}} - 現在画面上にあるすべてのタッチ点のリストです。
- {{domxref("TouchEvent.targetTouches","targetTouches")}} - ターゲット DOM 要素上のタッチ点のリストです。
- {{domxref("TouchEvent.changedTouches","changedTouches")}} - 関連するイベント種別に依存する項目を持つタッチ点のリストです。

  - {{domxref("Element/touchstart_event", "touchstart")}} イベントにおいては、現在のイベントでアクティブになったタッチ点のリストです。
  - {{domxref("Element/touchmove_event", "touchmove")}} イベントにおいては、前回のイベント以降に変更されたタッチ点のリストです。
  - {{domxref("Element/touchend_event", "touchend")}} イベントにおいては、表面から除去されたタッチ点のリスト（つまり、表面に触れなくなった指に対応するタッチ点の集合）です。

これらのインターフェイスは、比較的低レベルの機能集合を定義していますが、多指スワイプ、回転、ピンチ、ズームなどのおなじみのマルチタッチジェスチャーを含む、多くの種類のタッチベースの操作に対応しています。

## インターフェイスからジェスチャーへ

アプリケーションは、ジェスチャーの意味づけを定義する際に異なる要素を考慮することがあります。例えば、タッチ点が始めた位置からタッチが終わった位置までの移動距離です。例えば、タッチを始めてから終わるまでの経過時間や、ダブルタッ プジェスチャーを作成する意図通りに 2 回連続してタップする間の経過時間などです。スワイプの方向性（例えば左から右、右から左など）も考慮すべき要因の 1 つです。

アプリケーションが使用するタッチリストは、アプリケーションのジェスチャーの意味づけに依存します。例えば、アプリケーションが 1 つの要素における単一のタッチ（タップ）に対応している場合、 {{domxref("TouchEvent.targetTouches","targetTouches")}} リストを {{domxref("Element/touchstart_event", "touchstart")}} イベントハンドラーで使用して、アプリケーション固有の方法でタッチ点を処理します。アプリケーションが任意の 2 つのタッチ点について 2 本指スワイプに対応している場合、 {{domxref("TouchEvent.changedTouches","changedTouches")}} リストを {{domxref("Element/touchmove_event", "touchmove")}} イベントハンドラーで使用して、 2 つのタッチ点が移動したかどうかを判断し、アプリケーション固有の方法でそのジェスチャーの意味づけを実装します。

ブラウザーは通常、アクティブなタッチ点が単一の場合のみ、エミュレートされたマウスイベントとクリックイベントを配信します。 2 つ以上のアクティブなタッチ点を含むマルチタッチ操作では、通常、タッチイベントのみが生成されます。エミュレートされたマウスイベントが送信されないようにするには、タッチイベントハンドラーで {{domxref("Event.preventDefault()", "preventDefault()")}} メソッドを使用してください。マウスイベントとタッチイベントの対話操作に関する詳細情報は、 {{domxref("Pointer_events", "TouchEvent と MouseEvent の両方への対応", "", 1)}}を参照してください。

## 基本的な手順

この節では、上記のインターフェイスを使用する基本的な使い方を格納します。より詳しい例は{{domxref("Touch_events", "タッチイベントの概要", "", 1)}}を参照してください。

タッチイベントの種類ごとにイベントハンドラーを登録します。

```js
// タッチイベントのハンドラーを登録
someElement.addEventListener("touchstart", process_touchstart, false);
someElement.addEventListener("touchmove", process_touchmove, false);
someElement.addEventListener("touchcancel", process_touchcancel, false);
someElement.addEventListener("touchend", process_touchend, false);
```

アプリケーションのジェスチャー意味づけを実装するために、イベントハンドラーでイベントを処理します。

```js
// touchstart ハンドラー
function process_touchstart(ev) {
  // イベントのデータを使用して、適切なジェスチャーハンドラーに呼び出す
  switch (ev.touches.length) {
    case 1:
      handle_one_touch(ev);
      break;
    case 2:
      handle_two_touches(ev);
      break;
    case 3:
      handle_three_touches(ev);
      break;
    default:
      gesture_not_supported(ev);
      break;
  }
}
```

タッチ点の属性にアクセスします。

```js
// touchstart ハンドラーの作成
someElement.addEventListener(
  "touchstart",
  (ev) => {
    // この要素に対して有効化されたタッチ点を反復処理し、
    // 各イベントの 'target' を処理する
    for (let i = 0; i < ev.targetTouches.length; i++) {
      process_target(ev.targetTouches[i].target);
    }
  },
  false,
);
```

ブラウザーがエミュレートされたマウスイベントを処理しないようにします。

```js
// touchmove ハンドラー
function process_touchmove(ev) {
  // preventDefault() を呼び出すよう設定
  ev.preventDefault();
}
```

## ベストプラクティス

タッチイベントを使用する際に考慮すべきベストプラクティスをいくつか紹介します。

- タッチハンドラーで行う作業を最小限に抑えましょう。
- 文書全体や文書ツリー内の上位ノードではなく）固有の対象要素にタッチ点ハンドラーを追加しましょう。
- {{domxref("Element/touchmove_event", "touchmove")}}、{{domxref("Element/touchend_event", "touchend")}}、{{domxref("Element/touchcancel_event", "touchcancel")}} イベントハンドラーは {{domxref("Element/touchstart_event", "touchstart")}} 内で追加しましょう。
- 対象とするタッチ要素やノードは、指が触れるのに十分な大きさが必要です。対象領域が小さすぎる場合、タッチすると隣接する他の要素のイベントが発生する可能性があります。

## 実装と展開状況

[タッチイベントのブラウザ互換性データ](/ja/docs/Web/API/Touch_events#ブラウザーの互換性)によると、モバイルブラウザーのタッチイベント対応は相対的に広く、デスクトップブラウザーの対応は遅れていますが、追加実装は進行中です。

タッチ点の[タッチ領域](/ja/docs/Web/API/Touch#タッチ領域) - ユーザーとタッチ面の接触の領域 - に関するいくつかの新しい機能が標準化されつつあります。新しい機能には、タッチ点とタッチ面の接触面積を最も近く囲む楕円の半径 _X_ と _Y_ が含まれています。また、タッチ点の回転角度（記述されている楕円を何度回転させ、接触領域に配置するか）も標準化され、タッチ点にかかる圧力も標準化されています。

## ポインターイベントについて

新しい入力メカニズムが導入されると、キーイベント、マウスイベント、ペン/スタイラスイベント、タッチイベントなど、さまざまな入力イベントを処理するアプリケーションの複雑さが増します。この問題を解決するために、[ポインターイベント標準](https://www.w3.org/TR/pointerevents/)が、マウス、ペン、タッチ画面などを含む機器のハードウェアにとらわれないポインター入力を処理するためのイベントと関連のインターフェイスを定義しています。つまり、抽象的なポインターとして、指やペン/スタイラスの接触点または、マウスを表すことができる統一された入力モデルを作成します。[ポインターイベントの MDN 記事](/ja/docs/Web/API/Pointer_events)を参照してください。

ポインターはあらゆる入力機器からの入力を表すので、ポインターイベントモデルはアプリケーションの入力処理を単純化することができます。さらに、ポインターイベントの修理はマウスイベントの種類（例えば `pointerdown` や `pointerup`）ととても似ているので、ポインタイベントを処理するコードはマウスを処理するコードとよく似ます。

ブラウザーにおけるポインターイベントの実装状況は[比較的高く](https://caniuse.com/#search=pointer)、Chrome、Firefox、IE11、Edge は完全に実装しています。

## 例とデモ

以下のドキュメントでは、タッチイベントの使用方法について説明しており、例コードもあります。

- {{domxref("Touch_events","タッチイベントの概要", "", 1)}}
- [Implement Custom Gestures](https://web.dev/articles/add-touch-to-your-site)
- [Add touch screen support to your website (The easy way)](https://www.codicode.com/art/easy_way_to_add_touch_support_to_your_website.aspx)

タッチイベントのデモ:

- [Paint Program (by Rick Byers)](https://rbyers.github.io/paint.html)
- [Touch/pointer tests and demos (by Patrick H. Lauke)](https://patrickhlauke.github.io/touch/)

## コミュニティ

- [Touch Events Community Group](https://github.com/w3c/touch-events)
- [メーリングリスト](https://lists.w3.org/Archives/Public/public-touchevents/)
- [W3C #touchevents IRC channel](irc://irc.w3.org:6667/)

## 関連トピックとリソース

- [ポインターイベント標準](https://www.w3.org/TR/pointerevents/)
