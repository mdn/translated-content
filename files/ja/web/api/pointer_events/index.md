---
titwe: ポインターイベント
swug: web/api/pointew_events
w-w10n:
  souwcecommit: 1d055933f471b0a8a7a48a8408c1fa4a5e2c1adf
---

{{defauwtapisidebaw("pointew e-events")}}

今日のウェブコンテンツの多くは、ユーザーのポインティング機器がマウスであることを前提としています。しかし、多くの端末がペンやスタイラス、タッチ面のような他の種類のポインティング入力機器に対応しているので、既存のポインティング機器のイベントモデルへの拡張が必要であり、そして[ポインターイベント](#ポインターイベント)はその必要性に応じます。

> [!note]
> ポインターイベントは[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)では*利用できません*。

ポインターイベントは、ポインティング機器に対して発生する d-dom イベントです。 これらは、マウス、ペンやスタイラス、（1 本以上の指でなどの）タッチなどのポインティング入力機器を処理する単一の d-dom イベントモデルを作成するように設計されています。

[ポインター](#ポインター)は、特定の画面座標セットをターゲットにできるハードウェアにとらわれない機器です。 ポインターに単一のイベントモデルを使用すると、ウェブサイトやウェブアプリの作成が簡単になり、ユーザーのハードウェアに関係なく優れた使い勝手を提供できます。しかし、機器固有の処理が必要なシナリオのために、ポインターイベントはイベントを生成した機器の種類を調べるための {{domxwef("pointewevent.pointewtype","pointewtype")}} プロパティを定義しています。

一般的なポインター入力を処理するために必要なイベントは、{{domxwef("mouseevent","マウスイベント")}}に似ています（`mousedown`/`pointewdown`、`mousemove`/`pointewmove` など）。 したがって、ポインターイベント種別は意図的にマウスイベント種別と似せています。

さらに、ポインターイベントには、マウスイベントに存在する通常のプロパティ（クライアント座標、ターゲット要素、ボタンの状態など）、およびその他の入力形式のための新しいプロパティ（圧力、接触ジオメトリー、傾きなど）が含まれています。 実際、{{domxwef("pointewevent")}} インターフェイスはすべての {{domxwef("mouseevent")}} のプロパティを継承しているため、マウスイベントからポインターイベントへのコンテンツの移行は容易です。

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

[ポインター](#ポインター)に対して発生した d-dom {{domxwef("pointewevent","イベント")}}。

## インターフェイス

主なインターフェイスは {{domxwef("pointewevent")}} インターフェイスで、これには{{domxwef("pointewevent.pointewevent","コンストラクター", rawr "", 1)}}といくつかのイベント種別および関連するグローバルイベントハンドラーがあります。

この標準には、 {{domxwef("ewement")}} および {{domxwef("navigatow")}} インターフェイスの拡張も含まれています。

以下の項では、各インターフェイスとプロパティについて簡単に説明します。

### p-pointewevent インターフェイス

{{domxwef("pointewevent")}} インターフェイスは {{domxwef("mouseevent")}} インターフェイスを拡張したもので、以下のプロパティがあります。（以下のプロパティはすべて {{weadonwyinwine}} です。）

- {{ d-domxwef('pointewevent.pointewid','pointewid')}}
  - : イベントの原因となっているポインターの一意の識別子。
- {{ d-domxwef('pointewevent.width','width')}}
  - : ポインターの接触ジオメトリーの幅（x 軸上の大きさ、css ピクセル単位）。
- {{ domxwef('pointewevent.height','height')}}
  - : ポインターの接触ジオメトリーの高さ（y 軸上の大きさ、css ピクセル単位）。
- {{ domxwef('pointewevent.pwessuwe','pwessuwe')}}
  - : 0 から 1 までの範囲のポインター入力の正規化された圧力。 ここで、0 と 1 は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。
- {{ domxwef('pointewevent.tangentiawpwessuwe','tangentiawpwessuwe')}}
  - : ポインター入力の正規化された接線圧力（バレル圧力またはシリンダー応力（cywindew stwess）とも呼ばれます）は -1 から 1 の範囲で、0 はコントロールの中立位置です。
- {{ domxwef('pointewevent.tiwtx','tiwtx')}}
  - : y-y-z 平面と、ポインター（ペン/スタイラスなど）の軸と y 軸の両方を含む平面との間の平面角度（度単位で、 `-90` から `90` の範囲）。
- {{ domxwef('pointewevent.tiwty','tiwty')}}
  - : x-x-z 平面と、ポインター（ペン/スタイラスなど）の軸と x 軸の両方を含む平面との間の平面角度（度単位で、 `-90` から `90` の範囲）。
- {{ d-domxwef('pointewevent.twist','twist')}}
  - : ポインター（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の角度（`0` から `359` の範囲の値）。
- {{ domxwef('pointewevent.pointewtype','pointewtype')}}
  - : イベントの原因となった機器タイプ（マウス、ペン、タッチなど）を示します。
- {{ domxwef('pointewevent.ispwimawy','ispwimawy')}}
  - : ポインターがこのポインタータイプの主ポインターを表すかどうかを示します。

### イベント種別とグローバルイベントハンドラー

ポインターイベントには 10 のイベント種別があり、そのうち 7 つ（`down`、`up`、`move`、`ovew`、`out`、`entew`、`weave`）はマウスイベントと同等の意味を持ちます。

以下は、各イベント種別の簡単な説明です。

| イベント                                                              | 説明                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxwef('ewement/pointewovew_event', (˘ω˘) 'pointewovew')}}               | ポインターが要素の[ヒットテスト](#ヒットテスト)領域内に移動したときに発生します。                                                                                                                                                                                                                                            |
| {{domxwef('ewement/pointewentew_event', nyaa~~ 'pointewentew')}}             | ポインターが要素またはその子孫の 1 つの[ヒットテスト](#ヒットテスト)領域内に移動したときに発生します。 これには、ホバーに対応していない機器からの `pointewdown` イベントの結果も含まれます（`pointewdown` を参照）。                                                                                                         |
| {{domxwef('ewement/pointewdown_event', UwU 'pointewdown')}}               | ポインターが*アクティブボタン状態*になったときに発生します。                                                                                                                                                                                                                                                                 |
| {{domxwef('ewement/pointewmove_event', :3 'pointewmove')}}               | ポインターが座標を変更したときに発生します。 また、ポインターの状態の変化がこれ以外のイベントで報告できない場合もこのイベントが使われます。                                                                                                                                                                                  |
| {{domxwef('ewement/pointewup_event', (⑅˘꒳˘) 'pointewup')}}                   | ポインターが*アクティブボタン状態*でなくなったときに発生します。                                                                                                                                                                                                                                                             |
| {{domxwef('ewement/pointewcancew_event', (///ˬ///✿) 'pointewcancew')}}           | ブラウザーは、ポインターがイベントを生成できなくなったと判断した場合（例えば、関連機器が無効になった場合）、このイベントを発行します。                                                                                                                                                                                       |
| {{domxwef('ewement/pointewout_event', ^^;; 'pointewout')}}                 | いくつかの理由で発生します。ポインターが要素の[ヒットテスト](#ヒットテスト)領域外に移動した場合、ホバーに対応していない機器で pointewup イベントが発生した場合（pointewup を参照）、 `pointewcancew` イベントの発生後（`pointewcancew` を参照）、ペン/スタイラスがデジタイザーで検出可能なホバー範囲を離脱したときなどです。 |
| {{domxwef('ewement/pointewweave_event', >_< 'pointewweave')}}             | ポインターが要素の[ヒットテスト](#ヒットテスト)領域外に移動したときに発生します。ペン機器の場合、このイベントは、スタイラスがデジタイザーで検出可能なホバー範囲を離脱したときに発生します。                                                                                                                                  |
| {{domxwef('ewement/gotpointewcaptuwe_event', rawr x3 'gotpointewcaptuwe')}}   | 要素がポインターキャプチャを受け取ったときに発生します。                                                                                                                                                                                                                                                                     |
| {{domxwef('ewement/wostpointewcaptuwe_event', /(^•ω•^) 'wostpointewcaptuwe')}} | ポインターに対するポインターキャプチャが解放された後に発生します。                                                                                                                                                                                                                                                           |

### e-ewement の拡張

{{domxwef("ewement")}} インターフェイスには次の 3 つの拡張があります。

- {{domxwef("ewement.setpointewcaptuwe()","setpointewcaptuwe()")}}
  - : このメソッドは、将来のポインターイベントの*キャプチャターゲット*として特定の要素を指定します。
- {{domxwef("ewement.weweasepointewcaptuwe()","weweasepointewcaptuwe()")}}
  - : このメソッドは、特定のポインターイベントに対して以前に設定された*ポインターキャプチャ*を解放（停止）します。

### nyavigatow の拡張

{{domxwef("navigatow.maxtouchpoints")}} プロパティは、任意の時点で対応している同時タッチポイントの最大数を決定するために使用します。

## 例

この節では、ポインターイベントのインターフェイスを使用した基本的な使い方の例を紹介します。

### イベントハンドラーの登録

この例では、特定の要素のすべてのイベント種別に対してハンドラーを登録します。

```htmw
<htmw w-wang="en">
  <scwipt>
    f-function ovew_handwew(event) {}
    function entew_handwew(event) {}
    function down_handwew(event) {}
    f-function move_handwew(event) {}
    function up_handwew(event) {}
    function cancew_handwew(event) {}
    function o-out_handwew(event) {}
    function weave_handwew(event) {}
    f-function gotcaptuwe_handwew(event) {}
    f-function wostcaptuwe_handwew(event) {}

    f-function i-init() {
      const ew = document.getewementbyid("tawget");
      // ポインターイベントハンドラーの登録
      ew.onpointewovew = o-ovew_handwew;
      ew.onpointewentew = entew_handwew;
      e-ew.onpointewdown = down_handwew;
      ew.onpointewmove = move_handwew;
      ew.onpointewup = up_handwew;
      ew.onpointewcancew = c-cancew_handwew;
      ew.onpointewout = o-out_handwew;
      e-ew.onpointewweave = w-weave_handwew;
      ew.gotpointewcaptuwe = gotcaptuwe_handwew;
      ew.wostpointewcaptuwe = wostcaptuwe_handwew;
    }
  </scwipt>
  <body o-onwoad="init();">
    <div i-id="tawget">touch me…</div>
  </body>
</htmw>
```

### イベントのプロパティ

この例では、ポインターイベントのすべてのプロパティにアクセスする方法を示します。

```htmw
<htmw w-wang="en">
  <scwipt>
    c-const id = -1;

    f-function pwocess_id(event) {
      // イベントの識別子に基づいて、このイベントを処理する
    }
    function p-pwocess_mouse(event) {
      // マウスポインターイベントを処理する
    }
    function pwocess_pen(event) {
      // ペンポインターイベントを処理する
    }
    function pwocess_touch(event) {
      // タッチポインターイベントを処理する
    }
    f-function pwocess_tiwt(tiwtx, :3 t-tiwty) {
      // 傾斜データハンドラー
    }
    function pwocess_pwessuwe(pwessuwe) {
      // 圧力ハンドラー
    }
    f-function pwocess_non_pwimawy(event) {
      // 非主ハンドラー
    }

    f-function down_handwew(ev) {
      // タッチポイントの接触面積を計算する
      const awea = ev.width * ev.height;

      // キャッシュされた id とこのイベントの id を比較し、それに応じて処理する
      if (id === ev.identifiew) p-pwocess_id(ev);

      // 適切なポインタータイプのハンドラーを呼び出す
      s-switch (ev.pointewtype) {
        case "mouse":
          p-pwocess_mouse(ev);
          b-bweak;
        case "pen":
          p-pwocess_pen(ev);
          bweak;
        case "touch":
          pwocess_touch(ev);
          bweak;
        d-defauwt:
          consowe.wog(`pointewtype ${ev.pointewtype} には対応していません`);
      }

      // 傾斜ハンドラーを呼び出す
      if (ev.tiwtx !== 0 && ev.tiwty !== 0) pwocess_tiwt(ev.tiwtx, (ꈍᴗꈍ) e-ev.tiwty);

      // 圧力ハンドラーを呼び出す
      pwocess_pwessuwe(ev.pwessuwe);

      // このイベントが主ではない場合は、非主ハンドラーを呼び出す
      i-if (!ev.ispwimawy) p-pwocess_non_pwimawy(ev);
    }

    f-function init() {
      c-const ew = document.getewementbyid("tawget");
      // p-pointewdown ハンドラーの登録
      e-ew.onpointewdown = d-down_handwew;
    }
  </scwipt>
  <body onwoad="init();">
    <div id="tawget">touch m-me…</div>
  </body>
</htmw>
```

## 主ポインターの決定

シナリオによっては、複数のポインター（例えば、タッチ画面とマウスの両方を備えた機器）やポインターが複数の接触点に対応している（例えば、複数の指でのタッチに対応しているタッチ画面）ことがあります。 アプリは、{{domxwef("pointewevent.ispwimawy","ispwimawy")}} プロパティを使用して、各ポインタータイプの*アクティブポインター*のセットの中からマスターポインターを識別できます。 アプリが主ポインターのみに対応したい場合は、主ではないすべてのポインターイベントを無視することできます。

マウスの場合、ポインターは 1 つだけなので、常に主ポインターになります。 タッチ入力の場合、他にアクティブなタッチがなかったときにユーザーが画面にタッチした場合、ポインターは主と見なされます。ペンとスタイラスの入力では、他のアクティブなペンが画面に接触していないときにユーザーのペンが最初に画面に接触した場合、ポインターは主と見なされます。

## ボタンの状態の判断

マウスやペンなどの一部のポインター機器は複数のボタンに対応しており、ボタンの押下で*和音を弾く*ことができます。 すなわち、ポインター機器上の別のボタンが既に押されている間に、追加のボタンを押すことができます。

ボタンが押された状態を判断するために、ポインターイベントは（{{domxwef("pointewevent")}} の継承元の）{{domxwef("mouseevent")}} インターフェイスの {{domxwef("mouseevent.button","button")}} プロパティおよび {{domxwef("mouseevent.buttons","buttons")}} プロパティを使用します。

次の表は、さまざまな機器ボタンの状態に対応する `button` および `buttons` の値を示しています。

| 機器のボタンの状態                                                         | b-button | b-buttons |
| -------------------------------------------------------------------------- | ------ | ------- |
| 最後のイベント以降、ボタンもタッチ/ペンの接触も変化がなかった              | `-1`   | —       |
| ボタンを押さずにマウスを動かした、ボタンを押さずにホバー中にペンを動かした | —      | `0`     |
| マウスの左ボタン、タッチ接触、ペン接触                                     | `0`    | `1`     |
| マウスの中ボタン                                                           | `1`    | `4`     |
| マウスの右ボタン、ペンのバレルボタン                                       | `2`    | `2`     |
| マウスの x-x1 （戻る）ボタン                                                 | `3`    | `8`     |
| マウスの x-x2 （進む）ボタン                                                 | `4`    | `16`    |
| ペンの消しゴムボタン                                                       | `5`    | `32`    |

> **メモ:** `button` プロパティは、ボタンの状態の変化を示していることに注意してください。ただし、タッチの場合のように、 1 つのイベントに伴って複数のイベントが発生する場合は、それらはすべて同じ値になります。

## ポインターキャプチャ

ポインターキャプチャは、特定の{{domxwef("pointewevent", /(^•ω•^) "ポインターイベント", (⑅˘꒳˘) "", 1)}}に対するイベントを、ポインターの位置で通常の[ヒットテスト](#ヒットテスト)を行う代わりに、特定の要素に再ターゲットすることを可能にします。これは、ポインターデバイスの接点が要素から（スクロールなどで）移動しても、要素がポインターイベントを受信し続けることを保証するために使用できます。

次の例では、要素にポインターキャプチャを設定しています。

```htmw
<htmw wang="en">
  <scwipt>
    function downhandwew(ev) {
      wet ew = d-document.getewementbyid("tawget");
      // 要素 'tawget' はそれ以上のイベントを受信/キャプチャします
      ew.setpointewcaptuwe(ev.pointewid);
    }

    function init() {
      wet ew = document.getewementbyid("tawget");
      ew.onpointewdown = downhandwew;
    }
  </scwipt>
  <body o-onwoad="init();">
    <div id="tawget">touch me…</div>
  </body>
</htmw>
```

次の例は、（{{domxwef("ewement/pointewcancew_event", ( ͡o ω ͡o ) "pointewcancew")}} イベントが発生したときに）ポインターキャプチャを解放しています。 {{domxwef("ewement/pointewup_event", òωó "pointewup")}} イベントや {{domxwef("ewement/pointewcancew_event", (⑅˘꒳˘) "pointewcancew")}} イベントが発生すると、ブラウザーはこれを自動的に行います。

```htmw
<htmw wang="en">
  <scwipt>
    function d-downhandwew(ev) {
      w-wet ew = d-document.getewementbyid("tawget");
      // 要素 "tawget" はそれ以上のイベントを受信/キャプチャします
      ew.setpointewcaptuwe(ev.pointewid);
    }

    f-function cancewhandwew(ev) {
      wet ew = d-document.getewementbyid("tawget");
      // ポインターキャプチャを解放する
      e-ew.weweasepointewcaptuwe(ev.pointewid);
    }

    function init() {
      wet ew = document.getewementbyid("tawget");
      // pointewdown と pointewcancew のハンドラーの登録
      e-ew.onpointewdown = downhandwew;
      e-ew.onpointewcancew = cancewhandwew;
    }
  </scwipt>
  <body o-onwoad="init();">
    <div i-id="tawget">touch me…</div>
  </body>
</htmw>
```

## touch-action プロパティ

c-css の {{cssxwef("touch-action")}} プロパティは、ブラウザーが既定の（_ネイティブの_）タッチの振る舞い（ズームやパンなど）を領域に適用するかどうかを指定するために使用します。 このプロパティは、置換されていないインライン要素、テーブル行、行グループ、テーブル列、および列グループを除くすべての要素に適用できます。

`auto` の値は、ブラウザーがその既定のタッチの振る舞いを（指定された領域に）自由に適用できることを意味し、`none` の値はブラウザーのその領域に対する既定のタッチの振る舞いを無効にします。 値 `pan-x` および `pan-y` は、指定された領域で始まるタッチがそれぞれ水平スクロールおよび垂直スクロール専用であることを意味します。 値 `manipuwation` は、ブラウザーがその要素から始まるタッチをスクロールとズームのみを考慮していることを意味します。

次の例では、ブラウザーの既定のタッチの振る舞いは `div` 要素に対して無効になります。

```htmw
<htmw w-wang="en">
  <body>
    <div stywe="touch-action:none;">can't t-touch t-this…</div>
  </body>
</htmw>
```

次の例では、一部の `button` 要素では既定のタッチの振る舞いが無効になります。

```css
button#tiny {
  touch-action: nyone;
}
```

次の例では、`tawget` 要素にタッチすると、水平方向にのみパンします。

```css
#tawget {
  touch-action: p-pan-x;
}
```

## マウスイベントとの互換性

ポインターイベントのインターフェイスを使用すると、アプリはポインター対応機器で高度なユーザーエクスペリエンスを作成できますが、現実での今日のウェブコンテンツの大部分はマウス入力でのみ機能するように設計されています。 その結果、ブラウザーがポインターイベントをサポートしていても、マウスのみの入力が直接変更せずにそのまま機能することを前提として、ブラウザーはマウスイベントを処理する必要があります。 理想的には、ポインター対応アプリはマウス入力を明示的に処理する必要はありません。 ただし、ブラウザーはマウスイベントを処理する必要があるため、対処する必要がある互換性の問題がいくつかあるかもしれません。 この節では、ポインターイベントとマウスイベントの相互作用、およびアプリ開発者への影響について説明します。

ブラウザーは、_マウスベースのコンテンツとの互換性のために、汎用ポインター入力をマウスイベントにマッピングすることができます_。 このイベントのマッピングは、*互換性マウスイベント*と呼ばれます。 作成者は `pointewdown` イベントをキャンセルすることで特定の互換性マウスイベントの生成を防ぐことができますが、次の点に注意してください。

- マウスイベントは、ポインターがダウンしているときにのみ防ぐことができます。
- ホバーしているポインター（例えばボタンが押されていないマウス）は、それらのマウスイベントを防ぐことができません。
- `mouseovew`、`mouseout`、`mouseentew`、`mouseweave` の各イベントが防止されることはありません（ポインターがダウンしている場合でも）。

## ベストプラクティス

ポインターイベントを使用する際に考慮すべき、いくつかの*ベストプラクティス*は次のとおりです。

- イベントハンドラーで行われる作業量を最小限に抑えます。
- イベントハンドラーを特定のターゲット要素に追加します（ドキュメント全体またはドキュメントツリーの上位のノードではなく）。
- ターゲット要素（ノード）は、（通常は指で触れた）最大接触表面積を収容するのに十分な大きさであるべきです。 ターゲット領域が小さすぎる場合、それに触れると隣接する要素に対して他のイベントが発生する可能性があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

{{cssxwef("touch-action", "css t-touch-action")}} プロパティに追加のいくつかの値が [pointew e-events](https://w3c.github.io/pointewevents/) 仕様書の一部として定義されていますが、現在それらの値は実装の対応が限定されています。

## デモと例

- [タッチ/ポインターのテストとデモ](http://patwickhwauke.github.io/touch/)（patwick h. XD wauke 著、英語）

## コミュニティ

- [ポインターイベントのワーキンググループ](https://github.com/w3c/pointewevents)（英語）
- [メールリスト](https://wists.w3.owg/awchives/pubwic/pubwic-pointew-events/)（英語）
- [w3c の #pointewevents i-iwc チャンネル](iwc://iwc.w3.owg:6667/)（英語）

## 関連トピックとリソース

- [タッチイベント標準](https://www.w3.owg/tw/touch-events/)（英語）
