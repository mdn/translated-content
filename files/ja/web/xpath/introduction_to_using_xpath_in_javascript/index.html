---
title: JavaScript での XPath の 利用
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
tags:
  - Add-ons
  - DOM
  - Extensions
  - JavaScript
  - Transforming_XML_with_XSLT
  - Web Development
  - XML
  - XPath
  - XSLT
original_slug: Introduction_to_using_XPath_in_JavaScript
---
<p>この文書では拡張機能やウェブサイトから JavaScript 内で <a href="/ja/docs/Web/XPath">XPath</a> を使うためのインターフェイスについて解説します。 Mozilla は <a href="http://www.w3.org/TR/DOM-Level-3-XPath/xpath.html">DOM 3 XPath</a> のかなりの部分を実装しており、 HTML 文書と XML 文書のどちらに対しても XPath 式を実行することができます。</p>

<p>XPath を使用するための主となるインターフェイスは <a href="/ja/docs/Web/API/Document">document</a> オブジェクトの <a href="/ja/docs/Web/API/Document/evaluate">evaluate</a> 関数です。</p>

<h2 id="document.evaluate">document.evaluate</h2>

<p>このメソッドは <a href="/ja/docs/Web/XPath">XPath</a> 式を <a href="/ja/docs/Glossary/XML">XML</a> ベースの文書 ( HTML を含む) に対して評価し、 <code><a href="/ja/docs/Web/API/XPathResult">XPathResult</a></code> オブジェクトを返します。 XPathResult オブジェクトは単一のノード、もしくはノードの集合になります。既存のこのメソッドのドキュメントは <a href="/ja/docs/Web/API/Document/evaluate">document.evaluate</a> ですが、このメソッドの解説のためには内容が薄いため、以下でさらに詳しく説明します。</p>

<pre class="brush: js">var xpathResult = document.evaluate( xpathExpression, contextNode, namespaceResolver, resultType, result );
</pre>

<h3 id="Parameters">引数</h3>

<p><a href="/ja/docs/Web/API/Document/evaluate">evaluate</a> 関数は 5 つの引数を取ります。</p>

<ul>
 <li><code>xpathExpression</code>: 評価する XPath 式を文字列で指定します。</li>
 <li><code>contextNode</code>: <code>xpathExpression</code> を評価する対象となる文書内のノードを指定します。指定されたノードの全ての子ノードに対しても評価が行われます。もっともよく使用される値は <a href="/ja/docs/Web/API/Document">document</a> ノードです。</li>
 <li><code>namespaceResolver</code>: <code>xpathExpression</code> に含まれるあらゆる名前空間接頭辞を渡され、その接頭辞に対応する名前空間 URI を表す文字列を返す関数です。この関数により、 XPath 式で使われている接頭辞と文書内で使われている接頭辞が異なっていたとしてもそれを変換することが可能になります。この関数は次のいずれかです。

  <ul>
   <li><code><a href="http://www.xulplanet.com/references/objref/XPathEvaluator.html">XPathEvaluator</a></code> オブジェクトの <code><a href="/ja/DOM/document.createNSResolver">createNSResolver</a></code> メソッドにより<a href="#implementing_a_default_namespace_resolver">作成された</a>もの。ほとんどの場合はこれを使うべきでしょう。</li>
   <li>HTML 文書の場合や、名前空間接頭辞が使われていない場合は <code>null</code> 。<code>xpathExpression</code> に名前空間接頭辞が含まれている場合に null を使うと、 <code>DOMException</code> が<code>NAMESPACE_ERR</code> コードと共に投げられるので注意してください。</li>
   <li>ユーザー定義のカスタム関数。詳しくは付録の<a href="#implementing_a_user_defined_namespace_resolver">ユーザー定義名前空間リゾルバーの使用</a>の節を参照してください。</li>
  </ul>
 </li>
 <li><code>resultType</code>: 評価の結果返してほしい値の型を示す<a href="#xpathresult_defined_constants">定数</a>です。もっともよく指定される定数は <code>XPathResult.ANY_TYPE</code> で、この場合、指定された XPath 式に対して一番適切な型で結果が返されます。指定できる定数の一覧は付録の<a href="#xpathresult_defined_constants">定数一覧</a>の節を参照してください。それぞれの定数の使い方は「<a href="#specifying_the_return_type">返値の型の指定</a>」の節を参考にしてください。</li>
 <li><code>result</code>: 既存の <code>XPathResult</code> オブジェクトまたは <code>null</code> を指定します。 <code>XPathResult</code> オブジェクトが指定された場合には、そのオブジェクトが再利用されます。 <code>null</code> が指定された場合には新しい <code>XPathResult</code> オブジェクトが生成されます。</li>
