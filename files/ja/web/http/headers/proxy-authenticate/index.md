---
title: Proxy-Authenticate
slug: Web/HTTP/Headers/Proxy-Authenticate
---

{{HTTPSidebar}}

HTTP **`Proxy-Authenticate`** レスポンスヘッダーは、{{Glossary("proxy server", "プロキシサーバー")}}の背後にあるリソースへのアクセスに使用される認証メソッドを定義します。プロキシサーバーへのリクエストを認証し、プロキシサーバーがリクエストをさらに送信できるようにします。

`Proxy-Authenticate` ヘッダーは、 {{HTTPStatus("407")}} `Proxy Authentication Required` とともに送信されます。

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
Proxy-Authenticate: <type> realm=<realm>
```

## ディレクティブ

- \<type>
  - : [認証方式](/ja/docs/Web/HTTP/Authentication#認証方式)。 一般的なタイプは ["Basic"](/ja/docs/Web/HTTP/Authentication#basic_認証方式) です。 IANA は[認証方式のリスト](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)を管理しています。
- realm=\<realm>
  - : 保護された領域、つまり realm の詳細。 realm が指定されていない場合、クライアントはふつう代わりに整形されたホスト名を表示します。

## 例

```
Proxy-Authenticate: Basic

Proxy-Authenticate: Basic realm="Access to the internal site"
```

## 仕様書

| 仕様書                                       | 題名                                   |
| -------------------------------------------- | -------------------------------------- |
| {{RFC("7235", "Proxy-Authenticate", "4.3")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                              | The 'Basic' HTTP Authentication Scheme |

## ブラウザーの対応

{{Compat("http.headers.Proxy-Authenticate")}}

## 関連情報

- [HTTP 認証](/ja/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
