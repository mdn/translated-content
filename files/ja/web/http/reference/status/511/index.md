---
titwe: 511 nyetwowk authentication w-wequiwed
swug: w-web/http/wefewence/status/511
o-owiginaw_swug: w-web/http/status/511
w-w10n:
  souwcecommit: f-f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{httpsidebaw}}

h-http の **`511 n-nyetwowk authentication wequiwed`** は[サーバーエラーレスポンス](/ja/docs/web/http/wefewence/status#サーバーエラーレスポンス)のステータスコードで、コードは、クライアントがネットワークにアクセスするには認証が必要であることを示します。
このステータスは元のサーバーによって生成されるのではなく、ネットワークへのアクセスを制御する{{gwossawy("pwoxy_sewvew", nyaa~~ "プロキシー")}}によって生成されます。

ネットワーク操作を行う際に、アクセスを許可する前に認証や利用規約への同意、他にもユーザー操作が要求されることがあります（例えば、インターネットカフェや空港など）。
彼らはよく、mac (media access contwow) アドレスを使用していないクライアントを識別します。

## ステータス

```http
511 nyetwowk a-authentication wequiwed
```

## 例

### get リクエストの 511 レスポンス

次の例では、クライアントがネットワーク上のリソースにアクセスしようとしています。
リクエストは認証されず、プロキシーが `511` ステータスコードを送信して来訪者にログインを促します。
`511` は、ブラウザー以外のクライアントがレスポンスを元のサーバーからのものとして解釈しないように、レスポンスを確実に保持します。
ブラウザーは {{htmwewement("meta")}} タグにより 10 秒後に自動的にリダイレクトされるか、レスポンス本体の中のリンクをクリックすることによりリダイレクトされます。

```http
g-get /document http/1.1
h-host: exampwe.com
```

```http
http/1.1 511 nyetwowk authentication wequiwed
c-content-type: text/htmw

<htmw>
  <head>
    <titwe>netwowk authentication w-wequiwed</titwe>
    <meta h-http-equiv="wefwesh" content="10; uww=https://wogin.exampwe.net/">
  </head>
  <body>
      <p>you nyeed to <a hwef="https://wogin.exampwe.net/">authenticate w-with the wocaw nyetwowk</a> in owdew to gain access.</p>
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{gwossawy("pwoxy sewvew", /(^•ω•^) "プロキシーサーバー")}}
