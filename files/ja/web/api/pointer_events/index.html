---
title: Pointer events
slug: Web/API/Pointer_events
tags:
  - API
  - Landing
  - Overview
  - Pointer Events
translation_of: Web/API/Pointer_events
---
<p>{{DefaultAPISidebar("Pointer Events")}}</p>

<p><span class="seoSummary">今日のウェブコンテンツの多くは、ユーザーのポインティングデバイスがマウスであることを前提としています。 しかしながら、多くのデバイスがペン/スタイラスおよびタッチ面のような他のタイプのポインティング入力デバイスをサポートしているので、既存のポインティングデバイスのイベントモデルへの拡張が必要であり、そして<em><a href="#term_pointer_event">ポインタイベント</a></em>はその必要性に対処します。</span></p>

<p>ポインタイベントは、ポインティングデバイスに対して発生する DOM イベントです。 これらは、マウス、ペン/スタイラス、（1本以上の指でなどの）タッチなどのポインティング入力デバイスを処理する単一の DOM イベントモデルを作成するように設計されています。 <em><a href="#term_pointer">ポインタ</a></em>は、特定の画面座標セットをターゲットにできるハードウェアにとらわれないデバイスです。 ポインタに単一のイベントモデルを使用すると、ウェブサイトやウェブアプリの作成が簡単になり、ユーザーのハードウェアに関係なく優れたユーザーエクスペリエンスを提供できます。 しかしながら、デバイス固有の処理が必要なシナリオのために、ポインタイベントはイベントを生成したデバイスタイプを調べるための {{domxref("PointerEvent.pointerType","pointerType")}} プロパティを定義しています。</p>

<p>一般的なポインタ入力を処理するために必要なイベントは、{{domxref("MouseEvent","マウスイベント")}}に似ています（<code>mousedown/pointerdown</code>、<code>mousemove/pointermove</code> など）。 したがって、ポインタイベントタイプは意図的にマウスイベントタイプと似せています。 さらに、ポインタイベントには、マウスイベントに存在する通常のプロパティ（クライアント座標、ターゲット要素、ボタンの状態など）、およびその他の入力形式のための新しいプロパティ（圧力、接触ジオメトリ、傾きなど）が含まれています。 実際、{{domxref("PointerEvent")}} インターフェイスはすべての {{domxref("MouseEvent")}} のプロパティを継承するため、マウスイベントからポインタイベントへのコンテンツの移行が容易になります。</p>

<h2 id="Terminology" name="Terminology">用語</h2>

<dl>
 <dt>アクティブボタン状態（active buttons state）</dt>
 <dd><em><a href="#term_pointer">ポインタ</a></em>が <code>buttons</code> プロパティに対してゼロ以外の値を持つ場合の条件。 例えば、ペンの場合は、ペンがデジタイザと物理的に接触しているか、ホバー中に少なくとも1つのボタンが押されているときです。</dd>
 <dt>アクティブポインタ（active pointer）</dt>
 <dd>イベントを生成できる任意の<em><a href="#term_pointer">ポインタ</a></em>入力デバイス。 ポインタがそれ以上のイベントを生成する可能性がある場合、ポインタはアクティブと見なされます。 例えば、ペンが持ち上げられたり動かされたりすると追加のイベントが発生する可能性があるため、ペンがダウン状態であるとアクティブであると見なされます。</dd>
 <dt id="term_digitizer">デジタイザ（digitizer）</dt>
 <dd>接触を検出できる表面を備えた検知デバイス。 最も一般的な検知デバイスは、ペン、スタイラス、または指などの入力デバイスからの入力を検知することができるタッチ対応画面です。 検知デバイスの中には、入力デバイスの近接を検出できるものもあり、その状態をマウスにならってホバーと表現します。</dd>
 <dt id="term_hit_test">ヒットテスト（hit test）</dt>
 <dd>ブラウザーがポインタイベントのターゲット要素を決定するために使用するプロセス。 通常、これはポインタの位置と、画面媒体上のドキュメント内の要素の視覚的なレイアウトを考慮して決定されます。</dd>
 <dt id="term_pointer">ポインタ（pointer）</dt>
 <dd>画面上の特定の座標（または座標のセット）をターゲットにできる、入力デバイスのハードウェアにとらわれない表現。 <em>ポインタ</em>入力デバイスの例は、マウス、ペン/スタイラス、およびタッチ接触です。</dd>
 <dt>ポインタキャプチャ（pointer capture）</dt>
 <dd>ポインタキャプチャでは、ポインタイベントをポインタの位置による通常のヒットテストの結果以外の特定の要素にターゲットしなおすことができます。</dd>
 <dt id="term_pointer_event">ポインタイベント（pointer event）</dt>
 <dd><em><a href="#term_pointer">ポインタ</a></em>に対して発生した DOM {{domxref("PointerEvent","イベント")}}。</dd>
