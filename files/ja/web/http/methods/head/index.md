---
title: HEAD
slug: Web/HTTP/Methods/HEAD
tags:
  - HTTP
  - リファレンス
  - リクエストメソッド
browser-compat: http.methods.HEAD
translation_of: Web/HTTP/Methods/HEAD
---
{{HTTPSidebar}}

**HTTP の `HEAD` メソッド**は、この `HEAD` リクエストが HTTP {{HTTPMethod("GET")}} メソッドでリクエストされた場合に返される[ヘッダー](/ja/docs/Web/HTTP/Headers)をリクエストします。例えば、ある URL が大きなファイルをダウンロードする可能性がある場合、 `HEAD` リクエストは {{HTTPHeader("Content-Length")}} ヘッダーを読み込んで、実際にファイルをダウンロードすることなくファイルサイズを確認することができます。

> **Warning:** `HEAD` メソッドへのレスポンスには本文が含まれては*いけません*。あった場合は無視**しなければなりません**。誤った本文を記述する可能性がある{{glossary("Representation header", "表現ヘッダー")}}は、同様の `GET` リクエストで受け取るであろうレスポンスを記述していると仮定します。

`HEAD` リクエストの結果が、 {{HTTPMethod("GET")}} リクエストの後でキャッシュされたリソースが古くなっていることを示している場合、 `GET` リクエストが行われなくてもキャッシュが無効化されます。

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
      <th scope="row">
        <a href="/ja/docs/Learn/Forms">HTML フォーム</a>での使用
      </th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 構文

```
HEAD /index.html
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPMethod("GET")}}
