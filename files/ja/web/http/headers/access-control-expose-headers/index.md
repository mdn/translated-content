---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
---

{{HTTPSidebar}}

**`Access-Control-Expose-Headers`** レスポンスヘッダーは、レスポンスの一部としてどのヘッダーを公開するかを、その名前を列挙して示します。

既定では、公開される {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}は 7 つだけです。

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

クライアントが他のヘッダーにアクセスできるようにするには、 `Access-Control-Expose-Headers` ヘッダーを使用してヘッダーを列挙する必要があります。

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
Access-Control-Expose-Headers: <header-name>, <header-name>, ...
Access-Control-Expose-Headers: *
```

## ディレクティブ

- \<header-name>
  - : ゼロ個以上の[ヘッダー名](/ja/docs/Web/HTTP/Headers)の一覧で、 {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}に含まれないものであり、リソースが使用する可能性があり、公開される可能性があるものです。
- `*` (ワイルドカード)
  - : "`*`" の値は、資格情報のないリクエスト ([HTTP Cookie](/ja/docs/Web/HTTP/Cookies) や HTTP の資格情報のないリクエスト) の特殊なワイルドカード値です。資格情報付きのリクエストでは、特別な意味のない "`*`" というヘッダー名として扱われます。
    なお、 {{HTTPHeader("Authorization")}} ヘッダーはワイルドカードで表すことができず、常に明示的に列挙する必要があります。

## 例

CORS セーフリストにないレスポンスヘッダーを公開するには、次のように指定します。

```
Access-Control-Expose-Headers: Content-Length
```

`X-Kuma-Revision` のようなカスタムヘッダーをさらに公開するには、複数のヘッダーをカンマで区切って指定することができます。

```
Access-Control-Expose-Headers: Content-Length, X-Kuma-Revision
```

資格情報のないリクエストでは、ワイルドカード値を使うこともできます。

```
Access-Control-Expose-Headers: *
```

但し、 {{HTTPHeader("Authorization")}} ヘッダーはワイルドカードの対象にならないので、明示的に列挙する必要があります。

```
Access-Control-Expose-Headers: *, Authorization
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
