---
title: 'CSP: script-src-elem'
slug: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
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
translation_of: Web/HTTP/Headers/Content-Security-Policy/script-src-elem
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における <strong><code>script-src-elem</code></strong> ディレクティブは、 JavaScript の {{HTMLElement("script")}} 要素の有効なソースを指定しますが、 <code>onclick</code> のようなインラインスクリプトのイベントハンドラーは指定しません。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">CSP バージョン</th>
   <td>3</td>
  </tr>
  <tr>
   <th scope="row">ディレクティブ種別</th>
   <td>{{Glossary("Fetch directive", "フェッチディレクティブ")}}</td>
  </tr>
  <tr>
   <th scope="row">{{CSP("default-src")}} による代替</th>
   <td>あり。このディレクティブがない場合、ユーザーエージェントは {{CSP("script-src")}} ディレクティブを探し、両方ともない場合は、 <code>default-src</code> ディレクティブで代替します。</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>script-src-elem</code> ポリシーには、１つまたは複数のソースが許可されています。</p>

<pre class="syntaxbox notranslate">Content-Security-Policy: script-src-elem &lt;source&gt;;
Content-Security-Policy: script-src-elem &lt;source&gt; &lt;source&gt;;
</pre>

<p><code>script-src-elem</code> は {{CSP("script-src")}} との組み合わせで使用することができます。</p>

<pre class="syntaxbox notranslate">Content-Security-Policy: script-src &lt;source&gt;;
Content-Security-Policy: script-src-elem &lt;source&gt;;
</pre>

<h3 id="Sources" name="Sources">ソース</h3>

<p>{{page("/ja/docs/Web/HTTP/Headers/Content-Security-Policy/default-src", "Sources")}}</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Fallback_to_script-src" name="Fallback_to_script-src">script-src へのフォールバック</h3>

<p><code>script-src-elem</code> 存在しない場合、ユーザーエージェントは {{CSP("script-src")}} ディレクティブで代替し、こちらも同様にない場合は、 {{CSP("default-src")}} で代替します。</p>

<div class="hidden">
<p>TODO: Add comprehensive examples.</p>
</div>

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
   <td>{{specName("CSP 3.0", "#directive-script-src-elem", "script-src-elem")}}</td>
   <td>{{Spec2("CSP 3.0")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.script-src-elem")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{HTMLElement("script")}}</li>
 <li>{{CSP("script-src")}}</li>
 <li>{{CSP("script-src-attr")}}</li>
</ul>
