---
title: Window.isSecureContext
slug: orphaned/Web/API/Window/isSecureContext
tags:
  - API
  - Property
  - Reference
  - Security
  - Window
translation_of: Web/API/Window/isSecureContext
original_slug: Web/API/Window/isSecureContext
---
{{APIRef}}{{SeeCompatTable}}

**`window.isSecureContext`** 読み取り専用プロパティは、コンテキストが [安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts) を必要とする機能を使用できるかどうかを示します。

## 構文

```
var isSecure = window.isSecureContext
```

## 例

### 機能検出

グローバルスコープの `isSecureContext` の真偽値を用いることで、安全なコンテクストかどうかをチェックすることで機能検出できます。

```js
if (window.isSecureContext) {
  // Page is a secure context so service workers are now available
  navigator.serviceWorker.register("/offline-worker.js").then(function () {
    ...
  });
}
```

## 仕様

| 仕様                                     | ステータス                                                                                               | コメント   |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------- |
| {{SpecName('Secure Contexts')}} | {{Spec2('Secure Contexts','#monkey-patching-global-object','isSecureContext')}} | 初期定義。 |

## ブラウザー実装状況

{{Compat("api.Window.isSecureContext")}}

## 関連項目

- [安全なコンテクスト](/ja/docs/Web/Security/Secure_Contexts)
