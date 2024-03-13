---
title: URL.hostname
slug: Web/API/URL/hostname
---

{{ApiRef("URL API")}}

{{domxref("URL")}} 接口的 **`hostname`** 属性是一个 {{domxref("USVString")}} 值，包含有 URL 中的域名。

{{AvailableInWorkers}}

## 语法

```plain
string = object.hostname;
object.hostname = string;
```

### 返回值

{{domxref("USVString")}}.

## 示例

```js
var url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/hostname",
);
var result = url.hostname; // Returns:'developer.mozilla.org'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 属的 {{domxref("URL")}} 接口。
