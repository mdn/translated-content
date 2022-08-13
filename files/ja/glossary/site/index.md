---
title: Site (サイト)
slug: Glossary/Site
tags:
  - Glossary
  - Security
  - WebMechanics
  - 用語集
translation_of: Glossary/Site
---
<p>ウェブコンテンツの一部であるい<em>サイト</em>は、オリジン内にあるホストの<em>登録可能なドメイン</em>によって決定されます。これは、<em>公開接尾辞リスト</em>を参照して、<em>公開接尾辞</em>として数えられるホストの部分を見つけることによって計算されます (e.g. <samp>com</samp>, <samp>org</samp>, <samp>co.uk</samp>)。</p>

<p><em>サイト</em>の概念は、ウェブアプリケーションの <a href="/ja/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)">Cross-Origin Resource Policy</a> と同様に、 <a href="/ja/docs/Web/HTTP/Headers/Set-Cookie#Directives">SameSite クッキー</a>で使用されています。</p>

<h2 id="Examples_of_the_same_site" name="Examples_of_the_same_site">同一サイトの例</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td style="width: 50%;"><code>https://developer.mozilla.org/en-US/docs/</code><br>
    <code>https://support.mozilla.org/en-US/</code></td>
   <td style="width: 50%;">登録可能なドメイン <em>mozilla.org</em> が同じなので同一サイト</td>
  </tr>
  <tr>
   <td style="width: 50%;"><code>http://example.com:8080</code><br>
    <code>https://example.com</code></td>
   <td style="width: 50%;">スキームとポートは関係ないので同一サイト</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples_of_different_site" name="Examples_of_different_site">異なるサイトの例</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td style="width: 50%;"><code>https://developer.mozilla.org/ja/docs/</code><br>
    <code>https://example.com</code></td>
   <td style="width: 50%;">2つの URL の登録可能ドメインが異なるため、同一サイトではない</td>
  </tr>
 </tbody>
</table>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <thead>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('URL', '#host-same-site')}}</td>
   <td>{{Spec2('URL')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>
