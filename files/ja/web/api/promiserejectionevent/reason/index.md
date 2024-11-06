---
title: PromiseRejectionEvent.reason
slug: Web/API/PromiseRejectionEvent/reason
l10n:
  sourceCommit: 4b4638246aad5d39b9a2e5c572b179b4c39c0a84
---

{{APIRef("HTML DOM")}}

{{domxref("PromiseRejectionEvent")}} の **`reason`** は読み取り専用プロパティで、{{jsxref("Promise.reject()")}} に渡される理由を提供する任意の JavaScript 値、または {{jsxref("Object")}} です。理論的にはプロミスが拒否された理由についての情報を提供します。

### 値

プロミスが拒否された理由を理解するために使用することができる情報を提供する値またはオブジェクト。これは、エラーコードからテキスト、リンク、その他含めたいものを持つオブジェクトまで、何らかのものにすることができます。

## 例

```js
window.onunhandledrejection = (e) => {
  console.log(e.reason);
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- {{domxref("PromiseRejectionEvent")}}
- {{domxref("Window.rejectionhandled_event", "rejectionhandled")}}
- {{domxref("Window.unhandledrejection_event", "unhandledrejection")}}