</dl>

<h2 id="Interfaces" name="Interfaces">インターフェイス</h2>

<p>主なインターフェイスは、{{domxref("PointerEvent.PointerEvent","コンストラクタ")}}といくつかのイベントタイプおよび関連するグローバルイベントハンドラを持つ {{domxref("PointerEvent")}} インターフェイスです。 この標準には、{{domxref("Element")}} インターフェイスと {{domxref("Navigator")}} インターフェイスの拡張も含まれています。 以下のサブセクションでは、各インターフェイスとプロパティについて簡単に説明します。</p>

<h3 id="PointerEvent_interface" name="PointerEvent_interface">PointerEvent インターフェイス</h3>

<p>{{domxref("PointerEvent")}} インターフェイスは、{{domxref("MouseEvent")}} インターフェイスを拡張したもので、次のプロパティがあります（それらはすべて{{readonlyInline}}です）。</p>

<ul>
 <li>{{ domxref('PointerEvent.pointerId','pointerId')}} - イベントの原因となっているポインタの一意の識別子。</li>
 <li>{{ domxref('PointerEvent.width','width')}} - ポインタの接触ジオメトリの幅（X 軸上の大きさ、CSS ピクセル単位）。</li>
 <li>{{ domxref('PointerEvent.height','height')}} - ポインタの接触ジオメトリの高さ（Y 軸上の大きさ、CSS ピクセル単位）。</li>
 <li>{{ domxref('PointerEvent.pressure','pressure')}} - 0 から 1 までの範囲のポインタ入力の正規化された圧力。 ここで、0 と 1 は、それぞれハードウェアが検出できる最小圧力と最大圧力を表します。</li>
 <li>{{ domxref('PointerEvent.tangentialPressure','tangentialPressure')}} - ポインタ入力の正規化された接線圧力（バレル圧力またはシリンダー応力（cylinder stress）とも呼ばれます）は -1 から 1 の範囲で、0 はコントロールの中立位置です。</li>
 <li>{{ domxref('PointerEvent.tiltX','tiltX')}} - Y-Z 平面と、ポインタ（ペン/スタイラスなど）の軸と Y 軸の両方を含む平面との間の平面角度（度単位で、-90 から 90 の範囲）。</li>
 <li>{{ domxref('PointerEvent.tiltY','tiltY')}} - X-Z 平面と、ポインタ（ペン/スタイラスなど）の軸と X 軸の両方を含む平面との間の平面角度（度単位で、-90 から 90 の範囲）。</li>
 <li>{{ domxref('PointerEvent.twist','twist')}} - ポインタ（ペン/スタイラスなど）の長軸を中心とした時計回りの回転の度数（0 から 359の範囲の値）。</li>
 <li>{{ domxref('PointerEvent.pointerType','pointerType')}} - イベントの原因となったデバイスタイプ（マウス、ペン、タッチなど）を示します。</li>
 <li>{{ domxref('PointerEvent.isPrimary','isPrimary')}} - ポインタがこのポインタタイプのプライマリポインタを表すかどうかを示します。</li>
