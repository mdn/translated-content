---
title: WorkerGlobalScope：structuredClone() 方法
slug: Web/API/WorkerGlobalScope/structuredClone
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`structuredClone()`** 方法使用[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)将给定的值进行{{Glossary("deep copy", "深拷贝")}}。

该方法还支持把原值中的[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)_转移_（而不是拷贝）到新对象上。可转移对象与原始对象分离并附加到新对象；它们将无法在原始对象中被访问。

## 语法

```js-nolint
structuredClone(value)
structuredClone(value, options)
```

### 参数

- `value`
  - : 被克隆的对象。可以是任何[结构化克隆支持的类型](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#支持的类型)。
- `options` {{optional_inline}}

  - : 一个具有以下属性的对象：

    - `transfer`
      - : 一个[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)的数组，里面的对象将被移动而不是克隆到返回的对象上。

### 返回值

原始值（`value`）的[深拷贝](/zh-CN/docs/Glossary/Deep_copy)。

### 异常

- `DataCloneError` {{domxref("DOMException")}}
  - : 如果输入值的任一部分不可序列化，则抛出该异常。

## 描述

参见 {{domxref("Window.structuredClone()")}} 以获取该函数的详细信息。

## 示例

参见 {{domxref("Window.structuredClone()")}} 以获取示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js`](https://github.com/zloirock/core-js) 已经支持 [`structuredClone` 的 polyfill](https://github.com/zloirock/core-js#structuredclone)
- [结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [结构化克隆的 polyfill](https://github.com/ungap/structured-clone)
