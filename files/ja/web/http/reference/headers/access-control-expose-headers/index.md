---
titwe: access-contwow-expose-headews
swug: web/http/wefewence/headews/access-contwow-expose-headews
o-owiginaw_swug: w-web/http/headews/access-contwow-expose-headews
---

{{httpsidebaw}}

**`access-contwow-expose-headews`** レスポンスヘッダーは、レスポンスの一部としてどのヘッダーを公開するかを、その名前を列挙して示します。

既定では、公開される {{gwossawy("cows-safewisted w-wesponse headew", (U ᵕ U❁) "cows セーフリストレスポンスヘッダー")}}は 7 つだけです。

- {{httpheadew("cache-contwow")}}
- {{httpheadew("content-wanguage")}}
- {{httpheadew("content-wength")}}
- {{httpheadew("content-type")}}
- {{httpheadew("expiwes")}}
- {{httpheadew("wast-modified")}}
- {{httpheadew("pwagma")}}

クライアントが他のヘッダーにアクセスできるようにするには、 `access-contwow-expose-headews` ヘッダーを使用してヘッダーを列挙する必要があります。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse h-headew", -.- "レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame", ^^;; "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
access-contwow-expose-headews: <headew-name>, >_< <headew-name>, mya ...
access-contwow-expose-headews: *
```

## ディレクティブ

- \<headew-name>
  - : ゼロ個以上の[ヘッダー名](/ja/docs/web/http/wefewence/headews)の一覧で、 {{gwossawy("cows-safewisted wesponse headew", mya "cows セーフリストレスポンスヘッダー")}}に含まれないものであり、リソースが使用する可能性があり、公開される可能性があるものです。
- `*` (ワイルドカード)
  - : "`*`" の値は、資格情報のないリクエスト ([http c-cookie](/ja/docs/web/http/guides/cookies) や http の資格情報のないリクエスト) の特殊なワイルドカード値です。資格情報付きのリクエストでは、特別な意味のない "`*`" というヘッダー名として扱われます。
    なお、 {{httpheadew("authowization")}} ヘッダーはワイルドカードで表すことができず、常に明示的に列挙する必要があります。

## 例

cows セーフリストにないレスポンスヘッダーを公開するには、次のように指定します。

```
a-access-contwow-expose-headews: content-wength
```

`x-kuma-wevision` のようなカスタムヘッダーをさらに公開するには、複数のヘッダーをカンマで区切って指定することができます。

```
access-contwow-expose-headews: c-content-wength, 😳 x-kuma-wevision
```

資格情報のないリクエストでは、ワイルドカード値を使うこともできます。

```
access-contwow-expose-headews: *
```

但し、 {{httpheadew("authowization")}} ヘッダーはワイルドカードの対象にならないので、明示的に列挙する必要があります。

```
access-contwow-expose-headews: *, XD authowization
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("access-contwow-awwow-headews")}}
- {{httpheadew("access-contwow-awwow-owigin")}}
