---
title: "PerformanceEntry: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/PerformanceEntry/toJSON
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

**`toJSON()`** メソッドは{{Glossary("Serialization","シリアライザー")}}で、この {{domxref("PerformanceEntry")}} オブジェクトの JSON 表現を返します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

{{jsxref("JSON")}} お武衛ジェクトで、この {{domxref("PerformanceEntry")}} オブジェクトをシリアライズしたものです。

## 例

### toJSON メソッドの使用

この例では、 `entry.toJSON()` を呼び出すとその {{domxref("PerformanceMark")}} オブジェクトの JSON 表現を返します。

```js
performance.mark("debug-marker", {
  detail: "debugging-marker-123",
});

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ entryTypes: ["mark"] });
```

これは JSON オブジェクトを次のように出力します。

```json
{
  "name": "debug-marker",
  "entryType": "mark",
  "startTime": 158361,
  "duration": 0
}
```

`PerformanceMark` の {{domxref("PerformanceMark.detail", "detail")}} プロパティが格納されていないことに注意してください。

JSON 文字列を取得するには、 [`JSON.stringify(entry)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を直接使用することができます。これは `toJSON()` を自動的に呼び出します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("JSON")}}
