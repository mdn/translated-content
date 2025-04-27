---
title: "Permissions-Policy: screen-wake-lock"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/screen-wake-lock
original_slug: Web/HTTP/Headers/Permissions-Policy/screen-wake-lock
---

{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける **`screen-wake-lock`** ディレクティブは、現在の文書が [Screen Wake Lock API](/ja/docs/Web/API/Screen_Wake_Lock_API) を使用して、端末が画面を暗くしたりオフにしたりしないよう指示することを許可するかどうか制御します。

> [!NOTE]
> 早期の仕様書の草稿では、このディレクティブは `wake-lock` と呼ばれていました。

## 構文

```
Permissions-Policy: screen-wake-lock <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#%E6%A7%8B%E6%96%87) を参照してください。

## 既定のポリシー

`screen-wake-lock` の既定の許可リストは `'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Screen Wake Lock API](/ja/docs/Web/API/Screen_Wake_Lock_API)
- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Guides/Feature_Policy/Using_Feature_Policy)
- [許可リストの既定値](https://www.w3.org/TR/wake-lock/#wake-locks)