</ul>

<h3 id="Return_Value">返値</h3>

<p><code>xpathResult</code> を返します。これは引数 <code>resultType</code> で<a href="#specifying_the_return_type">指定された</a>型の <code>XPathResult</code> オブジェクトです。<code>XPathResult</code> インターフェイスは<a href="/ja/docs/Web/API/XPathResult">ここ</a>で定義されています。</p>

<h3 id="Implementing_a_Default_Namespace_Resolver">既定の名前空間リゾルバーの実装</h3>

<p>名前空間リゾルバーを作成するには、普通は <a href="/ja/docs/Web/API/Document">document</a> オブジェクトの <code>createNSResolver</code> メソッドを使います。</p>

<pre class="brush: js">var nsResolver = document.createNSResolver( contextNode.ownerDocument == null ? contextNode.documentElement : contextNode.ownerDocument.documentElement );
</pre>

<p><span class="comment">または、 <code>XPathEvaluator</code> オブジェクトの <code>createNSResolver</code> メソッドを使います。</span></p>
<pre class="brush: js">var xpEvaluator = new XPathEvaluator();
var nsResolver = xpEvaluator.createNSResolver( contextNode.ownerDocument == null ? contextNode.documentElement : contextNode.ownerDocument.documentElement );
</pre>

それから 変数 <code>nsResolver</code> を引数 <code>namespaceResolver</code> として <code>document.evaluate</code> に渡します。</p>

<p>注: XPath では接頭辞のない QName は名前空間が null の要素にのみ一致すると定義しています。 XPath には、通常の要素参照に適用される既定の名前空間を取得する手段はありません。 (例: <code>xmlns='http://www.w3.org/1999/xhtml'</code> に対する <code>p[@id='_myid']</code>)。名前空間が null ではない既定の要素に一致させるには、 <code>['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_myid']</code> のような形を使用して特定の要素を参照するか (<a href="#using_xpath_functions_to_reference_elements_with_a_default_namespace">このアプローチ</a>は名前空間が不明である可能性のある動的な XPath で有効です)、接頭辞つきの名前テストを使用し、その接頭辞を名前空間にマッピングする名前空間リゾルバーを作成する必要があります。詳しくは下記の<a href="#implementing_a_user_defined_namespace_resolver">ユーザー定義の名前空間リゾルバーを作成する</a>方法を参照して下さい。</p>

<h3 id="Notes">注</h3>

<p>任意の DOM ノードを名前空間の解決に適応させると、 <a href="/ja/docs/Web/XPath">XPath</a> 式が文書内に現れたノードのコンテキストに関連して簡単に評価できるようになります。このアダプターは、ノード上の DOM Level 3 メソッド <code>lookupNamespaceURI</code> と同様に動作し、 <code>lookupNamespaceURI</code> が呼び出された時点でノードの階層で利用可能な現在の情報を使用して、指定された接頭辞から <code>namespaceURI</code> を解決します。また、暗黙の <code>xml</code> 接頭辞も正しく解決します。</p>

<h3 id="Specifying_the_Return_Type">返値の型を指定する</h3>

<p><code>document.evaluate</code> から返される変数 <code>xpathResult</code> は、単一のノード (<a href="#simple_types">単純型</a>) もしくはノードのコレクション (<a href="#node-set_types">ノード集合型</a>) から成ります。</p>

<h4 id="Simple_Types">単純型</h4>

<p><code>resultType</code> で要求された結果型が次のうちのどれかであった場合、</p>

<ul>
 <li><code>NUMBER_TYPE</code> - 倍精度浮動小数点数 (double)</li>
 <li><code>STRING_TYPE</code> - 文字列</li>
 <li><code>BOOLEAN_TYPE</code> - 真偽値</li>
