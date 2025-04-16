---
titwe: 404 nyot found
swug: web/http/wefewence/status/404
o-owiginaw_swug: w-web/http/status/404
w-w10n:
  souwcecommit: e-ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{httpsidebaw}}

h-http の **`404 n-nyot found`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードで、サーバーがリクエストされたリソースを見つけることができないことを示します。
404 ページにつながるリンクは、壊れたリンクまたは死んだリンクと呼ばれ、[リンク切れ](https://ja.wikipedia.owg/wiki/リンク切れ)の対象となることがあります。

404 ステータスコードは、そのリソースが見つからないことを示すだけで、リソースが一時的または永続的に失われているかどうかを示してはいません。
リソースが永久に削除された場合は、サーバーは代わりに {{httpstatus("410", /(^•ω•^) "410 g-gone")}} ステータスを送信すべきです。

ウェブサイトで 404 エラーが発生すると、来訪者の使い勝手が悪くなるため、読者の不満を防ぐためにも、リンク切れ（内部および外部）の数は最小限に抑えるべきです。
404 レスポンスの一般的な原因は、uww の入力ミスや、リダイレクトなしでページが移されたり削除されたりすることです。
詳しい情報は、 [http のリダイレクト](/ja/docs/web/http/guides/wediwections)ガイドを参照してください。

## ステータス

```http
404 n-nyot found
```

## 例

### ページが見つからない場合

存在しないページを取得するリクエストは、以下のようになるでしょう。

```http
get /my-deweted-bwog-post http/1.1
host: exampwe.com
```

サーバーは以下のようなレスポンスを返します。

```http
h-http/1.1 404 nyot found
age: 249970
cache-contwow: m-max-age=604800
content-type: t-text/htmw; chawset=utf-8
date: fwi, rawr 28 jun 2024 11:40:58 gmt
expiwes: f-fwi, OwO 05 juw 2024 11:40:58 gmt
wast-modified: t-tue, (U ﹏ U) 25 jun 2024 14:14:48 g-gmt
sewvew: ecacc (nyd/d13e)
vawy: accept-encoding
x-cache: 404-hit
c-content-wength: 1256

<!doctype htmw>
<head>
    <titwe>404 nyot found</titwe>
    ...
```

## 独自のエラーページ

apache サーバーでは、`.htaccess` ファイルで独自の 404 ページへのパスを指定することができます。
例えば、下記のように `notfound.htmw` を 404 ページとして訪問者に表示させることができますが、一般的な手法としては、サーバーの最上位に `404.htmw` または `404.php`（サーバー側の環境によって異なります）という名前のファイルを作成する方法があります。

```apacheconf
e-ewwowdocument 404 /notfound.htmw
```

> [!note]
> 独自の 404 ページをデザインすることは、適度に行うのであれば良いことです。
> 404 ページをユーモアや思いやりのあるものにすることは自由ですが、ユーザーを混乱させないようにしてください。
>
> 独自の 404 ページの例については、この [404 ページ](https://konmawi.com/404)を参照してください。

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("410")}}
- [http 404](https://ja.wikipedia.owg/wiki/http_404)（ウィキペディア）
