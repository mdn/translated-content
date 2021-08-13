---
title: Document.querySelectorAll()
slug: Web/API/Document/querySelectorAll
tags:
  - API
  - CSS Selectors
  - DOM
  - Document
  - Finding Elements
  - Locating Elements
  - Method
  - Reference
  - Searching Elements
  - Selecting Elements
  - Selectors
  - querySelectorAll
  - メソッド
translation_of: Web/API/Document/querySelectorAll
---
<div>{{APIRef("DOM")}}</div>

<p>{{domxref("Document")}} の <code><strong>querySelectorAll()</strong></code> メソッドは、与えられた CSS セレクターに一致する文書中の要素のリストを示す静的な (生きていない) {{domxref("NodeList")}} を返します。</p>

<div class="note">
<p><strong>メモ:</strong> このメソッドは {{domxref("ParentNode")}} ミックスインの {{domxref("ParentNode.querySelectorAll", "querySelectorAll()")}} メソッドを元に実装されています。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>elementList</var> = <em>parentNode</em>.querySelectorAll(<var>selectors</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>selectors</code></dt>
 <dd>マッチのための 1 つまたは複数のセレクターを含む {{domxref("DOMString")}}。この文字列は妥当な <a href="/ja/docs/Web/CSS/CSS_Selectors">CSS セレクター</a>でなければならず、そうでない場合は <code>SyntaxError</code> 例外がスローされます。セレクターの仕様と要素の識別の詳細は、<a href="/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors">セレクターを使用した DOM 要素の指定</a>を参照してください。複数のセレクターを指定する際は、カンマで区切ります。</dd>
</dl>

<div class="note">
<p><strong>メモ:</strong> 標準の CSS 構文の一部ではない文字は、バックスラッシュ文字を使ってエスケープしなければなりません。 JavaScript でもバックスラッシュによるエスケープが使われているため、これらの文字を使った文字列リテラルを記述する際は、特に注意する必要があります。詳細は {{anch("Escaping special characters")}} を参照してください。</p>
</div>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定されたセレクターの少なくとも一つに一致する要素ごとに {{domxref("Element")}} を一つずつ含む、生きていない {{domxref("NodeList")}}、または一致するものがなければ空の {{domxref("NodeList")}} です。</p>

<div class="note">
<p><strong>メモ:</strong> 指定された <code>selectors</code> が <a href="/ja/docs/Web/CSS/Pseudo-elements">CSS 擬似要素</a>を含む場合、返されるリストは常に空になります。</p>
</div>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt><code>SyntaxError</code></dt>
 <dd>指定された <code>selectors</code> の構文が妥当ではない。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Obtaining_a_list_of_matches" name="Obtaining_a_list_of_matches">一致のリストの入手</h3>

<p>文書内のすべての {{HTMLElement("p")}} 要素の {{domxref("NodeList")}} を入手します。</p>

<pre class="brush: js">var matches = document.querySelectorAll("p");</pre>

<p>次の例では、文書内にある <code>note</code> または <code>alert</code> のいずれかのクラスを持つ、すべての {{HTMLElement("div")}} 要素のリストを返します。</p>

<pre class="brush: js">var matches = document.querySelectorAll("div.note, div.alert");
</pre>

<p>次に、 <code>test</code> という ID を持つコンテナ内に位置し、直接の親要素が <code>highlighted</code> クラスを持つ {{HTMLElement("div")}} である、<code>&lt;p&gt;</code> 要素のリストを取得します。</p>

<pre class="brush: js">var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted &gt; p");</pre>

<p>次の例では<a href="/ja/docs/Web/CSS/Attribute_selectors">属性セレクター</a>を使用しており、 <code>data-src</code> という名前の属性を持つ、文書内の {{HTMLElement("iframe")}} 要素のリストを返します。</p>

<pre class="brush: js">var matches = document.querySelectorAll("iframe[data-src]");</pre>

<p>次の例では、ID が <code>"userlist"</code> の要素の中にあり、<code>"data-active"</code> 属性を持ち、その値が <code>"1"</code> であるリスト項目のリストを返すため、属性セレクターが使用されています。</p>

<pre class="brush: js">var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active='1']");</pre>

