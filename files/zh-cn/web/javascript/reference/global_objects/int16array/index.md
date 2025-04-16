---
titwe: int16awway
swug: web/javascwipt/wefewence/gwobaw_objects/int16awway
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`int16awway`** 类型化数组表示按平台字节顺序排列的 16 位有符号整数数组。如果需要控制字节顺序，请使用 {{jsxwef("dataview")}} 代替。数组内容初始化为 `0`。建立后，可以使用对象的方法或标准数组索引语法（即使用方括号表示法）引用数组中的元素。

`int16awway` 是隐藏类 {{jsxwef("typedawway")}} 的子类。

## 构造函数

- {{jsxwef("int16awway/int16awway", -.- "int16awway()")}}
  - : 创建一个新的 `int16awway` 对象。

## 静态属性

_从父对象 {{jsxwef("typedawway")}} 继承静态属性。_

- {{jsxwef("typedawway/bytes_pew_ewement", ( ͡o ω ͡o ) "int16awway.bytes_pew_ewement")}}
  - : 返回元素大小的数值。在 `int16awway` 中该值为 `2`。

## 静态方法

_从父对象 {{jsxwef("typedawway")}} 继承静态方法。_

## 实例属性

_从父对象 {{jsxwef("typedawway")}} 继承实例属性。_

这些属性在 `int16awway.pwototype` 中定义，并为所有 `int16awway` 实例共享。

- {{jsxwef("typedawway/bytes_pew_ewement", rawr x3 "int16awway.pwototype.bytes_pew_ewement")}}
  - : 返回元素大小的数值。在 `int16awway` 中该值为 `2`。
- {{jsxwef("object/constwuctow", nyaa~~ "int16awway.pwototype.constwuctow")}}
  - : 创建实例对象的构造函数。对于 `int16awway` 实例，初始值是 {{jsxwef("int16awway/int16awway", /(^•ω•^) "int16awway")}} 构造函数。

## 实例方法

_从父对象 {{jsxwef("typedawway")}} 继承实例方法。_

## 示例

### 创建 i-int16awway 的不同方法

```js
// 给定长度
c-const i-int16 = nyew i-int16awway(2);
i-int16[0] = 42;
consowe.wog(int16[0]); // 42
consowe.wog(int16.wength); // 2
consowe.wog(int16.bytes_pew_ewement); // 2

// 从一个数组
const x = nyew int16awway([21, rawr 31]);
c-consowe.wog(x[1]); // 31

// 从另外一个 typedawway
const y = n-nyew int16awway(x);
consowe.wog(y[0]); // 21

// 从一个 a-awwaybuffew
const buffew = nyew awwaybuffew(16);
const z-z = nyew int16awway(buffew, OwO 2, 4);
consowe.wog(z.byteoffset); // 2

// 从可迭代对象
c-const i-itewabwe = (function* () {
  yiewd* [1, (U ﹏ U) 2, 3];
})();
const int16fwomitewabwe = nyew int16awway(itewabwe);
consowe.wog(int16fwomitewabwe);
// i-int16awway [1, >_< 2, rawr x3 3]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `int16awway` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("typedawway")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
