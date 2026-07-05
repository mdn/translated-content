---
title: "LargestContentfulPaint: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/LargestContentfulPaint/toJSON
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

**`toJSON()`** は {{domxref("LargestContentfulPaint")}} インターフェイスのメソッドで、{{Glossary("Serialization","シリアライザー")}}です。これはこの {{domxref("LargestContentfulPaint")}} オブジェクトの JSON 表現を返します。


## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

{{domxref("LargestContentfulPaint")}} オブジェクトのシリアライズ結果である {{jsxref("JSON")}} オブジェクトです。

JSON には {{domxref("LargestContentfulPaint.element", "element")}} プロパティが含まれません。{{domxref("Element")}} 型が `toJSON()` 操作を提供していないからです。

## 例

### toJSON メソッドの使用

この例では、`entry.toJSON()` を呼び出すと、`LargestContentfulPaint` オブジェクトの JSON 表現が返されます。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "largest-contentful-paint", buffered: true });
```

これにより、次のような JSON オブジェクトがログ出力されます。

```json
{
  "name": "",
  "entryType": "largest-contentful-paint",
  "startTime": 468.2,
  "duration": 0,
  "size": 19824,
  "renderTime": 468.2,
  "loadTime": 0,
  "id": "",
  "url": ""
}
```

JSON 文字列を取得するには、[`JSON.stringify(entry)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を直接使用することができます。これにより、自動的に `toJSON()` が呼び出されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("JSON")}}
