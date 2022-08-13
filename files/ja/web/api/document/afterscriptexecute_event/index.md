---
title: Document.onafterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
tags:
  - API
  - DOM
  - Non-standard
  - Reference
  - プロパティ
  - 標準外
translation_of: Web/API/Document/onafterscriptexecute
original_slug: Web/API/Document/onafterscriptexecute
---
<div>{{ApiRef("DOM")}}{{non-standard_header}}</div>

<p><strong><code>Document.onafterscriptexecute</code></strong> プロパティは、静的な {{HTMLElement("script")}} 要素のスクリプトの実行が終了したときに呼び出される関数を参照します。要素が {{domxref("Node.appendChild()", "appendChild()")}} などで動的に追加された場合には呼び出されません。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>document</var>.onafterscriptexecute = <var>funcRef</var>;
</pre>

<p><var>funcRef</var> は関数の参照で、イベントが発行されると呼び出されます。イベントの <code>target</code> 属性が、実行が完了した {{HTMLElement("script")}} 要素に設定されます。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">function finished(e) {
  logMessage(`Finished script with ID: ${e.target.id}`);
}

document.addEventListener('afterscriptexecute', finished, true);
</pre>

<p><a href="/samples/html/currentScript.html">ライブ例を表示</a></p>

<h2 id="Specification" name="Specification">仕様書</h2>

<ul>
 <li><a href="http://www.whatwg.org/specs/web-apps/current-work/#the-script-element">HTML5</a></li>
</ul>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Document.onafterscriptexecute")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Document.onbeforescriptexecute")}}</li>
 <li>{{domxref("Document.currentScript")}}</li>
</ul>
