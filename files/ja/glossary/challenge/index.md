---
title: Challenge-response authentication (チャレンジレスポンス認証)
slug: Glossary/challenge
tags:
  - Authentication
  - Glossary
  - Security
translation_of: Glossary/challenge
---
<p>セキュリティプロトコルでは、チャレンジは、毎回異なるレスポンス（応答）を生成するために、サーバーによってクライアントに送信されるデータです。 チャレンジレスポンスプロトコルは、攻撃者が元のメッセージを聞いて、後でそれ再送信して元のメッセージと同じ資格情報を取得する{{Interwiki("wikipedia", "反射攻撃")}}に対抗する1つの方法です。</p>

<p><a href="/ja/docs/Web/HTTP/Authentication">HTTP 認証プロトコル</a>はチャレンジレスポンスがベースですが、"Basic" プロトコルは実際のチャレンジを使用していません（レルムは常に同じです）。</p>

<h2 id="Learn_more" name="Learn_more">より詳しく知る</h2>

<ul>
 <li>Wikipedia 上の <a href="https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication">Challenge-response authentication</a> （英語）</li>
</ul>
