---
title: JavaScript/XSLT バインディング
slug: Web/XSLT/XSLT_JS_interface_in_Gecko/JavaScript_XSLT_Bindings
tags:
  - DOM
  - JavaScript
  - XML
  - XSLT
translation_of: Web/XSLT/XSLT_JS_interface_in_Gecko/JavaScript_XSLT_Bindings
---
<h2 id="JavaScript.2FXSLT_Bindings" name="JavaScript.2FXSLT_Bindings">JavaScript/XSLT バインディング</h2>

<p>JavaScriptは {{domxref('XSLTProcessor')}} オブジェクトを通してXSLT変換を実行できます。インスタンス化されると、{{domxref('XSLTProcessor')}} には変換で使用される XSLT スタイルシートを引数として取る{{domxref('XSLTProcessor.importStylesheet()')}} メソッドがあります。スタイルシートは XML 文書として渡す必要があります。つまり{{domxref('XSLTProcessor.importStylesheet()')}} を呼び出す前に .xslファイルをページでロードする必要があります。これは {{domxref('XMLHttpRequest')}} または {{domxref('XMLDocument.load()')}} で行うことができます。</p>

<p><small><strong>Figure 1 : {{domxref('XSLTProcessor')}} のインスタンス化</strong></small></p>

<pre class="brush: js">  var xsltProcessor = new XSLTProcessor();

  // Load the xsl file using synchronous (third param is set to false) XMLHttpRequest
  var myXMLHTTPRequest = new XMLHttpRequest();
  myXMLHTTPRequest.open("GET", "example.xsl", false);
  myXMLHTTPRequest.send(null);

  var xslRef = myXMLHTTPRequest.responseXML;

  // Finally import the .xsl
  xsltProcessor.importStylesheet(xslRef);
</pre>

<p>実際の変換では、{{domxref('XSLTProcessor')}} には XML ドキュメントが必要です。このドキュメントは、最終的な結果を得るためにインポートされたXSLファイルと一緒に使用されます。XML ドキュメントは、図1に示すようにロードされた別個のXMLファイルでも、既存のページの一部でもかまいません。ページの DOM の一部を処理するには、最初にメモリー内に XML 文書を作成する必要があります。処理対象の DOM が id の <code>example</code>を持つ要素に含まれていると仮定すると、その DOM はメモリ内 XML ドキュメントの {{domxref('Document.importNode()')}} メソッドを使用して "複製"できます。{{domxref('Document.importNode()')}} は、ドキュメント間（この場合はHTMLドキュメントからXMLドキュメントへ）のDOMフラグメントを転送することを可能にします。最初のパラメータはクローンを作成する DOM ノードを参照します。2番目のパラメータを "true" にすることですべての子孫も同様にクローンします (深いクローン)。複製された DOM は図2に示すように、{{domxref('Node.appendChild()')}} を使用して簡単にXMLドキュメントに挿入できます。</p>

<p><small><strong>Figure 2 : ドキュメントの DOM の一部に基づいて XML ドキュメントを作成する</strong></small></p>

<pre class="brush: js">  // create a new XML document in memory
  var xmlRef = document.implementation.createDocument("", "", null);

  // we want to move a part of the DOM from an HTML document to an XML document.
  // importNode is used to clone the nodes we want to process via XSLT - true makes it do a deep clone
  var myNode = document.getElementById("example");
  var clonedNode = xmlRef.importNode(myNode, true);

  // add the cloned DOM into the XML document
  xmlRef.appendChild(clonedNode);
</pre>

<p>スタイルシートをインポートしたら、{{domxref('XSLTProcessor')}} は実際の変換に2つのメソッド、つまり{{domxref('XSLTProcessor.transformToDocument()')}} と{{domxref('XSLTProcessor.transformToFragment()')}} を実行する必要があります。{{domxref('XSLTProcessor.transformToDocument()')}} は完全な XML ドキュメントを返しますが、{{domxref('XSLTProcessor.transformToFragment()')}} は既存のドキュメントに簡単に追加できるドキュメントフラグメントを返します。どちらも、変換される最初のパラメーターとして XML 文書を取り込みます。 {{domxref('XSLTProcessor.transformToFragment()')}} は第2のパラメータ、すなわち生成されたフラグメントを所有するドキュメントオブジェクトを必要とします。生成されたフラグメントが現在の HTML ドキュメントに挿入される場合はドキュメントを渡すだけで十分です。</p>

<p><small><strong>Figure 2.1 : 文字列 'XML Soup' からの XML 文書の作成</strong></small></p>

<p>IE <code>loadXML</code> メソッドを使用して XML を含む文字列をロードすることができますが、Mozilla で同じことをするためにいくつかの微調整とチューニングを行う必要があります。これは DomParser によって処理されるため、DomParser.no を使用してドキュメントを作成する必要があります。</p>

<pre class="brush: js">var parser = new DOMParser();
var doc = parser.parseFromString(aStr, "text/xml");
</pre>

<p><small><strong>Figure 3 : 変換の実行</strong></small></p>

<pre class="brush: js">  var fragment = xsltProcessor.transformToFragment(xmlRef, document);
</pre>
