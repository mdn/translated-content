---
title: TOFU
slug: Glossary/TOFU
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Trust On First Use** **(TOFU**) とは、クライアントが未知のサーバーとの信頼関係（trust relationship）を築く必要がある場合における、セキュリティモデルです。それを行うために、クライアントは識別子（例：公開鍵）がローカルに保存されているか探します。もし識別子が見つかれば、クライアントは接続を確立できます。もし識別子が見つからなければ、クライアントが識別子を信頼すべきか、ユーザーに決定を促します。

TOFU は SSH プロトコルの {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) で使用され、ブラウザーはリダイレクトルールに従います。

## 関連情報

- Wikipedia: [TOFU](https://en.wikipedia.org/wiki/Trust_on_first_use)
