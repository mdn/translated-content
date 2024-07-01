---
title: PerformanceResourceTiming.toJSON()
slug: Web/API/PerformanceResourceTiming/toJSON
l10n:
  sourceCommit: b3477f90eb235d08fe196373466a725050f43862
---

{{APIRef("Performance API")}}

**`toJSON()`** は {{domxref("PerformanceResourceTiming")}} インターフェイスのメソッドで{{Glossary("Serialization","シリアライザー")}}です。この {{domxref("PerformanceResourceTiming")}} オブジェクトの JSON 表現を返します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

{{jsxref("JSON")}} オブジェクトで、{{domxref("PerformanceResourceTiming")}} オブジェクトをシリアライズしたものです。

## 例

### toJSON メソッドの使用

この例では、`entry.toJSON()` の呼び出しが `PerformanceResourceTiming` オブジェクトの JSON 表現を返します。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "resource", buffered: true });
```

これはこのような JSON オブジェクトをログ出力します。

```json
{
  "name": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/31px-Commons-logo.svg.png",
  "entryType": "resource",
  "startTime": 110.80000001192093,
  "duration": 11.599999994039536,
  "initiatorType": "img",
  "nextHopProtocol": "h2",
  "renderBlockingStatus": "non-blocking",
  "workerStart": 0,
  "redirectStart": 0,
  "redirectEnd": 0,
  "fetchStart": 110.80000001192093,
  "domainLookupStart": 110.80000001192093,
  "domainLookupEnd": 110.80000001192093,
  "connectStart": 110.80000001192093,
  "connectEnd": 110.80000001192093,
  "secureConnectionStart": 110.80000001192093,
  "requestStart": 117.30000001192093,
  "responseStart": 120.40000000596046,
  "responseStatus": 200,
  "responseEnd": 122.40000000596046,
  "transferSize": 0,
  "encodedBodySize": 880,
  "decodedBodySize": 880,
  "serverTiming": [
    {
      "name": "cache",
      "duration": 0,
      "description": "hit-front"
    },
    {
      "name": "host",
      "duration": 0,
      "description": "cp3061"
    }
  ]
}
```

JSON 文字列を取得するには、 [`JSON.stringify(entry)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を直接使用することができます。これは `toJSON()` を自動的に呼び出します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("JSON")}}
