---
title: Transport Layer Security (TLS)
slug: Glossary/TLS
---

**TLS (Transport Layer Security)** は、以前は {{Glossary("SSL", "SSL (Secure Sockets Layer)")}} として知られていたもので、ネットワーク上で安全に通信するためにアプリケーションが使用する{{Glossary("protocol", "プロトコル")}}であり、電子メール、ウェブ閲覧、メッセージング、その他のプロトコルの改ざんや盗聴を防止します。 SSL と TLS はどちらもクライアント・サーバー型のプロトコルであり、暗号化したプロトコルを使用してプライバシーを保証することで、ネットワークを通じたセキュリティを提供します。サーバーとクライアントが TLS を使用して通信するすれば、どのメッセージも第三者によって盗聴や改ざんされていないことが保証されます。

最新のブラウザーはすべて TLS プロトコルに対応しており、有効な{{Glossary("Digital certificate", "デジタル証明書")}}の提供をサーバーに要求してその身元を確認し、安全な接続を確立します。クライアントとサーバーの両者がそれぞれのデジタル証明書を提供すれば、相互に認証することができます。

> **メモ:** TLS 1.0 と 1.1 への対応は、2020 年の初頭にすべての主要なブラウザーから削除される予定です。今後はウェブサーバーが TLS 1.2 や 1.3 に対応していることを確認する必要があります。 Firefox はバージョン 74 時点で、古いバージョンの TLS を使用しているサーバーに接続する場合に [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) エラーを返すようになる予定です ([Firefox バグ 1606734](https://bugzil.la/1606734))。

1. 仕様書

   1. [RFC 5246](https://tools.ietf.org/html/rfc5246) (The Transport Layer Security Protocol, Version 1.2)

2. Wikipedia の記事

   1. [Transport Layer Security](https://ja.wikipedia.org/wiki/Transport_Layer_Security)

3. 関連情報

   1. [Transport Layer Security](/ja/docs/Web/Security/Transport_Layer_Security)
   2. [OWASP: Transport Layer Protection Cheat Sheet](https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet)

4. [用語集](/ja/docs/Glossary)

   1. {{Glossary("HTTPS")}}
   2. {{Glossary("SSL")}}
