---
title: PATCH
slug: Web/HTTP/Methods/PATCH
tags:
  - HTTP
  - リファレンス
  - リクエストメソッド
translation_of: Web/HTTP/Methods/PATCH
---
{{HTTPSidebar}}

**HTTP の `PATCH` リクエストメソッド**は、リソースへの部分的な変更を適用します。

`PATCH` は {{Glossary("CRUD")}} に見られる "update" の概念にやや類似しています（一般的に、 HTTP は {{Glossary("CRUD")}} とは異なり、両者は混同するべきではありません）。

`PATCH` リクエストは、リソースをどのように修正するかの指示のセットと考えられます。これは {{HTTPMethod("PUT")}} がリソースの完全な表現を送るのと対照的です。

`PATCH` はべき等であるとは限りませんが、そうなる可能性もあります。この点は、常にべき等である {{HTTPMethod("PUT")}} とは対照的です。「べき等」という言葉は、同じリクエストを何度繰り返しても、リソースが同じ状態になることを意味します。 例えば、自動インクリメントするカウンタフィールドがリソースの不可欠な部分である場合、 {{HTTPMethod("PUT")}} は自然にそれを上書きしますが（すべてを上書きするので）、 `PATCH` は必ずしもそうとは限りません。

`PATCH` は（{{HTTPMethod("PUT")}} のように）他のリソースに対して副作用が発生する<em>場合があります</em>。

サーバーが `PATCH` に対応しているかどうかを調べるために、サーバーは {{HTTPHeader("Allow")}} または {{HTTPHeader("Access-Control-Allow-Methods")}} （[CORS](/ja/docs/Web/HTTP/CORS) の場合）レスポンスヘッダーのリストに追加することで対応状況を知らせることができます。

`PATCH` が許可されていることを示すもう1つの（暗黙の）識別方法は、サーバーが受け付けるパッチ文書の形式を指定する {{HTTPHeader("Accept-Patch")}} があることです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">リクエストの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">成功時のレスポンスの本文</th>
      <td>あり</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "安全性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "べき等性")}}</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "キャッシュ")}}</th>
      <td>不可</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Learn/Forms">HTML フォーム</a>での利用
      </th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 構文

```
PATCH /file.txt HTTP/1.1
```

## 例

### リクエスト

```
PATCH /file.txt HTTP/1.1
Host: www.example.com
Content-Type: application/example
If-Match: "e0023aa4e"
Content-Length: 100

[変更の記述]
```

### レスポンス

成功レスポンスは [2xx](https://datatracker.ietf.org/doc/html/rfc7231#section-6.3) ステータスコードで示されます。

この例の場合、本文が含まれていないため {{HTTPStatus("204")}} コードで成功レスポンスが示されます。もし {{HTTPStatus("200")}} コードであれば本文が含まる可能性があります。 

```
HTTP/1.1 204 No Content
Content-Location: /file.txt
ETag: "e0023aa4f"
```

## 仕様書

| 仕様書                    | 題名                 |
| -------------------------------- | --------------------- |
| {{RFC("5789", "PATCH")}} | PATCH Method for HTTP |

## 関連情報

- {{HTTPStatus("204")}}
- {{HTTPHeader("Allow")}}, {{HTTPHeader("Access-Control-Allow-Methods")}}
- {{HTTPHeader("Accept-Patch")}} – サーバーが受け入れる PATCH 文書の形式を指定します。