</ul>

<p>それぞれ以下の <code>XPathResult</code> オブジェクトのプロパティにアクセスすることで式の返値を得る事ができます。</p>

<ul>
 <li><code>numberValue</code></li>
 <li><code>stringValue</code></li>
 <li><code>booleanValue</code></li>
</ul>

<h5 id="Example">例</h5>

<p>下の例では XPath 式 <code><a href="/ja/docs/Web/XPath/Functions/count">count(//p)</a></code> によって HTML 文書内の <code>&lt;p&gt;</code> 要素の数を取得しています。</p>

<pre class="brush: js">var paragraphCount = document.evaluate( 'count(//p)', document, null, XPathResult.ANY_TYPE, null );

alert( 'この文書には ' + paragraphCount.numberValue + ' 個の段落要素が含まれています' );
</pre>

<p>JavaScript では数値を表示しようとすると文字列に変換されますが、 XPath インターフェイスは <code>stringValue</code> プロパティを要求しても数値の結果を自動的に変換しないので、下のコードは<strong>動作しません</strong>。</p>

<pre class="brush: js">var paragraphCount = document.evaluate('count(//p)', document, null, XPathResult.ANY_TYPE, null );

alert( 'この文書には ' + paragraphCount.stringValue + ' 個の段落要素が含まれています' );
</pre>

<p>これを実行すると <code>NS_DOM_TYPE_ERROR</code> コードの例外が返されます。</p>

<h4 id="Node-Set_Types">ノード集合型</h4>

<p><code>XPathResult</code> オブジェクトが返すノード集合には主として 3 種類の型があります。</p>

<ul>
 <li><a href="#iterators">イテレーター</a></li>
 <li><a href="#snapshots">スナップショット</a></li>
 <li><a href="#first_node">ファーストノード</a></li>
</ul>

<h5 id="Iterators">イテレーター</h5>

<p>引数 <code>resultType</code> で指定された結果型が次のどちらかの場合、</p>

<ul>
 <li><code>UNORDERED_NODE_ITERATOR_TYPE</code></li>
 <li><code>ORDERED_NODE_ITERATOR_TYPE</code></li>
</ul>

<p>一致したノードのノード集合が <code>XPathResult</code> オブジェクトとして返されます。これはイテレーターのようにふるまい、 <code>XPathResult</code> の <code>iterateNext()</code> メソッドを使ってその中に含まれる個々のノードにアクセスできます。</p>

<p>一致したノードに対する反復が全て終了すると、 <code>iterateNext()</code> は <code>null</code> を返します。</p>

<p>ただし、反復処理中に文書が変異した (文書ツリーが改変された) 場合、反復処理は無効化され、<code>XPathResult</code> の <code>invalidIteratorState</code> プロパティが <code>true</code> に設定され、<code>NS_ERROR_DOM_INVALID_STATE_ERR</code> 例外が投げられます。</p>

<h6 id="Iterator_Example">イテレーターの使用例</h6>

<pre class="brush: js">var iterator = document.evaluate('//phoneNumber', documentNode, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );

try {
  var thisNode = iterator.iterateNext();

  while (thisNode) {
    alert( thisNode.textContent );
    thisNode = iterator.iterateNext();
  }
}
catch (e) {
  alert( 'Error: Document tree modified during iteration ' + e );
}
</pre>

<h5 id="Snapshots">スナップショット</h5>

<p>引数 <code>resultType</code> で指定された結果型が次のどちらかの場合、</p>

<ul>
 <li><code>UNORDERED_NODE_SNAPSHOT_TYPE</code></li>
 <li><code>ORDERED_NODE_SNAPSHOT_TYPE</code></li>
</ul>

<p>返される <code>XPathResult</code> オブジェクトは一致したノードの静的な集合となり、 <code>XPathResult</code> オブジェクトの <code>snapshotItem(itemNumber)</code> メソッドによってそれぞれのノードにアクセスできます。<code>itemNumber</code> は取り出すノードのインデックスです。含まれるノードの総数は <code>snapshotLength</code> プロパティから得られます。</p>

<p>スナップショットは文書が変化しても変更されず、イテレーターと違って無効になることはありませんが、スナップショットは現在の文書に対応しないことがあります。ノードが移動されていたり、既に存在しないノードが含まれていたり、新しいノードが追加されている可能性もあります。</p>

<h6 id="Snapshot_Example">スナップショットの使用例</h6>

<pre class="brush: js">var nodesSnapshot = document.evaluate('//phoneNumber', documentNode, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );

for ( var i=0 ; i &lt; nodesSnapshot.snapshotLength; i++ )
{
  alert( nodesSnapshot.snapshotItem(i).textContent );
}
</pre>

<h5 id="First_Node">ファーストノード</h5>

<p>引数 <code>resultType</code> で指定された結果型が次のどちらかの場合、</p>

<ul>
 <li><code>ANY_UNORDERED_NODE_TYPE</code></li>
 <li><code>FIRST_ORDERED_NODE_TYPE</code></li>
</ul>

<p>返される <code>XPathResult</code> オブジェクトは XPath 式に一致するノードのうち最初に見つかったもののみです。このノードには <code>XPathResult</code> オブジェクトの <code>singleNodeValue</code> プロパティによってアクセスできます。ノード集合が空ならばこのプロパティは <code>null</code> になります。</p>

<p>ただし、 unordered サブタイプの場合、返される単一のノードは文書順において最初のものではない可能性があるので注意が必要です。 ordered サブタイプの場合は文書順において最初に一致するノードであることが保証されます。</p>

<h6 id="First_Node_Example">ファーストノードの使用例</h6>

<pre class="brush: js">var firstPhoneNumber = document.evaluate('//phoneNumber', documentNode, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null );

alert( 'The first phone number found is ' + firstPhoneNumber.singleNodeValue.textContent );
</pre>

<h4 id="The_ANY_TYPE_Constant">ANY_TYPE 定数</h4>

<p>引数 <code>resultType</code> に指定された結果型が <code>ANY_TYPE</code> である場合、返される <code>XPathResult</code> オブジェクトは、式を評価した結果から導き出される適切な型になります。</p>

<p>返される結果型は単純型 (<code>NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE</code> ) のうちのいずれにもなり得ます<strong>が</strong>、もしノード集合であった場合には、<code>UNORDERED_NODE_ITERATOR_TYPE</code> に<strong>しか</strong>なり得ません。</p>

<p>評価の後に型を判断するには、 <code>XPathResult</code> オブジェクトの <code>resultType</code> プロパティを使います。このプロパティの<a href="#xpathresult_defined_constants">定数</a>値は付録に記載されています。 <span class="comment">None Yet =====Any_Type Example===== &lt;pre&gt; &lt;/pre&gt;</span></p>

<h2 id="Examples">例</h2>

<h3 id="Within_an_HTML_Document">HTML 文書内で</h3>

<p>下のコードは、 XPath 式を評価する対象となる HTML 文書の内部や、それにリンクされた JavaScript 内に設置するためのものです。</p>

<p>XPath を使って HTML 文書内のすべての <code>&lt;h2&gt;</code> 見出し要素を抽出したければ、<code>xpathExpression</code> は単に '<code>//h2</code>' となります。 <code>//</code> は再帰下降演算子 (Recursive Descent Operator) なので、この式は文書ツリー内のあらゆる位置にある、nodeName が <code>h2</code> である要素に一致します。 <span class="comment">link to introductory xpath doc</span></p>

<pre class="brush: js">var headings = document.evaluate('//h2', document, null, XPathResult.ANY_TYPE, null );
</pre>

<p>HTML には名前空間がないため、引数 <code>namespaceResolver</code> には <code>null</code> を渡している事に注目してください。</p>

<p>文書全体から見出し要素を探すため、ここでは <a href="/ja/docs/Web/API/Document">document</a> オブジェクト自体を <code>contextNode</code> として使っています。</p>

<p>この式の結果は <code>XPathResult</code> オブジェクトです。返された結果の型を知りたい場合は、返されたオブジェクトの <code>resultType</code> プロパティを評価してください。この場合は <code>4</code> 、つまり <code>UNORDERED_NODE_ITERATOR_TYPE</code> と評価されるでしょう。これは XPath 式の結果がノード集合であった場合の既定の結果型です。この型はノードに一つずつアクセスすることができ、返されるノードの順序は決まっていません。返されたノードにアクセスするには、返されたオブジェクトの <code>iterateNext()</code> メソッドを使います。</p>

<pre class="brush: js">var thisHeading = headings.iterateNext();

var alertText = 'この文書内のレベル 2 の見出しは、\n'

while (thisHeading) {
  alertText += thisHeading.textContent + '\n';
  thisHeading = headings.iterateNext();
}
</pre>

<p>反復によってノードを得られたら、そのノードのすべての標準 DOM インターフェイスにアクセスできます。式によって返される <code>h2</code> 要素に対する反復処理が全て終了すると、それ以降は <code>iterateNext()</code> を何度呼び出しても <code>null</code> が返されます。</p>

<h3 id="Evaluating_against_an_XML_document_within_an_Extension">拡張機能内の XML 文書に対して評価する</h3>

<p>例として XML 文書が <code>chrome://yourextension/content/peopleDB.xml</code> にあったとします。</p>

<pre class="brush: xml">&lt;?xml version="1.0"?&gt;
&lt;people xmlns:xul = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul" &gt;
  &lt;person&gt;
	&lt;name first="george" last="bush" /&gt;
	&lt;address street="1600 pennsylvania avenue" city="washington" country="usa"/&gt;
	&lt;phoneNumber&gt;202-456-1111&lt;/phoneNumber&gt;
  &lt;/person&gt;
  &lt;person&gt;
	&lt;name first="tony" last="blair" /&gt;
	&lt;address street="10 downing street" city="london" country="uk"/&gt;
	&lt;phoneNumber&gt;020 7925 0918&lt;/phoneNumber&gt;
  &lt;/person&gt;
&lt;/people&gt;
</pre>

<p>拡張機能内で XML 文書の内容を取得できるようにするため、<code><a href="/ja/XMLHttpRequest">XMLHttpRequest</a></code> オブジェクトを作成して文書を同期的に読み込みます。変数 <code>xmlDoc</code> には文書が <code><a href="/ja/XMLDocument">XMLDocument</a></code> オブジェクトとして格納されるので、それに対して <code>evaluate</code> メソッドを使う事ができます。</p>

<p>拡張機能の xul/js 文書で使用する JavaScript は以下の通りです。</p>

<pre class="brush: js">var req = new XMLHttpRequest();

req.open("GET", "chrome://yourextension/content/peopleDB.xml", false);
req.send(null);

var xmlDoc = req.responseXML;

var nsResolver = xmlDoc.createNSResolver( xmlDoc.ownerDocument == null ? xmlDoc.documentElement : xmlDoc.ownerDocument.documentElement);

var personIterator = xmlDoc.evaluate('//person', xmlDoc, nsResolver, XPathResult.ANY_TYPE, null );
</pre>

<h3 id="Note">注</h3>

<p>XPathResult オブジェクトが定義されていない場合は、 <code>Components.interfaces.nsIDOMXPathResult.ANY_TYPE</code> (<code>CI.nsIDOMXPathResult</code>) を使用して、特権的なコードで定数を取得できます。同様に、 XPathEvaluator は次のようにして作成できます。</p>

<pre class="brush: js">Components.classes["@mozilla.org/dom/xpath-evaluator;1"].createInstance(Components.interfaces.nsIDOMXPathEvaluator)</pre>

<h2 id="Appendix">付録</h2>

<h4 id="Implementing_a_User_Defined_Namespace_Resolver">ユーザー定義の名前空間リゾルバーの実装</h4>

<p>この例は説明のためだけのものです。 この関数は、<code>xpathExpression</code> から名前空間接頭辞を取り、その接頭辞に対応する URI を返さなければなりません。例えば、この式は、</p>

<pre>'//xhtml:td/mathml:math'
</pre>

<p>(X)HTML のテーブルデータセル要素の子要素である全ての <a href="/ja/docs/Web/MathML">MathML</a> 式を選択します。</p>

<p>接頭辞 '<code>mathml:</code>' と 名前空間 URI '<code>http://www.w3.org/1998/Math/MathML</code>' を、接頭辞 '<code>xhtml:</code>' と URI '<code>http://www.w3.org/1999/xhtml</code>' をそれぞれ関連付けるため、関数を用意します。</p>

<pre class="brush: js">function nsResolver(prefix) {
  var ns = {
    'xhtml' : 'http://www.w3.org/1999/xhtml',
    'mathml': 'http://www.w3.org/1998/Math/MathML'
  };
  return ns[prefix] || null;
}
</pre>

<p>そうすると <code>document.evaluate</code> をこのようにして呼び出せます。</p>

<pre class="brush: js">document.evaluate( '//xhtml:td/mathml:math', document, nsResolver, XPathResult.ANY_TYPE, null );
</pre>

<h4 id="Implementing_a_default_namespace_for_XML_documents">XML 文書の既定の名前空間を実装する</h4>

<p><a href="#implementing_a_default_namespace_resolver">既定の名前空間リゾルバーの実装</a>で述べたように、既定のリゾルバーは XML 文書の既定の名前空間を処理しません。たとえばこの文書では、</p>

<pre class="brush: xml">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;feed xmlns="http://www.w3.org/2005/Atom"&gt;
    &lt;entry /&gt;
    &lt;entry /&gt;
    &lt;entry /&gt;
&lt;/feed&gt;
</pre>

<p><code>doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)</code> は、<code>nsResolver</code> が <code>createNSResolver</code> によって返されたリゾルバーである場合、空集合を返します。リゾルバーとして <code>null</code> を渡しても同じです。</p>

