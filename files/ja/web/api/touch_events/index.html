---
title: タッチイベント
slug: Web/API/Touch_events
tags:
  - Advanced
  - DOM
  - Event
  - Guide
  - Mobile
  - Overview
  - touch
  - イベント
  - タッチ
  - 概要
translation_of: Web/API/Touch_events
---
<p>{{DefaultAPISidebar("Touch Events")}}</p>

<p>タッチベースのユーザーインターフェイスを高度にサポートするため、端末やトラックパッドでの指 (あるいはスタイラス) の動きを解釈する機能を、タッチイベントが提供します。</p>

<p>タッチイベントのインターフェイスは、2 本の指によるジェスチャーなどアプリケーション固有のマルチタッチ操作に対応するために使用できる、比較的低レベルの API です。マルチタッチ操作は、1 本の指 (またはスタイラス) が始めにタッチ面へタッチしたときから始まります。その後に他の指をタッチすることができ、さらに任意でサーフェス上で動かします。指をサーフェスから離すと、操作が終了します。操作している間、アプリケーションは開始・移動・終了の各段階中にタッチイベントを受け取ります。</p>

<p>タッチイベントはマウスイベントに似ていますが、タッチサーフェス上の異なる場所で同時に発生するタッチに対応することが異なります。{{domxref("TouchEvent")}} インターフェイスは、現在アクティブなすべてのタッチ箇所を包含します。{{domxref("Touch")}} インターフェイスはひとつのタッチ箇所を表し、ブラウザのビューポートを基準にしたタッチ個所の位置などの情報を含みます。</p>

<h2 id="Definitions" name="Definitions">定義</h2>

<dl>
 <dt>タッチ面</dt>
 <dd>タッチに反応する面。画面であったりトラックパッドであったりする可能性があります。</dd>
</dl>

<dl>
 <dt>タッチ箇所</dt>
 <dd>タッチ面に接触した点。これは指 (あるいはひじ、耳、鼻などでもよいのですが、たいてい指でしょう) またはスタイラスでしょう。</dd>
</dl>

<h2 id="Interfaces" name="Interfaces">インターフェイス</h2>

<dl>
 <dt>{{domxref("TouchEvent")}}</dt>
 <dd>タッチ面でタッチ状態が変化したときに発生するイベントを表します。</dd>
 <dt>{{domxref("Touch")}}</dt>
 <dd>ユーザーとタッチタッチ面が接した点 1 個を表します。</dd>
 <dt>{{domxref("TouchList")}}</dt>
 <dd>タッチのグループを表します。例えば、ユーザーが複数の指を同時にタッチ面上に置いた場合に使用します。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>ここでは一度に複数のタッチ箇所を取得しており、ユーザーが一度に複数の指で {{HTMLElement("canvas")}} に描くことができるようになっています。このサンプルはタッチイベントに対応するブラウザーのみで動作します。</p>

<div class="note"><strong>注:</strong> ここからはタッチ面への接触を表すときに "指" という表現を使用しますが、当然ながらスタイラスなど他の接触法も使用できます。</div>

<h3 id="Create_a_canvas" name="Create_a_canvas">canvas を生成する</h3>

<pre class="brush: html notranslate">&lt;canvas id="canvas" width="600" height="600" style="border:solid black 1px;"&gt;
  Your browser does not support canvas element.
&lt;/canvas&gt;
&lt;br&gt;
Log: &lt;pre id="log" style="border: 1px solid #ccc;"&gt;&lt;/pre&gt;
</pre>

<h3 id="Setting_up_the_event_handlers" name="Setting_up_the_event_handlers">イベントハンドラーの設定</h3>

<p>ページを読み込むとき、以下の <code>startup()</code> 関数が呼び出されます。</p>

<pre class="brush: js notranslate">function startup() {
  var el = document.getElementById("canvas");
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
}

document.addEventListener("DOMContentLoaded", startup);</pre>

<p>これは単に {{HTMLElement("canvas")}} 要素へすべてのイベントリスナーを設定している関数であり、タッチイベントの発生に応じて扱うことができるようになります。</p>

<h4 id="Tracking_new_touches" name="Tracking_new_touches">新たなタッチの追跡</h4>

<p>進行中のタッチを追跡し続けます。</p>

