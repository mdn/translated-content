---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
---

{{HTTPSidebar}}

**`Alt-Svc`** は HTTP のレスポンスヘッダーで、同じリソースに到達できる代替サービスを宣伝するために使用します。 代替サービスは、プロトコル/ホスト/ポートの組み合わせによって定義します。

## 構文

```
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : 特別な値 `clear` は、そのオリジンのすべての代替を無効にすることをオリジンが要求することを示します。
- `<protocol-id>`
  - : {{Glossary("ALPN")}} プロトコル識別子。 例には、HTTP/2 の h2 および HTTP/3 プロトコルのドラフト 25 の h3-25 が含まれています。
- `<alt-authority>`
  - : 任意のホストのオーバーライド、コロン、および必須のポート番号で構成される代替機関を指定する引用符付きの文字列。
- `ma=<max-age>`{{Optional_Inline}}
  - : 代替サービスが新鮮であると見なす秒数。 省略した場合のデフォルトは 24 時間です。 代替サービスのエントリは、最大で _\<max-age>_ から（{{ httpheader("Age") }} ヘッダーからの）レスポンスの経過時間を差し引いた秒数までキャッシュできます。 キャッシュされたエントリが期限切れになると、クライアントは新しい接続にこの代替サービスを使用できなくなります。
- `persist=1`{{Optional_Inline}}
  - : 通常、キャッシュされた代替サービスエントリは、ネットワーク構成の変更時にクリアされます。 persist=1 パラメータを使用すると、そのような変更によってエントリが削除されなくなります。

区切り文字としてカンマを使用して、単一の `Alt-Svc` ヘッダーで複数のエントリを指定できます。 その場合、早期のエントリーがより望ましいと考えられます。

## 例

```
Alt-Svc: h2=":443"; ma=2592000;
Alt-Svc: h2=":443"; ma=2592000; persist=1
Alt-Svc: h2="alt.example.com:443", h2=":443"
Alt-Svc: h3-25=":443"; ma=3600, h2=":443"; ma=3600
```

## 仕様書

| 仕様書        | 状態     | 備考     |
| ------------- | -------- | -------- |
| {{RFC(7838)}} | IETF RFC | 初回定義 |

## ブラウザーの互換性

{{Compat("http.headers.Alt-Svc")}}

## 関連情報

- [ウェブ上のリソースの識別](/ja/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
