---
title: X-DNS-Prefetch-Control
slug: Web/HTTP/Headers/X-DNS-Prefetch-Control
tags:
- DNS
- HTTP
- X-DNS-Prefetch-Control
- header
browser-compat: http.headers.X-DNS-Prefetch-Control
translation_of: Web/HTTP/Headers/X-DNS-Prefetch-Control
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>X-DNS-Prefetch-Control</code></strong> は HTTP のレスポンスヘッダーで、 DNS 先読み、つまりユーザーが進むことができるリンクと、画像、 CSS、 JavaScript などの文書から参照される項目の両方で、ブラウザーが事前にドメイン名の解決を実行する機能を制御します。</p>

<p>この先読みはバックグラウンドで行われるので、参照されている項目が必要になった時に {{glossary("DNS")}} が解決されている可能性が高くなります。これによって、ユーザーがリンクをクリックしたときに遅延が短縮されます。</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">構文</h2>

<pre class="brush: html">X-DNS-Prefetch-Control: on
X-DNS-Prefetch-Control: off
</pre>

<h3 id="Directives">ディレクティブ</h3>

<dl>
  <dt>on</dt>
  <dd>DNS 先読みを有効にします。この機能に対応しているブラウザーは、このヘッダーが存在しない場合はこの動作をします。</dd>
  <dt>off</dt>
  <dd>DNS 先読みを無効にします。これはページのリンクを制御しない場合や、ドメインに情報漏洩させたくないと分かる場合に有用です。</dd>
</dl>

<h2 id="Description">解説</h2>

<p>DNS リクエストは帯域で見ればとても小さいものですが、遅延は、特にモバイルネットワークではとても大きいものです。 DNS の先読みを投機的に行うと、ユーザーがリンクをクリックするときなど特定の場面の遅延を著しく短縮することができます。場合によっては、遅延を秒単位で短縮することができます。</p>

<p>ブラウザーによってはこの先読みの実装で、ドメイン名の解決が実際のページのコンテンツの読み込みと (直後ではなく) 並列で行うことができます。これを行うことで、遅延の大きい名前解決プロセスがコンテンツの読み込みを遅らせないようにします。</p>

<p>ページの読み込み時間は – 特にモバイルネットワークにおいては – この方法で著しく改善できます。画像のドメイン名がリクエストに先立って解決できれば、多数の画像を読み込むページの読み込み時間に 5% 以上の改善が見られることがあります。</p>

<h3 id="Configuring_prefetching_in_the_browser">ブラウザーの先読みの構成</h3>

<p>一般に、先読みを管理することを考える必要はありません。しかし、ユーザーは先読みを無効にしたいと思うかもしれません。 Firefox では、設定の <code>network.dns.disablePrefetch</code> を <code>true</code> にすることで実現できます。</p>

<p>また、既定では、埋め込みリンクのホスト名の先読みは {{glossary("HTTPS")}} で読み込まれた文書では実行されません。 Firefox では、設定の <code>network.dns.disablePrefetchFromHTTPS</code> を <code>false</code> に設定することでこれを変更することができます。</p>

<h2 id="Examples">例</h2>

<h3 id="Turning_on_and_off_prefetching">先読みの有効化と無効化</h3>

<p>次のように、サーバー側から <code>X-DNS-Prefetch-Control</code> ヘッダーを送信するか、個別の文書で {{ htmlattrxref("http-equiv", "meta") }} 属性を {{ HTMLElement("meta") }} 要素に設定します。</p>

<pre class="brush: html">&lt;meta http-equiv="x-dns-prefetch-control" content="off"&gt;
</pre>

<p>逆の設定をするには <code>content</code> を "<code>on</code>" にしてください。</p>

<h3 id="Forcing_lookup_of_specific_hostnames">特定のホスト名の参照の強制</h3>

<p><a href="/ja/docs/Web/HTML/Link_types">リンク種別</a>を <code>dns-prefetch</code> にした {{ HTMLElement("link") }} 要素に {{ htmlattrxref("rel","link") }} 属性を使用することで、そのホスト名を使用した特定のアンカーを提供せずに、特定のホスト名を強制的に検索することができます。</p>

<pre class="brush: html">&lt;link rel="dns-prefetch" href="https://www.mozilla.org/contribute/"&gt;
</pre>

<p>この例では、 "<a class="linkification-ext external" href="https://www.mozilla.org/contribute/">www.mozilla.org/contribute</a>" というドメイン名が事前に解決されます。</p>

<p>同様に、 link 要素は完全な URL を提供せずにホスト名を解決するために使用することができますが、ホスト名の前に2つのスラッシュを付けた場合だけです。</p>

<pre class="brush: html">&lt;link rel="dns-prefetch" href="//www.mozilla.org/contribute/"&gt;
</pre>

<p>ホスト名の強制的な先読みは、例えば、あるサイトのホームページ自体では使用されていないにもかかわらず、サイト全体で頻繁に参照されるドメイン名を強制的に事前解決するために有用かもしれません。これは、ホームページの性能には影響しないかもしれませんが、サイトの全体的なパフォーマンスを向上させます。</p>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html">Firefox の DNS 先読み (ブログ記事)</a></li>
 <li><a href="https://dev.chromium.org/developers/design-documents/dns-prefetching">Google Chrome じゃ DNS 先読み制御を扱います</a></li>
</ul>
