---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
l10n:
  sourceCommit: 1176e753733ee9d2e8966cc7cf03df495dce9aba
---

{{HTTPSidebar}}

**`Content-Location`** ヘッダーは、返されるデータの代替場所を示します。主な用途は、[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)の結果として送信されたリソースの URL を示すことです。

{{HTTPHeader("Location")}} と `Content-Location` は異なります。
`Location` はリダイレクトの URL を示し、`Content-Location` は今後のコンテンツネゴシエーションなしでリソースへのアクセスに使用する直接 URL を示します。 `Location` はレスポンスに関連付けられたヘッダーで、 `Content-Location` は返されたデータに関連付けられます。この区別は[例](#例)がないと抽象的に見えるかもしれません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Representation header", "表現ヘッダー")}}
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

```http
Content-Location: <url>
```

## ディレクティブ

- \<url>
  - : （リクエスト URL に対する）[相対](/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#絶対_url_と相対_url) URL または[絶対](/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL#絶対_url_と相対_url) URL。

## 例

### サーバーからのデータのリクエストを様々な形式で行う

たとえば、サイトの API が {{glossary("JSON")}}, {{glossary("XML")}}, または [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) 形式でデータを返すとします。特定の文書の URL が `https://example.com/documents/foo` である場合、サイトはリクエストの {{HTTPHeader("Accept")}} ヘッダーに応じて `Content-Location` 用に異なる URL を返すことができます。

| リクエストヘッダー                    | レスポンスヘッダー                      |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

これらのURLは例です。サイトは、[クエリー文字列引数](/ja/docs/Web/API/HTMLAnchorElement/search)、例えば `/documents/foo?format=json`、`/documents/foo?format=xml` など、任意の URL パターンでさまざまなファイル形式を提供することができます。

その後クライアントはその特定の URL で JSON バージョンが利用可能であることを覚えて、次に文書を要求するときにコンテンツのネゴシエーションをスキップします。

サーバーは {{HTTPHeader("Accept-Language")}} のような他の[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Content_negotiation)ヘッダーを考慮することもあります。

### 新しい文書を指す (HTTP 201 Created)

サイトの API を通じて新しいブログ投稿を作成しているとします。

```http
POST /new/post
Host: example.com
Content-Type: text/markdown

# My first blog post!

I made this through `example.com`'s API. I hope it worked.
```

サイトは公開された投稿をレスポンス本体で返します。サーバーは、新しい投稿の場所を `Content-Location` ヘッダーで指定し、この場所がこのレスポンスのコンテンツ（本体）を参照することを示します。

```http
HTTP/1.1 201 Created
Content-Type: text/markdown
Content-Location: /my-first-blog-post

# My first blog post

I made this through `example.com`'s API. I hope it worked.
```

### トランザクションの結果の URL を示す

サイトの別のユーザーに送金するための [`<form>`](/ja/docs/Web/HTML/Element/form) があるとします。

```html
<form action="/send-payment" method="post">
  <p>
    <label
      >送金したい宛先は？
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label
      >金額は？
      <input type="number" name="amount" />
    </label>
  </p>

  <button type="submit">送金する</button>
</form>
```

フォームが送信されると、サイトは取引の領収書を生成します。サーバーは `Content-Location` を使用して、将来のアクセスのために領収書の URL を示すことができます。

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /my-receipts/38

<!doctype html>
(Lots of HTML…)

<p>You sent $38.00 to ExampleUser.</p>

(Lots more HTML…)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Location")}}
