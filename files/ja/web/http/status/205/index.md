---
title: 205 Reset Content
slug: Web/HTTP/Status/205
---

{{HTTPSidebar}}

HTTP **`205 Reset Content`** のレスポンスステータスはクライアントにドキュメントビューをリセットするように指示します。たとえば、フォームの内容をクリアしたり、キャンバスの状態をリセットしたり、UI をリフレッシュすることができます。

## ステータス

```
205 Reset Content
```

## 仕様

| 仕様書                                         | タイトル                                                      |
| ---------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "205 Reset Content" , "6.3.6")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 互換性メモ

- このレスポンスが永続的な接続上で誤って本文を含むと、ブラウザーの動作が異なります。詳細については [204 No Content](/ja/docs/Web/HTTP/Status/204) を参照してください。

## 関連情報

- {{HTTPStatus(204)}} No Content
