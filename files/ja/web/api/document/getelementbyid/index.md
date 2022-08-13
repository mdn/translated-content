---
title: Document.getElementById()
slug: Web/API/Document/getElementById
tags:
  - API
  - DOM
  - Document
  - Elements
  - Method
  - Reference
  - Web
  - getElementById
  - id
translation_of: Web/API/Document/getElementById
---
<div>{{ ApiRef("DOM") }}</div>

<p>{{domxref("Document")}} の <code><strong>getElementById()</strong></code> メソッドは、 {{domxref("Element.id", "id")}} プロパティが指定された文字列に一致する要素を表す {{domxref("Element")}} オブジェクトを返します。要素の ID は指定されていれば固有であることが求められているため、特定の要素にすばやくアクセスするには便利な方法です。</p>

<p>ID を持たない要素にアクセスする必要がある場合は、 {{domxref("Document.querySelector", "querySelector()")}} で何らかの{{Glossary("CSS selector", "セレクター")}}を使用して要素を検索することができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="eval notranslate">var <var>element</var> = <var>document</var>.getElementById(<var>id</var>);
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>id</var></code></dt>
 <dd>探す要素の ID です。 ID は大文字と小文字の区別がある文字列で、文書内で固有です。指定された ID の要素は一つしかありません。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定された ID に一致する DOM 要素オブジェクトを記述した {{domxref("Element")}} オブジェクト、または文書内に一致する要素がなければ <code>null</code> です。</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;getElementById example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p id="para"&gt;Some text here&lt;/p&gt;
  &lt;button onclick="changeColor('blue');"&gt;blue&lt;/button&gt;
  &lt;button onclick="changeColor('red');"&gt;red&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js notranslate">function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Example', 250, 100) }}</p>

<h2 id="Usage_notes" name="Usage_notes">使用上のメモ</h2>

<p>コードが機能するためには、メソッドの名前の中の <code>"Id"</code> は、大文字と小文字を正しく表記し<em>なければなりません</em>。 <code>getElementByID()</code> は自然に見えますが、妥当では<em>なく</em>動作しません。</p>

<p>{{domxref("Document.querySelector()")}} や {{domxref("Document.querySelectorAll()")}} などの他の要素検索メソッドとは異なり、 <code>getElementById()</code> はグローバルの <code>document</code> オブジェクトに対してのみ利用可能であり、 DOM のすべての要素オブジェクトのメソッドとしては利用<em>できません</em>。 ID の値は文書全体を通して固有でなければならないため、機能の「ローカル」バージョンは必要ないのです。</p>

<h2 id="Example_2" name="Example_2">例</h2>

<pre class="notranslate">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Document&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="parent-id"&gt;
        &lt;p&gt;hello word1&lt;/p&gt;
        &lt;p id="test1"&gt;hello word2&lt;/p&gt;
        &lt;p&gt;hello word3&lt;/p&gt;
        &lt;p&gt;hello word4&lt;/p&gt;
    &lt;/div&gt;
    &lt;script&gt;
        var parentDOM = document.getElementById('parent-id');
        var test1 = parentDOM.getElementById('test1');
        //throw error
        //Uncaught TypeError: parentDOM.getElementById is not a function
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<p>もし指定された <code>id</code> を持つ要素がなければ、この関数は <code>null</code> を返します。なお、 <code>id</code> 引数は大文字小文字の区別があるため、 <code>document.getElementById("<strong>M</strong>ain")</code> は <code>&lt;div id="<strong>m</strong>ain"&gt;</code> 要素の代わりに <code>null</code> を返し、これは "M" と "m" がこのメソッドの目的では区別されるためです。</p>

<p><strong>文書内にない要素</strong> は <code>getElementById()</code> で検索されません。要素を作成し ID を割り当てたとき、 <code>getElementById()</code> でアクセスする前に {{domxref("Node.insertBefore()")}} またはそのたぐいのメソッドで、要素を文書ツリーに挿入しておく必要があります。</p>

<pre class="brush: js notranslate">var element = document.createElement('div');
element.id = 'testqq';
var el = document.getElementById('testqq'); // el は null になります
</pre>

<p><strong>HTML 以外の文書</strong>の場合。 DOM の実装では、どの属性が ID 類であるかを示す情報が必要です。 "id" という名前の属性は、文書の DTD で定義されていない限り ID 類とみなされません。 <code>id</code> 属性は <a href="/ja/docs/XHTML">XHTML</a>, <a href="/ja/docs/XUL">XUL</a> などの一般的な場合には ID 類として定義されています。属性が ID 類であるかどうかが分からない実装では、 <code>null</code> を返すでしょう。</p>

<h2 id="Specification" name="Specification">仕様書</h2>

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
   <td>{{SpecName('DOM1','level-one-html.html#method-getElementById','getElementById')}}</td>
   <td>{{Spec2('DOM1')}}</td>
   <td>インターフェイスの初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 Core','core.html#ID-getElBId','getElementById')}}</td>
   <td>{{Spec2('DOM2 Core')}}</td>
   <td>DOM 1 の置き換え</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Core','core.html#ID-getElBId','getElementById')}}</td>
   <td>{{Spec2('DOM3 Core')}}</td>
   <td>DOM 2 の置き換え</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG','#dom-nonelementparentnode-getelementbyid','getElementById')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>DOM 3 を置き換える予定</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.getElementById")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Document")}}: 文書内で要素への参照を取得するために使うことができる他のメソッドやプロパティで使用するための参照。</li>
 <li>{{domxref("Document.querySelector()")}}: <code>'div.myclass'</code> のようなセレクターを通したクエリのためのもの。</li>
 <li><a href="/ja/docs/xml/xml:id">xml:id</a> - <code>getElementById()</code> による XML 文書 (Ajax 呼び出しによって返されるものなど) の 'xml:id' の取得を可能とする便利なメソッドを持つ</li>
</ul>
