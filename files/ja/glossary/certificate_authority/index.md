---
title: Certificate authority (認証局)
slug: Glossary/Certificate_authority
tags:
  - 暗号
  - 用語集
  - セキュリティ
translation_of: Glossary/Certificate_authority
---
認証局 (CA) は、{{Glossary("Digital certificate", "デジタル証明書")}}とそれに関連する{{Glossary("Key", "公開鍵")}}に{{Glossary("Signature/Security", "署名")}}し、含まれる情報と鍵が正しいことを保証する組織です。

ウェブサイトのデジタル証明書については、この情報には少なくともデジタル証明書を要求した組織 (例: Mozilla Corporation)、そのサイト (例: mozilla.org)、および認証局が含まれます。

認証局は、インターネットの[公開鍵基盤](https://ja.wikipedia.org/wiki/公開鍵基盤)の一部で、ブラウザーがウェブサイトの身元を確認し、 SSL （および HTTPS）で安全に接続できるようにするものです。

> **Note:** ウェブブラウザーには、あらかじめ「ルート証明書」のリストが搭載されています。ブラウザーはこれらを使って、ウェブサイトの証明書がルート証明書に「チェインバック」する（つまり、ルート証明書の所有者や中間認証局に信頼されている）認証局によって署名されていることを確実にチェックすることができる。最終的に、このプロセスは、すべての認証局が証明書に署名する前に適切な身元確認を行うことに依存しています。

## 関連情報

- [認証局](https://ja.wikipedia.org/wiki/認証局) (Wikipedia)
- [公開鍵基盤](https://ja.wikipedia.org/wiki/公開鍵基盤) (Wikipedia)
- [Mozilla Included CA Certificate List](https://wiki.mozilla.org/CA/Included_Certificates)
