---
title: Element.getAttribute()
slug: Web/API/Element/getAttribute
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
  - メソッド
translation_of: Web/API/Element/getAttribute
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary"><strong><code>getAttribute()</code></strong> は {{domxref("Element")}} インターフェイスのメソッドで、要素の指定された属性の値を返します。</span>指定された属性が存在しない場合、値は <code>null</code> か <code>""</code> (空文字列) のどちらかになります。詳しくは<a href="#Non-existing_attributes">属性が存在しない場合</a>を参照してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">let <var>attribute</var> = <var>element</var>.getAttribute(<var>attributeName</var>);
</pre>

<p>ここで、</p>

<ul>
 <li><code><var>attribute</var></code> は <code><var>attributeName</var></code> の値を持つ文字列です。</li>
 <li><code><var>attributeName</var></code> は値を取得したい属性の名前です。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush:js">const div1 = document.getElementById('div1');
const align = div1.getAttribute('align');

alert(align); // id="div1" の要素の align の値を表示します。</pre>

<h2 id="Description" name="Description">解説</h2>

<h3 id="Lower_casing" name="Lower_casing">小文字化</h3>

<p>HTML 文書である DOM の HTML 要素に対して呼び出すと、 <code>getAttribute()</code> は処理前に引数を小文字化します。</p>

<h3 id="Non-existing_attributes" name="Non-existing_attributes">属性が存在しない場合</h3>

<p>基本的にはすべてのウェブブラウザー (限定的なリストですが Firefox, Internet Explorer, Opera の最新バージョン, Safari, Konqueror, iCab など) は、指定された要素に指定された属性が存在しない場合は <code>null</code> を返します。これは<a href="http://dom.spec.whatwg.org/#dom-element-getattribute">現在の DOM 仕様書の草稿</a>で指定されています。一方、古い DOM 3 Core 仕様書では、このような場合の正しい返値は実際には<em>空文字列</em>となっています。そしていくつかの DOM の実装はこの動作を実装しています。実際、 <code>getAttribute()</code> の XUL (Gecko) での実装では、 DOM 3 Core 仕様書に従い空文字列を返します。結果的に、指定された要素に指定された属性が存在しない可能性があるのであれば、 {{domxref("element.hasAttribute()")}} を使用して属性の存在をチェックしてから <code>getAttribute()</code> を呼び出すべきでしょう。</p>

<h3 id="Retrieving_nonce_values" name="Retrieving_nonce_values">ノンス値の受け取り</h3>

<p>セキュリティ上の理由で、スクリプト以外、例えば CSS セレクターから来た <a href="/ja/docs/Web/HTTP/CSP">CSP</a> のノンスと、 <code>.getAttribute("nonce")</code> の呼び出しは隠蔽されます。</p>

<pre class="brush: js example-bad">let nonce =  script.getAttribute('nonce');
// 空文字列が返される
</pre>

<p>コンテンツ属性のノンスをるには、代わりに <code><a href="/ja/docs/Web/API/HTMLOrForeignElement/nonce">nonce</a></code> プロパティを使用してください。</p>

<pre class="brush: js">let nonce =  script.nonce;</pre>

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
   <td>{{SpecName('DOM WHATWG', '#dom-element-attachshadow', 'attachShadow()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("api.Element.getAttribute")}}</p>
</div>
