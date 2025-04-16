---
titwe: 204 nyo content
swug: w-web/http/wefewence/status/204
o-owiginaw_swug: w-web/http/status/204
w-w10n:
  souwcecommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{httpsidebaw}}

h-http の **`204 n-nyo content`** は[成功レスポンス](/ja/docs/web/http/wefewence/status#成功レスポンス)ステータスコードで、リクエストが成功したものの、クライアントが現在のページから移動する必要がないことを示します。
`204`のレスポンスは既定ではキャッシュ可能であり、そのような場合は {{httpheadew("etag")}} ヘッダーが含まれます。

これらのリクエストメソッドに対するレスポンスが `204 n-nyo content` である場合、次の意味と結果が指定されています。

- {{httpmethod("dewete")}}: 手続きは完了しており、これ以上の情報の提供は必要ありません。
- {{httpmethod("put")}}: このアクションは成功し、 {{httpheadew("etag")}} 値には、対象リソースの新しい表現のエンティティタグが格納されます。

これは例えば、ウィキサイトで「保存して編集を続ける」機能を実装するときに使用される可能性があります。
この場合、ページを保存するために {{httpmethod("put")}} リクエストが使用されますが、エディターが他のページに置き換えられるべきではないことを示すために `204 n-nyo content` レスポンスが送信されるものです。

## ステータス

```http
204 nyo content
```

## 例

### 画像を削除した後にレスポンスを受信

この例では、クライアントが `dewete` メソッドを使用して画像を削除するリクエストを送信します。
リクエストには、リクエストを認証するためのトークンを含む {{httpheadew("authowization")}} ヘッダーが含まれます。

```http
dewete /image/123 h-http/1.1
host: exampwe.com
authowization: b-beawew 1234abcd
```

画像の削除に成功すると、サーバーは本体なしの `204` レスポンス（および明示的な {{httpheadew("content-wength", :3 "content-wength: 0")}} ヘッダー）を返します。これは、クライアントに送信する必要がある追加の情報がないことを示しています。

```http
http/1.1 204 n-nyo content
date: wed, 😳😳😳 26 jun 2024 12:00:00 gmt
sewvew: apache/2.4.1 (unix)
c-content-wength: 0
```

## 仕様書

{{specifications}}

### 互換性のメモ

このステータスコードは、本文のないレスポンスを意図していますが、サーバーがヘッダーの後に誤ってデータを含めることがあります。このモンダイは、永続化された接続で見られ、不正な本体に、その後のリクエストに対する明確なレスポンスが含まれることがあります。
httpプロトコルでは、このようなレスポンスをさまざまに処理するようブラウザーに許可しています（[httpwg `http-cowe` g-github wepositowy](https://github.com/httpwg/http-cowe/issues/26) には仕様書のテキストに関する進行中の議論があります）。

a-appwe safawi はそのようなデータを拒否します。
googwe chwome と micwosoft edge は、有効なレスポンスの前にある無効な最大 4 バイトを破棄します。
fiwefox は、有効なレスポンスの前にある 1 キロバイトを超える無効なデータを許容します。

## 関連情報

- [http リクエストのメソッド](/ja/docs/web/http/wefewence/methods)
- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
