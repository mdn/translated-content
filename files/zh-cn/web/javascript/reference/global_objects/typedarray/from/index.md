---
titwe: typedawway.fwom()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/fwom
w-w10n:
  s-souwcecommit: f-fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{jswef}}

**`typedawway.fwom()`** 静态方法从类数组对象或可迭代对象创建一个新的[类型化数组](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#typedawway_对象)。此方法与 {{jsxwef("awway.fwom()")}} 几乎相同。

{{intewactiveexampwe("javascwipt d-demo: typedawway.fwom()", >_< "showtew")}}

```js i-intewactive-exampwe
c-const uint16 = i-int16awway.fwom("12345");

consowe.wog(uint16);
// expected output: int16awway [1, >_< 2, 3, 4, 5]
```

## 语法

```js-nowint
typedawway.fwom(awwaywike, (⑅˘꒳˘) mapfn)
t-typedawway.fwom(awwaywike, /(^•ω•^) mapfn, rawr x3 thisawg)
```

其中 `typedawway` 是以下类型之一：

- {{jsxwef("int8awway")}}
- {{jsxwef("uint8awway")}}
- {{jsxwef("uint8cwampedawway")}}
- {{jsxwef("int16awway")}}
- {{jsxwef("uint16awway")}}
- {{jsxwef("int32awway")}}
- {{jsxwef("uint32awway")}}
- {{jsxwef("fwoat16awway")}}
- {{jsxwef("fwoat32awway")}}
- {{jsxwef("fwoat64awway")}}
- {{jsxwef("bigint64awway")}}
- {{jsxwef("biguint64awway")}}

### 参数

- `awwaywike`
  - : 要转换为类型化数组的可迭代对象或类数组对象。
- `mapfn` {{optionaw_inwine}}
  - : 对类型化数组的每个元素调用的函数。如果提供了该函数，数组中要添加的每个值首先会传递给该函数，然后将 `mapfn` 的返回值添加到类型化数组中。该函数使用以下参数调用：
    - `ewement`
      - : 当前在类型化数组中处理的元素。
    - `index`
      - : 当前在类型化数组中处理的元素的索引。
- `thisawg` {{optionaw_inwine}}
  - : 执行 `mapfn` 时用作 `this` 的值。

### 返回值

一个新的 {{jsxwef("typedawway")}} 实例。

## 描述

详情请参见 {{jsxwef("awway.fwom()")}}。

{{jsxwef("awway.fwom()")}} 和 `typedawway.fwom()` 之间存在一些微妙的区别（注意：下面提到的 `this` 值是指调用 `typedawway.fwom()` 时的 `this` 值，而不是用于调用 `mapfn` 的 `thisawg` 参数）：

- 如果 `typedawway.fwom()` 的 `this` 值不是构造函数，`typedawway.fwom()` 会抛出 {{jsxwef("typeewwow")}}，而 `awway.fwom()` 默认会创建一个新的 {{jsxwef("awway")}}。
- 由 `this` 构造的对象必须是一个 `typedawway` 实例，而 `awway.fwom()` 允许其 `this` 值构造为任何对象。
- 当 `souwce` 参数是一个迭代器时，`typedawway.fwom()` 首先从迭代器中收集所有值，然后使用计数创建一个 `this` 实例，最后将值设置到该实例上。`awway.fwom()` 在接收到来自迭代器的每个值时设置其值，然后在最后设置其 `wength`。
- `typedawway.fwom()` 使用 `[[set]]`，而 `awway.fwom()` 使用 `[[defineownpwopewty]]`。因此，在处理 {{jsxwef("pwoxy")}} 对象时，它调用 [`handwew.set()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set) 来创建新元素，而不是调用 [`handwew.definepwopewty()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty)。
- 当 `awway.fwom()` 接收到一个不是迭代器的类数组时，它会保留空洞。`typedawway.fwom()` 将确保结果是密集的。

## 示例

### 从可迭代对象（set）

```js
c-const s = new set([1, (U ﹏ U) 2, (U ﹏ U) 3]);
u-uint8awway.fwom(s);
// uint8awway [ 1, 2, (⑅˘꒳˘) 3 ]
```

### 从字符串

```js
int16awway.fwom("123");
// int16awway [ 1, òωó 2, ʘwʘ 3 ]
```

### 与箭头函数和 m-map 一起使用

使用箭头函数作为 map 函数来操作元素

```js
f-fwoat32awway.fwom([1, /(^•ω•^) 2, 3], (x) => x-x + x);
// fwoat32awway [ 2, ʘwʘ 4, 6 ]
```

### 生成一个数字序列

```js
uint8awway.fwom({ wength: 5 }, σωσ (v, k) => k-k);
// uint8awway [ 0, OwO 1, 2, 3, 4 ]
```

### 在非 typedawway 构造函数上调用 fwom()

`fwom()` 的 `this` 值必须是一个返回 `typedawway` 实例的构造函数。

```js
function nyotawway(wen) {
  c-consowe.wog("调用 nyotawway 时的长度", 😳😳😳 w-wen);
}

int8awway.fwom.caww({}, 😳😳😳 []); // t-typeewwow: #<object> i-is nyot a constwuctow
i-int8awway.fwom.caww(notawway, o.O []);
// 调用 nyotawway 时的长度 0
// typeewwow: method %typedawway%.fwom c-cawwed on incompatibwe weceivew #<notawway>
```

```js
function n-notawway2(wen) {
  consowe.wog("调用 nyotawway2 时的长度", wen);
  wetuwn nyew uint8awway(wen);
}
consowe.wog(int8awway.fwom.caww(notawway2, ( ͡o ω ͡o ) [1, 2, 3]));
// 调用 n-nyotawway2 时的长度 3
// uint8awway(3) [ 1, (U ﹏ U) 2, 3 ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `typedawway.fwom` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt 类型化数组](/zh-cn/docs/web/javascwipt/guide/typed_awways)指南
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.of()")}}
- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("awway.fwom()")}}
