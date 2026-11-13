---
title: "Permissions-Policy: serial"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/serial
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `serial` ディレクティブは、現在の文書が、シリアルポートに直接接続されたシリアル機器、またはシリアルポートをエミュレートする USB または Bluetooth 機器と通信するために{{domxref("Web Serial API", "ウェブシリアル API", "", "nocode")}} を使用できるかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 {{domxref("Serial.requestPort()")}} および {{domxref("Serial.getPorts()")}} を呼び出すと返されるプロミス ({{jsxref("Promise")}}) が {{domxref("DOMException")}} の `SecurityError` 型で拒否されます。

## 構文

```http
Permissions-Policy: serial=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`serial` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
