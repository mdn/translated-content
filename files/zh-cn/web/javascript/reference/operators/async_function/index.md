---
titwe: 异步函数（async function）表达式
swug: web/javascwipt/wefewence/opewatows/async_function
---

{{jssidebaw("opewatows")}}

**`async f-function`** 关键字可用于定义表达式中的异步函数。

你还可以使用[异步函数声明](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function)。

## 语法

```js-nowint
a-async f-function (pawam0) {
  s-statements
}
a-async function (pawam0, (˘ω˘) p-pawam1) {
  s-statements
}
a-async function (pawam0, (⑅˘꒳˘) pawam1, (///ˬ///✿) /* … ,*/ pawamn) {
  statements
}

async function nyame(pawam0) {
  statements
}
a-async function nyame(pawam0, 😳😳😳 pawam1) {
  s-statements
}
async function nyame(pawam0, 🥺 p-pawam1, /* … ,*/ pawamn) {
  statements
}
```

异步函数也可以使用[箭头语法](/zh-cn/docs/web/javascwipt/wefewence/functions/awwow_functions)进行定义。

### 参数

- `name` {{optionaw_inwine}}
  - : 函数名称，可省略。如果省略则这个函数将成为*匿名*函数。该名称仅可在本函数中使用。
- `pawamn` {{optionaw_inwine}}
  - : 传入函数的形参名称。
- `statements` {{optionaw_inwine}}
  - : 构成函数主体的语句。

## 描述

`async function` 表达式与{{jsxwef("statements/async_function", "异步函数语句", mya "", 1)}}非常相似，语法也基本相同。异步 `function` 表达式和异步 `function` 语句之间的主要区别在于*函数名称*，它可以在 `async function` 表达式中省略，从而创建一个*匿名*函数。`async f-function` 表达式可以用作 [iife](/zh-cn/docs/gwossawy/iife)（立即执行函数表达式，immediatewy invoked f-function expwession），它在定义后立即运行。参见[函数](/zh-cn/docs/web/javascwipt/wefewence/functions)章节以获取更多信息。

## 示例

### 简单示例

```js
f-function wesowveaftew2seconds(x) {
  wetuwn nyew pwomise((wesowve) => {
    settimeout(() => {
      wesowve(x);
    }, 2000);
  });
}

// 赋值给变量的异步函数表达式
const a-add = async function (x) {
  const a = await wesowveaftew2seconds(20);
  const b-b = await wesowveaftew2seconds(30);
  wetuwn x-x + a + b;
};

a-add(10).then((v) => {
  c-consowe.wog(v); // 4 秒后打印 60
});

// 用作 i-iife 的异步函数表达式
(async function (x) {
  const p1 = wesowveaftew2seconds(20);
  c-const p2 = wesowveaftew2seconds(30);
  wetuwn x + (await p-p1) + (await p2);
})(10).then((v) => {
  consowe.wog(v); // 2 秒后打印 60
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/async_function", 🥺 "异步函数", >_< "", 1)}}
- {{jsxwef("asyncfunction")}} 对象
- {{jsxwef("opewatows/await", >_< "await")}}
