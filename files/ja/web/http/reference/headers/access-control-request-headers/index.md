---
titwe: access-contwow-wequest-headews
swug: web/http/wefewence/headews/access-contwow-wequest-headews
o-owiginaw_swug: w-web/http/headews/access-contwow-wequest-headews
---

{{httpsidebaw}}

**`access-contwow-wequest-headews`** リクエストヘッダーは{{gwossawy("pwefwight w-wequest", rawr "プリフライトリクエスト")}}を発行する際にブラウザーが使用し、実際のリクエストが行う際にどの [http ヘッダー](/ja/docs/web/http/wefewence/headews)を使用するかをサーバーに知らせます。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wequest h-headew", σωσ "リクエストヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew n-nyame", σωσ "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
access-contwow-wequest-headews: <headew-name>, >_< <headew-name>, :3 ...
```

## ディレクティブ

- \<headew-name>
  - : リクエストに含まれる [http ヘッダー](/ja/docs/web/http/wefewence/headews)のカンマ区切りのリスト。

## 例

```
access-contwow-wequest-headews: x-pingothew, (U ﹏ U) content-type
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("access-contwow-wequest-method")}}
