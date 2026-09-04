---
title: Access-Control-Allow-Methods ヘッダー
short-title: Access-Control-Allow-Methods
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Methods
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

**`Access-Control-Allow-Methods`** レスポンスヘッダーは、{{glossary("preflight request", "プリフライトリクエスト")}}のレスポンスの中で、リソースにアクセスするときに利用できる 1 つまたは複数の [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)を指定します。

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
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## ディレクティブ

- `<method>`
  - : 許可されたリクエストメソッドのコンマ区切りリスト。`GET`, `HEAD`, `POST` は [CORS-safelisted method](https://fetch.spec.whatwg.org/#cors-safelisted-method)にて定義されており、このヘッダー内で指定されているか否かに関わらず常に許可されます。
- `*` (ワイルドカード)
  - : すべての HTTP メソッド。
    資格情報のないリクエスト ([HTTP Cookie](/ja/docs/Web/HTTP/Guides/Cookies) や HTTP 認証情報のないリクエスト) においてはこの意味を持つ特殊なワイルドカードとなります。
    資格情報付きのリクエストでは、特別な意味のない `*` というメソッド名として扱われます。

## 例

```http
Access-Control-Allow-Methods: PUT, DELETE
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
