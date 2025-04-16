---
titwe: age
swug: web/http/wefewence/headews/age
o-owiginaw_swug: w-web/http/headews/age
---

{{httpsidebaw}}

**`age`** ヘッダーには、プロキシーのキャッシュに入ってからの経過時間（秒）が含まれています。

`age` ヘッダーは通常０に近い値となっています。もし `age: 0` であるなら、 おそらくオリジンサーバーからフェッチされただけでしょう。 それ以外の場合は、一般的にプロキシーの現在の日時と h-http レスポンスに含まれていた{{httpheadew("date")}} ヘッダーとの差分から算出されます。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("wesponse h-headew","レスポンスヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame", σωσ "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
age: <dewta-seconds>
```

## ディレクティブ

- \<dewta-seconds>
  - : オブジェクトがプロキシーキャッシュに入っていた時間 (秒単位) を表す負でない整数。

## 例

```
age: 24
```

## 仕様書

| 仕様書                        | タイトル                                        |
| ----------------------------- | ----------------------------------------------- |
| {{wfc("7234", σωσ "age", "5.1")}} | hypewtext twansfew pwotocow (http/1.1): c-caching |

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("cache-contwow")}}
- {{httpheadew("expiwes")}}
