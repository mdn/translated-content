---
title: Cipher suite (暗号スイート)
slug: Glossary/Cipher_suite
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

暗号スイートは鍵交換アルゴリズム・認証方式・{{Glossary("cipher","サイファー")}}・メッセージ認証符号の組み合わせです。

{{Glossary("TLS")}}のような{{glossary("cryptosystem","暗号システム")}}は、サーバーとクライアントは安全な通信を始める前に使用する暗号スイートを決定し、同意します。典型的な暗号スイートには ECDHE_RSA_WITH_AES_128_GCM_SHA256 または ECDHE-RSA-AES128-GCM-SHA256 があり、それぞれの単語の意味は

- ECDHE (elliptic curve Diffie-Hellman ephemeral)を鍵交換アルゴリズムとして使用
- RSA 暗号を鍵認証方式として使用
- AES-128 をサイファーとして使用し、暗号利用モードは Galois/Counter Mode (GCM) を使用
- SHA-256 をメッセージ認証符号 (HMAC:hash-based message authentication code) として使用

## 詳細情報

- [Mozilla recommended cipher suite choices for TLS](https://wiki.mozilla.org/Security/Server_Side_TLS)
