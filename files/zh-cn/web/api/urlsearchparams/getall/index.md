---
title: URLSearchParams.getAll()
slug: Web/API/URLSearchParams/getAll
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}}接口的 **`getAll()`** 方法以数组的形式返回与指定搜索参数对应的所有值。

## 语法

```plain
URLSearchParams.getAll(name)
```

### 参数

- name
  - : 要返回的参数的名称。

### 返回值

一个{{domxref("USVString")}}数组。

## 例子

```plain
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

//为 foo 参数添加第二个值
params.append('foo', 4);

console.log(params.getAll('foo')) //输出 ["1","4"].
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
