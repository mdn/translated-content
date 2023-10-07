---
title: Range
slug: Web/HTTP/Headers/Range
---

{{HTTPSidebar}}

**`Range`** は HTTP のリクエストヘッダーで、サーバーが返すべき文書の部分を示します。1 つの `Range` ヘッダーで複数の部分を一度にリクエストすることができ、サーバーはこれらの範囲をマルチパートの文書で返すことができます。サーバーが範囲を送り返す場合、サーバーはレスポンスに {{HTTPStatus("206")}} `Partial Content` を使用します。範囲が無効な場合、サーバは {{HTTPStatus("416")}} `Range Not Satisfiable` エラーを返します。サーバーは `Range` ヘッダ－を無視して、文書全体を {{HTTPStatus("200")}} のステータスコードで返すこともできます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Range: <unit>=<range-start>-
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=-<suffix-length>
```

## ディレクティブ

- \<unit>
  - : 範囲を指定する単位です。これはふつう `bytes` です。

<!---->

- \<range-start>
  - : 整数値で、リクエストする範囲の先頭を指定した単位で示します。
- \<range-end>
  - : 整数値で、リクエストする範囲の末尾を指定した単位で示します。この値は省略可能で、省略時は文書の末尾が範囲の末尾として扱われます。
- \<suffix-length>
  - : 整数値で、返す長さを位でファイルの末尾からの個数を示します。

## 例

ファイルから 3 つの範囲をリクエストします。

```
Range: bytes=200-1000, 2000-6576, 19000-
```

ファイルの先頭の 500 バイトと末尾の 500 バイトをリクエストします。範囲が重複した場合はサーバーがリクエストを拒否することがあります。

```
Range: bytes=0-499, -500
```

## 仕様書

| 仕様書                          | 状態                                                   |
| ------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "Range", "3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## ブラウザーの互換性

{{Compat("http.headers.Range")}}

## 関連情報

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
