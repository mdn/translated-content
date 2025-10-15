---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Reference/Status/416
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`416 Range Not Satisfiable`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)のステータスコードで、サーバーがリクエストされた範囲を提供できないことを示します。
最も可能性の高い理由は、文書にそのような[範囲](/ja/docs/Web/HTTP/Guides/Range_requests)が含まれていないか、または {{HTTPHeader("Range")}} ヘッダー値が構文的には正しいものの、意味をなさないということです。

`416` レスポンスメッセージには {{HTTPHeader("Content-Range")}} が含まれ、未解決の範囲 (`'*'`) とそれに続く `'/'` とリソースの現在の長さ、例えば `Content-Range: bytes */12777` を示します。

このエラーに直面すると、ブラウザーは通常操作を中断する (たとえば、ダウンロードは再開不可とみなす) か、文書全体を再度リクエストするかします。

## ステータス

```http
416 Range Not Satisfiable
```

## 例

### 誤った形式の範囲リクエスト

次のリクエストは、テキストファイルから 1000 ～ 1999 バイトの範囲を要求します。
最初の位置の単位 (1000) は、サーバー上の実際のリソース（800 バイト）よりも大きな値です。

```http
GET /files/prose.txt HTTP/1.1
Host: example.com
Range: bytes=1000-1999
```

サーバーは範囲リクエストに対応しており、選択された表現の現在の長さを {{HTTPHeader("Content-Range")}} ヘッダーで返信します。

```http
HTTP/1.1 416 Range Not Satisfiable
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Range: bytes */800
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("206", "206 Partial Content")}}
- [HTTP 範囲リクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
