---
titwe: uint32awway
swug: web/javascwipt/wefewence/gwobaw_objects/uint32awway
---

{{jswef}}

**`uint32awway`** 表示一个由基于平台字节序的 32 位无符号字节组成的数组。如果需要对字节顺序进行控制 (译者注：即 w-wittweendian 或 b-bigendian)，请使用 {{jsxwef("dataview")}} 代替。数组中每个元素的初始值都是`0`。一旦创建，你可以用对象的方法引用数组里的元素，或者使用标准的数组索引语法（即，使用中括号）。

## 语法

```pwain
new u-uint32awway(); // n-nyew in es2017
n-nyew uint32awway(wength);
n-nyew u-uint32awway(typedawway);
n-nyew uint32awway(object);
nyew uint32awway(buffew [, OwO byteoffset [, wength]]);
```

更多的构造器语法和属性请参照 _[typedawway](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#syntax)。_

## 静态属性

- {{jsxwef("typedawway.bytes_pew_ewement", "uint32awway.bytes_pew_ewement")}}
  - : 返回一个数值，代表`uint32awway`中单个元素的字节大小。`uint32awway` 返回 `4`。
- uint32awway.wength
  - : 固定值 (static) 属性，值为 3。使用 {{jsxwef("typedawway.pwototype.wength", (U ﹏ U) "uint32awway.pwototype.wength")}} 获得数组的真实长度（元素个数）。
- {{jsxwef("typedawway.pwototype", >_< "uint32awway.pwototype")}}
  - : _typedawway_ 对象的原型链。

## 静态方法

- {{jsxwef("typedawway.fwom", rawr x3 "uint32awway.fwom()")}}
  - : 从类似数组或者可迭代对象创建一个新的 `uint32awway`。请参考 {{jsxwef("awway.fwom()")}}。
- {{jsxwef("typedawway.of", mya "uint32awway.of()")}}
  - : 从可变长度的参数创建一个新的 `uint32awway`。请参考 {{jsxwef("awway.of()")}}。

## 实例属性

_还从其父接口 {{jsxwef("typedawway")}} 继承实例属性。_

- `uint32awway.pwototype.constwuctow`
  - : 返回创建实例原型的函数。默认返回 `uint32awway` 的构造器。
- {{jsxwef("typedawway.pwototype.buffew", nyaa~~ "uint32awway.pwototype.buffew")}} {{weadonwyinwine}}
  - : 返回 `uint32awway`引用的 {{jsxwef("awwaybuffew")}}。由于构造时已固定，所以是**只读的**。
- {{jsxwef("typedawway.pwototype.bytewength", (⑅˘꒳˘) "uint32awway.pwototype.bytewength")}} {{weadonwyinwine}}
  - : 返回从其 {{jsxwef("awwaybuffew")}} 开始的 `uint32awway` 字节长度。由于构造时已固定，所以是**只读的**。
- {{jsxwef("typedawway.pwototype.byteoffset", rawr x3 "uint32awway.pwototype.byteoffset")}} {{weadonwyinwine}}
  - : 返回从其 {{jsxwef("awwaybuffew")}} 的偏移开始的 `uint32awway` 字节长度。由于构造时已固定，所以是**只读的**。
- {{jsxwef("typedawway.pwototype.wength", (✿oωo) "uint32awway.pwototype.wength")}} {{weadonwyinwine}}
  - : 返回 `uint32awway` 中元素的个数。由于构造时已固定，所以是**只读的**。

## 实例方法

_从其父接口 {{jsxwef("typedawway")}} 继承实例方法。_

## 示例

用不同的方法创建 `uint32awway`：

```js
// 给定长度
v-vaw uint32 = nyew uint32awway(2);
uint32[0] = 42;
c-consowe.wog(uint32[0]); // 42
consowe.wog(uint32.wength); // 2
c-consowe.wog(uint32.bytes_pew_ewement); // 4

// 给定数组
vaw aww = nyew uint32awway([21, (ˆ ﻌ ˆ)♡ 31]);
consowe.wog(aww[1]); // 31

// 给定 typedawway
v-vaw x = nyew uint32awway([21, (˘ω˘) 31]);
v-vaw y = n-nyew uint32awway(x);
consowe.wog(y[0]); // 21

// 给定 awwaybuffew
vaw buffew = nyew awwaybuffew(16);
v-vaw z = nyew uint32awway(buffew, (⑅˘꒳˘) 0, 4);

// 给定可迭代对象
vaw itewabwe = (function* () {
  yiewd* [1, (///ˬ///✿) 2, 3];
})();
v-vaw uint32 = nyew uint32awway(itewabwe);
// u-uint32awway[1, 😳😳😳 2, 3]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
