---
title: Element.slot
slug: Web/API/Element/slot
translation_of: Web/API/Element/slot
---
<p>{{APIRef("Shadow DOM")}}</p>

<p>{{domxref("Element")}} インターフェースの <strong><code>slot</code></strong> プロパティは shadow DOM slot の名前を返します。</p>

<p>slot は、<a href="/ja/docs/Web/Web_Components">web コンポーネント</a> の中にユーザーが任意のマークアップを代入できる要素を提供します (<a href="/ja/docs/Web/Web_Components/Using_templates_and_slots">template と slot の使い方</a> により詳しい説明があります)。</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">var <em>aString</em> = <em>element</em>.slot
<em>element</em>.slot = <em>aString</em>
</pre>

<h3 id="値">値</h3>

<p>{{domxref("DOMString")}}</p>

<h2 id="Example" name="Example">例</h2>

<p><a href="https://github.com/mdn/web-components-examples/tree/master/simple-template">templateのサンプル</a> (<a href="https://mdn.github.io/web-components-examples/simple-template/">実行例</a>)では、<code>&lt;</code><code>my-paragraph&gt;</code> と名付けた簡単なカスタム要素を作っています。このカスタム要素には、shadow root が付いており、<code>my-text</code> と名付けられた slot 要素が含まれています。</p>

<p><code>&lt;my-paragraph&gt;</code> がドキュメントの中で利用された時、その内部で <code><a href="/ja/docs/Web/HTML/Global_attributes/slot">slot</a></code> 属性を <code>my-text</code> に設定した要素を作ることで、slot の内容を変更することができます。 </p>

<pre class="brush: html">&lt;my-paragraph&gt;
  &lt;span slot="my-text"&gt;新しいテキストを代入します&lt;/span&gt;
&lt;/my-paragraph&gt;</pre>

<p>JavaScript ファイルで {{htmlelement("span")}} への参照を取得すると、対応する <code>&lt;slot&gt;</code> の名前を取得できます。 </p>

<pre class="brush: js">let slottedSpan = document.querySelector('my-paragraph span')
console.log(slottedSpan.slot); // <span class="message-body-wrapper"><span class="message-flex-body"><span class="devtools-monospace message-body"><span class="objectBox objectBox-string">'my-text' と表示されます</span></span></span></span></pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG','#dom-element-slot','slot')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<div>


<p>{{Compat("api.Element.slot")}}</p>
</div>
