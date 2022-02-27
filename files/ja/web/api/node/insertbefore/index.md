---
title: Node.insertBefore()
slug: Web/API/Node/insertBefore
tags:
  - API
  - DOM
  - Element
  - Method
  - Node
  - Reference
  - メソッド
translation_of: Web/API/Node/insertBefore
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary"> <code><strong>Node.insertBefore()</strong></code> メソッドは、ノードを<em>参照ノード</em>の前に、指定された<em>親ノード</em>の子として挿入します。</span></p>

<p>指定されたノードが既に文書中に存在した場合、 <code>insertBefore()</code> はこれを現在の位置から新しい位置に移動します。 (つまり、既存の親ノードから自動的に削除され、指定された新しい親に追加されます。)</p>

<p>これは、1つのノードが文書中に同時に2か所に存在できないことを意味します。</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> {{domxref("Node.cloneNode()")}} を使用して、ノードを新しい親の下に追加する前に複製を作成することができます。なお、 <code>cloneNode()</code> で作成された複製は自動的には同期されません。</p>
</div>

<p>指定された子が {{domxref("DocumentFragment")}} である場合、 <code>DocumentFragment</code> の内容全体が指定された親ノードの子リストに移動されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">let <var>insertedNode</var> = <var>parentNode</var>.insertBefore(<var>newNode</var>, <var>referenceNode</var>)
</pre>

<dl>
 <dt><code><var>insertedNode</var></code></dt>
 <dd>挿入されたノード (<code><var>newNode</var></code> と同じ) です。</dd>
 <dt><code><var>parentNode</var></code></dt>
 <dd>新しく挿入されるノードの親です。</dd>
 <dt><code><var>newNode</var></code></dt>
 <dd>挿入されるノードです。</dd>
 <dt><code><var>referenceNode</var></code></dt>
 <dd> <code><var>newNode</var></code> がこのノードの直前に挿入されます。このノードが <code>null</code> である場合は、 <code><var>newNode</var></code> は <code><var>parentNode</var></code> の子ノードの末尾に挿入されます。</dd>
</dl>

<div class="note">
<p><strong>メモ:</strong> <code><var>referenceNode</var></code> は省略可能な引数では<strong>ありません</strong>。明示的に {{domxref("Node")}} または <code>null</code> を渡す必要があります。渡し忘れた場合や無効な値を渡した場合は、ブラウザーのバージョンによって<a href="https://code.google.com/p/chromium/issues/detail?id=419780">異なる</a><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=119489">動作</a>をすることがあります。</p>
</div>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>追加された子ノードを返します (ただし <code><var>newNode</var></code> が {{domxref("DocumentFragment")}} の場合は、空の {{domxref("DocumentFragment")}} が返ります)。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="Example_1" name="Example_1">例 1</h3>

<pre class="brush: html">&lt;div id="parentElement"&gt;
   &lt;span id="childElement"&gt;foo bar&lt;/span&gt;
&lt;/div&gt;

&lt;script&gt;
// 挿入する新しいノードを作成する
let newNode = document.createElement("span")

// 親ノードの参照を取得する
let parentDiv = document.getElementById("childElement").parentNode

// テストケース [ 1 ] 開始: 既存の childElement (すべて正しく動作)
let sp2 = document.getElementById("childElement")
parentDiv.insertBefore(newNode, sp2)
// テストケース [ 1 ] 終了

// テストケース [ 2 ] 開始: childElement が undefined 型の場合
let sp2 = undefined // "childElement" の ID を持つノードが存在しない
parentDiv.insertBefore(newNode, sp2) // Node 型に暗黙に動的型変換
// テストケース [ 2 ] 終了

// テストケース [ 3 ] 開始: childElement が "undefined" (文字列) の場合
let sp2 = "undefined" // "childElement" の ID を持つノードが存在しない
parentDiv.insertBefore(newNode, sp2) // Generates "Type Error: Invalid Argument"
// テストケース [ 3 ] 終了
&lt;/script&gt;
</pre>

<h3 id="Example_2" name="Example_2">例 2</h3>

<pre class="brush:html">&lt;div id="parentElement"&gt;
  &lt;span id="childElement"&gt;foo bar&lt;/span&gt;
&lt;/div&gt;

&lt;script&gt;
// 新しい只の &lt;span&gt; 要素を作成
let sp1 = document.createElement("span")

// 参照要素を取得
let sp2 = document.getElementById("childElement")
// 親要素を取得
let parentDiv = sp2.parentNode

// 新しい要素を sp2 の手前に挿入
parentDiv.insertBefore(sp1, sp2)
&lt;/script&gt;
</pre>

<div class="blockIndicator note">
<p><strong>メモ:</strong> <code>insertAfter()</code> メソッドはありません。これは <code>insertBefore</code> メソッドと {{domxref("Node.nextSibling")}} の組み合わせでエミュレートできます。</p>
</div>

<p>前の例では、 <code>sp1</code> は以下のようにして <code>sp2</code> の後に挿入することができます。</p>

<pre class="brush: js"><code>parentDiv.insertBefore(sp1, sp2.nextSibling)</code></pre>

<p><code>sp2</code> に次の兄弟がない場合、これは最後の子ノードです。 — <code>sp2.nextSibling</code> は <code>null</code> を返し、 <code>sp1</code> は子ノードリストの末尾 (<code>sp2</code> の直後) に挿入されます。</p>

<h3 id="Example_3" name="Example_3">例 3</h3>

<p>要素を最初の子要素の前に挿入するために、 {{domxref("Node/firstChild", "firstChild")}} プロパティを使用します。</p>

<pre class="brush:js">// 親ノードを取得
let parentElement = document.getElementById('parentElement')
// 親の最初の子を取得
let theFirstChild = parentElement.firstChild

// 新しい要素を取得
let newElement = document.createElement("div")

// 最初の子の前に新しい要素を挿入
parentElement.insertBefore(newElement, theFirstChild)
</pre>

<p>要素に最初の子がない場合、 <code>firstChild</code> は <code>null</code> になります。その場合も、要素は親の最後の子の後に追加されます。</p>

<p>親要素が最初の子を持っていない場合は、最後の子も持っていません。結果的に、新しく挿入された要素は<em>唯一の</em>要素になります。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="spectable standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM WHATWG','#dom-node-insertbefore','Node.insertBefore')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>挿入アルゴリズムのエラーを修正</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM4','#dom-node-insertbefore','Node.insertBefore')}}</td>
   <td>{{Spec2('DOM4')}}</td>
   <td>より詳細にアルゴリズムを記述</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core','core.html#ID-952280727','Node.insertBefore')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>目立った変更はなし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core','core.html#ID-952280727','Node.insertBefore')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>目立った変更はなし</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM1','level-one-core.html#method-insertBefore','Node.insertBefore')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>導入</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Node.insertBefore")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Node.removeChild()")}}</li>
 <li>{{domxref("Node.replaceChild()")}}</li>
 <li>{{domxref("Node.appendChild()")}}</li>
 <li>{{domxref("Node.hasChildNodes()")}}</li>
 <li>{{domxref("Element.insertAdjacentElement()")}}</li>
 <li>{{domxref("ParentNode.prepend()")}}</li>
</ul>
