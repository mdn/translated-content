---
title: "Permissions-Policy: cross-origin-isolated"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/cross-origin-isolated
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーの `cross-origin-isolated` ディレクティブは、現在の文書が{{domxref("Window.crossOriginIsolated", "オリジン間分離", "", "nocode")}}を必要とする API を使用できるかどうかを制御します。

具体的には、定義されたポリシーがこの機能の使用をブロックしている場合、 {{domxref("Window.crossOriginIsolated")}} および {{domxref("WorkerGlobalScope.crossOriginIsolated")}} プロパティは常に `false` を返し、オリジンが分離された文書にのみ許可される一部の API の使用制限の緩和の恩恵は受けられません。
これは、 {{HTTPHeader("Cross-Origin-Embedder-Policy")}} や {{HTTPHeader("Cross-Origin-Opener-Policy")}} ヘッダーの有無、およびその権限が許可されていた場合に文書がオリジン同士で分離されていたかどうかに関係なく true になります。

この権限が要求される API には、 {{jsxref("SharedArrayBuffer")}} オブジェクトの使用、およびスロットルされていないタイマーを使用した {{domxref("Performance.now()")}} が含まれます。その他の制限付き API については、{{domxref("Window.crossOriginIsolated")}} をご覧ください。

この権限を使用すると、オリジン間分離された文書で実際に必要とされない限り、機密性の高い API へのアクセスを制限することができます。
この機能が許可されていないが、それ以外ではオリジン間分離されていた場合、それ以外の点ではオリジン間分離されたままであることにご注意ください。
例えば、同じオリジンにある文書とのみ{{glossary("Browsing context", "閲覧コンテキストグループ")}}を共有します。

## 構文

```http
Permissions-Policy: cross-origin-isolated=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可する 1 つ以上のオリジンのリストです。
    [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`cross-origin-isolated` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
