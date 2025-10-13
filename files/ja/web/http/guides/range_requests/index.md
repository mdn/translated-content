---
title: HTTP 範囲リクエスト
short-title: Range requests
slug: Web/HTTP/Guides/Range_requests
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の範囲リクエスト ({{HTTPHeader("Range")}}) では、サーバーからクライアントに HTTP メッセージの一部のみを送信できます。
範囲リクエストは、ランダムアクセスに対応しているメディアプレーヤー、大きなファイルの一部のみを必要とするデータツール、ダウンロードを一時停止および再開できるダウンロードマネージャーなど、さまざまなクライアントに役立ちます。

## サーバーが部分リクエストに対応しているかどうかの確認

HTTP レスポンスに `none` 以外の値を持つ {{HTTPHeader("Accept-Ranges")}} ヘッダーが含まれている場合、サーバーは範囲リクエストに対応しています。
レスポンスで `Accept-Ranges` ヘッダーが省略されている場合、サーバーは部分リクエストに対応していないことを示しています。
範囲リクエストに対応していない場合、アプリケーションはこの条件に適応することができます。たとえば、ダウンロードマネージャーは、範囲リクエストに依存してダウンロードを再開する一時停止ボタンを無効にすることができます。

サーバーが範囲リクエストに対応しているかどうかを調べるには、リソース全体をリクエストせずにヘッダーを検査する {{HTTPMethod("HEAD")}} リクエストを発行します。
[curl](https://curl.se/) を使用する場合は、`-I` フラグを使用して `HEAD` リクエストを行うことができます。

```bash
curl -I https://i.imgur.com/z4d4kWk.jpg
```

これにより、次の HTTP リクエストが生成されます。

```http
HEAD /z4d4kWk.jpg HTTP/2
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
```

レスポンスにはヘッダーのみが含まれており、レスポンス本体は含まれていません。

```http
HTTP/2 200
content-type: image/jpeg
last-modified: Thu, 02 Feb 2017 11:15:53 GMT
…
accept-ranges: bytes
content-length: 146515
```

このレスポンスの中で、 `Accept-Ranges: bytes` は範囲を定義する単位としてバイト数が使えることを示しています（今のところ、使える他の単位はありません）。
{{HTTPHeader("Content-Length")}} ヘッダーも、`GET` メソッドを使用して同じリクエストを行った場合に、画像の合計サイズを示すので役立ちます。

## サーバーからの特定の範囲のリクエスト

サーバーが範囲リクエストをサポートしている場合、そのリクエストを{{HTTPHeader("Range")}}で発行することができ、それはサーバーが返すべきドキュメントの一部分を指し示しています。

### 単一部分のリクエスト

説明のために、curl を使用してリソースから単一の範囲をリクエストすることができます。
`-H` オプションは、リクエストにヘッダー行を追加します。この例では、最初の 1024 バイトをリクエストする `Range` ヘッダーが追加されます。
最後のオプションは `--output -` で、バイナリ出力を端末に出力することができます。

```bash
curl https://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023" --output -
```

発行されるリクエストは次のようになります。

```http
GET /z4d4kWk.jpg HTTP/2
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
Range: bytes=0-1023
```

サーバーは {{HTTPStatus("206", "206 Partial Content")}} ステータスコードとともに以下のレスポンスを返します。

```http
HTTP/2 206
content-type: image/jpeg
content-length: 1024
content-range: bytes 0-1023/146515
…

(binary content)
```

{{HTTPHeader("Content-Length")}} はここでの場合、要求された範囲の大きさを返します（画像全体の大きさではありません）。
{{HTTPHeader("Content-Range")}} レスポンスヘッダーはこの部分的なメッセージが全体のリソースのうちのどの部分に属しているのかを指し示しています。

### 複数部分のリクエスト

{{HTTPHeader("Range")}} ヘッダーはまた、ドキュメントの複数の範囲を一度に取得する手段も提供しています。それら複数の範囲はカンマで区切ることで指定できます。

```bash
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

サーバーは、下記に示す {{HTTPStatus("206", "206 Partial Content")}} ステータスで応答します。
このレスポンスには、マルチパートのバイト範囲が続くことを示す {{HTTPHeader("Content-Type")}} ヘッダーが含まれています。
境界文字列 (この例では `3d6b6a416f9b5`) は、本体部分を区切ります。各本体部分には、それぞれ独自の `Content-Type` および `Content-Range` フィールドがあります。

```http
HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 282

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 0-50/1270

<!doctype html>
<html lang="en-US">
<head>
    <title>Example Do
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-150/1270

eta http-equiv="Content-type" content="text/html; c
--3d6b6a416f9b5--
```

### 条件付き範囲リクエスト

リソースのさらなる部分に対してリクエストを再開する際、最後にバイト範囲の断片を受け取ったときから、サーバー側で格納されているリソースが変更されていないことを保証する必要があります。

{{HTTPHeader("If-Range")}} HTTP リクエストヘッダーは範囲リクエストに対して条件付けを付与することができます。条件が満たされた場合、範囲リクエストが発行され、サーバーは適切なボディとともに {{HTTPStatus("206")}} `Partial Content` ステータスを返します。もし条件が満たされなかった場合、全てのリソースが {{HTTPStatus("200")}} `OK` ステータスとともに返されます。このヘッダーは {{HTTPHeader("Last-Modified")}} validator あるいは {{HTTPHeader("ETag")}} を伴って用いられます。両方を同時に使うことはありません。

```http
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## 部分的なリクエストのレスポンス

範囲リクエストを用いる際、これに関連した３つのステータスコードが存在します。

- 範囲リクエストが成功した際 {{HTTPStatus("206")}} `Partial Content` ステータスコードがサーバーから返されます。
- 範囲リクエストが元のリソースの境界を越え出た場合 (つまり範囲を示す値がリソースより外にはみ出た場合) 、サーバーは {{HTTPStatus("416")}} `Requested Range Not Satisfiable` ステータスコードを返します。
- 範囲リクエストがサポートされていない場合、サーバーから {{HTTPStatus("200")}} `OK` ステータスコードが返されます。

## チャンク `Transfer-Encoding` との比較

{{HTTPHeader("Transfer-Encoding")}} ヘッダーを用いることでチャンクごとのエンコーディングが可能になります。これは大きいサイズのデータがクライアントに送られ、リクエストが完全に処理されるまでレスポンス全体のサイズが判明しない場合に有用です。サーバーはクライアントに対して、バッファリングも実際の大きさも確かめることなく、即座にデータを送ります。これはレイテンシーの向上に導きます。範囲リクエストとチャンクの使用は共用可能であり、互いに指定されていようといなかろうと気にせず使用することが可能です。

## 関連情報

- 関連するステータスコード {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.
- 関連するヘッダー: {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.
