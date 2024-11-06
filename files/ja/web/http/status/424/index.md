---
title: 424 Failed Dependency
slug: Web/HTTP/Status/424
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`424 Failed Dependency`** クライエントエラーレスポンスコードは、要求されたアクションが他のアクションに依存しており、そのアクションが失敗したため、対象のリソースに対してメソッドを実行できなかったことを示します。

普通のウェブサーバーがこのステータスコードを返すことは通常ありません。しかし、{{Glossary("WebDAV")}} などの他のプロトコルが返すことはあります。たとえば、{{Glossary("WebDAV")}} では、`PROPPATCH` 要求が発行され、あるコマンドが失敗した場合は、他のコマンドも自動的に `424 Failed Dependency` で失敗します。

## ステータス

```plain
424 Failed Dependency
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPStatus("403")}} (Forbidden)
