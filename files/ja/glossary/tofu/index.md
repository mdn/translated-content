---
title: TOFU
slug: Glossary/TOFU
---

**Trust On First Use** **(TOFU**) とは、クライアントが未知のサーバーとの信頼関係（trust relationship）を築く必要がある場合における、セキュリティ・モデルです。それを行うために、クライアントは識別子（例：公開鍵）がローカルに保存されているか探します。もし識別子が見つかれば、クライアントは接続を確立できます。もし識別子が見つからなければ、クライアントが識別子を信頼すべきか、ユーザーに決定を促します。

TOFU は SSH プロトコルの中で使われており、サーバーによって返される最初の公開鍵をブラウザが受け入れる [HTTP Public Key Pinning](/ja/docs/Web/HTTP/Public_Key_Pinning) ({{Glossary("HPKP")}}) と、ブラウザがリダイレクトルールに従う場面での {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) が該当します。

## 関連項目

- [HTTP Public Key Pinning](/ja/docs/Web/HTTP/Public_Key_Pinning) ({{Glossary("HPKP")}})
- {{HTTPHeader("Public-Key-Pins")}}
- Wikipedia: [TOFU](https://en.wikipedia.org/wiki/Trust_on_first_use)
