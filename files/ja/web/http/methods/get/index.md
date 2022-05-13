---
title: GET
slug: Web/HTTP/Methods/GET
tags:
  - HTTP
  - リファレンス
  - リクエストメソッド
browser-compat: http.methods.GET
translation_of: Web/HTTP/Methods/GET
---
{{HTTPSidebar}}

**HTTP の `GET` メソッド**は、特定のリソースの表現をリクエストします。 `GET` を使用したリクエストはデータをリクエストするためだけに使用してください（データを含めるべきではありません）。

> **Note:** `GET` リクエストで本文（ペイロード）を送信すると、実装によってはリクエストを拒否することがあります。これは仕様書では禁止されていませんが、その意味は未定義です。 `GET` リクエストでは本文を送るのを避けた方がいいでしょう。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全性")}}</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">HTML フォームでの使用</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 構文

```
GET /index.html
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP ヘッダー](/ja/docs/Web/HTTP/Headers)
- {{HTTPHeader("Range")}}
- {{HTTPMethod("POST")}}
