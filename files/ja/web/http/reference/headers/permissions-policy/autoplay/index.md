---
title: "Permissions-Policy: autoplay"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/autoplay
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `autoplay` ディレクティブは、現在の文書で {{domxref("HTMLMediaElement")}} インターフェイスによってメディアの自動再生をリクエストすることを許可するかどうかを制御します。

仕様上、ポリシーによってこの機能の使用がブロックされており、ユーザのジェスチャーもなかった場合、 {{domxref("HTMLMediaElement.play()")}} が返す {{jsxref("Promise")}} は {{domxref("DOMException")}} で拒否されます。
{{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素の [`autoplay`](/ja/docs/Web/HTML/Reference/Elements/audio#autoplay) 属性は無視されます。

> [!NOTE]
> 自動再生や自動再生ブロックの詳細については、 [メディアおよびウェブオーディオ API の自動再生ガイド](/ja/docs/Web/Media/Guides/Autoplay) の記事を参照してください。

## 構文

```http
Permissions-Policy: autoplay=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`autoplay` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
