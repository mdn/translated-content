---
title: "Permissions-Policy: picture-in-picture"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/picture-in-picture
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `picture-in-picture` ディレクティブは、現在の文書で動画を{{domxref("Picture-in-Picture API", "ピクチャインピクチャ", "", "nocode")}}モードで再生することを許可するかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 {{domxref("HTMLVideoElement.requestPictureInPicture()")}} を呼び出すと {{domxref("DOMException")}} 例外が `SecurityError` 型で発生します。

## 構文

```http
Permissions-Policy: picture-in-picture=<allowlist>;
```

- `<allowlist>`
  - : この機能を使用する権限が与えられているオリジンのリスト。詳しくは [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`picture-in-picture` の既定の許可リストは `*` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
