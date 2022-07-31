---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
tags:
  - HTTP
  - HTTP ヘッダー
  - Reference
  - リクエストヘッダー
  - ヘッダー
browser-compat: http.headers.Forwarded
translation_of: Web/HTTP/Headers/Forwarded
---
{{HTTPSidebar}}

**`Forwarded`** ヘッダーは、[リバースプロキシサーバー](/ja/docs/Web/HTTP/Proxy_servers_and_tunneling)からの情報を含みます。リクエストの経路にプロキシーが介在している場合には、変更されたり失われたりします。

このヘッダーの代替で、事実上の標準となっているものは {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-Proto")}} ヘッダーです。

このヘッダーは、デバッグ、統計、ロケーション依存コンテンツの生成に使用され、クライアントの IP アドレスなどの機密情報を公開します。したがって、このヘッダーを展開する際には、ユーザーのプライバシーを念頭に置く必要があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

## ディレクティブ

- \<identifier>

  - : プロキシーの使用時に変更または失われた情報を公開する識別子。これは次のいずれかです。

    - IP アドレス (v4 または v6、任意でポート番号付き、 ipv6 は引用符と角括弧で囲まれます)
    - 難読化された識別子 ("\_hidden" や "\_secret" など)
    - または先行するエンティティが不明な場合 (およびリクエストの転送が行われたことを示したい場合) は "unknown"

- by=\<identifier>
  - : リクエストがプロキシサーバーに入ってきたインターフェイス。
- for=\<identifier>
  - : リクエストを発行したクライアントと、その後のプロキシーチェーン内のプロキシー。
- host=\<host>
  - : プロキシーから受信したときの {{HTTPHeader("Host")}} リクエストヘッダー。
- proto=\<http|https>
  - : そのプロトコルがリクエストの作成に使用されたか (ふつうは "http" または "https")。

## 例

### `Forwarded` ヘッダーの使用

```
Forwarded: for="_mdn"

# 大文字小文字の区別なし
Forwarded: For="[2001:db8:cafe::17]:4711"

# セミコロン区切り
Forwarded: for=192.0.2.60; proto=http; by=203.0.113.43

# 複数の値をコンマで区切って追加可能
Forwarded: for=192.0.2.43, for=198.51.100.17
```

### `X-Forwarded-For` から `Forwarded` への移行

アプリケーション、サーバー、プロキシーが標準化された `Forwarded` ヘッダーに対応している場合は、 {{HTTPHeader("X-Forwarded-For")}} を置き換えることができます。なお、 IPv6 アドレスは、 `Forwarded` では引用符と角括弧で囲む必要があります。

```
X-Forwarded-For: 123.34.567.89
Forwarded: for=123.34.567.89

X-Forwarded-For: 192.0.2.43, "[2001:db8:cafe::17]"
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}} – 接続しているクライアントではなく、プロキシー自身についての情報を提供します。
