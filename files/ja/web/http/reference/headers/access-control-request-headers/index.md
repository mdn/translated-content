---
title: Access-Control-Request-Headers ヘッダー
short-title: Access-Control-Request-Headers
slug: Web/HTTP/Reference/Headers/Access-Control-Request-Headers
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Access-Control-Request-Headers`** {{Glossary("Request header", "リクエストヘッダー")}}は、{{glossary("preflight request", "プリフライトリクエスト")}}を発行する際にブラウザーが使用し、（{{domxref("Window/fetch", "fetch()")}} や {{domxref("XMLHttpRequest.setRequestHeader()")}} などで）実際のリクエストが行う際にどの [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)を使用するかをサーバーに知らせます。対応するサーバー側のヘッダー {{HTTPHeader("Access-Control-Allow-Headers")}} が、このブラウザー側のヘッダーに応答します。

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
Access-Control-Request-Headers: <header-name>,<header-name>,…
```

## ディレクティブ

- `<header-name>`
  - : リクエストに含まれる [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)の一意でカンマ区切りのリスト。

## 例

```http
Access-Control-Request-Headers: content-type,x-pingother
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Access-Control-Request-Method")}}
