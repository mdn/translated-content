---
title: Access-Control-Request-Method
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Method
original_slug: Web/HTTP/Headers/Access-Control-Request-Method
---

**`Access-Control-Request-Method`** リクエストヘッダーは、{{glossary("preflight request", "プリフライトリクエスト")}}を発行する際にブラウザーが使用し、実際のリクエストが行われた際にどの HTTP メソッドが使用されるかをサーバーに知らせるために使用されます。プリフライトリクエストは常に OPTIONS であり、実際のリクエストとは同じメソッドを使用しないため、このヘッダーが必要です。

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
        {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```
Access-Control-Request-Method: <method>
```

## ディレクティブ

- \<method>
  - : [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)の 1 つ。例えば {{HTTPMethod("GET")}}, {{HTTPMethod("POST")}}, {{HTTPMethod("DELETE")}} など。

## 例

```
Access-Control-Request-Method: POST
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Access-Control-Request-Headers")}}
