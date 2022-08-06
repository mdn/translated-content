---
title: XPath スニペット
slug: Web/XPath/Snippets
tags:
  - XML
  - XPath
  - XSLT
  - スニペット
  - 例
translation_of: Web/XPath/Snippets
---
<p><span class="seoSummary">この記事ではいくつか XPath コードスニペットを提供します。</span>それはXPath機能をJavaScriptコードに公開する<a href="http://www.w3.org/TR/DOM-Level-3-XPath/">DOM Level 3 XPath仕様</a>の標準インタフェースに基づく簡単なユーティリティ関数の簡単な例です。<span class="seoSummary">スニペットは実際にあなた自身のコードの中で使用できる関数です。</span></p>

<h3 id="Node-specific_evaluator_function" name="Node-specific_evaluator_function">ノード指定の評価関数</h3>

<p>次のカスタムユーティリティ関数を使用して、指定されたXMLノードのXPath式を評価できます。最初の引数はDOMノードまたはDocumentオブジェクトで、2番目の引数はXPath式を定義する文字列です。</p>

<h5 id="例ノード指定のカスタム_evaluateXPath()_ユーティリティ関数を定義する">例:ノード指定のカスタム <code>evaluateXPath()</code> ユーティリティ関数を定義する</h5>

<pre class="brush: js">// Evaluate an XPath expression aExpression against a given DOM node
// or Document object (aNode), returning the results as an array
// thanks wanderingstan at morethanwarm dot mail dot com for the
// initial work.
function evaluateXPath(aNode, aExpr) {
  var xpe = new XPathEvaluator();
  var nsResolver = xpe.createNSResolver(aNode.ownerDocument == null ?
    aNode.documentElement : aNode.ownerDocument.documentElement);
  var result = xpe.evaluate(aExpr, aNode, nsResolver, 0, null);
  var found = [];
  var res;
  while (res = result.iterateNext())
    found.push(res);
  return found;
}
</pre>

<p>この関数は<strong><code>new XPathEvaluator()</code></strong>コンストラクタを使用していますが、Firefox、Chrome、Opera、Safariではサポートされているものの、EdgeまたはInternet Explorerではサポートされていません。EdgeまたはInternet ExplorerのユーザーがアクセスできるWebドキュメント内のスクリプトは、<strong><code>new XPathEvaluator()</code></strong>の呼び出しを次のフラグメントに置き換える必要があります。</p>

<pre class="brush: js">  // XPathEvaluator is implemented on objects that implement Document
  var xpe = aNode.ownerDocument || aNode;
</pre>

<p>その場合、<a href="/ja/docs/Web/API/document/createNSResolver">XPathNSResolver</a>の作成は次のように単純化できます。</p>

<pre class="brush: js">  var nsResolver = xpe.createNSResolver(xpe.documentElement);
</pre>

<p>ただし、<code>createNSResolver</code>は、XPath式の名前空間プレフィックスが問い合わせる文書の名前空間プレフィックスと一致する（<span id="result_box" lang="ja"><span>かつデフォルトの名前空間が使用されていない</span></span>(回避策については<a href="/ja/docs/Web/API/document/createNSResolver">document.createNSResolver</a>を参照)）ことが確認されている場合にのみ使用する必要があります。それ以外の場合は、XPathNSResolverの独自の実装を提供する必要があります。</p>

<p><a href="/ja/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a>を使用してローカルまたはリモートのXMLファイルをDOMツリー（<a href="/ja/docs/Parsing_and_serializing_XML">XMLのパースとシリアライズ</a>を参照）に読み込む場合、<code>evaluateXPath()</code>の最初の引数は<code>req.responseXML</code>である必要があります。</p>

<h4 id="Sample_usage" name="Sample_usage">使用例</h4>

<p>次のXMLドキュメント（<a href="/ja/docs/How_to_create_a_DOM_tree">DOMツリーの作成方法</a>と<a href="/ja/docs/Parsing_and_serializing_XML">XMLのパースとシリアライズ</a>も参照してください）があるとします。</p>

<h5 id="例_カスタム_evaluateXPath()_ユーティリティ関数と一緒に使用する_XML_文書">例: カスタム <code>evaluateXPath()</code> ユーティリティ関数と一緒に使用する XML 文書</h5>

<pre class="brush: xml">&lt;?xml version="1.0"?&gt;
&lt;people&gt;
  &lt;person first-name="eric" middle-initial="H" last-name="jung"&gt;
    &lt;address street="321 south st" city="denver" state="co" country="usa"/&gt;
    &lt;address street="123 main st" city="arlington" state="ma" country="usa"/&gt;
  &lt;/person&gt;

  &lt;person first-name="jed" last-name="brown"&gt;
    &lt;address street="321 north st" city="atlanta" state="ga" country="usa"/&gt;
    &lt;address street="123 west st" city="seattle" state="wa" country="usa"/&gt;
    &lt;address street="321 south avenue" city="denver" state="co" country="usa"/&gt;
  &lt;/person&gt;
