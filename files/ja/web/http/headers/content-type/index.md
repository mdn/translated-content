---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
---

{{HTTPSidebar}}

**`Content-Type`** 表現ヘッダーは、リソースの{{Glossary("MIME type","メディア種別")}}を示すために使用します。</p>

レスポンスにおいては、 `Content-Type` ヘッダーはクライアントに返されたコンテンツの実際の種類を伝えます。ブラウザーは MIME を推定し、このヘッダーの値に従わないこともあります。 {{HTTPHeader("X-Content-Type-Options")}} を `nosniff` に設定すると、この動作を防ぐことができます。

リクエストにおいては ({{HTTPMethod("POST")}} または {{HTTPMethod("PUT")}} などで)、クライアントがサーバーに実際に送ったデータの種類を伝えます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Representation header", "表現ヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}</th>
      <td>はい</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>
        はい。 <em>CORS 危険リクエストヘッダーバイト</em>である 0x00-0x1F (0x09 (HT) を除く)、<code>"():&#x3C;>?@[\]{}</code>、0x7F (DEL) を値に含むことができないという制限付きです。<br>また、 MIME タイプの解釈値 (引数を除いたもの) が <code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code>, <code>text/plain</code> の何れかである必要があります。</td>
    </tr>
  </tbody>
</table>

## 構文

```
Content-Type: text/html; charset=UTF-8
Content-Type: multipart/form-data; boundary=something
```

## ディレクティブ

- `media-type`
  - : リソースやデータの [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)です。
- charset
  - : 標準の文字エンコーディングです。
- boundary
  - : マルチパートの本文では `boundary` ディレクティブが必要で、これはメールゲートウェイを通過しても大丈夫だと知られている文字の中から 1～70 文字で構成され、ホワイトスペースで終了しないものです。これはメッセージの複数パートの境界を囲むために使用します。ふつう、ヘッダーの境界は 2 本のダッシュで始まり、最後の境界には最後にも 2 本のダッシュが入ります。

## 例

### HTML フォームにおける `Content-Type`

HTML フォームを送信する {{HTTPMethod("POST")}} リクエストでは、リクエストの `Content-Type` は {{HTMLElement("form")}} 要素の `enctype` 属性で指定します。

```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

このリクエストはこのように見えます (ここではあまり重要でないヘッダーは省略しています)。

```
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

some text
-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)
-----------------------------974767299852498929531610575--
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206")}} Partial Content
- {{HTTPHeader("X-Content-Type-Options")}}
