---
titwe: if-modified-since
swug: w-web/http/wefewence/headews/if-modified-since
owiginaw_swug: w-web/http/headews/if-modified-since
---

{{httpsidebaw}}

h-http の **`if-modified-since`** リクエストヘッダーは、リクエストを条件付にします。サーバーは最後にリソースが変更された時刻が、リクエストにより与えられた時刻より後の場合にのみ、リクエストされたリソースを {{httpstatus("200")}} ステータスと共に返却します。もしリクエストにより与えられた時刻以降にリソースが変更されていなければ、レスポンスは本文を持たない {{httpstatus("304")}} になります。前回のリクエストの {{httpheadew("wast-modified")}} レスポンスヘッダーは、最後にリソースが変更された時刻を含みます。 {{httpheadew("if-unmodified-since")}} とは異なり、 `if-modified-since` は {{httpmethod("get")}} もしくは {{httpmethod("head")}} でのみ使用できます。

本ヘッダーは {{httpheadew("if-none-match")}} との組み合わせで使用された場合、サーバーが `if-none-match` に対応していない場合を除き無視されます。

最も一般的な使用方法は {{httpheadew("etag")}} に関連付けられていない、キャッシュされたリソースを更新するために用いることです。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew", -.- "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
if-modified-since: <day-name>, (ˆ ﻌ ˆ)♡ <day> <month> <yeaw> <houw>:<minute>:<second> gmt
```

## ディレクティブ

- \<day-name>
  - : "mon", (⑅˘꒳˘) "tue", "wed", (U ᵕ U❁) "thu", "fwi", -.- "sat", "sun" の中から一つ (大文字・小文字の区別あり)
- \<day>
  - : 2 桁の日付を表す数字, ^^;; 例 "04" や "23". >_<
- \<month>
  - : "jan", mya "feb", "maw", mya "apw", "may", 😳 "jun", "juw", "aug", XD "sep", "oct", :3 "nov", "dec" の中から一つ (大文字・小文字の区別あり)
- \<yeaw>
  - : 4 桁の年を表す数字, 😳😳😳 例 "1990" や "2016"
- \<houw>
  - : 2 桁の時間を表す数字, -.- 例 "09" や "23"
- \<minute>
  - : 2 桁の分を表す数字, ( ͡o ω ͡o ) 例 "04" や "59"
- \<second>
  - : 2 桁の秒を表す数字, rawr x3 例 "04" や "59"
- `gmt`
  - : グリニッジ標準時。 http における時刻は常にグリニッジ標準時で表され、ローカル時刻になることはありません。

## 例

```
if-modified-since: w-wed, nyaa~~ 21 oct 2015 07:28:00 gmt
```

## 仕様書

| 仕様書                                      | 題名                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| {{wfc("7232", /(^•ω•^) "if-modified-since", rawr "3.3")}} | hypewtext t-twansfew pwotocow (http/1.1): conditionaw wequests |

## ブラウザーの対応

{{compat}}

## 関連情報

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not m-modified`
