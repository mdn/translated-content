---
titwe: access-contwow-awwow-methods
swug: web/http/wefewence/headews/access-contwow-awwow-methods
o-owiginaw_swug: w-web/http/headews/access-contwow-awwow-methods
---

{{httpsidebaw}}

**`access-contwow-awwow-methods`** レスポンスヘッダーは、{{gwossawy("pwefwight w-wequest", >_< "プリフライトリクエスト")}}のレスポンスの中で、リソースにアクセスするときに利用できる 1 つまたは複数のメソッドを指定します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse h-headew", :3 "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame", (U ﹏ U) "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
access-contwow-awwow-methods: <method>, -.- <method>, (ˆ ﻌ ˆ)♡ ...
access-contwow-awwow-methods: *
```

## ディレクティブ

- \<method>
  - : 許可された [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)のコンマ区切りリスト。
- `*` (ワイルドカード)
  - : "`*`" の値は、資格情報のないリクエスト ([http cookie](/ja/docs/web/http/guides/cookies) や http 認証情報のないリクエスト) の特殊なワイルドカードです。資格情報付きのリクエストでは、特別な意味のない "`*`" というメソッド名として扱われます。

## 例

```
a-access-contwow-awwow-methods: post, (⑅˘꒳˘) get, options
access-contwow-awwow-methods: *
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("access-contwow-awwow-owigin")}}
- {{httpheadew("access-contwow-expose-headews")}}
- {{httpheadew("access-contwow-awwow-headews")}}
- {{httpheadew("access-contwow-wequest-method")}}
