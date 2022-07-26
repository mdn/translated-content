---
title: 'CSP: prefetch-src'
slug: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
tags:
  - CSP
  - Content Security Policy
  - Directive
  - HTTP
  - Reference
  - prefetch-src
  - コンテンツセキュリティポリシー
  - ディレクティブ
translation_of: Web/HTTP/Headers/Content-Security-Policy/prefetch-src
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における <code><strong>prefetch-src</strong></code> ディレクティブは、事前読み込みまたは事前描画することができる有効なリソースを指定します。</p>

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
   <th scope="row">{{CSP("default-src")}} fallback</th>
   <td>あり。このディレクティブがない場合、ユーザーエージェントは <code>default-src</code> ディレクティブを探します。</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>prefetch-src</code> ポリシーには、1つ以上のソースが許可されています。</p>

<pre class="syntaxbox">Content-Security-Policy: prefetch-src &lt;source&gt;;
Content-Security-Policy: prefetch-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources" name="Sources">ソース</h3>

<p>{{page("/ja/docs/Web/HTTP/Headers/Content-Security-Policy/default-src", "common_sources")}}</p>

<h2 id="Example" name="Example">例</h2>

<h3 id="Prefetch_resources_do_not_match_header" name="Prefetch_resources_do_not_match_header">ヘッダーが一致しないリソースの事前読み込み</h3>

<p>次のコンテンツセキュリティポリシーを持つページがあったとします。</p>

<pre>Content-Security-Policy: prefetch-src https://example.com/
</pre>

<p>次のコードで読み込もうとすると、指定された URL が <code>prefetch-src</code> のソース一覧にないので、ネットワークエラーになります。</p>

<pre>&lt;link rel="prefetch" src="https://example.org/"&gt;&lt;/link&gt;
&lt;link rel="prerender" src="https://example.org/"&gt;&lt;/link&gt;</pre>

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
   <td>{{specName("CSP 3.0", "#prefetch-src", "prefetch-src")}}</td>
   <td>{{Spec2("CSP 3.0")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.prefetch-src")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
</ul>
