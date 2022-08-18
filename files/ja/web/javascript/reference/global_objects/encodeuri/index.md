---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
tags:
  - Encoding
  - JavaScript
  - Method
  - Text
  - URI
  - URL
  - encodeURI
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURI
---
<div>{{jsSidebar("Objects")}}</div>

<p><code><strong>encodeURI()</strong></code> 関数は、{{glossary("URI")}} (Uniform Resource Identifier; 統一資源識別子) をエンコードし、各文字のインスタンスをそれぞれ {{glossary("UTF-8")}} 符号の文字を表す 1 個から 4 個のエスケープシーケンスに置き換えます (サロゲート文字のペアのみ 4 個のエスケープシーケンスになります)。</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-encodeuri.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">encodeURI(<var>URI</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>URI</var></code></dt>
 <dd>完全 URI です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>URI (Uniform Resource Identifier) としてエンコードされた指定された文字列を表す新しい文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>encodeURI()</code> 関数では、 URI において特別な意味を持つ文字 (予約文字) はエンコードされません。下記の例は URI "scheme" に含まれる可能性がある全ての箇所を示しています。特定の文字がどのように特殊な意味を表すために使われているかに注意してください。</p>

<pre class="notranslate">http://username:password@www.example.com:80/path/to/file.php?foo=316&amp;bar=this+has+spaces#anchor</pre>

<p>したがって、 <code>encodeURI()</code> は完全な URI を表すのに必要な文字はエンコード<strong>しません</strong>。また、 <code>encodeURI()</code> は "unreserved marks" (予約されていないが "そのまま" URI に使用できる) 文字をエンコード<strong>しません</strong>。 (<a href="https://www.ietf.org/rfc/rfc2396.txt">RFC2396</a> を確認してください。)</p>

<p><code>encodeURI()</code> は下記<strong>以外</strong>の全ての文字をエスケープします。</p>

<pre class="notranslate"><strong>エスケープされないもの</strong>:

    A-Z a-z 0-9 ; , / ? : @ &amp; = + $ - _ . ! ~ * ' ( ) #<code>
</code>
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="encodeURI_vs_encodeURIComponent" name="encodeURI_vs_encodeURIComponent">encodeURI と encodeURIComponent</h3>

<p><code>encodeURI()</code> は以下のように {{jsxref("encodeURIComponent", "encodeURIComponent()")}} とは異なります。</p>

<pre class="brush: js notranslate">var set1 = ";,/?:@&amp;=+$#"; // 予約文字
var set2 = "-_.!~*'()";   // 予約されていない記号
var set3 = "ABC abc 123"; // 英数字 + 空白

console.log(encodeURI(set1)); // ;,/?:@&amp;=+$#
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (空白は %20 にエンコードされる)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (空白は %20 にエンコードされる)
</pre>

<p>なお、<code>encodeURI()</code> のみでは、 HTTP の {{HTTPMethod("GET")}} および {{HTTPMethod("POST")}} リクエストを {{domxref("XMLHttpRequest")}} のように適切に構成できません。なぜなら、 "<code>&amp;</code>", "<code>+</code>", "<code>=</code>" は <code>GET</code> および <code>POST</code> リクエストにおいて特別な文字であり、それらがエンコードされないからです。 <code>encodeURIComponent()</code> の場合、それらがエンコードされます。</p>

<h3 id="Encoding_a_lone_high_surrogate_throws" name="Encoding_a_lone_high_surrogate_throws">単独のサロゲート文字のエンコード</h3>

<p>サロゲートペアになっていない 1 個のサロゲート文字をエンコードしようとすると {{jsxref("URIError")}} が発生することに注意してください。例えば、</p>

<pre class="brush: js notranslate">// サロゲートペアは OK
console.log(encodeURI('\uD800\uDFFF'));

// 上位サロゲートのみだと "URIError: malformed URI sequence" エラーが発生
console.log(encodeURI('\uD800'));

// 下位サロゲートのみだと "URIError: malformed URI sequence" エラーが発生
console.log(encodeURI('\uDFFF')); </pre>

<h3 id="Encoding_for_IPv6" name="Encoding_for_IPv6">IPv6 のエンコード</h3>

<p>また、 URL 記述のために最近の <a href="http://tools.ietf.org/html/rfc3986">RFC3986</a> 仕様に従おうとする場合、角括弧 <code>[]</code> は ({{glossary("IPv6")}} 用の) 予約文字となっているため、角括弧が (ホスト名など) URL の一部を形成している場合はエンコードされていないほうがよいでしょう。そういう場合は以下のコードが役に立ちます。</p>

<pre class="brush: js notranslate">function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-encodeuri-uri', 'encodeURI')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.encodeURI")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("decodeURI", "decodeURI()")}}</li>
 <li>{{jsxref("encodeURIComponent", "encodeURIComponent()")}}</li>
 <li>{{jsxref("decodeURIComponent", "decodeURIComponent()")}}</li>
</ul>
