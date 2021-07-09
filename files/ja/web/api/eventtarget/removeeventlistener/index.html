---
title: EventTarget.removeEventListener
slug: Web/API/EventTarget/removeEventListener
tags:
  - API
  - DOM
  - DOM Element Methods
  - EventTarget
  - Gecko
  - Method
  - Reference
  - browser compatibility
  - removeEventListener
  - メソッド
translation_of: Web/API/EventTarget/removeEventListener
---
<div>{{APIRef("DOM Events")}}</div>

<p><strong><code>EventTarget.removeEventListener()</code></strong> メソッドは、 {{domxref("EventTarget")}} から、以前に {{domxref("EventTarget.addEventListener()")}} で登録されたイベントリスナーを削除します。削除されるイベントリスナーはイベントの型、イベントリスナー関数そのもの、マッチングプロセスに影響を与えるさまざまな任意のオプションを使用して識別します。{{anch("Matching event listeners for removal", "削除するイベントリスナーのマッチング")}} をご覧ください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>target</var>.removeEventListener(<var>type</var>, <var>listener</var>[, <var>options</var>]);
<var>target</var>.removeEventListener(<var>type</var>, <var>listener</var>[, <var>useCapture</var>]);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><var>type</var></dt>
 <dd>イベントリスナーを削除するイベントの型を表す文字列。</dd>
 <dt><var>listener</var></dt>
 <dd>イベントターゲットから削除するイベントハンドラーの {{domxref("EventListener")}} 関数です。</dd>
 <dt><var>options</var> {{optional_inline}}</dt>
 <dd>イベントリスナーに関する特性を指定する、オプションのオブジェクトです。次のオプションが使用できます。
 <ul>
  <li><code>capture</code>: この型のイベントが、DOM ツリーで下位にある任意の <code>EventTarget</code> へ発送される前に <code>listener</code> へ発送されることを示す {{jsxref("Boolean")}} です。</li>
  <li>{{non-standard_inline}}<code> mozSystemGroup</code>: XBL または Firefox の chrome で実行するコードに限り有効であり、リスナーがシステムグループに追加されているかを定義する {{jsxref("Boolean")}} です。</li>
 </ul>
 </dd>
 <dt><code>useCapture</code> {{optional_inline}}</dt>
 <dd>削除する {{domxref("EventListener")}} がキャプチャーリスナーとして登録されているかを指定します。この引数を省略した場合は、既定値の <code>false</code> であるとみなします。</dd>
 <dd>リスナーが 2 回登録されていてひとつはキャプチャー、もうひとつは非キャプチャーである場合は、それぞれを個別に削除します。キャプチャーリスナーを削除しても、同じリスナーの非キャプチャーリスナーには影響がありません。逆も同様です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>undefined</code> です。</p>

<h3 id="Matching_event_listeners_for_removal" name="Matching_event_listeners_for_removal">削除するイベントリスナーのマッチング</h3>

<p>{{domxref("EventTarget.addEventListener", "addEventListener()")}} を呼び出して以前に追加したイベントリスナーは、最終的に削除が必要な状態になることがあります。<code>removeEventListener()</code> に同じ <code>type</code> および <code>listener</code> の引数を指定しなければならないことは明らかですが、<code>options</code> や <code>useCapture</code> の引数はどうでしょうか?</p>

<p><code>addEventListener()</code> は、オプションが異なっていれば同じ型に対して同じリスナーを複数追加できますが、 <code>removeEventListener()</code> が確認するオプションは <code>capture</code>/<code>useCapture</code> フラグだけです。一致させるためにこの値は <code>removeEventListener()</code> で一致していなければなりませんが、他の値は一致していなくてもかまいません。</p>

<p>例えば、以下の <code>addEventListener()</code> で考えましょう。</p>

<pre class="brush: js">element.addEventListener("mousedown", handleMouseDown, true);</pre>

<p>そして、以下 2 つの <code>removeEventListener()</code> の呼び出しについて考えましょう。</p>

<pre class="brush: js">element.removeEventListener("mousedown", handleMouseDown, false);     // 失敗
element.removeEventListener("mousedown", handleMouseDown, true);      // 成功
</pre>

<p>1 番目の呼び出しは、<code>useCapture</code> の値が異なるため失敗します。2 番目は、<code>useCapture</code> が一致しますので成功します。</p>

<p>次に、以下の呼び出しを考えましょう。</p>

<pre class="brush: js">element.addEventListener("mousedown", handleMouseDown, { passive: true });</pre>

