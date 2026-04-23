---
title: "CSP: upgrade-insecure-requests"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`upgrade-insecure-requests`** ディレクティブは、ユーザーエージェントに、すべてのサイトの安全でない URL（HTTP 経由で提供される URL）をセキュリティで保護された URL（HTTPS を介して提供されるもの）で置き換えられたかのように処理するよう指示します。このディレクティブは、書き換えが必要な安全ではない古い URL が多数存在するウェブサイトのためのものです。

> [!NOTE]
> `upgrade-insecure-requests` ディレクティブは、 {{CSP("block-all-mixed-content")}} よりも前に処理され、もし設定されていれば後者は何もしません。どちらかのディレクティブを設定することをお勧めしますが、 HTTP にリダイレクトした後で HTTPS を強制することができない古いブラウザーで HTTPS を強制させたくない限り、両方を指定することはできません。

`upgrade-insecure-requests` ディレクティブは、第三者のサイトのリンクを経由してサイトにアクセスしたユーザーが最上位のナビゲーション用に HTTPS にアップグレードされることを保証しないため、 {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) ヘッダーを置換せず、ユーザーがSSLストリッピング攻撃の対象にならないように、適切な `max-age` を設定するようにしてください。

## 構文

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## 例

### HTTP ヘッダーの使用

```http
Content-Security-Policy: upgrade-insecure-requests;
```

### HTML の meta 要素の使用

```html
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests" />
```

HTTP から HTTPS に移行したいドメイン example.com に上記のヘッダーを設定すると、ナビゲーション以外の安全でないリソースリクエスト（ファーストパーティおよびサードパーティのリクエスト）は自動的にアップグレードされます。

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

これらの URL は、リクエストが行われる前に書き直されます。つまり、安全でないリクエストがネットワークに侵入しないようにします。なお、リクエストされたリソースが実際に HTTPS 経由で利用可能ではない場合、リクエストは HTTP で代替されずに失敗することに注意してください。

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

第三者のリソースへのナビゲーションをアップグレードすると、破壊の可能性が大幅に高まりますので、これらはアップグレードされません。

```html
<a href="https://example.com/">Home</a>
<a href="http://not-example.com/">Home</a>
```

### 安全ではないリクエストの発見

{{HTTPHeader("Content-Security-Policy-Report-Only")}} ヘッダーと {{CSP("report-uri")}} ディレクティブを利用して、強制ポリシーと報告されたポリシーを次のように設定することができます。

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

このようにして、安全なサイト上の安全でない要求は引き続きアップグレードされますが、監視ポリシーに違反した場合だけが、安全でないリソースがエンドポイントに報告されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}} ヘッダー
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) ヘッダー
- {{CSP("block-all-mixed-content")}}
- [混在コンテンツ](/ja/docs/Web/Security/Defenses/Mixed_content)
