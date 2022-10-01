---
title: WindowOrWorkerGlobalScope.isSecureContext
slug: Web/API/isSecureContext
original_slug: Web/API/WindowOrWorkerGlobalScope/isSecureContext
---

{{APIRef()}}{{SeeCompatTable}}

{{domxref("WindowOrWorkerGlobalScope")}} インターフェイスの読み取り専用 **`isSecureContext`** プロパティは、現在のコンテキストが安全（`true`）かそうではない（`false`）を示すブール値を返します。

## 構文

```
var isItSecure = self.isSecureContext; // or just isSecureContext
```

### 値

{{domxref("Boolean")}}.

## 仕様

| 仕様                                                                                                                                                                     | ステータス                           | コメント   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ---------- |
| {{SpecName('Secure Contexts', '#dom-windoworworkerglobalscope-issecurecontext', 'WindowOrWorkerGlobalScope.isSecureContext')}} | {{Spec2('Secure Contexts')}} | 初期定義。 |

## ブラウザ互換性

{{Compat("api.WindowOrWorkerGlobalScope.isSecureContext")}}

## 参照

- [Secure contexts](/ja/docs/Web/Security/Secure_Contexts)
