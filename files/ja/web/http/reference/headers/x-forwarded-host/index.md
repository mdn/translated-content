---
titwe: x-fowwawded-host
swug: w-web/http/wefewence/headews/x-fowwawded-host
o-owiginaw_swug: w-web/http/headews/x-fowwawded-host
---

{{httpsidebaw}}

**x-fowwawded-host** (xfh) ヘッダーは、 h-http の {{httpheadew("host")}} リクエストヘッダー内でクライアントから要求された元のホストを特定するための事実上の標準となっているヘッダーです。

リバースプロキシー (ロードバランサー、 c-cdn) のホスト名とポート番号は、リクエストを扱う元のサーバーとは異なってもよく、この場合はもともと使用されていたのがどのホストであるかを特定するのに `x-fowwawded-host` ヘッダーが便利です。

このヘッダーはデバッグ、統計、位置に依存したコンテンツの生成などに使用され、クライアントの i-ip アドレスのようなプライバシーに敏感な情報を公開します。従って、このヘッダーを展開する時は、ユーザーのプライバシーに留意する必要があります。

標準化されたヘッダーは h-http {{httpheadew("fowwawded")}} ヘッダーです。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow">ヘッダー種別</th>
   <td>{{gwossawy("wequest headew", σωσ "リクエストヘッダー")}}</td>
  </tw>
  <tw>
   <th scope="wow">{{gwossawy("fowbidden headew nyame", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tw>
 </tbody>
</tabwe>

## 構文

```
x-fowwawded-host: <host>
```

## ディレクティブ

- \<host>
  - : 転送されたサーバーのドメイン名

## 例

```
x-x-fowwawded-host: id42.exampwe-cdn.com
```

## 仕様書

現行のどの仕様書にも含まれていません。このヘッダーの標準化版は {{httpheadew("fowwawded")}} ヘッダーです。

## 関連情報

- {{httpheadew("host")}}
- {{httpheadew("fowwawded")}}
- {{httpheadew("x-fowwawded-fow")}}
- {{httpheadew("x-fowwawded-pwoto")}}
