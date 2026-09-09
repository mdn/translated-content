---
title: X-Powered-By ヘッダー
short-title: X-Powered-By
slug: Web/HTTP/Reference/Headers/X-Powered-By
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`X-Powered-By`** {{glossary("response header", "レスポンスヘッダー")}}は、レスポンスを生成したアプリケーションやフレームワークを特定するための、非標準のヘッダーです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden response header name", "禁止レスポンスヘッダー名")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
X-Powered-By: <application>
```

## ディレクティブ

- `<application>`
  - : サーバーアプリケーションまたはフレームワークを説明する文字列。

## 例

### X-Powered-By ヘッダーを表す

Express のアプリケーションでは、通常、レスポンスに `X-Powered-By` ヘッダーが含まれ、その値として `express` という文字列が記載されます。

```http
X-Powered-By: express
```

## 仕様書

どの現行仕様にも含まれていません。

## 関連情報

- {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Proto")}} ヘッダー
- {{HTTPHeader("Via")}}
- {{HTTPHeader("Forwarded")}}
