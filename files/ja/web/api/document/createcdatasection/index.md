---
title: Document.createCDATASection()
slug: Web/API/Document/createCDATASection
tags:
  - API
  - DOM
  - Method
  - Reference
translation_of: Web/API/Document/createCDATASection
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>createCDATASection()</code></strong> は、新規 CDATA セクションを生成し返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">var <var>CDATASectionNode</var> = <var>document</var>.createCDATASection(<var>data</var>);
</pre>

<ul>
 <li><var>CDATASectionNode</var> は <a href="/ja/docs/Web/API/CDATASection">CDATA セクション</a>のノードです。</li>
 <li><var>data</var> は CDATA セクションに追加するデータを含む文字列です。</li>
</ul>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js notranslate">var docu = new DOMParser().parseFromString('&lt;xml&gt;&lt;/xml&gt;', 'application/xml')

var cdata = docu.createCDATASection('Some &lt;CDATA&gt; data &amp; then some');

docu.getElementsByTagName('xml')[0].appendChild(cdata);

alert(new XMLSerializer().serializeToString(docu));
// 表示結果: &lt;xml&gt;&lt;![CDATA[Some &lt;CDATA&gt; data &amp; then some]]&gt;&lt;/xml&gt;
</pre>

<h2 id="Notes" name="Notes">注</h2>

<ul>
 <li>これは HTML ではなく、 XML の文書のみで動作します (HTML 文書は CDATA セクションに対応していません)。 HTML 文書でこれを用いた場合、 <code>NOT_SUPPORTED_ERR</code> がスローされます。</li>
 <li>引数として渡す文字列データの一部に CDATA を閉じるシーケンス ("<code>]]&gt;</code>") が含まれている場合、 <code>NS_ERROR_DOM_INVALID_CHARACTER_ERR</code> 例外がスローされます。もしこの様な文字列が含まれる可能性がある場合、 {{domxref("document.createTextNode","createTextNode()")}} を用いることでこの問題を回避することが出来ます。</li>
</ul>

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
   <td>{{SpecName('DOM WHATWG', '#dom-document-createcdatasection', 'document.createCDATASection')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.createCDATASection")}}</p>
