---
title: Element.querySelectorAll()
slug: Web/API/Element/querySelectorAll
tags:
  - API
  - CSS Selectors
  - DOM
  - Element
  - Finding Elements
  - Method
  - Reference
  - Searching Elements
  - Selecting Elements
  - Selectors
  - querySelector
browser-compat: api.Element.querySelectorAll
translation_of: Web/API/Element/querySelectorAll
original_slug: Web/API/ParentNode/querySelectorAll
---
<div>{{APIRef("DOM")}}</div>

<p>{{domxref("Element")}} の <code><strong>querySelectorAll()</strong></code> メソッドは、静的な (生きていない) {{domxref("NodeList")}} で、メソッド呼び出しの時点でそのオブジェクトの子孫にあたる要素のうち、一連のセレクターに一致するもののリストを返します。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><var>elementList</var> = <em>parentNode</em>.querySelectorAll(<var>selectors</var>);
</pre>

<h3 id="Parameters">引数</h3>

<dl>
 <dt><code>selectors</code></dt>
 <dd>一致させるための 1 つまたは複数のセレクターを含む {{domxref("DOMString")}}。この文字列は妥当な <a href="/ja/docs/Web/CSS/CSS_Selectors">CSS セレクター</a>でなければならず、そうでない場合は <code>SyntaxError</code> 例外が発生します。セレクターの仕様と要素の識別の詳細は、<a href="/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors">セレクターを使用した DOM 要素の指定</a>を参照してください。複数のセレクターを指定する際は、カンマで区切ります。</dd>
</dl>

<div class="note">
<p><strong>メモ:</strong> 標準の CSS 構文の一部ではない文字は、バックスラッシュ文字を使ってエスケープしなければなりません。 JavaScript でもバックスラッシュによるエスケープが使われているため、これらの文字を使った文字列リテラルを記述する際は、特に注意する必要があります。詳細は {{anch("Escaping special characters")}} を参照してください。</p>
</div>

<h3 id="Return_value">返値</h3>

<p>生きていない {{domxref("NodeList")}} で、指定されたセレクターの 1 つ以上に一致する子孫ノード 1 つに対して 1 つずつの {{domxref("Element")}} を含みます。</p>

<div class="note">
<p><strong>メモ:</strong> 指定された <code>selectors</code> が <a href="/ja/docs/Web/CSS/Pseudo-elements">CSS 擬似要素</a>を含む場合、返されるリストは常に空になります。</p>
</div>

<h3 id="Exceptions">例外</h3>

<dl>
 <dt><code>SyntaxError</code></dt>
 <dd>指定された <code>selectors</code> の構文が妥当ではない。</dd>
</dl>

<h2 id="Examples">例</h2>

<h3 id="dataset_selector_attribute_selectors">データセットセレクターと属性セレクター</h3>

<pre class="brush: html">&lt;section class="box" id="sect1"&gt;
  &lt;div class="funnel-chart-percent1"&gt;10.900%&lt;/div&gt;
  &lt;div class="funnel-chart-percent2"&gt;3700.00%&lt;/div&gt;
  &lt;div class="funnel-chart-percent3"&gt;0.00%&lt;/div&gt;
&lt;/section&gt;
</pre>

<pre class="brush: js">// データセットセレクター
const refs = [...document.querySelectorAll(`[data-name*="funnel-chart-percent"]`)];

// 属性セレクター
// const refs = [...document.querySelectorAll(`[class*="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class^="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class$="funnel-chart-percent"]`)];
// const refs = [...document.querySelectorAll(`[class~="funnel-chart-percent"]`)];
</pre>

<h3 id="Obtaining_a_list_of_matches">一致するもののリストの入手</h3>


<p>{{domxref("NodeList")}} で <code>"myBox"</code> 要素の中にあるすべての {{HTMLElement("p")}} 要素を取得するには、次のようにします。</p>

<pre class="brush: js">var matches = myBox.querySelectorAll("p");</pre>

<p>次の例では、文書内にある <code>note</code> または <code>alert</code> のいずれかのクラスを持つ、すべての {{HTMLElement("div")}} 要素のリストを返します。</p>

<pre class="brush: js">var matches = myBox.querySelectorAll("div.note, div.alert");
</pre>

<p>次に、 <code>"test"</code> という ID を持つコンテナー内に位置し、直接の親要素が <code>"highlighted"</code> クラスを持つ {{HTMLElement("div")}} である、<code>&lt;p&gt;</code> 要素のリストを取得します。</p>

<pre class="brush: js">var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted &gt; p");</pre>

<p>次の例では<a href="/ja/docs/Web/CSS/Attribute_selectors">属性セレクター</a>を使用しており、 <code>data-src</code> という名前の属性を持つ、文書内の {{HTMLElement("iframe")}} 要素のリストを返します。</p>

<pre class="brush: js">var matches = document.querySelectorAll("iframe[data-src]");</pre>

<p>次の例では、ID が <code>userlist</code> の要素の中にあり、<code>data-active</code> 属性を持ち、その値が <code>1</code> であるリスト項目のリストを返すため、属性セレクターが使用されています。</p>

<pre class="brush: js">var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active='1']");</pre>

<h3 id="Accessing_the_matches">一致したものへのアクセス</h3>

<p>一致した要素の {{domxref("NodeList")}} が返されると、配列と同様に調べることができます。配列が空であれば (つまり、 <code>length</code> プロパティが 0 であれば)、一致するものが見つからなかったということです。</p>

<p>それ以外の場合は、標準的な配列記法でリストの内容にアクセスすることができます。次のような一般的なループ文を使用することができます。</p>

<pre class="brush: js">var highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function(userItem) {
  deleteUser(userItem);
});</pre>

<div class="note">
  <p><strong>メモ:</strong> NodeList は、本物の配列ではありません。つまり、slice、some、map などの配列メソッドを持っていません。これを配列に変換するには、 Array.from(nodeList) のようにします。</p>
</div>

<h2 id="User_notes">ユーザーのメモ</h2>

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

<p>この例では、<code>select</code> class を持つ <code>&lt;div&gt;</code> の文脈で <code>.outer .inner</code> を選択するとき、<code>.outer</code> が基準となる要素（<code>.select</code> で検索される）の子孫ではないにもかかわらず、<code>.inner</code> class を持つ要素が見つけられています。<code>querySelectorAll()</code> はデフォルトでは、セレクターの最後の要素が検索スコープに含まれているかどうかのみ検証します。</p>

<p>{{cssxref(":scope")}} 擬似クラスを使うと、基準となる要素の子孫だけが一致するようになり、期待される挙動を取り戻すことができます。</p>

<pre class="brush: js">var select = document.querySelector('.select');
var inner = select.querySelectorAll(':scope .outer .inner');
inner.length; // 0
</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li><a href="/ja/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors">セレクターを使用した DOM 要素の指定</a></li>
  <li>CSS ガイドの<a href="/ja/docs/Web/CSS/Attribute_selectors">属性セレクター</a></li>
  <li>MDN 学習エリアの<a href="/ja/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors">属性セレクター</a></li>
  <li>{{domxref("Element.querySelector()")}}</li>
  <li>{{domxref("Document.querySelector()")}} および {{domxref("Document.querySelectorAll()")}}</li>
  <li>{{domxref("DocumentFragment.querySelector()")}} および {{domxref("DocumentFragment.querySelectorAll()")}}</li>
  <li><a href="/ja/docs/Code_snippets/QuerySelector"><code>querySelector()</code> のコードスニペット</a></li>
</ul>
