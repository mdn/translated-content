---
title: Performance.toJSON()
slug: Web/API/Performance/toJSON
---

{{APIRef("Performance API")}}

{{domxref("Performance")}} 接口的 **`toJSON()`** 方法是一个标准的 {{Glossary("Serialization","序列化器")}}，它返回 {{domxref("Performance")}} 对象的 JSON 表示。

## 语法

```js-nolint
toJSON()
```

### 参数

无。

### 返回值

- myPerf
  - : {{domxref("Performance")}} 对象序列化之后转化成的 JSON 对象。

## 示例

```js
var js;
js = window.performance.toJSON();
console.log("json = " + JSON.stringify(js));
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
