---
title: Via
slug: Web/HTTP/Headers/Via
---

{{HTTPSidebar}}

一般ヘッダーの **`Via`** は、フォワードプロキシとリバースプロキシの両方のプロキシによって追加され、リクエストヘッダーとレスポンスヘッダーに表示されます。 メッセージ転送の追跡、要求ループの回避、および要求/応答チェーンに沿った送信者のプロトコル機能の識別に使用されます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## 構文

```
Via: [ <protocol-name> "/" ] <protocol-version> <host> [ ":" <port> ]
or
Via: [ <protocol-name> "/" ] <protocol-version> <pseudonym>
```

## ディレクティブ

- \<protocol-name>
  - : オプション。"HTTP"など、使用するプロトコル名。
- \<protocol-version>
  - : "1.1"など、使用されているプロトコルのバージョン。
- \<host> and \<port>
  - : パブリックプロキシの URL とポート。
- \<pseudonym>
  - : 内部プロキシの名前/エイリアス。

## 例

```
Via: 1.1 vegur
Via: HTTP/1.1 GWA
Via: 1.0 fred, 1.1 p.example.net
```

## 仕様書

| Specification                   | Title                                                              |
| ------------------------------- | ------------------------------------------------------------------ |
| {{RFC("7230", "Via", "5.7.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## ブラウザーの互換

{{Compat("http.headers.Via")}}

## 関連情報

- {{HTTPHeader("X-Forwarded-For")}}
- [Heroku's proxy library Vegur](https://github.com/heroku/vegur)
