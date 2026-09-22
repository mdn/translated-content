---
title: Content-Location ヘッダー
short-title: Content-Location
slug: Web/HTTP/Reference/Headers/Content-Location
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Content-Location`** {{Glossary("representation header", "表現ヘッダー")}}は、返されるデータの代替場所を示します。
主な用途は、[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)の結果として送信されたリソースの URL を示すことです。

`Content-Location` は {{HTTPHeader("Location")}} とは異なります。
`Content-Location` は、[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)が発生した際に、リソースにアクセスするための直接 URL を示すもので、これによりクライアントはこのリソースに対する今後のコンテンツネゴシエーションを省略することができます。
一方、`Location` は、`3XX` リダイレクトの対象、または {{HTTPStatus("201", "201 Created")}} レスポンスで新規に作成されたリソースの URL のどちらかを示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Representation header", "表現ヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Location: <url>
```

## ディレクティブ

- `<url>`
  - : （リクエスト URL に対する）[相対](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#絶対_url_と相対_url) URL または[絶対](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL#絶対_url_と相対_url) URL。

## 例

### サーバーからのデータのリクエストを様々な形式で行う

たとえば、サイトの API が {{glossary("JSON")}}, {{glossary("XML")}}, または [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) 形式でデータを返すとします。特定の文書の URL が `https://example.com/documents/foo` である場合、サイトはリクエストの {{HTTPHeader("Accept")}} ヘッダーに応じて `Content-Location` 用に異なる URL を返すことができます。

| リクエストヘッダー                    | レスポンスヘッダー                      |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

これらの URL は例です。サイトは、[クエリー文字列引数](/ja/docs/Web/API/HTMLAnchorElement/search)、例えば `/documents/foo?format=json`、`/documents/foo?format=xml` など、任意の URL パターンでさまざまなファイル形式を提供することができます。

その後クライアントはその特定の URL で JSON バージョンが利用可能であることを覚えて、次に文書を要求するときにコンテンツのネゴシエーションをスキップします。

サーバーは {{HTTPHeader("Accept-Language")}} のような他の[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)ヘッダーを考慮することもあります。

### トランザクションの結果の URL を示す

サイトの別のユーザーに送金するための [`<form>`](/ja/docs/Web/HTML/Reference/Elements/form) があるとします。

```html
<form action="/send-payment" method="post">
  <p>
    <label>
      送金したい宛先は？
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label>
      金額は？
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
