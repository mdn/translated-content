---
title: DELETE
slug: Web/HTTP/Methods/DELETE
tags:
  - HTTP
  - リファレンス
  - リクエストメソッド
browser-compat: http.methods.DELETE
translation_of: Web/HTTP/Methods/DELETE
---
{{HTTPSidebar}}

**HTTP の `DELETE` リクエストメソッド**は、指定されたリソースを削除します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>可</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP","安全性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent","べき等性")}}</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable","キャッシュ")}}</th>
      <td>不可</td>
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
DELETE /file.html HTTP/1.1
```

## 例

### リクエスト

```
DELETE /file.html HTTP/1.1
Host: example.com
```

### レスポンス

`DELETE` メソッドが正常に受け付けられた場合、可能性があるレスポンスステータスコードがいくつかあります。

- {{HTTPStatus("202")}} (`Accepted`) は、処理が成功する可能性は高いが、まだ成立はしていない場合のステータスコード。
- {{HTTPStatus("204")}} (`No Content`) は、処理は完了しておりかつ、さらなる情報が提供されない場合のステータスコード。
- {{HTTPStatus("200")}} (`OK`) は、 処理は完了しておりかつ、レスポンスメッセージにステータスを表す表現を含んでいる場合のステータスコード。

```
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>ファイルが削除されました。</h1>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTTP ステータス: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
