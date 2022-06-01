---
title: 'Feature-Policy: display-capture'
slug: Web/HTTP/Headers/Feature-Policy/display-capture
tags:
  - ディレクティブ
  - 機能ポリシー
  - HTTP
  - リファレンス
  - display-capture
  - 実験的
browser-compat: http.headers.Feature-Policy.display-capture
translation_of: Web/HTTP/Headers/Feature-Policy/display-capture
---
{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `display-capture` ディレクティブは、現在の文書が [Screen Capture API](/ja/docs/Web/API/Screen_Capture_API)、すなわち {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} を使用して画面の内容をキャプチャすることを許可するかどうかを制御します。

文書で `display-capture` が無効になっていた場合、文書は {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} を通じて画面キャプチャを行うことができなくなります。

## 構文

```
Feature-Policy: display-capture <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#syntax) を参照してください。

## 既定のポリシー

`display-capture` の許可リストの既定値は `'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- [Screen Capture API](/ja/docs/Web/API/Screen_Capture_API)
- [Screen Capture API の使用](/ja/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
