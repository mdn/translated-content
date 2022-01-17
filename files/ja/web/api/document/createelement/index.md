---
title: Document.createElement()
slug: Web/API/Document/createElement
tags:
  - API
  - DOM
  - Document
  - Method
  - Reference
  - createElement
  - メソッド
translation_of: Web/API/Document/createElement
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary"><a href="/ja/docs/Web/HTML">HTML</a> 文書において、 <strong><code>document.createElement()</code></strong> メソッドは <var>tagName</var> で指定された HTML 要素を生成し、または <var>tagName</var> が認識できない場合は {{domxref("HTMLUnknownElement")}} を生成します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js">var <var>element</var> = <var>document</var>.createElement(<var>tagName</var>[, <var>options</var>]);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><var>tagName</var></dt>
 <dd>生成される要素の型を特定する文字列。生成される要素の {{domxref("Node.nodeName", "nodeName")}} は <var>tagName</var> の値で初期化されます。このメソッドで修飾名 ("html:a" など) を使用しないでください。 HTML 文書で呼び出すと、 <code>createElement()</code> は要素を生成する前に <var>tagName</var> を小文字に変換します。 Firefox, Opera, Chrome では、 <code>createElement(null)</code> は <code>createElement("null")</code> のように動作します。</dd>
 <dt><var>options</var>{{optional_inline}}</dt>
 <dd>省略可能な <code>ElementCreationOptions</code> オブジェクトで、 <code>is</code> という名前のプロパティをひとつ持ち、その値は前に <code>customElements.define()</code> を使用して定義したカスタム要素の名前です。詳しくは{{anch("Web component example", "ウェブコンポーネントの例")}}を参照してください。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>新しい {{domxref("Element")}}。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="Basic_example" name="Basic_example">基本的な例</h3>

<p>この例では新しい <code>&lt;div&gt;</code> を生成し、"<code>div1</code>" の id の要素の前に挿入します。</p>

<h4 id="HTML">HTML</h4>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;||Working with elements||&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id="div1"&gt;The text above has been created dynamically.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush:js">document.body.onload = addElement;

function addElement () {
  // 新しい div 要素を作成します
  var newDiv = document.createElement("div");
  // いくつかの内容を与えます
  var newContent = document.createTextNode("Hi there and greetings!");
  // テキストノードを新規作成した div に追加します
  newDiv.appendChild(newContent);

  // DOM に新しく作られた要素とその内容を追加します
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}</pre>

<p>{{EmbedLiveSample("Basic_example", 500, 50)}}</p>

<h3 id="Web_component_example" name="Web_component_example">ウェブコンポーネントの例</h3>

<p>以下の例の断片は expanding-list-web-component の例から取ったものです (ライブでもご覧ください)。この場合、カスタム要素は {{domxref("HTMLUListElement")}} を拡張し、 {{htmlelement("ul")}} 要素を表します。</p>

<pre class="brush: js">// Create a class for the element
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    // constructor definition left out for brevity
    ...
  }
}

// Define the new element
customElements.define('expanding-list', ExpandingList, { extends: "ul" });</pre>

<p>この要素のインスタンスをプログラム的に生成したければ、次の行のような呼び出しを使用します。</p>

<pre class="brush: js">let expandingList = document.createElement('ul', { is : 'expanding-list' })</pre>

<p>新しい要素には <code><a href="/ja/docs/Web/HTML/Global_attributes/is">is</a></code> 属性が与えられ、その値はカスタム要素のタグ名になります。</p>

<div class="note">
<p><strong>注</strong>: <a href="https://www.w3.org/TR/custom-elements/">カスタム要素仕様書</a>の以前のバージョンととの後方互換性のため、一部のブラウザーはオブジェクトの代わりに文字列を渡すことを認めており、この文字列はカスタム要素のタグ名です。</p>
</div>

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
   <td>{{SpecName('DOM WHATWG', "#dom-document-createelement", "Document.createElement")}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.createElement")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Node.removeChild()")}}</li>
 <li>{{domxref("Node.replaceChild()")}}</li>
 <li>{{domxref("Node.appendChild()")}}</li>
 <li>{{domxref("Node.insertBefore()")}}</li>
 <li>{{domxref("Node.hasChildNodes()")}}</li>
 <li>{{domxref("document.createElementNS()")}} — 要素の名前空間 URI を明示的に指定するために使用</li>
</ul>
