---
title: CORS
slug: Glossary/CORS
tags:
  - Glossary
  - Infrastructure
  - Security
  - セキュリティ
  - 用語集
translation_of: Glossary/CORS
---
<p><strong>CORS</strong> (オリジン間リソース共有、 Cross-Origin Resource Sharing) は、 {{Glossary("Header", "HTTP ヘッダー")}}の転送で構成されるシステムであり、ブラウザーがオリジンをまたいだリクエストのレスポンスに、フロントエンドの JavaScript コードがアクセスすることをブロックするかどうかを決めるものです。</p>

<p><a href="/ja/docs/Web/Security/Same-origin_policy">同一オリジンセキュリティポリシー</a>は、既定でリソースへのオリジン間のアクセスを禁止しています。しかし、 CORS はウェブサーバーに、リソースへのオリジンをまたいだアクセスを許可すると言うことができるようにします。</p>

<h2 id="Learn_more" name="Learn_more">理解を深める</h2>

<h3 id="General_knowledge" name="General_knowledge">一般知識</h3>

<ul>
 <li>MDN 上の <a href="/ja/docs/Web/HTTP/CORS">オリジン間リソース共有 (CORS)</a></li>
 <li>Wikipedia 上の {{Interwiki("wikipedia", "Cross-origin resource sharing")}}</li>
</ul>

<h3 id="CORS_headers" name="CORS_headers">CORS のヘッダー</h3>

<dl>
 <dt>{{HTTPHeader("Access-Control-Allow-Origin")}}</dt>
 <dd>レスポンスを共有してよいかどうかを示します。</dd>
 <dt>{{HTTPHeader("Access-Control-Allow-Credentials")}}</dt>
 <dd>認証情報フラグが true の場合、リクエストに対するレスポンスを公開してよいかどうかを示します。</dd>
 <dt>{{HTTPHeader("Access-Control-Allow-Headers")}}</dt>
 <dd>プリフライトリクエストへのレスポンスで使用され、実際のリクエストを行う際に使用してよい HTTP ヘッダーを示します。</dd>
 <dt>{{HTTPHeader("Access-Control-Allow-Methods")}}</dt>
 <dd>プリフライトリクエストへのレスポンスで、リソースにアクセスするときに使用してよいメソッドを指定します。</dd>
 <dt>{{HTTPHeader("Access-Control-Expose-Headers")}}</dt>
 <dd>レスポンスの一部としてどのヘッダーを公開してよいかを、ヘッダー名を列挙することで示します。</dd>
 <dt>{{HTTPHeader("Access-Control-Max-Age")}}</dt>
 <dd>プリフライトリクエストの結果をキャッシュできる時間を示します。</dd>
 <dt>{{HTTPHeader("Access-Control-Request-Headers")}}</dt>
 <dd>プリフライトリクエストを発行する際に、実際のリクエストを行う際に使用される HTTP ヘッダーをサーバーに知らせるために使用します。</dd>
 <dt>{{HTTPHeader("Access-Control-Request-Method")}}</dt>
 <dd>プリフライトリクエストを発行する際に、実際のリクエストを行う際に使用される <a href="/ja/docs/Web/HTTP/Methods">HTTP メソッド</a>をサーバーに知らせるために使用します。</dd>
 <dt>{{HTTPHeader("Origin")}}</dt>
 <dd>どのオリジンからアクセスしているかを示します。</dd>
</dl>

<h3 id="Technical_reference" name="Technical_reference">技術リファレンス</h3>

<ul>
 <li><a href="https://fetch.spec.whatwg.org">Fetch specification</a></li>
</ul>

<div>{{QuickLinksWithSubpages("/ja/docs/Glossary")}}</div>
