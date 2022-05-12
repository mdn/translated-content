---
title: Pointer Events の使用
slug: Web/API/Pointer_events/Using_Pointer_Events
tags:
  - Guide
  - Input
  - Pointer Events
  - PointerEvent
  - events
  - touch
translation_of: Web/API/Pointer_events/Using_Pointer_Events
---
<p>{{DefaultAPISidebar("Pointer Events")}}</p>

<p><span class="seoSummary">このガイドでは、<a href="/ja/docs/Web/API/Pointer_events">ポインタイベント</a>と HTML の {{HTMLElement("canvas")}} 要素を使用してマルチタッチ対応の描画アプリを作成する方法について説明します。</span> この例は、{{domxref("PointerEvent","ポインタイベント", "", 1)}}の入力イベントモデルを使用する点を除いて、<a href="/ja/docs/Web/API/Touch_events">Touch events の概要</a>の例に基づいています。 もう1つの違いは、ポインタイベントはポインタデバイスに依存しないため、アプリは同じコードを使用してマウス、ペン、または指先からの座標ベースの入力を受け入れることです。</p>

<p class="note">このアプリは、ポインタイベントをサポートしているブラウザーでのみ動作します。</p>

<p>このアプリのライブ版は <a href="https://mdn.github.io/dom-examples/pointerevents/Using_Pointer_Events.html">GitHub</a> で利用できます。 <a href="https://github.com/mdn/dom-examples/blob/master/pointerevents/Using_Pointer_Events.html">ソースコードは Github で入手でき</a>、プルリクエストやバグレポートは大歓迎です。</p>

<h2 id="Definitions" name="Definitions">定義</h2>

<dl>
 <dt>表面（Surface）</dt>
 <dd>タッチを感知できる表面。 これは、トラックパッド、タッチ画面、あるいは物理的な画面とユーザーの机の表面（またはマウスパッド）の仮想的なマッピングかもしれません。</dd>
</dl>

<dl>
 <dt>タッチポイント（Touch point）</dt>
 <dd>表面との接点。 これは、指（または肘、耳、鼻など何でも、しかし通常は指）、スタイラス、マウス、または表面上の単一の点を指定するための他の任意の方法かもしれません。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<div class="note">以下のテキストでは、表面との接触を説明するときに「指」という用語を使用していますが、もちろんスタイラス、マウス、その他の場所を指す方法でもかまいません。</div>

<h3 id="Create_a_canvas" name="Create_a_canvas">キャンバスの作成</h3>

<p>ブラウザーがデフォルトのタッチの振る舞いをアプリに適用しないようにするには、{{cssxref("touch-action")}} プロパティを <code>none</code> に設定します。</p>

<pre class="brush: html">&lt;canvas id="canvas" width="600" height="600" style="border:solid black 1px; touch-action:none"&gt;
  Your browser does not support canvas element.
  訳: お使いのブラウザーはキャンバス要素をサポートしていません。
&lt;/canvas&gt;
&lt;br&gt;
&lt;button onclick="startup()"&gt;Initialize&lt;/button&gt;
&lt;br&gt;
Log: &lt;pre id="log" style="border: 1px solid #ccc;"&gt;&lt;/pre&gt;
</pre>

<h3 id="Setting_up_the_event_handlers" name="Setting_up_the_event_handlers">イベントハンドラの設定</h3>

<p>ページが読み込まれると、{{HTMLElement("body")}} 要素の <code>onload</code> 属性によって以下に示す <code>startup()</code> 関数が呼び出されます（ただし、MDN ライブサンプルシステムの制限により、この例ではボタンを使用してトリガーします）。</p>

<pre class="brush: js">function startup() {
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("pointerdown", handleStart, false);
  el.addEventListener("pointerup", handleEnd, false);
  el.addEventListener("pointercancel", handleCancel, false);
  el.addEventListener("pointermove", handleMove, false);
  log("initialized.");
}
</pre>

<p>これは単に {{HTMLElement("canvas")}} 要素のすべてのイベントリスナーを設定するので、タッチイベントが発生したときに処理できます。</p>

<h4 id="Tracking_new_touches" name="Tracking_new_touches">新しいタッチの追跡</h4>

