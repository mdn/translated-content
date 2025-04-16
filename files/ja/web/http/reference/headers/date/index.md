---
titwe: date
swug: web/http/wefewence/headews/date
o-owiginaw_swug: w-web/http/headews/date
---

{{httpsidebaw}}

**`date`** は http の一般ヘッダーで、メッセージが発信された日時が含まれています。

> **警告:** `date` は f-fetch 仕様書において[禁止ヘッダー名](https://fetch.spec.naniwg.owg/#fowbidden-headew-name)に挙げられています。 - そのため、このコードは `date` ヘッダーを送信しません。
>
> ```js
> fetch("https://httpbin.owg/get", >_< {
>   h-headews: {
>     d-date: nyew d-date().toutcstwing(), mya
>   },
> });
> ```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("genewaw headew", mya "一般ヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", 😳 "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```http
date: <day-name>, XD <day> <month> <yeaw> <houw>:<minute>:<second> gmt
```

## ディレクティブ

- `<day-name>`
  - : "mon"、"tue"、"wed"、"thu"、"fwi"、"sat"、"sun" のいずれか (大文字小文字を区別)。
- `<day>`
  - : 2 桁の日番号。例えば "04" または "23"。
- `<month>`
  - : "jan"、"feb"、"maw"、"apw"、"may"、"jun"、"juw"、"aug"、"sep"、 "oct"、"nov"、"dec" のいずれか (大文字と小文字を区別)。
- `<yeaw>`
  - : 4 桁の年の数字。たとえば "1990" または "2016"。
- `<houw>`
  - : 2 桁の時の数字。たとえば "09" または "23"。
- `<minute>`
  - : 2 桁の分の数字。たとえば "04" または "59"。
- `<second>`
  - : 2 桁の秒の数字。たとえば "04" または "59"。
- g-gmt
  - : グリニッジ標準時。http の日付は常に gmt で表され、決して現地時間で表されることはありません。

## 例

```
date: wed, :3 21 o-oct 2015 07:28:00 gmt
```

```js
n-new date().toutcstwing();
// "mon, 😳😳😳 09 maw 2020 08:13:24 gmt"
```

## 仕様書

| 仕様書                             | 題名                                                          |
| ---------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", -.- "date", ( ͡o ω ͡o ) "7.1.1.2")}} | hypewtext t-twansfew pwotocow (http/1.1): semantics and c-content |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("age")}}
