---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
---

{{HTTPSidebar}}

**`Content-Location`** ヘッダーは、返されるデータの代替場所を示します。主な用途は[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)の結果として送信されたリソースの URL を示すことです。

{{HTTPHeader("Location")}} と `Content-Location` は異なります。`Location` はリダイレクトの URL を示し、`Content-Location` は今後のコンテンツネゴシエーションなしでリソースへのアクセスに使用する直接 URL を示します。 `Location` はレスポンスに関連付けられたヘッダーで、 `Content-Location` は返されたデータに関連付けられます。この区別は[例](#Examples)がないと抽象的に見えるかもしれません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Entity header", "エンティティヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Content-Location: <url>
```

## ディレクティブ

- \<url>
  - : (リクエスト URL に対する) [相対](/ja/docs/Learn/Common_questions/What_is_a_URL#Examples_of_relative_URLs) URL または[絶対](/ja/docs/Learn/Common_questions/What_is_a_URL#Examples_of_absolute_URLs) URL。

## 例

### サーバーからのデータのリクエストを様々な形式で行う

たとえば、サイトの API が {{glossary("JSON")}}, {{glossary("XML")}}, または [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) 形式でデータを返すとします。特定の文書の URL が `https://example.com/documents/foo` である場合、サイトはリクエストの {{HTTPHeader("Accept")}} ヘッダーに応じて `Content-Location` 用に異なる URL を返すことができます。

| リクエストヘッダー                    | レスポンスヘッダー                      |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

これらの URL は例です。サイトではクエリ文字列パラメータ：`/documents/foo?format=json`、`/documents/foo?format=xml` など、任意の URL パターンでさまざまなファイルタイプを提供できます。

その後クライアントはその特定の URL で JSON バージョンが利用可能であることを覚えて、次に文書を要求するときにコンテンツのネゴシエーションをスキップします。

サーバーは {{HTTPHeader("Accept-Language")}} のような他の[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)ヘッダーを考慮することもできます。

### 新しい文書を指す (HTTP 201 Created)

サイトの API を通じて新しいブログ投稿を作成しているとします。

```
PUT /new/post
Host: example.com
Content-Type: text/markdown

# My first blog post!

I made this through `example.com`'s API. I hope it worked.
```

サイトは投稿が公開されたことを確認する一般的な成功メッセージを返します。サーバーは `Content-Location` を使用して新しい投稿がどこにあるかを指定します。

```
HTTP/1.1 201 Created
Content-Type: text/plain; charset=utf-8
Content-Location: /my-first-blog-post

✅ Success!
```

### トランザクションの結果の URL を示す

サイトの別のユーザーに送金するための [`<form>`](/ja/docs/Web/HTML/Element/form) があるとします。

```html
<form action="/send-payment" method="post">
  <p>
    <label
      >Who do you want to send the money to?
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label
      >How much?
      <input type="number" name="amount" />
    </label>
  </p>

  <button type="submit">Send Money</button>
</form>
```

フォームが送信されると、サイトは取引の領収書を生成します。サーバーは `Content-Location` を使用して、将来のアクセスのために領収書の URL を示すことができます。

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /my-receipts/38

<!doctype html>
(Lots of HTML…)

<p>You sent $38.00 to ExampleUser.</p>

(Lots more HTML…)
```

## 仕様書

| 仕様書                                         | 題名                                                          |
| ---------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Content-Location", "3.1.4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

{{Compat("http.headers.Content-Location")}}

## 関連情報

- {{HTTPHeader("Location")}}
