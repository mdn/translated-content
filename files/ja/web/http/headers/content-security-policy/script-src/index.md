---
title: 'CSP: script-src'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src
tags:
  - CSP
  - Content
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Script
  - Security
  - script-src
  - source
translation_of: Web/HTTP/Headers/Content-Security-Policy/script-src
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) の <code><strong>script-src</strong></code> ディレクティブは、 JavaScript の情報なソースを指定します。これは {{HTMLElement("script")}} 要素の中に直接読み込まれる URL だけでなく、インラインのスクリプトイベントハンドラー (<code>onclick</code>) やスクリプト実行のトリガーとなりうる <a href="/ja/docs/Web/XSLT">XSLT スタイルシート</a>のようなものも含まれます。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">CSP バージョン</th>
   <td>1</td>
  </tr>
  <tr>
   <th scope="row">ディレクティブ種別</th>
   <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
  </tr>
  <tr>
   <th scope="row">{{CSP("default-src")}} による代替</th>
   <td>あり。このディレクティブがない場合、ユーザーエージェントは <code>default-src</code> ディレクティブを探します。</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>script-src</code> ポリシーには、１つまたは複数のソースが許可されています。</p>

<pre class="syntaxbox notranslate">Content-Security-Policy: script-src &lt;source&gt;;
Content-Security-Policy: script-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources" name="Sources">ソース</h3>

<p>{{page("Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Violation_case" name="Violation_case">違反例</h3>

<p>この CSP ヘッダーがある場合、</p>

<pre class="brush: bash notranslate">Content-Security-Policy: script-src https://example.com/</pre>

<p>以下のスクリプトはブロックされ、読み込みや実行が行われません。</p>

<pre class="brush: html notranslate">&lt;script src="https://not-example.com/js/library.js"&gt;&lt;/script&gt;</pre>

<p>なお、インラインのイベントハンドラーも同様にブロックされます。</p>

<pre class="brush: html notranslate">&lt;button id="btn" onclick="doSomething()"&gt;</pre>

<p>これを {{domxref("EventTarget.addEventListener", "addEventListener")}} の呼び出しに置き換えてください。</p>

<pre class="brush: js notranslate">document.getElementById("btn").addEventListener('click', doSomething);</pre>

<h3 id="Unsafe_inline_script" name="Unsafe_inline_script">安全ではないインラインのスクリプト</h3>

<div class="note">
<p><strong>注:</strong> インラインスタイルとインラインスクリプトを禁止することは、 CSP が提供する最大のセキュリティ上の利点の一つです。しかし、どうしても使用しなければならない場合は、それらを許可する仕組みがいくつかあります。</p>
</div>

<p>インラインスクリプトとインラインのイベントハンドラーを許可するために <code>'unsafe-inline'</code> や、インラインブロックに一致するノンスソースまたはハッシュソースを指定することができます。</p>

<pre class="brush: bash notranslate">Content-Security-Policy: script-src 'unsafe-inline';
</pre>

<p>上記のコンテンツセキュリティポリシーは、インラインの {{HTMLElement("script")}} 要素を許可します。</p>

<pre class="brush: html notranslate">&lt;script&gt;
  var inline = 1;
&lt;/script&gt;</pre>

<p>nonce-source を使用して、特定のインラインスクリプトブロックのみ許可することができます。</p>

<pre class="brush: bash notranslate">Content-Security-Policy: script-src 'nonce-2726c7f26c'</pre>

<p>同じノンスを {{HTMLElement("script")}} 要素に指定する必要があります。</p>

<pre class="brush: html notranslate">&lt;script nonce="2726c7f26c"&gt;
  var inline = 1;
&lt;/script&gt;</pre>

<p>他にも、インラインスクリプトからハッシュを生成することができます。 CSP では sha256, sha384, sha512 に対応しています。</p>

<pre class="brush: bash notranslate">Content-Security-Policy: script-src 'sha256-B2yPHKaXnvFWtRChIbabYmUBFZdVfKKXHbWtWidDVF8='</pre>

<p>ハッシュを生成するとき、 {{HTMLElement("script")}} タグを含めないようにし、大文字小文字と、ホワイトスペース、特に前後のホワイトスペースに注意してください。</p>

<pre class="brush: html notranslate">&lt;script&gt;var inline = 1;&lt;/script&gt;</pre>

<h3 id="Unsafe_eval_expressions" name="Unsafe_eval_expressions">安全ではない eval 式</h3>

<p><code>'unsafe-eval'</code> ソース式は、文字列からコードを生成するいくつかのスクリプト実行メソッドを制御します。もし <code>'unsafe-eval'</code> が <code>script-src</code> ディレクティブで指定されていなかった場合、以下のメソッドはブロックされて何の効果も現れません。</p>

<ul>
 <li>{{jsxref("eval", "eval()")}}</li>
 <li>{{jsxref("Function", "Function()")}}</li>
 <li>メソッドの文字列リテラルを <code>window.setTimeout("alert(\"Hello World!\");", 500);</code> のように渡した場合
  <ul>
   <li>{{domxref("window.setTimeout")}}</li>
   <li>{{domxref("window.setInterval")}}</li>
   <li>{{domxref("window.setImmediate")}}</li>
  </ul>
 </li>
 <li>{{domxref("window.execScript")}} {{non-standard_inline}} (IE &lt; 11 のみ)</li>
</ul>

<h3 id="strict-dynamic" name="strict-dynamic">strict-dynamic</h3>

<p><code>'strict-dynamic'</code> ソース式は、マークアップ中のスクリプトに明示的に与えられた信頼が、ノンスやハッシュを伴って、そのルートスクリプトによって読み込まれるすべてのスクリプトに伝搬されることを指定します。同時に、 <code>'self'</code> や <code>'unsafe-inline'</code> のようなホワイトリストやソース表現は無視されます。例えば、 <code>script-src 'strict-dynamic' 'nonce-R4nd0m' https://whitelisted.com/</code> のようなポリシーでは、 <code>&lt;script nonce="R4nd0m" src="https://example.com/loader.js"&gt;</code> を指定したルートスクリプトの読み込みを許可し、 <code>loader.js</code> で読み込まれたすべてのスクリプトにその信頼性を伝播させますが、 <code>https://whitelisted.com/</code> からのスクリプトの読み込みは、ノンスを伴っているか、信頼されたスクリプトから読み込まれたものでない限り、許可しません。</p>

<pre class="brush: bash notranslate">script-src 'strict-dynamic' 'nonce-<em>someNonce</em>'</pre>

<p><em>または</em></p>

<pre class="brush: bash notranslate">script-src 'strict-dynamic' 'sha256-<em>base64EncodedHash</em>'</pre>

<p>ユーザーエージェントのスニッフィングを必要とせず、後方互換性のある方法として、 <code>strict-dynamic</code> を指定することができます。.<br>
 以下のポリシー、</p>

<pre class="brush: bash notranslate">script-src 'unsafe-inline' https: 'nonce-abcdefg' 'strict-dynamic'</pre>

<p>は、 CSP1 に対応したブラウザーでは <code>'unsafe-inline' https:</code> のように動作し、 CSP2 に対応したブラウザーでは <code>https: 'nonce-abcdefg'</code> のように、CSP3 に対応したブラウザーでは <code>'nonce-abcdefg' 'strict-dynamic'</code> のように動作します。</p>

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
   <td>{{specName("CSP 3.0", "#directive-script-src", "script-src")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1", "#directive-script-src", "script-src")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.script-src")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{HTMLElement("script")}}</li>
 <li>{{CSP("script-src-elem")}}</li>
 <li>{{CSP("script-src-attr")}}</li>
</ul>
