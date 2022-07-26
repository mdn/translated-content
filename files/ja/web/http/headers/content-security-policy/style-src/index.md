---
title: 'CSP: style-src'
slug: Web/HTTP/Headers/Content-Security-Policy/style-src
tags:
  - CSP
  - Content
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Style
  - source
  - style-src
translation_of: Web/HTTP/Headers/Content-Security-Policy/style-src
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) の <strong><code>style-src</code></strong> ディレクティブは、スタイルシートの有効なソースを指定します。</p>

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

<p><code>style-src</code> ポリシーには、１つまたは複数のソースが許可されています。</p>

<pre class="syntaxbox notranslate">Content-Security-Policy: style-src &lt;source&gt;;
Content-Security-Policy: style-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources" name="Sources">ソース</h3>

<p>{{page("/ja/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Violation_cases" name="Violation_cases">違反例</h3>

<p>この CSP ヘッダーがある場合、</p>

<pre class="brush: bash notranslate">Content-Security-Policy: style-src https://example.com/</pre>

<p>以下のスタイルシートはブロックされ、読み込まれません。</p>

<pre class="brush: html notranslate">&lt;link href="https://not-example.com/styles/main.css" rel="stylesheet" type="text/css" /&gt;

&lt;style&gt;
#inline-style { background: red; }
&lt;/style&gt;

&lt;style&gt;
  @import url("https://not-example.com/styles/print.css") print;
&lt;/style&gt;</pre>

<p>{{HTTPHeader("Link")}} ヘッダーで読み込まれるものも同様です。</p>

<pre class="brush: bash notranslate">Link: &lt;https://not-example.com/styles/stylesheet.css&gt;;rel=stylesheet
</pre>

<p>インラインの style 属性もブロックされます。</p>

<pre class="brush: html notranslate">&lt;div style="display:none"&gt;Foo&lt;/div&gt;</pre>

<p>JavaScript で直接 <code>style</code> 属性を設定したり、 {{domxref("CSSStyleDeclaration.cssText", "cssText")}} を設定したりしたスタイルも同様です。</p>

<pre class="brush: js notranslate">document.querySelector('div').setAttribute('style', 'display:none;');
document.querySelector('div').style.cssText = 'display:none;';</pre>

<p>しかし、要素の {{domxref("HTMLElement.style", "style")}} プロパティに直接設定されたスタイルプロパティはブロックされず、 JavaScript から安全にスタイルを操作することができます。</p>

<pre class="brush: js notranslate">document.querySelector('div').style.display = 'none';</pre>

<p>この手の操作は、 CSP の {{CSP("script-src")}} ディレクティブで JavaScript を無効にすることで防ぐことができます。</p>

<h3 id="Unsafe_inline_styles" name="Unsafe_inline_styles">安全ではないインラインスタイル</h3>

<div class="note">
<p><strong>注:</strong> インラインスタイルとインラインスクリプトを禁止することは、 CSP が提供する最大のセキュリティ上の利点の一つです。しかし、どうしても使用しなければならない場合は、それらを許可する仕組みがいくつかあります。</p>
</div>

<p>インラインスタイルを許可するために、 <code>'unsafe-inline'</code> を指定するか、インラインブロックに一致するノンスソースまたはハッシュソースを指定することができます。</p>

<pre class="brush: bash notranslate">Content-Security-Policy: style-src 'unsafe-inline';
</pre>

<p>上記のコンテンツセキュリティポリシーは {{HTMLElement("style")}} 要素やあらゆる要素の <code>style</code> 属性などのインラインスタイルを許可します。</p>

<pre class="brush: html notranslate">&lt;style&gt;
#inline-style { background: red; }
&lt;/style&gt;

&lt;div style="display:none"&gt;Foo&lt;/div&gt;
</pre>

<p>ノンスソースを使用して、特定のインラインスタイルのみ許可することができます。</p>

<pre class="brush: bash notranslate">Content-Security-Policy: style-src 'nonce-2726c7f26c'</pre>

<p>同じノンスを {{HTMLElement("style")}} 要素にも設定する必要があります。</p>

<pre class="brush: html notranslate">&lt;style nonce="2726c7f26c"&gt;
#inline-style { background: red; }
&lt;/style&gt;</pre>

<p>他にも、インラインスタイルからハッシュを生成することができます。 CSP では sha256, sha384, sha512 に対応しています。</p>

<pre class="brush: bash notranslate">Content-Security-Policy: style-src 'sha256-a330698cbe9dc4ef1fb12e2ee9fc06d5d14300262fa4dc5878103ab7347e158f'</pre>

<p>ハッシュを生成するときは、 {{HTMLElement("style")}} タグを含めないようにし、大文字小文字と、ホワイトスペース、特に前後のホワイトスペースに注意してください。</p>

<pre class="brush: html notranslate">&lt;style&gt;#inline-style { background: red; }&lt;/style&gt;</pre>

<h3 id="Unsafe_style_expressions" name="Unsafe_style_expressions">安全ではない style 式</h3>

<p><code>'unsafe-eval'</code> ソース式は、文字列からスタイル宣言を生成するいくつかのスタイルメソッドを制御します。もし <code>'unsafe-eval'</code> が <code>style-src</code> ディレクティブで指定されていななかった場合、以下のメソッドはブロックされて何の効果も現れません。</p>

<ul>
 <li>{{domxref("CSSStyleSheet.insertRule()")}}</li>
 <li>{{domxref("CSSGroupingRule.insertRule()")}}</li>
 <li>{{domxref("CSSStyleDeclaration.cssText")}}</li>
</ul>

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
   <td>{{specName("CSP 3.0", "#directive-style-src", "style-src")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>No changes.</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1", "#directive-style-src", "style-src")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.style-src")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{CSP("style-src-elem")}}</li>
 <li>{{CSP("style-src-attr")}}</li>
 <li>{{HTTPHeader("Link")}} header</li>
 <li>{{HTMLElement("style")}}, {{HTMLElement("link")}}</li>
 <li>{{cssxref("@import")}}</li>
 <li>{{domxref("CSSStyleSheet.insertRule()")}}</li>
 <li>{{domxref("CSSGroupingRule.insertRule()")}}</li>
 <li>{{domxref("CSSStyleDeclaration.cssText")}}</li>
</ul>
