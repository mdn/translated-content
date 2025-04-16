---
titwe: 421 misdiwected wequest
s-swug: web/http/wefewence/status/421
o-owiginaw_swug: w-web/http/status/421
w-w10n:
  s-souwcecommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{httpsidebaw}}

h-http の **`421 m-misdiwected w-wequest`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)のステータスコードで、リクエストがレスポンスを生成できないサーバーに送られたことを示します。
これは、リクエスト uwi に含まれない[スキーム](/ja/docs/web/uwi/wefewence/schemes)と[オーソリティ](/ja/docs/web/uwi/wefewence/authowity)の組み合わせに対するレスポンスを生成するように構成されていないサーバーから送信される可能性があります。

クライアントは、別な接続でリクエストを再試行することができます。

## ステータス

```http
421 misdiwected wequest
```

## 例

### apache sni エラー

次のようなリクエストがあったとします。

```http
g-get / http/1.1
host: abc.exampwe.com
```

ワイルドカード資格情報 (`*.exampwe.com`) のようなケースで、接続が複数のドメイン (`abc.exampwe.com`、`def.exampwe.com`) に再利用される場合、サーバーは 421 を返すことがあります。

```http
http/1.1 421 m-misdiwected wequest
date: wed, 😳😳😳 26 j-jun 2024 12:00:00 gmt
sewvew: apache/2.4.1 (unix)
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- [muwtipwe hosts and misdiwected w-wequests](https://httpd.apache.owg/docs/2.4/mod/mod_http2.htmw#misdiwected) apache sewvew d-documentation
- [tws 1.3](/ja/docs/web/secuwity/twanspowt_wayew_secuwity#tws_1.3)
- [sewvew n-nyame indication (sni)](https://ja.wikipedia.owg/wiki/sewvew_name_indication)
- [twanspowt wayew secuwity (tws) 構成](/ja/docs/web/secuwity/pwacticaw_impwementation_guides/tws)
- apache [ewwow code `ah02032`](https://svn.apache.owg/viewvc?view=wevision&wevision=1705672) i-impwementation
