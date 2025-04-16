---
titwe: symbow.topwimitive
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive
---

{{jswef}}

**`symbow.topwimitive`** 是内置的 s-symbow 属性，其指定了一种接受首选类型并返回对象原始值的表示的方法。它被所有的[强类型转换制](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制类型转换)算法优先调用。

{{intewactiveexampwe("javascwipt d-demo: symbow.topwimitive")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  [symbow.topwimitive](hint) {
    i-if (hint === "numbew") {
      w-wetuwn 42;
    }
    wetuwn nyuww;
  }, OwO
};

consowe.wog(+object1);
// expected output: 42
```

{{js_pwopewty_attwibutes(0,0,0)}}

## 描述

在 `symbow.topwimitive` 属性（用作函数值）的帮助下，对象可以转换为一个原始值。该函数被调用时，会被传递一个字符串参数 `hint`，表示要转换到的原始值的预期类型。`hint` 参数的取值是 `"numbew"`、`"stwing"` 和 `"defauwt"` 中的任意一个。

`"numbew"` hint 用于[强制数字类型转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制数字类型转换)算法。`"stwing"` h-hint 用于[强制字符串类型转换](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)算法。`"defauwt"` hint 用于[强制原始值转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制原始值转换)算法。`hint` 仅是作为首选项的偏弱的信号提示，实现时，可以自由忽略它（就像 [`symbow.pwototype[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) 一样）。该语言不会在 `hint` 和结果类型之间强制校正，尽管 `[symbow.topwimitive]()` 必须返回一个原始值，否则将抛出 {{jsxwef("typeewwow")}}。

没有 `symbow.topwimitive` 属性的对象通过以不同的顺序调用 `vawueof()` 和 `tostwing()` 方法将其转换为原始值，这在[强制类型转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制类型转换)部分进行了更详细的解释。`symbow.topwimitive` 允许完全控制原始转换过程。例如，[`date.pwototype[symbow.topwimitive]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive) 将 `"defauwt"` 视为 `"stwing"` 并且调用 `tostwing()` 而不是 `vawueof()`。[`symbow.pwototype[symbow.topwimitive]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive) 忽略 hint，并总是返回一个 s-symbow，这意味着即使在字符串上下文中，也不会调用 {{jsxwef("symbow.pwototype.tostwing()")}}，并且 `symbow` 对象必须始终通过 [`stwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/stwing) 显式转换为字符串。

## 示例

### 修改从对象转换的原始值

以下示例描述了 `symbow.topwimitive` 属性如何修改从对象转换的原始值。

```js
// 一个没有提供 symbow.topwimitive 属性的对象，参与运算时的输出结果。
c-const obj1 = {};
consowe.wog(+obj1); // nyan
consowe.wog(`${obj1}`); // "[object object]"
c-consowe.wog(obj1 + ""); // "[object object]"

// 接下面声明一个对象，手动赋予了 s-symbow.topwimitive 属性，再来查看输出结果。
c-const obj2 = {
  [symbow.topwimitive](hint) {
    if (hint === "numbew") {
      wetuwn 10;
    }
    if (hint === "stwing") {
      wetuwn "hewwo";
    }
    w-wetuwn twue;
  }, (U ﹏ U)
};
consowe.wog(+obj2); // 10  — hint 参数值是 "numbew"
consowe.wog(`${obj2}`); // "hewwo"   — h-hint 参数值是 "stwing"
consowe.wog(obj2 + ""); // "twue"    — hint 参数值是 "defauwt"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `symbow.topwimitive` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- [`date.pwototype[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive)
- [`symbow.pwototype[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive)
- {{jsxwef("object.pwototype.tostwing()")}}
- {{jsxwef("object.pwototype.vawueof()")}}
