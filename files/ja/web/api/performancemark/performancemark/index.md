---
title: "PerformanceMark: PerformanceMark() コンストラクター"
short-title: PerformanceMark()
slug: Web/API/PerformanceMark/PerformanceMark
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

**`PerformanceMark()`** コンストラクターは、指定された名前の{{domxref("DOMHighResTimeStamp","タイムスタンプ","",1)}}を作成します。

{{domxref("Performance.mark","performance.mark()")}} とは異なり、コンストラクターが作成するパフォーマンスマークはブラウザーのパフォーマンスタイムラインに追加されません。つまり、{{domxref("Performance")}} インターフェイスの `getEntries*()` メソッド（{{domxref("Performance.getEntries","getEntries()")}}、{{domxref("Performance.getEntriesByName","getEntriesByName()")}}、{{domxref("Performance.getEntriesByType","getEntriesByType()")}}）を呼び出しても、これらのマークの項目は表示されません。

## 構文

```js-nolint
new PerformanceMark(name)
new PerformanceMark(name, markOptions)
```

### 引数

- `name`
  - : 文字列で、マークの名前を表します。
- `markOptions` {{optional_inline}}
  - : オブジェクトで、タイムスタンプとマークの追加メタデータを指定します。
    - `detail` {{optional_inline}}
      - : マークに記載する任意のメタデータ。既定値は `null` です。
    - `startTime` {{optional_inline}}
      - : {{domxref("DOMHighResTimeStamp")}} で、マークの時刻として使用されます。既定値は {{domxref("performance.now()")}} です。

### 返値

{{domxref("PerformanceMark")}} オブジェクトです。

### 例外

- {{jsxref("SyntaxError")}}: Thrown このメソッドに指定された `name` が、{{domxref("PerformanceTiming")}} インターフェイスにすでに存在する場合に発生します。
- {{jsxref("TypeError")}}: `startTime` が負の数の場合に発生します。

## 例外

次の例は、パフォーマンス項目がどのように構成され、ブラウザーのパフォーマンスタイムラインの一部にならないことを示しています。

```js
new PerformanceMark("squirrel");
new PerformanceMark("monkey");
new PerformanceMark("dog");

const allEntries = performance.getEntriesByType("mark");
console.log(allEntries.length);
// 0
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Performance.mark","performance.mark()")}}
