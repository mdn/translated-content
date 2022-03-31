---
title: 'Feature-Policy: screen-wake-lock'
slug: Web/HTTP/Headers/Feature-Policy/screen-wake-lock
tags:
  - ディレクティブ
  - 機能ポリシー
  - Feature-Policy
  - HTTP
  - リファレンス
  - screen-wake-lock
  - 実験的
browser-compat: http.headers.Feature-Policy.screen-wake-lock
translation_of: Web/HTTP/Headers/Feature-Policy/screen-wake-lock
---
{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける **`screen-wake-lock`** ディレクティブは、現在の文書が [Screen Wake Lock API](/ja/docs/Web/API/Screen_Wake_Lock_API) を使用して、端末が画面を暗くしたりオフにしたりしないよう指示することを許可するかどうか制御します。

> **Note:** 早期の仕様書の草稿では、このディレクティブは `wake-lock` と呼ばれていました。

## 構文

```
Feature-Policy: screen-wake-lock <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#syntax) を参照してください。

## 既定のポリシー

`screen-wake-lock` の既定の許可リストは `'self'` です。

## 仕様書

| 仕様書                                                                                                | 状態                        | 備考                                                     |
| ----------------------------------------------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------- |
| {{SpecName('Feature Policy')}}                                                                        | {{Spec2('Feature Policy')}} | 初回定義                                         |
| [Screen Wake Lock API](https://w3c.github.io/screen-wake-lock/#the-screen-wake-lock-powerful-feature) | 編集者草稿                  | `screen-wake-lock` 機能ディレクティブの初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Screen Wake Lock API](/ja/docs/Web/API/Screen_Wake_Lock_API)
- {{HTTPHeader('Feature-Policy')}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- [許可リストの既定値](https://www.w3.org/TR/wake-lock/#wake-locks)
