---
title: SubtleCrypto.digest()
slug: Web/API/SubtleCrypto/digest
tags:
  - API
  - Method
  - Reference
  - SubtleCrypto
  - WebCrypto API
  - digest
  - メソッド
translation_of: Web/API/SubtleCrypto/digest
---
<p>{{APIRef("Web Crypto API")}}{{SecureContext_header}}</p>

<p>{{domxref("SubtleCrypto")}} インターフェースの <code><strong>digest()</strong></code> メソッドは、指定されたデータの {{Glossary("digest")}} を返します。ダイジェストとは、可変長の入力に由来する固定長の短い値です。暗号的ダイジェスト値は耐衝突性を示すため、同じダイジェスト値を持つ2つの異なる入力を見つけるのは非常に困難です。</p>

<p>引数として、使用するダイジェストアルゴリズムの識別子とダイジェスト値の元となるデータを受け取ります。ダイジェスト値で解決される {{jsxref("Promise")}} を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const digest = <var>crypto</var><code>.subtle.digest(<var>algorithm</var>, <var>data</var>)</code>;
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<ul>
 <li><code><var>algorithm</var></code> は、使用するダイジェストアルゴリズムを定義する {{domxref("DOMString")}} です。サポートされる値は次のとおりです:

  <ul>
   <li><code>SHA-1</code> (暗号化アプリケーションではこれを使用しないでください)</li>
   <li><code>SHA-256</code></li>
   <li><code>SHA-384</code></li>
   <li><code>SHA-512</code></li>
  </ul>
 </li>
 <li><code><var>data</var></code> は、ダイジェスト値の元となるデータを含む {{jsxref("ArrayBuffer")}} もしくは {{domxref("ArrayBufferView")}} です。</li>
</ul>

<h3 id="Return_value" name="Return_value">返値</h3>

<ul>
 <li><code><var>digest</var></code> は {{jsxref("Promise")}} であり、ダイジェスト値を含む {{jsxref("ArrayBuffer")}} で解決されます。</li>
</ul>

<h2 id="Supported_algorithms" name="Supported_algorithms">対応しているアルゴリズム</h2>

<p>ダイジェストアルゴリズムは <a href="/ja/docs/Glossary/Cryptographic_hash_function">暗号ハッシュ関数</a> とも呼ばれ、任意の大きなデータブロックを固定サイズの出力 (通常は入力よりもはるかに短い出力) に変換します。暗号化にはさまざまな用途があります。</p>

<h3 id="SHA-1">SHA-1</h3>

<p>このアルゴリズムは <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf">FIPS 180-4</a>, section 6.1 で定義されており、160 bit 長の出力を生成します。</p>

<div class="blockIndicator warning">
<p><strong>警告</strong>: このアルゴリズムは現在脆弱であると見なされているため、暗号化アプリケーションには使用しないでください。</p>
</div>

<h3 id="SHA-256">SHA-256</h3>

<p>このアルゴリズムは <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf">FIPS 180-4</a>, section 6.2 で定義されており、256 bit 長の出力を生成します。</p>

<h3 id="SHA-384">SHA-384</h3>

<p>このアルゴリズムは <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf">FIPS 180-4</a>, section 6.5 で定義されており、384 bit 長の出力を生成します。</p>

<h3 id="SHA-512">SHA-512</h3>

<p>このアルゴリズムは <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf">FIPS 180-4</a>, section 6.4 で定義されており、512 bit 長の出力を生成します。</p>

<div class="blockIndicator note">
<p>ヒント: キー付きハッシュメッセージ認証コード (<a href="/ja/docs/Glossary/HMAC">HMAC</a>), の作成方法をここで探している場合は、代わりに <a href="/ja/docs/Web/API/SubtleCrypto/sign#HMAC">SubtleCrypto.sign()</a> を使用する必要があります。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<h3 id="Basic_example" name="Basic_example">基本的な例</h3>

<p>この例では、メッセージをエンコードし、 SHA-256 ダイジェスト値を計算して、ダイジェスト長を記録します:</p>

<pre class="brush: js notranslate">const text = 'An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.';

async function digestMessage(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return hash;
}

const digestBuffer = await digestMessage(text);
console.log(digestBuffer.byteLength);
</pre>

<h3 id="ダイジェスト値を16進文字列に変換する">ダイジェスト値を16進文字列に変換する</h3>

<p>ダイジェストは<code>ArrayBuffer</code>として返されますが、比較および表示のために、ダイジェスト値は多くの場合16進文字列として表されます。 この例では、ダイジェストを計算し、<code>ArrayBuffer</code>を16進文字列に変換します:</p>

<pre class="brush: js notranslate">const text = 'An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.';

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map(b =&gt; b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

const digestHex = await digestMessage(text);
console.log(digestHex);
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
   <td>{{SpecName('Web Crypto API', '#dfn-SubtleCrypto-method-digest', 'SubtleCrypto.digest()')}}</td>
   <td>{{Spec2('Web Crypto API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.SubtleCrypto.digest")}}</p>

<div class="blockIndicator note">
<p>Chrome 60 では、 TLS 接続出ない場合に crypto.subtle を無効化する機能が追加されました。</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features">Chromium secure origins specification</a></li>
 <li><a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf" rel="noopener">FIPS 180-4</a> specifies the SHA family of digest algorithms.</li>
</ul>
