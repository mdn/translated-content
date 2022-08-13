---
title: GlobalEventHandlers.onmouseup
slug: conflicting/Web/API/Element/mouseup_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/onmouseup
original_slug: Web/API/GlobalEventHandlers/onmouseup
browser-compat: api.GlobalEventHandlers.onmouseup
---
<div>{{ApiRef("HTML DOM")}}</div>

<p><code><strong>onmouseup</strong></code> は {{domxref("GlobalEventHandlers")}} ミックスインのプロパティで、{{event("mouseup")}} イベントを処理する<a href="/ja/docs/Web/Events/Event_handlers">イベントハンドラー</a>です。</p>

<p><code>mouseup</code> イベントは、ユーザーがマウスボタンを離したときに発行されます。</p>

<div class="notecard note">
  <p><strong>メモ:</strong> <code>onmouseup</code> の反対の動作は {{domxref("GlobalEventHandlers.onmousedown", "onmousedown")}} です。</p>
</div>

<h2 id="Syntax">構文</h2>

<pre
  class="brush: js"><em>target</em>.onmouseup = <var>functionRef</var>;</pre>

<h3 id="Value">値</h3>

<p><code>functionRef</code> は、関数名または<a href="/ja/docs/Web/JavaScript/Reference/Operators/function">関数式</a>です。この関数は、唯一の引数として {{domxref("MouseEvent")}} オブジェクトを受け取ります。</p>

<h2 id="Example">例</h2>

<p>この例は、マウスでクリックするとトーストが非表示になり、離すと再び表示されます。{{domxref("GlobalEventHandlers.onmousedown", "onmousedown")}} と <code>onmouseup</code> イベントハンドラーを使用します。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div class="container"&gt;
  &lt;div class="toaster"&gt;&lt;/div&gt;
  &lt;div class="toast"&gt;Hello world!&lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">.container {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%);
}

.toaster {
  width: 160px;
  height: 110px;
  background: #bbb;
  border-radius: 10px 10px 0 0;
}

.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  width: 100px;
  height: 50px;
  padding: 10px;
  background: #ed9;
  border-radius: 10px 10px 0 0;
  transform: translate(-50%, -90px);
  transition: transform .3s;
}

.depressed {
  transform: translate(-50%, -50%);
}</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function depress() {
  toast.classList.add('depressed');
}

function release() {
  toast.classList.remove('depressed');
}

const toaster = document.querySelector('.toaster');
const toast = document.querySelector('.toast');

toaster.onmousedown = depress;
document.onmouseup = release;</pre>

<h3 id="Result">結果</h3>

<p>{{EmbedLiveSample("Example", 700, 200)}}</p>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{event("mouseup")}} イベント</li>
</ul>
