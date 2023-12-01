---
title: URL.protocol
slug: Web/API/URL/protocol
---

{{ApiRef("URL API")}}{{domxref("URL")}}接口的 **`protocol`** 是一个包含 URL 协议的{{domxref("USVString")}}值，此值包含协议后的`':'`.

{{AvailableInWorkers}}

## 语法

```plain
string = object.protocol;
object.protocol = string;
```

### 参数

A {{domxref("USVString")}}.

## 示例

```js
var url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/protocol",
);
var result = url.protocol; // Returns:"https:"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他链接

- The {{domxref("URL")}} interface it belongs to.
