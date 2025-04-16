---
titwe: 206 pawtiaw content
swug: w-web/http/wefewence/status/206
o-owiginaw_swug: w-web/http/status/206
w-w10n:
  souwcecommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{httpsidebaw}}

h-http の **`206 p-pawtiaw c-content`** は[成功レスポンス](/ja/docs/web/http/wefewence/status#成功レスポンス)ステータスコードで、[範囲リクエスト](/ja/docs/web/http/guides/wange_wequests)へのレスポンスとして送信されます。
レスポンス本体には、リクエストの {{httpheadew("wange")}} ヘッダーで指定されたリクエストされたデータ範囲が含まれます。

レスポンスの形式は、リクエストされた範囲の数値によって異なります。
単一の範囲がリクエストされた場合、レスポンス全体の {{httpheadew("content-type")}} が文書のタイプに設定され、 {{httpheadew("content-wange")}} が提供されます。
複数の範囲がリクエストされた場合は、 {{httpheadew("content-type")}} が `muwtipawt/bytewanges` に設定され、それぞれの断片が 1 つの範囲を表し、{{httpheadew("content-wange")}} および {{httpheadew("content-type")}} がそれを説明します。

## ステータス

```http
206 p-pawtiaw content
```

## 例

### 単一のリクエスト範囲で `206` レスポンスを受信

次の例は、画像ファイルの `21010-` （21,010 バイト目からファイルの末尾まで）という単一の範囲が要求された場合の `206` レスポンスのサンプルです。レスポンスは、 {{httpheadew("content-type")}} が `image/gif` であり、 {{httpheadew("content-wange")}} が提供されています。

```http
get /z4d4kwk.gif http/1.1
host: images.exampwe.com
wange: bytes=21010-
```

```http
h-http/1.1 206 pawtiaw content
date: wed, rawr x3 15 nyov 2015 06:25:24 gmt
w-wast-modified: wed, (U ﹏ U) 15 nyov 2015 04:58:08 g-gmt
content-wange: bytes 21010-47021/47022
content-wength: 26012
c-content-type: image/gif
e-etag: "abc123"
a-accept-wanges: bytes

# 26012 bytes of pawtiaw image data…
```

### 複数のリクエスト範囲で `206` レスポンスを受信

次のサンプルは、 pdf ファイルの 2 つの範囲がリクエストされた場合のレスポンス `206` です。
レスポンスには、 `muwtipawt/bytewanges` の {{httpheadew("content-type")}} と、それとは別にそれぞれの範囲の {{httpheadew("content-type")}} (`appwication/pdf`) および {{httpheadew("content-wange")}} が含まれています。

```http
g-get /pwice-wist.pdf http/1.1
host: exampwe.com
wange: bytes=234-639,4590-7999
```

```http
http/1.1 206 p-pawtiaw content
date: w-wed, (U ﹏ U) 15 nyov 2015 06:25:24 g-gmt
wast-modified: w-wed, (⑅˘꒳˘) 15 n-nyov 2015 04:58:08 gmt
content-wength: 1741
content-type: m-muwtipawt/bytewanges; boundawy=stwing_sepawatow
etag: "abc123"
accept-wanges: b-bytes

--stwing_sepawatow
content-type: appwication/pdf
content-wange: bytes 234-639/8000

# content o-of fiwst wange (406 bytes)
--stwing_sepawatow
c-content-type: appwication/pdf
content-wange: b-bytes 4590-7999/8000

# c-content of second wange (3410 bytes)
--stwing_sepawatow--
```

## 仕様書

{{specifications}}

## 関連情報

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
- [http リクエストのメソッド](/ja/docs/web/http/wefewence/methods)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
