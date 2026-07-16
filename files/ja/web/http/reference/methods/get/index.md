---
title: GET リクエストメソッド
short-title: GET
slug: Web/HTTP/Reference/Methods/GET
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**`GET`** は HTTP のメソッドで、特定のリソースの表現をリクエストします。
`GET` を使用したリクエストはデータをリクエストするためだけに使用してください（データを本体に含めるべきではありません）。

> [!NOTE]
> `GET` リクエストでメッセージ本体を送信すると、意味づけは未定義になります。
> 一部のサーバーは、[4XX クライアントエラー](/ja/docs/Web/HTTP/Reference/Status#client_error_responses)レスポンスでリクエストを拒否する場合があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全性")}}</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">HTML フォームでの使用</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 構文

```http
GET <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : {{HTTPHeader("Host")}} ヘッダーで指定された情報と組み合わせて、リクエストの対象リソースを特定します。
    これはオリジンサーバーへのリクエストでは絶対パス（例: `/path/to/file.html`）であり、プロキシーへのリクエストでは絶対 URL（例: `http://www.example.com/path/to/file.html`）です。
- `<query>` {{optional_inline}}
  - : 疑問符 `?` で始まるオプションのクエリ成分。
    多くの場合、`key=value` という形で識別情報を伝達するために使用されます。

## 例

### リソースの取得に成功

次の`GET`リクエストは、`example.com/contact`にあるリソースを要求します。

```http
GET /contact HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

サーバーは成功を示す {{HTTPStatus("200", "200 OK")}} コードと共に、リソースを返します。

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Content-Length: 1234

<!doctype html>
<!-- HTML content follows -->
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Range")}} ヘッダー
- {{HTTPMethod("POST")}} メソッド
