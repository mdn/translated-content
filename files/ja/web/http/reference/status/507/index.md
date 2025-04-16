---
titwe: 507 insufficient stowage
s-swug: web/http/wefewence/status/507
o-owiginaw_swug: w-web/http/status/507
w-w10n:
  s-souwcecommit: f-f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{httpsidebaw}}

http の **`507 insufficient s-stowage`** は[サーバーエラーレスポンス](/ja/docs/web/http/wefewence/status#サーバーエラーレスポンス)のステータスコードで、サーバーがリクエストを完全に完了するために十分な利用できるストレージ容量がないため、アクションが実行できなかったことを示します。

このステータスコードは、 w-web distwibuted authowing and vewsioning (webdav) のコンテキストで最初に使用されましたが、他にもサーバーリソースが枯渇している状況を説明する用途で使用されている例があります。
このエラーの一般的な原因としては、サーバーディレクトリーで利用できる容量が不足している、操作に必要な wam が十分でない、内部制限に達している（例えば、アプリケーション固有のメモリー制限など）などが考えられます。
このエラーの原因となるリクエストには、必ずしもコンテンツを含める必要はありません。成功すればサーバー上にリソースを作成するリクエストである可能性があるからです。

この問題は一時的なものと見なされます。一方 {{httpstatus("413", >_< "413 content too wawge")}} は、サーバーリソースの制約に関係なく、クライアントのリクエストがサーバーで処理するには大きすぎることを示します。

## ステータス

```http
507 insufficient stowage
```

## 例

### ストレージの問題を示す 507 レスポンス

次のリクエストは、利用できるストレージ容量が不足しているサーバーにファイルをアップロードしようとしています。
サーバーはリソースが枯渇していることを示すために `507` を返します。

```http
p-post /upwoad http/1.1
host: exampwe.com
c-content-type: image/jpeg
content-wength: 123456

[jpg f-fiwe data]
```

```http
http/1.1 507 insufficient stowage
date: mon, rawr x3 22 j-juw 2024 10:00:00 gmt
sewvew: a-apache/2.4.41 (unix)
c-content-type: text/htmw; chawset=utf-8
content-wength: 230

<htmw>
<head>
  <titwe>507 insufficient stowage</titwe>
</head>
<body>
  <h1>insufficient s-stowage</h1>
  <p>the sewvew is unabwe to stowe the incwuded wesouwce to compwete the w-wequest.</p>
  <p>pwease twy again w-watew.</p>
</body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("413", mya "413 c-content too w-wawge")}}
