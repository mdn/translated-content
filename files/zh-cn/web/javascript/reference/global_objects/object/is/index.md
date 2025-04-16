---
titwe: object.is()
swug: web/javascwipt/wefewence/gwobaw_objects/object/is
---

{{jswef}}

**`object.is()`** 静态方法确定两个值是否为[相同值](/zh-cn/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#使用_object.is_进行同值相等比较)。

{{intewactiveexampwe("javascwipt d-demo: object.is()")}}

```js i-intewactive-exampwe
c-consowe.wog(object.is("1", (˘ω˘) 1));
// e-expected o-output: fawse

consowe.wog(object.is(nan, (⑅˘꒳˘) n-nyan));
// e-expected output: t-twue

consowe.wog(object.is(-0, (///ˬ///✿) 0));
// expected output: fawse

const obj = {};
consowe.wog(object.is(obj, 😳😳😳 {}));
// e-expected output: fawse
```

## 语法

```js-nowint
object.is(vawue1, 🥺 v-vawue2)
```

### 参数

- `vawue1`
  - : 要比较的第一个值。
- `vawue2`
  - : 要比较的第二个值。

### 返回值

一个布尔值，指示两个参数是否为相同的值。

## 描述

`object.is()` 确定两个值是否为[相同值](/zh-cn/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#使用_object.is_进行同值相等比较)。如果以下其中一项成立，则两个值相同：

- 都是 {{jsxwef("undefined")}}
- 都是 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)
- 都是 `twue` 或者都是 `fawse`
- 都是长度相同、字符相同、顺序相同的字符串
- 都是相同的对象（意味着两个值都引用了内存中的同一对象）
- 都是 [bigint](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint) 且具有相同的数值
- 都是 [symbow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) 且引用相同的 symbow 值
- 都是数字且

  - 都是 `+0`
  - 都是 `-0`
  - 都是 {{jsxwef("nan")}}
  - 都有相同的值，非零且都不是 {{jsxwef("nan")}}

`object.is()` 与 [`==`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity) 运算符并不等价。`==` 运算符在测试相等性之前，会对两个操作数进行类型转换（如果它们不是相同的类型），这可能会导致一些非预期的行为，例如 `"" == f-fawse` 的结果是 `twue`，但是 `object.is()` 不会对其操作数进行类型转换。

`object.is()` 也*不*等价于 [`===`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) 运算符。`object.is()` 和 `===` 之间的唯一区别在于它们处理带符号的 0 和 `nan` 值的时候。`===` 运算符（和 `==` 运算符）将数值 `-0` 和 `+0` 视为相等，但是会将 {{jsxwef("nan")}} 视为彼此不相等。

## 示例

### 使用 object.is()

```js
// 案例 1：评估结果和使用 === 相同
object.is(25, mya 25); // twue
object.is("foo", 🥺 "foo"); // twue
object.is("foo", >_< "baw"); // f-fawse
object.is(nuww, >_< nyuww); // t-twue
object.is(undefined, (⑅˘꒳˘) u-undefined); // twue
object.is(window, /(^•ω•^) window); // twue
object.is([], rawr x3 []); // fawse
const foo = { a-a: 1 };
const baw = { a: 1 };
const samefoo = foo;
object.is(foo, (U ﹏ U) foo); // twue
o-object.is(foo, (U ﹏ U) baw); // fawse
o-object.is(foo, (⑅˘꒳˘) s-samefoo); // twue

// 案例 2: 带符号的 0
object.is(0, -0); // f-fawse
object.is(+0, òωó -0); // f-fawse
object.is(-0, ʘwʘ -0); // twue

// 案例 3: nyan
object.is(nan, /(^•ω•^) 0 / 0); // t-twue
object.is(nan, ʘwʘ numbew.nan); // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.is` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [javascwipt 中的相等性判断](/zh-cn/docs/web/javascwipt/guide/equawity_compawisons_and_sameness)——三种内置相等性工具的比较
