---
title: Performance.toJSON()
slug: Web/API/Performance/toJSON
---

{{APIRef("High Resolution Timing")}}{{domxref("Performance")}} 的 **`toJSON() 方法是一个标准的串行器：它返回一个由 performance 对象各个属性组成的 JSON`**

## Syntax

```
myPerf = performance.toJSON()
```

### Arguments

无

### Return value

- myPerf
  - : {{domxref("Performance")}} 对象序列化之后转化成的 JSON 对象。

## Example

```js
var js;
js = window.performance.toJSON();
console.log("json = " + JSON.stringify(js));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
