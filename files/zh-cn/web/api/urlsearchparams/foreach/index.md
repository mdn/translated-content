---
title: URLSearchParams.forEach()
slug: Web/API/URLSearchParams/forEach
---

{{APIRef("URL API")}}

URLSearchParams 的实例对象上的方法 forEach 允许通过回调函数来遍历 URLSearchParams 实例对象上的键值对

{{availableinworkers}}

## 语法

```plain
searchParams.forEach(callback(value,key,searchParams));
```

### 参数

- 回调函数
  - : 该回调函数可以接收到 3 个参数 value,key,searchParams，我们可以在回调函数中对接收到的参数进行处理。而三个参数的含义如下：
- `value`
  - : 当前遍历到的键值
- `key`
  - : 当前遍历到的键名
- `searchParams`
  - : 当前调用 forEach 方法的实例对象

### 返回值

空

## 例子

```js
// 创建 URLSearchParams 对象的实例对象，用于测试
var searchParams = new URLSearchParams("key1=value1&key2=value2");

let returnValue = searchParams.forEach(function (value, key, searchParams) {
  // 打印值
  console.log(value, key, searchParams);
});

// 输出返回值
console.log(returnValue);
```

结果是：

```plain
value1 key1 当前调用 forEach 方法的实例对象 (也就是 searchParams)
value2 key2 当前调用 forEach 方法的实例对象 (也就是 searchParams)
undefined  // 即没有返回值
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("URL")}} interface.