<pre class="brush: js notranslate">var ongoingTouches = [];
</pre>

<p>タッチ面上で新たなタッチが発生したことを示す {{Event("touchstart")}} イベントが発生すると、<code>handleStart()</code> 関数を呼び出します。</p>

<pre class="brush: js notranslate">function handleStart(evt) {
  evt.preventDefault();
  console.log("touchstart.");
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i &lt; touches.length; i++) {
    console.log("touchstart:" + i + "...");
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
    console.log("touchstart:" + i + ".");
  }
}
</pre>

<p>ここでは、ブラウザーがタッチイベントの処理を続けないようにするため {{domxref("event.preventDefault()")}} を呼び出します (また、マウスイベントの伝達も抑止します)。そしてコンテキストを取得して、イベントの {{domxref("TouchEvent.changedTouches")}} プロパティから変化したタッチ箇所のリストを取り込みます。</p>

<p>その後に、リスト内のすべての {{domxref("Touch")}} オブジェクトを走査してアクティブなタッチ箇所の配列に送り込み、描画を開始する位置に小さな丸印を描画します。この例では 4 ピクセル幅の線を使用しますので、半径 4 ピクセルの円がきれいに見えます。</p>

<h4 id="Drawing_as_the_touches_move" name="Drawing_as_the_touches_move">タッチの移動に合わせた描画</h4>

<p>1 本以上の指が移動するたびに {{domxref("Element/touchmove_event", "touchmove")}} イベントが発生しますので、その結果 <code>handleMove()</code> 関数が呼び出されます。これはキャッシュしたタッチ情報を更新して、タッチごとに以前の位置から現在の位置まで線を描画する役割を担っています。</p>

<pre class="brush: js notranslate">function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i &lt; touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx &gt;= 0) {
      console.log("continuing touch "+idx);
      ctx.beginPath();
      console.log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      console.log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
      console.log(".");
    } else {
      console.log("can't figure out which touch to continue");
    }
  }
}
</pre>

<p>これは同様に変更されたタッチに対して走査していますが、各タッチで新たに描画する線分の開始点を検出するために、各タッチの以前の情報についてキャッシュしたタッチ情報の配列を参照しています。これは、各タッチの {{domxref("Touch.identifier")}} プロパティを確認して行います。このプロパティは各タッチで一意の識別子であり、指とタッチ面との接触が続いている間、値が固定されます。</p>

<p>これにより各タッチの前の位置の座標を取得して、2 つの点を結ぶ線分を描画するために適切なコンテキストメソッドを使用できます。</p>

<p>線分を描画した後、前のタッチ箇所の情報を <code>ongoingTouches</code> 配列内にある現在の情報に置き換えるため、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"><code>Array.splice()</code></a> を呼び出します。</p>

<h4 id="Handling_the_end_of_a_touch" name="Handling_the_end_of_a_touch">タッチの終了を制御する</h4>

<p>ユーザーがタッチ面から指を離すと {{domxref("Element/touchend_event", "touchend")}} イベントが発生します。私たちはこれらの両方を、以下の <code>handleEnd()</code> 関数を呼び出すというひとつの方法で扱います。この関数の役割は、終了したタッチについて最後の線分を描画することと、継続中のタッチのリストからタッチ箇所を削除することです。</p>

<pre class="brush: js notranslate">function handleEnd(evt) {
  evt.preventDefault();
  log("touchend");
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i &lt; touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx &gt;= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);  // and a square at the end
      ongoingTouches.splice(idx, 1);  // remove it; we're done
    } else {
      console.log("can't figure out which touch to end");
    }
  }
}
</pre>

<p>これは前の関数にとても似ていますが、終端を表す小さな四角形を描画することと、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"><code>Array.splice()</code></a> を呼び出して、更新後の情報を追加せずに継続中のタッチリストから古い項目を削除することが異なります。この結果、タッチ箇所の追跡を停止します。</p>

<h4 id="Handling_canceled_touches" name="Handling_canceled_touches">取り消されたタッチを制御する</h4>

<p>ユーザーの指がブラウザーの UI に入り込んだり、その他にタッチをキャンセルしなければならないときには {{domxref("Element/touchcancel_event", "touchcancel")}} イベントが発生して、以下の <code>handleCancel()</code> 関数が実行されます。</p>

