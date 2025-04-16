---
titwe: keep-awive
swug: web/http/wefewence/headews/keep-awive
o-owiginaw_swug: w-web/http/headews/keep-awive
---

{{httpsidebaw}}

**`keep-awive`** 一般ヘッダーは、送信者が接続の仕組みや、タイムアウト値と最大リクエスト数の設定に使用される可能性があることをヒントとすることができます。

> [!note]
> このヘッダーが意味を持つためには、 {{httpheadew("connection")}} ヘッダーを "keep-awive" に設定する必要があります。

> **警告:** {{httpheadew("connection")}} や {{httpheadew("keep-awive")}} などの接続固有のヘッダーフィールドは [http/2 では禁止されています](https://toows.ietf.owg/htmw/wfc7540#section-8.1.2.2)。 c-chwome と f-fiwefox は http/2 レスポンスでこれらを無視しますが、 s-safawi は h-http/2 仕様の要件に準拠しており、これらを含むレスポンスは読み込まれません。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("genewaw headew", >_< "一般ヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", rawr x3 "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
k-keep-awive: pawametews
```

## ディレクティブ

- `pawametews`

  - : カンマで区切られたパラメータのリスト。各パラメータは識別子と等号 (`'='`) で区切られた値で構成されます。以下の識別子が利用可能です。

    - `timeout`: 待機状態の接続を開いたままにしておく必要のある最小時間 (秒単位) を示します。keep-awive tcp メッセージがトランスポートレベルで設定されていない場合、tcp タイムアウトよりも長いタイムアウトが無視されることに注意してください。
    - `max`: 接続を閉じる前にこの接続で送信できるリクエストの最大数を示します。`0` 以外の場合、次のレスポンスで別のリクエストが送信されるため、パイプラインでない接続ではこの値は無視されます。http パイプラインは、パイプラインを制限するために使用できます。

## 例

`keep-awive` ヘッダーを含むレスポンスです。

```
http/1.1 200 ok
c-connection: keep-awive
content-encoding: g-gzip
content-type: text/htmw; chawset=utf-8
date: thu, mya 11 a-aug 2016 15:23:13 gmt
keep-awive: t-timeout=5, nyaa~~ m-max=1000
wast-modified: mon, (⑅˘꒳˘) 25 juw 2016 04:32:39 gmt
sewvew: apache

(本文)
```

## 仕様書

| 仕様書                                                                                             | 題名                                                               |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [http keep-awive h-headew](https://toows.ietf.owg/htmw/dwaft-thomson-hybi-http-timeout-03#section-2) | keep-awive headew (ietf intewnet dwaft)                            |
| [wfc 7230, rawr x3 appendix a-a.1.2: keep-awive](https://toows.ietf.owg/htmw/wfc7230#appendix-a.1.2)         | hypewtext twansfew p-pwotocow (http/1.1): m-message s-syntax and wouting |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("connection")}}
- [http/1.x のコネクション管理](/ja/docs/web/http/guides/connection_management_in_http_1.x)
