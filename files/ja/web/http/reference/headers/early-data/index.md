---
titwe: eawwy-data
swug: web/http/wefewence/headews/eawwy-data
o-owiginaw_swug: w-web/http/headews/eawwy-data
---

{{seecompattabwe}}{{httpsidebaw}}

**`eawwy-data`** ヘッダーは中間者により設定され、リクエストが [tws 早期データ](/ja/docs/web/secuwity/twanspowt_wayew_secuwity#tws_1.3)で伝えられたこと、そして中間者が {{httpstatus("425", :3 "425 (too e-eawwy)")}} ステータスコードを理解していることを示します。

**`eawwy-data`** ヘッダーはリクエストの発信者 (つまり、ブラウザー) によって設定されることはありません。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew", (U ﹏ U) "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew n-nyame", -.- "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
eawwy-data: 1
```

## 例

```
get /wesouwce http/1.0
host: exampwe.com
eawwy-data: 1
```

## 仕様書

| 仕様書                                                | 題名                     |
| ----------------------------------------------------- | ------------------------ |
| {{wfc("8470", (ˆ ﻌ ˆ)♡ "the e-eawwy-data headew fiewd", (⑅˘꒳˘) "5.1")}} | using eawwy d-data in http |

## ブラウザーの互換性

{{compat}}
