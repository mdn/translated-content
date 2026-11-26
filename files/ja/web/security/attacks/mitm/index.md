---
title: 中間者攻撃 (MITM)
slug: Web/Security/Attacks/MITM
l10n:
  sourceCommit: 8e6760da4c8c8e3fbbabe9686ba16850c99092ba
---

中間者攻撃 (Manipulator in the Middle; MITM) では、通信しようとしている 2 つの主体の間に攻撃者が介入します。

ウェブでは、MITM 攻撃は一般にユーザーのブラウザーとサーバーの間で発生し、攻撃者は HTTP でやりとりされるすべての通信を見たり、改ざんしたりできる可能性があります。

攻撃者が MITM 攻撃を実行する一般的な方法は、カフェや空港などの公共の場所に無線アクセスポイントを設置し、被害者が接続するのを待つことです。被害者が接続すると、攻撃者はユーザーのブラウザーと接続先のあらゆるサイトとの間でやりとりされるデータを読み取り、改ざんできるようになります。

## MITM に対する防御

MITM に対する主な防御策は、サイトを {{glossary("HTTPS")}} ({{glossary("TLS")}} を使用した HTTP) で配信することです。HTTPS は、攻撃者が通信を読み取ったり、予測可能な方法で改ざんしたりするのを防ぎます。

特に機密性が高いと思われるページだけでなく、すべてのページを HTTPS で配信してください。

[TLS ガイド](/ja/docs/Web/Security/Defenses/Transport_Layer_Security)では、ここで考慮すべき主な問題について説明しています。特に、次の点に注意してください。

- [保護された TLS の設定](/ja/docs/Web/Security/Defenses/Transport_Layer_Security)を使用してください。

- [サーバー認証](/ja/docs/Web/Security/Defenses/Transport_Layer_Security)を実装してください。

- HTML 文書だけでなく、スクリプト、スタイルシート、画像、フォントなどのすべてのサブリソースを [TLS で配信してください](/ja/docs/Web/Security/Defenses/Transport_Layer_Security)。

- HTTP リクエストを HTTPS にリダイレクトする場合は、[HTTP Strict Transport Security (HSTS)](/ja/docs/Web/Security/Defenses/Transport_Layer_Security) を実装してください。

## 関連情報

- [Let's Encrypt](https://letsencrypt.org/)<sup>(英語)</sup>
- [TLS の推奨設定](https://wiki.mozilla.org/Security/Server_Side_TLS#Recommended_configurations)<sup>(英語)</sup>
- [トランスポート層セキュリティ早見表](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html)<sup>(英語)</sup>
- [HTTP Strict Transport Security 早見表](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)<sup>(英語)</sup>
