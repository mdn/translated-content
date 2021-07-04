---
title: Element.outerHTML
slug: Web/API/Element/outerHTML
tags:
  - API
  - DOM
  - DOM Parsing
  - Element
  - Parsing
  - Property
  - Reference
  - Serialization
  - Serializing
  - outerHTML
translation_of: Web/API/Element/outerHTML
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>outerHTML</code></strong> は {{ domxref("Element") }} DOM インターフェイスの属性で、要素とその子孫を含む部分の HTML がシリアライズされたものを取得します。設定することで指定された文字列を解釈したノードの要素に置き換えることができます。</p>

<p>要素の内容のみの HTML 表現を取得する場合や、要素の内容を置き換える場合であれば、代わりに {{domxref("Element.innerHTML", "innerHTML")}} プロパティを使用してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">var <var>content</var> = <var>element</var>.outerHTML;

<var>element</var>.outerHTML = <var>htmlString</var>;
</pre>

<h3 id="Value" name="Value">値</h3>

<p><code>outerHTML</code> の値を読み取ると、 <code><var>element</var></code> およびその子孫の HTML シリアライズを含む {{domxref("DOMString")}} が返されます。 <code>outerHTML</code> の値を設定すると、その要素とそのすべての子孫を、指定された <code><var>htmlString</var></code> を解釈して構築された新しい DOM ツリーで置き換えます。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt><code>SyntaxError</code></dt>
 <dd><code>outerHTML</code> に正しくない HTML の文字列を使用して設定しようとした場合。</dd>
 <dt><code>NoModificationAllowedError</code></dt>
 <dd><code>outerHTML</code> を {{domxref("Document")}} の直接の子である要素、たとえば {{domxref("Document.documentElement")}} に対して設定しようとした場合。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>要素の <code>outerHTML</code> プロパティの値を得る例を示します。</p>

<pre class="brush: js">// HTML:
// &lt;div id="d"&gt;&lt;p&gt;Content&lt;/p&gt;&lt;p&gt;Further Elaborated&lt;/p&gt;&lt;/div&gt;

d = document.getElementById("d");
console.log(d.outerHTML);

// 次の文字列 '&lt;div id="d"&gt;&lt;p&gt;Content&lt;/p&gt;&lt;p&gt;Further Elaborated&lt;/p&gt;&lt;/div&gt;'
// が、コンソールウィンドウに出力されます。
</pre>

<p>次の例では、 <code>outerHTML</code> プロパティに値を設定し、ノードを置換します。</p>

<pre class="brush: js">// HTML:
// &lt;div id="container"&gt;&lt;div id="d"&gt;This is a div.&lt;/div&gt;&lt;/div&gt;

container = document.getElementById("container");
d = document.getElementById("d");
console.log(container.firstChild.nodeName); // "DIV" が記録される

d.outerHTML = "&lt;p&gt;This paragraph replaced the original div.&lt;/p&gt;";
console.log(container.firstChild.nodeName); // "P" が記録される

// #d の div 要素はもはや文書ツリーの一部ではなく、
// 新たな段落に置き換えられました。
</pre>

<h2 id="Notes" name="Notes">メモ</h2>

<p>要素が親要素を持たない場合、その <code>outerHTML</code> プロパティに値を設定してもその要素や子孫は変更されません。多くのブラウザーでは例外も発生します。以下に例を示します。</p>

<pre class="brush: js">var div = document.createElement("div");
div.outerHTML = "&lt;div class=\"test\"&gt;test&lt;/div&gt;";
console.log(div.outerHTML); // output: "&lt;div&gt;&lt;/div&gt;"</pre>

<p>また、文書の中で要素が置換された場合も、 <code>outerHTML</code> プロパティが設定された変数は、引き続きオリジナルの要素への参照を保持しています。</p>

<pre class="brush: js">var p = document.getElementsByTagName("p")[0];
console.log(p.nodeName); // "P" を表示
p.outerHTML = "&lt;div&gt;This div replaced a paragraph.&lt;/div&gt;";
console.log(p.nodeName); // "P" のまま
</pre>

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
   <td>{{SpecName('DOM Parsing', '#outerhtml', 'Element.outerHTML')}}</td>
   <td>{{ Spec2('DOM Parsing') }}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Element.outerHTML")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>DOM ツリーを XML または HTML にシリアライズ: {{domxref("XMLSerializer")}}</li>
 <li>XML または HTML を DOM ツリーに解釈: {{domxref("DOMParser")}}</li>
 <li>{{domxref("HTMLElement.outerText")}}</li>
</ul>
