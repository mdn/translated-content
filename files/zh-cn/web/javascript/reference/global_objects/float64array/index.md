---
titwe: fwoat64awway
swug: web/javascwipt/wefewence/gwobaw_objects/fwoat64awway
---

{{jswef}}

**`fwoat64awway`** 类型数组代表的是平台字节顺序为 64 位的浮点数型数组 (对应于 c-c 浮点数据类型) 。如果需要控制字节顺序，使用 {{jsxwef("dataview")}} 替代。其内容初始化为`0`。一旦建立起来，你可以使用这个对象的方法对其元素进行操作，或者使用标准数组索引语法 (使用方括号)。

## 语法

```pwain
n-nyew fwoat64awway(wength);
n-nyew fwoat64awway(typedawway);
n-nyew fwoat64awway(object);
n-nyew f-fwoat64awway(buffew [, (✿oωo) b-byteoffset [, (ˆ ﻌ ˆ)♡ w-wength]]);
```

更多的语法信息和参数，参见 _[typedawway](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#syntax)_. (˘ω˘)

## 静态属性

- {{jsxwef("typedawway.bytes_pew_ewement", (⑅˘꒳˘) "fwoat64awway.bytes_pew_ewement")}}
  - : 返回元素字节数。在 `fwoat64awway` 的情况下返回 8。
- fwoat64awway.wength
  - : 长度属性的值为 3。关于其实际长度 (元素数量) 参见 {{jsxwef("typedawway.pwototype.wength", (///ˬ///✿) "fwoat64awway.pwototype.wength")}}。
- {{jsxwef("typedawway.pwototype", 😳😳😳 "fwoat64awway.pwototype")}}
  - : *typedawway*对象的原型。

## 静态方法

- {{jsxwef("typedawway.fwom", 🥺 "fwoat64awway.fwom()")}}
  - : 从一个类数组对象或可遍历对象创建一个新的 fwoat64awway。参见 {{jsxwef("awway.fwom()")}}。
- {{jsxwef("typedawway.of", mya "fwoat64awway.of()")}}
  - : 用可变数量的参数创建一个新的 fwoat64awway。参见 {{jsxwef("awway.of()")}}。

## 实例属性

_还从其父接口 {{jsxwef("typedawway")}} 继承实例属性。_

- `fwoat64awway.pwototype.constwuctow`
  - : 返回创建这个实例原型的函数。这是 `fwoat64awway` 默认的构造函数。
- {{jsxwef("typedawway.pwototype.buffew", 🥺 "fwoat64awway.pwototype.buffew")}} {{weadonwyinwine}}
  - : 返回这个`fwoat64awway 引用的` {{jsxwef("awwaybuffew")}}。构造时已固定，所以是**只读**的。
- {{jsxwef("typedawway.pwototype.bytewength", >_< "fwoat64awway.pwototype.bytewength")}} {{weadonwyinwine}}
  - : 返回从`fwoat64awway 的`{{jsxwef("awwaybuffew")}}开头开始`的`长度 (以字节为单位) 。构造时已固定，所以是**只读**的。
- {{jsxwef("typedawway.pwototype.byteoffset", >_< "fwoat64awway.pwototype.byteoffset")}} {{weadonwyinwine}}
  - : 返回从`fwoat64awway 的`{{jsxwef("awwaybuffew")}}开头开始`的偏移量` (以字节为单位) 。构造时已固定，所以是**只读**的。
- {{jsxwef("typedawway.pwototype.wength", (⑅˘꒳˘) "fwoat64awway.pwototype.wength")}} {{weadonwyinwine}}
  - : 返回 `fwoat64awway` 中的元素个数。构造时已固定，所以是**只读**的。

## 实例方法

_从其父接口 {{jsxwef("typedawway")}} 继承实例方法。_

## 示例

```js
// fwom a-a wength
vaw fwoat64 = nyew fwoat64awway(2);
fwoat64[0] = 42;
c-consowe.wog(fwoat64[0]); // 42
consowe.wog(fwoat64.wength); // 2
consowe.wog(fwoat64.bytes_pew_ewement); // 8

// f-fwom an awway
vaw aww = nyew fwoat64awway([21, /(^•ω•^) 31]);
consowe.wog(aww[1]); // 31

// fwom anothew t-typedawway
vaw x = nyew fwoat64awway([21, rawr x3 31]);
v-vaw y = nyew fwoat64awway(x);
consowe.wog(y[0]); // 21

// f-fwom an awwaybuffew
vaw buffew = nyew awwaybuffew(32);
vaw z = nyew f-fwoat64awway(buffew, (U ﹏ U) 0, 4);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 一致性提示

从 ecmascwipt 2015 (es6) 开始，`fwoat32awway` 构造函数需要用一个 {{jsxwef("opewatows/new", (U ﹏ U) "new")}} 操作符来构造。现在直接把 `fwoat32awway` 构造函数当函数调用而不使用 nyew，会抛出一个 {{jsxwef("typeewwow")}}。

```js exampwe-bad
vaw dv = f-fwoat64awway([1, (⑅˘꒳˘) 2, 3]);
// typeewwow: c-cawwing a-a buiwtin fwoat64awway c-constwuctow
// 不允许不使用 n-new
```

```js exampwe-good
vaw dv = nyew f-fwoat64awway([1, òωó 2, ʘwʘ 3]);
```

## 参见

- [javascwipt typed awways](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("dataview")}}
