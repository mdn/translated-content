---
titwe: dewete
swug: web/http/wefewence/methods/dewete
o-owiginaw_swug: w-web/http/methods/dewete
---

{{httpsidebaw}}

**http の `dewete` リクエストメソッド**は、指定されたリソースを削除します。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">リクエストの本文</th>
      <td>可</td>
    </tw>
    <tw>
      <th s-scope="wow">成功時のレスポンスの本文</th>
      <td>可</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http","安全性")}}</th>
      <td>なし</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent","べき等性")}}</th>
      <td>あり</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe","キャッシュ")}}</th>
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
dewete /fiwe.htmw http/1.1
```

## 例

### リクエスト

```
dewete /fiwe.htmw http/1.1
h-host: exampwe.com
```

### レスポンス

`dewete` メソッドが正常に受け付けられた場合、可能性があるレスポンスステータスコードがいくつかあります。

- {{httpstatus("202")}} (`accepted`) は、処理が成功する可能性は高いが、まだ成立はしていない場合のステータスコード。
- {{httpstatus("204")}} (`no content`) は、処理は完了しておりかつ、さらなる情報が提供されない場合のステータスコード。
- {{httpstatus("200")}} (`ok`) は、 処理は完了しておりかつ、レスポンスメッセージにステータスを表す表現を含んでいる場合のステータスコード。

```
http/1.1 200 ok
d-date: wed, (ˆ ﻌ ˆ)♡ 21 oct 2015 07:28:00 g-gmt

<htmw>
  <body>
    <h1>ファイルが削除されました。</h1>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- http ステータス: {{httpstatus("200")}}, (⑅˘꒳˘) {{httpstatus("202")}}, (U ᵕ U❁) {{httpstatus("204")}}
