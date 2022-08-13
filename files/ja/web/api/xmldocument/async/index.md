---
title: XMLDocument.async
slug: Web/API/XMLDocument/async
tags:
  - API
  - DOM
  - DOM Reference
  - Deprecated
  - Document
  - Non-standard
  - Property
  - Reference
  - async
translation_of: Web/API/XMLDocument/async
original_slug: Web/API/Document/async
---
<p>{{APIRef("DOM")}}{{Non-standard_header}}{{Deprecated_header}}</p>

<p><code>document.async</code> は、 {{DOMxRef("XMLDocument.load()")}} の呼び出しを同期で行うか、または非同期で行うかの指示を真偽値で設定します。 <code>true</code> が初期値であり、これは文書を非同期的に読み込むよう要求するものです。</p>

<p>(1.4 アルファから、同期的に文書を読み込めるようになりました。)</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js; notranslate">function loadXMLData(e) {
  alert(new XMLSerializer().serializeToString(e.target)); // querydata.xml の内容を文字列として取得
}

var xmlDoc = document.implementation.createDocument("", "test", null);

xmlDoc.async = false;
xmlDoc.onload = loadXMLData;
xmlDoc.load('querydata.xml');</pre>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.XMLDocument.async")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/XML_in_Mozilla" title="XML_in_Mozilla">XML in Mozilla</a></li>
 <li>{{DOMxRef("XMLDocument.load()")}}</li>
</ul>
