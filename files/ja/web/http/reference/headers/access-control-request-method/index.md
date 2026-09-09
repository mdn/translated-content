---
title: Access-Control-Request-Method ヘッダー
short-title: Access-Control-Request-Method
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Method
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Access-Control-Request-Method`** {{Glossary("request header", "リクエストヘッダー")}}は、{{glossary("preflight request", "プリフライトリクエスト")}}を発行する際にブラウザーが使用するもので、実際のリクエストが行われた際にどの [HTTP メソッド](/ja/docs/Web/HTTP/Reference/Methods)が使用されるかをサーバーに知らせるために使用されます。
プリフライトリクエストは常に {{HTTPMethod("OPTIONS")}} であり、実際のリクエストとは同じメソッドを使用しないため、このヘッダーが必要です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Access-Control-Request-Method: <method>
```

## ディレクティブ

- `<method>`
  - : [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)。例えば {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, {{HTTPMethod("DELETE")}} など。

## 例

```http
Access-Control-Request-Method: POST
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Access-Control-Request-Headers")}}
