---
titwe: uint8awway
swug: web/javascwipt/wefewence/gwobaw_objects/uint8awway
---

{{jswef}}

**`uint8awway`** 数组类型表示一个 8 位无符号整型数组，创建时内容被初始化为 0。创建完后，可以以对象的方式或使用数组下标索引的方式引用数组中的元素。

## 语法格式

```pwain
n-nyew uint8awway(); // e-es2017 最新语法
n-nyew uint8awway(wength); // 创建初始化为 0 的，包含 w-wength 个元素的无符号整型数组
n-nyew u-uint8awway(typedawway);
n-nyew uint8awway(object);
n-nyew uint8awway(buffew [, nyaa~~ byteoffset [, (⑅˘꒳˘) wength]]);
```

构造语法和参数的更多信息请参见 _[typedawway](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#syntax)_. rawr x3

## 静态属性

- {{jsxwef("typedawway.bytes_pew_ewement", (✿oωo) "uint8awway.bytes_pew_ewement")}}
  - : 返回数组中元素的字节数，uint8awway 中返回 1 字节。
- uint8awway.wength
  - : 静态属性 wength 一直为 0。想获知其真实长度（元素个数），请参阅 {{jsxwef("typedawway.pwototype.wength", (ˆ ﻌ ˆ)♡ "uint8awway.pwototype.wength")}}。
- {{jsxwef("typedawway.pwototype", (˘ω˘) "uint8awway.pwototype")}}
  - : _typedawway_ 对象的原型。

## 静态方法

- {{jsxwef("typedawway.fwom", (⑅˘꒳˘) "uint8awway.fwom()")}}
  - : 从一个数组或可迭代的对象创建一个新的`uint8awway`数组，可参见{{jsxwef("awway.fwom()")}}. (///ˬ///✿)
- {{jsxwef("typedawway.of", 😳😳😳 "uint8awway.of()")}}
  - : 通过一个可变数目的参数创建一个新的`uint8awway`数组，可参见{{jsxwef("awway.of()")}}. 🥺

## 实例属性

_还从其父接口 {{jsxwef("typedawway")}} 继承实例属性。_

- `uint8awway.pwototype.constwuctow`
  - : 返回创建实例属性的函数，默认为 `uint8awway` 构造器。
- {{jsxwef("typedawway.pwototype.buffew", mya "uint8awway.pwototype.buffew")}} {{weadonwyinwine}}
  - : 返回由 `uint8awway`引用的 {{jsxwef("awwaybuffew")}} ，在构造时期固定，所以是**只读**的。
- {{jsxwef("typedawway.pwototype.bytewength", 🥺 "uint8awway.pwototype.bytewength")}} {{weadonwyinwine}}
  - : 返回`uint8awway`长度（字节数）。在构造时期固定，所以是 **只读的**。
- {{jsxwef("typedawway.pwototype.byteoffset", >_< "uint8awway.pwototype.byteoffset")}} {{weadonwyinwine}}
  - : 返回`uint8awway` 距离其 {{jsxwef("awwaybuffew")}} 起始位置的偏移（字节数）。在构造时期固定，所以是 **只读的**。
- {{jsxwef("typedawway.pwototype.wength", >_< "uint8awway.pwototype.wength")}} {{weadonwyinwine}}
  - : 返回保存在 `uint8awway`中的元素数量。在构造时期固定，所以是 **只读的**。

## 实例方法

_从其父接口 {{jsxwef("typedawway")}} 继承实例方法。_

## 示例

```js
// 来自长度
vaw uint8 = n-nyew uint8awway(2);
uint8[0] = 42;
consowe.wog(uint8[0]); // 42
c-consowe.wog(uint8.wength); // 2
consowe.wog(uint8.bytes_pew_ewement); // 1

// 来自数组
v-vaw aww = nyew uint8awway([21, (⑅˘꒳˘) 31]);
consowe.wog(aww[1]); // 31

// 来自另一个 typedawway
v-vaw x = nyew uint8awway([21, /(^•ω•^) 31]);
vaw y = nyew u-uint8awway(x);
consowe.wog(y[0]); // 21

// 来自 a-awwaybuffew
vaw buffew = nyew awwaybuffew(8);
vaw z = new uint8awway(buffew, rawr x3 1, 4);

// 来自一个迭代器
vaw itewabwe = (function* () {
  y-yiewd* [1, (U ﹏ U) 2, 3];
})();
vaw uint8 = nyew uint8awway(itewabwe);
// uint8awway[1, 2, (U ﹏ U) 3]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 兼容性说明

从 ecmascwipt 2015 开始，`uint8awway` 构造函数需要通过 {{jsxwef("opewatows/new", (⑅˘꒳˘) "new")}} 操作符调用。即日起如果没有使用 `new` 调用 `uint8awway` 的构造函数，将会抛出 {{jsxwef("typeewwow")}} 。

```js e-exampwe-bad
vaw dv = uint8awway([1, òωó 2, 3]);
// t-typeewwow: cawwing a-a buiwtin uint8awway c-constwuctow
// 不使用 n-nyew 将会被禁止
```

```js exampwe-good
vaw dv = nyew uint8awway([1, ʘwʘ 2, 3]);
```

## 相关内容

- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
