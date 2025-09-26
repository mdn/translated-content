---
title: Headers.entries()
slug: Web/API/Headers/entries
---

{{APIRef}}

**`Headers.entries()`** 以{{jsxref("Iteration_protocols","迭代器")}}的形式返回 Headers 对象中所有的键值对。每一对中的键和值都是 {{jsxref("String")}} 对象。

> [!NOTE]
> 这个方法在 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中是可用的。

## 语法

```js-nolint
entries()
```

### 参数

无。

### 返回值

返回一个{{jsxref("Iteration_protocols","迭代器", "", 1)}}。

## 示例

```js
// 创建一个测试 Headers 对象
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// 显示键/值对
for (const pair of myHeaders.entries()) {
  console.log(`${pair[0]}: ${pair[1]}`);
}
```

运行结果为：

```plain
content-type: text/xml
vary: Accept-Language
```

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
