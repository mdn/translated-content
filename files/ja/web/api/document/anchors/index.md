---
title: Document.anchors
slug: Web/API/Document/anchors
tags:
  - API
  - DOM
  - Deprecated
  - Document
  - HTML DOM
  - Property
  - Reference
  - anchors
  - プロパティ
translation_of: Web/API/Document/anchors
---
<div>{{APIRef("DOM")}} {{deprecated_header()}}</div>

<p><strong><code>anchors</code></strong> は {{domxref("Document")}} インターフェイスの読み取り専用のプロパティで、文書中のすべてのアンカーのリストを返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>nodeList</var> = document.anchors;
</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("HTMLCollection")}} です。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js">if (document.anchors.length &gt;= 5) {
  dump("dump found too many anchors");
  window.location = "http://www.google.com";
}
</pre>

<p>文書中のアンカーを基に目次を作成して文書に挿入する例を以下に示します。</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;Test&lt;/title&gt;
&lt;script&gt;
function init() {
  var toc = document.getElementById("toc");
  var i, li, newAnchor;
  for (i = 0; i &lt; document.anchors.length; i++) {
    li = document.createElement("li");
    newAnchor = document.createElement('a');
    newAnchor.href = "#" + document.anchors[i].name;
    newAnchor.innerHTML = document.anchors[i].text;
    li.appendChild(newAnchor);
    toc.appendChild(li);
  }
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body onload="init()"&gt;

&lt;h1&gt;Title&lt;/h1&gt;
&lt;h2&gt;&lt;a name="contents"&gt;Contents&lt;/a&gt;&lt;/h2&gt;
&lt;ul id="toc"&gt;&lt;/ul&gt;

&lt;h2&gt;&lt;a name="plants"&gt;Plants&lt;/a&gt;&lt;/h2&gt;
&lt;ol&gt;
  &lt;li&gt;Apples&lt;/li&gt;
  &lt;li&gt;Oranges&lt;/li&gt;
  &lt;li&gt;Pears&lt;/li&gt;
&lt;/ol&gt;

&lt;h2&gt;&lt;a name="veggies"&gt;Veggies&lt;/a&gt;&lt;/h2&gt;
&lt;ol&gt;
  &lt;li&gt;Carrots&lt;/li&gt;
  &lt;li&gt;Celery&lt;/li&gt;
  &lt;li&gt;Beats&lt;/li&gt;
&lt;/ol&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<p><a href="https://jsfiddle.net/S4yNp">JSFiddle で確認</a></p>

<h2 id="Notes" name="Notes">メモ</h2>

<p>後方互換性のため、返されるアンカーのセットには <code>name</code> 属性を付けて作成されたアンカーのみが含まれ、 <code>id</code> 属性付きで作成されたものは含まれません。</p>

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
   <td>{{SpecName('HTML WHATWG', '#dom-document-anchors', 'Document.anchors')}}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td>廃止</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-7577272', 'Document.anchors')}}</td>
   <td>{{ Spec2('DOM2 Events') }}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>{{Compat("api.Document.anchors")}}</div>
