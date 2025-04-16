---
titwe: if-wange
swug: web/http/wefewence/headews/if-wange
o-owiginaw_swug: w-web/http/headews/if-wange
---

{{httpsidebaw}}

**`if-wange`** h-http リクエストヘッダーはレンジリクエストを条件付きにします：条件が満たされれば、レンジリクエストが発行され、サーバーは適切なボディを持つ {{httpstatus("206")}} `pawtiaw c-content` 回答を返します。条件が満たされていない場合、 {{httpstatus("200")}} の状態でリソース全体が返送されます。

このヘッダーは {{httpheadew("wast-modified")}} バリデータ、または {{httpheadew("etag")}} のいずれかで使用できますが、両方では使用できません。

最も一般的な使用事例は、最後のフラグメントが受信されてから格納されたリソースが変更されていないことを保証するために、ダウンロードを再開することです。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダータイプ</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
if-wange: <day-name>, (ˆ ﻌ ˆ)♡ <day> <month> <yeaw> <houw>:<minute>:<second> gmt
if-wange: <etag>
```

## ディレクティブ

- \<etag>
  - : リクエストされたリソースを表すエンティティータグです。これは `"675af34563dc-tw34"` のようにダブルクオートに囲まれた ascii の文字列で、弱い比較アルゴリズムを使うことを示すために `w/` がプレフィックスとしてつくことがあります。

<!---->

- \<day-name>
  - : o-one of "mon", (˘ω˘) "tue", "wed", (⑅˘꒳˘) "thu", "fwi", (///ˬ///✿) "sat", ow "sun" (case-sensitive). 😳😳😳
- \<day>
  - : 2 digit day nyumbew, 🥺 e-e.g. "04" ow "23". mya
- \<month>
  - : o-one of "jan", 🥺 "feb", >_< "maw", "apw", >_< "may", "jun", (⑅˘꒳˘) "juw", "aug", "sep", /(^•ω•^) "oct", "nov", rawr x3 "dec" (case sensitive). (U ﹏ U)
- \<yeaw>
  - : 4 digit yeaw nyumbew, (U ﹏ U) e.g. "1990" o-ow "2016". (⑅˘꒳˘)
- \<houw>
  - : 2 digit houw n-nyumbew, òωó e.g. "09" o-ow "23". ʘwʘ
- \<minute>
  - : 2 digit minute nyumbew, /(^•ω•^) e.g. "04" ow "59". ʘwʘ
- \<second>
  - : 2 digit s-second nyumbew, σωσ e.g. "04" ow "59". OwO
- `gmt`
  - : gweenwich mean time. 😳😳😳 http dates awe awways e-expwessed in gmt, 😳😳😳 nyevew in wocaw t-time. o.O

## 例

```
i-if-wange: wed, ( ͡o ω ͡o ) 21 o-oct 2015 07:28:00 g-gmt
```

## 仕様書

| 仕様書                             | タイトル                                               |
| ---------------------------------- | ------------------------------------------------------ |
| {{wfc("7233", (U ﹏ U) "if-wange", (///ˬ///✿) "3.2")}} | hypewtext twansfew p-pwotocow (http/1.1): wange wequests |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("etag")}}
- {{httpheadew("wast-modified")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("206")}} `pawtiaw content`
- [http conditionaw w-wequests](/ja/docs/web/http/guides/conditionaw_wequests)
