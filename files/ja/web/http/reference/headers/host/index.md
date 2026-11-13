---
title: Host ヘッダー
short-title: Host
slug: Web/HTTP/Reference/Headers/Host
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Host`** {{Glossary("request header", "リクエストヘッダー")}}は、リクエストが送信される先のサーバーのホスト名とポート番号を指定します。

ポート番号が指定されなかった場合は、要求されたサービスの既定のポート（例えば HTTPS の URL であれば `443`、 HTTP の URL であれば `80`）とみなされます。

`Host` ヘッダー項目はすべての HTTP/1.1 リクエストメッセージで送信する必要があります。
HTTP/1.1 リクエストメッセージに `Host` ヘッダー項目がなかったり、2 つ以上あったりした場合は {{HTTPStatus("400", "400 Bad Request")}} ステータスコードが返されることがあります。

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
Host: <host>:<port>
```

## ディレクティブ

- `<host>`
  - : （仮想ホストの）サーバーのドメイン名。
- `<port>` {{optional_inline}}
  - : サーバーが待受けしている TCP のポート番号。

## 例

```http
Host: developer.mozilla.org
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPStatus("400")}}
- {{HTMLElement("base")}}
