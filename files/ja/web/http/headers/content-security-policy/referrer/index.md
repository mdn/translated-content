---
title: "CSP: referrer"
slug: Web/HTTP/Headers/Content-Security-Policy/referrer
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}} {{deprecated_header}}{{Non-standard_header}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`referrer`** ディレクティブは、ページから離れたリンクの {{HTTPHeader("Referer")}} ヘッダー（元の仕様書の綴りミスのため `r` は単一）の情報を指定するために使用されます。この API は非推奨であり、ブラウザーから削除されました。

> **メモ:** 代わりに {{HTTPHeader("Referrer-Policy")}} ヘッダーを使用してください。

## 構文

```http
Content-Security-Policy: referrer <referrer-policy>;
```

`<referrer-policy>` は以下のいずれかの値になります:

- "no-referrer"
  - : {{HTTPHeader("Referer")}} ヘッダーは完全に除外されます。リファラー情報はリクエストと共に送信されません。
- "none-when-downgrade"
  - : これがポリシーが指定されていない場合のユーザーエージェントの既定の動作です。以前と同じ安全性 (HTTPS->HTTPS) の宛先にはオリジンが送信されますが、安全性の低い宛先 (HTTPS->HTTP) には送信されません。
- "origin"
  - : すべての場合で、リファラーとして文書ののオリジンのみ送信されます。
    `https://example.com/page.html` の文書の場合は `https://example.com/` というリファラーが送信されます。
- "origin-when-cross-origin" / "origin-when-crossorigin"
  - : 同一オリジンのリクエストを実行する際は完全な URL が送信されますが、それ以外の場合は文書のオリジンのみ送信されます。
- "unsafe-url"
  - : 同一オリジンまたはオリジン間のリクエストを実行する際は完全な URL (引数は除外) が送信されます。このポリシーは、 TLS で保護されたリソースから保護されていないオリジンへのオリジンとパスを漏洩させます。この設定の影響を慎重に検討してください。

## 例

```http
Content-Security-Policy: referrer "none";
```

## 仕様書

いずれの仕様書の一部でもありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}} ヘッダー
- {{HTTPHeader("Referer")}} ヘッダー
