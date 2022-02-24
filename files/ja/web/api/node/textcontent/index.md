---
title: Node.textContent
slug: Web/API/Node/textContent
tags:
  - API
  - DOM
  - Node
  - Property
  - Reference
  - プロパティ
translation_of: Web/API/Node/textContent
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>textContent</strong></code> は {{domxref ("Node")}} のプロパティで、ノードおよびその子孫のテキストの内容を表します。</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> <code>textContent</code> と {{domxref("HTMLElement.innerText")}} は混同しやすいものですが、2つのプロパティは<a href="#Differences_from_innerText">重要な点が異なります</a>。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">let <var>text</var> = <var>someNode</var>.textContent
<var>someOtherNode</var>.textContent = <var>string</var>
</pre>

<h3 id="Value" name="Value">値</h3>

<p>文字列または {{jsxref("null")}}</p>

<h2 id="Description" name="Description">説明</h2>

<p><code>textContent</code> の値は状況によります。</p>

<ul>
 <li>ノードが {{domxref("document")}} または {{glossary("Doctype")}} である場合、 <code>textContent</code> は {{jsxref("null")}} を返します。

  <div class="note"><strong>メモ:</strong> 文書全体の<em>すべての</em>テキストと <a href="/ja/docs/Web/API/CDATASection">CDATA データ</a>を取得するには、 <code><a href="/ja/docs/Web/API/document/documentElement">document.documentElement</a>.textContent</code> を使用する方法があります。</div>
 </li>
 <li>ノードが <a href="/ja/docs/Web/API/CDATASection">CDATA セクション</a>、コメント、<a href="/ja/docs/Web/API/ProcessingInstruction">処理命令ノード</a>、 <a href="/ja/docs/Web/API/Text">テキストノード</a>の場合、 <code>textContent</code> はそのノードの内側のテキスト、すなわち {{domxref("Node.nodeValue")}} を返します。</li>
 <li>他のノードタイプの場合、<code>textContent</code> は、コメントと処理命令ノードを除く、すべての子ノードの <code>textContent</code> 属性値を連結したものを返します。 (ノードが子を持たない場合、これは空文字列になります。)</li>
</ul>

<p>ノードの <code>textContent</code> を設定すると、そのノードの<em>すべて</em>の子が取り除かれて、指定された値をもつ単一のテキストノードに置き換わります。</p>

<h3 id="Differences_from_innerText" name="Differences_from_innerText">innerText との違い</h3>

<p><code>Node.textContent</code> と {{domxref("HTMLElement.innerText")}} の間の違いに混乱しないでください。名前は似ているようですが、重要な違いがあります。</p>

<ul>
 <li><code>textContent</code> は、 {{HTMLElement("script")}} と {{HTMLElement("style")}} 要素を含む、<em>すべて</em>の要素の内容を取得します。一方、 <code>innerText</code> は「人間が読める」要素のみを示します。</li>
 <li><code>textContent</code> はノード内のすべての要素を返します。一方、 <code>innerText</code> はスタイルを反映し、「非表示」の要素のテキストを返しません。
  <ul>
   <li>もっと言えば、 <code>innerText</code> は CSS のスタイルを考慮するので、 <code>innerText</code> の値を読み取ると最新の計算されたスタイルを保証するために {{glossary("Reflow", "再フロー")}} を起動します。 (再フローは計算が重いので、可能であれば避けるべきです。)</li>
  </ul>
 </li>
 <li><code>textContent</code> とは異なり、 <code>innerText</code> を Internet Explorer (バージョン 11 まで) で変更すると、要素から子ノードを削除するだけでなく、子孫のテキストノードを<em>完全に破棄します</em>。他の要素または同じ要素にノードをもう一度挿入することは不可能です。</li>
</ul>

<h3 id="Differences_from_innerHTML" name="Differences_from_innerHTML">innerHTML との違い</h3>

<p>{{domxref("Element.innerHTML")}} は、その名が示すとおり HTML を返します。時に、 <code>innerHTML</code> を使用して要素内のテキストを受け取ったり書き込んだりすることがありますが、 <code>textContent</code> は値が HTML として解析されないので性能が良くなります。</p>

<p>さらに、<code>textContent</code> を使用することで {{glossary("Cross-site_scripting", "XSS 攻撃")}}を防ぐことができます。</p>

<h2 id="Example" name="Example">例</h2>

<p>以下のような HTML の断片があります。</p>

<pre class="brush: html">&lt;div id="divA"&gt;This is &lt;span&gt;some&lt;/span&gt; text!&lt;/div&gt;</pre>

<p>... <code>textContent</code> を使用して、要素のテキストの内容を取得することができます。</p>

<pre class="brush: js">let text = document.getElementById('divA').textContent;
// 変数 text の値は 'This is some text!' となります。</pre>

<p>... また、要素のテキストを設定します。</p>

<pre class="brush: js">document.getElementById('divA').textContent = 'This text is different!';
// divA の HTML は次のようになります。
// &lt;div id="divA"&gt;This text is different!&lt;/div&gt;
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
   <td>{{SpecName('DOM WHATWG','#dom-node-textcontent','Node.textContent')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Node.textContent")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("HTMLElement.innerText")}}</li>
 <li>{{domxref("Element.innerHTML")}}</li>
 <li><a href="http://perfectionkills.com/the-poor-misunderstood-innerText/">More on differences between <code>innerText</code> and <code>textContent</code></a> (ブログ投稿)</li>
</ul>
