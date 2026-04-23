---
title: 421 Misdirected Request
slug: Web/HTTP/Reference/Status/421
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

HTTP の **`421 Misdirected Request`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)のステータスコードで、リクエストがレスポンスを生成できないサーバーに送られたことを示します。
これは、リクエスト URI に含まれない[スキーム](/ja/docs/Web/URI/Reference/Schemes)と[オーソリティ](/ja/docs/Web/URI/Reference/Authority)の組み合わせに対するレスポンスを生成するように構成されていないサーバーから送信される可能性があります。

クライアントは、別な接続でリクエストを再試行することができます。

## ステータス

```http
421 Misdirected Request
```

## 例

### Apache SNI エラー

次のようなリクエストがあったとします。

```http
GET / HTTP/1.1
Host: abc.example.com
```

ワイルドカード資格情報 (`*.example.com`) のようなケースで、接続が複数のドメイン (`abc.example.com`、`def.example.com`) に再利用される場合、サーバーは 421 を返すことがあります。

```http
HTTP/1.1 421 Misdirected Request
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [Multiple hosts and misdirected requests](https://httpd.apache.org/docs/2.4/mod/mod_http2.html#misdirected) Apache Server documentation
- [TLS 1.3](/ja/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)
- [Server Name Indication (SNI)](https://ja.wikipedia.org/wiki/Server_Name_Indication)
- [Transport Layer Security (TLS) 構成](/ja/docs/Web/Security/Practical_implementation_guides/TLS)
