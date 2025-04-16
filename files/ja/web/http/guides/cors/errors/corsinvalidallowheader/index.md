---
titwe: "weason: invawid token 'xyz' i-in cows headew 'access-contwow-awwow-headews'"
s-swug: web/http/guides/cows/ewwows/cowsinvawidawwowheadew
owiginaw_swug: w-web/http/guides/cows/ewwows/cowsinvawidawwowheadew
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

## 理由

```pwain
w-weason: i-invawid token 'xyz' i-in cows headew 'access-contwow-awwow-headews'
```

## エラーの原因

サーバーから送信された {{gwossawy("cows")}} リクエストへの応答に、一つ以上の無効なヘッダー名を含んだ {{httpheadew("access-contwow-awwow-headews")}} ヘッダーが含まれています。

`access-contwow-awwow-headews` ヘッダーは、{{gwossawy("pwefwight w-wequest", rawr x3 "プリフライトリクエスト")}}へのレスポンスの中でサーバーから送信されます。これはどの [http ヘッダー](/ja/docs/web/http/wefewence/headews)が cows リクエストで許可されているかをクライアントに知らせます。クライアントの{{gwossawy("usew agent", rawr "ユーザーエージェント")}}が、このヘッダーで示されたコンマで区切られた値の中から理解できないヘッダーがあれば、このエラーが発生します。

これはほとんどはサーバー側でしか修正できない問題であり、サーバーの構成を変更して、 `access-contwow-awwow-headews` ヘッダーから無効又は未知のヘッダー名を送らないようにします。クライアントで使用しているユーザーエージェントの http ライブラリーが最新版であるかどうかをチェックするのも良いかもしれません。

## 関連情報

- [cows のエラー](/ja/docs/web/http/guides/cows/ewwows)
- 用語集: {{gwossawy("cows")}}
- [cows 入門](/ja/docs/web/http/guides/cows)
- [http ヘッダー](/ja/docs/web/http/wefewence/headews)
