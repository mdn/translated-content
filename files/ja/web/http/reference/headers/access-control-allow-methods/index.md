---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Methods
original_slug: Web/HTTP/Headers/Access-Control-Allow-Methods
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

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
        {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
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

- `<method>`
  - : 許可されたリクエストメソッドのコンマ区切りリスト。`GET`, `HEAD`, `POST` は [CORS-safelisted method](https://fetch.spec.whatwg.org/#cors-safelisted-method)にて定義されており、このヘッダー内で指定されているか否かに関わらず常に許可されます。
- `*` (ワイルドカード)
  - : すべての HTTP メソッド。
    資格情報のないリクエスト ([HTTP Cookie](/ja/docs/Web/HTTP/Guides/Cookies) や HTTP 認証情報のないリクエスト) においてはこの意味を持つ特殊なワイルドカードとなります。資格情報付きのリクエストでは、特別な意味のない "`*`" というメソッド名として扱われます。

## 例

```
Access-Control-Allow-Methods: POST, DELETE
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
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
