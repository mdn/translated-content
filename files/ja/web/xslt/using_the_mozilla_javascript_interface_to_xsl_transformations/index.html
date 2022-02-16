---
title: Mozilla JavaScriptインターフェイスを使用したXSL変換
slug: Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations
tags:
  - XSLT
translation_of: Web/XSLT/Using_the_Mozilla_JavaScript_interface_to_XSL_Transformations
---
<p>このドキュメントでは、Mozilla 1.2 の JavaScript インターフェイスと、XSLT 処理エンジン (TransforMiiX) について説明します。</p>

<h3 id="Creating_an_XSLTProcessor" name="Creating_an_XSLTProcessor">XSLTProcessorの作成</h3>

<p>まず、{{domxref("XSLTProcessor")}} オブジェクトを作成する必要があります。</p>

<div style="overflow: hidden;">
<pre class="brush: js">var processor = new XSLTProcessor();
</pre>
</div>

<h3 id="Specifying_the_stylesheet" name="Specifying_the_stylesheet">スタイルシートの指定</h3>

<p>これを使用するには、{{domxref("XSLTProcessor.importStylesheet()")}} メソッドを使用してスタイルシートをインポートする必要があります。インポートするXSLTスタイルシートのDOMノードである単一のパラメータがあります。</p>

<p>{{ note("インポートは動的です。つまりスタイルシートDOMを読み込んだ後にスタイルシートDOMを変更すると、処理に反映されます。DOMを変更するのではなく、通常はより簡単でより良いパフォーマンスを与えることができるスタイルシートパラメータを使用することをお勧めします。") }}</p>

<pre class="brush: js">var testTransform = document.implementation.createDocument("", "test", null);
// just an example to get a transform into a script as a DOM
// XMLDocument.load is asynchronous, so all processing happens in the
// onload handler
testTransform.addEventListener("load", onload, false);
testTransform.load("test-transform.xml");
function onload() {
  processor.importStylesheet(testTransform);
}
</pre>

<p>{{domxref("XSLTProcessor.importStylesheet()")}} には引数、つまり DOM ノードが1つ必要です。そのノードがドキュメントノードの場合、完全なXSL Transformまたは<a href="http://www.w3.org/TR/xslt#result-element-stylesheet">リテラル結果要素の変換</a>を渡すことができます。そうでない場合は、<code>xsl:stylesheet</code> または <code>xsl:transform</code> 要素でなければなりません。</p>

<h3 id="Transforming_the_document" name="Transforming_the_document">文書を変形する</h3>

<p>インポートした XSLT スタイルシートを使用して {{domxref("XSLTProcessor.transformToDocument()")}} または {{domxref("XSLTProcessor.transformToFragment()")}} メソッドを使用してドキュメントを変換できます。</p>

<h4 id="transformToDocument" name="transformToDocument">transformToDocument</h4>

<p>{{domxref("XSLTProcessor.transformToDocument()")}} は変換するソースノードを1つ引数として、変換結果とともに新しい {{domxref("Document")}} を返します。</p>

<pre class="brush: js">var newDocument = processor.transformToDocument(domToBeTransformed);
</pre>

<p>結果のオブジェクトはスタイルシートの<a href="http://www.w3.org/TR/xslt#output">出力メソッド</a>に依存します。</p>

<ul>
 <li><strong>html</strong> - {{domxref("HTMLDocument")}}</li>
 <li><strong>xml</strong> - {{domxref("XMLDocument")}}</li>
 <li><strong>text</strong> - 子としてのテキストを持つ単一のルート要素 <code>&lt;transformiix:result&gt;</code> を持つ {{domxref("XMLDocument")}}</li>
</ul>

<h4 id="transformToFragment" name="transformToFragment">transformToFragment</h4>

<p>{{domxref("DocumentFragment")}} ノードを返す {{domxref("XSLTProcessor.transformToFragment()")}} を使用することもできます。フラグメントを別のノードに追加すると、そのフラグメントのすべての子が透過的に追加され、フラグメント自体はマージされないため、これは便利です。したがってフラグメントは、完全なドキュメントオブジェクトのオーバーヘッドなしにノードを移動して格納するのに便利です。<br>
 <br>
 {{domxref("XSLTProcessor.transformToFragment()")}} は、変換するソースドキュメント (上記) とフラグメントを所有する {{domxref("Document")}} オブジェクトの2つの引数をとります (すべてのフラグメントは文書が所有しなければなりません) 。</p>

<pre class="brush: js line-numbers  language-js"><code class="language-js"><span class="keyword token">var</span> ownerDocument <span class="operator token">=</span> document<span class="punctuation token">.</span>implementation<span class="punctuation token">.</span><span class="function token">createDocument</span><span class="punctuation token">(</span><span class="string token">""</span><span class="punctuation token">,</span> <span class="string token">"test"</span><span class="punctuation token">,</span> <span class="keyword token">null</span><span class="punctuation token">)</span><span class="punctuation token">;</span>
<span class="keyword token">var</span> newFragment <span class="operator token">=</span> processor<span class="punctuation token">.</span><span class="function token">transformToFragment</span><span class="punctuation token">(</span>domToBeTransformed<span class="punctuation token">,</span> ownerDocument<span class="punctuation token">)</span><span class="punctuation token">;</span></code></pre>

