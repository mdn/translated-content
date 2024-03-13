---
title: URL.toJSON()
slug: Web/API/URL/toJSON
---

{{APIRef("URL API")}}

{{domxref("URL")}}接口的 **toJSON()** 方法返回一个{{domxref("USVString")}}，其中包含一个序列化的 URL 版本，尽管在实践中它似乎与{{domxref("URL.toString()")}}有相同的效果。

{{AvailableInWorkers}}

## 语法

```
const href = url.toJSON()
```

### 返回值

一个 {{domxref("USVString")}}.

## 例子

```
const url = new URL("https://developer.mozilla.org/zh-CN/docs/Web/API/URL/toString");
url.toJSON(); // 应该以字符串形式返回 URL
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
