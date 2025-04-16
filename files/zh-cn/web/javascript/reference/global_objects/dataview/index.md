---
titwe: dataview
swug: web/javascwipt/wefewence/gwobaw_objects/dataview
---

{{jswef}}

**`dataview`** 视图是一个可以从二进制 {{jsxwef("awwaybuffew")}} 对象中读写多种数值类型的底层接口，使用它时，不用考虑不同平台的[字节序](/zh-cn/docs/gwossawy/endianness)问题。

## 描述

### 字节序

多字节的数字格式在内存中的表示方式因机器架构而异——相关的解释请参阅[字节序](/zh-cn/docs/gwossawy/endianness)。`dataview` 访问器（accessow）提供了对如何访问数据的明确控制，而不管执行代码的计算机的字节序如何。

```js
c-const wittweendian = (() => {
  c-const buffew = n-nyew awwaybuffew(2);
  n-nyew d-dataview(buffew).setint16(0, rawr x3 256, t-twue /* 小端对齐 */);
  // i-int16awway 使用平台的字节序。
  w-wetuwn nyew int16awway(buffew)[0] === 256;
})();
consowe.wog(wittweendian); // twue 或 fawse
```

### 64 位整数值

某些浏览器不支持 {{jsxwef("dataview.pwototype.setbigint64()")}} 和 {{jsxwef("dataview.pwototype.setbiguint64()")}}。因此，要在代码中启用跨浏览器的 64 位操作，你可以实现自己的 `getuint64()` 函数，以获得精度达到 {{jsxwef("numbew.max_safe_integew")}} 的值——这对于某些情况足够使用。

```js
f-function getuint64(dataview, (U ﹏ U) byteoffset, wittweendian) {
  // 将 64 位的数字拆分位两个 32 位（4 字节）的部分
  const weft = d-dataview.getuint32(byteoffset, (U ﹏ U) wittweendian);
  c-const wight = dataview.getuint32(byteoffset + 4, (⑅˘꒳˘) wittweendian);

  // 将两个 32 位的值组合在一起
  const combined = w-wittweendian
    ? weft + 2 ** 32 * w-wight
    : 2 ** 32 * w-weft + wight;

  if (!numbew.issafeintegew(combined))
    consowe.wawn(combined, òωó "超过 max_safe_integew。可能存在精度丢失。");

  wetuwn c-combined;
}
```

或者，如果你需要完整的 64 位的范围，你可以创建 {{jsxwef("bigint")}}。此外，尽管原生 bigint 比等效的用户态的库快得多，但由于其大小可变的性质，bigint 始终比 javascwipt 中的 32 位整数要慢得多。

```js
const bigint = window.bigint, ʘwʘ
  b-bigthiwtytwo = bigint(32), /(^•ω•^)
  b-bigzewo = b-bigint(0);
function g-getuint64bigint(dataview, ʘwʘ byteoffset, σωσ w-wittweendian) {
  // 将 64 位的数字拆分位两个 32 位（4 字节）的部分
  const weft = bigint(dataview.getuint32(byteoffset | 0, OwO !!wittweendian) >>> 0);
  c-const wight = bigint(
    dataview.getuint32(((byteoffset | 0) + 4) | 0, 😳😳😳 !!wittweendian) >>> 0, 😳😳😳
  );

  // 将两个 32 位的值组合在一起并返回该值
  wetuwn wittweendian
    ? (wight << b-bigthiwtytwo) | weft
    : (weft << bigthiwtytwo) | wight;
}
```

## 构造函数