</ul>

<h3 id="Event_types_and_Global_Event_Handlers" name="Event_types_and_Global_Event_Handlers">イベントタイプとグローバルイベントハンドラ</h3>

<p>ポインタイベントには10​​のイベントタイプがあり、そのうち7つはマウスイベントと同等の意味を持ちます（ダウン（<code>down</code>）、アップ（<code>up</code>）、移動（<code>move</code>）、オーバー（<code>over</code>）、アウト（<code>out</code>）、進入（<code>enter</code>）、離脱（<code>leave</code>））。 以下は、各イベントタイプとそれに関連する{{domxref("GlobalEventHandlers","グローバルイベントハンドラ")}}の簡単な説明です。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">イベント</th>
   <th scope="col">イベントハンドラ</th>
   <th scope="col">説明</th>
  </tr>
  <tr>
   <td>{{event('pointerover')}}</td>
   <td>{{domxref('GlobalEventHandlers.onpointerover','onpointerover')}}</td>
   <td>ポインタが要素の<a href="#term_hit_test">ヒットテスト</a>境界内に移動したときに発生します。</td>
  </tr>
  <tr>
   <td>{{event('pointerenter')}}</td>
   <td>{{domxref('GlobalEventHandlers.onpointerenter','onpointerenter')}}</td>
   <td>ポインタが要素またはその子孫の1つの<a href="#term_hit_test">ヒットテスト</a>境界内に移動したときに発生します。 これには、ホバーをサポートしていないデバイスからの <code>pointerdown</code> イベントの結果も含まれます（<code>pointerdown</code> を参照）。</td>
  </tr>
  <tr>
   <td>{{event('pointerdown')}}</td>
   <td>{{domxref('GlobalEventHandlers.onpointerdown','onpointerdown')}}</td>
   <td>ポインタが<em>アクティブボタン状態</em>になったときに発生します。</td>
  </tr>
  <tr>
   <td>{{event('pointermove')}}</td>
   <td>{{domxref('GlobalEventHandlers.onpointermove','onpointermove')}}</td>
   <td>ポインタが座標を変更したときに発生します。 また、ポインタの状態の変化がこれ以外のイベントで報告できない場合もこのイベントが使われます。</td>
  </tr>
  <tr>
   <td>{{event('pointerup')}}</td>
   <td>{{domxref('GlobalEventHandlers.onpointerup','onpointerup')}}</td>
   <td>ポインタが<em>アクティブボタン状態</em>でなくなったときに発生します。</td>
  </tr>
  <tr>
   <td>{{event('pointercancel')}}</td>
   <td>{{domxref('GlobalEventHandlers.onpointercancel','onpointercancel')}}</td>
   <td>ブラウザーは、ポインタがイベントを生成できなくなったと判断した場合（例えば、関連デバイスが無効になった場合）、このイベントを発生させます。</td>
  </tr>
  <tr>
   <td>{{event('pointerout')}}</td>
   <td>{{domxref('GlobalEventHandlers.onpointerout','onpointerout')}}</td>
   <td>次のようないくつかの理由で発生します。 ポインタが要素の<a href="#term_hit_test">ヒットテスト</a>境界外に移動した。 ホバーをサポートしていないデバイスの <code>pointerup</code> イベントが発生した（<code>pointerup</code> を参照）。 <code>pointercancel</code> イベントの発生後（<code>pointercancel</code> を参照）。 ペン/スタイラスがデジタイザで検出可能なホバー範囲を離脱したとき。</td>
  </tr>
  <tr>
   <td>{{event('pointerleave')}}</td>
   <td>{{domxref('GlobalEventHandlers.onpointerleave','onpointerleave')}}</td>
   <td>ポインタが要素の<a href="#term_hit_test">ヒットテスト</a>境界外に移動したときに発生します。 ペンデバイスの場合、このイベントは、スタイラスがデジタイザで検出可能なホバー範囲を離脱したときに発生します。</td>
  </tr>
  <tr>
   <td>{{event('gotpointercapture')}}</td>
   <td>{{domxref('GlobalEventHandlers.ongotpointercapture','ongotpointercapture')}}</td>
   <td>要素がポインタキャプチャを受け取ったときに発生します。</td>
  </tr>
  <tr>
   <td>{{event('lostpointercapture')}}</td>
   <td>{{domxref('GlobalEventHandlers.onlostpointercapture','onlostpointercapture')}}</td>
   <td>ポインタに対するポインタキャプチャが解放された後に発生します。</td>
  </tr>
 </tbody>
