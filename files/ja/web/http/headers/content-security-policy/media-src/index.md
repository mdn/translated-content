---
title: 'CSP: media-src'
slug: Web/HTTP/Headers/Content-Security-Policy/media-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Media
  - Reference
  - Security
  - media-src
  - source
  - セキュリティ
  - ディレクティブ
  - メディア
translation_of: Web/HTTP/Headers/Content-Security-Policy/media-src
---
<div>{{HTTPSidebar}}</div>

<p>HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における <code><strong>media-src</strong></code> ディレクティブは、 {{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素を使用して読み込むメディアの有効なソースを指定します。</p>

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

<p><code>media-src</code> ポリシーには、1つ以上のソースが許可されています。</p>

<pre class="syntaxbox">Content-Security-Policy: media-src &lt;source&gt;;
Content-Security-Policy: media-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources" name="Sources">ソース</h3>

<p>{{page("/ja/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Violation_cases" name="Violation_cases">違反例</h3>

<p>この CSP ヘッダーがある場合、</p>

<pre class="brush: bash">Content-Security-Policy: media-src https://example.com/</pre>

<p>以下の {{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("track")}} の各要素はブロックされ、読み込まれません。</p>

<pre class="brush: html">&lt;audio src="https://not-example.com/audio"&gt;&lt;/audio&gt;

&lt;video src="https://not-example.com/video"&gt;
  &lt;track kind="subtitles" src="https://not-example.com/subtitles"&gt;
&lt;/video&gt;</pre>

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
   <td>{{specName("CSP 3.0", "#directive-media-src", "media-src")}}</td>
   <td>{{Spec2('CSP 3.0')}}</td>
   <td>変更なし</td>
  </tr>
  <tr>
   <td>{{specName("CSP 1.1", "#directive-media-src", "media-src")}}</td>
   <td>{{Spec2('CSP 1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("http.headers.csp.Content-Security-Policy.media-src")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>{{HTMLElement("audio")}}, {{HTMLElement("video")}}, {{HTMLElement("track")}}</li>
</ul>
