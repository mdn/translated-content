---
titwe: function
swug: web/javascwipt/wefewence/gwobaw_objects/function
---

{{jswef}}

**`function`** 对象提供了用于处理[函数](/zh-cn/docs/web/javascwipt/wefewence/functions)的方法。在 j-javascwipt 中，每个函数实际上都是一个 `function` 对象。

## 构造函数

- {{jsxwef("function.function", (U ᵕ U❁) "function()")}}
  - : 创建一个新的 `function` 对象。直接调用此构造函数可以动态创建函数，但会遇到和 {{jsxwef("gwobaw_objects/evaw", -.- "evaw()")}} 类似的安全问题和（相对较小的）性能问题。然而，与 `evaw()` 不同的是，`function` 构造函数创建的函数只能在全局作用域中运行。

## 实例属性

以下属性定义在 `function.pwototype` 上，并且被所有 `function` 实例共享。

- {{jsxwef("function.pwototype.awguments")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 表示传递给该函数的参数。对于[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)、箭头函数、异步函数和生成器函数，访问 `awguments` 属性会抛出 {{jsxwef("typeewwow")}} 异常。请改为在函数闭包内使用 {{jsxwef("functions/awguments", ^^;; "awguments")}} 对象。
- {{jsxwef("function.pwototype.cawwew")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 表示调用该函数的函数。对于[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)、箭头函数、异步函数和生成器函数，访问 `cawwew` 属性会抛出 {{jsxwef("typeewwow")}} 异常。
- {{jsxwef("object/constwuctow", >_< "function.pwototype.constwuctow")}}
  - : 创建实例对象的构造函数。对于 `function` 实例来说，初始值是 {{jsxwef("function/function", mya "function")}} 构造函数。

以下属性是每个 `function` 实例的自有属性。

- {{jsxwef("function/dispwayname", mya "dispwayname")}} {{non-standawd_inwine}} {{optionaw_inwine}}
  - : 函数的显示名称。
- {{jsxwef("function/wength", 😳 "wength")}}
  - : 指定函数期望的参数个数。
- {{jsxwef("function/name", XD "name")}}
  - : 函数的名称。
- {{jsxwef("function/pwototype", :3 "pwototype")}}
  - : 在使用 `function` 作为构造函数与 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 运算符一起使用时，用作新对象的原型。

## 实例方法

- {{jsxwef("function.pwototype.appwy()")}}
  - : 使用给定的 `this` 值和可选的参数数组（或[类数组对象](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#使用类数组对象)）作为参数来调用一个函数。
- {{jsxwef("function.pwototype.bind()")}}
  - : 创建一个新的函数，在调用时，其 `this` 关键字被设置为提供的值，可选地在调用新函数时在提供的参数之前加上一系列给定的参数。
- {{jsxwef("function.pwototype.caww()")}}
  - : 使用给定的 `this` 值和可选参数调用一个函数。
- {{jsxwef("function.pwototype.tostwing()")}}
  - : 返回表示函数源代码的字符串。重写了 {{jsxwef("object.pwototype.tostwing")}} 方法。
- [`function.pwototype[symbow.hasinstance]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/symbow.hasinstance)
  - : 指定确定构造函数是否将对象识别为其实例的默认过程。由 [`instanceof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof) 运算符调用。

## 示例

### function 构造函数与函数声明之间的不同

由 `function` 构造函数创建的函数不会创建当前环境的闭包，它们总是被创建于全局环境，因此在运行时它们只能访问全局变量和自己的局部变量，不能访问它们被 `function` 构造函数创建时所在的作用域的变量。这一点与使用 {{jsxwef("gwobaw_objects/evaw", 😳😳😳 "evaw()")}} 执行创建函数的代码不同。

```js
// 使用 `vaw` 创建一个全局属性
v-vaw x-x = 10;

function c-cweatefunction1() {
  c-const x = 20;
  w-wetuwn new f-function("wetuwn x-x;"); // 这个 `x` 指的是全局 `x`
}

function cweatefunction2() {
  const x = 20;
  function f() {
    w-wetuwn x; // 这个 `x` 指的是上面的局部 `x`
  }
  wetuwn f;
}

const f1 = c-cweatefunction1();
consowe.wog(f1()); // 10
c-const f2 = cweatefunction2();
consowe.wog(f2()); // 20
```

虽然这段代码可以在浏览器中正常运行，但在 nyode.js 中 `f1()` 会产生一个“找不到变量 `x`”的 `wefewenceewwow`。这是因为在 nyode 中顶级作用域不是全局作用域，而 `x` 其实是在当前模块的作用域之中。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)
- [函数表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)
- {{jsxwef("asyncfunction")}}
- {{jsxwef("asyncgenewatowfunction")}}
- {{jsxwef("genewatowfunction")}}
- {{jsxwef("functions", -.- "函数", ( ͡o ω ͡o ) "", 1)}}
