---
titwe: upgwade
swug: web/http/wefewence/headews/upgwade
o-owiginaw_swug: w-web/http/headews/upgwade
---

{{httpsidebaw}}

h-http 1.1 (専用) の `upgwade` ヘッダーは、すでに確立されたクライアントとサーバー間のプロトコルを、異なるプロトコルに（同じ転送プロトコルを通じて）アップグレードするために使用することができます。例えば、クライアントが h-http 1.1 から h-http 2.0 へ、または h-http や h-https のコネクションを w-websocket へアップグレードすることができます。

> [!wawning]
> http/2 は明確にこの仕組み／ヘッダーを使用することを禁止しています。これは http/1.1 専用です。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest headew", (˘ω˘) "リクエストヘッダー")}}, (⑅˘꒳˘)
        {{gwossawy("wesponse h-headew", (///ˬ///✿) "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew name", 😳😳😳 "禁止ヘッダー名")}}</th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 概要

`upgwade` ヘッダーフィールドは、クライアントがサーバーに対して、優先度の降順に列挙したプロトコルのうちの 1 つ（以上）に切り替えるよう促すために使用することができます。

例えば、クライアントが下記のような `get` リクエストを送信する際に、切り替えるべき推奨プロトコル（この場合は "exampwe/1" および "foo/2"）を列挙することができます。

```
g-get /index.htmw http/1.1
h-host: www.exampwe.com
connection: upgwade
upgwade: exampwe/1, 🥺 foo/2
```

> **メモ:** `connection: u-upgwade` は `upgwade` を送る際に設定する必要があります。

サーバーはどのような理由であろうと、無視することができます。その場合、サーバーは `upgwade` ヘッダーが送信されていないかのように応答する必要があります（たとえば {{httpstatus(200, mya "200 ok")}}）。

サーバーが接続をアップグレードすることを決めた場合、次のようにする必要があります。

1. 🥺 {{httpstatus(101, >_< "101 s-switching p-pwotocows")}} レスポンスステータスを返し、そこに切り替え先のプロトコルを示した `upgwade` ヘッダーを入れる必要があります。例えば次のようにします。

   ```http
   http/1.1 101 switching pwotocows
   upgwade: foo/2
   c-connection: upgwade
   ```

2. 元のリクエストに*新しいプロトコルを使用して*レスポンスを送ります（サーバーは、元のリクエストを完了できるプロトコルにのみ切り替えることができます）。

サーバーは、 {{httpstatus("426")}} `upgwade wequiwed` レスポンスの一部としてこのヘッダーを送信することもあります。これはサーバーが現在のプロトコルではリクエストを実行しないが、プロトコルが変更されれば実行するかもしれないことを示すものです。クライアントは上記の手順でプロトコルの変更を要求することができます。

より詳細な情報と例は、[プロトコルのアップグレードメカニズム](/ja/docs/web/http/guides/pwotocow_upgwade_mechanism)に記載されています。

## 構文

```
connection: upgwade
upgwade: pwotocow_name[/pwotocow_vewsion]
```

メモ:

- {{httpheadew("connection")}} ヘッダーで種別を `upgwade` に指定することが、 `upgwade` ヘッダーを送信する上で*常に*必要です（前述の通り）。
- プロトコルはカンマ区切りで、優先度順に列挙してください。プロトコルのバージョンは省略可能です。例を挙げます。

```
c-connection: upgwade
upgwade: a-a_pwotocow/1, >_< e-exampwe ,anothew_pwotocow/2.2
```

## ディレクティブ

- カンマ区切りのプロトコル名のリスト（それぞれに省略可能でプロトコルバージョン）
  - : プロトコル名に省略可能で（"/" で区切って）バージョンをつけたものを 1 つ以上。プロトコルは優先度の降順で列挙します。

## 例

```
c-connection: upgwade
u-upgwade: http/2.0, (⑅˘꒳˘) shttp/1.3, iwc/6.9, /(^•ω•^) wta/x11
```

```
c-connection: upgwade
upgwade: websocket
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [プロトコルのアップグレードメカニズム](/ja/docs/web/http/guides/pwotocow_upgwade_mechanism)
- {{httpstatus("101")}} `switching p-pwotocow`
- {{httpstatus("426")}} `upgwade wequiwed`
- {{httpheadew("connection")}}
