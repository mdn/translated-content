---
title: Authenticator (認証器)
slug: Glossary/Authenticator
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**authenticator** (認証器) は、ユーザーの登録と認証に必要な暗号化の操作をして、これらの操作で使用される暗号化キーを安全に保存できるエンティティです。

認証器は、ハードウェアまたはソフトウェアで実装される可能性があります。Apple デバイスの [Touch ID](https://en.wikipedia.org/wiki/Touch_ID) システムや Windows の [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security) システムのように、デバイスに統合されている場合もあれば、[YubiKey](https://en.wikipedia.org/wiki/YubiKey) などの取り外し可能なモジュールである場合もあります。

[ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API) は、[資格情報管理 API](/ja/docs/Web/API/Credential_Management_API) の一部として、ウェブサイトで認証器を利用できるようにします。これにより、ウェブサイトは認証器を使用して {{glossary("public-key cryptography", "公開鍵暗号")}} に基づく {{glossary("credential", "資格情報")}} を生成できるようになり、これらの資格情報を使用してユーザーをウェブサイトにログインさせることができます。

## 関連情報

- 関連用語集:
  - {{glossary("Authentication", "認証")}}
  - {{glossary("Credential", "資格情報")}}
