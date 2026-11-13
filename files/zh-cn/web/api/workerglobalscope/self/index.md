---
title: WorkerGlobalScope.self
slug: Web/API/WorkerGlobalScope/self
---

{{APIRef("Web Workers API")}}

**`self`** 是 {{domxref("WorkerGlobalScope")}} 的只读属性，它指向 `WorkerGlobalScope` 自身。通常情况下，它是如 {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}}, 或 {{domxref("ServiceWorkerGlobalScope")}} 类型的 scope。

## 语法

```js
var selfRef = self;
```

### 值

当前 worker 的全局 scope（值取决于你创建的 worker 类型）。

## 示例

在 worker 中运行这行代码：

```js
console.log(self);
```

console 中会输出当前 worker 的全局 scope，如下所示：

```js
DedicatedWorkerGlobalScope {
undefined: undefined, Infinity: Infinity, Math: MathConstructor, NaN: NaN, Intl: Object…}
    Infinity: Infinity
    Array: function Array() { [native code] }
      arguments: null
      caller: null
      isArray: function isArray() { [native code] }
      length: 1
      name: "Array"
      observe: function observe() { [native code] }
      prototype: Array[0]
      unobserve: function unobserve() { [native code] }
      __proto__: function Empty() {}
      <function scope>
    ArrayBuffer: function ArrayBuffer() { [native code] }
    Blob: function Blob() { [native code] }
    Boolean: function Boolean() { [native code] }
    DataView: function DataView() { [native code] }
    Date: function Date() { [native code] }
    DedicatedWorkerGlobalScope: function DedicatedWorkerGlobalScope() { [native code] }
    Error: function Error() { [native code] }
// etc. etc.
```

这会列出当前 worker scope 上完整的属性列表，在需要检测某个属性是否可用时非常有用。详细列表也可查阅 [Functions and classes available to Web Workers](/zh-CN/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

{{domxref("WorkerGlobalScope")}}
