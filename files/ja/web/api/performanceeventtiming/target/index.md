---
title: "PerformanceEventTiming: target プロパティ"
short-title: target
slug: Web/API/PerformanceEventTiming/target
l10n:
  sourceCommit: ac2874857a3de0be38430e58068597edf0afa2b2
---

{{APIRef("Performance API")}}

読み取り専用の **`target`** プロパティは、関連付けられたイベントの最後の [`target`](/ja/docs/Web/API/Event/target) （イベントが最後に配信されたノード）を返します。

## 値

イベントが最後に配信された {{domxref("Node")}} です。

または、 `Node` が文書の DOM から切断されていたり、[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) の中にあったりした場合は [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) です。

## 例

### 特定の最後のターゲットを持つイベントの監視

`target` プロパティはイベントタイミング項目 ({{domxref("PerformanceEventTiming")}}) を監視するときに使用することができます。例えば、指定された最後の対象に対してのみイベントをログ出力し、測定する場合などです。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.target && entry.target.id === "myNode") {
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
