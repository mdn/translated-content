---
title: 'Feature-Policy: autoplay'
slug: Web/HTTP/Headers/Feature-Policy/autoplay
tags:
  - ディレクティブ
  - 機能ポリシー
  - Feature-Policy
  - HTTP
  - リファレンス
  - autoplay
  - 実験的
browser-compat: http.headers.Feature-Policy.autoplay
translation_of: Web/HTTP/Headers/Feature-Policy/autoplay
---
{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `autoplay` ディレクティブは、現在の文書で {{domxref("HTMLMediaElement")}} インターフェイスによってメディアの自動再生をリクエストすることを許可するかどうかを制御します。このポリシーが有効であれば、 {{domxref("HTMLMediaElement.play()")}} から返却された {{jsxref("Promise")}} が {{domxref("DOMException")}} で拒否されます。 {{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素の {{htmlattrxref("autoplay", "audio")}} 属性は無視されます。

自動再生や自動再生ブロックの詳細については、 [メディアおよび Web Audio API の自動再生ガイド](/ja/docs/Web/Media/Autoplay_guide) の記事を参照してください。

## 構文

```
Feature-Policy: autoplay <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#syntax) を参照してください。

## 既定のポリシー

[Google Chrome](https://www.chromestatus.com/feature/5100524789563392) における既定値は
`'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
