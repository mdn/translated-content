---
title: DOMTokenList.add()
slug: Web/API/DOMTokenList/add
tags:
- API
- Add
- DOM
- DOMTokenList
- Method
- Reference
- メソッド
translation_of: Web/API/DOMTokenList/add
---
<p>{{APIRef("DOM")}}</p>

<p>{{domxref("DOMTokenList")}} インターフェイスの <code><strong>add()</strong></code> メソッドは、指定された<em>トークン</em>をリストに追加します。</p>

<h2 id="Syntax">構文</h2>

<pre
  class="brush: js"><var>tokenList</var>.add(<var>token1</var>[, <var>token2</var>[, ...<var>tokenN</var>]]);</pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code><var>token<em>N</em></var></code></dt>
  <dd><code><var>tokenList</var></code> に追加したいトークンを表す {{domxref("DOMString")}} です。</dd>
</dl>

<h3 id="Return_value">返値</h3>

<p>なし。</p>

<h2 id="Examples">例</h2>

<p>以下の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを <code>DOMTokenList</code> として受け取るのに {{domxref("Element.classList")}} を使用しています。それからリストに新しいトークンを追加し、リストを <code>&lt;span&gt;</code> の {{domxref("Node.textContent")}} に書き込みます。</p>

<p>最初に HTML です。</p>

<pre class="brush: html">&lt;span class="a b c"&gt;&lt;/span&gt;</pre>

<p>そして JavaScript です。</p>

<pre class="brush: js">let span = document.querySelector("span");
let classes = span.classList;
classes.add("d");
span.textContent = classes;
</pre>

<p>出力結果は以下のようになります。</p>

<p>{{ EmbedLiveSample('Examples', '100%', 60) }}</p>

<p>同様に、複数のトークンを追加することができます。</p>

<pre class="brush: js">span.classList.add("d", "e", "f");
</pre>

<h2 id="Specifications">仕様書</h2>

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
      <td>{{SpecName('DOM WHATWG','#dom-domtokenlist-add','add()')}}</td>
      <td>{{Spec2('DOM WHATWG')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.DOMTokenList.add")}}</p>
