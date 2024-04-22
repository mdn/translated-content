---
title: URLSearchParams.values()
slug: Web/API/URLSearchParams/values
---

{{APIRef("URL API")}}

URLSearchParams.values() 方法返回一个{{jsxref("Iteration_protocols",'iterator')}}，该遍历器允许遍历对象中包含的所有值。这些值都是{{domxref("USVString")}}对象。

> **备注：** 该方法在[Web Workers](/zh-CN/docs/Web/API/Web_Workers_API)中也可使用

## 语法

```
searchParams.values();
```

### 返回值

返回一个{{jsxref("Iteration_protocols","iterator")}}.

## 例子

```js
// 创建一个测试用 URLSearchParams 对象
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// 输出值
for (var value of searchParams.values()) {
  console.log(value);
}
```

结果如下：

```
value1
value2
```

## 浏览器兼容性

{{Compat}}

## 另请参考

- 其他 URL 相关接口：{{domxref("URL")}}, {{domxref("URLUtils")}}.