<pre class="brush: js notranslate">function handleCancel(evt) {
  evt.preventDefault();
  console.log("touchcancel.");
  var touches = evt.changedTouches;

  for (var i = 0; i &lt; touches.length; i++) {
    var idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1);  // remove it; we're done
  }
}
</pre>

<p>即座にタッチを取り消すという考え方から最終の線分を描画せずに、継続中のタッチリストから単純にタッチを削除します。</p>

<h3 id="Convenience_functions" name="Convenience_functions">便利な関数</h3>

<p>この例ではコードの残りの部分をより明確にすることを助ける、簡単に見ておくべきである 2 つの便利な関数を使用しています。</p>

<h4 id="Selecting_a_color_for_each_touch" name="Selecting_a_color_for_each_touch">それぞれのタッチの色を選択する</h4>

<p>それぞれのタッチの外見を区別して描画するために、タッチの一意な識別子を元に色を選択する <code>colorForTouch()</code> 関数を使用します。この識別子は不明瞭な数値ですが、少なくとも現在アクティブなタッチを区別することはできます。</p>

<pre class="brush: js notranslate">function colorForTouch(touch) {
  var r = touch.identifier % 16;
  var g = Math.floor(touch.identifier / 3) % 16;
  var b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  var color = "#" + r + g + b;
  console.log("color for touch with identifier " + touch.identifier + " = " + color);
  return color;
}
</pre>

<p>この関数の返値は、描画色を設定するために {{HTMLElement("canvas")}} 関数を呼び出すときに使用できる文字列です。例えば {{domxref("Touch.identifier")}} の値が 10 であれば、戻り値は文字列 "#aaa" になります。</p>

<h4 id="Copying_a_touch_object" name="Copying_a_touch_object">touch オブジェクトのコピー</h4>

<p>一部のブラウザー (例えばモバイル版 Safari) はイベント間で touch オブジェクトを再使用するため、オブジェクト全体を参照するよりも、関心がある部分をコピーするほうが最善です。</p>

<pre class="brush: js notranslate">function copyTouch({ identifier, pageX, pageY }) {
  return { identifier, pageX, pageY };
}</pre>

<h4 id="Finding_an_ongoing_touch" name="Finding_an_ongoing_touch">継続中のタッチを発見する</h4>

<p>以下の <code>ongoingTouchIndexById()</code> 関数は、指定した識別にマッチするタッチを見つけるために配列 <code>ongoingTouches</code> を探索して、そのタッチの配列内における添字を返します。</p>

