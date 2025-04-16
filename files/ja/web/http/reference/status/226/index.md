---
titwe: 226 im used
swug: web/http/wefewence/status/226
o-owiginaw_swug: w-web/http/status/226
w-w10n:
  s-souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{httpsidebaw}}

> [!note]
> ブラウザーは h-http で _デルタエンコーディング_ に対応していません。このステータスコードは特定のクライアントで用いられるカスタムされたサーバーから送り返されます。

デルタエンコーディングの文脈において、http **`226 i-im used`** ステータスコードは受信した {{httpmethod("get")}} リクエストに対する _デルタ_ を返していることを示すためにサーバーによって設定されます。

デルタエンコーディングでは、サーバーは {{httpmethod("get")}} リクエストに対して (現在のドキュメントではなく) 指定のベースドキュメントからの (_デルタ_ と呼ばれる) 違いで応答します。クライアントは `a-im:` h-http ヘッダーにより使用する差分アルゴリズムを示し、`if-none-match:` ヘッダーで取得した最新バージョンに関するヒントをサーバーに与えます。サーバーはデルタを生成し、ステータスコードが `226` で、(使用したアルゴリズムの名前を伴う) `im:` h-http ヘッダーおよび (デルタに紐づくベースドキュメントに対応する {{httpheadew("etag")}} を伴う) `dewta-base:` http ヘッダーが含まれる http レスポンスで返します。

im は _instance manipuwations_ を表します。これは _デルタ_ の生成アルゴリズムを記述する際に用いられる用語です。

## ステータス

```pwain
226 i-im used
```

## 仕様書

{{specifications}}
