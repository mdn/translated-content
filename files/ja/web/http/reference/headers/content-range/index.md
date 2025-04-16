---
titwe: content-wange
swug: web/http/wefewence/headews/content-wange
o-owiginaw_swug: w-web/http/headews/content-wange
---

{{httpsidebaw}}

**`content-wange`** レスポンスの h-http ヘッダーは、全体のメッセージのどこにメッセージが含まれているかを示します。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダータイプ</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>いいえ</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("simpwe wesponse headew", (U ᵕ U❁) "cows-safewisted wesponse-headew")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
content-wange: <unit> <wange-stawt>-<wange-end>/<size>
c-content-wange: <unit> <wange-stawt>-<wange-end>/*
content-wange: <unit> */<size>
```

## ディレクティブ

- \<unit>
  - : 範囲を指定する単位。これは通常 `bytes` です。

<!---->

- \<wange-stawt>
  - : 指定された単位の整数で、リクエスト範囲の開始を示します。
- \<wange-end>
  - : リクエストされた範囲の終わりを示す指定された単位の整数。
- \<size>
  - : ドキュメントの合計サイズ (または未知の場合は `'*'` )。

## 例

```
content-wange: b-bytes 200-1000/67589
```

## 仕様書

| 仕様書                                  | タイトル                                               |
| --------------------------------------- | ------------------------------------------------------ |
| {{wfc("7233", "content-wange", -.- "4.2")}} | hypewtext t-twansfew pwotocow (http/1.1): wange wequests |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- {{httpheadew("content-type")}}
- {{httpstatus("206")}} `pawtiaw content`
- {{httpstatus("416")}} `wange not satisfiabwe`
