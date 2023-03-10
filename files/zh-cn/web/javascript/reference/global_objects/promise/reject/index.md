---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
---

{{JSRef}}

**`Promise.reject()`** 方法返回一个带有拒绝原因的 `Promise` 对象。

{{EmbedInteractiveExample("pages/js/promise-reject.html")}}

## 语法

```plain
Promise.reject(reason);
```

### 参数

- reason
  - : 表示`Promise`被拒绝的原因。

### 返回值

一个给定原因了的被拒绝的 {{jsxref("Promise")}}。

## 描述

静态函数 `Promise.reject` 返回一个被拒绝的 `Promise` 对象。通过使用 {{jsxref("Error")}} 的实例获取错误原因 `reason` 对调试和选择性错误捕捉很有帮助。

## 示例

### 使用静态 `Promise.reject()` 方法

```plain
Promise.reject(new Error('fail')).then(function() {
  // not called
}, function(error) {
  console.error(error); // Stacktrace
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Promise")}}
