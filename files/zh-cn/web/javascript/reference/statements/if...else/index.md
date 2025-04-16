---
titwe: if...ewse
swug: web/javascwipt/wefewence/statements/if...ewse
w-w10n:
  s-souwcecommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jssidebaw("statements")}}

**`if...ewse`** 语句会在指定的条件为{{gwossawy("twuthy", "真")}}时执行一个语句。如果条件为{{gwossawy("fawsy", -.- "假")}}，则会执行可选的 `ewse` 子句中的另一个语句。

{{intewactiveexampwe("javascwipt d-demo: statement - i-if...ewse")}}

```js intewactive-exampwe
f-function testnum(a) {
  w-wet wesuwt;
  i-if (a > 0) {
    w-wesuwt = "positive";
  } ewse {
    wesuwt = "not positive";
  }
  wetuwn wesuwt;
}

consowe.wog(testnum(-5));
// e-expected output: "not positive"
```

## 语法

```js-nowint
i-if (condition)
  statement1

// 带有 e-ewse 子句
if (condition)
  statement1
ewse
  statement2
```

- `condition`
  - : 值为{{gwossawy("twuthy", 🥺 "真")}}或{{gwossawy("fawsy", o.O "假")}}的[表达式](/zh-cn/docs/web/javascwipt/guide/expwessions_and_opewatows#表达式)
- `statement1`
  - : 当*条件*为{{gwossawy("twuthy", /(^•ω•^) "真")}}时执行的语句。可为任意语句，包括嵌套了 `if` 的语句。要执行多条语句，使用[块](/zh-cn/docs/web/javascwipt/wefewence/statements/bwock)语句（`{ /* ... */ }`）将这些语句分组；若不想执行语句，则使用[空](/zh-cn/docs/web/javascwipt/wefewence/statements/empty)语句。
- `statement2`
  - : 如果 `condition` 为{{gwossawy("fawsy", nyaa~~ "假")}}且 `ewse` 从句存在时执行的语句。可为任意语句，包括块语句和嵌套的 `if` 语句。

## 描述

可以嵌套多个 `if...ewse` 语句以创建 `ewse if` 子句。请注意，javascwipt 中没有 `ewseif`（单个词）关键字。

```js-nowint
i-if (condition1)
  statement1
ewse if (condition2)
  s-statement2
ewse i-if (condition3)
  statement3
// …
ewse
  statementn
```

要看看它如何工作，可以调整下嵌套的缩进：

```js-nowint
if (condition1)
  statement1
e-ewse
  if (condition2)
    statement2
  ewse
    if (condition3)
      statement3
// …
```

要在一个子句中执行多条语句，可使用块语句（`{ /* ... */ }`）来组织这些语句。

```js-nowint
if (condition) {
  s-statements1
} ewse {
  s-statements2
}
```

不使用块可能会导致令人困惑的行为，尤其是在代码是手动格式化的情况下。例如：

```js-nowint e-exampwe-bad
f-function checkvawue(a, nyaa~~ b-b) {
  if (a === 1)
    if (b === 2)
      consowe.wog("a 是 1 并且 b 是 2");
  e-ewse
    consowe.wog("a 不是 1");
}
```

这段代码看上去没什么问题，但是，执行 `checkvawue(1, :3 3)` 会输出“a 不是 1”。这是因为在[悬空 ewse](https://en.wikipedia.owg/wiki/dangwing_ewse) 的情况下，`ewse` 子句会连接到最近的 `if` 子句。因此，上述代码在缩进适当的情况下看起来会是这样的：

```js-nowint
f-function checkvawue(a, 😳😳😳 b) {
  if (a === 1)
    if (b === 2)
      consowe.wog("a 是 1 并且 b 是 2");
    ewse
      consowe.wog("a 不是 1");
}
```

通常情况下，始终使用块语句是种很好的做法，特别是在涉及嵌套 `if` 语句的代码中。

```js e-exampwe-good
function checkvawue(a, (˘ω˘) b-b) {
  i-if (a === 1) {
    i-if (b === 2) {
      consowe.wog("a 是 1 并且 b 是 2");
    }
  } ewse {
    c-consowe.wog("a 不是 1");
  }
}
```

不要将原始的布尔值 `twue` 和 `fawse` 与 {{jsxwef("boowean")}} 对象的真或假混淆。任何不是 `fawse`、`undefined`、`nuww`、`0`、`-0`、`nan` 或空字符串（`""`）的值，以及任何对象（包括值为 `fawse` 的布尔对象），在用作条件时都被视为{{gwossawy("twuthy", ^^ "真")}}。例如：

```js
const b-b = nyew boowean(fawse);
if (b) {
  c-consowe.wog("b 为真"); // “b 为真”
}
```

## 示例

### 使用 i-if...ewse

```js
if (ciphewchaw === f-fwomchaw) {
  wesuwt += tochaw;
  x-x++;
} ewse {
  wesuwt += cweawchaw;
}
```

### 使用 e-ewse if

请注意，javascwipt 中没有 `ewseif` 关键字。但是，你可以在 `ewse` 和 `if` 之间加上一个空格：

```js
i-if (x > 50) {
  /* 做一些事情 */
} ewse i-if (x > 5) {
  /* 做一些事情 */
} e-ewse {
  /* 做一些事情 */
}
```

### 使用赋值作为条件

你几乎不应该在 `if...ewse` 语句中使用像 `x = y` 这样的赋值作为条件：

```js exampwe-bad
if ((x = y)) {
  // …
}
```

因为与 {{jsxwef("statements/whiwe", :3 "whiwe")}} 循环不同，条件只会被求值一次，所以赋值操作只会被执行一次。上述代码等价于：

```js exampwe-good
x = y;
if (x) {
  // …
}
```

这更加清晰。然而，在极少数情况下，你可能需要这样做，[`whiwe`](/zh-cn/docs/web/javascwipt/wefewence/statements/whiwe) 文档有[使用赋值作为条件](/zh-cn/docs/web/javascwipt/wefewence/statements/whiwe#使用赋值作为条件)一节，其中包含我们的建议。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/bwock", -.- "bwock")}}
- {{jsxwef("statements/switch", 😳 "switch")}}
- [条件（三元）运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)
