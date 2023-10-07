---
title: Cookie
slug: Web/HTTP/Headers/Cookie
---

{{HTTPSidebar}}

**`Cookie`** は HTTP のリクエストヘッダーで、以前サーバーが {{HTTPHeader("Set-Cookie")}} ヘッダーで送信し、保存された [HTTP クッキー](/ja/docs/Web/HTTP/Cookies)を含みます。

`Cookie` ヘッダーは任意であり、例えば、ブラウザーのプライバシー設定でクッキーをブロックしている場合などは省略できます。

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
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

- \<cookie-list>
  - : 名前と値のリストを `<cookie-name>=<cookie-value>` の形で表したものです。リストの組はセミコロンと空白 (`'; '`) で区切られます。

## 例

```
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

## 仕様書

| 仕様書                           | 題名                            |
| -------------------------------- | ------------------------------- |
| {{RFC("6265", "Cookie", "5.4")}} | HTTP State Management Mechanism |

## ブラウザーの互換性

{{Compat("http.headers.Cookie")}}

## 関連情報

- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
