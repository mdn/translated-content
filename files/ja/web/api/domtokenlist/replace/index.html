---
title: DOMTokenList.replace()
slug: Web/API/DOMTokenList/replace
tags:
- API
- DOM
- Document
- Method
- Reference
translation_of: Web/API/DOMTokenList/replace
---
<p>{{APIRef("DOM")}}</p>

<p><code><strong>replace()</strong></code> は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、既存のトークンを新しいトークンで置き換えます。最初のトークンが存在しない場合、 <code>replace()</code> はすぐに <code>false</code> を返し、トークンリストに新しいトークンを追加しません。</p>

<h2 id="Syntax">構文</h2>

<pre
  class="brush: js"><var>tokenList</var>.replace(<var>oldToken</var>, <var>newToken</var>);</pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code><var>oldToken</var></code></dt>
  <dd>{{domxref("DOMString")}} で、置き換えたいトークンを表します。</dd>
  <dt><code><var>newToken</var></code></dt>
  <dd>{{domxref("DOMString")}} で、 <code><var>oldToken</var></code> を置き換えたいトークンを表します。</dd>
</dl>

<h3 id="Return_value">返値</h3>

<p>論理値で、 <code>true</code> は <code><var>oldToken</var></code> の置き換えに成功した場合で、 <code>false</code> はそれ以外の場合です。</p>

<div class="note">
  <p><strong>注</strong>: 古いブラウザーでは、 <code>replace()</code> は void を返します。</p>
</div>

<h2 id="Examples">例</h2>

<p>以下の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを <code>DOMTokenList</code> として受け取るのに {{domxref("Element.classList")}} を使用しています。それからリスト内のトークンを置き換え、リストを <code>&lt;span&gt;</code> の {{domxref("Node.textContent")}} に書き込みます。</p>

<p>最初に HTML です。</p>

<pre class="brush: html">&lt;span class="a b c"&gt;&lt;/span&gt;</pre>

<p>そして JavaScript です。</p>

<pre class="brush: js">let span = document.querySelector("span");
let classes = span.classList;

let result = classes.replace("c", "z");
console.log(result);

if (result) {
  span.textContent = classes;
} else {
  span.textContent = 'token not replaced successfully';
}</pre>

<p>出力結果は以下のようになります。</p>

<p>{{ EmbedLiveSample('Examples', '100%', 60) }}</p>

<h2 id="Polyfill">ポリフィル</h2>

<p>次のポリフィルは <code>DOMTokenList</code> クラスに replace メソッドを追加します。次のコードは <strong>IE10-11</strong> でのみ動作します。もっと古いバージョンの IE で使用するには、 {{domxref("element.classList#Polyfill")}} のポリフィルを参照してください。</p>

<pre class="brush: js"><code>DOMTokenList.prototype.replace = function (a, b) {
    if (this.contains(a)) {
        this.add(b);
        this.remove(a);
        return true;
    }
    return false;
}</code></pre>

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
      <td>{{SpecName('DOM WHATWG','#dom-domtokenlist-replace','replace()')}}</td>
      <td>{{Spec2('DOM WHATWG')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.DOMTokenList.replace")}}</p>
