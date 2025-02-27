---
title: "Performance: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/Performance/toJSON
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}

**`toJSON()`** は {{domxref("Performance")}} インターフェイスのメソッドで、{{Glossary("Serialization","シリアライザー")}}です。パフォーマンスオブジェクトのプロパティの JSON 表現を返します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

{{domxref("Performance")}} オブジェクトをシリアライズした {{jsxref("JSON")}} オブジェクトです。

返された JSON には {{domxref("Performance.eventCounts", "eventCounts")}} プロパティが格納されていません。これは、{{domxref("EventCounts")}} 型であり、`toJSON()` 操作を提供していないからです。

> [!NOTE]
> JSON オブジェクトには、非推奨の {{domxref("performance.timing")}} および {{domxref("performance.navigation")}} プロパティのシリアライズが格納されています。新しい {{domxref("PerformanceNavigationTiming")}} インターフェイスの JSON 表現を取得するには、代わりに {{domxref("PerformanceNavigationTiming.toJSON()")}} を呼び出してください。

## 例

### toJSON メソッドの使用

この例では、`performance.toJSON()` を呼び出すと、`Performance` オブジェクトの JSON 表現が返されます。

```js
performance.toJSON();
```

これは次のような JSON オブジェクトをログ出力します。

```json
{
  "timeOrigin": 1668077531367.4,
  "timing": {
    "connectStart": 1668077531372,
    "navigationStart": 1668077531367,
    "secureConnectionStart": 0,
    "fetchStart": 1668077531372,
    "domContentLoadedEventStart": 1668077531580,
    "responseStart": 1668077531372,
    "domInteractive": 1668077531524,
    "domainLookupEnd": 1668077531372,
    "responseEnd": 1668077531500,
    "redirectStart": 0,
    "requestStart": 1668077531372,
    "unloadEventEnd": 0,
    "unloadEventStart": 0,
    "domLoading": 1668077531512,
    "domComplete": 1668077531585,
    "domainLookupStart": 1668077531372,
    "loadEventStart": 1668077531585,
    "domContentLoadedEventEnd": 1668077531580,
    "loadEventEnd": 1668077531585,
    "redirectEnd": 0,
    "connectEnd": 1668077531372
  },
  "navigation": {
    "type": 0,
    "redirectCount": 0
  }
}
```

JSON 文字列を取得するには、 [`JSON.stringify(performance)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を直接使用することができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("JSON")}}
