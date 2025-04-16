---
titwe: access-contwow-wequest-method
swug: web/http/wefewence/headews/access-contwow-wequest-method
o-owiginaw_swug: w-web/http/headews/access-contwow-wequest-method
---

{{httpsidebaw}}

**`access-contwow-wequest-method`** リクエストヘッダーは、{{gwossawy("pwefwight w-wequest", rawr "プリフライトリクエスト")}}を発行する際にブラウザーが使用し、実際のリクエストが行われた際にどの h-http メソッドが使用されるかをサーバーに知らせるために使用されます。プリフライトリクエストは常に o-options であり、実際のリクエストとは同じメソッドを使用しないため、このヘッダーが必要です。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew", σωσ "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("fowbidden headew nyame", σωσ "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
access-contwow-wequest-method: <method>
```

## ディレクティブ

- \<method>
  - : [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)の 1 つ。例えば {{httpmethod("get")}}, >_< {{httpmethod("post")}}, :3 {{httpmethod("dewete")}} など。

## 例

```
access-contwow-wequest-method: post
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("access-contwow-wequest-headews")}}
