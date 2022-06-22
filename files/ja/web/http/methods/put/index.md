---
title: PUT
slug: Web/HTTP/Methods/PUT
tags:
  - HTTP
  - リファレンス
  - リクエストメソッド
browser-compat: http.methods.PUT
translation_of: Web/HTTP/Methods/PUT
---
{{HTTPSidebar}}

**HTTP の `PUT` リクエストメソッド**は、新しいリソースを作成するか、指定したリソースの表現をリクエストのペイロードで置き換えます。

`PUT` と {{HTTPMethod("POST")}} との違いは、`PUT` はべき等であり、呼び出し回数が 1 回でも複数回でも同じ効果になる（*副*作用がない）一方で、 {{HTTPMethod("POST")}} は連続して同じものを実行すると、注文を複数回渡してしまうなどの追加の影響が発生する可能性があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>あり</td>
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
      <th scope="row">
        <a href="/ja/docs/Learn/Forms">HTML フォーム</a>での使用
      </th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 構文

```
PUT /new.html HTTP/1.1
```

## 例

### リクエスト

```
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

### レスポンス

対象リソースに現在の表現が存在せず、 `PUT` リクエストによって正常に作成された場合、サーバーはユーザーエージェントに {{HTTPStatus("201")}} (`Created`) レスポンスを通知します。

```
HTTP/1.1 201 Created
Content-Location: /new.html
```

対象リソースに現在の表現が存在し、その表現が内容の表現の状態に従って変更が完了した場合、サーバーは {{HTTPStatus("200")}} (`OK`) または {{HTTPStatus("204")}} (`No Content`) の何れかのレスポンスによって、リクエストが正常に完了したことを示します。

```
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPStatus("201")}}
- {{HTTPStatus("204")}}
