---
title: URLSearchParams.keys()
slug: Web/API/URLSearchParams/keys
---

{{APIRef("URL API")}}

URLSearchParams.keys() 返回一个{{jsxref("Iteration_protocols",'iterator')}}，遍历器允许遍历对象中包含的所有键。这些键都是字符串对象。

> **备注：** 该方法在 [Web Workers](/zh-CN/docs/Web/API/Web_Workers_API)中也可使用

## 语法

```
searchParams.keys();
```

### 返回值

返回一个{{jsxref("Iteration_protocols","iterator")}}.

## 例子

```js
// 建立一个测试用 URLSearchParams 对象
var searchParams = new URLSearchParams("key1=value1&key2=value2");

// 输出键值对
for (var key of searchParams.keys()) {
  console.log(key);
}
```

结果如下：

```
key1
key2
```

## 浏览器兼容性

{{Compat}}

## 另请参考

- 其他 URL 相关接口：{{domxref("URL")}}, {{domxref("URLUtils")}}.
