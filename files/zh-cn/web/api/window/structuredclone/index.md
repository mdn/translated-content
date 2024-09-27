---
title: Window：structuredClone() 方法
slug: Web/API/Window/structuredClone
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("HTML DOM")}}

{{domxref("Window")}} 接口的 **`structuredClone()`** 方法使用[结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)将给定的值进行{{Glossary("deep copy", "深拷贝")}}。

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

这个函数可以用来进行[深拷贝](/zh-CN/docs/Glossary/Deep_copy) JavaScript 变量。也支持循环引用，如下所示：

```js
// 创建一个具有值和对自身的循环引用的对象。
const original = { name: "MDN" };
original.itself = original;

// 对它进行克隆
const clone = structuredClone(original);

console.assert(clone !== original); // 对象并不相同（标识不同）
console.assert(clone.name === "MDN"); // 它们具有相同的值
console.assert(clone.itself === clone); // 且保留了循环引用
```

### 转移值

使用参数 `options` 的里 `transfer` 属性，可以使[可转移对象](/zh-CN/docs/Web/API/Web_Workers_API/Transferable_objects)（仅）被传递，不被克隆。转移会导致原始对象无法继续使用。

> [!NOTE]
> 一个可能有用的场景是在保存缓冲区之前先异步的校验里面的数据。为了避免缓冲区在保存之前有其他修改，你可以先克隆这个缓冲区然后校验数据。为了防止意外的错误引用，在传输数据时，任何修改缓冲区的尝试都会失败。

以下演示了如何把一个数组的属性转移到新对象。返回结果时，原始对象里的 `uInt8Array.buffer` 会被清除掉。

```js
// 16MB = 1024 * 1024 * 16
const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});
console.log(uInt8Array.byteLength); // 0
```

你可以克隆任意数量的对象，并转移对象的任意子集。例如，以下代码会把 `arrayBuffer1` 作为值转移（而不是 `arrayBuffer2`）。

```js
const transferred = structuredClone(
  { x: { y: { z: arrayBuffer1, w: arrayBuffer2 } } },
  { transfer: [arrayBuffer1] },
);
```

## 示例

### 克隆一个对象

在本示例中，我们会克隆对象的一个数组属性。在克隆之后，修改任何一个对象都不会影响到另一个。

```js
const mushrooms1 = {
  amanita: ["muscaria", "virosa"],
};

const mushrooms2 = structuredClone(mushrooms1);

mushrooms2.amanita.push("pantherina");
mushrooms1.amanita.pop();

console.log(mushrooms2.amanita); // ["muscaria", "virosa", "pantherina"]
console.log(mushrooms1.amanita); // ["muscaria"]
```

### 转移一个对象

在本示例中我们创建了一个 {{jsxref("ArrayBuffer")}} 然后克隆将它作为属性的对象，将它转移。我们可以使用克隆对象里的缓冲区（buffer），但是如果我们尝试使用原对象的缓冲区的话就会产生异常。

```js
// 创建一个给定字节大小的 ArrayBuffer
const buffer1 = new ArrayBuffer(16);

const object1 = {
  buffer: buffer1,
};

// 克隆包含 buffer 的对象，并将其转移
const object2 = structuredClone(object1, { transfer: [buffer1] });

// 从克隆后的 buffer 创建数组
const int32View2 = new Int32Array(object2.buffer);
int32View2[0] = 42;
console.log(int32View2[0]);

// 从原 buffer 创建数组将抛出 TypeError
const int32View1 = new Int32Array(object1.buffer);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js`](https://github.com/zloirock/core-js) 已经支持 [`structuredClone` 的 polyfill](https://github.com/zloirock/core-js#structuredclone)
- [结构化克隆算法](/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
- [结构化克隆的 polyfill](https://github.com/ungap/structured-clone)
