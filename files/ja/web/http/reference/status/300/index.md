---
title: 300 Multiple Choices
slug: Web/HTTP/Reference/Status/300
l10n:
  sourceCommit: 975650c2f6ea843d6f7cbc721aee5dbc1db907b2
---

HTTP の **`300 Multiple Choices`** は[リダイレクトレスポンス](/ja/docs/Web/HTTP/Reference/Status#リダイレクトメッセージ)ステータスコードで、リクエストに対して複数のレスポンスがあることを示します。
ユーザーエージェントやユーザーは、その内から一つを選択します。

> [!NOTE]
> [エージェント駆動型コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation#エージェント駆動型ネゴシエーション)では、サーバーに複数の候補が存在する場合、クライアントとサーバーが共同で指定されたリソースの最適な候補を決定します。
> ほとんどのクライアントは、レスポンスから自動的に選択する手段を持っていません。また、追加の往復通信により、クライアントとサーバーの対話が遅くなります。
> [サーバー駆動型コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation#サーバー駆動型コンテンツネゴシエーション)の方がはるかに広く使用されており、サーバーはリクエストヘッダー（{{HTTPHeader("Accept-Language")}}、{{HTTPHeader("Accept")}} など）に基づいて、クライアントに最も適したリソースを選べます。

サーバーは、ユーザーまたはユーザーエージェントが選択できるリソースメタデータと URI のリストを含むコンテンツをレスポンスに含めるべきです。コンテンツの形式は実装に依存しますが、ユーザーエージェントによって簡単に解析できる形式（HTML や JSON など）であるべきです。

サーバーが推奨する選択肢がある場合は、 {{HTTPHeader("Location")}} ヘッダーを生成してください。

## ステータス

```http
300 Multiple Choices
```

## 例

### リソースのリストがついた 300 レスポンス

次の例は、透過的コンテンツネゴシエーションのリクエストとレスポンスのやり取りを示しています。
Apache サーバーは、[型マップ](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps)で定義されたリソースの複数の版を、入力する言語に応じて、英語のコンテンツには `index.html.en`、フランス語のコンテンツには `index.html.fr` というように提供します。

```http
URI: index.html.en
Content-Language: en

URI: index.html.fr
Content-Language: fr
```

`Negotiate: trans` リクエストヘッダーは、クライアントが TCN を使用してリソースを選べます。
このメカニズムに対応するブラウザーが少ないということは、代わりに curl などのユーザーエージェントが使用されているということになります。

```bash
 curl -v -H "Negotiate: trans" http://localhost/index
```

これは、次のリクエストを生成します。

```http
GET /index HTTP/1.1
Host: localhost
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
```

リクエストされたリソースのさまざまな表現の詳細とともに、 `300` のレスポンスを受け取ります。

```http
HTTP/1.1 300 Multiple Choices
Date: Fri, 30 Aug 2024 09:21:48 GMT
Server: Apache/2.4.59 (Unix)
Alternates: {"index.html.en" 1 {type text/html} {language en} {length 48}}, {"index.html.fr" 1 {type text/html} {language fr} {length 45}}
Vary: negotiate,accept-language
TCN: list
Content-Length: 419
Content-Type: text/html; charset=iso-8859-1

<html><head>
<title>300 Multiple Choices</title>
</head><body>
<h1>Multiple Choices</h1>
Available variants:
<ul>
<li><a href="index.html.en">index.html.en</a> , type text/html, language en</li>
<li><a href="index.html.fr">index.html.fr</a> , type text/html, language fr</li>
</ul>
</body></html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP のリダイレクト](/ja/docs/Web/HTTP/Guides/Redirections)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("301", "301 Moved Permanently")}}
- {{HTTPStatus("302", "302 Found")}} 一時リダイレクト
- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("506", "506 Variant Also Negotiates")}}
- [Apache Server Negotiation Algorithm](https://httpd.apache.org/docs/current/en/content-negotiation.html#algorithm)
- {{RFC("2295", "Transparent Content Negotiation in HTTP")}}
