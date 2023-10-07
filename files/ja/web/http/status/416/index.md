---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) **`416 Range Not Satisfiable`** エラーレスポンスコードは、サーバーがリクエストされた範囲を提供できないことを示します。最も可能性の高い理由は、文書にそのような範囲が含まれていないか、または {{HTTPHeader("Range")}} ヘッダー値が構文的には正しいものの、意味をなさないということです。

`416` レスポンスメッセージには {{HTTPHeader("Content-Range")}} が含まれ、未解決の範囲 (`'*'`) とそれに続く `'/'` とリソースの現在、例えば `Content-Range: bytes */12777` を示します。

このエラーに直面すると、ブラウザーは通常操作を中断する (たとえば、ダウンロードは再開不可とみなす) か、文書全体を再度リクエストするかします。

## ステータス

```
416 Range Not Satisfiable
```

## 仕様書

| 仕様書                                                 | 題名                                                   |
| ------------------------------------------------------ | ------------------------------------------------------ |
| {{RFC("7233", "416 Request Not Satisfiable" , "4.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## ブラウザーの互換性

以下に表示される情報は、MDN の Github (<https://github.com/mdn/browser-compat-data>) からのものです。

{{Compat("http.status.416")}}

## 関連情報

- {{HTTPStatus(206)}} `Partial Content`
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
