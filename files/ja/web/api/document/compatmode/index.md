---
title: Document.compatMode
slug: Web/API/Document/compatMode
tags:
  - API
  - DOM
  - Document
  - Property
  - Reference
translation_of: Web/API/Document/compatMode
---
<div>{{ ApiRef("DOM") }}</div>

<p><code><strong>Document.compatMode</strong></code> プロパティは、文書が <a href="/ja/docs/Web/HTML/Quirks_Mode_and_Standards_Mode">Quirks モード</a> (互換モード) か標準準拠モードのどちらで表示されているかを示します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const <var>mode</var> = <var>document</var>.compatMode
</pre>

<h3 id="Values" name="Values">値</h3>

<p>列挙値で、次の値を取ります。</p>

<ul>
 <li>"<code>BackCompat</code>" 文書が互換モードの場合。</li>
 <li>"<code>CSS1Compat</code>" 文書が互換モードでない ("standards" モードとも呼ばれる) または限定互換モード ("almost standards" モードとも呼ばれる) 場合。</li>
</ul>

<div class="blockIndicator note">
<p><strong>注:</strong> これらのモードはすべて標準で定義されましたので、より古い "standards" および "almost standards" の名前は無意味であり、もう標準では使用されません。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">if (document.compatMode == "BackCompat") {
  // 互換モード
}
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
   <td>{{SpecName('DOM WHATWG', '#dom-document-compatmode','compatMode')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.compatMode")}}</p>
