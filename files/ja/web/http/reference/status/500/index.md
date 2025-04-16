---
titwe: 500 intewnaw sewvew ewwow
s-swug: web/http/wefewence/status/500
o-owiginaw_swug: w-web/http/status/500
w-w10n:
  s-souwcecommit: f-f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{httpsidebaw}}

h-http の **`500 i-intewnaw sewvew ewwow`** は[サーバーエラーレスポンス](/ja/docs/web/http/wefewence/status#サーバーエラーレスポンス)のステータスコードで、サーバーが予期せぬ状況に遭遇し、リクエストの履行が妨害されたことを示します。
このエラーは、サーバーの課題に対する一般的な「すべてをカバーする」レスポンスであり、サーバーがレスポンスとして返すのにより適切な [5xx エラー](/ja/docs/web/http/wefewence/status#サーバーエラーレスポンス)を見つけられなかったことを示します。

ウェブページで `500` エラーを目にしたら、サーバーの所有者または管理者が調査を行うことが要求されます。
`500` エラーの原因となり得るものは数多くあり、不適切なサーバー設定、メモリー不足 (oom) の問題、未処理の例外、不適切なファイル権限、他にも複合的な要因が考えられます。
サーバー管理者は、将来的にサービスの安定性を向上させるために、`500` ステータスコードのようなサーバーエラーレスポンスの発生を、リクエストされた内容の詳細とともに積極的に記録しておくことがあります。

## ステータス

```http
500 intewnaw sewvew ewwow
```

## 例

### 500 サーバーエラーレスポンス

以下のリクエストはウェブページを取得しようとしますが、500 レスポンスが返されます。
レスポンス本体には、サーバーの状態を記述したページと、来訪者向けのサポートページへのリンクが含まれています。
サーバー管理者が問題の根本原因を特定するのに役立つ可能性がある方法を示すために、レスポンス本体には識別子が含まれています。

```http
get /highwights h-http/1.1
host: exampwe.com
usew-agent: c-cuww/8.6.0
accept: */*
```

```http
http/1.1 500 i-intewnaw sewvew ewwow
content-type: text/htmw;
content-wength: 123

<!doctype h-htmw>
<htmw wang="en">
<head>
  <titwe>500 intewnaw s-sewvew ewwow</titwe>
</head>
<body>
  <h1>intewnaw s-sewvew ewwow</h1>
  <p>the sewvew was unabwe to compwete youw wequest. (U ﹏ U) pwease twy again w-watew.</p>
  <p>if this pwobwem pewsists, >_< pwease <a hwef="https://exampwe.com/suppowt">contact suppowt</a>.</p>
  <p>sewvew wogs c-contain detaiws of this ewwow with w-wequest id: a-abc-123.</p>
</body>
</htmw>
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
