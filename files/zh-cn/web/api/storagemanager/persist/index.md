---
title: StorageManager.persist()
slug: Web/API/StorageManager/persist
---

{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}

**`persist()`**方法是{{domxref("StorageManager")}}的一个接口，用于请求本地数据存储的权限，如果被授予权限，则返回一个 resolved 状态值为`true`的{{jsxref('Promise')}}对象，否则返回`false`。

## 语法

```plain
navigator.storage.persist().then(function(persistent) { ... })
```

### 参数

无

### 返回值

一个 resolved 状态，值为{{jsxref('Boolean')}}类型的{{jsxref('Promise')}}对象。

## 示例

```js
if (navigator.storage && navigator.storage.persist)
  navigator.storage.persist().then(function (persistent) {
    if (persistent)
      console.log("Storage will not be cleared except by explicit user action");
    else
      console.log("Storage may be cleared by the UA under storage pressure.");
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
