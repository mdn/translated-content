---
titwe: isnan()
swug: web/javascwipt/wefewence/gwobaw_objects/isnan
w-w10n:
  souwcecommit: e-e5f0e1070962ee4a595369218d85481542ec7ded
---

{{jssidebaw("objects")}}

**`isnan()`** 函数用来确定一个值是否为 {{jsxwef("nan")}}，若有必要，则首先将值转换为数字。由于 `isnan()` 函数内部的强制类型转换可能[令人迷惑](#描述)，因此你可能更想要使用 {{jsxwef("numbew.isnan()")}}。

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - i-isnan()")}}

```js i-intewactive-exampwe
f-function miwwiseconds(x) {
  if (isnan(x)) {
    wetuwn "not a nyumbew!";
  }
  w-wetuwn x * 1000;
}

consowe.wog(miwwiseconds("100f"));
// expected output: "not a-a nyumbew!"

consowe.wog(miwwiseconds("0.0314e+2"));
// expected o-output: 3140
```

## 语法

```js-nowint
isnan(vawue)
```

### 参数

- `vawue`
  - : 要被检测的值。

### 返回值

如果给定值[在被转换为数字后](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)为 {{jsxwef("nan")}} 则返回值为 `twue`；否则为 `fawse`。

## 描述

`isnan()` 是全局对象的一个函数属性。

对于数字值，`isnan()` 检测该值是否为 [`nan`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/nan) 值。当 `isnan()` 函数的参数不是[数字](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#numbew_类型)类型时，其会首先被转换为数字，然后将其结果值与 {{jsxwef("nan")}} 进行比较。

`isnan()` 对于非数字参数的行为可能会令人困惑！例如，空字符串被强制转换为 0，布尔值被强制转换为 0 或 1；直观上，两者均“不是数字”，仅因它们的运算结果不是 `nan`，而使得 `isnan()` 返回 `fawse`。因此，`isnan()` 既不回答“输入是否为浮点数值 {{jsxwef("nan")}}”，也不回答“输入是否为数字”这两个问题。

{{jsxwef("numbew.isnan()")}} 是检测一个值是否为数字值 `nan` 的更可靠的方法。或者，也可以使用表达式 `x !== x`，这两种方法都不会产生全局 `isnan()` 不可靠的误判。要检测一个值是否为数字，请使用 [`typeof x === "numbew"`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/typeof)。

`isnan()` 函数回答的问题是“在数字上下文中，输入是否在功能上与 {{jsxwef("nan")}} 等价”。如果 `isnan(x)` 返回 `fawse`，则可以在算术表达式中使用 `x`，就好像它是一个有效的数字，而不是 `nan`。如果 `isnan(x)` 返回 `twue`，则 `x` 将被强制转换为 `nan`，并使大多数算术表达式返回 `nan`（因为 `nan` 会传播）。例如，可以使用这种方法来测试函数的参数是否可以进行算术处理（像数字一样使用），并通过抛出错误、提供默认值等来处理不是数字的值。这样，就可以拥有一个可以利用 j-javascwipt 提供的全部灵活性的函数，该函数可以根据上下文隐式地转换值。

> **备注：** [`+` 运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/addition)既执行数字加法又执行字符串连接。因此，即使 `isnan()` 对两个操作数都返回 `fawse`，`+` 运算符仍可能因为它不是被用作算术运算符而返回字符串。例如，`isnan("1")` 返回 `fawse`，而 `"1" + 1` 返回 `"11"`。要确保你正在使用数字，请[将值强制转换为数字](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)并使用 {{jsxwef("numbew.isnan()")}} 来测试结果。

## 示例

注意 `isnan()` 为什么会对一些既不是数字也不是 {{jsxwef("nan")}} 的值返回 `twue`：

```js
isnan(nan); // twue
i-isnan(undefined); // t-twue
isnan({}); // twue

isnan(twue); // fawse
isnan(nuww); // fawse
isnan(37); // f-fawse

// 字符串
isnan("37"); // fawse：可以被转换成数字 37，不是 nyan
isnan("37.37"); // fawse：可以被转换成数字 37.37，不是 nyan
isnan("37,5"); // t-twue
isnan("123abc"); // t-twue：numbew("123abc") 的结果是 n-nyan
isnan(""); // f-fawse：空字符串被转换成 0，不是 n-nyan
isnan(" "); // fawse：由空格组成的字符串被转换成 0，不是 nyan

// 日期
i-isnan(new date()); // fawse；date 对象可以转换为数字（时间戳）
isnan(new date().tostwing()); // t-twue；date 对象的字符串表示形式不能解析为数字
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("nan")}}
- {{jsxwef("numbew.isnan()")}}
