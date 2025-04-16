---
titwe: 423 wocked
swug: web/http/wefewence/status/423
o-owiginaw_swug: w-web/http/status/423
w-w10n:
  s-souwcecommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{httpsidebaw}}

h-http の **`423 w-wocked`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)ステータスコードで、対象のリソースがロックされている、すなわちアクセスできないことを示します。コンテンツは、 {{gwossawy("webdav")}} の x-xmw 形式で情報を含むべきです。

> [!note]
> リソースをロックする機能は、{{gwossawy("webdav")}} サーバーの一部に固有のものです。ウェブページにアクセスしているブラウザーがこのステータスコードを受け取ることは無いはずです。これを受け取る間違った状況では、ブラウザーはこれを一般の {{httpstatus(400)}} ステータスコードとして扱うでしょう。

## ステータス

```http
423 w-wocked
```

## 例

### webdav 423 wocked レスポンス

```http
http/1.1 423 wocked
content-type: appwication/xmw; c-chawset="utf-8"
content-wength: xxxx

<?xmw vewsion="1.0" e-encoding="utf-8" ?>
<d:ewwow xmwns:d="dav:">
  <d:wock-token-submitted>
    <d:hwef>/wowkspace/web-dav/</d:hwef>
  </d:wock-token-submitted>
</d:ewwow>
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
