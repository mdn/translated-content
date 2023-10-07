---
title: 103 Early Hints
slug: Web/HTTP/Status/103
---

{{HTTPSidebar}}

HTTP **`103 Early Hints`** インフォメーションレスポンスステータスコードは、主に {{HTTPHeader("Link")}} ヘッダーと共に使用され、サーバーがまだレスポンスを準備している間にユーザーエージェントがリソースのプリロードを開始できるようにすることを目的としています。

## 構文

```
103 Early Hints
```

## 仕様

| 仕様書                           | ステータス | コメント |
| -------------------------------- | ---------- | -------- |
| {{RFC(8297, "103 Early Hints")}} | IETF RFC   | 初期定義 |

## ブラウザーの実装状況

{{Compat("http.status.103")}}

## 関連情報

- {{HTTPHeader("Link")}}
