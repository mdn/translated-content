---
title: ポインターイベント
slug: Web/API/Pointer_events
tags:
  - API
  - インターフェイス
  - Landing
  - 概要
  - ポインターイベント
  - ウェブ
  - イベント
translation_of: Web/API/Pointer_events
---
{{DefaultAPISidebar("Pointer Events")}}

今日のウェブコンテンツの多くは、ユーザーのポインティング機器がマウスであることを前提としています。しかし、多くの端末がペンやスタイラス、タッチ面のような他の種類のポインティング入力機器に対応しているので、既存のポインティング機器のイベントモデルへの拡張が必要であり、そして[ポインターイベント](#ポインターイベント)はその必要性に応じます。

> **Note:** ポインターイベントは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)では*利用できません*。

ポインターイベントは、ポインティング機器に対して発生する DOM イベントです。 これらは、マウス、ペンやスタイラス、（1 本以上の指でなどの）タッチなどのポインティング入力機器を処理する単一の DOM イベントモデルを作成するように設計されています。

 [ポインター](#ポインター)は、特定の画面座標セットをターゲットにできるハードウェアにとらわれない機器です。 ポインターに単一のイベントモデルを使用すると、ウェブサイトやウェブアプリの作成が簡単になり、ユーザーのハードウェアに関係なく優れた使い勝手を提供できます。しかし、機器固有の処理が必要なシナリオのために、ポインターイベントはイベントを生成した機器の種類を調べるための {{domxref("PointerEvent.pointerType","pointerType")}} プロパティを定義しています。

一般的なポインター入力を処理するために必要なイベントは、{{domxref("MouseEvent","マウスイベント")}}に似ています（`mousedown`/`pointerdown`、`mousemove`/`pointermove` など）。 したがって、ポインターイベント種別は意図的にマウスイベント種別と似せています。

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

ポインターキャプチャでは、ポインターイベントをポインターの位置による通常のヒットテストの結果以外の特定の要素にターゲットしなおすことができます。

### ポインターイベント

[ポインター](#ポインター)に対して発生した DOM {{domxref("PointerEvent","イベント")}}。

## インターフェイス

主なインターフェイスは {{domxref("PointerEvent")}} インターフェイスで、これには{{domxref("PointerEvent.PointerEvent","コンストラクター", "", 1)}}といくつかのイベント種別および関連するグローバルイベントハンドラーがあります。

この標準には、 {{domxref("Element")}} および {{domxref("Navigator")}} インターフェイスの拡張も含まれています。

以下の項では、各インターフェイスとプロパティについて簡単に説明します。

### PointerEvent インターフェイス

{{domxref("PointerEvent")}} インターフェイスは {{domxref("MouseEvent")}} インターフェイスを拡張したもので、以下のプロパティがあります。（以下のプロパティはすべて {{readonlyInline}} です。）

- {{ domxref('PointerEvent.pointerId','pointerId')}}
  - : イベントの原因となっているポインターの一意の識別子。
- {{ domxref('PointerEvent.width','width')}}
  - : ポインターの接触ジオメトリーの幅（X 軸上の大きさ、CSS ピクセル単位）。
- {{ domxref('PointerEvent.height','height')}}
  - : ポインターの接触ジオメトリーの高さ（Y 軸上の大きさ、CSS ピクセル単位）。
- {{ domxref('PointerEvent.pressure','pressure')}}
  - : 0 から 1 までの範囲のポインター入力の正規化された圧力。 ここで、0 と 1 は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。
- {{ domxref('PointerEvent.tangentialPressure','tangentialPressure')}}
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（cylinder stress）とも呼ばれます）は -1 から 1 の範囲で、0 はコントロールの中立位置です。
- {{ domxref('PointerEvent.tiltX','tiltX')}}
  - : Y-Z 平面と、ポインター（ペン/スタイラスなど）の軸と Y 軸の両方を含む平面との間の平面角度（度単位で、 `-90` から `90` の範囲）。
- {{ domxref('PointerEvent.tiltY','tiltY')}}
  - : X-Z 平面と、ポインター（ペン/スタイラスなど）の軸と X 軸の両方を含む平面との間の平面角度（度単位で、 `-90` から `90` の範囲）。
- {{ domxref('PointerEvent.twist','twist')}}
  - : ポインター（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の角度（`0` から `359` の範囲の値）。
- {{ domxref('PointerEvent.pointerType','pointerType')}}
  - : イベントの原因となった機器タイプ（マウス、ペン、タッチなど）を示します。
- {{ domxref('PointerEvent.isPrimary','isPrimary')}}
  - : ポインターがこのポインタータイプの主ポインターを表すかどうかを示します。

### イベント種別とグローバルイベントハンドラー

ポインターイベントには 10​ ​のイベント種別があり、そのうち 7 つ（`down`、`up`、`move`、`over`、`out`、`enter`、`leave`）はマウスイベントと同等の意味を持ちます。

以下は、各イベント種別とそれに関連する{{domxref("GlobalEventHandlers","グローバルイベントハンドラー", "", 1)}}の簡単な説明です。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">イベント</th>
      <th scope="col">On イベントハンドラー</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref('HTMLElement/pointerover_event', 'pointerover')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerover','onpointerover')}}
      </td>
      <td>
        ポインターが要素の<a href="#ヒットテスト">ヒットテスト</a>境界内に移動したときに発生します。
      </td>
    </tr>
    <tr>
      <td>{{domxref('HTMLElement/pointerenter_event', 'pointerenter')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerenter','onpointerenter')}}
      </td>
      <td>
        ポインターが要素またはその子孫の 1 つの<a href="#ヒットテスト">ヒットテスト</a>境界内に移動したときに発生します。 これには、ホバーに対応していない機器からの <code>pointerdown</code> イベントの結果も含まれます（<code>pointerdown</code> を参照）。
      </td>
    </tr>
    <tr>
      <td>{{domxref('HTMLElement/pointerdown_event', 'pointerdown')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerdown','onpointerdown')}}
      </td>
      <td>ポインターが<em>アクティブボタン状態</em>になったときに発生します。</td>
    </tr>
    <tr>
      <td>{{domxref('HTMLElement/pointermove_event', 'pointermove')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointermove','onpointermove')}}
      </td>
      <td>
        ポインターが座標を変更したときに発生します。 また、ポインターの状態の変化がこれ以外のイベントで報告できない場合もこのイベントが使われます。
      </td>
    </tr>
    <tr>
      <td>{{domxref('HTMLElement/pointerup_event', 'pointerup')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerup','onpointerup')}}
      </td>
      <td>ポインターが<em>アクティブボタン状態</em>でなくなったときに発生します。</td>
    </tr>
    <tr>
      <td>{{domxref('HTMLElement/pointercancel_event', 'pointercancel')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointercancel','onpointercancel')}}
      </td>
      <td>
        ブラウザーは、ポインターがイベントを生成できなくなったと判断した場合（例えば、関連機器が無効になった場合）、このイベントを発行します。
      </td>
    </tr>
    <tr>
      <td>{{domxref('HTMLElement/pointerout_event', 'pointerout')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerout','onpointerout')}}
      </td>
      <td>
        いくつかの理由で発生します。ポインターが要素の<a href="#ヒットテスト">ヒットテスト</a>境界外に移動した場合、ホバーに対応していない機器で pointerup イベントが発生した場合（pointerup を参照）、 <code>pointercancel</code> イベントの発生後（<code>pointercancel</code> を参照）、ペン/スタイラスがデジタイザーで検出可能なホバー範囲を離脱したときなどです。
      </td>
    </tr>
    <tr>
      <td>{{domxref('HTMLElement/pointerleave_event', 'pointerleave')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onpointerleave','onpointerleave')}}
      </td>
      <td>
        ポインターが要素の<a href="#ヒットテスト">ヒットテスト</a>境界外に移動したときに発生します。ペン機器の場合、このイベントは、スタイラスがデジタイザーで検出可能なホバー範囲を離脱したときに発生します。
      </td>
    </tr>
    <tr>
      <td>{{domxref('HTMLElement/gotpointercapture_event', 'gotpointercapture')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.ongotpointercapture','ongotpointercapture')}}
      </td>
      <td>要素がポインターキャプチャを受け取ったときに発生します。</td>
    </tr>
    <tr>
      <td>{{domxref('HTMLElement/lostpointercapture_event', 'lostpointercapture')}}</td>
      <td>
        {{domxref('GlobalEventHandlers.onlostpointercapture','onlostpointercapture')}}
      </td>
      <td>ポインターに対するポインターキャプチャが解放された後に発生します。</td>
    </tr>
  </tbody>
</table>

### Element の拡張

{{domxref("Element")}} インターフェイスには次の 3 つの拡張があります。

- {{domxref("Element.setPointerCapture()","setPointerCapture()")}}
  - : このメソッドは、将来のポインターイベントの*キャプチャターゲット*として特定の要素を指定します。
- {{domxref("Element.releasePointerCapture()","releasePointerCapture()")}}
  - : このメソッドは、特定のポインターイベントに対して以前に設定された*ポインターキャプチャ*を解放（停止）します。

### Navigator の拡張

{{domxref("Navigator.maxTouchPoints")}} プロパティは、任意の時点で対応している同時タッチポイントの最大数を決定するために使用します。

## 例

この節では、ポインターイベントのインターフェイスを使用した基本的な使い方の例を紹介します。

### イベントハンドラーの登録

この例では、特定の要素のすべてのイベント種別に対してハンドラーを登録します。

```html
<html>
  <script>
    function over_handler(event) { }
    function enter_handler(event) { }
    function down_handler(event) { }
    function move_handler(event) { }
    function up_handler(event) { }
    function cancel_handler(event) { }
    function out_handler(event) { }
    function leave_handler(event) { }
    function gotcapture_handler(event) { }
    function lostcapture_handler(event) { }

    function init() {
      var el=document.getElementById("target");
      // ポインターイベントハンドラーの登録
      el.onpointerover = over_handler;
      el.onpointerenter = enter_handler;
      el.onpointerdown = down_handler;
      el.onpointermove = move_handler;
      el.onpointerup = up_handler;
      el.onpointercancel = cancel_handler;
      el.onpointerout = out_handler;
      el.onpointerleave = leave_handler;
      el.gotpointercapture = gotcapture_handler;
      el.lostpointercapture = lostcapture_handler;
    }
  </script>
  <body onload="init();">
    <div id="target"> Touch me ... </div>
  </body>
</html>
```

### イベントのプロパティ

この例では、ポインターイベントのすべてのプロパティにアクセスする方法を示します。

```html
<html>
  <script>
    var id = -1;

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
      var area = ev.width * ev.height;

      // キャッシュされた id とこのイベントの id を比較し、それに応じて処理する
      if (id == ev.identifier) process_id(ev);

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
          console.log("pointerType " + ev.pointerType + " には対応していません");
      }

      // 傾斜ハンドラーを呼び出す
      if (ev.tiltX != 0 && ev.tiltY != 0) process_tilt(ev.tiltX, ev.tiltY);

      // 圧力ハンドラーを呼び出す
      process_pressure(ev.pressure);

      // このイベントが主ではない場合は、非主ハンドラーを呼び出す
      if (!ev.isPrimary) process_non_primary(ev);
    }

    function init() {
      var el=document.getElementById("target");
      // pointerdown ハンドラーの登録
      el.onpointerdown = down_handler;
    }
  </script>
  <body onload="init();">
    <div id="target"> Touch me ... </div>
  </body>
</html>
```

## 主ポインターの決定

シナリオによっては、複数のポインター（例えば、タッチ画面とマウスの両方を備えた機器）やポインターが複数の接触点に対応している（例えば、複数の指でのタッチに対応しているタッチ画面）ことがあります。 アプリは、{{domxref("PointerEvent.isPrimary","isPrimary")}} プロパティを使用して、各ポインタータイプの*アクティブポインター*のセットの中からマスターポインターを識別できます。 アプリが主ポインターのみに対応したい場合は、主ではないすべてのポインターイベントを無視することできます。

マウスの場合、ポインターは 1 つだけなので、常に主ポインターになります。 タッチ入力の場合、他にアクティブなタッチがなかったときにユーザーが画面にタッチした場合、ポインターは主と見なされます。ペンとスタイラスの入力では、他のアクティブなペンが画面に接触していないときにユーザーのペンが最初に画面に接触した場合、ポインターは主と見なされます。

## ボタンの状態の判断

マウスやペンなどの一部のポインター機器は複数のボタンに対応しており、ボタンの押下で*和音を弾く*ことができます。 すなわち、ポインター機器上の別のボタンが既に押されている間に、追加のボタンを押すことができます。

ボタンが押された状態を判断するために、ポインターイベントは（{{domxref("PointerEvent")}} の継承元の）{{domxref("MouseEvent")}} インターフェイスの {{domxref("MouseEvent.button","button")}} プロパティおよび {{domxref("MouseEvent.buttons","buttons")}} プロパティを使用します。

次の表は、さまざまな機器ボタンの状態に対応する `button` および `buttons` の値を示しています。

| 機器のボタンの状態                                                                  | button | buttons |
| ------------------------------------------------------------------------------------ | ------ | ------- |
| 最後のイベント以降、ボタンもタッチ/ペンの接触も変化がなかった                       | `-1`   | —       |
| ボタンを押さずにマウスを動かした、ボタンを押さずにホバー中にペンを動かした | —      | `0`     |
| マウスの左ボタン、タッチ接触、ペン接触                                               | `0`    | `1`     |
| マウスの中ボタン                                                                         | `1`    | `4`     |
| マウスの右ボタン、ペンのバレルボタン                                                       | `2`    | `2`     |
| マウスの X1 （戻る）ボタン                                                                       | `3`    | `8`     |
| マウスの X2 （進む）ボタン                                                                   | `4`    | `16`    |
| ペンの消しゴムボタン                                                                    | `5`    | `32`    |

> **Note:** `button` プロパティは、ボタンの状態の変化を示していることに注意してください。ただし、タッチの場合のように、 1 つのイベントに伴って複数のイベントが発生する場合は、それらはすべて同じ値になります。

## ポインターキャプチャ

ポインターキャプチャは、特定の{{domxref("PointerEvent", "ポインターイベント", "", 1)}}に対するイベントを、ポインターの位置で通常の[ヒットテスト](#ヒットテスト)を行う代わりに、特定の要素に再ターゲットすることを可能にします。これは、ポインターデバイスの接点が要素から（スクロールなどで）移動しても、要素がポインターイベントを受信し続けることを保証するために使用できます。

次の例では、要素にポインターキャプチャを設定しています。

```html
<html>
<script>
  function downHandler(ev) {
    let el = document.getElementById("target");
    // 要素 'target' はそれ以上のイベントを受信/キャプチャします
    el.setPointerCapture(ev.pointerId);
  }

  function init() {
    let el = document.getElementById("target");
    el.onpointerdown = downHandler;
  }
</script>
<body onload="init();">
  <div id="target"> Touch me ... </div>
</body>
</html>
```

次の例は、（{{domxref("HTMLElement/pointercancel_event", "pointercancel")}} イベントが発生したときに）ポインターキャプチャを解放しています。 {{domxref("HTMLElement/pointerup_event", "pointerup")}} イベントや {{domxref("HTMLElement/pointercancel_event", "pointercancel")}} イベントが発生すると、ブラウザーはこれを自動的に行います。

```html
<html>
  <script>
    function downHandler(ev) {
      let el = document.getElementById("target");
      // 要素 "target" はそれ以上のイベントを受信/キャプチャします
      el.setPointerCapture(ev.pointerId);
    }

    function cancelHandler(ev) {
      let el = document.getElementById("target");
      // ポインターキャプチャを解放する
      el.releasePointerCapture(ev.pointerId);
    }

    function init() {
      let el = document.getElementById("target");
      // pointerdown と pointercancel のハンドラーの登録
      el.onpointerdown = downHandler;
      el.onpointercancel = cancelHandler;
    }
  </script>
  <body onload="init();">
    <div id="target"> Touch me ... </div>
  </body>
</html>
```

## touch-action プロパティ

CSS の {{cssxref("touch-action")}} プロパティは、ブラウザーが既定の（*ネイティブの）タッチの振る舞い（ズームやパンなど）を領域に適用するかどうかを指定するために使用します。 このプロパティは、置換されていないインライン要素、テーブル行、行グループ、テーブル列、および列グループを除くすべての要素に適用できます。

`auto` の値は、ブラウザーがその既定のタッチの振る舞いを（指定された領域に）自由に適用できることを意味し、`none` の値はブラウザーのその領域に対する既定のタッチの振る舞いを無効にします。 値 `pan-x` および `pan-y` は、指定された領域で始まるタッチがそれぞれ水平スクロールおよび垂直スクロール専用であることを意味します。 値 `manipulation` は、ブラウザーがその要素から始まるタッチをスクロールとズームのみを考慮していることを意味します。

次の例では、ブラウザーの既定のタッチの振る舞いは `div` 要素に対して無効になります。

```html
<html>
  <body>
    <div style="touch-action:none;">Can't touch this ... </div>
  </body>
</html>
```

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

ブラウザーは、*マウスベースのコンテンツとの互換性のために、汎用ポインター入力をマウスイベントにマッピングすることができます*。 このイベントのマッピングは、*互換性マウスイベント*と呼ばれます。 作成者は `pointerdown` イベントをキャンセルすることで特定の互換性マウスイベントの生成を防ぐことができますが、次の点に注意してください。

- マウスイベントは、ポインターがダウンしているときにのみ防ぐことができます。
- ホバーしているポインター（例えばボタンが押されていないマウス）は、それらのマウスイベントを防ぐことができません。
- `mouseover`、`mouseout`、`mouseenter`、`mouseleave` の各イベントが防止されることはありません（ポインターがダウンしている場合でも）。

## ベストプラクティス

ポインターイベントを使用する際に考慮すべき、いくつかの*ベストプラクティス*は次のとおりです。

- イベントハンドラーで行われる作業量を最小限に抑えます。
- イベントハンドラーを特定のターゲット要素に追加します（ドキュメント全体またはドキュメントツリーの上位のノードではなく）。
- ターゲット要素（ノード）は、（通常は指で触れた）最大接触表面積を収容するのに十分な大きさであるべきです。 ターゲット領域が小さすぎる場合、それに触れると隣接する要素に対して他のイベントが発生する可能性があります。

## 仕様書

| 仕様書                                          |
| ------------------------------------------------------ |
| [Pointer Events](https://w3c.github.io/pointerevents/) |

## ブラウザーの互換性

{{Compat("api.PointerEvent")}}

{{cssxref("touch-action", "CSS touch-action")}} プロパティにいくつかの新しい値が {{SpecName('Pointer Events 3')}} 仕様の一部として定義されていますが、現在それらの新しい値は実装のサポートが限定されています。

## デモと例

- [タッチ/ポインターのテストとデモ](http://patrickhlauke.github.io/touch/)（Patrick H. Lauke 著、英語）

## コミュニティ

- [ポインターイベントのワーキンググループ](https://github.com/w3c/pointerevents)（英語）
- [メールリスト](https://lists.w3.org/Archives/Public/public-pointer-events/)（英語）
- [W3C の #pointerevents IRC チャンネル](irc://irc.w3.org:6667/)（英語）

## 関連トピックとリソース

- [タッチイベント標準](https://www.w3.org/TR/touch-events/)（英語）
