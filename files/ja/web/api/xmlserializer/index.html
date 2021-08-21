---
title: XMLSerializer
slug: Web/API/XMLSerializer
tags:
  - Converting
  - DOM Parsing
  - Interface
  - Parsing
  - Reference
  - Serialization
  - Serializing
  - XML
  - XML Serializer
  - conversion
translation_of: Web/API/XMLSerializer
original_slug: XMLSerializer
---
<div>{{APIRef("XMLSerializer")}}</div>

<p><span class="seoSummary"><code>XMLSerializer</code> インターフェースは、{{Glossary("DOM")}} ツリーを表す XML 文字列を構築するための {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} メソッドを提供します。</span></p>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
	<dt id="serializeToString">{{domxref("XMLSerializer.serializeToString", "serializeToString()")}}</dt>
	<dd>文字列の形にシリアライズされたサブツリーを返します。</dd>
	<dt id="serializeToStream">{{domxref("XMLSerializer.serializeToStream", "serializeToStream()")}} {{ non-standard_inline }}{{ deprecated_inline }}</dt>
	<dd>指定した要素をルートとするサブツリーが、指定した文字セットを使ったバイトストリームにシリアライズされます。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Serializing_XML_into_a_string" name="Serializing_XML_into_a_string">XML を文字列にシリアライズ</h3>

<p>最初の基本的な例は、ドキュメント全体を XML を含む文字列にシリアライズするだけです。</p>

<pre class="brush: js notranslate"> var s = new XMLSerializer();
 var d = document;
 var str = s.serializeToString(d);
 saveXML(str);</pre>

<p>このコードは、新しい <code>XMLSerializer</code> オブジェクトを作成し、シリアライズされる {{domxref("Document")}} を {{domxref("XMLSerializer.serializeToString", "serializeToString()")}} に渡します。これは、渡した document と同等の XML を返します。</p>

<h3 id="Inserting_nodes_into_a_DOM_based_on_XML" name="Inserting_nodes_into_a_DOM_based_on_XML">XML を基にした DOM にノードを挿入する</h3>

<p>この例は、{{domxref("Element.insertAdjacentHTML()")}} メソッドを使用して新しい DOM {{domxref("Node")}} を {{domxref("Document")}} の body に挿入します。これは、{{domxref("Element")}} オブジェクトをシリアライズすることにより作成された XML を基にしています。</p>

<div class="note">
<p><strong>注記:</strong> 実際は、{{domxref("Document.importNode", "importNode()")}} メソッドを呼び出して新しいノードを DOM に挿入する代わりに、以下のいずれかのメソッドを呼び出して DOM ツリーに追加することになるでしょう:</p>

<ul>
	<li>{{domxref("Document")}} および {{domxref("Element")}} メソッド {{domxref("ParentNode.append", "append()")}} および {{domxref("ParentNode.prepend", "prepend()")}}</li>
	<li>{{domxref("ChildNode.replaceWith", "Node.replaceWith()")}} メソッド (既存のノードを新しいノードと置き換えるため)</li>
	<li>{{domxref("Document.insertAdjacentElement()")}} および {{domxref("Element.insertAdjacentElement()")}} メソッド</li>
</ul>
</div>

<p><code>insertAdjacentHTML()</code> は文字列を受け入れるが、2 番目の引数として <code>Node</code> を受け入れないため、<code>XMLSerializer</code> を使用して先にノードを文字列に変換します。</p>

<pre class="brush: js notranslate">var inp = document.createElement('input');
var XMLS = new XMLSerializer();
var inp_xmls = XMLS.serializeToString(inp); // まず DOM ノードを文字列に変換

// 新たに作成されたノードを document の body に挿入
document.body.insertAdjacentHTML('afterbegin', inp_xmls);</pre>

<p>このコードは、{{domxref("Document.createElement()")}} を呼び出して新しい {{HTMLElement("input")}} 要素を作成し、{{domxref("XMLSerializer.serializeToString", "serializeToString()")}} を使用して XML にシリアライズします。</p>

<p>完了したら、<code>insertAdjacentHTML()</code> を使用して <code>&lt;input&gt;</code> 要素を DOM に挿入します。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
	<tbody>
		<tr>
			<th scope="col">仕様書</th>
			<th scope="col">策定状況</th>
			<th scope="col">備考</th>
		</tr>
		<tr>
			<td>{{SpecName('DOM Parsing', '#the-xmlserializer-interface', 'XMLSerializer')}}</td>
			<td>{{Spec2('DOM Parsing')}}</td>
			<td> </td>
		</tr>
	</tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの実装状況</h2>

<div>


<p>{{Compat("api.XMLSerializer")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
	<li><a href="/ja/Parsing_and_serializing_XML">Parsing and serializing XML</a></li>
	<li>{{domxref("XMLHttpRequest")}}</li>
	<li>{{domxref("DOMParser")}}</li>
</ul>