<p>ここでは <code>passive</code> を <code>true</code> に設定した <code>options</code> を指定していますが、他のオプションは既定値の <code>false</code> のままです。</p>

<p>では、以下の <code>removeEventListener()</code> の呼び出しについて、順番に見ていきましょう。<code>capture</code> または <code>useCapture</code> が <code>true</code> であるものは失敗して、そのほかは成功します。<code>capture</code> の設定だけが <code>removeEventListener()</code> に関与します。</p>

<pre class="brush: js">element.removeEventListener("mousedown", handleMouseDown, { passive: true });     // 成功
element.removeEventListener("mousedown", handleMouseDown, { capture: false });    // 成功
element.removeEventListener("mousedown", handleMouseDown, { capture: true });     // 失敗
element.removeEventListener("mousedown", handleMouseDown, { passive: false });    // 成功
element.removeEventListener("mousedown", handleMouseDown, false);                 // 成功
element.removeEventListener("mousedown", handleMouseDown, true);                  // 失敗
</pre>

<p>一部のブラウザーはこれとは動作が異なることは注目する価値があり、他に特別な理由がない限り <code>removeEventListener()</code> を呼び出すときは、<code>addEventListener()</code> を呼び出したときと同じ値を使用するとよいでしょう。</p>

<h2 id="Notes" name="Notes">メモ</h2>

<p>{{domxref("EventListener")}} がイベントを処理中である {{domxref("EventTarget")}} から削除された場合、現在のアクションによってそのイベントリスナーが実行されることはありません。{{domxref("EventListener")}} は、決して削除された後に実行されることはありません。ただし、再追加することができます。</p>

<p><code>EventTarget</code> 上にある現在のどの {{domxref("EventListener")}} も指定していない引数付きの <code>removeEventListener()</code> は、何の効果もありません。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例は、<code>click</code> ベースのイベントリスナーを追加して <code>mouseover</code> ベースのイベントリスナーを削除する方法を示します。</p>

<pre class="brush: js">var body = document.querySelector('body'),
    clickTarget = document.getElementById('click-target'),
    mouseOverTarget = document.getElementById('mouse-over-target'),
    toggle = false;

function makeBackgroundYellow() {
    'use strict';

    if (toggle) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'yellow';
    }

    toggle = !toggle;
}

clickTarget.addEventListener('click',
    makeBackgroundYellow,
    false
);

mouseOverTarget.addEventListener('mouseover', function () {
    'use strict';

    clickTarget.removeEventListener('click',
        makeBackgroundYellow,
        false
    );
});
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("DOM WHATWG", "#dom-eventtarget-removeeventlistener", "EventTarget.removeEventListener()")}}</td>
   <td>{{Spec2("DOM WHATWG")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("DOM4", "#dom-eventtarget-removeeventlistener", "EventTarget.removeEventListener()")}}</td>
   <td>{{Spec2("DOM4")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Events", "#Events-EventTarget-removeEventListener", "EventTarget.removeEventListener()")}}</td>
   <td>{{Spec2("DOM2 Events")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>{{Compat("api.EventTarget.removeEventListener", 3)}}</div>

<h2 id="Polyfill_to_support_older_browsers" name="Polyfill_to_support_older_browsers">古いブラウザーをサポートするためのポリフィル</h2>

<p><code>addEventListener()</code> および <code>removeEventListener()</code> は、古いブラウザーでは提供されていません。以下のコードをスクリプトの先頭に挿入するとこの問題を回避でき、 <code>addEventListener()</code> および <code>removeEventListener()</code> にネイティブに対応していない実装でもこれらを使用できます。ただし、 Element.prototype が Internet Explorer 8 までサポートされていなかったため、この方法は Internet Explorer 7 およびそれ以前では動作しません。</p>

<pre class="brush: js">if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) { oEvent = window.event; }
    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId &lt; oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId &lt; oEvtListeners.aEvts[iElId].length; iLstId++) { oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent); }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (var nElIdx = -1, iElId = 0; iElId &lt; oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId &lt; aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) { return; }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [ [fListener] ] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (!oListeners.hasOwnProperty(sEventType)) { return; }
    var oEvtListeners = oListeners[sEventType];
    for (var nElIdx = -1, iElId = 0; iElId &lt; oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
    }
    if (nElIdx === -1) { return; }
    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId &lt; aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) { aElListeners.splice(iLstId, 1); }
    }
  };
}
</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("EventTarget.addEventListener()")}}.</li>
 <li>{{non-standard_inline}}{{domxref("EventTarget.detachEvent()")}}.</li>
</ul>
