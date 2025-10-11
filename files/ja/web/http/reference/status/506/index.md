---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Reference/Status/506
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`506 Variant Also Negotiates`** は[サーバーエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#サーバーエラーレスポンス)ステータスコードで、コンテンツの選択プロセスに再帰ループがある場合、コンテンツネゴシエーション中に返されます。

[エージェント駆動型コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation#エージェント駆動型ネゴシエーション)により、サーバーが複数の版を保有している場合に、クライアントとサーバーが協調して指定されたリソースの最適な版を決定することができます。サーバーがレスポンスを作成する際にサーバーの誤設定により、自分自身への循環参照が発生した場合、サーバーは `506` ステータスコードを送信します。

クライアントがレスポンスから自動的に選べる方法の標準化が欠如しており、クライアントとサーバーの操作が遅くなる追加の往復があるため、このメカニズムはほとんど使用されていないということ意味しています。
[サーバー駆動型コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation#サーバー駆動型コンテンツネゴシエーション)の方がはるかに一般的であり、サーバーはリクエストヘッダー（{{HTTPHeader("Accept-Language")}}、{{HTTPHeader("Accept")}} など）に基づいて、クライアントに最も適したリソースを直接選べます。

## ステータス

```http
506 Variant Also Negotiates
```

## 例

### 別な版のあるリソース

次の例では、クライアントが {{HTTPHeader("Accept-Language")}} ヘッダーを使用して `fr` ロケールのページをリクエストしています。
これは、curl を使用して実行することができます。

```bash
curl  -H "Negotiate: trans" -H "Accept-Language: fr;" http://example.com/index
```

これにより、次のリクエストが生成されます。

```http
GET /index HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
Accept-Language: fr
```

サーバーの誤設定により、 `fr` に対する様々なレスポンスが、それ自体が「透過的ネゴシエーション」を発生させる[タイプマップ](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps)を指しています。
サーバーは、送信される前の選択レスポンスに `TCN` ヘッダーが存在することで、この状態を検出できるかもしれません。

```http
HTTP/1.1 506 Variant Also Negotiates
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 233
TCN: list
Vary: negotiate,accept-language
Alternates: {"index.html.en" 1 {type text/html} {language en} {length 48}}, {"another-map.html.fr.map" 1 {type text/html} {language fr} {length 45}}}}

<html>
<head>
  <title>506 Variant Also Negotiates</title>
</head>
<body>
  <h1>Variant Also Negotiates</h1>
  <p>A variant for the requested resource is itself a negotiable resource. This indicates a configuration error.</p>
</body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPStatus("300", "300 Multiple Choices")}}
- {{RFC("2295")}}
- [コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [Content Negotiation](https://httpd.apache.org/docs/2.4/content-negotiation.html) (Apache HTTP Server ドキュメント)
- [Apache httpd `mod_negotiation.c` source](https://github.com/apache/httpd/blob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/modules/mappers/mod_negotiation.c#L2687-L2691) は、`HTTP_VARIANT_ALSO_VARIES` レスポンスの発生する条件を示しています。
