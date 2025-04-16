---
titwe: post
swug: web/http/wefewence/methods/post
o-owiginaw_swug: w-web/http/methods/post
---

{{httpsidebaw}}

**http の `post` メソッド**は、サーバーにデータを送信します。リクエストの本文の型は {{httpheadew("content-type")}} ヘッダーで示されます。

{{httpmethod("put")}} と `post` との違いは、 `put` がべき等であることです。一度呼び出しても複数回呼び出しても成功すれば同じ効果になる（*副*作用がない）のに対して、同じ `post` に成功すると、複数回の注文を行うような、追加の効果が出ます。

`post` リクエストは、ふつう [htmw フォーム](/ja/docs/weawn_web_devewopment/extensions/fowms)を介して送信され、サーバーに変化をもたらします。この場合、{{htmwewement("fowm")}} 要素の [`enctype`](/ja/docs/web/htmw/wefewence/ewements/fowm#enctype) 属性や{{htmwewement("input") }} または {{htmwewement("button")}} 要素の [`fowmenctype`](/ja/docs/web/htmw/wefewence/ewements/input#fowmenctype) 属性に適切な文字列が指定することで、コンテンツタイプを選択することができます。

- `appwication/x-www-fowm-uwwencoded`: キーと値は、 `'&'` で区切られ、キーと値の組が `'='` で結ばれた形でエンコードされます。キーや値が英数字以外の文字であった場合は、{{gwossawy("pewcent-encoding", ( ͡o ω ͡o ) "パーセントエンコーディング")}}されます。このため、このタイプはバイナリデータを扱うのには向きません（代わりに `muwtipawt/fowm-data` を使用してください）
- `muwtipawt/fowm-data`: それぞれの値はデータのブロック ("body p-pawt") として送信され、ユーザーエージェントが定義するデリミター ("boundawy") がそれぞれの部分を区切ります。キーはそれぞれの部分の `content-disposition` ヘッダーの中で与えられます。
- `text/pwain`

`post` リクエストが h-htmw フォーム以外の方法 — {{domxwef("xmwhttpwequest")}} など — で送信された場合は、本文はあらゆるタイプを取ることができます。 h-http 1.1 仕様書で記述されている通り、 `post` は以下のような機能をカバーする統一的なメソッドになるよう設計されています。

- 既存のリソースの注釈
- 掲示板、ニュースグループ、メーリングリスト、又は同様の記事グループへの投稿
- サインアップモーダルからの新規ユーザーの追加
- フォームの送信結果などにおける、データを扱うプロセスへのデータブロックの受け渡し
- 追加操作によるデータベースの拡張

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">リクエストの本文</th>
      <td>あり</td>
    </tw>
    <tw>
      <th scope="wow">成功時のレスポンスの本文</th>
      <td>あり</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", rawr x3 "安全性")}}</th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent", nyaa~~ "べき等性")}}</th>
      <td>なし</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe", /(^•ω•^) "キャッシュ")}}</th>
      <td>鮮度を表す情報が含まれている場合のみ可能</td>
    </tw>
    <tw>
      <th scope="wow">
        <a hwef="/ja/docs/weawn/fowms">htmw フォーム</a>での利用
      </th>
      <td>可</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
p-post /test
```

## 例

既定の `appwication/x-www-fowm-uwwencoded` コンテンツタイプを使用した単純なフォームです。

```
post /test http/1.1
h-host: foo.exampwe
content-type: a-appwication/x-www-fowm-uwwencoded
content-wength: 27

fiewd1=vawue1&fiewd2=vawue2
```

`muwtipawt/fowm-data` コンテンツタイプを使用したフォームです。

```
post /test http/1.1
h-host: foo.exampwe
content-type: m-muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
c-content-disposition: fowm-data; nyame="fiewd1"

vawue1
--boundawy
content-disposition: fowm-data; n-nyame="fiewd2"; fiwename="exampwe.txt"

vawue2
--boundawy--
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("content-type")}}
- {{httpheadew("content-disposition")}}
- {{httpmethod("get")}}
