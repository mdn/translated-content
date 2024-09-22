---
title: "PerformanceEventTiming: processingStart プロパティ"
short-title: processingStart
slug: Web/API/PerformanceEventTiming/processingStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

読み取り専用の **`processingStart`** プロパティは、イベント配信が開始された時刻を返します。これは、イベントハンドラーが実行されようとしている時点です。

## 値

{{domxref("DOMHighResTimeStamp")}} タイムスタンプです。

## 例

### processingStart プロパティの使用

`processingStart` プロパティはイベントタイミング項目 ({{domxref("PerformanceEventTiming")}}) を監視するときに使用することができます。例えば、入力遅延やイベント処理時間を計算する場合などです。

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

- {{domxref("PerformanceEventTiming.processingEnd")}}
