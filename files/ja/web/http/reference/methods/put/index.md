---
title: PUT リクエストメソッド
short-title: PUT
slug: Web/HTTP/Reference/Methods/PUT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`PUT`** メソッドは、新しいリソースを作成するか、指定したリソースの表現をリクエストの{{Glossary("HTTP Content", "コンテンツ")}}で置き換えます。

`PUT` と {{HTTPMethod("POST")}} との違いは、`PUT` は{{Glossary("idempotent", "べき等")}}であることです。1 回だけ呼び出しても、連続して複数回呼び出しても違いはありません（副作用がありません）。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>可</td>
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
        <a href="/ja/docs/Learn_web_development/Extensions/Forms">HTML フォーム</a>での使用
      </th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 構文

```http
PUT <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : {{HTTPHeader("Host")}} ヘッダーで提供される情報と組み合わせたときの、リクエストのターゲットリソースを識別します。
    これは元のサーバーへのリクエストにおいては絶対パス（`/path/to/file.html` など）であり、プロキシーへのリクエストにおいては絶対 URL（`http://www.example.com/path/to/file.html` など）です。
- `<query>` {{optional_inline}}
  - : 疑問符 `?` で始まるオプションのクエリー成分。
    多くの場合、`key=value` の組の形で識別情報を保持するために使用されます。

## 例

### リクエスト

次の `PUT` リクエストは、`example.com/new.html` に `<p>新しいファイル</p>` というコンテンツでリソースを作成するよう要求します。

```http
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>新しいファイル</p>
```

対象リソースに現在の表現が**存在せず**、 `PUT` リクエストによって正常に作成された場合、サーバーはユーザーエージェントに {{HTTPStatus("201", "201 Created")}} レスポンスを通知します。

```http
HTTP/1.1 201 Created
Content-Location: /new.html
```

対象リソースに現在の表現が存在し、その表現が内容の表現の状態に従って変更が完了した場合、サーバーは {{HTTPStatus("200", "200 OK")}} または {{HTTPStatus("204", "204 No Content")}} のどちらかのレスポンスによって、リクエストが正常に完了したことを示します。

```http
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

ブラウザーはユーザー主導のアクションに`PUT`メソッドを使用しないため、「ブラウザー互換性」は適用されません。
開発者は [`fetch()`](/ja/docs/Web/API/Window/fetch) を使ってこのリクエストメソッドを設定することができます。

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- {{HTTPStatus("201", "201 Created")}}, {{HTTPStatus("204", "204 No Content")}} レスポンスステータス
