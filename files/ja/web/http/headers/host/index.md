---
title: Host
slug: Web/HTTP/Headers/Host
---

{{HTTPSidebar}}

**`Host`** リクエストヘッダーは、リクエストが送信される先のサーバーのホスト名とポート番号を指定します。

ポート番号が指定されなかった場合は、要求されたサービスの既定のポート（例えば HTTPS の URL であれば`443`、 HTTP の URL であれば `80`）とみなされます。

`Host` ヘッダー項目はすべての HTTP/1.1 リクエストメッセージで送信する必要があります。 HTTP/1.1 リクエストメッセージに `Host` ヘッダー項目がなかったり、二つ以上あったりした場合は {{HTTPStatus("400")}} (Bad Request) ステータスコードが返されることがあります。

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
Host: <host>:<port>
```

## ディレクティブ

- \<host>
  - : （仮想ホストの）サーバーのドメイン名。
- \<port> {{optional_inline}}
  - : サーバーが待受けしている TCP のポート番号。

## 例

```
Host: developer.mozilla.org
```

## 仕様書

| 仕様書                         | 題名                                                               |
| ------------------------------ | ------------------------------------------------------------------ |
| {{RFC("7230", "Host", "5.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## ブラウザーの互換性

{{Compat("http.headers.Host")}}

## 関連情報

- {{HTTPStatus("400")}}
- {{HTMLElement("base")}}
