---
title: URL.toString()
slug: Web/API/URL/toString
---

{{ApiRef("URL API")}}

**`URL.toString()`** 字符串化方法返回一个包含完整 URL 的 {{domxref("USVString")}}。它的作用等同于只读的 {{domxref("URL.href")}}。

{{AvailableInWorkers}}

## 语法

```plain
string = url.toString();
```

### 参数

无。

### 返回值

一个{{domxref("USVString")}}。

## 参考

```js
const url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/toString",
);
url.toString(); // 应当返回字符串形式的 URL
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 父级接口 {{domxref("URL")}}。