<h3 id="Accessing_the_matches" name="Accessing_the_matches">一致したリストへのアクセス</h3>

<p>一旦、一致した要素の {{domxref("NodeList")}} が返されると、それをちょうど配列のように試すことができます。配列が空である (<code>length</code> プロパティが 0 である) 場合は、一致がなかったということです。</p>

<p>それ以外の場合は、単純に標準の配列表記を使って、リストの内容にアクセスすることができます。次のように、任意の一般的なループ処理を使うことができます。</p>

<pre class="brush: js">var highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function(userItem) {
  deleteUser(userItem);
});</pre>

<h2 id="User_notes" name="User_notes">ユーザーのメモ</h2>

<p>querySelectorAll() は、最も一般的な JavaScript DOM ライブラリと異なる動作を持ち、意図しない結果をもたらすことがあります。</p>

<h3 id="HTML">HTML</h3>

<p>次の、入れ子になった 3 つの {{HTMLElement("div")}} ブロックを持つ HTML について検討します。</p>

<pre class="brush: html">&lt;div class="outer"&gt;
  &lt;div class="select"&gt;
    &lt;div class="inner"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var select = document.querySelector('.select');
var inner = select.querySelectorAll('.outer .inner');
inner.length; // 1 です。0 ではありません!
</pre>

<p>この例では、<code>"select"</code> class を持つ <code>&lt;div&gt;</code> の文脈で <code>".outer .inner"</code> を選択するとき、<code>.outer</code> が基準となる要素（<code>.select</code> で検索される）の子孫ではないにもかかわらず、<code>".inner"</code> class を持つ要素が見つけられています。<code>querySelectorAll()</code> はデフォルトでは、セレクターの最後の要素が検索スコープに含まれているかどうかのみ検証します。</p>

<p>{{cssxref(":scope")}} 擬似クラスを使うと、基準となる要素の子孫だけが一致するようになり、期待される挙動を取り戻すことができます。</p>

<pre class="brush: js">var select = document.querySelector('.select');
var inner = select.querySelectorAll(':scope .outer .inner');
inner.length; // 0
</pre>

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
   <td>{{SpecName("DOM WHATWG", "#dom-parentnode-queryselectorall", "ParentNode.querySelectorAll()")}}</td>
   <td>{{Spec2("DOM WHATWG")}}</td>
   <td>Living standard</td>
  </tr>
  <tr>
   <td>{{SpecName("Selectors API Level 2", "#dom-parentnode-queryselectorall", "ParentNode.querySelectorAll()")}}</td>
   <td>{{Spec2("Selectors API Level 2")}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{SpecName("DOM4", "#dom-parentnode-queryselectorall", "ParentNode.querySelectorAll()")}}</td>
   <td>{{Spec2("DOM4")}}</td>
   <td>初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName("Selectors API Level 1", "#interface-definitions", "document.querySelector()")}}</td>
   <td>{{Spec2("Selectors API Level 1")}}</td>
   <td>独自の定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.querySelectorAll")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors">セレクターを使用した DOM 要素の指定</a></li>
 <li>CSS ガイドの<a href="/ja/docs/Web/CSS/Attribute_selectors">属性セレクター</a></li>
 <li>MDN 学習エリアの<a href="/ja/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors">属性セレクター</a></li>
 <li>{{domxref("Element.querySelector()")}} および {{domxref("Element.querySelectorAll()")}}</li>
 <li>{{domxref("Document.querySelector()")}}</li>
 <li>{{domxref("DocumentFragment.querySelector()")}} および {{domxref("DocumentFragment.querySelectorAll()")}}</li>
 <li>{{domxref("ParentNode.querySelector()")}} および {{domxref("ParentNode.querySelectorAll()")}}</li>
 <li><a href="/ja/docs/Code_snippets/QuerySelector"><code>querySelector()</code> のコードスニペット</a></li>
</ul>
