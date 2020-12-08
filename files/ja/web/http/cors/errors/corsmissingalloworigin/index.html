---
title: 'Reason: CORS header ''Access-Control-Allow-Origin'' missing'
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
tags:
  - CORS
  - CORSMissingAllowOrigin
  - Cross-Origin
  - Error
  - HTTP
  - HTTPS
  - Messages
  - Reasons
  - Security
  - console
  - troubleshooting
translation_of: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
---
<div>{{HTTPSidebar}}</div>

<h2 id="Reason" name="Reason">理由</h2>

<pre class="syntaxbox notranslate">Reason: CORS header 'Access-Control-Allow-Origin' missing</pre>

<h2 id="What_went_wrong" name="What_went_wrong">何が悪いのか</h2>

<p>{{Glossary("CORS")}} リクエストへのレスポンスが、リソースが現在のオリジン内で操作しているコンテンツによってアクセスできるかどうかを判断するために使われる、必須の {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーを欠いています。</p>

<p>サーバーを自分で制御できる場合は、要求しているサイトのオリジンを <code>Access-Control-Allow-Origin</code> ヘッダーの値に追加して、アクセスが許可されているドメインの一覧に追加してください。</p>

<p>例えば、 https://amazing.site のサイトが CORS を使用したリソースにアクセスできるよう許可するためには、ヘッダーを以下のようにしてください。</p>

<pre class="notranslate">Access-Control-Allow-Origin: https://amazing.site</pre>

<p><code>*</code> を使用することで、あらゆるサイトにアクセスを許可するようサイトを構成することもできます。これは公開 API にのみ使用してください。非公開の API には <code>*</code> を使用するべきではなく、代わりに具体的なドメインやドメインの一覧を設定してください。加えて、ワイルドカードは {{htmlattrxref("crossorigin")}} 属性が <code>anonymous</code> に設定された要求にのみ動作し、リクエストでは Cookie のような資格情報の送信を抑制します。</p>

<pre class="notranslate">Access-Control-Allow-Origin: *</pre>

<div class="warning">
<p><strong>警告:</strong> ワイルドカードを使用して、非公開の API へのアクセスをすべてのサイトに許可することは、悪い考えです。</p>
</div>

<p>何らかのサイトが CORS リクエストを <code>*</code> ワイルドカードを使用すること<em>なく</em> (たとえば資格情報を有効にする場合) 利用できるようにするには、サーバーにリクエストの <code>Origin</code> ヘッダーの値を読み取り、その値を <code>Access-Control-Allow-Origin</code> に設定することに加えて、一部のヘッダーがオリジンに応じて動的に設定されることを示すために <code>Vary: Origin</code> ヘッダーを設定する必要があります。</p>

<p>例えば Apache では、サーバー構成 (の中の <code>&lt;Directory&gt;</code>, <code>&lt;Location&gt;</code>, <code>&lt;Files&gt;</code>, <code>&lt;VirtualHost&gt;</code> のうち適切な節) に次のような行を追加してください。構成はふつう、 <code>.conf</code> ファイル又は (一般的な名前は <code>httpd.conf</code> や <code>apache.conf</code>) 又は <code>.htaccess</code> ファイルにあります。</p>

<pre class="notranslate">Header set Access-Control-Allow-Origin '<em>origin-list</em>'</pre>

<p>Nginx では、このヘッダーを設定するコマンドは次の通りです。</p>

<pre class="notranslate">add_header 'Access-Control-Allow-Origin' '<em>origin-list</em>'</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/HTTP/CORS/Errors">CORS のエラー</a></li>
 <li>用語集: {{Glossary("CORS")}}</li>
 <li><a href="/ja/docs/Web/HTTP/CORS">CORS 入門</a></li>
</ul>