<p>正しい既定の名前空間 (この場合は Atom 名前空間) を返すカスタムリゾルバーを作成すれば、この問題を解決できます。この時、 XPath 式の中ではなんらかの名前空間接頭辞を使わなければならないことに注意してください。これはリゾルバー関数がその接頭辞を指定した名前空間に変換できるようにするためです。例えばこのようにします。</p>

<pre class="brush: js">function resolver() {
    return 'http://www.w3.org/2005/Atom';
}
doc.evaluate('//myns:entry', doc, resolver, XPathResult.ANY_TYPE, null)
</pre>

<p>なお、文書で複数の名前空間が使われている場合には、より複雑なリゾルバーが必要になります。</p>

<p>次の節では、より効果的に機能する (名前空間を事前に知らなくてもよい) アプローチについて説明します。</p>

<h4 id="Using_XPath_functions_to_reference_elements_with_a_default_namespace">XPath 関数を使用して既定の名前空間の要素を参照する</h4>

<p>null ではない名前空間の既定の要素に一致させる (そして名前空間が分からない動的な XPath 式で上手く動作する) もう一つの方法として、 <code>[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_myid']</code> のような形式で特定の要素を参照する方法があります。これにより、XPath クエリーが正規にラベル付けされた要素の既定の名前空間を検出できないという問題が回避されます。</p>

<h4 id="Getting_specifically_namespaced_elements_and_attributes_regardless_of_prefix">接頭辞に関係ない、名前空間付きの要素や属性の取得</h4>

<p>名前空間の要素や属性を見つける際に特定の接頭辞を必ずしも必要とせず、 (意図的に) 名前空間に柔軟性を持たせたい場合は、特別な手法を用いなければなりません。</p>

<p>上の節のアプローチを応用して、選択された接頭辞に関係なく名前空間の要素をテストすることは (<code><a href="/ja/docs/Web/XPath/Functions/local-name">local-name()</a></code> と <code><a href="/ja/docs/Web/XPath/Functions/namespace-uri">namespace-uri()</a></code> を組み合わせて <code><a href="/ja/docs/Web/XPath/Functions/name">name()</a></code> の代わりに使用すれば) 可能ですが、特定の名前空間属性を持つ要素を述語の中に取り込みたい場合には、より困難な状況が発生します (XPath 1.0 には実装に依存しない変数が存在しないため)。</p>

<p>たとえば、次のように namespaced 属性を持つ要素を取得しようとすると、 (間違って) <code>var xpathlink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];</code> となります。</p>