</table>

<h3 id="Element_extensions" name="Element_extensions">Element の拡張</h3>

<p>{{domxref("Element")}} インターフェイスには次の3つの拡張機能があります。</p>

<ul>
 <li>{{domxref("Element.setPointerCapture()","setPointerCapture()")}} - このメソッドは、将来のポインタイベントの<em>キャプチャターゲット</em>として特定の要素を指定します。</li>
 <li>{{domxref("Element.releasePointerCapture()","releasePointerCapture()")}} - このメソッドは、特定のポインタイベントに対して以前に設定された<em>ポインタキャプチャ</em>を解放（停止）します。</li>
</ul>

<h3 id="Navigator_extension" name="Navigator_extension">Navigator の拡張</h3>

<p>{{domxref("Navigator.maxTouchPoints")}} プロパティは、任意の時点でサポートしている同時タッチポイントの最大数を決定するために使用します。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>このセクションでは、ポインタイベントのインターフェイスを使用した基本的な使い方の例を紹介します。</p>

<h3 id="Registering_event_handlers" name="Registering_event_handlers">イベントハンドラの登録</h3>

<p>この例では、特定の要素のすべてのイベントタイプに対してハンドラを登録します。</p>

<pre class="brush: html">&lt;html&gt;
  &lt;script&gt;
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
      // ポインタイベントハンドラの登録
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
  &lt;/script&gt;
  &lt;body onload="init();"&gt;
    &lt;div id="target"&gt; Touch me ... &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<h3 id="Event_properties" name="Event_properties">イベントのプロパティ</h3>

<p>この例では、タッチイベントのすべてのプロパティにアクセスする方法を示します。</p>

<pre class="brush: html">&lt;html&gt;
  &lt;script&gt;
    var id = -1;

    function process_id(event) {
      // イベントの識別子に基づいて、このイベントを処理する
    }
    function process_mouse(event) {
      // マウスポインタイベントを処理する
    }
    function process_pen(event) {
      // ペンポインタイベントを処理する
    }
    function process_touch(event) {
      // タッチポインタイベントを処理する
    }
    function process_tilt(tiltX, tiltY) {
      // 傾斜データハンドラ
    }
    function process_pressure(pressure) {
      // 圧力ハンドラ
    }
    function process_non_primary(event) {
      // 非プライマリハンドラ
    }

    function down_handler(ev) {
      // タッチポイントの接触面積を計算する
      var area = ev.width * ev.height;

      // キャッシュされた id とこのイベントの id を比較し、それに応じて処理する
      if (id == ev.identifier) process_id(ev);

      // 適切なポインタタイプのハンドラを呼び出す
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
          console.log("pointerType " + ev.pointerType + " はサポートしていません");
      }

      // 傾斜ハンドラを呼び出す
      if (ev.tiltX != 0 &amp;&amp; ev.tiltY != 0) process_tilt(ev.tiltX, ev.tiltY);

      // 圧力ハンドラを呼び出す
      process_pressure(ev.pressure);

      // このイベントがプライマリではない場合は、非プライマリハンドラを呼び出す
      if (!ev.isPrimary) process_non_primary(ev);
    }

    function init() {
      var el=document.getElementById("target");
      // pointerdown ハンドラの登録
      el.onpointerdown = down_handler;
    }
  &lt;/script&gt;
  &lt;body onload="init();"&gt;
    &lt;div id="target"&gt; Touch me ... &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Determining_the_Primary_Pointer" name="Determining_the_Primary_Pointer">プライマリポインタの決定</h2>

