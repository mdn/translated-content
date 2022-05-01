---
title: X-Forwarded-For
slug: Web/HTTP/Headers/X-Forwarded-For
tags:
  - HTTP
  - HTTP ヘッダー
  - ヘッダー
  - リクエストヘッダー
  - リファレンス
  - 標準外
translation_of: Web/HTTP/Headers/X-Forwarded-For
---
{{HTTPSidebar}}

**X-Forwarded-For** (XFF) ヘッダーは、 HTTP プロキシ又はロードバランサーを通過してウェブサーバーへ接続したクライアントの、送信元 IP アドレスを特定するために事実上の標準となっているヘッダーです。クライアントとサーバーとの間でトラフィックに何かが介在すると、サーバーのアクセスログにはプロキシ又はロードバランサーのアドレスしか残りません。クライアントの元 IP アドレスを記録するために、`X-Forwarded-For` 要求ヘッダーが使用されます。

このヘッダーはデバッグ、統計、位置に依存したコンテンツの生成などに使用され、クライアントの IP アドレスのようなプライバシーに敏感な情報を公開します。従って、このヘッダーを展開する時は、ユーザーのプライバシーを念頭に置く必要があります。

標準化されたヘッダーは HTTP {{HTTPHeader("Forwarded")}} ヘッダーです。

`X-Forwarded-For` は、電子メールメッセージが他のアカウントから転送されたことを示す電子メールヘッダーとしても使われます。

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">ヘッダー種別</th>
   <td>{{Glossary("Request header", "要求ヘッダー")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
   <td>いいえ</td>
  </tr>
 </tbody>
</table>

## 構文

```
X-Forwarded-For: <client>, <proxy1>, <proxy2>
```

## ディレクティブ

- \<client>
  - : クライアントの IP アドレス
- \<proxy1>, \<proxy2>
  - : 要求が複数のプロキシを通して行われる場合、それぞれの通過するプロキシの IP アドレスが書き出されます。つまり、最も右の IP アドレスが最も後のプロキシであり、最も左の IP アドレスが元のクライアントの IP アドレスです。

## 例

```
X-Forwarded-For: 2001:db8:85a3:8d3:1319:8a2e:370:7348

X-Forwarded-For: 203.0.113.195

X-Forwarded-For: 203.0.113.195, 70.41.3.18, 150.172.238.178
```

## 仕様書

現時点で、仕様書の一部ではありません。このヘッダーの標準化版は {{HTTPHeader("Forwarded")}} ヘッダーです。

## 関連情報

- {{HTTPHeader("Forwarded")}}
- {{HTTPHeader("X-Forwarded-Host")}}
- {{HTTPHeader("X-Forwarded-Proto")}}
- {{HTTPHeader("Via")}}
