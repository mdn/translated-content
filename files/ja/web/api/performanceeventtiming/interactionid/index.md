---
title: "PerformanceEventTiming: interactionId プロパティ"
short-title: interactionId
slug: Web/API/PerformanceEventTiming/interactionId
l10n:
  sourceCommit: 989453176fd8756828b34b743a677a797d897156
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

読み取り専用の **`interactionId`** プロパティは、一連の関連イベントを発生させたユーザー操作を一意に識別する ID を返します。

## 解説

ユーザーがウェブページを操作するとき、ユーザー操作（例えばクリック）は通常 `pointerdown`、`pointerup`、`click` イベントなどの一連のイベントを発生させます。この一連のイベントの待ち時間を計測するために、イベントは同じ `interactionId` を共有します。

`interactionId` はそのユーザー操作に属する以下のイベント型に対してのみ計算されます。それ以外は `0` です。

| イベント型                                                                                                                                                | ユーザー操作                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| {{domxref("Element/pointerdown_event", "pointerdown")}}, {{domxref("Element/pointerup_event", "pointerup")}}, {{domxref("Element/click_event", "click")}} | クリック / タップ / ドラッグ |
| {{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keyup_event", "keyup")}}                                                              | キー押下                     |

## 値

数値です。

## 例

### interactionId の使用

次の例では、ある操作に対応するすべてのイベントの時間を収集しています。 `eventLatencies` マップを使用して、例えばユーザーの操作の最大時間を持つイベントを探すことができます。

```js
// The key is the interaction ID.
let eventLatencies = {};

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.interactionId > 0) {
      const interactionId = entry.interactionId;
      if (!eventLatencies.has(interactionId)) {
        eventLatencies[interactionId] = [];
      }
      eventLatencies[interactionId].push(entry.duration);
    }
  });
});

observer.observe({ type: "event", buffered: true });

// ユーザー操作の最大イベント再生時間でイベントをログ出力します
Object.entries(eventLatencies).forEach(([k, v]) => {
  console.log(Math.max(...v));
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
