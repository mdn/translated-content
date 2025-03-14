---
title: "PerformanceObserver: supportedEntryTypes 静的プロパティ"
short-title: supportedEntryTypes
slug: Web/API/PerformanceObserver/supportedEntryTypes_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Performance API")}}

**`supportedEntryTypes`** は {{domxref("PerformanceObserver")}} インターフェイスの静的読み取り専用プロパティで、このユーザーエージェントが対応している {{domxref("PerformanceEntry.entryType","entryType")}} 値の配列を返します。

対応している項目のリストはブラウザーごとに異なり、進化しているため、このプロパティによってウェブ開発者は利用できる項目を調べることができます。

## 値

{{domxref("PerformanceEntry.entryType")}} 値の配列です。

## 例

### コンソールを使用して対応している値をチェック

ブラウザーの対応している {{domxref("PerformanceEntry.entryType","entryType")}} 値を探すには、 <kbd>PerformanceObserver.supportedEntryTypes</kbd> とコンソールに入力します。これは対応している値の配列を返します。

```js
PerformanceObserver.supportedEntryTypes;

// Chrome 99 では ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "mark", "measure", "navigation", "paint", "resource"] を返す
```

### 未対応の型のチェック

以下の関数は、使用可能な項目型の配列に対応しているか調べます。サポートされていない型はコンソールにログ出力されますが、この情報をクライアント側の分析にログ出力して、具体的な型が監視できなかったことを示すこともできます。

```js
function detectSupport(entryTypes) {
  for (const entryType of entryTypes) {
    if (!PerformanceObserver.supportedEntryTypes.includes(entryType)) {
      console.log(entryType);
    }
  }
}

detectSupport(["resource", "mark", "first-input", "largest-contentful-paint"]);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
