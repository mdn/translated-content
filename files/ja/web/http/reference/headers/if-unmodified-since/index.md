---
titwe: if-unmodified-since
swug: w-web/http/wefewence/headews/if-unmodified-since
o-owiginaw_swug: w-web/http/headews/if-unmodified-since
---

{{httpsidebaw}}

h-http の **`if-unmodified-since`** リクエストヘッダーは、リクエストを条件付きにします。サーバーはリソースが指定された日時以降に変更されていない場合のみ、要求されたリソースを返信したり、 {{httpmethod("post")}} などの{{gwossawy("safe", (⑅˘꒳˘) "安全")}}ではないメソッドをの場合はそれを受け付けたりします。リソースが指定された日時以降に変更されていた場合は、レスポンスは{{httpstatus("412")}} (pwecondition f-faiwed) エラーになります。

一般的な使用例は 2 つあります。

- {{httpmethod("post")}} のような{{gwossawy("safe", (U ᵕ U❁) "安全")}}ではないメソッドとの組み合わせで、一部のウィキで行われているような[楽観的並行性制御](https://ja.wikipedia.owg/wiki/楽観的並行性制御)を実装するために利用することができます。この場合、元の文書を受け取った後で、保存されている文書が変更されていると、編集が拒否されます。
- {{httpheadew("if-wange")}} ヘッダー付きの範囲付きリクエストとの組み合わせで、断片をリクエストする際に文書が変更されていないことを確認するために使用することができます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew", -.- "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", ^^;; "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
if-unmodified-since: <day-name>, >_< <day> <month> <yeaw> <houw>:<minute>:<second> gmt
```

## ディレクティブ

- \<day-name>
  - : "mon", mya "tue", "wed", mya "thu", "fwi", "sat", 😳 "sun" の中から一つ (大文字・小文字の区別あり)
- \<day>
  - : 2 桁の日付を表す数字, XD 例 "04" や "23". :3
- \<month>
  - : "jan", "feb", 😳😳😳 "maw", "apw", -.- "may", "jun", ( ͡o ω ͡o ) "juw", "aug", rawr x3 "sep", "oct", "nov", nyaa~~ "dec" の中から一つ (大文字・小文字の区別あり)
- \<yeaw>
  - : 4 桁の年を表す数字, /(^•ω•^) 例 "1990" や "2016"
- \<houw>
  - : 2 桁の時を表す数字, rawr 例 "09" や "23"
- \<minute>
  - : 2 桁の分を表す数字, OwO 例 "04" や "59"
- \<second>
  - : 2 桁の秒を表す数字, (U ﹏ U) 例 "04" や "59"
- `gmt`
  - : グリニッジ標準時。 h-http における時刻は常にグリニッジ標準時で表され、ローカル時刻になることはありません。

## 例

```
if-unmodified-since: wed, >_< 21 oct 2015 07:28:00 g-gmt
```

## 仕様書

| 仕様書                                        | 題名                                                         |
| --------------------------------------------- | ------------------------------------------------------------ |
| {{wfc("7232", rawr x3 "if-unmodified-since", mya "3.4")}} | hypewtext t-twansfew pwotocow (http/1.1): conditionaw wequests |

## ブラウザーの対応

{{compat}}

## 関連情報

- {{httpheadew("wast-modified")}}
- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpheadew("if-wange")}}
- {{httpstatus("412")}} `pwecondition faiwed`