<p>シナリオによっては、複数のポインタ（例えば、タッチ画面とマウスの両方を備えたデバイス）やポインタが複数の接触点をサポートする（例えば、複数の指でのタッチをサポートするタッチ画面）ことがあります。 アプリは、{{domxref("PointerEvent.isPrimary","isPrimary")}} プロパティを使用して、各ポインタタイプの<em>アクティブポインタ</em>のセットの中からマスターポインタを識別できます。 アプリがプライマリポインタのみをサポートしたい場合は、プライマリではないすべてのポインタイベントを無視できます。</p>

<p>マウスの場合、ポインタは1つだけなので、常にプライマリポインタになります。 タッチ入力の場合、他にアクティブなタッチがなかったときにユーザーが画面にタッチした場合、ポインタはプライマリと見なされます。 ペンとスタイラスの入力では、他のアクティブなペンが画面に接触していないときにユーザーのペンが最初に画面に接触した場合、ポインタはプライマリと見なされます。</p>

<h2 id="Determining_button_states" name="Determining_button_states">ボタンの状態の判断</h2>

<p>マウスやペンなどの一部のポインタデバイスは複数のボタンをサポートしており、ボタンの押下で<em>和音を弾く</em>ことができます。 すなわち、ポインタデバイス上の別のボタンが既に押されている間に、追加のボタンを押すことができます。 ボタンが押された状態を判断するために、ポインタイベントは（{{domxref("PointerEvent")}} の継承元の）{{domxref("MouseEvent")}} インターフェイスの {{domxref("MouseEvent.button","button")}} プロパティおよび {{domxref("MouseEvent.buttons","buttons")}} プロパティを使用します。 次の表は、さまざまなデバイスボタンの状態に対応する <code>button</code> および <code>buttons</code> の値を示しています。</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">デバイスボタンの状態</th>
   <th scope="col">button</th>
   <th scope="col">buttons</th>
  </tr>
  <tr>
   <td>最後のイベント以降、ボタンもタッチ/ペンの接触も変更されませんでした</td>
   <td>-1</td>
   <td>—</td>
  </tr>
  <tr>
   <td>ボタンを押さずにマウスを動かした、ボタンを押さずにホバー中にペンを動かした</td>
   <td>—</td>
   <td>0</td>
  </tr>
  <tr>
   <td>左マウス、タッチ接触、ペン接触</td>
   <td>0</td>
   <td>1</td>
  </tr>
  <tr>
   <td>中マウス</td>
   <td>1</td>
   <td>4</td>
  </tr>
  <tr>
   <td>右マウス、ペンのバレルボタン</td>
   <td>2</td>
   <td>2</td>
  </tr>
  <tr>
   <td>X1（戻る）マウス</td>
   <td>3</td>
   <td>8</td>
  </tr>
  <tr>
   <td>X2（進む）マウス</td>
   <td>4</td>
   <td>16</td>
  </tr>
  <tr>
   <td>ペンの消しゴムボタン</td>
   <td>5</td>
   <td>32</td>
  </tr>
 </tbody>
</table>

<div class="blockIndicator note">
<p><code>button</code> プロパティは、ボタンの状態の変化を示していることに注意してください。 ただし、タッチの場合のように、1つのイベントに伴って複数のイベントが発生する場合は、それらはすべて同じ値になります。</p>
</div>

<h2 id="Pointer_capture" name="Pointer_capture">ポインタキャプチャ</h2>

