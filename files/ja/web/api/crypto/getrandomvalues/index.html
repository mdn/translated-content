---
title: Crypto.getRandomValues()
slug: Web/API/Crypto/getRandomValues
tags:
- API
- Crypto
- Cryptography
- Encryption
- Integers
- Method
- Numbers
- Pseudorandom
- Pseudorandom Numbers
- Random Numbers
- Reference
- Web Crypto API
- getRandomValues
browser-compat: api.Crypto.getRandomValues
translation_of: Web/API/Crypto/getRandomValues
---
<p>{{APIRef("Web Crypto API")}}</p>

<p><code><strong>Crypto.getRandomValues()</strong></code> メソッドは、暗号強度の強い乱数値を取得します。引数に与えた配列は、すべて乱数 (暗号的な意味でランダムに) で埋められます。</p>

<p>十分な性能を保証するために、実装は、真に乱数発生器を使用しているのではなく、十分なエントロピーを有する<em>シード値</em>を用いた疑似乱数発生器を使用しています。擬似乱数発生器アルゴリズム (PRNG) は、{{Glossary("user agent", "ユーザーエージェント")}}によって異なる可能性がありますが、暗号化目的には適しています。実装にあたっては、システムレベルのエントロピー源のように、十分なエントロピーを持つシード値を使う必要があります。</p>

<p><code>getRandomValues()</code> は <code>Crypto</code> インターフェイスで安全なコンテキスト外から使用することができる唯一のメンバーです。</p>

<h2 id="Syntax">構文</h2>

<pre
  class="brush: js"><var>typedArray</var> = <var>cryptoObj</var>.getRandomValues(<var>typedArray</var>);</pre>

<h3 id="Parameters">引数</h3>

<dl>
 <dt><code><var>typedArray</var></code></dt>
 <dd>整数値を基数とした {{jsxref("TypedArray")}}。{{jsxref("Int8Array")}} または {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}。配列内のすべての要素は乱数で上書きされます。</dd>
</dl>

<h3 id="Return_value">返値</h3>

<p><code><var>typedArray</var></code> と同じ配列が渡されますが、その内容は新しく生成された乱数で置き換えられます。 <code><var>typedArray</var></code> はその場で変更され、コピーは行われないことに注意してください。</p>

<h3 id="Exceptions">例外</h3>

<p>このメソッドはエラーが発生すると例外を発行する可能性があります。</p>

<dl>
  <dt>{{domxref("DOMException")}} (name: {{exception("QuotaExceededError")}})</dt>
  <dd>リクエストした長さが 65,536 バイトを超えた場合。</dd>
</dl>

<h2 id="Usage_notes">使用上の注意</h2>

<p>暗号鍵を生成するために <code>getRandomValues()</code> 使用しないでください。代わりに {{domxref("SubtleCrypto.generateKey", "generateKey()")}} メソッドを使用してください。これにはいくつかの理由があります。例えば、 <code>getRandomValues()</code> が安全なコンテキストで動作することが保証されていないことなどです。</p>

<p>ウェブ暗号仕様書では、エントロピーの最小値は規定されていません。その代わりに、ユーザーエージェントは乱数を生成する際に、ユーザーエージェント自身に組み込まれた、よく定義された効率的な擬似乱数発生器を用いて、可能な限り最高のエントロピーを提供することが求められていますが、プラットフォーム固有の乱数関数、 Unix の <code>/dev/urandom</code> デバイス、または他のランダムまたは擬似乱数データのソースなど、外部の擬似乱数ソースから取得したシード値が用いられます。</p>

<h2 id="Example">例</h2>

<pre class="brush: js">/* window.crypto.getRandomValues が利用可能であると想定 */

var array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (var i = 0; i &lt; array.length; i++) {
  console.log(array[i]);
}
</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Web_Crypto_API">Web Crypto API</a></li>
 <li>{{domxref("Crypto")}} オブジェクトを取得する {{ domxref("Window.crypto") }}。</li>
 <li>{{jsxref("Math.random")}} 暗号学的に安全ではない乱数値。</li>
</ul>
