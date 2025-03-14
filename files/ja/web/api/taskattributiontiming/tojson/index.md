---
title: "TaskAttributionTiming: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/TaskAttributionTiming/toJSON
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`toJSON()`** は {{domxref("TaskAttributionTiming")}} インターフェイスのメソッドで、{{Glossary("Serialization","シリアライザー")}}です。これは {{domxref("TaskAttributionTiming")}} オブジェクトの JSON 表現を返します。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

{{jsxref("JSON")}} オブジェクトで、 {{domxref("TaskAttributionTiming")}} オブジェクトをシリアライズしたものです。

## 例

### toJSON メソッドの使用

この例では、 `entry.toJSON()` を呼び出すと、`TaskAttributionTiming` オブジェクトの JSON 表現が返されます。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "taskattribution", buffered: true });
```

次のような JSON オブジェクトをログ出力します。

```json
{
  "name": "unknown",
  "entryType": "taskattribution",
  "startTime": 0,
  "duration": 0,
  "containerType": "window",
  "containerSrc": "",
  "containerId": "",
  "containerName": ""
}
```

JSON 文字列を取得するのであれば、直接 [`JSON.stringify(entry)`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を使用することができます。これは自動的に `toJSON()` を呼び出します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("JSON")}}