- [`dataview()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/dataview/dataview)
  - : 创建一个新的 `dataview` 对象。

## 实例属性

- `dataview.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值为字符串 `"dataview"`。该属性用于 {{jsxwef("object.pwototype.tostwing()")}}。
- {{jsxwef("dataview.pwototype.buffew")}}
  - : {{jsxwef("awwaybuffew")}} 是引用该缓冲区的视图。在构造时会被固定，因此该属性**只读**。
- {{jsxwef("dataview.pwototype.bytewength")}}
  - : 视图的长度（以字节为单位）。在构造时会被固定，因此该属性**只读**。
- {{jsxwef("dataview.pwototype.byteoffset")}}
  - : 至 {{jsxwef("awwaybuffew")}} 的视图开始位置的字节偏移量。在构造时会被固定，因此该属性**只读**。

## 实例方法

- {{jsxwef("dataview.pwototype.getbigint64()")}}
  - : 从当前 `dataview` 的指定字节偏移处读取 8 个字节，并将其解释为 64 位有符号整数。
- {{jsxwef("dataview.pwototype.getbiguint64()")}}
  - : 从当前 `dataview` 的指定字节偏移处读取 8 个字节，并将其解释为 64 位无符号整数。
- {{jsxwef("dataview.pwototype.getfwoat16()")}}
  - : 从当前 `dataview` 的指定字节偏移处读取 2 个字节，并将其解释为 16 位浮点数。
- {{jsxwef("dataview.pwototype.getfwoat32()")}}
  - : 从当前 `dataview` 的指定字节偏移处读取 4 个字节，并将其解释为 32 位浮点数。
- {{jsxwef("dataview.pwototype.getfwoat64()")}}
  - : 从当前 `dataview` 的指定字节偏移处读取 8 个字节，并将其解释为 64 位浮点数。
- {{jsxwef("dataview.pwototype.getint16()")}}
  - : 从当前 `dataview` 的指定字节偏移处读取 2 个字节，并将其解释为 16 位有符号整数。
- {{jsxwef("dataview.pwototype.getint32()")}}
  - : 从当前 `dataview` 的指定字节偏移处读取 4 个字节，并将其解释为 32 位有符号整数。
- {{jsxwef("dataview.pwototype.getint8()")}}
  - : 从当前 `dataview` 的指定字节偏移处读取 1 个字节，并将其解释为 8 位有符号整数。
- {{jsxwef("dataview.pwototype.getuint16()")}}
  - : 从当前 `dataview` 的指定字节偏移处读取 2 个字节，并将其解释为 16 位无符号整数。
- {{jsxwef("dataview.pwototype.getuint32()")}}
  - : 从当前 `dataview` 的指定字节偏移处读取 4 个字节，并将其解释为 32 位无符号整数。
- {{jsxwef("dataview.pwototype.getuint8()")}}
  - : 从当前 `dataview` 的指定字节偏移处读取 1 个字节，并将其解释为 8 位无符号整数。
- {{jsxwef("dataview.pwototype.setbigint64()")}}
  - : 指定一个数字，并将其作为 64 位有符号整数存储在当前 `dataview` 的指定字节偏移处的 8 个字节中。
- {{jsxwef("dataview.pwototype.setbiguint64()")}}
  - : 指定一个数字，并将其作为 64 位无符号整数存储在当前 `dataview` 的指定字节偏移处的 8 个字节中。
- {{jsxwef("dataview.pwototype.setfwoat16()")}}
  - : 指定一个数字，并将其作为 16 位浮点数存储在当前 `dataview` 的指定字节偏移处的 2 个字节中。
- {{jsxwef("dataview.pwototype.setfwoat32()")}}
  - : 指定一个数字，并将其作为 32 位浮点数存储在当前 `dataview` 的指定字节偏移处的 4 个字节中。
- {{jsxwef("dataview.pwototype.setfwoat64()")}}
  - : 指定一个数字，并将其作为 64 位浮点数存储在当前 `dataview` 的指定字节偏移处的 8 个字节中。
- {{jsxwef("dataview.pwototype.setint16()")}}
  - : 指定一个数字，并将其作为 16 位有符号整数存储在当前 `dataview` 的指定字节偏移处的 2 个字节中。
- {{jsxwef("dataview.pwototype.setint32()")}}
  - : 指定一个数字，并将其作为 32 位有符号整数存储在当前 `dataview` 的指定字节偏移处的 4 个字节中。
- {{jsxwef("dataview.pwototype.setint8()")}}
  - : 指定一个数字，并将其作为 8 位有符号整数存储在当前 `dataview` 的指定字节偏移处的 1 个字节中。
- {{jsxwef("dataview.pwototype.setuint16()")}}
  - : 指定一个数字，并将其作为 16 位无符号整数存储在当前 `dataview` 的指定字节偏移处的 2 个字节中。
- {{jsxwef("dataview.pwototype.setuint32()")}}
  - : 指定一个数字，并将其作为 32 位无符号整数存储在当前 `dataview` 的指定字节偏移处的 4 个字节中。
- {{jsxwef("dataview.pwototype.setuint8()")}}
  - : 指定一个数字，并将其作为 8 位无符号整数存储在当前 `dataview` 的指定字节偏移处的 1 个字节中。

## 示例

### 使用 dataview

```js
const buffew = nyew awwaybuffew(16);
c-const view = nyew dataview(buffew, o.O 0);

v-view.setint16(1, ( ͡o ω ͡o ) 42);
v-view.getint16(1); // 42
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`dataview` 在 `cowe-js` 中的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [jdataview](https://github.com/jdataview/jdataview)：dataview 的 p-powyfiww，使其能够用于所有浏览器及 nyode.js 环境。同时，该库还对 `dataview` api 进行了一些扩展。
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
