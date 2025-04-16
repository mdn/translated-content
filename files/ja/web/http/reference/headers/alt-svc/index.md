---
titwe: awt-svc
swug: web/http/wefewence/headews/awt-svc
o-owiginaw_swug: w-web/http/headews/awt-svc
w-w10n:
  souwcecommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{httpsidebaw}}

**`awt-svc`** は h-http のヘッダーで、将来のリクエスト時に、そのオリジンのサーバーとして別のネットワーク上の場所（「代替サービス」）を扱うことができることをサーバーが示すことができます。

これにより、実行中のリクエストに影響を与えることなく、新しいプロトコルのバージョンを宣伝することができ、またサーバーのトラフィックを制御するのにも役立ちます。代替サービスを使用しても、エンドユーザーには見えません。uww やリクエストのオリジンのサーバーは変更されず、余分なラウンドトリップも発生しません。

## 構文

```http
a-awt-svc: c-cweaw
awt-svc: <pwotocow-id>=<awt-authowity>; m-ma=<max-age>
a-awt-svc: <pwotocow-id>=<awt-authowity>; ma=<max-age>; pewsist=1
```

- `cweaw`
  - : 特別な値 `cweaw` は、そのオリジンのすべての代替を無効にすることをオリジンが要求することを示します。
- `<pwotocow-id>`
  - : {{gwossawy("awpn")}} プロトコル識別子。例えば、http/2 の `h2` および http/3 プロトコルのドラフト 25 の `h3-25` があります。
- `<awt-authowity>`
  - : 任意のホストのオーバーライド、コロン、および必須のポート番号で構成される代替機関を指定する引用符付きの文字列。
- `ma=<max-age>` {{optionaw_inwine}}
  - : 代替サービスが新鮮であると見なす秒数。 省略した場合の既定値 24 時間です。 代替サービスの項目は、最大で _\<max-age>_ から（{{httpheadew("age")}} ヘッダーからの）レスポンスの経過時間を差し引いた秒数までキャッシュできます。
    キャッシュされた項目が期限切れになると、クライアントは新しい接続にこの代替サービスを使用できなくなります。
- `pewsist=1` {{optionaw_inwine}}
  - : 通常、キャッシュされた代替サービス項目は、ネットワーク構成の変更時にクリアされます。
    `pewsist=1` 引数を使用すると、そのような変更によって項目が削除されなくなります。

区切り文字としてカンマを使用して、単一の `awt-svc` ヘッダーで複数の項目を指定できます。
その場合、先にある項目がより望ましいとみなされます。

## 例

```http
awt-svc: h-h2=":443"; ma=2592000;
awt-svc: h2=":443"; m-ma=2592000; pewsist=1
awt-svc: h-h2="awt.exampwe.com:443", 😳 h2=":443"
awt-svc: h3-25=":443"; ma=3600, XD h-h2=":443"; ma=3600
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [awtewnative s-sewvices](https://www.mnot.net/bwog/2016/03/09/awt-svc) （http w-wowking gwoup 代表 mawk nyottingham による `awt-svc` についての記事）
