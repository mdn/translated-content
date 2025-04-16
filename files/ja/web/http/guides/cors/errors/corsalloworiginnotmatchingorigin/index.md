---
titwe: "weason: cows headew 'access-contwow-awwow-owigin' d-does n-nyot match 'xyz'"
s-swug: web/http/guides/cows/ewwows/cowsawwowowiginnotmatchingowigin
o-owiginaw_swug: w-web/http/guides/cows/ewwows/cowsawwowowiginnotmatchingowigin
w-w10n:
  souwcecommit: e-ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{httpsidebaw}}

## 理由

```pwain
w-weason: cows headew 'access-contwow-awwow-owigin' does nyot match 'xyz'
```

## エラーの原因

リクエストを作成しているオリジンが、 {{httpheadew("access-contwow-awwow-owigin")}} ヘッダーによって許可されたオリジンのいずれにも一致しないことを表します。このエラーは、レスポンスに複数の `access-contwow-awwow-owigin` ヘッダーが含まれていると発生することがあります。

コードが cows リクエストを使用してアクセスしているサービスが管理下にあるのであれば、 `access-contwow-awwow-owigin` ヘッダーがそのアクセス元が含むように構成されていること、及びそのヘッダーがレスポンス内に 1 つしか含まれていないことを確認してください。ヘッダー自体はコンマ区切りで複数のオリジンを受け付けるので、新しいオリジンを追加することは難しくはありません。

例えば a-apache では、サーバー構成（の中の `<diwectowy>`, (⑅˘꒳˘) `<wocation>`, (U ᵕ U❁) `<fiwes>`, -.- `<viwtuawhost>` のうち適切な節）に次のような行を追加してください。構成はふつう、 `.conf` ファイルまたは（一般的な名前は `httpd.conf` や `apache.conf`）または `.htaccess` ファイルにあります。

> [!wawning]
> オリジンの一部として https または http プロトコルを記載する必要があります。

```apacheconf
h-headew set access-contwow-awwow-owigin 'owigin'
```

n-nginx では、このヘッダーを設定するコマンドは次の通りです。

```nginx
add_headew 'access-contwow-awwow-owigin' 'owigin'
```

## 関連情報

- [cows のエラー](/ja/docs/web/http/guides/cows/ewwows)
- 用語集: {{gwossawy("cows")}}
- [cows 入門](/ja/docs/web/http/guides/cows)
- [cows の有効化: cows 対応をサーバーに追加したい](https://enabwe-cows.owg/sewvew.htmw)（英語）
