---
title: performance.toJSON()
slug: Web/API/Performance/toJSON
tags:
  - API
  - メソッド
  - パフォーマンス
  - リファレンス
browser-compat: api.Performance.toJSON
translation_of: Web/API/Performance/toJSON
---
{{APIRef("High Resolution Timing")}}

**`toJSON()`** は {{domxref("Performance")}} インターフェイスのメソッドで、標準のシリアライザーです。パフォーマンスオブジェクトのプロパティの JSON 表現を返します。

{{availableinworkers}}

## 構文

```js
myPerf = performance.toJSON()
```

### 引数

- なし
  - :

### 返値

- myPerf
  - : {{domxref("Performance")}} オブジェクトをシリアライズした JSON オブジェクト。

## 例

```js
var js;
js = window.performance.toJSON();
console.log("json = " + JSON.stringify(js));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
