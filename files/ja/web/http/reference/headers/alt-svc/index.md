---
title: Alt-Svc ヘッダー
short-title: Alt-Svc
slug: Web/HTTP/Reference/Headers/Alt-Svc
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

HTTP の **`Alt-Svc`** {{Glossary("response header", "レスポンスヘッダー")}}は、今後のリクエストにおいて、別のネットワーク上の場所（「代替サービス」）をそのオリジンに対する権威あるものとして扱うことができることをサーバーが示すことができます。

これにより、処理中のリクエストに影響を与えることなく新しいプロトコルバージョンを通知することができるので、サーバーのトラフィック管理にも役立ちます。代替サービスの利用はエンドユーザーには認識されません。URLやリクエストの発信元は変更されず、追加の往復通信も発生しません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

- `clear`
  - : そのオリジンのすべての代替サービスが無効となります。
- `<protocol-id>`
  - : {{Glossary("ALPN", "Application-Layer Protocol Negotiation (ALPN)")}} プロトコル識別子。例えば、HTTP/2 の `h2` および HTTP/3 プロトコルのドラフト 25 の `h3-25` があります。
- `<alt-authority>`
  - : 任意のホストのオーバーライド、コロン、および必須のポート番号で構成される代替機関を指定する引用符付きの文字列。
- `ma=<max-age>` {{optional_inline}}
  - : 代替サービスが最新であると見なされる秒数。
    省略された場合、デフォルトは 24 時間となります。
    代替サービスの項目は、レスポンスの有効期間（{{HTTPHeader("Age")}} ヘッダーから取得）を差し引いた、最大 `<max-age>` 秒間キャッシュされます。
    キャッシュされた項目の有効期限が切れると、クライアントは新しい接続においてこの代替サービスを使用できなくなります。
- `persist=1` {{optional_inline}}
  - : ネットワーク設定の変更によって項目が削除されることはありません。
    通常、このような変更が行われると、キャッシュされた代替サービス項目は消去されます。

区切り文字としてカンマを使用して、単一の `Alt-Svc` ヘッダーで複数の項目を指定できます。
その場合、前にある項目がより望ましいとみなされます。

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

- [Alternative Services](https://mnot.net/blog/2016/alt-svc) - HTTP 作業グループ代表, Mark Nottingham (2016)
