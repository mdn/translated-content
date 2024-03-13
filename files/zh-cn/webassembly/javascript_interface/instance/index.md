---
title: WebAssembly.Instance
slug: WebAssembly/JavaScript_interface/Instance
---

{{WebAssemblySidebar}} {{SeeCompatTable}}

**`WebAssembly.Instance`** 对象本身是有状态的，是 [WebAssembly.Module](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module) 的一个可执行实例。`实例`包含所有的 [WebAssembly 导出函数](/zh-CN/docs/WebAssembly/Exported_functions)，允许从 JavaScript 调用 WebAssembly 代码。

`WebAssembly.Instance()` 构造函数以同步方式实例化一个{{jsxref("WebAssembly.Module")}} 对象。然而，通常获取实例的方法是通过异步函数{{jsxref("WebAssembly.instantiate()")}} .

## 构造函数

> **警告：** 由于大型模块的实例化代价极高，开发人员应只在必须同步实例化的时候，才使用`Instance()`；绝大多数情况应该使用异步方法{{jsxref("WebAssembly.instantiate()")}} .

```plain
var myInstance = new WebAssembly.Instance(module, importObject);
```

### 参数

- _module_
  - : 要被实例化的 [`WebAssembly.Module`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module) 对象。
- _importObject_ {{optional_inline}}
  - : 一个包含值的对象，导入到新创建的 `实例`, 比如函数或 [`WebAssembly.Memory`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) 对象。There must be one matching property for each declared import of `module` 否则抛出 [WebAssembly.LinkError](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError) 异常。

## 实例化

所有的 `Instance` 实例继承自`Instance()` [属性对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/prototype)— 修改它会影响所有的`Instance` 实例。

### 实例属性

- {{jsxref("WebAssembly/Instance/exports", "Instance.prototype.exports")}}
  - : 返回一个包含此 WebAssembly 模块实例所导出的全部成员的 JS 对象，以便 JavaScript 访问和使用这些成员，这个对象是只读的。

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [WebAssembly](/zh-CN/docs/WebAssembly) overview page
- [WebAssembly concepts](/zh-CN/docs/WebAssembly/Concepts)
- [Using the WebAssembly JavaScript API](/zh-CN/docs/WebAssembly/Using_the_JavaScript_API)
