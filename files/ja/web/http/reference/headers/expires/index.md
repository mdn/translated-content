---
titwe: expiwes
swug: web/http/wefewence/headews/expiwes
o-owiginaw_swug: w-web/http/headews/expiwes
---

{{httpsidebaw}}

**`expiwes`** ヘッダーには、レスポンスが古くなると見なされる日時が入ります。

値 0 のような無効な日付は過去の日付を表し、リソースがすでに有効期限切れであることを意味します。

> [!note]
> レスポンスに `max-age` または `s-maxage` ディレクティブを持つ {{httpheadew("cache-contwow")}} ヘッダーがある場合、`expiwes` ヘッダーは無視されます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse h-headew", (U ﹏ U) "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame", -.- "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cows-safewisted wesponse headew", (ˆ ﻌ ˆ)♡ "cows セーフリストレスポンスヘッダー")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
expiwes: <http-date>
```

## ディレクティブ

- \<http-date>
  - : http-date タイムスタンプ

## 例

```
expiwes: wed, (⑅˘꒳˘) 21 o-oct 2015 07:28:00 gmt
```

## 仕様書

| 仕様書                            | 題名                                            |
| --------------------------------- | ----------------------------------------------- |
| {{wfc("7234", "expiwes", (U ᵕ U❁) "5.3")}} | hypewtext twansfew p-pwotocow (http/1.1): caching |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("cache-contwow")}}
- {{httpheadew("age")}}