<p>進行中のタッチを追跡します。</p>

<pre class="brush: js">var ongoingTouches = new Array();
</pre>

<p>{{event("pointerdown")}} イベントが発生すると、表面上で新しいタッチが発生したことを示し、次の <code>handleStart()</code> 関数が呼び出されます。</p>

<pre class="brush: js">function handleStart(evt) {
  log("pointerdown.");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");

  log("pointerdown: id = " + evt.pointerId);
  ongoingTouches.push(copyTouch(evt));
  var color = colorForTouch(evt);
  ctx.beginPath();
  ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start 訳注: エラーで中断するので、この行を削除すべき
  ctx.arc(evt.clientX, evt.clientY, 4, 0, 2 * Math.PI, false);  // a circle at the start
  ctx.fillStyle = color;
  ctx.fill();
}
</pre>

<p>イベントの処理の一部を後で処理するために <code>ongoingTouches</code> に格納した後、開始点を小さな円として描画します。 4ピクセル幅の線を使用しているので、4ピクセルの半径の円が見栄えよく表示されます。</p>

<h4 id="Drawing_as_the_pointers_move" name="Drawing_as_the_pointers_move">ポインタの動きに合わせて描画</h4>

<p>1つ以上のポインタが移動するたびに、{{event("pointermove")}} イベントが配信され、その結果、次の <code>handleMove()</code> 関数が呼び出されます。 この例におけるその役割は、キャッシュされたタッチ情報を更新し、各タッチの前の位置から現在の位置まで線を引くことです。</p>

<pre class="brush: js">function handleMove(evt) {
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var color = colorForTouch(evt);
  var idx = ongoingTouchIndexById(evt.pointerId);

  log("continuing touch: idx =  " + idx);
  if (idx &gt;= 0) {
    ctx.beginPath();
    log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
    ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    log("ctx.lineTo(" + evt.clientX + ", " + evt.clientY + ");");
    ctx.lineTo(evt.clientX, evt.clientY);
    ctx.lineWidth = 4;
    ctx.strokeStyle = color;
    ctx.stroke();

    ongoingTouches.splice(idx, 1, copyTouch(evt));  // swap in the new touch record
    log(".");
  } else {
    log("can't figure out which touch to continue: idx = " + idx);
  }
}
</pre>

<p>この関数はキャッシュされたタッチ情報配列で各タッチに関する以前の情報を探して、描画する各タッチの新しい線分の開始点を決定します。 これは各タッチの {{domxref("PointerEvent.pointerId")}} プロパティを見ることによって行われます。 このプロパティは、各ポインタイベントに対して一意の整数であり、各指が表面と接触している間、各イベントに対して一貫性を保ちます。</p>

<p>これにより、各タッチの前の位置の座標を取得し、適切なコンテキストメソッドを使用して2つの位置を結ぶ線分を描画できます。</p>

<p>線を描画した後、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"><code>Array.splice()</code></a> を呼び出して、<code>ongoingTouches</code> 配列内のタッチポイントに関する以前の情報を現在の情報に置き換えます。</p>

<h4 id="Handling_the_end_of_a_touch" name="Handling_the_end_of_a_touch">タッチの終わりの処理</h4>

<p>ユーザーが表面から指を離すと、{{event("pointerup")}} イベントが送信されます。 次の <code>handleEnd()</code> 関数を呼び出すことによってこのイベントを処理します。 その仕事は終わったタッチのための最後の線分を引き、進行中のタッチリストからタッチポイントを取り除くことです。</p>

<pre class="brush: js">function handleEnd(evt) {
  log("pointerup");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var color = colorForTouch(evt);
  var idx = ongoingTouchIndexById(evt.pointerId);

  if (idx &gt;= 0) {
    ctx.lineWidth = 4;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    ctx.lineTo(evt.clientX, evt.clientY);
    ctx.fillRect(evt.clientX - 4, evt.clientY - 4, 8, 8);  // and a square at the end
    ongoingTouches.splice(idx, 1);  // remove it; we're done
  } else {
    log("can't figure out which touch to end");
  }
}
</pre>

