---
title: CSRF
slug: Glossary/CSRF
tags:
  - 用語集
  - セキュリティ
translation_of: Glossary/CSRF
---
**CSRF** (クロスサイトリクエストフォージェリー、Cross-Site Request Forgery) は、信頼されたユーザーになりすまし、ウェブサイトに対して不正なコマンドを送信する攻撃です。

例えば、どこかへ移動すると称したリンクの {{glossary("URL")}} 内に、悪意のある引数を含めたりすることで実行されます。

```html
<img src="https://www.example.com/index.php?action=delete&id=123">
```

`https://www.example.com` で何らかの権限を持ったユーザーでは、 `<img>` 要素が `https://www.example.com` の中になくても、気づかないうちに `https://www.example.com` への操作を実行してしまいます。

CSRF を防止するには、 {{glossary("REST", "RESTful API")}} を使用する、セキュリティトークンを追加するなど、様々な方法があります。

## 関連情報

- {{Interwiki("wikipedia", "クロスサイトリクエストフォージェリ")}} (Wikipedia)
- [Prevention measures](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
