---
title: Cross-site request forgery (CSRF, クロスサイトリクエストフォージェリー)
slug: Glossary/CSRF
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**クロスサイトリクエストフォージェリー** (CSRF) 攻撃は、攻撃者がブラウザーを騙して、悪意のあるサイトから対象とするサイトへ HTTP リクエストを送信させるものです。このリクエストにはユーザーの資格情報が記載されており、サーバーはユーザーが意図したものと誤解して、何らかの有害な措置を発生させます。

以下の条件を満たすウェブサイトでは、CSRF 攻撃が可能です。

- HTTP リクエストを使用して、サーバー上の状態を変更する
- リクエストが認証済みユーザーから送信されたものであることを検証するために、クッキーのみを使用する
- リクエスト内の引数のみを使用しており、攻撃者がそれらを予測できる

CSRF 攻撃に対する防御策には、[CSRF トークン](/ja/docs/Web/Security/Attacks/CSRF#csrf_トークン)、[フェッチメタデータ](/ja/docs/Web/Security/Attacks/CSRF#フェッチメタデータ)を使用して特定のサイト間リクエストをブロックする方法、および機密性の高いリクエストの認証に使用されるクッキーに [`SameSite` 属性を設定](/ja/docs/Web/Security/Attacks/CSRF#多層防御_samesite_クッキー)するなど、いくつかあります。

## 関連情報

- [クロスサイトリクエストフォージェリー](/ja/docs/Web/Security/Attacks/CSRF)
- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) - [owasp.org](https://owasp.org/)
