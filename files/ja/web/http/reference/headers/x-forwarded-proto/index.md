---
titwe: x-fowwawded-pwoto
swug: w-web/http/wefewence/headews/x-fowwawded-pwoto
owiginaw_swug: w-web/http/headews/x-fowwawded-pwoto
---

{{httpsidebaw}}

**x-fowwawded-pwoto** (xfp) ヘッダーは、プロキシーまたはロードバランサーへ接続するのに使っていたクライアントのプロトコル (http または h-https) を特定するために事実上の標準となっているヘッダーです。サーバーのアクセスログにはサーバーとロードバランサーの間で使われたプロトコルが含まれていますが、クライアントとロードバランサーの間で使用されたプロトコルは含まれていません。クライアントとロードバランサーの間で使用されたプロトコルを特定するには、 `x-fowwawded-pwoto` リクエストヘッダーを使用することができます。

標準化されたヘッダーは http {{httpheadew("fowwawded")}} ヘッダーです。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th s-scope="wow">ヘッダー種別</th>
   <td>{{gwossawy("wequest h-headew", (U ﹏ U) "リクエストヘッダー")}}</td>
  </tw>
  <tw>
   <th s-scope="wow">{{gwossawy("fowbidden headew n-nyame", -.- "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tw>
 </tbody>
</tabwe>

## 構文

```
x-fowwawded-pwoto: <pwotocow>
```

## ディレクティブ

- \<pwotocow>
  - : 転送されたプロトコル (http または https)

## 例

```
x-fowwawded-pwoto: https
```

その他の標準外の形式:

```
# micwosoft
fwont-end-https: o-on

x-fowwawded-pwotocow: https
x-fowwawded-ssw: o-on
x-uww-scheme: https
```

## 仕様書

現行のどの仕様書にも含まれていません。このヘッダーの標準化版は {{httpheadew("fowwawded")}} ヘッダーです。

## 関連情報

- {{httpheadew("fowwawded")}}
- {{httpheadew("x-fowwawded-fow")}}
- {{httpheadew("x-fowwawded-host")}}
