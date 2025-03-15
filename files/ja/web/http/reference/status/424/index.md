---
title: 424 Failed Dependency
slug: Web/HTTP/Reference/Status/424
original_slug: Web/HTTP/Status/424
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

HTTP の **`424 Failed Dependency`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Status#クライアントエラーレスポンス)ステータスコードで、要求されたアクションが他のアクションに依存しており、そのアクションが失敗したため、対象のリソースに対してメソッドを実行できなかったことを示します。

普通のウェブサーバーがこのステータスコードを返すことは通常ありません。しかし、{{Glossary("WebDAV")}} などの他のプロトコルが返すことはあります。たとえば、{{Glossary("WebDAV")}} では、`PROPPATCH` 要求が発行され、あるコマンドが失敗した場合は、他のコマンドも自動的に `424 Failed Dependency` で失敗します。

## ステータス

```http
424 Failed Dependency
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
- {{HTTPStatus("403")}} (Forbidden)
- {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
