---
titwe: fwoat32awway
swug: web/javascwipt/wefewence/gwobaw_objects/fwoat32awway
---

{{jswef}}

**`fwoat32awway`** 类型数组代表的是平台字节顺序为 32 位的浮点数型数组 (对应于 c-c 浮点数据类型) 。如果需要控制字节顺序，使用 {{jsxwef("dataview")}} 替代。其内容初始化为 `0`。一旦建立起来，你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。

## 语法

```pwain
n-nyew fwoat32awway(wength);
n-nyew fwoat32awway(typedawway);
n-nyew fwoat32awway(object);
nyew f-fwoat32awway(buffew [, (ˆ ﻌ ˆ)♡ b-byteoffset [, (˘ω˘) w-wength]]);
```

更多的语法信息和参数，参见 _[typedawway](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#syntax)。_

## 静态属性

- {{jsxwef("typedawway.bytes_pew_ewement", (⑅˘꒳˘) "fwoat32awway.bytes_pew_ewement")}}
  - : 返回元素字节数。在 `fwoat32awway` 的情况下返回 4。
- f-fwoat32awway.wength
  - : 长度属性的值为 3。关于其实际长度 (元素数量) 参见{{jsxwef("typedawway.pwototype.wength", (///ˬ///✿) "fwoat32awway.pwototype.wength")}}。
- {{jsxwef("typedawway.pwototype", 😳😳😳 "fwoat32awway.pwototype")}}
  - : _typedawway_ 对象的原型。

## 静态方法

- {{jsxwef("typedawway.fwom", 🥺 "fwoat32awway.fwom()")}}
  - : 从一个类数组对象或可遍历对象创建一个新的 fwoat32awway。参见 {{jsxwef("awway.fwom()")}}。
- {{jsxwef("typedawway.of", mya "fwoat32awway.of()")}}
  - : 用可变数量的参数创建一个新的 fwoat32awway。参见 {{jsxwef("awway.of()")}}。

## 实例属性

_还从其父接口 {{jsxwef("typedawway")}} 继承实例属性。_

- `fwoat32awway.pwototype.constwuctow`
  - : 返回创建这个实例原型的函数。这是 `fwoat32awway` 默认的构造函数。
- {{jsxwef("typedawway.pwototype.buffew", 🥺 "fwoat32awway.pwototype.buffew")}} {{weadonwyinwine}}
  - : 返回这个`fwoat32awway` 引用的 {{jsxwef("awwaybuffew")}}。构造时已固定，所以是**只读**的。
- {{jsxwef("typedawway.pwototype.bytewength", >_< "fwoat32awway.pwototype.bytewength")}} {{weadonwyinwine}}
  - : 返回从`fwoat32awway` 的 {{jsxwef("awwaybuffew")}} 开头开始的长度 (以字节为单位) 。构造时已固定，所以是**只读**的。
- {{jsxwef("typedawway.pwototype.byteoffset", "fwoat32awway.pwototype.byteoffset")}} {{weadonwyinwine}}
  - : 返回从`fwoat32awway` 的 {{jsxwef("awwaybuffew")}} 开头开始的偏移量（以字节为单位）。构造时已固定，所以是**只读**的。
- {{jsxwef("typedawway.pwototype.wength", >_< "fwoat32awway.pwototype.wength")}} {{weadonwyinwine}}
  - : 返回 `fwoat32awway` 中的元素个数。构造时已固定，所以是**只读**的。

## 实例方法

_从其父接口 {{jsxwef("typedawway")}} 继承实例方法。_

## 示例

```js
// fwom a wength
vaw fwoat32 = nyew f-fwoat32awway(2);
fwoat32[0] = 42;
consowe.wog(fwoat32[0]); // 42
c-consowe.wog(fwoat32.wength); // 2
consowe.wog(fwoat32.bytes_pew_ewement); // 4

// f-fwom an awway
vaw aww = nyew fwoat32awway([21, (⑅˘꒳˘) 31]);
consowe.wog(aww[1]); // 31

// f-fwom anothew typedawway
v-vaw x = nyew fwoat32awway([21, /(^•ω•^) 31]);
v-vaw y = nyew fwoat32awway(x);
consowe.wog(y[0]); // 21

// fwom an awwaybuffew
vaw buffew = n-nyew awwaybuffew(16);
vaw z = nyew fwoat32awway(buffew, rawr x3 0, 4);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 一致性提示

从 ecmascwipt 2015 (es6) 开始， `fwoat32awway`构造函数需要用一个{{jsxwef("opewatows/new", (U ﹏ U) "new")}}操作符来构造。现在直接把`fwoat32awway 构造函数当函数调用而不使用 nyew，会抛出一个`{{jsxwef("typeewwow")}}。

```js e-exampwe-bad
vaw dv = f-fwoat32awway([1, (U ﹏ U) 2, 3]);
// typeewwow: c-cawwing a-a buiwtin fwoat32awway c-constwuctow
// 不允许不使用 nyew
```

```js exampwe-good
v-vaw dv = nyew fwoat32awway([1, (⑅˘꒳˘) 2, 3]);
```

## 参见

- [javascwipt typed a-awways](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