&lt;/people&gt;
</pre>

<p>XPath式を使用してドキュメントを「照会」できるようになりました。 DOMツリーを眺めることでも同様の結果が得られますが、XPath式を使用する方がはるかに高速で強力です。id属性に頼ることができるのであれば、<code>document.getElementById()</code>はまだ強力ですが、XPathほど強力ではありません。下記は用例です。</p>

<h5 id="例_カスタムの_evaluateXPath()_ユーティリティ関数がある_JavaScript_コード">例: カスタムの <code>evaluateXPath()</code> ユーティリティ関数がある JavaScript コード</h5>

<pre class="brush: js">// display the last names of all people in the doc
var results = evaluateXPath(people, "//person/@last-name");
for (var i in results)
  alert("Person #" + i + " has the last name " + results[i].value);

// get the 2nd person node
results = evaluateXPath(people, "/people/person[2]");

// get all the person nodes that have addresses in denver
results = evaluateXPath(people, "//person[address/@city='denver']");

// get all the addresses that have "south" in the street name
results = evaluateXPath(people,  "//address[contains(@street, 'south')]");
alert(results.length);
</pre>

<h3 id="docEvaluateArray" name="docEvaluateArray">docEvaluateArray</h3>

<p>以下は、ネームスペースリゾルバなどの特別な必要性に関わらず、XPathの結果を配列に取得（順序づけ）する簡単なユーティリティ関数です。そうでない場合は、<code><a href="/ja/docs/Web/API/document/evaluate" title="en/DOM/document.evaluate">document.evaluate()</a></code>のより複雑な構文は避けてください <code><a href="/ja/docs/Web/API/XPathResult" title="en/XPathResult">XPathResult</a></code>の特別なイテレータ（代わりに配列を返す）を使用する必要があります。</p>

<h5 id="例_シンプルな_docEvaluateArray​()_ユーティリティ関数を定義する">例: シンプルな <code>docEvaluateArray​()</code> ユーティリティ関数を定義する</h5>

<pre class="brush: js">// Example usage:
// var els = docEvaluateArray('//a');
// alert(els[0].nodeName); // gives 'A' in HTML document with at least one link

function docEvaluateArray (expr, doc, context, resolver) {
    var i, result, a = [];
    doc = doc || (context ? context.ownerDocument : document);
    resolver = resolver || null;
    context = context || doc;

    result = doc.evaluate(expr, context, resolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for(i = 0; i &lt; result.snapshotLength; i++) {
        a[i] = result.snapshotItem(i);
    }
    return a;
}
</pre>

<h3 id="getXPathForElement" name="getXPathForElement">getXPathForElement</h3>

<p>次の関数は、要素とXML文書を渡して、その要素につながる一意の文字列XPath式を検索することを可能にします。</p>

<h5 id="例_getXPathForElement​​()_ユーティリティ関数を定義する">例: <code>getXPathForElement​​()</code> ユーティリティ関数を定義する</h5>

<pre class="brush: js">function getXPathForElement(el, xml) {
	var xpath = '';
	var pos, tempitem2;

	while(el !== xml.documentElement) {
		pos = 0;
		tempitem2 = el;
		while(tempitem2) {
			if (tempitem2.nodeType === 1 &amp;&amp; tempitem2.nodeName === el.nodeName) { // If it is ELEMENT_NODE of the same name
				pos += 1;
			}
			tempitem2 = tempitem2.previousSibling;
		}

		xpath = "*[name()='"+el.nodeName+"' and namespace-uri()='"+(el.namespaceURI===null?'':el.namespaceURI)+"']["+pos+']'+'/'+xpath;

		el = el.parentNode;
	}
	xpath = '/*'+"[name()='"+xml.documentElement.nodeName+"' and namespace-uri()='"+(el.namespaceURI===null?'':el.namespaceURI)+"']"+'/'+xpath;
	xpath = xpath.replace(/\/$/, '');
	return xpath;
}</pre>

<h3 id="Resources" name="Resources">関連資料</h3>

<ul>
 <li><a href="/ja/docs/Web/XPath" title="en/XPath">XPath</a></li>
 <li><a class="external" href="http://forums.mozillazine.org/viewtopic.php?t=229106">Forum discussion on this topic</a></li>
</ul>

<h2 id="See_also" name="See_also">合わせてお読みください</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Introduction_to_using_XPath_in_JavaScript">JavaScript で XPath を使用する</a></li>
</ul>

<p>{{QuickLinksWithSubpages("/ja/docs/Web/XPath")}}</p>
