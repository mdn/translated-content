---
title: "PerformanceEventTiming: processingEnd プロパティ"
short-title: processingEnd
slug: Web/API/PerformanceEventTiming/processingEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

読み取り専用の **`processingEnd`** プロパティは、最後のイベントハンドラーが実行を完了した時刻を返します。

そのようなイベントハンドラーがない場合は {{domxref("PerformanceEventTiming.processingStart")}} と等しくなります。

## 値

{{domxref("DOMHighResTimeStamp")}} タイムスタンプです。

## 例

### processingEnd プロパティの使用

`processingEnd` プロパティはイベントタイミング項目 ({{domxref("PerformanceEventTiming")}}) を監視するときに使用することができます。例えば、入力遅延やイベント処理時間を計算する場合などです。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // 時間全体
    const duration = entry.duration;
    // 入力遅延（イベント処理前）
    const delay = entry.processingStart - entry.startTime;
    // 銅器イベント処理時間
    // （配信の開始から終了まで）
    const time = entry.processingEnd - entry.processingStart;
  });
});
// イベントのオブザーバーを登録
observer.observe({ type: "event", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceEventTiming.processingStart")}}
