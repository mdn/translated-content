---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
---

{{JSRef}}

**`DataView`** 视图是一个可以从二进制 {{jsxref("ArrayBuffer")}} 对象中读写多种数值类型的底层接口，使用它时，不用考虑不同平台的[字节序](/zh-CN/docs/Glossary/Endianness)问题。

## 描述

### 字节序

多字节的数字格式在内存中的表示方式因机器架构而异——相关的解释请参阅[字节序](/zh-CN/docs/Glossary/Endianness)。`DataView` 访问器（accessor）提供了对如何访问数据的明确控制，而不管执行代码的计算机的字节序如何。

```js
const littleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* 小端对齐 */);
  // Int16Array 使用平台的字节序。
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true 或 false
```

### 64 位整数值

某些浏览器不支持 {{jsxref("DataView.prototype.setBigInt64()")}} 和 {{jsxref("DataView.prototype.setBigUint64()")}}。因此，要在代码中启用跨浏览器的 64 位操作，你可以实现自己的 `getUint64()` 函数，以获得精度达到 {{jsxref("Number.MAX_SAFE_INTEGER")}} 的值——这对于某些情况足够使用。

```js
function getUint64(dataview, byteOffset, littleEndian) {
  // 将 64 位的数字拆分位两个 32 位（4 字节）的部分
  const left = dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset + 4, littleEndian);

  // 将两个 32 位的值组合在一起
  const combined = littleEndian
    ? left + 2 ** 32 * right
    : 2 ** 32 * left + right;

  if (!Number.isSafeInteger(combined))
    console.warn(combined, "超过 MAX_SAFE_INTEGER。可能存在精度丢失。");

  return combined;
}
```

或者，如果你需要完整的 64 位的范围，你可以创建 {{jsxref("BigInt")}}。此外，尽管原生 BigInt 比等效的用户态的库快得多，但由于其大小可变的性质，BigInt 始终比 JavaScript 中的 32 位整数要慢得多。

```js
const BigInt = window.BigInt,
  bigThirtyTwo = BigInt(32),
  bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // 将 64 位的数字拆分位两个 32 位（4 字节）的部分
  const left = BigInt(dataview.getUint32(byteOffset | 0, !!littleEndian) >>> 0);
  const right = BigInt(
    dataview.getUint32(((byteOffset | 0) + 4) | 0, !!littleEndian) >>> 0,
  );

  // 将两个 32 位的值组合在一起并返回该值
  return littleEndian
    ? (right << bigThirtyTwo) | left
    : (left << bigThirtyTwo) | right;
}
```

## 构造函数

- [`DataView()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView/DataView)
  - : 创建一个新的 `DataView` 对象。

## 实例属性

- `DataView.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值为字符串 `"DataView"`。该属性用于 {{jsxref("Object.prototype.toString()")}}。
- {{jsxref("DataView.prototype.buffer")}}
  - : {{jsxref("ArrayBuffer")}} 是引用该缓冲区的视图。在构造时会被固定，因此该属性**只读**。
- {{jsxref("DataView.prototype.byteLength")}}
  - : 视图的长度（以字节为单位）。在构造时会被固定，因此该属性**只读**。
- {{jsxref("DataView.prototype.byteOffset")}}
  - : 至 {{jsxref("ArrayBuffer")}} 的视图开始位置的字节偏移量。在构造时会被固定，因此该属性**只读**。

## 实例方法

- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : 从当前 `DataView` 的指定字节偏移处读取 8 个字节，并将其解释为 64 位有符号整数。
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : 从当前 `DataView` 的指定字节偏移处读取 8 个字节，并将其解释为 64 位无符号整数。
- {{jsxref("DataView.prototype.getFloat16()")}}
  - : 从当前 `DataView` 的指定字节偏移处读取 2 个字节，并将其解释为 16 位浮点数。
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : 从当前 `DataView` 的指定字节偏移处读取 4 个字节，并将其解释为 32 位浮点数。
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : 从当前 `DataView` 的指定字节偏移处读取 8 个字节，并将其解释为 64 位浮点数。
- {{jsxref("DataView.prototype.getInt16()")}}
  - : 从当前 `DataView` 的指定字节偏移处读取 2 个字节，并将其解释为 16 位有符号整数。
- {{jsxref("DataView.prototype.getInt32()")}}
  - : 从当前 `DataView` 的指定字节偏移处读取 4 个字节，并将其解释为 32 位有符号整数。
- {{jsxref("DataView.prototype.getInt8()")}}
  - : 从当前 `DataView` 的指定字节偏移处读取 1 个字节，并将其解释为 8 位有符号整数。
- {{jsxref("DataView.prototype.getUint16()")}}
  - : 从当前 `DataView` 的指定字节偏移处读取 2 个字节，并将其解释为 16 位无符号整数。
- {{jsxref("DataView.prototype.getUint32()")}}
  - : 从当前 `DataView` 的指定字节偏移处读取 4 个字节，并将其解释为 32 位无符号整数。
- {{jsxref("DataView.prototype.getUint8()")}}
  - : 从当前 `DataView` 的指定字节偏移处读取 1 个字节，并将其解释为 8 位无符号整数。
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : 指定一个数字，并将其作为 64 位有符号整数存储在当前 `DataView` 的指定字节偏移处的 8 个字节中。
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : 指定一个数字，并将其作为 64 位无符号整数存储在当前 `DataView` 的指定字节偏移处的 8 个字节中。
- {{jsxref("DataView.prototype.setFloat16()")}}
  - : 指定一个数字，并将其作为 16 位浮点数存储在当前 `DataView` 的指定字节偏移处的 2 个字节中。
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : 指定一个数字，并将其作为 32 位浮点数存储在当前 `DataView` 的指定字节偏移处的 4 个字节中。
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : 指定一个数字，并将其作为 64 位浮点数存储在当前 `DataView` 的指定字节偏移处的 8 个字节中。
- {{jsxref("DataView.prototype.setInt16()")}}
  - : 指定一个数字，并将其作为 16 位有符号整数存储在当前 `DataView` 的指定字节偏移处的 2 个字节中。
- {{jsxref("DataView.prototype.setInt32()")}}
  - : 指定一个数字，并将其作为 32 位有符号整数存储在当前 `DataView` 的指定字节偏移处的 4 个字节中。
- {{jsxref("DataView.prototype.setInt8()")}}
  - : 指定一个数字，并将其作为 8 位有符号整数存储在当前 `DataView` 的指定字节偏移处的 1 个字节中。
- {{jsxref("DataView.prototype.setUint16()")}}
  - : 指定一个数字，并将其作为 16 位无符号整数存储在当前 `DataView` 的指定字节偏移处的 2 个字节中。
- {{jsxref("DataView.prototype.setUint32()")}}
  - : 指定一个数字，并将其作为 32 位无符号整数存储在当前 `DataView` 的指定字节偏移处的 4 个字节中。
- {{jsxref("DataView.prototype.setUint8()")}}
  - : 指定一个数字，并将其作为 8 位无符号整数存储在当前 `DataView` 的指定字节偏移处的 1 个字节中。

## 示例

### 使用 DataView

```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`DataView` 在 `core-js` 中的 polyfill](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [jDataView](https://github.com/jDataView/jDataView)：DataView 的 polyfill，使其能够用于所有浏览器及 Node.js 环境。同时，该库还对 `DataView` API 进行了一些扩展。
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