<p>これは前の関数と非常によく似ています。 唯一の大きな違いは、終わりを示すために小さな正方形を描くことと、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"><code>Array.splice()</code></a> を呼び出すときに、更新された情報を追加せずに、進行中のタッチリストから古いエントリを削除することです。 その結果、そのタッチポイントの追跡をやめます。</p>

<h4 id="Handling_canceled_touches" name="Handling_canceled_touches">キャンセルされたタッチの処理</h4>

<p>ユーザーの指がブラウザーの UI にぶつかったり、あるいはタッチをキャンセルする必要がある場合は、{{event("pointercancel")}} イベントが送信され、次の <code>handleCancel()</code> 関数を呼び出します。</p>

<pre class="brush: js">function handleCancel(evt) {
  log("pointercancel: id = " + evt.pointerId);
  var idx = ongoingTouchIndexById(evt.pointerId);
  ongoingTouches.splice(idx, 1);  // remove it; we're done
}
</pre>

<p>アイデアはすぐにタッチを中止することなので、最後の線分を描かずに進行中のタッチリストから削除します。</p>

<h3 id="Convenience_functions" name="Convenience_functions">便利な関数</h3>

<p>この例では、コードの残りの部分をより明確にするために簡単に説明する必要がある、いくつかの便利な関数を使用しています。</p>

<h4 id="Selecting_a_color_for_each_touch" name="Selecting_a_color_for_each_touch">タッチごとの色の選択</h4>

<p>各タッチの描画を異なるように見せるために、<code>colorForTouch()</code> 関数を使用して、タッチの一意の識別子に基づいて色を選びます。 この識別子は不透明な数字ですが、少なくとも現在アクティブなタッチ間で異なることを頼れます。</p>

<pre class="brush: js">function colorForTouch(touch) {
  var r = touch.pointerId % 16;
  var g = Math.floor(touch.pointerId / 3) % 16;
  var b = Math.floor(touch.pointerId / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  var color = "#" + r + g + b;
  log("color for touch with identifier " + touch.pointerId + " = " + color);
  return color;
}
</pre>

<p>この関数の結果は、描画色を設定するために {{HTMLElement("canvas")}} の関数を呼び出すときに使用できる文字列です。 例えば、{{domxref("PointerEvent.pointerId")}} の値が <code>10</code> の場合、結果の文字列は <code>"#aaa"</code> です。</p>

<h4 id="Copying_a_touch_object" name="Copying_a_touch_object">タッチオブジェクトのコピー</h4>

<p>ブラウザーによっては、イベント間でタッチオブジェクトを再利用することがあるので、オブジェクト全体を参照するのではなく、気になる部分をコピーするのが最善です。</p>

<pre class="brush: js">function copyTouch(touch) {
  return { identifier: touch.pointerId, pageX: touch.clientX, pageY: touch.clientY };
}
</pre>

<h4 id="Finding_an_ongoing_touch" name="Finding_an_ongoing_touch">進行中のタッチの検索</h4>

<p>次の <code>ongoingTouchIndexById()</code> 関数は、<code>ongoingTouches</code> 配列をスキャンして、指定された識別子と一致するタッチを見つけ、そのタッチの配列におけるインデックスを返します。</p>

<pre class="brush: js">function ongoingTouchIndexById(idToFind) {
  for (var i = 0; i &lt; ongoingTouches.length; i++) {
    var id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1;    // not found
}
</pre>

<h4 id="Showing_what's_going_on" name="Showing_what's_going_on">何が起こっているのかを示す</h4>

<pre class="brush: js">function log(msg) {
  var p = document.getElementById('log');
  p.innerHTML = msg + "\n" + p.innerHTML;
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events 2','#pointerevent-interface', 'PointerEvent')}}</td>
   <td>{{Spec2('Pointer Events 2')}}</td>
   <td>不安定版</td>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events', '#pointerevent-interface', 'PointerEvent')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="PointerEvent_interface" name="PointerEvent_interface"><code>PointerEvent</code> インターフェイス</h3>

<div>


<p>{{Compat("api.PointerEvent", 0)}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Pointer_events">Pointer events</a></li>
 <li><a href="/ja/docs/Web/API/Touch_events">Touch events</a></li>
</ul>
