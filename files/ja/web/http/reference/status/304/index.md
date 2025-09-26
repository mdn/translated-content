---
title: 304 Not Modified
slug: Web/HTTP/Reference/Status/304
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`304 Not Modified`** は[リダイレクトレスポンス](/ja/docs/Web/HTTP/Reference/Status#リダイレクトメッセージ)ステータスコードで、リクエストされたリソースを再送する必要がないことを示します。

このレスポンスコードは、リクエストが[条件付き](/ja/docs/Web/HTTP/Guides/Conditional_requests)の {{HTTPMethod("GET")}} や {{HTTPMethod("HEAD")}} リクエストに {{HTTPHeader("If-None-Match")}} もしくは {{HTTPHeader("If-Modified-Since")}} ヘッダーが付いており、条件が 'false' と評価された時に送信されます。
これは、クライアントがキャッシュしたリソースがまだ有効であり、条件が 'true' と評価された場合、サーバーはリソースとともに {{HTTPStatus("200", "200 OK")}} レスポンスを送信したであろうことを確認します。
詳細については、 [HTTP キャッシュ](/ja/docs/Web/HTTP/Guides/Caching)を参照してください。

レスポンスには本体を含んではならず、 {{HTTPStatus("200")}} レスポンスで送信されるであろう次のようなヘッダーを記載しなければなりません。

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Vary")}}

> [!NOTE]
> ブラウザーの[開発者ツールのネットワークパネル](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)の多くは、 `304` レスポンスにつながる追加のリクエストを作成するため、ローカルキャッシュへのアクセスが開発者から見えます。

## ステータス

```http
304 Not Modified
```

## 例

### 条件付きリクエストに対する 304 レスポンス

下記の例は、条件付きリクエストヘッダーつきの [curl](https://curl.se/) を使用して作成された {{HTTPMethod("GET")}} リクエストを示しています。
`--http1.1` フラグは、読みやすくするために HTTP/1.1 プロトコルを強制するために使用されています。

最初のリクエストは、`If-Modified-Since` 条件を使用して未来の日付である 2050 年 11 月 21 日を設定しています。
これは `false` と評価されるはずです。まだ現れていない時点以降にリソースが更新されることはありえないからです。

```bash
curl --http1.1 -I --header 'If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT' \
 https://developer.mozilla.org/en-US/
```

これにより、次のような HTTP リクエストが発生します。

```http
GET /en-US/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: curl/8.7.1
Accept: */*
If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT
```

リソースが {{HTTPHeader("If-Modified-Since")}} ヘッダーのタイムスタンプ後に更新された場合、現在のリソースバージョンではレスポンスは {{HTTPStatus("200", "200 OK")}} となりるはずです。
代わりに `304` レスポンスを取得し、そのレスポンスには {{HTTPHeader("ETag")}}、{{HTTPHeader("Age")}}、{{HTTPHeader("Expires")}} の各ヘッダーが含まれ、リソースのキャッシュされたバージョンが最新であることを示します。

```http
HTTP/1.1 304 Not Modified
Date: Wed, 28 Aug 2024 09:52:35 GMT
Expires: Wed, 28 Aug 2024 10:01:53 GMT
Age: 3279
ETag: "b20a0973b226eeea30362acb81f9e0b3"
Cache-Control: public, max-age=3600
Vary: Accept-Encoding
X-cache: hit
Alt-Svc: clear
```

それでは、別の `curl` コマンドを実行し、前回レスポンスで取得した `etag` 値を {{HTTPHeader("If-None-Match")}} 条件とともに使用します（この `etag` はサーバー上のリソースの最新バージョンであるため、 `304 Not Modified` レスポンスが返されると予想されます）。

```bash
curl --http1.1 -I --header 'If-None-Match: "b20a0973b226eeea30362acb81f9e0b3"' \
 https://developer.mozilla.org/en-US/
```

これにより、次のような HTTP リクエストが発生します。

```http
GET /en-US/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: curl/8.7.1
Accept: */*
If-None-Match: "b20a0973b226eeea30362acb81f9e0b3"
```

リクエスト時点では `etag` の値が一致するため、エンティティタグは条件に合わず、`304` レスポンスが返されます。

```http
HTTP/1.1 304 Not Modified
Date: Wed, 28 Aug 2024 10:36:35 GMT
Expires: Wed, 28 Aug 2024 11:02:17 GMT
Age: 662
ETag: "b20a0973b226eeea30362acb81f9e0b3"
Cache-Control: public, max-age=3600
Vary: Accept-Encoding
X-cache: hit
Alt-Svc: clear
```

## 仕様書

{{Specifications}}

## 互換性メモ

このレスポンスが永続的な接続上で誤って本文を含んだ場合、ブラウザーの動作はさまざまです。
詳しくは {{HTTPStatus("204", "204 No Content")}} を参照してください。

## 関連情報

- [HTTP のリダイレクト](/ja/docs/Web/HTTP/Guides/Redirections)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP 条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
