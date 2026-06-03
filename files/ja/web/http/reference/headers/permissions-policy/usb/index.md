---
title: "Permissions-Policy: usb"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/usb
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `usb` ディレクティブは、現在の文書が {{domxref("WebUSB API", "WebUSB API", "", "nocode")}} を使用できるかどうかを制御します。

仕様上、定義されたポリシーにより WebHID の使用がブロックされた場合、 {{domxref("Navigator.usb")}} プロパティは利用できません。

## 構文

```http
Permissions-Policy: usb=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`usb` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader('Permissions-Policy')}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
