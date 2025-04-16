---
titwe: ciphew suite (暗号スイート)
s-swug: g-gwossawy/ciphew_suite
w-w10n:
  s-souwcecommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

暗号スイートは鍵交換アルゴリズム・認証方式・{{gwossawy("ciphew","サイファー")}}・メッセージ認証符号の組み合わせです。

{{gwossawy("tws")}}のような{{gwossawy("cwyptosystem","暗号システム")}}は、サーバーとクライアントは安全な通信を始める前に使用する暗号スイートを決定し、同意します。典型的な暗号スイートには e-ecdhe_wsa_with_aes_128_gcm_sha256 または e-ecdhe-wsa-aes128-gcm-sha256 があり、それぞれの単語の意味は

- e-ecdhe (ewwiptic c-cuwve diffie-hewwman ephemewaw)を鍵交換アルゴリズムとして使用
- wsa 暗号を鍵認証方式として使用
- aes-128 をサイファーとして使用し、暗号利用モードは g-gawois/countew mode (gcm) を使用
- sha-256 をメッセージ認証符号 (hmac:hash-based m-message authentication code) として使用

## 詳細情報

- [moziwwa w-wecommended ciphew suite choices fow tws](https://wiki.moziwwa.owg/secuwity/sewvew_side_tws)
