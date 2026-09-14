---
title: "PerformanceObserver: observe() メソッド"
short-title: observe()
slug: Web/API/PerformanceObserver/observe
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("Performance API")}}

**`observe()`** は **{{domxref("PerformanceObserver")}}** インターフェイスのメソッドで、観測するパフォーマンス項目型のセットを指定します。

項目型の一覧には {{domxref("PerformanceEntry.entryType")}} を、ユーザーエージェントが対応している項目型の一覧には {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} を使用してください。

一致するパフォーマンス項目が記録されると、パフォーマンスオブザーバーのコールバック関数 ({{domxref("PerformanceObserver")}}) の作成時に設定されたコールバック関数が呼び出されます。

## 構文

```js-nolint
observe(options)
```

### 引数

- `options`
  - : 以下の使用可能メンバーを持つオブジェクトです。
    - `buffered`
      - : 論理値のフラグで、バッファリングされた項目をオブザーバーのバッファーにキューイングするかどうかを示します。 "`type`" オプションと一緒の場合のみ使用してください。
    - `durationThreshold`
      - : {{domxref("PerformanceEventTiming")}} 項目の閾値を定義する {{domxref("DOMHighResTimeStamp")}} です。既定値では 104ms で、8ms 単位で丸められます。使用可能な閾値の最小値は 16ms です。 `entryTypes` オプションと一緒に使用することはできません。
    - `entryTypes`
      - : 文字列オブジェクトの配列で、それぞれ観測するパフォーマンス項目の型を指定します。 "`type`", "`buffered`", "`durationThreshold`" オプションと一緒に使用することはできません。

        有効なパフォーマンス項目名の一覧は {{domxref("PerformanceEntry.entryType")}} を参照ください。認識できない型は無視されますが、開発者がコードをデバッグするのを支援するために、ブラウザーがコンソールに警告メッセージを出力することがあります。有効な型が見つからなかった場合、 `observe()` は何の効果もありません。

    - `type`
      - : 観測するパフォーマンス項目の型を指定する単一の文字列。 `entryTypes` オプションと一緒に使用してはいけません。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この例では、2 つの `PerformanceObservers` を作成して設定します。1 つは`"mark"` と `"frame"` イベントを観測し、もう 1 つは `"measure"` イベントを観測します。

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "mark" and "measure" events
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

### 単一のパフォーマンス項目型を観測

次の例は、`buffered` と `type` の構成オプションを使用して、リソースタイミングイベント ({{domxref("PerformanceResourceTiming")}}) のバッファーイベントを取得し、新しいイベントを購読します。オブザーバーが `buffered` または `durationThreshold` オプションを使用するように構成する必要がある場合は、 `entryType` の代わりに `type` を使用します。そうしないと、複数の型のパフォーマンス項目をうまく収集できません。

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "resource" events
  });
});
observer.observe({ type: "resource", buffered: true });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
