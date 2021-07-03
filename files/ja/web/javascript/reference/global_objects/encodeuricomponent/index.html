---
title: encodeURIComponent()
slug: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
tags:
  - JavaScript
  - Method
  - Reference
  - URI
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURIComponent
---
<div>{{jsSidebar("Objects")}}</div>

<p><code><strong>encodeURIComponent()</strong></code> 関数は、 {{glossary("URI")}} (Uniform Resource Identifier) 構成要素を特定の文字を {{glossary("UTF-8")}} 文字エンコーディングで表された 1 個から 4 個のエスケープシーケンスに置き換えることでエンコードします (サロゲートペアで構成される文字のみ 4 個のエスケープシーケンスになります)。</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-encodeuricomponent.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">encodeURIComponent(<var>str</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>str</var></code></dt>
 <dd>URI の構成要素となる文字列です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>与えられた文字列を表す URI 構成要素としてエンコードされた新しい文字列です。</p>

<h2 id="Description" name="Description">返値</h2>

<p><code>encodeURIComponent</code> は<strong>下記を除く</strong>すべての文字をエスケープします。</p>

<pre class="notranslate"><strong>エスケープされないもの</strong>:

    A-Z a-z 0-9 <code>-</code> <code>_</code> <code>.</code> <code>!</code> <code>~</code> <code>*</code> <code>'</code> <code>(</code> <code>)
</code>
</pre>

<p><code>encodeURIComponent()</code> と <strong><code>encodeURI</code></strong> の違いは以下の通りです。</p>

<pre class="brush: js notranslate">var set1 = ";,/?:@&amp;=+$";  // Reserved Characters
var set2 = "-_.!~*'()";   // Unescaped Characters
var set3 = "#";           // Number Sign
var set4 = "ABC abc 123"; // Alphanumeric Characters + Space

console.log(encodeURI(set1)); // ;,/?:@&amp;=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (the space gets encoded as %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123 (the space gets encoded as %20)

</pre>

<p>上位・下位のペアでないサロゲート文字をエンコードしようとした場合 {{jsxref("URIError")}} が発生します。</p>

<pre class="brush: js notranslate">// 上位・下位の正しいペア
console.log(encodeURIComponent('\uD800\uDFFF'));

// 上位のみであり "URIError: malformed URI sequence" が発生
console.log(encodeURIComponent('\uD800'));

// 下位のみであり "URIError: malformed URI sequence" が発生
console.log(encodeURIComponent('\uDFFF'));
</pre>

<p>フォームからサーバーに {{HTTPMethod("POST")}} されるユーザー入力値には <code>encodeURIComponent</code> を使用してください。これは、特殊な HTML エンティティやエンコード/デコードを必要とする他の文字のデータ入力中に誤って生成される可能性がある <code>&amp;</code> 記号をエンコードします。</p>

<p>例えば、ユーザーが <code>Jack &amp; Jill</code> と入力した場合、テキストは <code>Jack &amp;amp; Jill</code> とエンコードされる可能性があります。<code>encodeURIComponent()</code> を使用しない場合は "&amp;" が新しいフィールドの始まりとしてサーバー上で解釈され、データの完全性が損なわれる可能性があります。</p>

<p><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#application/x-www-form-urlencoded-encoding-algorithm"><code>application/x-www-form-urlencoded</code></a> では、スペースは <code>+</code> に置換されます。そのため、<code>encodeURIComponent()</code> による置換に加えて <code>%20</code> を <code>+</code> に置き換えることが望まれるかもしれません。</p>

<p>( ! ' ( ) * が予約語になっている) <a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a> 仕様を忠実に順守するには、これらの URI 区切り文字としての役目が失われてしまうものの、以下の例が問題なく使用できます。</p>

<pre class="brush: js notranslate">function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Encoding_for_Content-Disposition_and_Link_headers" name="Encoding_for_Content-Disposition_and_Link_headers">Content-Disposition とリンクヘッダーのエンコーディング</h3>

<p>次の例は、サーバーレスポンスヘッダー引数の {{HTTPHeader("Content-Disposition")}} や {{HTTPHeader("Link")}} で (UTF-8 からなるファイル名などに) 必要となる特別な UTF-8 エンコーディングを提供します。</p>

<pre class="brush: js notranslate">var fileName = 'my file(2).txt';
var header = "Content-Disposition: attachment; filename*=UTF-8''"
             + encodeRFC5987ValueChars(fileName);

console.log(header);
// logs "Content-Disposition: attachment; filename*=UTF-8''my%20file%282%29.txt"


function encodeRFC5987ValueChars(str) {
    return encodeURIComponent(str).
        // Note that although RFC3986 reserves "!", RFC5987 does not,
        // so we do not need to escape it
        replace(/['()]/g, escape). // i.e., %27 %28 %29
        replace(/\*/g, '%2A').
            // The following are not required for percent-encoding per RFC5987,
            // so we can allow for a little better readability over the wire: |`^
            replace(/%(?:7C|60|5E)/g, unescape);
}

// here is an alternative to the above function
function encodeRFC5987ValueChars2(str) {
  return encodeURIComponent(str).
    // Note that although RFC3986 reserves "!", RFC5987 does not,
    // so we do not need to escape it
    replace(/['()*]/g, c =&gt; "%" + c.charCodeAt(0).toString(16)). // i.e., %27 %28 %29 %2a (Note that valid encoding of "*" is %2A
                                                                 // which necessitates calling toUpperCase() to properly encode)
    // The following are not required for percent-encoding per RFC5987,
    // so we can allow for a little better readability over the wire: |`^
    replace(/%(7C|60|5E)/g, (str, hex) =&gt; String.fromCharCode(parseInt(hex, 16)));
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
   <td>{{SpecName('ESDraft', '#sec-encodeuricomponent-uricomponent', 'encodeURIComponent')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.encodeURIComponent")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("decodeURI")}}</li>
 <li>{{jsxref("encodeURI")}}</li>
 <li>{{jsxref("decodeURIComponent")}}</li>
</ul>
