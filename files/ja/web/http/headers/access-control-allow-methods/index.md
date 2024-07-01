---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
---

{{HTTPSidebar}}

**`Access-Control-Allow-Methods`** レスポンスヘッダーは、{{glossary("preflight request", "プリフライトリクエスト")}}のレスポンスの中で、リソースにアクセスするときに利用できる 1 つまたは複数のメソッドを指定します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
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
Access-Control-Allow-Methods: <method>, <method>, ...
Access-Control-Allow-Methods: *
```

## ディレクティブ

- \<method>
  - : 許可された [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods)のコンマ区切りリスト。
- `*` (ワイルドカード)
  - : "`*`" の値は、資格情報のないリクエスト ([HTTP Cookie](/ja/docs/Web/HTTP/Cookies) や HTTP 認証情報のないリクエスト) の特殊なワイルドカードです。資格情報付きのリクエストでは、特別な意味のない "`*`" というメソッド名として扱われます。

## 例

```
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Methods: *
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
