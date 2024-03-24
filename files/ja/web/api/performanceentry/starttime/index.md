---
title: "PerformanceEntry: startTime プロパティ"
short-title: startTime
slug: Web/API/PerformanceEntry/startTime
l10n:
  sourceCommit: 99a75e695dbb46731dca4757e9d4c42d80bb52fc
---

{{APIRef("Performance API")}}

**`startTime`** プロパティは読み取り専用で、{{domxref("PerformanceEntry","パフォーマンス項目", "", "no-code")}}のうち最初に記録された {{domxref("DOMHighResTimeStamp","タイムスタンプ", "", "no-code")}}を返します。このプロパティの意味は、この項目の {{domxref("PerformanceEntry.entryType", "entryType")}} の値によって異なります。

## 値

この{{domxref("PerformanceEntry","パフォーマンス項目")}}が作成されたときの最初のタイムスタンプを表す {{domxref("DOMHighResTimeStamp")}} です。

このプロパティの意味は、この項目の {{domxref("PerformanceEntry.entryType", "entryType")}} の値によって異なります。

- `element`
  - : この項目の {{domxref("PerformanceElementTiming.renderTime", "renderTime")}} の値が `0` でない場合はその値、そうでない場合はこの項目の {{domxref("PerformanceElementTiming.loadTime", "loadTime")}} の値。
- `event`
  - : イベントが作成された時刻、すなわちそのイベントの [`timeStamp`](/ja/docs/Web/API/Event/timeStamp) プロパティです。
- `first-input`
  - : 最初の入力イベントが作成された時刻、すなわちそのイベtのの [`timeStamp`](/ja/docs/Web/API/Event/timeStamp) プロパティです。
- `largest-contentful-paint`
  - : この項目の {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} の値が `0` でない場合はその値、そうでない場合はこの項目の {{domxref("LargestContentfulPaint.loadTime", "loadTime")}} の値。
- `layout-shift`
  - : レイアウトシフトが始まった時刻。
- `longtask`
  - : タスクが始まった時刻。
- `mark`
  - : {{domxref("Performance.mark","performance.mark()")}} の呼び出しによってマークが作成された時刻。
- `measure`
  - : {{domxref("Performance.measure","performance.measure()")}} の呼び出しによって指標が作成された時刻。
- `navigation`
  - : 常に `0` です。
- `paint`
  - : 描画が発生した時刻。
- `resource`
  - : この項目の {{domxref("PerformanceResourceTiming.fetchStart", "fetchStart")}} プロパティの値。
- `taskattribution`
  - : 常に `0` です。
- `visibility-state`
  - : 可視状態の変更が発生した時刻。

## 例

### startTime プロパティの使用

次の例は、パフォーマンス監視中にログ出力することができる `startTime` プロパティの使用例を示しています。

メモ: {{domxref("performance.mark()")}} メソッドでは、自分自身で `startTime` を設定することができ、 {{domxref("performance.measure()")}} メソッドでは、測定の開始を設定することができます。

```js
performance.mark("my-mark");
performance.mark("my-other-mark", { startTime: 12.5 });

loginButton.addEventListener("click", (clickEvent) => {
  performance.measure("login-click", { start: clickEvent.timeStamp });
});

function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
