---
title: HTTP 範囲リクエスト
slug: Web/HTTP/Range_requests
---

{{HTTPSidebar}}

HTTP 範囲リクエストでは、サーバーからクライアントに HTTP メッセージの一部のみを送信できます。部分リクエストは、たとえば、大きなメディアや、一時停止や再開機能を持つファイルのダウンロードに役立ちます。

## サーバーが部分リクエストに対応しているかどうかの確認

{{HTTPHeader("Accept-Ranges")}} が HTTP レスポンスに存在した場合 (そして値が "`none`" ではない場合)、サーバーは範囲リクエストに対応しています。これは例えば、 {{HTTPMethod("HEAD")}} リクエストを cURL で発行することで確認することができます。

```
curl -I http://i.imgur.com/z4d4kWk.jpg

HTTP/1.1 200 OK
...
Accept-Ranges: bytes
Content-Length: 146515
```

このレスポンスの中で、 `Accept-Ranges: bytes` は範囲を定義する単位としてバイト数が使えることを示しています。ここで {{HTTPHeader("Content-Length")}} ヘッダーも受け取る画像の全体の長さを示すので有用です。

サイトが `Accept-Ranges` ヘッダーを省略した場合は、おそらく部分リクエストに対応していません。サイトによっては値として明示的に "`none`" を送信して、対応がないことを示すこともあります。アプリによっては、このような場合にダウンロードマネージャーが一時停止ボタンを無効化します。

```
curl -I https://www.youtube.com/watch?v=EwTZ2xpQwpA

HTTP/1.1 200 OK
...
Accept-Ranges: none
```

## サーバーからの特定の範囲のリクエスト

サーバーが範囲リクエストをサポートしている場合、そのリクエストを{{HTTPHeader("Range")}}で発行することができ、それはサーバーが返すべきドキュメントの一部分を指し示しています。

### 単一部分のリクエスト

リソースから単一の範囲を要求することが可能です。ここで再び、cURL を用いてこれを検証することができます。"`-H`"オプションはリクエストに対して、この場合、最初の 1024 バイトを要求する`Range` ヘッダーラインを付け加えることができます。

```
curl http://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023"
```

発行されるリクエストは次のようになります:

```
GET /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
Range: bytes=0-1023
```

サーバーは {{HTTPStatus("206")}} `Partial Content` ステータスコードとともに以下のレスポンスを返します:

```
HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/146515
Content-Length: 1024
...
(binary content)
```

{{HTTPHeader("Content-Length")}} はここでの場合、要求された範囲の大きさを返します(画像全体の大きさではありません)。 {{HTTPHeader("Content-Range")}} レスポンスヘッダーはこの部分的なメッセージが全体のリソースのうちのどの部分に属しているのかを指し示しています。

### 複数部分のリクエスト

{{HTTPHeader("Range")}} ヘッダーはまた、ドキュメントの複数の範囲を一度に取得する手段も提供しています。それら複数の範囲はカンマで区切ることで指定できます。

```
curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"
```

サーバーは {{HTTPStatus("206")}} `Partial Content` ステータスコードと {{HTTPHeader("Content-Type")}}`: multipart/byteranges; boundary=3d6b6a416f9b5` ヘッダを伴ってレスポンスを返し、そこでは指定した複数のバイト範囲に関するデータが後ろに続いていることがわかります。 各々のバイト範囲において対応する `Content-Type` と `Content-Range` ヘッダーフィールドが含まれており、それぞれのボディ部分を区切るための境界文字列が境界パラメーターによって指定されています。

```
HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 282

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 0-50/1270

<!doctype html>
<html>
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

{{HTTPHeader("If-Range")}} HTTP リクエストヘッダは範囲リクエストに対して条件付けを付与することができます。条件が満たされた場合、範囲リクエストが発行され、サーバーは適切なボディとともに {{HTTPStatus("206")}} `Partial Content` ステータスを返します。もし条件が満たされなかった場合、全てのリソースが {{HTTPStatus("200")}} `OK` ステータスとともに返されます。このヘッダは {{HTTPHeader("Last-Modified")}} validator あるいは {{HTTPHeader("ETag")}} を伴って用いられます。両方を同時に使うことはありません。

```
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
- [Download resumption in Internet Explorer](https://blogs.msdn.microsoft.com/ieinternals/2011/06/03/download-resumption-in-internet-explorer/)