<p>ポインタキャプチャでは、ポインタの位置での通常の<a href="#term_hit_test">ヒットテスト</a>ではなく、特定の{{domxref("PointerEvent","ポインタイベント")}}のイベントを特定の要素にターゲットしなおすことができます。 これは、ポインタデバイスの接触が要素から外れた場合でも、要素がポインタイベントを受信し続けるようにするために使用できます（例えば、スクロールで）。</p>

<p>次の例では、要素にポインタキャプチャを設定しています。</p>

<pre class="brush: html">&lt;html&gt;
&lt;script&gt;
  function downHandler(ev) {
    var el=document.getElementById("target");
    // 要素 'target' はそれ以上のイベントを受信/キャプチャします
    el.setPointerCapture(ev.pointerId);
  }

  function init() {
    var el=document.getElementById("target");
    el.onpointerdown = downHandler;
  }
&lt;/script&gt;
&lt;body onload="init();"&gt;
  &lt;div id="target"&gt; Touch me ... &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<p>次の例は、（{{event("pointercancel")}} イベントが発生したときに）ポインタキャプチャを解放しています。 {{event("pointerup")}} イベントや {{event("pointercancel")}} イベントが発生すると、ブラウザーはこれを自動的に行います。</p>

<pre class="brush: html">&lt;html&gt;
  &lt;script&gt;
    function downHandler(ev) {
      var el=document.getElementById("target");
      // 要素 "target" はそれ以上のイベントを受信/キャプチャします
      el.setPointerCapture(ev.pointerId);
    }

    function cancelHandler(ev) {
      var el=document.getElementById("target");
      // ポインタキャプチャを解放する
      el.releasePointerCapture(ev.pointerId);
    }

    function init() {
      var el=document.getElementById("target");
      // pointerdown と pointercancel のハンドラの登録
      el.onpointerdown = downHandler;
      el.onpointercancel = cancelHandler;
    }
  &lt;/script&gt;
  &lt;body onload="init();"&gt;
    &lt;div id="target"&gt; Touch me ... &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="touch-action_property" name="touch-action_property">touch-action プロパティ</h2>

<p>{{cssxref("touch-action")}} CSS プロパティは、ブラウザーがデフォルトの（<em>ネイティブな</em>）タッチの振る舞い（ズームやパンなど）を領域に適用するかどうかを指定するために使用します。 このプロパティは、置換されていないインライン要素、テーブル行、行グループ、テーブル列、および列グループを除くすべての要素に適用できます。</p>

<p><code>auto</code> の値は、ブラウザーがそのデフォルトのタッチの振る舞いを（指定された領域に）自由に適用できることを意味し、<code>none</code> の値はブラウザーのその領域に対するデフォルトのタッチの振る舞いを無効にします。 値 <code>pan-x</code> および <code>pan-y</code> は、指定された領域で始まるタッチがそれぞれ水平スクロールおよび垂直スクロール専用であることを意味します。 値 <code>manipulation</code> は、ブラウザーがその要素から始まるタッチをスクロールとズームのみを考慮していることを意味します。</p>

<p>次の例では、ブラウザーのデフォルトのタッチの振る舞いは <code>div</code> 要素に対して無効になります。</p>

<pre class="brush: html">&lt;html&gt;
  &lt;body&gt;
    &lt;div style="touch-action:none;"&gt;Can't touch this ... &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>次の例では、一部の <code>button</code> 要素ではデフォルトのタッチの振る舞いが無効になります。</p>

<pre class="brush: css">button#tiny {
  touch-action: none;
}
</pre>

<p>次の例では、<code>target</code> 要素にタッチすると、水平方向にのみパンします。</p>

<pre class="brush: css">#target {
  touch-action: pan-x;
}
</pre>

<h2 id="Compatibility_with_mouse_events" name="Compatibility_with_mouse_events">マウスイベントとの互換性</h2>

