---
title: Content-Type ヘッダー
short-title: Content-Type
slug: Web/HTTP/Reference/Headers/Content-Type
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Content-Type`** は{{Glossary("representation header","表現ヘッダー")}}で、コンテンツへのエンコードが適用される前の、リソースの元の{{Glossary("MIME type","メディア種別")}}を示すために使用します。

レスポンスにおいては、 `Content-Type` ヘッダーはクライアントに返されたコンテンツの実際の種類を伝えます。
{{HTTPMethod("POST")}} や {{HTTPMethod("PUT")}} などのリクエストにおいては、クライアントは `Content-Type` ヘッダーを使用してサーバーに送信しようとしているコンテンツの種類を指定します。
サーバーの実装や設定がコンテンツの種別の扱いに関して厳密な場合、 {{HTTPStatus("415")}} クライアントエラーレスポンスが返る可能性があります。

`Content-Type` ヘッダーは {{HTTPHeader("Content-Encoding")}} とは異なります。 `Content-Encoding` は、受信者がもとの形にデコードする方法を得るのに役立ちます。

> [!NOTE]
> この値は、ブラウザーがレスポンスに対して [MIME スニッフィング](/ja/docs/Web/HTTP/Guides/MIME_types#mime_スニッフィング)（またはコンテンツスニッフィング）を行う場合に無視されることがあります。
> ブラウザーが MIME スニッフィングを行うことを防止するためには、 {{HTTPHeader("X-Content-Type-Options")}} ヘッダーの値を `nosniff` に設定してください。
> 詳しくは [MIME タイプの検証](/ja/docs/Web/Security/Practical_implementation_guides/MIME_types)を参照してください。

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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "CORS セーフリストレスポンスヘッダー")}}
      </th>
      <td>はい</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>
        はい*
      </td>
    </tr>
  </tbody>
</table>

\* 値には、[CORS 危険リクエストヘッダーバイト](https://fetch.spec.whatwg.org/#cors-unsafe-request-header-byte)である `"():<>?@[\]{},`、削除コード `0x7F`、制御文字 `0x00` から `0x19` （`0x09` を除く）を含むことはできません。
また、 MIME タイプの解釈値（引数を除いたもの）が `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain` のいずれかである必要があります。

## 構文

```plain
Content-Type: <media-type>
```

例を示します。

```http
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=ExampleBoundaryString
```

## ディレクティブ

- `<media-type>`
  - : リソースやデータの [MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types)です。
    以下の引数を付けることができます。
    - **`charset`**: 標準で使用する{{Glossary("character encoding","文字エンコーディング")}}を示します。
      この値は大文字小文字を区別しませんが、小文字を推奨します。
    - **`boundary`**: 本文がマルチパートである場合、 `boundary` ディレクティブが必要です。
      メッセージの複数のパートの境界を区切るために使用します。
      これはさまざまなシステム（メールゲートウェイなど）を通過しても大丈夫だと知られている文字の中から 1～70 文字で構成されます（ホワイトスペースで終了しません）。
      ふつう、ヘッダーの境界は 2 本のダッシュで始まり、最後の境界には最後にも 2 本のダッシュが入ります。

## 例

### 正しいコンテンツタイプで資産を提供

例えば、次の 2 つのレスポンスの例では、JavaScript および CSS の資産が、JavaScript には `text/javascript` を、CSS には `text/css` を用いて配信されます。
これらのリソースに正しいコンテンツタイプを入力することで、ブラウザーにそれらをより安全に、より高いパフォーマンスで処理してもらうことができます。
詳しくは[サーバーで MIME タイプを正しく設定する](/ja/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)を参照してください。

```http
HTTP/1.1 200
content-encoding: br
content-type: text/javascript; charset=utf-8
vary: Accept-Encoding
date: Fri, 21 Jun 2024 14:02:25 GMT
content-length: 2978

const videoPlayer=document.getElementById...
```

```http
HTTP/3 200
server: nginx
date: Wed, 24 Jul 2024 16:53:02 GMT
content-type: text/css
vary: Accept-Encoding
content-encoding: br

.super-container{clear:both;max-width:100%}...
```

### HTML フォームにおける `Content-Type`

HTML フォームを送信する {{HTTPMethod("POST")}} リクエストでは、リクエストの `Content-Type` は {{HTMLElement("form")}} 要素の `enctype` 属性で指定します。

```html
<form action="/foo" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="Description input value" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

リクエストは次の例のようになります。簡潔にするために一部のヘッダーを除外しています。
リクエストでは、説明のために `ExampleBoundaryString` の境界を使用していますが、実際にはブラウザーは、このようにもっと長い `---------------------------1003363413119651595289485765` のような文字列を作成します。

```http
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=ExampleBoundaryString

--ExampleBoundaryString
Content-Disposition: form-data; name="description"

Description input value
--ExampleBoundaryString
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

[content of the file foo.txt chosen by the user]
--ExampleBoundaryString--
```

### URL エンコードのフォーム送信における `Content-Type`

フォームにファイルのアップロードが含まれず、よりシンプルなフィールドを使用している場合、フォームデータがリクエスト本体に記載される場合は、 URL エンコード方式のフォームの方が便利な場合があります。

```html
<form action="/submit" method="post">
  <label for="comment">Comment:</label>
  <input type="text" id="comment" name="comment" value="Hello!" />
  <button type="submit">Submit</button>
</form>
```

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

comment=Hello!
```

### REST API で JSON を使用した場合の `Content-Type`

多くの {{Glossary("REST")}} API は、コンテンツタイプとして `application/json` を使用しており、これはマシン間の通信やプログラムによる操作に便利です。
次の例は、リクエストが成功した結果を示す {{HTTPStatus("201", "201 Created")}} レスポンスを示しています。

```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "message": "New user created",
  "user": {
    "id": 123,
    "firstName": "Paul",
    "lastName": "Klee",
    "email": "p.klee@example.com"
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}} ヘッダー
- {{HTTPHeader("Vary")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPHeader("X-Content-Type-Options")}}
