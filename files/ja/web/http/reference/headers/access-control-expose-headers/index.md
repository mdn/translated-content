---
title: Access-Control-Expose-Headers ヘッダー
short-title: Access-Control-Expose-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Expose-Headers
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Access-Control-Expose-Headers`** {{Glossary("response header", "レスポンスヘッダー")}}によりサーバーは、オリジンを越えるリクエストへの応答として、ブラウザー上で実行されているスクリプトに対してどのレスポンスヘッダーを公開すべきかを示すことができます。

デフォルトでは {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}のみが公開されます。クライアントが他のヘッダーにアクセスできるようにするには、 `Access-Control-Expose-Headers` ヘッダーを使用してヘッダーを列挙する必要があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Access-Control-Expose-Headers: [<header-name>[, <header-name>]*]
Access-Control-Expose-Headers: *
```

## ディレクティブ

- `<header-name>`
  - : レスポンスからクライアントがアクセスすることが許可されたゼロ個以上の[ヘッダー名](/ja/docs/Web/HTTP/Reference/Headers)のカンマ区切りの一覧です。
    これらは {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}に追加されるものです。
- `*` (ワイルドカード)
  - : `*` の値は、資格情報のないリクエスト ([HTTP Cookie](/ja/docs/Web/HTTP/Guides/Cookies) や HTTP の資格情報のないリクエスト) の特殊なワイルドカード値です。
    資格情報付きのリクエストでは、特別な意味のない "`*`" というヘッダー名として扱われます。

## 例

{{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}は、{{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, {{HTTPHeader("Last-Modified")}}, {{HTTPHeader("Pragma")}} です。CORS セーフリストに登録されていないレスポンスヘッダーを公開するには、次のように指定できます。

```http
Access-Control-Expose-Headers: Content-Encoding
```

`Kuma-Revision` のようなカスタムヘッダーをさらに公開するには、複数のヘッダーをカンマで区切って指定することができます。

```http
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

資格情報のないリクエストでは、ワイルドカード値を使うこともできます。

```http
Access-Control-Expose-Headers: *
```

サーバーは、資格情報を含むリクエストに対して `*` という値を同時に返すこともありますが、その場合は `*` という名前付きヘッダーを参照します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
