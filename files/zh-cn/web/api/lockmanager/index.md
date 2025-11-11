---
title: LockManager
slug: Web/API/LockManager
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

[Web Locks API](/zh-CN/docs/Web/API/Web_Locks_API) 的 **`LockManager`** 接口提供了请求新的 {{domxref('Lock')}} 对象以及枚举现有的 `Lock` 对象的方法。要获取 `LockManager` 实例，请访问 {{domxref('navigator.locks')}} 属性。

## 实例方法

- {{domxref('LockManager.request()')}}
  - : 请求一个指定其名称和模式参数的 {{domxref('Lock')}} 对象。
- {{domxref('LockManager.query()')}}
  - : 返回一个 {{jsxref('Promise')}}，兑现一个包含持有的锁以及等待的锁请求的对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
