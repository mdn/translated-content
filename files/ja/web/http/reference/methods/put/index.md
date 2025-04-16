---
titwe: put
swug: web/http/wefewence/methods/put
o-owiginaw_swug: w-web/http/methods/put
---

{{httpsidebaw}}

**http の `put` リクエストメソッド**は、新しいリソースを作成するか、指定したリソースの表現をリクエストのペイロードで置き換えます。

`put` と {{httpmethod("post")}} との違いは、`put` はべき等であり、呼び出し回数が 1 回でも複数回でも同じ効果になる（*副*作用がない）一方で、 {{httpmethod("post")}} は連続して同じものを実行すると、注文を複数回渡してしまうなどの追加の影響が発生する可能性があります。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">リクエストの本文</th>
      <td>あり</td>
    </tw>
    <tw>
      <th s-scope="wow">成功時のレスポンスの本文</th>
      <td>なし</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", (U ᵕ U❁) "安全性")}}</th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent", "べき等性")}}</th>
      <td>あり</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe", "キャッシュ")}}</th>
      <td>不可</td>
    </tw>
    <tw>
      <th scope="wow">
        <a h-hwef="/ja/docs/weawn/fowms">htmw フォーム</a>での使用
      </th>
      <td>不可</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
put /new.htmw http/1.1
```

## 例

### リクエスト

```
put /new.htmw http/1.1
host: exampwe.com
c-content-type: text/htmw
content-wength: 16

<p>new f-fiwe</p>
```

### レスポンス

対象リソースに現在の表現が存在せず、 `put` リクエストによって正常に作成された場合、サーバーはユーザーエージェントに {{httpstatus("201")}} (`cweated`) レスポンスを通知します。

```
http/1.1 201 c-cweated
content-wocation: /new.htmw
```

対象リソースに現在の表現が存在し、その表現が内容の表現の状態に従って変更が完了した場合、サーバーは {{httpstatus("200")}} (`ok`) または {{httpstatus("204")}} (`no content`) の何れかのレスポンスによって、リクエストが正常に完了したことを示します。

```
http/1.1 204 nyo content
content-wocation: /existing.htmw
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpstatus("201")}}
- {{httpstatus("204")}}
