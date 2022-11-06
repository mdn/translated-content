---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
---

{{HTTPSidebar}}

**`Access-Control-Request-Headers`** リクエストヘッダーは{{glossary("preflight request", "プリフライトリクエスト")}}を発行する際にブラウザーが使用し、実際のリクエストが行う際にどの [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)を使用するかをサーバーに知らせます。

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
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```
Access-Control-Request-Headers: <header-name>, <header-name>, ...
```

## ディレクティブ

- \<header-name>
  - : リクエストに含まれる [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)のカンマ区切りのリスト。

## 例

```
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

## 仕様書

| 仕様書                                                                                                                       | 状態                     | 備考     |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------- |
| {{SpecName('Fetch','#http-access-control-request-headers', 'Access-Control-Request-Headers')}} | {{Spec2("Fetch")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("http.headers.Access-Control-Request-Headers")}}

## 関連情報

- {{HTTPHeader("Access-Control-Request-Method")}}
