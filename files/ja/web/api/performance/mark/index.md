---
title: performance.mark()
slug: Web/API/Performance/mark
tags:
  - API
  - メソッド
  - リファレンス
  - ウェブパフォーマンス
browser-compat: api.Performance.mark
translation_of: Web/API/Performance/mark
---
{{APIRef("User Timing API")}}

**`mark()`** メソッドは、ブラウザーのパフォーマンスエントリーバッファーに、指定された名前で{{domxref("DOMHighResTimeStamp","timestamp")}} を作成します。

アプリケーション定義のタイムスタンプは、{{domxref("Performance")}} インタフェースの `getEntries*()` メソッド ({{domxref("Performance.getEntries","getEntries()")}}、{{domxref("Performance.getEntriesByName","getEntriesByName()")}} または{{domxref("Performance.getEntriesByType","getEntriesByType()")}}) のいずれかによって取得できます。

`mark()` は内部的にデータを {{domxref("PerformanceEntry")}} として格納します。

{{AvailableInWorkers}}

## 構文

```js
performance.mark(name);
performance.mark(measureName, markOptions)
```

### 引数

- name
  - : {{domxref("DOMString")}} で、マークの名前を表します。このメソッドで指定された `name` がすでに {{domxref("PerformanceTiming")}} インターフェイスに存在していた場合は、 {{jsxref("SyntaxError")}} が発生します。

- `markOptions` {{optional_inline}}
  - : このマークのためにタイムスタンプと追加のメタデータを指定するためのオブジェクトです。

    - `detail`
      - : マークに含める任意のメタデータです。
    - `startTime`
      - : マークの時刻として使用する {{domxref("DOMHighResTimeStamp")}} desu.

### 返値

- entry
  - : 生成された {{domxref("PerformanceMark")}} エントリーです。

## 例

次の例は、`mark()` を使用して {{domxref("PerformanceMark")}} エントリーを作成および取得する方法を示しています。

```js
// たくさんの mark を作成します。
performance.mark("squirrel");
performance.mark("squirrel");
performance.mark("monkey");
performance.mark("monkey");
performance.mark("dog");
performance.mark("dog");

// PerformanceMark エントリーをすべて取得します。
const allEntries = performance.getEntriesByType("mark");
console.log(allEntries.length);
// 6

// "monkey" PerformanceMark エントリーをすべて入手します。
const monkeyEntries = performance.getEntriesByName("monkey");
console.log(monkeyEntries.length);
// 2

// すべての mark を消去します。
performance.clearMarks();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
