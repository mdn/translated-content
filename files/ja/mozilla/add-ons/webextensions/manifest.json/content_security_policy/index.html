---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
---
<div>{{AddonSidebar}}</div>

<table class="fullwidth-table standard-table">
 <tbody>
  <tr>
   <th scope="row" style="width: 30%;">型</th>
   <td><code>String</code></td>
  </tr>
  <tr>
   <th scope="row">必須</th>
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">例</th>
   <td>
    <pre class="brush: json no-line-numbers">
"content_security_policy": "default-src 'self'"</pre>
   </td>
  </tr>
 </tbody>
</table>

<p>拡張機能には、既定でコンテンツセキュリティポリシー (CSP) が適用されます。既定のポリシーでは、 <a href="/ja/docs/Web/HTML/Element/script">&lt;script&gt;</a> や <a href="/ja/docs/Web/HTML/Element/object">&lt;object&gt;</a> リソースを読み込むソースを制限し、 <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/eval">eval()</a></code> のような潜在的に安全でない可能性がある行為を禁止しています。この実装のより詳細は<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#default_content_security_policy">既定のコンテンツセキュリティポリシー</a>を見てください。</p>

<p><code>"content_security_policy"</code> manifest キーを使用して、アドオンのセキュリティを緩くしたり逆にもっと制限することができます。  このキーは、 HTTP の Content-Security-Policy ヘッダーと同じ方法で指定されます。 CSP の構文の一般的な説明は <a href="/ja/docs/Web/HTTP/CSP">CSP の使用</a>を見てください。</p>

<p>例として以下のような使用方法が可能です。</p>

<ul>
 <li>URL を{{CSP("script-src")}} や {{CSP("object-src")}} ディレクティブで指定することで、拡張機能にパッケージ外からスクリプトやオブジェクトの読み込みを許可する。</li>
 <li><a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_inline_script"> <code>"script-src"</code> ディレクティブでスクリプトのハッシュを指定する</a>ことで、拡張機能にインラインスクリプトの実行を許可する。</li>
 <li>拡張機能に <code>eval()</code> や類似する機能を許可するために、 <code>'unsafe-eval'</code> を {{CSP("script-src")}} ディレクティブの中に入れる</li>
 <li>適切な<a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy">ポリシーディレクティブ</a>を使うことで、その他のコンテンツを許可されたソースのみ、例えば画像やスタイルシートのみに制限する。</li>
</ul>

<p>指定できるポリシーには以下のような制限があります。</p>

<ul>
 <li>ポリシーは少なくとも {{CSP("script-src")}} および {{CSP("object-src")}} ディレクティブを含む必要があり、 {{CSP("script-src")}} ディレクティブは <code>'self'</code> キーワードを含まなければならない。</li>
 <li>外部のソースを使用する場合は <code>https:</code> スキームを使用しなければならない。</li>
 <li><a href="https://publicsuffix.org/list/">public suffix list</a> 内のドメインのリモートリソースはワイルドカードを使用禁止 (よって "*.co.uk" と "*.blogspot.com" は許可されないが、 "*.foo.blogspot.com" は許可される)。</li>
 <li>すべてのソースはホストを指定しなければならない。</li>
 <li><code>blob:</code>, <code>filesystem:</code>, <code>moz-extension:</code>, <code>https:</code> スキームのリソースのみ指定することができる。</li>
 <li><a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#sources">キーワード</a>は <code>'none'</code>, <code>'self'</code>, <code>'unsafe-eval'</code> のみ許可されている。</li>
</ul>

<h2 id="Example">例</h2>

<h3 id="Valid_examples">有効な例</h3>

<p>"https://example.com" からのリモートスクリプトを許可: <sup>(<em>注</em> <a href="#examplenote_1">1</a> を参照)</sup></p>

<pre class="brush: json no-line-numbers">"content_security_policy": "script-src 'self' https://example.com; object-src 'self'"</pre>

<p>"jquery.com" のサブドメインからのリモートスクリプトを許可:</p>

<pre class="brush: json no-line-numbers">"content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"</pre>

<p><a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval%28%29_and_friends"><code>eval()</code> や類似する機能</a>を許可:</p>

<pre class="brush: json no-line-numbers">"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"</pre>

<p>インラインスクリプト <code>"&lt;script&gt;alert('Hello, world.');&lt;/script&gt;"</code> を許可:</p>

<pre class="brush: json no-line-numbers">"content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"</pre>

<p>他のポリシーはそのままだが、画像は拡張機能にパッケージされていることを要求する:</p>

<pre class="brush: json no-line-numbers">"content_security_policy": "script-src 'self'; object-src 'self'; img-src 'self'"</pre>

<p>すべてのコンテンツが拡張機能にパッケージされていることを要求する:</p>

<pre class="brush: json no-line-numbers">"content_security_policy": "default-src 'self'"
</pre>

<h3 id="Invalid_examples">無効な例</h3>

<p><code>"object-src"</code> ディレクティブが省略されているポリシー:</p>

<pre class="brush: json no-line-numbers">"content_security_policy": "script-src 'self' https://*.jquery.com;"</pre>

<p> <code>"script-src"</code> ディレクティブにおいて <code>"self"</code> キーワードが入っていないポリシー:</p>

<pre class="brush: json no-line-numbers">"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"</pre>

<p>リモートソーススキームが <code>https</code> ではない:</p>

<pre class="brush: json no-line-numbers">"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"</pre>

<p>ワイルドカードを通常のドメインに使用している:</p>

<pre class="brush: json no-line-numbers">"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"</pre>

<p>リモートソーススキームは https だがホスト名がない:</p>

<pre class="brush: json no-line-numbers">"content_security_policy": "script-src 'self' https:; object-src 'self'"</pre>

<p>ディレクティブに現在サポートしていない <code>'unsafe-inline'</code>キーワードが含まれている:</p>

<pre class="brush: json no-line-numbers">"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"</pre>

<p><span id="exampleNote_1">1. <em>注: 有効な例は正しい CSP のキーの使い方を表しますが、'unsafe-eval', 'unsafe-inline', リモートスクリプト、リモートソースを CSP に指定する拡張機能は、主なセキュリティの問題から、addons.mozilla.org に載せる拡張機能には許可されません。</em></span></p>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("webextensions.manifest.content_security_policy")}}</p>
