---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Status/451
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) の **`451 Unavailable For Legal Reasons`** はユーザーの要求したリソースが法的理由で使用できない場合のクライアントエラーのレスポンスコードです。

## ステータス

```
451 Unavailable For Legal Reasons
```

## 例

このレスポンス例は IETF RFC 文書 (リンクは後述) にあるもので、モンティ・パイソンの[ライフ・オブ・ブライアン](https://ja.wikipedia.org/wiki/ライフ・オブ・ブライアン)からの引用を例に用いています。

**注:** ISP や DNS サーバーなど、実際にユーザーによるリソースの使用を阻んでいる主体を示すときには `rel="blocked-by"` という値のついた {{HTTPHeader("Link")}} HTTP ヘッダーを使用します。

リソースの使用を阻んでいる最終的な原因は、`rel="blocked-by"` の {{HTTPHeader("Link")}}HTTP ヘッダーではなくレスポンスの本体に記載されます。これは内容の削除を求める法的な請求を行った個人や組織などが含まれます。

```
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html
```

```
<html>
      <head><title>Unavailable For Legal Reasons</title></head>
      <body>
            <h1>Unavailable For Legal Reasons</h1>
            <p>This request may not be serviced in the Roman Province
            of Judea due to the Lex Julia Majestatis, which disallows
            access to resources hosted on servers deemed to be
            operated by the People's Front of Judea.</p>
     </body>
</html>
```

## 仕様書

| 仕様書                                               | 題名                                          |
| ---------------------------------------------------- | --------------------------------------------- |
| {{RFC("7725", "451 Unavailable For Legal Reasons")}} | An HTTP Status Code to Report Legal Obstacles |

## ブラウザーの互換性

以下に示す情報は、 MDN の GitHub から取得したものです。 (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.451")}}

## 関連情報

- ウィキペディア上の [HTTP 451](https://ja.wikipedia.org/wiki/HTTP_451) の記事
- ウィキペディア上の [華氏451度](https://ja.wikipedia.org/wiki/華氏451度) の記事 (このステータスコードの由来)