<p>この方法では、ローカル名が "<code>href</code>" である属性が存在しても、その属性が (<code><a href="/ja/docs/Web/XPath/Axes/attribute">@href</a></code> ではなく) 対象となる (XLink) 名前空間を持つ別の属性であった場合、誤って一部の要素を取得してしまう可能性があります。</p>

<p>XLink の <code>@href</code> 属性を持つ要素を (名前空間リゾルバーで定義済みの接頭辞にとらわれずに) 正確に把握するためには、次のようにして取得することができます。</p>

<pre class="brush: js">var xpathEls = 'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Grabs elements with any single attribute that has both the local name 'href' and the XLink namespace
var thislevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
var thisitemEl = thislevel.iterateNext();
</pre>

<h4 id="XPathResult_Defined_Constants">XPathResult の定義済み定数</h4>

<table class="standard-table">
 <thead>
  <tr>
   <td class="header">定義済みの結果型定数</td>
   <td class="header">値</td>
   <td class="header">解説</td>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>ANY_TYPE</td>
   <td>0</td>
   <td>式の評価によって導き出される適切な型を格納した結果の集合。結果がノード集合ならば、結果の型は常に UNORDERED_NODE_ITERATOR_TYPE となるので注意が必要。</td>
  </tr>
  <tr>
   <td>NUMBER_TYPE</td>
   <td>1</td>
   <td>一つの数値を格納した結果。 <code>count()</code> 関数を使用した XPath 式などで有用。</td>
  </tr>
  <tr>
   <td>STRING_TYPE</td>
   <td>2</td>
   <td>一つの文字列を格納した結果。</td>
  </tr>
  <tr>
   <td>BOOLEAN_TYPE</td>
   <td>3</td>
   <td>一つの真偽値を格納した結果。 <code>not()</code> 関数を使用した XPath 式などで有用。</td>
  </tr>
  <tr>
   <td>UNORDERED_NODE_ITERATOR_TYPE</td>
   <td>4</td>
   <td>一致した全てのノードを格納した結果ノード集合。ノードの順番は文書内に現れる順番と必ずしも一致しない。</td>
  </tr>
  <tr>
   <td>ORDERED_NODE_ITERATOR_TYPE</td>
   <td>5</td>
   <td>一致した全てのノードを格納した結果ノード集合。ノードの順番は文書内に現れる順番に一致する。</td>
  </tr>
  <tr>
   <td>UNORDERED_NODE_SNAPSHOT_TYPE</td>
   <td>6</td>
   <td>一致した全てのノードのスナップショットを格納した結果ノード集合。ノードの順番は文書内に現れる順番と必ずしも一致しない。</td>
  </tr>
  <tr>
   <td>ORDERED_NODE_SNAPSHOT_TYPE</td>
   <td>7</td>
   <td>一致した全てのノードのスナップショットを格納した結果ノード集合。ノードの順番は文書内に現れる順番に一致する。</td>
  </tr>
  <tr>
   <td>ANY_UNORDERED_NODE_TYPE</td>
   <td>8</td>
   <td>一致したノードのうちのどれか一つを格納した結果ノード集合。これは必ずしも文書内で式に一致した最初のノードというわけではない。</td>
  </tr>
  <tr>
   <td>FIRST_ORDERED_NODE_TYPE</td>
   <td>9</td>
   <td>一致内で式に一致した最初のノードを格納した結果ノード集合。</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/XPath">XPath</a></li>
 <li><a href="http://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info">XML Path Language</a> from <em><a href="http://www.xml.com/pub/a/2000/08/holman/">What is XSLT?</a></em> by G. Ken Holman</li>
</ul>

<div class="originaldocinfo">
<h2 id="Original_Document_Information">原文情報</h2>

<ul>
 <li>原文 <a href="http://www-xray.ast.cam.ac.uk/~jgraham/mozilla/xpath-tutorial.html">Mozilla XPath Tutorial</a> に基づいて作成されています。</li>
 <li>原文の著者: James Graham</li>
 <li>その他の貢献者: James Thompson</li>
 <li>最終更新日: 2006 年 3 月 25 日</li>
</ul>
</div>

<p> </p>
