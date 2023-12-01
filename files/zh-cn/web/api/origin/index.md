---
title: origin
slug: Web/API/origin
---

{{APIRef()}}{{SeeCompatTable}}

`WindowOrWorkerGlobalScope` 接口的 **`origin`** 只读属性返回全局范围的 **origin**, 序列化为一个字符串。

## Syntax

```plain
let myOrigin = self.origin; // or just origin
```

### Value

A {{domxref("USVString")}}.

## Examples

Executed from inside a worker script, the following snippet will log the worker's global scope's origin to the console each time it receives a message

```js
onmessage = function () {
  console.log(self.origin);
};
```

If the origin is not a scheme/host/port tuple (say you are trying to run it locally, i.e. via `file://` URL), `origin` will return the string `"null"`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
