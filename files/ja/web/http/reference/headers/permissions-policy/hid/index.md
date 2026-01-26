---
title: "Permissions-Policy: hid"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/hid
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーの `hid` ディレクティブは、現在の文書が {{domxref("WebHID API", "WebHID API", "", "nocode")}} を使用して、代替キーボードやゲームパッドなどの一般的ではない、あるいは珍しいヒューマンインターフェイス機器に接続することを許可するかどうかをコントロールします。

具体的には、定義されたポリシーで WebHID の使用がブロックされた場合、 {{domxref("Navigator.hid")}} プロパティが利用できなくなります。

## 構文

```http
Permissions-Policy: hid=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`hid` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
