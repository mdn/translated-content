---
title: Firefox 2 のセキュリティ
slug: Mozilla/Firefox/Releases/2/Security_changes
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

この記事では、Firefox 2 のセキュリティに影響を与える変更点について説明しています。

## 弱い暗号化がデフォルトで無効に

[Firefox 2](/ja/docs/Mozilla/Firefox/Releases/2) では、デフォルトで SSLv2 および脆弱な「エクスポート」暗号スイート（鍵長が 64 ビット未満のもの）が無効化され、代わりに SSLv3 が使用されます。これによりセキュリティが強化されます。

推奨される暗号化方式は `TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA` および `TLS_RSA_WITH_3DES_EDE_CBC_SHA` です。一部のサーバーでは、これらを `SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA` および `SSL_RSA_WITH_3DES_EDE_CBC_SHA` と表記します。

SSLv2 の対応を有効にする必要がある場合は、適切な `security.ssl2.*` ユーザー設定を `true` に設定することで有効にできます。

## 新機能

- Firefox 2 は TLS における[楕円曲線暗号](https://ja.wikipedia.org/wiki/楕円曲線暗号)に対応しています。現在のところ、対応曲線は 256 ビット、384 ビット、および 521 ビット（そう、521 ビットです）に限定されています。
- Firefox 2 は、単一の基盤となるネットワークアドレス上で複数の仮想サーバーをホストするサーバーへの安全な接続を容易にするため、TLS サーバー名表示拡張機能に対応します。これは [RFC 3546](https://datatracker.ietf.org/doc/html/rfc3546) に準拠しています。
- Firefox 2 がウェブサーバーの証明書を検証するために [OCSP](https://ja.wikipedia.org/wiki/Ocsp) リクエストを送信する際、通常の HTTP トラフィック用に設定されたプロキシーを使用するようになりました。

## 利用可能な暗号方式の特定

いつも通り、対応している暗号化方式（および有効化または無効化されているもの）は、about:config にアクセスし "ssl" または "tls" で検索することで確認できます。

## jar: プロトコルのセキュリティ向上

`jar:` プロトコル使用時の潜在的なセキュリティ問題を修正するため、JAR ファイルは MIME タイプ `application/java-archive` で提供する必要があります。詳細は [Security and the jar protocol](https://web.archive.org/web/20180706040540/https://developer.mozilla.org/ja/docs/Mozilla/Security/Security_and_the_jar_protocol) を参照してください。