<pre class="brush: js notranslate">function ongoingTouchIndexById(idToFind) {
  for (var i = 0; i &lt; ongoingTouches.length; i++) {
    var id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1;    // not found
}
</pre>

<h4 id="Showing_whats_going_on" name="Showing_whats_going_on">何を行っているか表示する</h4>

<pre class="brush: js notranslate">function log(msg) {
  var p = document.getElementById('log');
  p.innerHTML = msg + "\n" + p.innerHTML;
}</pre>

<p>ブラウザーが対応していれば、{{LiveSampleLink('Example', '実際に試す')}} ことができます。</p>

<p><a href="http://jsfiddle.net/Darbicus/z3Xdx/10/">jsFiddle example</a></p>

<h2 id="Additional_tips" name="Additional_tips">追加の豆知識</h2>

<p>この章ではウェブアプリケーションでタッチイベントを扱う方法について、追加の豆知識を紹介します。</p>

<h3 id="Handling_clicks" name="Handling_clicks">クリックを制御する</h3>

<p>{{event("touchstart")}} あるいは一連の中で最初の {{domxref("Element/touchmove_event", "touchmove")}} で <code>preventDefault()</code> を呼び出すと対応するマウスイベントの発生を抑制できるため、 <code>touchstart</code> よりも <code>touchmove</code> で <code>preventDefault()</code> を呼び出すことが一般的です。この方法では従来どおりマウスイベントが発生して、リンクなどが引き続き動作します。代わりに一部のフレームワークでは同様の目的で、タッチイベントをマウスイベントとして再発生させています。(この例は過度に単純化しており、奇妙な動作になるかもしれません。ガイドとして掲載しているに過ぎません。)</p>

<pre class="brush: js notranslate">function onTouch(evt) {
  evt.preventDefault();
  if (evt.touches.length &gt; 1 || (evt.type == "touchend" &amp;&amp; evt.touches.length &gt; 0))
    return;

  var newEvt = document.createEvent("MouseEvents");
  var type = null;
  var touch = null;

  switch (evt.type) {
    case "touchstart":
      type = "mousedown";
      touch = evt.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedTouches[0];
      break;
    case "touchend":
      type = "mouseup";
      touch = evt.changedTouches[0];
      break;
  }

  newEvt.initMouseEvent(type, true, true, evt.originalTarget.ownerDocument.defaultView, 0,
    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
    evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, 0, null);
  evt.originalTarget.dispatchEvent(newEvt);
}
</pre>

<h3 id="Calling_preventDefault_only_on_a_second_touch" name="Calling_preventDefault_only_on_a_second_touch">2 番目のタッチのみで preventDefault() を呼び出す</h3>

<p>ページ上で <code>pinchZoom</code> と言った操作を防ぐテクニックのひとつとして、一連のタッチの 2 番目で <code>preventDefault()</code> を呼び出す方法があります。この動作はタッチイベントの仕様書で明示されておらず、ブラウザーによって結果が異なります (iOS ではズームを防ぎますが、パンは可能です。Android はズームが可能ですが、パンはできません。Opera および Firefox は現状、パンもズームも防ぎます)。現在、このケースで特定の動作に依存することは推奨されず、メタビューポートのズームを防ぐと考えてください。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('Touch Events 2', '#touch-interface', 'Touch')}}</td>
   <td>{{Spec2('Touch Events 2')}}</td>
   <td><code>radiusX</code>, <code>radiusY</code>, <code>rotationAngle</code>, <code>force</code> プロパティを追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('Touch Events', '#touch-interface', 'Touch')}}</td>
   <td>{{Spec2('Touch Events')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<h3 id="Touch">Touch</h3>

<p>タッチイベントは通常、タッチ画面を備えた端末で使用できますが、多くのブラウザーは、タッチ画面を備えたものであっても、すべてのデスクトップ端末でタッチイベント API をできないようにしています。</p>

<p>これは、一部のウェブサイトで、タッチイベント API の一部が利用できることが、ブラウザーがモバイル端末で実行されていることを示す指標として使用されているためです。タッチイベント API が利用可能な場合、これらのウェブサイトはモバイル端末を想定し、モバイルに最適化されたコンテンツを配信します。その結果、タッチ画面を搭載したデスクトップ端末のユーザーにとっては、使い勝手が悪くなる可能性があります。</p>

<p>すべての種類の端末でタッチとマウスの両方に対応するには、代わりに<a href="/ja/docs/Web/API/Pointer_events">ポインターイベント</a>を使用してください。</p>

<p>{{Compat("api.Touch")}}</p>

<h3 id="Firefox_touch_events_and_multiprocess_e10s" name="Firefox_touch_events_and_multiprocess_e10s">Firefox のタッチイベントとマルチプロセス (e10s)</h3>

<p>Firefox では、 e10s (electrolysis; <a href="/ja/docs/Mozilla/Firefox/Multiprocess_Firefox">multiprocess Firefox</a>) が無効になっていると、タッチイベントは無効になります。 Firefox では e10s が既定ででオンになっていますが、 e10s が機能しないようにする必要がある特定のアクセシビリティツールや Firefox アドオンがインストールされている場合など、特定の状況で無効になることがあります。つまり、タッチ画面対応のデスクトップ/ノートパソコンでも、タッチイベントは有効になりません。</p>

<p>e10s が無効になっているかどうかをテストするには、 <code>about:support</code> に移動し、 "Application Basics" セクションの "Multiprocess Windows" エントリを調べます。 1/1 は有効、 0/1 は無効を意味します。</p>

<p>タッチイベントの対応を明示的に再度有効にするために e10s を強制的にオンにしたい場合は、 <code>about:config</code> に移動して新しいブール設定 <code>browser.tabs.remote.force-enable</code> を作成する必要があります。 <code>true</code> に設定してブラウザーを再起動すると、他の設定に関係なく e10s が有効になります。</p>
