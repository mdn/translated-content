---
title: Headers：values() 方法
slug: Web/API/Headers/values
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

{{domxref("Headers")}} 接口的 **`values()`** 方法返回一个 {{jsxref("Iteration_protocols",'iterator')}}，可用于遍历此对象包含的所有值。这些值都是 {{jsxref("String")}} 对象。

## 语法

```js-nolint
values()
```

### 参数

无。

### 返回值

返回一个 {{jsxref("Iteration_protocols",'iterator')}}。

## 示例

```js
// 创建一个测试 Headers 对象
const myHeaders = new Headers();
myHeaders.append("Content-Type", "text/xml");
myHeaders.append("Vary", "Accept-Language");

// 显示值
for (const value of myHeaders.values()) {
  console.log(value);
}
```

运行结果为：

```plain
text/xml
Accept-Language
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [ServiceWorker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [HTTP 访问控制（CORS）](/zh-CN/docs/Web/HTTP/Guides/CORS)
- [HTTP](/zh-CN/docs/Web/HTTP)
