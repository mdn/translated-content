---
title: Node.nodeName
slug: Web/API/Node/nodeName
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/Node/nodeName
---
<div>
 {{APIRef}}</div>
<div>
  </div>
<div>
 <span style="font-size: 2.14285714285714rem; font-weight: 700; letter-spacing: -1px; line-height: 30px;">概要</span></div>
<p>ノードの名前を文字列で返します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>str</var> = <var>node</var>.nodeName;
</pre>
<ul>
 <li><code>str</code> には指定した要素の名前が文字列の形式で入ります。</li>
 <li><code>nodeName</code> は読み取り専用の属性です。</li>
</ul>
<h2 id="Notes" name="Notes">注記</h2>
<p>以下の異なる種類のノードの戻り値があります。</p>
<table>
 <thead>
  <tr>
   <th>Interface</th>
   <th>nodeName</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="/ja/docs/DOM/Attr">Attr</a></td>
   <td><a href="/ja/docs/DOM/Attr.name"><code>Attr.name</code></a> と同じ</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/DOM/CDATASection">CDATASection</a></td>
   <td>"#cdata-section"</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/DOM/Comment">Comment</a></td>
   <td>"#comment"</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/DOM/document">Document</a></td>
   <td>"#document"</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/DOM/DocumentFragment">DocumentFragment</a></td>
   <td>"#document-fragment"</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/DOM/DocumentType">DocumentType</a></td>
   <td><a href="/ja/docs/DOM/DocumentType.name"><code>DocumentType.name</code></a> と同じ</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/DOM/element">Element</a></td>
   <td><a href="/ja/docs/DOM/element.tagName"><code>Element.tagName</code></a> と同じ</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Entity">Entity</a></td>
   <td>実体名</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/EntityReference">EntityReference</a></td>
   <td>実体参照名</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/Web/API/Notation">Notation</a></td>
   <td>記法名</td>
  </tr>
  <tr>
   <td><a href="/ja/docs/DOM/ProcessingInstruction">ProcessingInstruction</a></td>
   <td><a href="/ja/docs/DOM/ProcessingInstruction.target"><code>ProcessingInstruction.target</code></a> と同じ</td>
  </tr>
  <tr>
   <td>Text</td>
   <td>"#text"</td>
  </tr>
 </tbody>
</table>
<h2 id="Example" name="Example">例</h2>
<p>次のマークアップ文書が与えられているとします。</p>
<pre class="brush:html">&lt;div id="d1"&gt;hello world&lt;/div&gt;
&lt;input type="text" id="t"/&gt;
</pre>
<p>そして、以下のスクリプトがあると考えてください。</p>
<pre class="brush:js">var div1 = document.getElementById("d1");
var text_field = document.getElementById("t");

text_field.value = div1.nodeName;
</pre>
<p>XHTML (あるいは、他の XML 形式) の場合 text_field の値には "div" が入ります。しかし、HTML の場合 text_field の値には "DIV" が入ります。</p>
<p>注意: <a href="/ja/docs/DOM/element.tagName"><code>tagName</code></a> プロパティが使用された場合、<code>nodeName</code> は <code>tagName</code> と同じ値になります。<code>tagName</code> が未定義 (<code>undefined</code>) の時 <code>nodeName</code> はテキストノードである <code>#text</code> を返します。</p>
<h2 id="Specifications" name="Specifications">仕様</h2>
<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D095">DOM Level 2 Core: Node.nodeName</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-F68D095">DOM Level 3 Core: Node.nodeName</a></li>
 <li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents">HTML 5: APIs in HTML documents</a></li>
</ul>
