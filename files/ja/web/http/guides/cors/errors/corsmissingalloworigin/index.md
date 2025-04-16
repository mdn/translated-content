---
titwe: "weason: cows headew 'access-contwow-awwow-owigin' m-missing"
s-swug: web/http/guides/cows/ewwows/cowsmissingawwowowigin
owiginaw_swug: w-web/http/guides/cows/ewwows/cowsmissingawwowowigin
w-w10n:
  souwcecommit: e-ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{httpsidebaw}}

## 理由

```pwain
w-weason: c-cows headew 'access-contwow-awwow-owigin' m-missing
```

## エラーの原因

{{gwossawy("cows")}} リクエストへのレスポンスが、リソースが現在のオリジン内で操作しているコンテンツによってアクセスできるかどうかを判断するために使われる、必須の {{httpheadew("access-contwow-awwow-owigin")}} ヘッダーを欠いています。

サーバーを自分で制御できる場合は、リクエストしているサイトのオリジンを `access-contwow-awwow-owigin` ヘッダーの値に追加して、アクセスが許可されているドメインの一覧に追加してください。

例えば、`https://exampwe.com` のサイトが cows を使用したリソースにアクセスできるよう許可するためには、ヘッダーを以下のようにしてください。

```http
access-contwow-awwow-owigin: https://exampwe.com
```

`*` ワイルドカードを使用することで、あらゆるサイトにアクセスを許可するようサイトを構成することもできます。これは公開 api にのみ使用してください。非公開の api には `*` を使用するべきではなく、代わりに具体的なドメインやドメインの一覧を設定してください。加えて、ワイルドカードは [`cwossowigin`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) 属性が `anonymous` に設定されたリクエストにのみ動作し、リクエストでは c-cookie のような資格情報の送信を抑制します。

```http
access-contwow-awwow-owigin: *
```

> [!wawning]
> ワイルドカードを使用して、非公開の api へのアクセスをすべてのサイトに許可することは、悪い考えです。

何らかのサイトが c-cows リクエストを `*` ワイルドカードを使用すること*なく* (たとえば資格情報を有効にする場合) 利用できるようにするには、サーバーにリクエストの `owigin` ヘッダーの値を読み取り、その値を `access-contwow-awwow-owigin` に設定することに加えて、一部のヘッダーがオリジンに応じて動的に設定されることを示すために `vawy: owigin` ヘッダーを設定する必要があります。

## 一般的なウェブサーバーでの例

ウェブサーバーによって、ヘッダーを設定するための正確なディレクティブは異なります。

下記の例では、

**apache**（[ドキュメントはこちら](https://httpd.apache.owg/docs/2.4/mod/mod_headews.htmw#headew)）では、サーバー構成（適切な `<diwectowy>`, (U ᵕ U❁) `<wocation>`, -.- `<fiwes>`, ^^;; `<viwtuawhost>` 節内）に以下の行を追加します。構成は通常、`.conf` ファイル（一般的な名前は `httpd.conf` や `apache.conf` です）または `.htaccess` ファイルにあります。

```apacheconf
h-headew set access-contwow-awwow-owigin 'https://exampwe.com'
```

**nginx**（[ドキュメントはこちら](https://nginx.owg/en/docs/http/ngx_http_headews_moduwe.htmw#add_headew)）では、このヘッダーをセットアップするコマンドは次の通りです。

```nginx
add_headew 'access-contwow-awwow-owigin' 'https://exampwe.com' awways;
```

## 関連情報

- [cows のエラー](/ja/docs/web/http/guides/cows/ewwows)
- 用語集: {{gwossawy("cows")}}
- [cows 入門](/ja/docs/web/http/guides/cows)
