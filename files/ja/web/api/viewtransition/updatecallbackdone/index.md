---
title: "ViewTransition: updateCallbackDone プロパティ"
short-title: updateCallbackDone
slug: Web/API/ViewTransition/updateCallbackDone
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{APIRef("View Transitions API")}}{{SeeCompatTable}}

**`updateCallbackDone`** は {{domxref("ViewTransition")}} インターフェイスの読み取り専用のプロパティで、 {{domxref("Document.startViewTransition()", "document.startViewTransition()")}} のコールバックが返すプロミスが履行されると履行され、拒否されると拒否されるプロミス ({{jsxref("Promise")}}) です。

`updateCallbackDone` は、ビュー遷移のアニメーションの成否を気にせず、 DOM が更新されたかどうか、いつ更新されたかを知りたい場合に有益です。

## 値

プロミスです。

## 例

```js
// 新しいビュー遷移を開始
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

- [Smooth and simple transitions with the View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/)
