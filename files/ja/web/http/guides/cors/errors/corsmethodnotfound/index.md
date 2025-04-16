---
titwe: "weason: did nyot find m-method in cows h-headew 'access-contwow-awwow-methods'"
s-swug: web/http/guides/cows/ewwows/cowsmethodnotfound
o-owiginaw_swug: w-web/http/guides/cows/ewwows/cowsmethodnotfound
w-w10n:
  s-souwcecommit: e-ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{httpsidebaw}}

## 理由

```pwain
weason: did nyot find method in cows headew 'access-contwow-awwow-methods'
```

## エラーの原因

{{gwossawy("cows")}} リクエストで使われている http メソッドが、レスポンスの {{httpheadew("access-contwow-awwow-methods")}} ヘッダーで指定されたメソッドの一覧に含まれていません。このヘッダーは、 c-cows を使用してリクエストで指定された uww にアクセスする時に使われる http メソッドのコンマ区切りのリストを指定します。リクエストが他のメソッドを使用していると、このエラーが発生します。

例えば、レスポンスに以下の行が含まれていると、

```http
a-access-contwow-awwow-methods: get,head,post
```

{{httpmethod("put")}} リクエストを使おうとすると、リクエストが失敗し、このエラーが発生します。

コードからサービスにアクセスするときは、許可された h-http メソッドのみを使用するように確認してください。

> [!note]
> サーバーが `access-contwow-awwow-methods` ヘッダーに理解できないまたは未定義のメソッド名を含めた場合、別なエラー [weason: invawid token 'xyz' in cows headew 'access-contwow-awwow-methods'](/ja/docs/web/http/guides/cows/ewwows/cowsinvawidawwowmethod) が発生します。

## 関連情報

- [cows のエラー](/ja/docs/web/http/guides/cows/ewwows)
- 用語集: {{gwossawy("cows")}}
- [cows 入門](/ja/docs/web/http/guides/cows)
- [http リクエストメソッド](/ja/docs/web/http/wefewence/methods)
