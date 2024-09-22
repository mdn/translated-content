---
title: "PerformanceEventTiming: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/PerformanceEventTiming/toJSON
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

**`toJSON()`** は {{domxref("PerformanceEventTiming")}} インターフェイスのメソッドで、{{Glossary("Serialization","シリアライザー")}}です。これは {{domxref("PerformanceEventTiming")}} オブジェクトの JSON 表現を返します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

{{domxref("PerformanceEventTiming")}} オブジェクトをシリアライズした {{jsxref("JSON")}} オブジェクトです。

JSON は {{domxref("PerformanceEventTiming.target", "target")}} プロパティを含みません。これは {{domxref("Node")}} 型であり、 `toJSON()` 処理を提供していないからです。

## 例

### toJSON メソッドの使用

この例では、`entry.toJSON()` を呼び出すと、 `PerformanceEventTiming` オブジェクトの JSON 表現が返されます。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "event", buffered: true });
```

このように JSON オブジェクトをログ出力します。

```json
{
  "name": "dragover",
  "entryType": "event",
  "startTime": 67090751.599999905,
  "duration": 128,
  "processingStart": 67090751.70000005,
  "processingEnd": 67090751.900000095,
  "cancelable": true
}
```

JSON 文字列を取得するには、 [`JSON.stringify(entry)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を直接使用することができます。これは `toJSON()` を自動的に呼び出します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("JSON")}}
