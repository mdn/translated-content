---
title: GlobalEventHandlers.onchange
slug: conflicting/Web/API/HTMLElement/change_event
tags:
  - API
  - Event Handler
  - GlobalEventHandlers
  - HTML DOM
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/onchange
original_slug: Web/API/GlobalEventHandlers/onchange
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>{{domxref("GlobalEventHandlers")}} ミックスインの <strong><code>onchange</code></strong> プロパティは、<code><a href="/ja/docs/Web/API/HTMLElement/change_event">change</a></code> イベントを処理する {{event("Event_handlers", "event handler")}} です。</p>

<p><code>change</code> イベントはユーザーがフォームコントロールの値を変更した時に発生します。これは例えば、コントロールの外側をクリックしたり <kbd>Tab</kbd> キーで別のコントロールへ切り替えたりすることにより行われることがあります。</p>

<div class="blockIndicator note">
<p><strong>注記:</strong> {{domxref("GlobalEventHandlers.oninput", "oninput")}} と異なり、<code>onchange</code> イベントハンドラーは、各要素の <code>value</code> が変化するたびに呼び出される必要がありません。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em><var>target</var></em>.onchange = <em>functionRef</em>;
</pre>

<p><code>functionRef</code> は関数名または <a href="/ja/docs/Web/JavaScript/Reference/Operators/function">関数式</a> です。この関数は、{{domxref("Event")}} オブジェクトとその 1 個の引数を受け取ります。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例は、{{HtmlElement("input")}} 要素のコンテンツを変更してフォーカスを要素から外す度に、その文字数をログ出力します。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input type="text" placeholder="Type something here, then click outside of the field." size="50"&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">let input = document.querySelector('input');
let log = document.getElementById('log');

input.onchange = handleChange;

function handleChange(e) {
  log.textContent = `The field's value is
      ${e.target.value.length} character(s) long.`;
}</pre>

<h3 id="Result" name="Result">実行結果</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG','webappapis.html#handler-onchange','onchange')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </thead>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("api.GlobalEventHandlers.onchange")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>{{event("change")}} イベント</li>
</ul>
