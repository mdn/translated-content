---
title: HMAC
slug: Glossary/HMAC
---

{{GlossarySidebar}}

HMAC は、{{Glossary("cryptography", "暗号的")}}にメッセージを認証するために使用されるプロトコルです。 どのような種類の{{Glossary("Cryptographic hash function", "暗号化関数")}}も使用でき、その強さは基礎となる関数（たとえば SHA1 または MD5）と選択された秘密鍵に依存します。このような組み合わせでは、HMAC-SHA1 などの複合名で HMAC 検証{{Glossary("Algorithm", "アルゴリズム")}}が認識されます。

HMAC は、完全性と認証の両方を保証するために使用されます。

## より詳しく知る

### 一般知識

- Wikipedia 上の [HMAC](https://ja.wikipedia.org/wiki/HMAC)

### 技術文書

- IETF の [RFC 2104](https://www.ietf.org/rfc/rfc2104.txt) （英語）
