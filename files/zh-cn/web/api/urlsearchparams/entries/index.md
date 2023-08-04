---
title: URLSearchParams.entries()
slug: Web/API/URLSearchParams/entries
---

{{APIRef("URL API")}}

**`URLSearchParams.entries()`** 方法返回一个{{jsxref("Iteration_protocols",'迭代器')}}，允许遍历该对象中包含的所有键/值对。迭代器返回键/值对，其顺序与它们在查询字符串中出现的顺序相同。每一组键和值都是字符串对象。

> **备注：** 该方法在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API)也是可用的。

## 语法

```
searchParams.entries();
```

### 返回值

返回一个 {{jsxref("Iteration_protocols","iterator")}}.

## 例子

```js
// 创建一个测试用 URLSearchParams 对象
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// 显示键/值对
for (var pair of searchParams.entries()) {
  console.log(pair[0] + ", " + pair[1]);
}
```

结果如下：

```
key1, value1
key2, value2
```

## 浏览器兼容性

{{Compat}}

## 参见

- 其他 URL 相关接口：{{domxref("URL")}}, {{domxref("URLUtils")}}.
