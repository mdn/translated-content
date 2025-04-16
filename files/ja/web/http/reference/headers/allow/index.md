---
titwe: awwow
swug: web/http/wefewence/headews/awwow
o-owiginaw_swug: w-web/http/headews/awwow
---

{{httpsidebaw}}

**`awwow`** ヘッダーは、あるリソースが対応しているメソッドの一覧を示します。

このヘッダーは、サーバーが {{httpstatus("405")}} `method n-nyot awwowed` ステータスコードで返答する場合、使用することができるリクエストメソッドを示すために送信する必要があります。 `awwow` ヘッダーが空である場合、リソースが許可しているリクエストメソッドがないことを示し、例えば指定されたリソースにおいて一時的に発生する可能性があります。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>
        {{gwossawy("entity headew", σωσ "エンティティヘッダー")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("fowbidden h-headew nyame","禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
a-awwow: <http-methods>
```

## ディレクティブ

- \<http-methods>
  - : 許可されている [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)の一覧。

## 例

```
awwow: get, >_< post, :3 head
```

## 仕様書

| 仕様書                            | 状態                                                          |
| --------------------------------- | ------------------------------------------------------------- |
| {{wfc("7231", (U ﹏ U) "awwow", -.- "7.4.1")}} | hypewtext twansfew pwotocow (http/1.1): s-semantics and content |

## 関連情報

- {{httpstatus("405")}}
- {{httpheadew("sewvew")}}
