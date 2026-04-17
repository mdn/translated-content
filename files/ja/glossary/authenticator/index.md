---
title: Authenticator (認証器)
slug: Glossary/Authenticator
l10n:
  sourceCommit: 51872f3d8311c3c071cbfea613da40036911e4d7
---

**authenticator** (認証器) は、ユーザーの登録と認証に必要な暗号化の操作をして、これらの操作で使用される暗号化キーを安全に保存できるエンティティです。

authenticator は、ハードウェアまたはソフトウェアで実装される可能性があります。Apple デバイスの [Touch ID](https://en.wikipedia.org/wiki/Touch_ID) システムや Windows の [Windows Hello](https://en.wikipedia.org/wiki/Windows_10#System_security) システムのように、デバイスに統合されている場合もあれば、[YubiKey](https://en.wikipedia.org/wiki/YubiKey) などの取り外し可能なモジュールである場合もあります。

[Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) は、[Credential Management API](/ja/docs/Web/API/Credential_Management_API) の一部として、ウェブサイトで authenticator を利用できるようにします。これにより、ウェブサイトは authenticator を使用して {{glossary("public-key cryptography")}} に基づく {{glossary("credential", "credentials")}} を生成できるようになり、これらの資格情報を使用してユーザーをウェブサイトにログインさせることができます。

## 関連情報

- 関連用語集:
  - {{glossary("Authentication")}}
  - {{glossary("Credential")}}
