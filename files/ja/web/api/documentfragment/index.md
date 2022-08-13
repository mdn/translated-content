---
title: DocumentFragment
slug: Web/API/DocumentFragment
tags:
  - API
  - DOM
  - DocumentFragment
  - Reference
  - インターフェイス
  - ウェブコンポーネント
  - 文書
translation_of: Web/API/DocumentFragment
---
<p>{{ APIRef("DOM") }}</p>

<p><strong><code>DocumentFragment</code></strong> インターフェイスは、親ノードを持たない最小限の文書オブジェクト (文書の断片) を表します。これは {{domxref("Document")}} の軽量版として使用され、標準の文書のようにノードで構成される文書構造の区間を格納します。重要な違いは、文書の断片はアクティブな文書ツリー構造の一部ではないため、断片に対して変更を行っても、文書に影響したり、{{Glossary("reflow", "再フロー")}}を起こしたり、変更が行われたときに性能上の影響を及ぼしたりすることがないことです。</p>

<p><code>DocumentFragment</code> の一般的な利用方法は、まず一つ作成し、その中に DOM のサブツリーを構成し、 {{domxref("Node")}} インターフェイスの {{domxref("Node.appendChild", "appendChild()")}} または {{domxref("Node.insertBefore", "insertBefore()")}} などのメソッドを利用して断片を DOM に追加または挿入することです。こうすると断片のノードは DOM に移動し、空の <code>DocumentFragment</code> が残ります。すべてのノードが文書に一括で挿入されるため、それぞれのノードが別個に挿入されれば、その度に再フローや描画が起動する可能性があるところが、この場合は一度しか起動されません。</p>

<p>このインターフェイスはウェブコンポーネントでも大いに役に立っています。 {{HTMLElement("template")}} 要素はその {{domxref("HTMLTemplateElement.content")}} プロパティに <code>DocumentFragment</code> を含みます。</p>

<p>空の <code>DocumentFragment</code> は {{domxref("document.createDocumentFragment")}} メソッドやコンストラクターを使って作成できます。</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Properties" name="Properties">プロパティ</h2>

<p><em>このインターフェイスには固有のプロパティはありませんが、その親である {{domxref("Node")}} のプロパティを継承し、 {{domxref("ParentNode")}} インターフェイスのプロパティを実装しています。</em></p>

<dl>
 <dt>{{ domxref("ParentNode.children") }} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd><code>DocumentFragment</code> オブジェクトの子である型 {{domxref("Element")}} のすべてのオブジェクトを含む、「生」の {{domxref("HTMLCollection")}} を返します。</dd>
 <dt>{{ domxref("ParentNode.firstElementChild") }} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd><code>DocumentFragment</code> オブジェクトの最初の子である {{domxref("Element")}}、または無ければ <code>null</code> を返します。</dd>
 <dt>{{ domxref("ParentNode.lastElementChild") }} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd><code>DocumentFragment</code> オブジェクトの最後の子である {{domxref("Element")}}、または無ければ <code>null</code> を返します。</dd>
 <dt>{{ domxref("ParentNode.childElementCount") }} {{readonlyInline}}{{experimental_inline}}</dt>
 <dd><code>DocumentFragment</code> が持つ子の数を表す <code>unsigned long</code> を返します。</dd>
</dl>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }} {{experimental_inline}}</dt>
 <dd>空の <code>DocumentFragment</code> オブジェクトを返します。</dd>
</dl>

<h2 id="Methods" name="Methods">メソッド</h2>

<p><em>このインターフェイスはその親である {{domxref("Node")}} のメソッドを継承し、 {{domxref("ParentNode")}} インターフェイスのメソッドを実装しています。</em></p>

<dl>
 <dt>{{domxref("DocumentFragment.querySelector()")}}</dt>
 <dd><code>DocumentFragment</code> の中で、文書の順序で見た場合に、指定されたセレクターに一致する最初の {{domxref("Element")}} ノードを返します。</dd>
 <dt>{{domxref("DocumentFragment.querySelectorAll()")}}</dt>
 <dd><code>DocumentFragment</code> の中で、指定されたセレクターに一致するすべての {{domxref("Element")}} ノードの {{domxref("NodeList")}} を返します。</dd>
 <dt>{{domxref("DocumentFragment.getElementById()")}}</dt>
 <dd><code>DocumentFragment</code> の中で、文書の順序で見た場合に、指定された ID に一致する最初の {{domxref("Element")}} ノードを返します。</dd>
</dl>

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
   <td>{{SpecName('DOM WHATWG', '#interface-documentfragment', 'DocumentFragment')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>コンストラクターと {{domxref("ParentNode")}} の実装を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('Selectors API Level 1', '#the-apis', 'DocumentFragment')}}</td>
   <td>{{Spec2('Selectors API Level 1')}}</td>
   <td><code>querySelector()</code> と <code>querySelectorAll()</code> メソッドを追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core', 'core.html#ID-B63ED1A3', 'DocumentFragment')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>{{SpecName('DOM2 Core')}} より変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core', 'core.html#ID-B63ED1A3', 'DocumentFragment')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>{{SpecName('DOM1')}} より変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1', 'level-one-core.html#ID-B63ED1A3', 'DocumentFragment')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.DocumentFragment")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Document_Object_Model">DOM インターフェイスの目次</a></li>
</ul>