<p>所有者文書自体が {{domxref("HTMLDocument")}} の場合、またはスタイルシートの出力メソッドがHTMLの場合、{{domxref("XSLTProcessor.transformToFragment()")}} は HTML DOM オブジェクトを生成します。これは、{{domxref("XSLTProcessor.transformToFragment()")}} がこの要素の作成に使用されることはほとんど<strong>ない</strong>ので、結果の最上位要素のみが {{HTMLElement("html")}} の場合、HTML DOMオブジェクトを生成しません。これをオーバーライドする場合は、通常の方法で出力メソッドを通常どおりに設定できます。</p>

<h4 id="transforming_HTML" name="transforming_HTML">transforming HTML</h4>

<p>残念ながら、XSLT を使用して HTML ノードを変換することは現在サポートされていません。パターンや式で小文字のノード名を使用してノードがnull名前空間にあるかのように扱う場合、いくつかのことが成り立ちますが、これはあまりうまくテストされていないため、すべての状況で機能しない可能性があります。これは将来のリリースで変更される可能性もあります。<br>
 <br>
 しかし XHTML の変換は期待通りに機能するはずです。</p>

<h3 id="Setting_parameters" name="Setting_parameters">パラメータの設定</h3>

<p><a href="http://www.w3.org/TR/xslt#variables">スタイルシートのパラメータ</a>は{{domxref("XSLTProcessor.setParameter()")}}、{{domxref("XSLTProcessor.getParameter()")}}、{{domxref("XSLTProcessor.removeParameter()")}} メソッドを使用して制御することができます。これらはすべて {{domxref("XSLTProcessor.setParameter()")}} が設定するパラメータの値の3分の1を使用して、名前空間URIとローカル名を最初の2つのパラメータとして取ります。例については、<a href="/ja/docs/The_XSLT_JavaScript_Interface_in_Gecko">Gecko の XSLT/JavaScript インターフェース</a>を参照してください。</p>

<h3 id="Resetting" name="Resetting">リセット</h3>

<p>{{domxref("XSLTProcessor")}} オブジェクトは、すべてのスタイルシートとパラメータを削除してプロセッサを初期状態に戻すために使用できる{{domxref("XSLTProcessor.reset()")}} メソッドも実装しています。このメソッドは <a href="/ja/docs/Mozilla/Gecko">Mozilla</a> 1.3 以降で実装されています。</p>

<h3 id="Resources" name="Resources">リソース</h3>

<p>以下は {{domxref("XSLTProcessor")}} オブジェクトのインタフェースを反映しています：</p>

<ul>
 <li>{{ Source("dom/xslt/nsIXSLTProcessor.idl", "nsIXSLTProcessor.idl") }}</li>
 <li>{{ Source("dom/webidl/XSLTProcessor.webidl", "XSLTProcessor.webidl") }}</li>
</ul>

<h3 id="Using_XSLTProcessor_from_XPCOM_components" name="Using_XSLTProcessor_from_XPCOM_components">XPCOM コンポーネントから XSLTProcessor を使用する</h3>

<p>XPCOMコンポーネントから {{domxref("XSLTProcessor")}} をインスタンス化するには、コンストラクタがコンポーネント内で定義されていないため、別の構文が必要です。</p>

<p>これの代わりに：</p>

<pre class="brush: js">var processor = new XSLTProcessor();
</pre>

<p>これを行います：</p>

<pre class="brush: js">var processor = Components.classes["@mozilla.org/document-transformer;1?type=xslt"]
                          .createInstance(Components.interfaces.nsIXSLTProcessor);
</pre>

<h3 id="See_also" name="See_also">関連情報</h3>

<ul>
 <li><a href="/ja/docs/The_XSLT_JavaScript_Interface_in_Gecko" title="The_XSLT//JavaScript_Interface_in_Gecko">Gecko の XSLT/JavaScript インターフェース</a></li>
 <li>XML文書の読み込みに関する<a href="/ja/DOM/document.load" title="en/DOM/document.load">document.load()</a> (上で使用したもの)</li>
</ul>

<div class="originaldocinfo">
<h3 id="Original_Document_Information" name="Original_Document_Information">オリジナルドキュメント情報</h3>

<ul>
 <li>著者: <a class="link-mailto" href="mailto:mike@theoretic.com">Mike Hearn</a></li>
 <li>最終更新日: December 21, 2005</li>
 <li>著作権情報: Copyright (C) Mike Hearn</li>
</ul>
</div>
