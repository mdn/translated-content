---
title: HTMLElement.oncopy
slug: Web/API/HTMLElement/copy_event
tags:
  - API
  - Event Handler
  - Experimental
  - HTMLElement
  - NeedsSpecTable
  - Property
  - Reference
translation_of: Web/API/HTMLElement/oncopy
original_slug: Web/API/HTMLElement/oncopy
---
<div>{{ APIRef("HTML DOM") }}{{SeeCompatTable}}</div>

<p><strong><code>oncopy</code></strong> プロパティは  {{domxref("HTMLElement")}}  インターフェイスのプロパティで、 {{domxref("Element/copy_event", "copy")}} イベントを処理するイベントハンドラー ({{event("Event_handlers", "event handler")}}) です。</p>

<p><code>copy</code> イベントはユーザーがテキストをコピーしようとしたときに発生します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>target</var>.oncopy = <var>functionRef</var>;</pre>

<h3 id="Value" name="Value">値</h3>

<p><code><var>functionRef</var></code> は関数名または<a href="/ja/docs/Web/JavaScript/Reference/Operators/function">関数式</a>です。この関数は {{domxref("ClipboardEvent")}} オブジェクトを唯一の引数として受け取ります。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、 {{htmlElement("textarea")}} からのすべてのコピーと貼り付けをブロックします。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;h3&gt;Play with this text area:&lt;/h3&gt;
&lt;textarea id="editor" rows="3"&gt;Try copying and pasting text into this field!&lt;/textarea&gt;

&lt;h3&gt;Log:&lt;/h3&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">const log = document.getElementById('log');

function logCopy(event) {
  log.innerText = 'Copy blocked!\n' + log.innerText;
  event.preventDefault();
}

function logPaste(event) {
  log.innerText = 'Paste blocked!\n' + log.innerText;
  event.preventDefault();
}

const editor = document.getElementById('editor');

editor.oncopy = logCopy;
editor.onpaste = logPaste;</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example", 700, 300)}}</p>

<h2 id="Specification" name="Specification">仕様書</h2>

<p><a href="https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncopy">WHATWG Standard</a></p>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.HTMLElement.oncopy")}}</p>

<p>Firefox 13 から、この機能は設定 <code>dom.event.clipboardevents.enabled</code> で制御されます。既定値は <code>true</code> ですが無効化できます。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>Clipboard API のイベント {{domxref("Element/copy_event", "copy")}}</li>
 <li>関連するイベントハンドラー
  <ul>
   <li>{{domxref("HTMLElement.oncut")}}</li>
   <li>{{domxref("HTMLElement.onpaste")}}</li>
  </ul>
 </li>
</ul>
