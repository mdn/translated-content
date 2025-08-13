---
title: ポインターイベント
slug: Web/API/Pointer_events
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{DefaultAPISidebar("Pointer Events")}}

今日のウェブコンテンツの多くは、ユーザーのポインティング機器がマウスであることを前提としています。しかし、多くの端末がペンやスタイラス、タッチ面のような他の種類のポインティング入力機器に対応しているので、既存のポインティング機器のイベントモデルへの拡張が必要であり、そして[ポインターイベント](#ポインターイベント)はその必要性に応じます。

ポインターイベントは、ポインティング機器に対して発生する DOM イベントです。 これらは、マウス、ペンやスタイラス、（1 本以上の指でなどの）タッチなどのポインティング入力機器を処理する単一の DOM イベントモデルを作成するように設計されています。

[ポインター](#ポインター)は、特定の画面座標セットをターゲットにできるハードウェアにとらわれない機器です。 ポインターに単一のイベントモデルを使用すると、ウェブサイトやウェブアプリの作成が簡単になり、ユーザーのハードウェアに関係なく優れた使い勝手を提供できます。しかし、機器固有の処理が必要なシナリオのために、ポインターイベントはイベントを生成した機器の種類を調べるための {{domxref("PointerEvent.pointerType","pointerType")}} プロパティを定義しています。

一般的なポインター入力を処理するために必要なイベントは、{{domxref("MouseEvent","マウスイベント", "", 1)}}に似ています（`mousedown`/`pointerdown`、`mousemove`/`pointermove` など）。 したがって、ポインターイベント種別は意図的にマウスイベント種別と似せています。

さらに、ポインターイベントには、マウスイベントに存在する通常のプロパティ（クライアント座標、ターゲット要素、ボタンの状態など）、およびその他の入力形式のための新しいプロパティ（圧力、接触ジオメトリー、傾きなど）が含まれています。 実際、{{domxref("PointerEvent")}} インターフェイスはすべての {{domxref("MouseEvent")}} のプロパティを継承しているため、マウスイベントからポインターイベントへのコンテンツの移行は容易です。

## 用語

### アクティブボタン状態

[ポインター](#ポインター)が `buttons` プロパティに対してゼロ以外の値を持つ場合の条件。 例えば、ペンの場合は、ペンがデジタイザーと物理的に接触しているか、ホバー中に少なくとも 1 つのボタンが押されているときです。

### アクティブポインター

イベントを生成できる任意の[ポインター](#ポインター)の入力機器。 ポインターがそれ以上のイベントを生成する可能性がある場合、ポインターはアクティブと見なされます。 例えば、ペンが持ち上げられたり動かされたりすると追加のイベントが発生する可能性があるため、ペンがダウン状態であるとアクティブであると見なされます。

### デジタイザー

接触を検出できる表面を備えた検知機器。 最も一般的な検知機器は、ペン、スタイラス、または指などの入力機器からの入力を検知することができるタッチ対応画面です。 検知機器の中には、入力機器の近接を検出できるものもあり、その状態をマウスにならってホバーと表現します。

### ヒットテスト

ブラウザーがポインターイベントのターゲット要素を決定するために使用するプロセス。 通常、これはポインターの位置と、画面媒体上の文書内の要素の視覚的なレイアウトを考慮して決定されます。

### ポインター

画面上の特定の座標（または座標のセット）をターゲットにできる、入力機器のハードウェアにとらわれない表現。 ポインター入力機器の例としては、マウス、ペン/スタイラス、タッチ接触などがあります。

### ポインターキャプチャ

ポインターキャプチャでは、ポインターイベントをポインターの位置による通常のヒットテストの結果以外の特定の要素にターゲットしなおすことができます。例については[ポインターのキャプチャ](#ポインターのキャプチャ)を参照してください。

> [!NOTE]
> 「ポインターのキャプチャ」は、ポインターが領域から物理的に離れることを防止する[ポインターロック](/ja/docs/Web/API/Pointer_Lock_API)とは異なります。

### ポインターイベント

[ポインター](#ポインター)に対して発生した DOM {{domxref("PointerEvent","イベント", "", 1)}}です。

## インターフェイス

主なインターフェイスは {{domxref("PointerEvent")}} インターフェイスで、これには{{domxref("PointerEvent.PointerEvent","コンストラクター", "", 1)}}といくつかのイベント種別および関連するグローバルイベントハンドラーがあります。

この標準には、 {{domxref("Element")}} および {{domxref("Navigator")}} インターフェイスの拡張も含まれています。

以下の項では、各インターフェイスとプロパティについて簡単に説明します。

### PointerEvent インターフェイス

{{domxref("PointerEvent")}} インターフェイスは {{domxref("MouseEvent")}} インターフェイスを拡張したもので、以下のプロパティがあります。

- {{ domxref('PointerEvent.altitudeAngle', 'altitudeAngle')}} {{ReadOnlyInline}}
  - : トランスデューサー（ポインターまたはスタイラス）の軸と、端末の画面の X-Y 平面との角度を表します。
- {{ domxref('PointerEvent.azimuthAngle', 'azimuthAngle')}} {{ReadOnlyInline}}
  - : Y-Z 面と、トランスデューサー（ポインターまたはスタイラス）軸と Y 軸の両方を含む面の間の角度を表します。
- {{domxref('PointerEvent.persistentDeviceId')}} {{ReadOnlyInline}}
  - : `PointerEvent` を生成するポインティングデバイスの固有の識別子。
- {{ domxref('PointerEvent.pointerId','pointerId')}} {{ReadOnlyInline}}
  - : イベントの原因となっているポインターの一意の識別子。
- {{ domxref('PointerEvent.width','width')}} {{ReadOnlyInline}}
  - : ポインターの接触ジオメトリーの幅（X 軸上の大きさ、CSS ピクセル単位）。
- {{ domxref('PointerEvent.height','height')}} {{ReadOnlyInline}}
  - : ポインターの接触ジオメトリーの高さ（Y 軸上の大きさ、CSS ピクセル単位）。
- {{ domxref('PointerEvent.pressure','pressure')}} {{ReadOnlyInline}}
  - : 0 から 1 までの範囲のポインター入力の正規化された圧力。 ここで、0 と 1 は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。
- {{ domxref('PointerEvent.tangentialPressure','tangentialPressure')}} {{ReadOnlyInline}}
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（cylinder stress）とも呼ばれます）は -1 から 1 の範囲で、0 はコントロールの中立位置です。
- {{ domxref('PointerEvent.tiltX','tiltX')}} {{ReadOnlyInline}}
  - : Y-Z 平面と、ポインター（ペン/スタイラスなど）の軸と Y 軸の両方を含む平面との間の平面角度（度単位で、 `-90` から `90` の範囲）。
- {{ domxref('PointerEvent.tiltY','tiltY')}} {{ReadOnlyInline}}
  - : X-Z 平面と、ポインター（ペン/スタイラスなど）の軸と X 軸の両方を含む平面との間の平面角度（度単位で、 `-90` から `90` の範囲）。
- {{ domxref('PointerEvent.twist','twist')}} {{ReadOnlyInline}}
  - : ポインター（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の角度（`0` から `359` の範囲の値）。
- {{ domxref('PointerEvent.pointerType','pointerType')}} {{ReadOnlyInline}}
  - : イベントの原因となった機器タイプ（マウス、ペン、タッチなど）を示します。
- {{ domxref('PointerEvent.isPrimary','isPrimary')}} {{ReadOnlyInline}}
  - : ポインターがこのポインタータイプの主ポインターを表すかどうかを示します。

### イベント種別とグローバルイベントハンドラー

ポインターイベントには 10 のイベント種別があり、そのうち 7 つ（`down`、`up`、`move`、`over`、`out`、`enter`、`leave`）はマウスイベントと同等の意味を持ちます。

以下は、各イベント種別の簡単な説明です。

| イベント                                                                                  | 説明                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref('Element/pointerover_event', 'pointerover')}}                                   | ポインターが要素の[ヒットテスト](#ヒットテスト)領域内に移動したときに発生します。                                                                                                                                                                                                                                                                              |
| {{domxref('Element/pointerenter_event', 'pointerenter')}}                                 | ポインターが要素またはその子孫の 1 つの[ヒットテスト](#ヒットテスト)領域内に移動したときに発生します。 これには、ホバーに対応していない機器からの `pointerdown` イベントの結果も含まれます（`pointerdown` を参照）。                                                                                                                                           |
| {{domxref('Element/pointerdown_event', 'pointerdown')}}                                   | ポインターが*アクティブボタン状態*になったときに発生します。                                                                                                                                                                                                                                                                                                   |
| {{domxref('Element/pointermove_event', 'pointermove')}}                                   | ポインターが座標を変更したときに発生します。 また、ポインターの状態の変化がこれ以外のイベントで報告できない場合もこのイベントが使われます。                                                                                                                                                                                                                    |
| {{domxref('Element/pointerup_event', 'pointerup')}}                                       | ポインターが*アクティブボタン状態*でなくなったときに発生します。                                                                                                                                                                                                                                                                                               |
| {{domxref('Element/pointercancel_event', 'pointercancel')}}                               | ブラウザーは、ポインターがイベントを生成できなくなったと判断した場合（例えば、関連する機器が非アクティブにされた場合、またはブラウザーが操作をパン/ズームとして解釈することにした場合など）、このイベントを発行します。この動作を制御する方法の詳しい情報については、下記にある [CSS の `touch-action` プロパティの節](#touch-action_プロパティ)をご覧下さい。 |
| {{domxref('Element/pointerout_event', 'pointerout')}}                                     | いくつかの理由で発生します。ポインターが要素の[ヒットテスト](#ヒットテスト)領域外に移動した場合、ホバーに対応していない機器で pointerup イベントが発生した場合（pointerup を参照）、 `pointercancel` イベントの発生後（`pointercancel` を参照）、ペン/スタイラスがデジタイザーで検出可能なホバー範囲を離脱したときなどです。                                   |
| {{domxref('Element/pointerleave_event', 'pointerleave')}}                                 | ポインターが要素の[ヒットテスト](#ヒットテスト)領域外に移動したときに発生します。ペン機器の場合、このイベントは、スタイラスがデジタイザーで検出可能なホバー範囲を離脱したときに発生します。                                                                                                                                                                    |
| {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}} {{experimental_inline}} | ポインターが、`pointerdown` または `pointerup` イベントを発行しないプロパティを変更したときに発行されます。                                                                                                                                                                                                                                                    |
| {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}                       | 要素がポインターキャプチャを受け取ったときに発生します。                                                                                                                                                                                                                                                                                                       |
| {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}                     | ポインターに対するポインターキャプチャが解放された後に発生します。                                                                                                                                                                                                                                                                                             |

### Element の拡張

{{domxref("Element")}} インターフェイスには次の 3 つの拡張があります。

- {{domxref("Element.hasPointerCapture()","hasPointerCapture()")}}
  - : 指定されたポインター ID によって識別されるポインターのポインターキャプチャが、それを呼び出した要素に存在するかどうかを示します。
- {{domxref("Element.releasePointerCapture()","releasePointerCapture()")}}
  - : このメソッドは、特定のポインターイベントに対して以前に設定されたポインターキャプチャを解放（停止）します。
- {{domxref("Element.setPointerCapture()","setPointerCapture()")}}
  - : このメソッドは、将来のポインターイベントのキャプチャターゲットとして特定の要素を指定します。

### Navigator の拡張

{{domxref("Navigator.maxTouchPoints")}} プロパティは、任意の時点で対応している同時タッチポイントの最大数を決定するために使用します。

## 例

この節では、ポインターイベントのインターフェイスを使用した基本的な使い方の例を紹介します。

### イベントハンドラーの登録

この例では、特定の要素のすべてのイベント種別に対してハンドラーを登録します。

```html
<div id="target">タッチしてね</div>
```

```js
function over_handler(event) {}
function enter_handler(event) {}
function down_handler(event) {}
function move_handler(event) {}
function up_handler(event) {}
function cancel_handler(event) {}
function out_handler(event) {}
function leave_handler(event) {}
function rawUpdate_handler(event) {}
function gotCapture_handler(event) {}
function lostCapture_handler(event) {}

function init() {
  const el = document.getElementById("target");
  // ポインターイベントハンドラーの登録
  el.onpointerover = over_handler;
  el.onpointerenter = enter_handler;
  el.onpointerdown = down_handler;
  el.onpointermove = move_handler;
  el.onpointerup = up_handler;
  el.onpointercancel = cancel_handler;
  el.onpointerout = out_handler;
  el.onpointerleave = leave_handler;
  el.onpointerrawupdate = rawUpdate_handler;
  el.ongotpointercapture = gotCapture_handler;
  el.onlostpointercapture = lostCapture_handler;
}

document.addEventListener("DOMContentLoaded", init);
```

### イベントのプロパティ

この例では、ポインターイベントのすべてのプロパティにアクセスする方法を示します。

```html
<div id="target">タッチしてね</div>
```

```js
const id = -1;

function process_id(event) {
  // イベントの識別子に基づいて、このイベントを処理する
}
function process_mouse(event) {
  // マウスポインターイベントを処理する
}
function process_pen(event) {
  // ペンポインターイベントを処理する
}
function process_touch(event) {
  // タッチポインターイベントを処理する
}
function process_tilt(tiltX, tiltY) {
  // 傾斜データハンドラー
}
function process_pressure(pressure) {
  // 圧力ハンドラー
}
function process_non_primary(event) {
  // 非主ハンドラー
}

function down_handler(ev) {
  // タッチポイントの接触面積を計算する
  const area = ev.width * ev.height;

  // キャッシュされた id とこのイベントの id を比較し、それに応じて処理する
  if (id === ev.identifier) process_id(ev);

  // 適切なポインタータイプのハンドラーを呼び出す
  switch (ev.pointerType) {
    case "mouse":
      process_mouse(ev);
      break;
    case "pen":
      process_pen(ev);
      break;
    case "touch":
      process_touch(ev);
      break;
    default:
      console.log(`pointerType ${ev.pointerType} には対応していません`);
  }

  // 傾斜ハンドラーを呼び出す
  if (ev.tiltX !== 0 && ev.tiltY !== 0) process_tilt(ev.tiltX, ev.tiltY);

  // 圧力ハンドラーを呼び出す
  process_pressure(ev.pressure);

  // このイベントが主ではない場合は、非主ハンドラーを呼び出す
  if (!ev.isPrimary) process_non_primary(ev);
}

function init() {
  const el = document.getElementById("target");
  // pointerdown ハンドラーの登録
  el.onpointerdown = down_handler;
}

document.addEventListener("DOMContentLoaded", init);
```

## 主ポインターの決定

シナリオによっては、複数のポインター（例えば、タッチ画面とマウスの両方を備えた機器）やポインターが複数の接触点に対応している（例えば、複数の指でのタッチに対応しているタッチ画面）ことがあります。 アプリは、{{domxref("PointerEvent.isPrimary","isPrimary")}} プロパティを使用して、各ポインタータイプの*アクティブポインター*のセットの中からマスターポインターを識別できます。 アプリが主ポインターのみに対応したい場合は、主ではないすべてのポインターイベントを無視することできます。

マウスには 1 つしかポインターがないので、常に主ポインターになります。 タッチ入力の場合、他にアクティブなタッチがなかったときにユーザーが画面にタッチした場合、ポインターは主と見なされます。ペンとスタイラスの入力では、他のアクティブなペンが画面に接触していないときにユーザーのペンが最初に画面に接触した場合、ポインターは主と見なされます。

## ボタンの状態の判断

（マウスやペンなどの）一部のポインター機器は複数のボタンに対応しており、ボタンの押下で「和音を弾く」ことができます。すなわち、ポインター機器上の別のボタンが既に押されている間に、追加のボタンを押すことができます）。

ボタンが押された状態を判断するために、ポインターイベントは（{{domxref("PointerEvent")}} の継承元の）{{domxref("MouseEvent")}} インターフェイスの {{domxref("MouseEvent.button","button")}} プロパティおよび {{domxref("MouseEvent.buttons","buttons")}} プロパティを使用します。

次の表は、さまざまな機器ボタンの状態に対応する `button` および `buttons` の値を示しています。

| 機器のボタンの状態                                                         | button | buttons |
| -------------------------------------------------------------------------- | ------ | ------- |
| 最後のイベント以降、ボタンもタッチ/ペンの接触も変化がなかった              | `-1`   | —       |
| ボタンを押さずにマウスを動かした、ボタンを押さずにホバー中にペンを動かした | —      | `0`     |
| マウスの左ボタン、タッチ接触、ペン接触                                     | `0`    | `1`     |
| マウスの中ボタン                                                           | `1`    | `4`     |
| マウスの右ボタン、ペンのバレルボタン                                       | `2`    | `2`     |
| マウスの X1 （戻る）ボタン                                                 | `3`    | `8`     |
| マウスの X2 （進む）ボタン                                                 | `4`    | `16`    |
| ペンの消しゴムボタン                                                       | `5`    | `32`    |

> [!NOTE]
> `button` プロパティは、ボタンの状態の変化を示していることに注意してください。ただし、タッチの場合のように、 1 つのイベントに伴って複数のイベントが発生する場合は、それらはすべて同じ値になります。

## ポインターのキャプチャ

ポインターキャプチャは、特定の{{domxref("PointerEvent", "ポインターイベント", "", 1)}}に対するイベントを、ポインターの位置で通常の[ヒットテスト](#ヒットテスト)を行う代わりに、特定の要素に再ターゲットすることを可能にします。これは、ポインターデバイスの接点が要素から（スクロールやパンなどで）移動しても、要素がポインターイベントを受信し続けることを保証するために使用できます。

ポインターキャプチャ、対象が、その後のすべてのポインターイベントを、キャプチャ対象上で発生しているかのようにキャプチャすることを発生させます。したがって、このキャプチャが設定されている限り、`pointerover`、`pointerenter`、`pointerleave`、`pointerout` は **発行されません**。
[直接操作](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) を許可するタッチ画面ブラウザーでは、`pointerdown` イベントが発生すると、要素に対して [暗黙のポインターキャプチャ](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) が呼び出されます。この捕捉は、対象要素で {{domxref("element.releasePointerCapture")}} を呼んで手動で解除することができます。あるいは、`pointerup` または `pointercancel` イベントの後、暗黙的に解除されます。

> [!NOTE]
> DOM 内の要素を移動する必要がある場合は、`setPointerCapture()` がその要素の追跡を失わないように、**DOM の移動後** に `setPointerCapture()` を呼び出すようにしてください。たとえば、`Element.append()` を使用して要素を別の場所に移動する必要がある場合は、`Element.append()` を呼び出した後にのみ、その要素に対して `setPointerCapture()` を呼び出すようにしてください。

次の例では、要素にポインターキャプチャを設定しています。

```html
<div id="target">タッチしてね</div>
```

```js
function downHandler(ev) {
  const el = document.getElementById("target");
  // 要素 'target' はそれ以上のイベントを受信/キャプチャします
  el.setPointerCapture(ev.pointerId);
}

function init() {
  const el = document.getElementById("target");
  el.onpointerdown = downHandler;
}

document.addEventListener("DOMContentLoaded", init);
```

次の例は、（{{domxref("Element/pointercancel_event", "pointercancel")}} イベントが発生したときに）ポインターキャプチャを解放しています。 {{domxref("Element/pointerup_event", "pointerup")}} イベントや {{domxref("Element/pointercancel_event", "pointercancel")}} イベントが発生すると、ブラウザーはこれを自動的に行います。

```html
<div id="target">タッチしてね</div>
```

```js
function downHandler(ev) {
  let el = document.getElementById("target");
  // 要素 "target" はそれ以上のイベントを受信/キャプチャします
  el.setPointerCapture(ev.pointerId);
}

function cancelHandler(ev) {
  const el = document.getElementById("target");
  // ポインターキャプチャを解放する
  el.releasePointerCapture(ev.pointerId);
}

function init() {
  const el = document.getElementById("target");
  // pointerdown と pointercancel のハンドラーの登録
  el.onpointerdown = downHandler;
  el.onpointercancel = cancelHandler;
}

document.addEventListener("DOMContentLoaded", init);
```

## touch-action プロパティ

CSS の {{cssxref("touch-action")}} プロパティは、ブラウザーが既定の（_ネイティブの_）タッチの振る舞い（ズームやパンなど）を領域に適用するかどうかを指定するために使用します。 このプロパティは、置換されていないインライン要素、テーブル行、行グループ、テーブル列、および列グループを除くすべての要素に適用できます。

`auto` の値は、ブラウザーがその既定のタッチの振る舞いを（指定された領域に）自由に適用できることを意味し、`none` の値はブラウザーのその領域に対する既定のタッチの振る舞いを無効にします。 値 `pan-x` および `pan-y` は、指定された領域で始まるタッチがそれぞれ水平スクロールおよび垂直スクロール専用であることを意味します。 値 `manipulation` は、ブラウザーがその要素から始まるタッチをスクロールとズームのみを考慮していることを意味します。

次の例では、一部の `button` 要素では既定のタッチの振る舞いが無効になります。

```css
button#tiny {
  touch-action: none;
}
```

次の例では、`target` 要素にタッチすると、水平方向にのみパンします。

```css
#target {
  touch-action: pan-x;
}
```

## マウスイベントとの互換性

ポインターイベントのインターフェイスを使用すると、アプリはポインター対応機器で高度なユーザーエクスペリエンスを作成できますが、現実での今日のウェブコンテンツの大部分はマウス入力でのみ機能するように設計されています。 その結果、ブラウザーがポインターイベントをサポートしていても、マウスのみの入力が直接変更せずにそのまま機能することを前提として、ブラウザーはマウスイベントを処理する必要があります。 理想的には、ポインター対応アプリはマウス入力を明示的に処理する必要はありません。 ただし、ブラウザーはマウスイベントを処理する必要があるため、対処する必要がある互換性の問題がいくつかあるかもしれません。 この節では、ポインターイベントとマウスイベントの相互作用、およびアプリ開発者への影響について説明します。

ブラウザーは、_マウスベースのコンテンツとの互換性のために、汎用ポインター入力をマウスイベントにマッピングすることができます_。 このイベントのマッピングは、*互換性マウスイベント*と呼ばれます。 作成者は `pointerdown` イベントをキャンセルすることで特定の互換性マウスイベントの生成を防ぐことができますが、次の点に注意してください。

- マウスイベントは、ポインターがダウンしているときにのみ防ぐことができます。
- ホバーしているポインター（例えばボタンが押されていないマウス）は、それらのマウスイベントを防ぐことができません。
- `mouseover`、`mouseout`、`mouseenter`、`mouseleave` の各イベントが防止されることはありません（ポインターがダウンしている場合でも）。

## ベストプラクティス

ポインターイベントを使用する際に考慮すべき、いくつかの*ベストプラクティス*は次のとおりです。

- イベントハンドラーで行われる作業量を最小限に抑えます。
- イベントハンドラーを特定のターゲット要素に追加します（ドキュメント全体またはドキュメントツリーの上位のノードではなく）。
- ターゲット要素（ノード）は、（通常は指で触れた）最大接触表面積を収容するのに十分な大きさであるべきです。 ターゲット領域が小さすぎる場合、それに触れると隣接する要素に対して他のイベントが発生する可能性があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

CSS の {{cssxref("touch-action")}} プロパティに追加のいくつかの値が [Pointer Events](https://w3c.github.io/pointerevents/) 仕様書の一部として定義されていますが、現在それらの値は実装の対応が限定されています。

## 関連情報

- [タッチイベント](/ja/docs/Web/API/Touch_events)
- [Pointer Events Working Group](https://github.com/w3c/pointerevents)
- [Mail list](https://lists.w3.org/Archives/Public/public-pointer-events/)
- [W3C #pointerevents IRC channel](irc://irc.w3.org:6667/)
- [Touch/pointer tests and demos](https://patrickhlauke.github.io/touch/) (Patrick H. Lauke)
