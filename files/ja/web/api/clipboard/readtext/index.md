---
title: Clipboard.readText()
slug: Web/API/Clipboard/readText
tags:
  - API
  - Async Clipboard API
  - Clip
  - Clipboard
  - Clipboard API
  - Cut
  - Editing
  - Method
  - Pasteboard
  - Reference
  - Text
  - copy
  - paste
  - readText
translation_of: Web/API/Clipboard/readText
---
<div>{{APIRef("Clipboard API")}}</div>

<p><span class="seoSummary"><strong>{{domxref("Clipboard")}}</strong> インターフェイスの <strong><code>readText()</code></strong> メソッドは、システムクリップボードのテキストの内容のコピーに解決される {{jsxref("Promise")}} を返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <em>promise</em> = navigator.clipboard.readText()</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<p>なし。</p>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>クリップボードのテキストの内容を持つ {{domxref("DOMString")}} に解決される、{{jsxref("Promise")}} オブジェクト。クリップボードが空であったり、テキストがないか、クリップボードの内容を表す {{domxref("DataTransfer")}} オブジェクトがテキストの表現を持たない場合は、空文字列を返します。</p>

<p>テキストでない内容をクリップボードから読むためには、代わりに {{domxref("Clipboard.read", "read()")}} メソッドを使ってください。クリップボードへのテキストの書き込みには、{{domxref("Clipboard.writeText", "writeText()")}} を使ってください。</p>

<h2 id="Example" name="Example">例</h2>

<p>この使用例は、クリップボードからテキストの内容を取得し、ある要素の内容にその取得されたテキストを設定します。</p>

<pre class="brush: js">navigator.clipboard.readText().then(
  clipText =&gt; document.getElementById("outbox").innerText = clipText);</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Clipboard API','#dom-clipboard-readtext','readText()')}}</td>
   <td>{{Spec2('Clipboard API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.Clipboard.readText")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Clipboard_API">Clipboard API</a></li>
 <li>{{domxref("Clipboard.writeText()")}}</li>
 <li>{{domxref("Clipboard.write()")}}</li>
</ul>
