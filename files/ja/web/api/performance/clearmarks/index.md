---
title: "Performance: clearMarks() メソッド"
short-title: clearMarks()
slug: Web/API/Performance/clearMarks
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

**`clearMarks()`** メソッドは、すべての、または特定の {{domxref("PerformanceMark")}} オブジェクトを、ブラウザーのパフォーマンスタイムラインから除去します。

## 構文

```js-nolint
clearMarks()
clearMarks(name)
```

### 引数

- `name` {{optional_inline}}
  - : 文字列で、 {{domxref("PerformanceMark")}} オブジェクトの{{domxref("PerformanceEntry.name", "名前", "", 1)}}を表します。この引数を省略すると、 {{domxref("PerformanceEntry.entryType","entryType")}} が "`mark`" であるすべての項目が除去されます。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### マーカーを除去

パフォーマンスマークをすべて、あるいは特定の項目だけを消去するには、次のように `clearMarks()` メソッドを使用します。

```js
// マークの束を作成
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");
performance.mark("video-loaded");
performance.mark("video-loaded");

performance.getEntriesByType("mark").length; // 6

// "login-started" マーク項目のみを削除
performance.clearMarks("login-started");
performance.getEntriesByType("mark").length; // 4

// すべてのマーク項目を削除
performance.clearMarks();
performance.getEntriesByType("mark").length; // 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("PerformanceMark")}}
