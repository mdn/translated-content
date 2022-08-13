---
title: XML のパースとシリアライズ
slug: Web/Guide/Parsing_and_serializing_XML
tags:
  - AJAX
  - Add-ons
  - DOM
  - DOM Parsing
  - Extensions
  - Guide
  - HTMLDocument
  - JSON
  - Parsing
  - Parsing XML
  - Serializing
  - Serializing XML
  - XML
  - XMLDocument
  - XMLHttpRequest
translation_of: Web/Guide/Parsing_and_serializing_XML
---
<p>場合によっては、{{Glossary("XML")}} のコンテンツを解析して {{Glossary("DOM")}} ツリーに変換する必要があるでしょう。または逆に、既存の DOM ツリーを XML にシリアライズすることもあります。<span class="seoSummary">この記事では、XML のシリアライズと解析の一般的な作業を容易にするため、ウェブプラットフォームで提供されるオブジェクトに注目します。</span></p>

<dl>
 <dt>{{domxref("XMLSerializer")}}</dt>
 <dd>DOM ツリーをシリアライズし、XML を含む文字列に変換します。</dd>
 <dt>{{domxref("DOMParser")}}</dt>
 <dd>XML を含む文字列を解析して DOM ツリーを構築し、入力データに基づいて適切な {{domxref("XMLDocument")}} または {{domxref("Document")}} を返します。</dd>
 <dt>{{domxref("XMLHttpRequest")}}</dt>
 <dd>URL からコンテンツを読み込みます。XML コンテンツは、XML 自体から構築された DOM ツリーを持つ XML {{domxref("Document")}} オブジェクトとして返されます。</dd>
 <dt><a href="/ja/docs/XPath">XPath</a></dt>
 <dd>XML 文書の特定の部分のアドレスを含む文字列を作成し、それらのアドレスに基づいて XML ノードを特定する技術。</dd>
</dl>

<h2 id="Creating_an_XML_document" name="Creating_an_XML_document">XML 文書を作成する</h2>

<p>次のいずれかの方法で XML 文書を作成します (これは {{domxref("Document")}} のインスタンスです)。</p>

<h3 id="Parsing_strings_into_DOM_trees" name="Parsing_strings_into_DOM_trees">文字列を DOM ツリーにパースする</h3>

<p>この例では、{{domxref("DOMParser")}} を使用して文字列の XML フラグメントを DOM ツリーに変換します:</p>

<div style="overflow: hidden;">
<pre class="brush: js notranslate">const xmlStr = '&lt;a id="a"&gt;&lt;b id="b"&gt;hey!&lt;/b&gt;&lt;/a&gt;';
const parser = new DOMParser();
const dom = parser.parseFromString(xmlStr, "application/xml");
// print the name of the root element or error message
console.log(dom.documentElement.nodeName == "parsererror" ? "error while parsing" : dom.documentElement.nodeName);
</pre>
</div>

<h3 id="Parsing_URL-addressable_resources_into_DOM_trees" name="Parsing_URL-addressable_resources_into_DOM_trees">URL にできるリソースを DOM ツリーにパースする</h3>

<h4 id="Using_XMLHttpRequest" name="Using_XMLHttpRequest">XMLHttpRequest を使用する</h4>

<p>URL アドレス指定が可能な XML ファイルを読み込み解析して DOM ツリーにするサンプルコードを次に示します:</p>

<pre class="brush: js notranslate">const xhr = new XMLHttpRequest();

xhr.onload = function() {
  dump(xhr.responseXML.documentElement.nodeName);
}

xhr.onerror = function() {
  dump("Error while getting XML.");
}

xhr.open("GET", "example.xml");
xhr.responseType = "document";
xhr.send();
</pre>

<p><code>xhr</code> オブジェクトの {{domxref("XMLHttpRequest.responseXML", "responseXML")}} フィールドで返される値は XML の解析により構築された {{domxref("Document")}} です。</p>

<p>document が {{Glossary("HTML")}} である場合、上記のコードは {{domxref("Document")}} を返します。document が XML である場合、返されるオブジェクトは {{domxref("XMLDocument")}} になります。この 2 種類は基本的に同じですが、その違いは主に歴史的な部分であり、差別化にはいくつかの実用的な利点があります。</p>

<div class="note">
<p><strong>Note:</strong> There is in fact an {{domxref("HTMLDocument")}} interface as well, but it is not necessarily an independent type. In some browsers it is, while in others it is simply an alias for the <code>Document</code> interface.</p>
</div>

<h2 id="Serializing_an_XML_document" name="Serializing_an_XML_document">XML 文書のシリアライズ</h2>

<p>Given a {{domxref("Document")}}, you can serialize the document's DOM tree back into XML using the {{domxref("XMLSerializer.serializeToString()")}} method.</p>

<p>Use the following approaches to serialize the contents of the XML document you created in the previous section.</p>

<h3 id="Serializing_DOM_trees_to_strings" name="Serializing_DOM_trees_to_strings">DOM ツリーを文字列にシリアライズ</h3>

<p>First, create a DOM tree as described in <a href="/ja/How_to_create_a_DOM_tree" title="en/How_to_create_a_DOM_tree">How to Create a DOM tree</a>. Alternatively, use a DOM tree obtained from {{ domxref("XMLHttpRequest") }}.</p>

<p>To serialize the DOM tree <code>doc</code> into XML text, call {{domxref("XMLSerializer.serializeToString()")}}:</p>

<pre class="brush: js notranslate">const serializer = new XMLSerializer();
const xmlStr = serializer.serializeToString(doc);</pre>

<h3 id="Serializing_HTML_documents" name="Serializing_HTML_documents">HTML 文書のシリアライズ</h3>

<p>If the DOM you have is an HTML document, you can serialize using <code>serializeToString()</code>, but there is a simpler option: just use the {{domxref("Element.innerHTML")}} property (if you want just the descendants of the specified node) or the {{domxref("Element.outerHTML")}} property if you want the node and all its descendants.</p>

<pre class="brush: js notranslate">const docInnerHtml = document.documentElement.innerHTML;
</pre>

<p>As a result, <code>docHTML</code> is a {{domxref("DOMString")}} containing the HTML of the contents of the document; that is, the {{HTMLElement("body")}} element's contents.</p>

<p>You can get HTML corresponding to the <code>&lt;body&gt;</code> <em>and</em> its descendants with this code:</p>

<pre class="brush: js notranslate">const docOuterHtml = document.documentElement.outerHTML;</pre>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li><a class="internal" href="/ja/XPath">XPath</a></li>
 <li>{{domxref("XMLHttpRequest")}}</li>
 <li>{{domxref("Document")}}, {{domxref("XMLDocument")}} および {{domxref("HTMLDocument")}}</li>
</ul>
