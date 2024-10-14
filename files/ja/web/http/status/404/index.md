---
title: 404 Not Found
slug: Web/HTTP/Status/404
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

HTTP の **`404 Not Found`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Status#client_error_responses)ステータスコードで、サーバーがリクエストされたリソースを見つけることができないことを示します。
404 ページにつながるリンクは、壊れたリンクまたは死んだリンクと呼ばれ、[リンク切れ](https://ja.wikipedia.org/wiki/リンク切れ)の対象となることがあります。

404 ステータスコードは、そのリソースが見つからないことを示すだけで、リソースが一時的または永続的に失われているかどうかを示してはいません。
リソースが永久に削除された場合は、サーバーは代わりに {{HTTPStatus("410", "410 Gone")}} ステータスを送信すべきです。

ウェブサイトで 404 エラーが発生すると、来訪者の使い勝手が悪くなるため、読者の不満を防ぐためにも、リンク切れ（内部および外部）の数は最小限に抑えるべきです。
404 レスポンスの一般的な原因は、URL の入力ミスや、リダイレクトなしでページが移されたり削除されたりすることです。
詳しい情報は、 [HTTP のリダイレクト](/ja/docs/Web/HTTP/Redirections)ガイドを参照してください。

## ステータス

```http
404 Not Found
```

## 例

### ページが見つからない場合

存在しないページを取得するリクエストは、以下のようになるでしょう。

```http
GET /my-deleted-blog-post HTTP/1.1
Host: example.com
```

サーバーは以下のようなレスポンスを返します。

```http
HTTP/1.1 404 Not Found
Age: 249970
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 28 Jun 2024 11:40:58 GMT
Expires: Fri, 05 Jul 2024 11:40:58 GMT
Last-Modified: Tue, 25 Jun 2024 14:14:48 GMT
Server: ECAcc (nyd/D13E)
Vary: Accept-Encoding
X-Cache: 404-HIT
Content-Length: 1256

<!doctype html>
<head>
    <title>404 not found</title>
    ...
```

## 独自のエラーページ

Apache サーバーでは、`.htaccess` ファイルで独自の 404 ページへのパスを指定することができます。
例えば、下記のように `notfound.html` を 404 ページとして訪問者に表示させることができますが、一般的な手法としては、サーバーの最上位に `404.html` または `404.php`（サーバー側の環境によって異なります）という名前のファイルを作成する方法があります。

```apacheconf
ErrorDocument 404 /notfound.html
```

> [!NOTE]
> 独自の 404 ページをデザインすることは、適度に行うのであれば良いことです。
> 404 ページをユーモアや思いやりのあるものにすることは自由ですが、ユーザーを混乱させないようにしてください。
>
> 独自の 404 ページの例については、この [404 ページ](https://konmari.com/404)を参照してください。

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
- {{HTTPStatus("410")}}
- [HTTP 404](https://ja.wikipedia.org/wiki/HTTP_404)（ウィキペディア）
