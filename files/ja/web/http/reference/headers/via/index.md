---
title: Via ヘッダー
short-title: Via
slug: Web/HTTP/Reference/Headers/Via
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**`Via`** は{{glossary("request header", "リクエスト")}}・{{glossary("response header", "レスポンスヘッダー")}}で、{{Glossary("Proxy_server", "プロキシー")}}（フォワードプロキシーとリバースプロキシーの両方）によって追加されます。
メッセージ転送の追跡、リクエストループの回避、リクエスト/レスポンスチェーンに沿った送信者のプロトコル能力の識別に使用されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}},
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Via: [<protocol-name>/]<protocol-version> <host>[:<port>]
Via: [<protocol-name>/]<protocol-version> <pseudonym>
```

## ディレクティブ

- `<protocol-name>` {{optional_inline}}
  - : "HTTP" など、使用されているプロトコル名。
- `<protocol-version>`
  - : "1.1" など、使用されているプロトコルのバージョン。
- `<host>`
  - : 公開プロキシーのURLと、オプションの`<port>`。
    ホスト名が指定されていない場合は、`<pseudonym>` を使用する必要があります。
- `<pseudonym>`
  - : 内部プロキシーの名前/別名です。
    仮名が指定されていない場合は、`<host>` を使用する必要があります。

## 例

```http
Via: 1.1 vegur
Via: HTTP/1.1 GWA
Via: 1.0 fred, 1.1 p.example.net
```

## 仕様書

{{Specifications}}

## ブラウザーの互換

{{Compat}}

## 関連情報

- {{HTTPHeader("X-Forwarded-For")}}
- [Heroku's proxy library Vegur](https://github.com/heroku/vegur)
