---
title: TRACE
slug: Web/HTTP/Methods/TRACE
tags:
  - HTTP
  - リファレンス
  - リクエストメソッド
browser-compat: http.methods.TRACE
translation_of: Web/HTTP/Methods/TRACE
---
{{HTTPSidebar}}

**HTTP の `TRACE` メソッド**は、対象リソースまでのパスに沿ってメッセージのループバックテストを行い、便利なデバッグの仕組みを提供します。

リクエストの最終受信者は受信したメッセージを、以下に示すいくつかのフィールドを除いて、クライアントに {{HTTPStatus("200")}} (`OK`) レスポンスを {{HTTPHeader("Content-Type")}} を `message/http` に設定した本文として返送します。最終受信者はオリジンのサーバーか、リクエストで {{HTTPHeader("Max-Forwards")}} の値が 0 で受け取った最初のサーバーのどちらかです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">HTML フォームの使用</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 構文

```
TRACE /index.html
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP メソッド](/ja/docs/Web/HTTP/Methods)
