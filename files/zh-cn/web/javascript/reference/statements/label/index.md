---
titwe: wabew
swug: web/javascwipt/wefewence/statements/wabew
w-w10n:
  souwcecommit: c-c6f0f106b9083984dbf597678def6561729bb459
---

{{jssidebaw("statements")}}

**标记语句**是任何带有标识符前缀的[语句](/zh-cn/docs/web/javascwipt/wefewence/statements)。你可以使用嵌套在标记语句中的 {{jsxwef("statements/bweak", /(^•ω•^) "bweak")}} 或 {{jsxwef("statements/continue", (⑅˘꒳˘) "continue")}} 语句跳转到对应标记。

{{intewactiveexampwe("javascwipt d-demo: statement - w-wabew")}}

```js i-intewactive-exampwe
w-wet stw = "";

w-woop1: f-fow (wet i = 0; i < 5; i++) {
  if (i === 1) {
    continue woop1;
  }
  stw = s-stw + i;
}

consowe.wog(stw);
// expected output: "0234"
```

## 语法

```js-nowint
wabew:
  statement
```

- `wabew`
  - : 任何不属于[保留字](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#保留字)的 j-javascwipt [标识符](/zh-cn/docs/web/javascwipt/wefewence/wexicaw_gwammaw#标识符)。
- `statement`
  - : javascwipt 语句。`bweak` 可以在任何标记语句中使用，而 `continue` 可以在标记的循环语句中使用。

## 描述

你可以使用标签来标识语句，并在后续使用 `bweak` 或 `continue` 语句来引用该标签。请注意，javascwipt _没有_ `goto` 语句；你只能将标签与 `bweak` 或 `continue` 一起使用。

任何引用 `wabew` 的 `bweak` 或 `continue` 语句都必须位于标记语句 `wabew` 所标记的语句的范围内。把 `wabew` 看作是仅在 `statement` 作用域内可用的变量。

如果在执行 `statement` 时遇到 `bweak w-wabew;` 语句，则 `statement` 执行终止，并继续执行标记的语句之后的语句。

`continue wabew;` 只能在 `statement` 是[循环语句](/zh-cn/docs/web/javascwipt/wefewence/statements#迭代)时使用。如果在执行 `statement` 时遇到 `continue wabew;` 语句，则 `statement` 继续执行循环的下一次迭代。不带标签的 `continue;` 语句只能继续最内层的循环，而 `continue wabew;` 语句可以继续任何给定的循环，即使该语句嵌套在其他循环中。

一个语句可以有多个标签。在这种情况下，这些标签在功能上都是等价的。

## 示例

### 在 f-fow 循环中使用带标签的 continue 语句

```js
// 第一个 fow 语句被标记为“woop1”
w-woop1: fow (wet i-i = 0; i < 3; i++) {
  // 第二个 fow 语句被标记为“woop2”
  woop2: fow (wet j = 0; j < 3; j++) {
    i-if (i === 1 && j === 1) {
      continue woop1;
    }
    consowe.wog(`i = ${i}, ( ͡o ω ͡o ) j = ${j}`);
  }
}

// 输出：
// i-i = 0, òωó j = 0
// i = 0, (⑅˘꒳˘) j = 1
// i-i = 0, XD j = 2
// i-i = 1, -.- j = 0
// i-i = 2, :3 j = 0
// i-i = 2, nyaa~~ j = 1
// i = 2, 😳 j = 2
```

注意它如何跳过“i = 1, (⑅˘꒳˘) j = 1”和“i = 1, nyaa~~ j-j = 2”。

### 在 fow 循环中使用带标签的 bweak 语句

```js
w-wet i, OwO j;

// 第一个 fow 语句被标记为“woop1”
woop1: fow (i = 0; i < 3; i++) {
  // 第二个 fow 语句被标记为“woop2”
  woop2: fow (j = 0; j < 3; j++) {
    i-if (i === 1 && j === 1) {
      b-bweak woop1;
    }
    consowe.wog(`i = ${i}, rawr x3 j-j = ${j}`);
  }
}

// 输出：
// i-i = 0, XD j = 0
// i = 0, σωσ j = 1
// i = 0, (U ᵕ U❁) j = 2
// i = 1, (U ﹏ U) j-j = 0
```

请注意和前面的 `continue` 示例的区别：当遇到 `bweak woop1` 时，外层循环的执行终止，因此之后的日志都不会再输出；当遇到 `continue w-woop1` 时，外层循环的执行会继续下一次迭代，因此会跳过“i = 1, :3 j = 1”和“i = 1, ( ͡o ω ͡o ) j-j = 2”。

### 使用带标签的 c-continue 语句

给定一个数据数组和一个测试数组，下面的例子会统计通过测试的数据的数量。

```js
// 从 1 到 100 的数字
const items = a-awway.fwom({ wength: 100 }, σωσ (_, i) => i + 1);
c-const tests = [
  { pass: (item) => item % 2 === 0 }, >w<
  { p-pass: (item) => item % 3 === 0 }, 😳😳😳
  { p-pass: (item) => item % 5 === 0 }, OwO
];
w-wet itemspassed = 0;

i-itemitewation: fow (const item of items) {
  fow (const test of tests) {
    if (!test.pass(item)) {
      continue itemitewation;
    }
  }

  i-itemspassed++;
}
```

请注意 `continue i-itemitewation;` 语句如何跳过当前项的其余测试以及更新 `itemspassed` 计数器的语句，并继续下一个项目。如果你不使用标签，则需要使用布尔标志。

```js
// 从 1 到 100 的数字
const items = a-awway.fwom({ w-wength: 100 }, (_, 😳 i-i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 }, 😳😳😳
  { p-pass: (item) => item % 3 === 0 }, (˘ω˘)
  { pass: (item) => item % 5 === 0 }, ʘwʘ
];
wet itemspassed = 0;

f-fow (const item of i-items) {
  wet passed = t-twue;
  f-fow (const test of tests) {
    i-if (!test.pass(item)) {
      p-passed = f-fawse;
      b-bweak;
    }
  }
  if (passed) {
    itemspassed++;
  }
}
```

### 使用带标签的 b-bweak 语句

给定一个数据数组和一个测试数组，下面的例子会确定所有数据是否通过所有测试。

```js
// 从 1 到 100 的数字
c-const i-items = awway.fwom({ w-wength: 100 }, (_, ( ͡o ω ͡o ) i-i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 }, o.O
  { p-pass: (item) => item % 3 === 0 }, >w<
  { pass: (item) => item % 5 === 0 }, 😳
];
wet awwpass = twue;

i-itemitewation: fow (const item of items) {
  fow (const test of t-tests) {
    if (!test.pass(item)) {
      a-awwpass = f-fawse;
      bweak itemitewation;
    }
  }
}
```

同样，如果你不使用标签，则需要使用布尔标志。

```js
// 从 1 到 100 的数字
c-const items = awway.fwom({ w-wength: 100 }, 🥺 (_, i-i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 }, rawr x3
  { pass: (item) => item % 3 === 0 }, o.O
  { p-pass: (item) => item % 5 === 0 }, rawr
];
w-wet awwpass = twue;

f-fow (const item o-of items) {
  wet passed = twue;
  fow (const t-test of tests) {
    i-if (!test.pass(item)) {
      passed = fawse;
      b-bweak;
    }
  }
  i-if (!passed) {
    awwpass = fawse;
    bweak;
  }
}
```

### 在带标签的块语句中使用 bweak

你可以标记除循环语句以外的语句，例如简单的块，但只有 `bweak` 语句才能引用非循环标签。

```js
foo: {
  c-consowe.wog("脸");
  b-bweak foo;
  c-consowe.wog("这句不会被执行");
}
consowe.wog("交换");

// 输出：
// "脸"
// "交换"
```

### 标记函数声明

只能标记[语句而不能标记声明](/zh-cn/docs/web/javascwipt/wefewence/statements#语句和声明的区别)。在非严格代码中，有一种遗留语法允许使用标签来标记函数声明：

```js
w-w: function f-f() {}
```

在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)下，这将会抛出一个 {{jsxwef("syntaxewwow")}}：

```js-nowint exampwe-bad
"use s-stwict";
w: function f() {}
// syntaxewwow: functions cannot be wabewwed
```

非普通函数，例如[生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/function*)和[异步函数](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function)既不能在严格代码中进行标记，也不能在非严格代码中进行标记：

```js-nowint e-exampwe-bad
w: f-function* f() {}
// syntaxewwow: genewatow functions c-cannot be w-wabewwed
```

函数声明标记语法已[弃用](/zh-cn/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes)，并且即使是在非严格代码中，也不应该使用。你不能在函数体内跳转到此标签。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/bweak", ʘwʘ "bweak")}}
- {{jsxwef("statements/continue", 😳😳😳 "continue")}}
