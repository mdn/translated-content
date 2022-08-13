---
title: HTTP/2
slug: Glossary/HTTP_2
tags:
  - Glossary
  - HTTP
  - Infrastructure
  - Reference
  - Web Performance
  - 'l10n:priority'
  - 用語集
translation_of: Glossary/HTTP_2
---
<p><span class="seoSummary"><strong>HTTP/2</strong> は <a href="/ja/docs/Web/HTTP/Basics_of_HTTP">HTTP ネットワークプロトコル</a>の改訂版です</span>。 HTTP/2 の主な目的は、リクエストとレスポンス全体を全二重化できるようにすることで、{{glossary("latency", "レイテンシー")}}を縮小し、 HTTP ヘッダーフィールドを効率的に圧縮することでプロトコルのオーバーヘッドを最小化し、リクエストの優先度やサーバーからのプッシュ通知に対応することです。</p>

<p>HTTP/2 は HTTP のアプリケーション的な意味を何も変更していません。 HTTP 1.1 にあった主要な概念、たとえば HTTP メソッド、ステータスコード、 URI、ヘッダーフィールドなどはすべてそのまま残っています。その代わり、 HTTP/2 はデータを書式化 (フレーム化) するしてクライアントとサーバー間で転送する方法を、プロセス全体の管理と、新しいフレーム化レイヤーの中の複雑さをアプリケーションから隠蔽することの両面で変更しました。結果として、既存のすべてのアプリケーションが変更なしに配信することができます。</p>

<section id="Quick_links">
<ol>
 <li>一般知識
  <ol>
   <li><a href="/ja/docs/Web/HTTP">HTTP on MDN</a></li>
   <li>Wikipedia の {{interwiki("wikipedia", "HTTP/2", "HTTP/2")}}</li>
  </ol>
 </li>
 <li><a href="/ja/docs/Glossary">用語集</a>
  <ol>
   <li>{{glossary("HTTP")}}</li>
   <li>{{glossary("Latency")}}</li>
  </ol>
 </li>
</ol>
</section>
