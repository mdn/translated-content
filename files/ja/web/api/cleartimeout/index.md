---
title: WindowOrWorkerGlobalScope.clearTimeout()
slug: Web/API/clearTimeout
tags:
  - API
  - HTML DOM
  - Method
  - Reference
  - WindowOrWorkerGlobalScope
  - clearTimeout
  - メソッド
  - リファレンス
translation_of: Web/API/WindowOrWorkerGlobalScope/clearTimeout
original_slug: Web/API/WindowOrWorkerGlobalScope/clearTimeout
---
<div>{{APIRef("HTML DOM")}}</div>

<p><strong><code>clearTimeout()</code></strong> は {{domxref("WindowOrWorkerGlobalScope")}} ミックスインのメソッドで、以前の {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}} の呼び出しによって以前に確立されたタイムアウトを解除します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>scope</em>.clearTimeout(<em>timeoutID</em>)
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><em>timeoutID</em></code></dt>
 <dd>解除したいタイマの ID です。 ID は <code>setTimeout()</code> の返値によって取得できます。</dd>
</dl>

<p>注目すべきは、 {{domxref("WindowOrWorkerGlobalScope.setTimeout", "setTimeout()")}} および {{domxref("WindowOrWorkerGlobalScope.setInterval", "setInterval()")}} で使用される ID のプールは共有されますので、技術的には <code>clearTimeout()</code> および {{domxref("WindowOrWorkerGlobalScope.clearInterval", "clearInterval()")}} は互いに交換できます。しかし、明確化のため、そのようなことは避けてください。</p>

<h2 id="Example" name="Example">例</h2>

<p>ウェブページのコンテキストで以下のスクリプトを実行し、ページを一度クリックしてください。１秒後にメッセージがポップアップします。１秒間に複数回ページをクリックしても、アラートは一度しか表示されません。</p>

<pre class="brush: js">var alarm = {
  remind: function(aMessage) {
    alert(aMessage);
    this.timeoutID = undefined;
  },

  setup: function() {
    if (typeof this.timeoutID === 'number') {
      this.cancel();
    }

    this.timeoutID = window.setTimeout(function(msg) {
      this.remind(msg);
    }.bind(this), 1000, 'Wake up!');
  },

  cancel: function() {
    window.clearTimeout(this.timeoutID);
  }
};
window.onclick = function() { alarm.setup(); };
</pre>

<h2 id="Notes" name="Notes">メモ</h2>

<p><code>clearTimeout()</code> へ妥当ではない ID を渡しても、何の効果もありません。例外は発生しません。</p>

<h2 id="Specification" name="Specification">仕様書</h2>

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
   <td>{{SpecName('HTML WHATWG', 'webappapis.html#dom-cleartimeout', 'WindowOrWorkerGlobalScope.clearTimeout()')}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>最新の仕様で、メソッドを <code>WindowOrWorkerGlobalScope</code> ミックスインに移動。</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'webappapis.html#dom-cleartimeout', 'clearTimeout()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.WindowOrWorkerGlobalScope.clearTimeout")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("WindowOrWorkerGlobalScope.setTimeout()")}}</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.setInterval()")}}</li>
 <li>{{domxref("WindowOrWorkerGlobalScope.clearInterval()")}}</li>
 <li>{{domxref("Window.requestAnimationFrame()")}}</li>
 <li><a href="/ja/docs/JavaScript/Timers/Daemons" title="JavaScript/Timers/Daemons"><em>Daemons</em> management</a></li>
</ul>
