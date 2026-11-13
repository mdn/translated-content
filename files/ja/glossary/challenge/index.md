---
title: Challenge-response authentication (チャレンジレスポンス認証)
slug: Glossary/Challenge
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

セキュリティプロトコルでは、**チャレンジ**は、毎回異なるレスポンス（応答）を生成するために、サーバーによってクライアントに送信されるデータです。 チャレンジレスポンスプロトコルは、攻撃者が元のメッセージを聞いて、後でそれ再送信して元のメッセージと同じ資格情報を取得する[反射攻撃](https://ja.wikipedia.org/wiki/反射攻撃)に対抗する方法の一つです。

[HTTP 認証プロトコル](/ja/docs/Web/HTTP/Guides/Authentication)はチャレンジレスポンスがベースですが、"Basic" プロトコルは実際のチャレンジを使用していません（レルムは常に同じです）。

## 関連情報

- [チャレンジ・レスポンス認証](https://ja.wikipedia.org/wiki/チャレンジ・レスポンス認証)
