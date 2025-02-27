---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
l10n:
  sourceCommit: 206723d78eed4637dae1f413ce7d0876ac94bfcb
---

{{HTTPSidebar}}

**`Forwarded`** リクエストヘッダーは、[リバースプロキシサーバー](/ja/docs/Web/HTTP/Proxy_servers_and_tunneling)（ロードバランサー、CDN、など）によって追加される可能性のある情報を格納します。この情報はリクエストの経路にプロキシサーバーが介在している場合、変更されるか失われます。

例えば、クライアントが HTTP プロキシー（またはロードバランサー）を通してウェブサーバーに接続している場合、サーバーログはプロキシーの IP アドレス、ホストアドレス、プロトコルのみを格納します。このヘッダーを使用して元のリクエストの IP アドレス、 ホスト、プロトコルを特定することができます。
このヘッダーはオプションで、サーバーへの経路上のどのプロキシーサーバーでも追加したり、変更したり、除去したりすることができます。

このヘッダーはデバッグ、統計、および場所に依存するコンテンツの生成に使用されます。
設計上、クライアントの IP アドレスのようなプライバシーに敏感な情報を公開します。
したがって、このヘッダーを展開するときは、ユーザーのプライバシーに注意しなければなりません。

このヘッダーの代替で、事実上の標準となっているものは {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}}, {{HTTPHeader("X-Forwarded-Proto")}} ヘッダーです。

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

単一のプロキシーからの転送ヘッダーの構文を下記に示します。
ディレクティブはセミコロンで区切られた `key=value` の組です。

```http
Forwarded: by=<identifier>;for=<identifier>;host=<host>;proto=<http|https>
```

クライアントとサーバーの間に複数のプロキシーサーバーがある場合、それ ぞれが自分自身で転送情報を指定することができます。
これはヘッダーブロックの最後に新しい `Forwarded` ヘッダーを追加するか、カンマ区切りのリストで最後の `Forwarded` ヘッダーの最後に情報を追加することで可能です。

## ディレクティブ

- `by` {{optional_inline}}

  - : リクエストがプロキシーサーバーに入ってきたインターフェイス。
    識別子は次のいずれかを取ります。

    - 難読化された識別子（"hidden" や "secret" など）。
      これは既定値として扱われます。
    - IP アドレス（v4 または v6、オプションでポート番号つき、および ipv6 は引用符と角括弧で囲まれます）
    - 先行するエンティティが不明な場合（およびリクエストの転送が行われたことを示したい場合）は "unknown"

- `for` {{optional_inline}}
  - : リクエストを発行したクライアントと、その後のプロキシーチェーン内のプロキシー。
    識別子は `by` ディレクティブと同じ値を取ります。
- `host` {{optional_inline}}
  - : プロキシーから受信したときの {{HTTPHeader("Host")}} リクエストヘッダー。
- `proto` {{optional_inline}}
  - : そのプロトコルがリクエストの作成に使用されたか (ふつうは "http" または "https")。

## 例

### `Forwarded` ヘッダーの使用

```http
Forwarded: for="_mdn"

# 大文字小文字の区別なし
Forwarded: For="[2001:db8:cafe::17]:4711"

# セミコロン区切り
Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43

# 複数のプロキシサーバーの値をカンマを使用して追加することができる
Forwarded: for=192.0.2.43, for=198.51.100.17
```

### `X-Forwarded-For` から `Forwarded` への移行

アプリケーション、サーバー、プロキシーが標準化された `Forwarded` ヘッダーに対応している場合は、 {{HTTPHeader("X-Forwarded-For")}} を置き換えることができます。
なお、 IPv6 アドレスは、 `Forwarded` では（{{HTTPHeader("X-Forwarded-For")}} ヘッダーの場合とは異なり）引用符と角括弧で囲む必要があります。

```http
X-Forwarded-For: 192.0.2.172
Forwarded: for=192.0.2.172

X-Forwarded-For: 192.0.2.43, 2001:db8:cafe::17
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPHeader("X-Forwarded-For")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}} – 接続しているクライアントではなく、プロキシー自身についての情報を提供します。
