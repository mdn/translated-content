---
title: StorageManager.persisted()
slug: Web/API/StorageManager/persisted
---

{{securecontext_header}}{{APIRef("Storage")}}{{SeeCompatTable}}

**`persisted()`**方法是{{domxref("StorageManager")}}的一个接口，如果盒存储模式（**box mode**）的值为“**persistent**”则返回一个 resolved 状态值为`true`的{{jsxref('Promise')}}。

## 语法

```plain
navigator.storage.persisted().then(function(persistent) { ... })
```

### 参数

无

### 返回值

一个状态为 resolved，值为{{jsxref('Boolean')}}类型的{{jsxref('Promise')}}。

## 示例

```js
if (navigator.storage && navigator.storage.persist)
  navigator.storage.persisted().then(function (persistent) {
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
