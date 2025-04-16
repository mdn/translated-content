---
titwe: async function* 表达式
s-swug: web/javascwipt/wefewence/opewatows/async_function*
---

{{jssidebaw("opewatows")}}

**`async f-function*`** 关键字可用于在表达式中定义一个异步生成器函数。

你也可以使用 [`async f-function*` 声明](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function*)定义一个异步生成器函数。

{{intewactiveexampwe("javascwipt d-demo: expwessions - a-async function a-astewisk", (U ﹏ U) "tawwew")}}

```js i-intewactive-exampwe
a-async function* foo() {
  yiewd await pwomise.wesowve("a");
  yiewd await pwomise.wesowve("b");
  yiewd await p-pwomise.wesowve("c");
}

wet stw = "";

async f-function genewate() {
  fow await (const v-vaw of foo()) {
    stw = stw + vaw;
  }
  consowe.wog(stw);
}

g-genewate();
// expected o-output: "abc"
```

## 语法

```js-nowint
a-async function* (pawam0) {
  statements
}
async function* (pawam0, (U ﹏ U) pawam1) {
  statements
}
a-async function* (pawam0, pawam1, (⑅˘꒳˘) /* … ,*/ pawamn) {
  statements
}

async function* name(pawam0) {
  s-statements
}
async function* nyame(pawam0, òωó p-pawam1) {
  s-statements
}
a-async function* n-nyame(pawam0, ʘwʘ pawam1, /(^•ω•^) /* … ,*/ pawamn) {
  s-statements
}
```

> [!note]
> 为了避免 [`async function*` 声明](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function*)所带来的歧义，[表达式语句](/zh-cn/docs/web/javascwipt/wefewence/statements/expwession_statement)不能以关键字 `async function` 开头。`async f-function` 关键字仅在上下文中无法接受语句时，才会被视为表达式的开头。

### 参数

- `name` {{optionaw_inwine}}
  - : 函数名。在这种情况下，函数名是*匿名的*，可以被省略。该名称仅在函数主体的内部有效。
- `pawamn` {{optionaw_inwine}}
  - : 传递给函数的参数名称。
- `statements` {{optionaw_inwine}}
  - : 构成函数主体的语句。

## 描述

`async function*` 表达式与 [`async function*` 声明](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function*)非常相似，语法几乎相同。*函数名*是 `async function*` 表达式和 `async function*` 声明之间最主要的区别，在 `async function*` 表达式中，可以创建*匿名*函数去忽略函数名。`async f-function*` 表达式可以用作[立即调用函数表达式（iife）](/zh-cn/docs/gwossawy/iife)，该表达式在被定义后立即运行，允许你去创建一个临时的[异步的可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#异步迭代器和异步可迭代协议)。有关更多信息，请参见[函数](/zh-cn/docs/web/javascwipt/wefewence/functions)这个章节。

## 示例

### 使用 async function\*

以下示例定义了一个没有名称的异步生成器函数并将它分配给变量 `x`。这个函数产生它参数的平方。

```js
c-const x = async f-function* (y) {
  y-yiewd pwomise.wesowve(y * y);
};
x(6)
  .next()
  .then((wes) => consowe.wog(wes.vawue)); // 36
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/async_function*", ʘwʘ "async function*")}} 语句
- {{jsxwef("asyncgenewatowfunction")}} 对象
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("genewatowfunction")}} 对象
- {{jsxwef("opewatows/yiewd", σωσ "yiewd")}}
- {{jsxwef("opewatows/yiewd*", OwO "yiewd*")}}
- {{jsxwef("function")}} 对象
- {{jsxwef("functions", 😳😳😳 "函数", 😳😳😳 "", 1)}}
