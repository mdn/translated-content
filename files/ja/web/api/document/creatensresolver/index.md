---
title: Document.createNSResolver()
slug: Web/API/Document/createNSResolver
tags:
  - API
  - DOM
  - DOM Reference
  - Method
  - Reference
translation_of: Web/API/Document/createNSResolver
---
<p>{{ ApiRef("DOM") }}</p>

<p>指定されたノードのスコープで定義を尊重する名前空間を解決する <code>XPathNSResolver</code> を生成します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="eval notranslate"><var>nsResolver</var> = document.createNSResolver(<var>node</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<ul>
 <li><code><var>node</var></code> は名前空間の解決のためのコンテキストとして使用されるノードです。</li>
</ul>

<h3 id="Return_value" name="Return_value">返値</h3>

<ul>
 <li><code>nsResolver</code> は XPathNSResolver オブジェクトです。</li>
</ul>

<h2 id="Notes" name="Notes">注</h2>

<p>任意の DOM ノードをネームスペースを解決するように修正し、 <a href="/ja/docs/Web/XPath">XPath</a> 式が文書内に現れたノードのコンテキストに対して容易に評価できるようにします。このアダプターは、 <code>lookupNamespaceURI</code> が呼び出されたときにノードの階層で使用可能な現在の情報を使用して、指定された接頭辞から <code>namespaceURI</code> を解決する際に、ノード上の DOM Level 3 メソッド <code>lookupNamespaceURI</code> のように機能します。 暗黙の <code>xml</code> 接頭辞も正しく解決されます。</p>

<p>なお、 XPath は、ヌル名前空間の要素と一致する接頭辞のない QNames を定義します。 XPath には、通常の要素参照に適用される既定の名前空間を選択する方法はありません (例えば <code><span class="nowiki">xmlns='http://www.w3.org/1999/xhtml'</span></code> における <code>p[@id='_myid'</code>])。ヌルではない名前空間の既定の要素を照合するには、 <code>*namespace-uri()=<span class="nowiki">http://www.w3.org/1999/xhtml</span> and name()=p[@id='_myid']</code> のような形を使用して特定の要素を参照するか (<a href="/ja/docs/Web/JavaScript/Introduction_to_using_XPath_in_JavaScript#Using_XPath_functions_to_reference_elements_with_its_default_namespace">このアプローチ</a>は名前空間が分からない可能性がある動的 XPath 式で動作します)、接頭辞付きの名前の条件を使用し、接頭辞と名前空間を対応付ける名前空間リゾルバーを作成するかしてください。後者のアプローチを採りたいと思うのであれば、<a href="/ja/docs/Web/JavaScript/Introduction_to_using_XPath_in_JavaScript#Implementing_a_User_Defined_Namespace_Resolver">ユーザー定義の名前空間リゾルバーの作成方法</a>をお読みください。</p>

<p><code>createNSResolver</code> は DOM Level 3 で導入されました。</p>

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
   <td>{{SpecName('DOM3 XPath', 'xpath.html#XPathEvaluator-createNSResolver', 'document.createNSResolver')}}</td>
   <td>{{Spec2('DOM3 XPath')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.createNSResolver")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Document/evaluate">document.evaluate</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Introduction_to_using_XPath_in_JavaScript">Javascript での XPath の使用</a></li>
</ul>
