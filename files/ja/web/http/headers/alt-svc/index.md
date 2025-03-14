---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTTPSidebar}}

**`Alt-Svc`** は HTTP のヘッダーで、将来のリクエスト時に、そのオリジンのサーバーとして別のネットワーク上の場所（「代替サービス」）を扱うことができることをサーバーが示すことができます。

これにより、実行中のリクエストに影響を与えることなく、新しいプロトコルのバージョンを宣伝することができ、またサーバーのトラフィックを制御するのにも役立ちます。代替サービスを使用しても、エンドユーザーには見えません。URL やリクエストのオリジンのサーバーは変更されず、余分なラウンドトリップも発生しません。

## 構文

```http
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : 特別な値 `clear` は、そのオリジンのすべての代替を無効にすることをオリジンが要求することを示します。
- `<protocol-id>`
  - : {{Glossary("ALPN")}} プロトコル識別子。例えば、HTTP/2 の `h2` および HTTP/3 プロトコルのドラフト 25 の `h3-25` があります。
- `<alt-authority>`
  - : 任意のホストのオーバーライド、コロン、および必須のポート番号で構成される代替機関を指定する引用符付きの文字列。
- `ma=<max-age>` {{optional_inline}}
  - : 代替サービスが新鮮であると見なす秒数。 省略した場合の既定値 24 時間です。 代替サービスの項目は、最大で _\<max-age>_ から（{{httpheader("Age")}} ヘッダーからの）レスポンスの経過時間を差し引いた秒数までキャッシュできます。
    キャッシュされた項目が期限切れになると、クライアントは新しい接続にこの代替サービスを使用できなくなります。
- `persist=1` {{optional_inline}}
  - : 通常、キャッシュされた代替サービス項目は、ネットワーク構成の変更時にクリアされます。
    `persist=1` 引数を使用すると、そのような変更によって項目が削除されなくなります。

区切り文字としてカンマを使用して、単一の `Alt-Svc` ヘッダーで複数の項目を指定できます。
その場合、先にある項目がより望ましいとみなされます。

## 例

```http
Alt-Svc: h2=":443"; ma=2592000;
Alt-Svc: h2=":443"; ma=2592000; persist=1
Alt-Svc: h2="alt.example.com:443", h2=":443"
Alt-Svc: h3-25=":443"; ma=3600, h2=":443"; ma=3600
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Alternative Services](https://www.mnot.net/blog/2016/03/09/alt-svc) （HTTP Working Group 代表 Mark Nottingham による `Alt-Svc` についての記事）
