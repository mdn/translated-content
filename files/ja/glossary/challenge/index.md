---
title: Challenge-response authentication (チャレンジレスポンス認証)
slug: Glossary/Challenge
---

{{GlossarySidebar}}

セキュリティプロトコルでは、チャレンジは、毎回異なるレスポンス（応答）を生成するために、サーバーによってクライアントに送信されるデータです。 チャレンジレスポンスプロトコルは、攻撃者が元のメッセージを聞いて、後でそれ再送信して元のメッセージと同じ資格情報を取得する[反射攻撃](https://ja.wikipedia.org/wiki/反射攻撃)に対抗する 1 つの方法です。

[HTTP 認証プロトコル](/ja/docs/Web/HTTP/Authentication)はチャレンジレスポンスがベースですが、"Basic" プロトコルは実際のチャレンジを使用していません（レルムは常に同じです）。

## より詳しく知る

- Wikipedia 上の [Challenge-response authentication](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication) （英語）
