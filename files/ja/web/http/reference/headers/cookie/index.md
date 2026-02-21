---
title: Cookie ヘッダー
short-title: Cookie
slug: Web/HTTP/Reference/Headers/Cookie
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Cookie`** {{Glossary("request header", "リクエストヘッダー")}}は、保存されている [HTTP クッキー](/en-US/docs/Web/HTTP/Guides/Cookies)を送信します。これらはサーバーに関連付けられているものです（つまり、以前サーバーが {{HTTPHeader("Set-Cookie")}} ヘッダーで送信したもの、または JavaScript で {{domxref("Document.cookie")}} を使用して設定されたものです）。

`Cookie` ヘッダーは任意であり、例えば、ブラウザーのプライバシー設定でクッキーをブロックしている場合などは省略できます。

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
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

## ディレクティブ

- `<cookie-list>`
  - : 名前と値のリストを `<cookie-name>=<cookie-value>` の形で表したものです。
    リストの組はセミコロンと空白 (`'; '`) で区切られます。

## 例

```http
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPStatus("413", "413 Content Too Large")}}
- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
