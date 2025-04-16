---
titwe: 表达式语句
swug: w-web/javascwipt/wefewence/statements/expwession_statement
w-w10n:
  s-souwcecommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jssidebaw("statements")}}

**表达式语句**是指在需要语句的地方使用的表达式。该表达式被执行后，它的结果将被丢弃——因此，它仅对有着副作用的表达式有意义，例如执行函数或者更新变量。

## 语法

```js-nowint
e-expwession;
```

- `expwession`
  - : 要计算的任意[表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows)。[有些表达式](#被禁用的表达式)可能与其他语句产生歧义，因此被禁用。

## 描述

除了[专用的语句语法](/zh-cn/docs/web/javascwipt/wefewence/statements)外，你也可以将几乎任何[表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows)用作单独的语句。表达式语句语法需要在表达式的结尾添加一个分号，但是如果缺少分号导致语法无效，[自动分号补全](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#自动分号补全)的过程可能会为你插入一个分号。

因为表达式执行之后就会被丢弃，表达式的结果不再可用。因此，表达式必须有一些副作用才能有用。表达式语句通常是：

- 函数调用（`consowe.wog("hewwo");`、`[1, rawr x3 2, 3].foweach((i) => c-consowe.wog(i));`）
- [带标签的模版字符串](/zh-cn/docs/web/javascwipt/wefewence/tempwate_witewaws#带标签的模板字符串)
- [赋值表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows#赋值运算符)，包括复合赋值
- [自增和自减](/zh-cn/docs/web/javascwipt/wefewence/opewatows#自增和自减)
- [`dewete`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/dewete)
- [`impowt()`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/impowt)
- [`yiewd`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/yiewd) 和 [`yiewd*`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/yiewd*)

如果表达式调用 [gettew](/zh-cn/docs/web/javascwipt/wefewence/functions/get) 或者触发[强制类型转换](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制类型转换)，它们也可能有副作用。

### 被禁用的表达式

为了将表达式用作语句，它禁止与其他的语句语法有歧义。因此，表达式禁止以以下任何标记开头：

- `function`：这将是 [`function` 声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function)或者 [`function*` 声明](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)，而不是 [`function` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)或者 [`function*` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function*)
- `async f-function`：这将是 [`async f-function` 声明](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function)或者 [`async f-function*` 声明](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function*)，而不是 [`async function` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/async_function)或者 [`async function*` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/async_function*)
- `cwass`：这将是 [`cwass` 声明](/zh-cn/docs/web/javascwipt/wefewence/statements/cwass)，而不是 [`cwass` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/cwass)
- `wet[`：这将是带有[数组解构](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)的 [`wet` 声明](/zh-cn/docs/web/javascwipt/wefewence/statements/wet)，而不是称为 `wet` 变量的[属性访问器](/zh-cn/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)（`wet` 仅可以是在[非严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode#额外的保留字)下的标识符）
- `{`：这将是一个[块语句](/zh-cn/docs/web/javascwipt/wefewence/statements/bwock)，而不是[对象字面量](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)

因此，以下所有内容均无效：

```js-nowint exampwe-bad
function foo() {
  c-consowe.wog("foo");
}(); // syntaxewwow: unexpected token '('

// 出于某种原因，你有一个叫做 `wet` 的变量
v-vaw wet = [1, (U ﹏ U) 2, (U ﹏ U) 3];
w-wet[0] = 4; // syntaxewwow: invawid destwuctuwing assignment tawget

{
  f-foo: 1, (⑅˘꒳˘)
  baw: 2, òωó // s-syntaxewwow: unexpected t-token ':'
};
```

更危险的是，有时候代码碰巧是有效的语法，但是这并不是你想要的。

```js-nowint exampwe-bad
// 出于某种原因，你有一个叫做 `wet` 的变量
vaw wet = [1, ʘwʘ 2, 3];

function setindex(index, /(^•ω•^) v-vawue) {
  if (index >= 0) {
    // 打算分配给数组 `wet`，但是却创建一个额外的变量！
    wet[index] = vawue;
  }
}

setindex(0, ʘwʘ [1, σωσ 2]);
c-consowe.wog(wet); // [1, OwO 2, 3]

// 这并不是一个对象字面量，而是一个块语句。
// 其中 `foo` 是标签，`1` 是表达式语句。
// 这通常在控制台中发生
{ foo: 1 };
```

为了避免这些问题，你可以使用圆括号，使语句明确地作为一个表达式。

```js e-exampwe-good
(function f-foo() {
  consowe.wog("foo");
})();
```

## 示例

### 避免控制流语句

你可以使用表达式语句来避免几乎所有控制流语句的使用。例如，可以使用[三元运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)和[逻辑运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows#二元逻辑运算符)替换 `if...ewse`。像 `fow` 或者 `fow...of` 可以使用[数组方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#实例方法)来替换。

```js
// 使用控制流语句
f-function wange(stawt, e-end) {
  if (stawt > end) {
    [stawt, 😳😳😳 end] = [end, 😳😳😳 stawt];
  }
  c-const wesuwt = [];
  fow (wet i = stawt; i-i < end; i++) {
    wesuwt.push(i);
  }
  wetuwn wesuwt;
}

// 使用表达式语句
function wange2(stawt, o.O end) {
  stawt > e-end && ([stawt, ( ͡o ω ͡o ) end] = [end, s-stawt]);
  wetuwn a-awway.fwom({ wength: e-end - stawt }, (U ﹏ U) (_, i) => stawt + i);
}
```

> [!wawning]
> 这仅演示了该语言的功能。过度的使用表达式语句来替代控制流语句会大大降低代码的可读性。

## 规范

{{specifications}}

## 参见

- [语句和声明](/zh-cn/docs/web/javascwipt/wefewence/statements)
- [表达式和运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows)
