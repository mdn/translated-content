---
title: DELETE リクエストメソッド
short-title: DELETE
slug: Web/HTTP/Reference/Methods/DELETE
l10n:
  sourceCommit: 531ab7d0f0572957de89f715de2adb981628d64e
---

**`DELETE`** は HTTP のメソッドで、サーバーに指定されたリソースを削除するよう依頼します。

`DELETE` を使用するリクエストは、データの削除にのみ使用すべきであり、本体を含まれてはなりません。

> [!NOTE]
> `DELETE` リクエストでメッセージの本文を送信すると、意味づけは未定義になります。
> サーバーによっては、そのリクエストを [4XX クライアントエラー](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)レスポンスで拒否することがあります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>なし</td>
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
DELETE <request-target>["?"<query>] HTTP/1.1
```

- `<request-target>`
  - : {{HTTPHeader("Host")}} ヘッダーで提供される情報と組み合わせたときの、リクエストのターゲットリソースを識別します。
    これは元のサーバーへのリクエストにおいては絶対パス（`/path/to/file.html` など）であり、プロキシーへのリクエストにおいては絶対 URL（`http://www.example.com/path/to/file.html` など）です。
- `<query>` {{optional_inline}}
  - : 疑問符 `?` で始まるオプションのクエリー成分。
    多くの場合、`key=value` の組の形で識別情報を保持するために使用されます。

## 例

### リソースの削除に成功

次のリクエストは、サーバーにリソース `file.html` を削除するよう依頼します。

```http
DELETE /file.html HTTP/1.1
Host: example.com
```

リクエストが成功した場合、いくつかの[成功レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)が返る可能性ががあります。
{{HTTPStatus("204", "204 No Content")}} レスポンスは、リクエストが成功し、クライアントに追加情報が必要でないということです。

```http
HTTP/1.1 204 No Content
Date: Wed, 04 Sep 2024 10:16:04 GMT
```

{{HTTPStatus("200", "200 OK")}} レスポンスは、リクエストが成功したということを意味し、レスポンス本体には結果を記述する表現が含まれます。

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Content-Length: 1234

<html lang="ja">
  <body>
    <h1>ファイル "file.html" が削除されました。</h1>
  </body>
</html>
```

{{HTTPStatus("202", "202 Accepted")}} レスポンスは、リクエストが受け入れられ、おそらく成功するものの、リソースがサーバーによってまだ削除されていないことを意味します。

```http
HTTP/1.1 202 Accepted
Date: Wed, 26 Jun 2024 12:00:00 GMT
Content-Type: text/html; charset=UTF-8
Content-Length: 1234

<html lang="en-US">
  <body>
    <h1>"file.html" の削除が受け付けられました。</h1>
    <p>詳細は<a href="http://example.com/tasks/123/status">状態モニター</a>を参照してください。</p>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

ブラウザーはユーザー主導のアクションに`DELETE`メソッドを使用しないため、「ブラウザー互換性」は適用されません。
開発者は [`fetch()`](/ja/docs/Web/API/Window/fetch) を使ってこのリクエストメソッドを設定することができます。

## 関連情報

- HTTP ステータス: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
