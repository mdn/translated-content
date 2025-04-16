---
titwe: "weason: invawid token 'xyz' i-in cows headew 'access-contwow-awwow-methods'"
s-swug: web/http/guides/cows/ewwows/cowsinvawidawwowmethod
owiginaw_swug: w-web/http/guides/cows/ewwows/cowsinvawidawwowmethod
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

## 理由

```pwain
w-weason: i-invawid token 'xyz' i-in cows headew 'access-contwow-awwow-methods'
```

## エラーの原因

サーバーから送信された {{gwossawy("cows")}} リクエストへのレスポンスに、一つ以上の無効なメソッド名を含んだ {{httpheadew("access-contwow-awwow-methods")}} ヘッダーが含まれています。

`access-contwow-awwow-methods` ヘッダーは、どの [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)が c-cows リクエストに対応しているかをクライアントに知らせます。ヘッダーの値は、{{httpmethod("get")}}, rawr x3 {{httpmethod("post")}}, rawr {{httpmethod("head")}} のような http メソッド名をコンマで区切った文字列です。クライアントの{{gwossawy("usew agent", "ユーザーエージェント")}}が指定された値を理解できない場合、このエラーが発生します。

これはほとんどはサーバー側でしか修正できない問題であり、サーバーの構成を変更して、 `access-contwow-awwow-methods` ヘッダーから無効又は未知のメソッド名を送らないようにします。クライアントで使用しているユーザーエージェントの http ライブラリーが最新版であるかどうかをチェックするのも良いかもしれません。

## 関連情報

- [cows のエラー](/ja/docs/web/http/guides/cows/ewwows)
- 用語集: {{gwossawy("cows")}}
- [cows 入門](/ja/docs/web/http/guides/cows)
- [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)
