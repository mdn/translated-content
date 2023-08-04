---
title: structuredClone()
slug: Web/API/structuredClone
---

{{APIRef("HTML DOM")}}

全局的 **`structuredClone()`** 方法使用[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)将给定的值进行[深拷贝](/zh-CN/docs/Glossary/Deep_copy)。

该方法还支持把原始值中的[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)转移到新对象，而不是把属性引用拷贝过去。
可转移对象与原始对象分离并附加到新对象;它们不可以在原始对象中访问被访问到。

## 语法

```js-nolint
structuredClone(value)
structuredClone(value, { transfer })
```

### 参数

- `value`
  - : 被克隆的对象。可以是任何[结构化克隆支持的类型](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#支持的类型)。
- `transfer` {{optional_inline}}
  - : 是一个[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)的数组，里面的 `值` 并没有被克隆，而是被转移到被拷贝对象上。

### 返回值

返回值是原始`值`的[深拷贝](/zh-CN/docs/Glossary/Deep_copy)。

### 异常

- `DataCloneError` {{domxref("DOMException")}}
  - : 如果输入值的任一部分不可序列化，则抛出该异常。

## 附注

这个函数可以用来进行[深拷贝](/zh-CN/docs/Glossary/Deep_copy) JavaScript 变量。
也支持循环引用，如下所示：

```js
// Create an object with a value and a circular reference to itself.
const original = { name: "MDN" };
original.itself = original;

// Clone it
const clone = structuredClone(original);

console.assert(clone !== original); // the objects are not the same (not same identity)
console.assert(clone.name === "MDN"); // they do have the same values
console.assert(clone.itself === clone); // and the circular reference is preserved
```

### Transferring values

使用可选参数 `transfer` 里的值，可以使[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)（仅）被传递，不被克隆。
传输导致原始对象（里的属性）无法继续使用。

> **备注：** 一个可能有用的场景是在保存 buffer 之前先异步的校验里面的数据。为了避免 buffer 在保存之前有其他修改，你可以先克隆这个 buffer 然后校验数据。为了防止意外的错误引用，在传输数据时，任何修改 buffer 的尝试都会失败。

以下演示了如何把一个数组的属性转义到新对象。
返回结果时，原始对象里的 `uInt8Array.buffer` 会被清除掉。

```js
var uInt8Array = new Uint8Array(1024 * 1024 * 16); // 16MB
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i;
}

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

你可以克隆任意数量的对象，并传输对象的任意子集。
例如 以下代码会把 `arrayBuffer1` 作为值传输 但不是 `arrayBuffer2`。

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js`](https://github.com/zloirock/core-js) 已经支持 [`structuredClone` 的 polyfill](https://github.com/zloirock/core-js#structuredclone)
- [结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [结构化克隆的 polyfill](https://github.com/ungap/structured-clone)
