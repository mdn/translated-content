---
title: Document.URL
slug: Web/API/Document/URL
tags:
- API
- DOM
- Document
- Property
- Reference
- プロパティ
- リファレンス
translation_of: Web/API/Document/URL
---
<div>{{APIRef("DOM")}}</div>

<p>{{domxref("Document")}} インターフェイスの <code><strong>URL</strong></code> プロパティは読取専用で、文書の位置を文字列で返します。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">const <em>url</em> = <em>document</em>.URL
</pre>

<h2 id="Example">例</h2>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">document.getElementById("url").textContent = document.URL;</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p id="urlText"&gt;
  URL:&lt;br/&gt;
  &lt;span id="url"&gt;URL goes here&lt;/span&gt;
&lt;/p&gt;</pre>

<h3 id="Result">結果</h3>

<p>{{EmbedLiveSample("Example", "100%", 100)}}</p>

<h2 id="Specifications">仕様書</h2>

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
      <td>{{SpecName("DOM WHATWG", "#dom-document-url", "Document.URL")}}</td>
      <td>{{Spec2("DOM WHATWG")}}</td>
      <td>プロパティを {{domxref("DOMString")}} ではなく {{domxref("USVString")}} と定義</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility"">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.URL")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
	<li>同じ値を返す {{domxref("document.documentURI")}} プロパティ</li>
</ul>
