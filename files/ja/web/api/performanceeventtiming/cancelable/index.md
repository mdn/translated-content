---
title: "PerformanceEventTiming: cancelable プロパティ"
short-title: cancelable
slug: Web/API/PerformanceEventTiming/cancelable
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

読み取り専用の **`cancelable`** プロパティは、関連付けられたイベントの [`cancelable`](/ja/docs/Web/API/Event/cancelable) プロパティを返し、イベントを取り消すことができるかどうかを示します。

## 値

論理値です。関連付けられたイベントが取り消し可能であれば `true`、そうでなければ `false` です。

## 例

### 取り消し不可のイベントを監視

cancelable` プロパティは、イベントタイミング項目 ({{domxref("PerformanceEventTiming")}}) を監視するときに使用することができます。例えば、取り消される可能性のないイベントのみをログ出力して測定する場合などです。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (!entry.cancelable) {
      const delay = entry.processingStart - entry.startTime;
      console.log(entry.name, delay);
    }
  });
});

// イベントのオブザーバーを登録
observer.observe({ type: "event", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
