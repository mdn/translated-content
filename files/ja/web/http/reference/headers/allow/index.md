---
title: Allow ヘッダー
short-title: Allow
slug: Web/HTTP/Reference/Headers/Allow
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

**`Allow`** {{Glossary("Response header", "レスポンスヘッダー")}}は、あるリソースが対応している[リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)の一覧を示します。
このヘッダーは、サーバーが {{HTTPStatus("405", "405 Method Not Allowed")}} ステータスコードで返答した場合、使用することができるリクエストメソッドを示すために送信する必要があります。
`Allow` の値が空である場合、そのリソースが許可しているリクエストメソッドがないことを示します。これは指定されたリソースにおいて一時的に発生する可能性があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Allow: <http-methods>
```

## ディレクティブ

- `<http-methods>`
  - : カンマ区切りのリストで、許可されているリクエストメソッドの一覧です。

## 例

```http
Allow: GET, POST, HEAD
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPStatus("405", "405 Method Not Allowed")}} ステータスコード
- {{HTTPHeader("Server")}}
- {{HTTPMethod("OPTIONS")}}
