---
title: "ViewTransition: updateCallbackDone プロパティ"
short-title: updateCallbackDone
slug: Web/API/ViewTransition/updateCallbackDone
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("View Transition API")}}

**`updateCallbackDone`** は {{domxref("ViewTransition")}} インターフェイスの読み取り専用のプロパティで、 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} メソッドのコールバックが返すプロミスが履行されると履行され、拒否されると拒否されるプロミス ({{jsxref("Promise")}}) です。

`updateCallbackDone` は、同一の文書 (SPA) のビュー遷移のアニメーションの成否を気にせず、 DOM が更新されたかどうか、いつ更新されたかを知りたい場合に有益です。

> [!NOTE]
> 文書間 (MPA) のビュー遷移の場合、関連付けられた `ViewTransition` の `updateCallbackDone` プロミスは自動的に履行されます。

## 値

プロミス ({{jsxref("Promise")}}) です。

## 例

```js
// 新しい SPA のビュー遷移を開始
const transition = document.startViewTransition(() => displayNewImage());

transition.updateCallbackDone.then(() => {
  // 正常に更新された DOM に応答
});
```

有用な例は、 [Transitions as an enhancement](https://developer.chrome.com/docs/web-platform/view-transitions/#transitions-as-an-enhancement) を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Smooth transitions with the View Transition API](https://developer.chrome.com/docs/web-platform/view-transitions/)
