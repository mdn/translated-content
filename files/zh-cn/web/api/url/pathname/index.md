---
title: URL.pathname
slug: Web/API/URL/pathname
---

{{ApiRef("URL API")}}

{{domxref("URL")}}接口的 **`pathname`** 属性是一个{{domxref("USVString")}}，包含一个初始 `'/'` 和 URL 的路径 (如果没有路径，则为空字符串)

{{AvailableInWorkers}}

## 语法

```plain
string = object.pathname;
object.pathname = string;
```

### 值

一个{{domxref("USVString")}}.

## 例子

```js
var url = new URL(
  "https://developer.mozilla.org/zh-CN/docs/Web/API/URL/pathname",
);
var result = url.pathname; // Returns:"/zh-CN/docs/Web/API/URL/pathname"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- 它所属的{{domxref("URL")}}接口。