<p>ポインタイベントのインターフェイスを使用すると、アプリはポインタ対応デバイスで高度なユーザーエクスペリエンスを作成できますが、現実での今日のウェブコンテンツの大部分はマウス入力でのみ機能するように設計されています。 その結果、ブラウザーがポインタイベントをサポートしていても、マウスのみの入力が直接変更せずにそのまま機能することを前提として、ブラウザーはマウスイベントを処理する必要があります。 理想的には、ポインタ対応アプリはマウス入力を明示的に処理する必要はありません。 ただし、ブラウザーはマウスイベントを処理する必要があるため、対処する必要がある互換性の問題がいくつかあるかもしれません。 このセクションでは、ポインタイベントとマウスイベントの相互作用、およびアプリ開発者への影響について説明します。</p>

<p>ブラウザーは、<em>マウスベースのコンテンツとの互換性のために、汎用ポインタ入力をマウスイベントにマッピングすることができます</em>。 このイベントのマッピングは、<em>互換性マウスイベント</em>と呼ばれます。 作成者は <code>pointerdown</code> イベントをキャンセルすることで特定の互換性マウスイベントの生成を防ぐことができますが、次の点に注意してください。</p>

<ul>
 <li>マウスイベントは、ポインタがダウンしているときにのみ防ぐことができます。</li>
 <li>ホバーしているポインタ（例えばボタンが押されていないマウス）は、それらのマウスイベントを防ぐことができません。</li>
 <li><code>mouseover</code>、<code>mouseout</code>、<code>mouseenter</code>、<code>mouseleave</code> の各イベントが防止されることはありません（ポインタがダウンしている場合でも）。</li>
</ul>

<h2 id="Best_practices" name="Best_practices">ベストプラクティス</h2>

<p>ポインタイベントを使用する際に考慮すべき、いくつかの<em>ベストプラクティス</em>は次のとおりです。</p>

<ul>
 <li>イベントハンドラで行われる作業量を最小限に抑えます。</li>
 <li>イベントハンドラを特定のターゲット要素に追加します（ドキュメント全体またはドキュメントツリーの上位のノードではなく）。</li>
 <li>ターゲット要素（ノード）は、（通常は指で触れた）最大接触表面積を収容するのに十分な大きさであるべきです。 ターゲット領域が小さすぎる場合、それに触れると隣接する要素に対して他のイベントが発生する可能性があります。</li>
</ul>

<h2 id="Implementation_and_deployment_status" name="Implementation_and_deployment_status">実装と展開の状態</h2>

<p><a href="https://caniuse.com/#feat=pointer">ポインタイベントのブラウザーの互換性のデータ</a>（英語）は、デスクトップブラウザーとモバイルブラウザーの間のポインタイベントのサポートが、Safari を除くほぼすべてで利用可能であることを示しています。</p>

<p><a href="https://w3c.github.io/pointerevents/">Pointer Events Level 2</a> 仕様の一部として、CSS の {{cssxref("touch-action")}} プロパティに新しい値が提案されていますが、現在これらの新しい値には実装サポートがありません。</p>

<h2 id="Demos_and_examples" name="Demos_and_examples">デモと例</h2>

<ul>
 <li><a href="http://patrickhlauke.github.io/touch/">タッチ/ポインタのテストとデモ</a>（Patrick H. Lauke 著、英語）</li>
</ul>

<h2 id="Community" name="Community">コミュニティ</h2>

<ul>
 <li><a href="https://github.com/w3c/pointerevents">ポインタイベントのワーキンググループ</a>（英語）</li>
 <li><a href="http://lists.w3.org/Archives/Public/public-pointer-events/">メールリスト</a>（英語）</li>
 <li><a href="irc://irc.w3.org:6667/">W3C の #pointerevents IRC チャンネル</a>（英語）</li>
</ul>

<h2 id="Related_topics_and_resources" name="Related_topics_and_resources">関連トピックとリソース</h2>

<ul>
 <li><a href="http://www.w3.org/TR/touch-events/">タッチイベント標準</a>（英語）</li>
</ul>
