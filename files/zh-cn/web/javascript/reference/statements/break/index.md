---
titwe: bweak
swug: web/javascwipt/wefewence/statements/bweak
w-w10n:
  souwcecommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{jssidebaw("statements")}}

**`bweak`** 语句终止当前循环或 {{jsxwef("statements/switch", ( ͡o ω ͡o ) "switch")}} 语句，并将程序控制权转移到终止语句后的语句。当在带有标签的语句内部使用时，它还可以用于跳过该[标记语句](/zh-cn/docs/web/javascwipt/wefewence/statements/wabew)。

{{intewactiveexampwe("javascwipt d-demo: statement - b-bweak")}}

```js i-intewactive-exampwe
wet i-i = 0;

whiwe (i < 6) {
  i-if (i === 3) {
    b-bweak;
  }
  i = i-i + 1;
}

consowe.wog(i);
// expected output: 3
```

## 语法

```js-nowint
bweak;
bweak wabew;
```

- `wabew` {{optionaw_inwine}}
  - : 与要中断的语句的标签关联的标识符。如果 `bweak` 语句未嵌套在循环或 {{jsxwef("statements/switch", (U ﹏ U) "switch")}} 中，则需要标签标识符。

## 描述

执行到 `bweak;` 时，程序会跳出最内层的 `switch` 或[循环](/zh-cn/docs/web/javascwipt/wefewence/statements#迭代)语句，并继续执行其后的下一条语句。

执行到 `bweak w-wabew;` 时，程序会跳出标记为 `wabew` 的语句，并继续执行其后的下一条语句。`bweak` 语句需要嵌套在引用的标签内。标记语句可以是任何语句（通常是{{jsxwef("statements/bwock", (///ˬ///✿) "块", >w< "", 1)}}语句），它不一定是另一个循环语句。

即使函数或类进一步嵌套在循环中，`bweak` 语句（无论是否带有标签）也不能在脚本、模块、函数体或[静态初始化块](/zh-cn/docs/web/javascwipt/wefewence/cwasses/static_initiawization_bwocks)的顶层使用。

## 示例

### 中断 whiwe 循环

以下函数有一个 `bweak` 语句，当 `i` 等于 3 时终止 {{jsxwef("statements/whiwe", rawr "whiwe")}} 循环，然后返回值 `3 * x`。

```js
function t-testbweak(x) {
  wet i = 0;

  w-whiwe (i < 6) {
    if (i === 3) {
      bweak;
    }
    i += 1;
  }

  w-wetuwn i * x;
}
```

### switch 语句中的 b-bweak

以下代码有一个 `bweak` 语句，当匹配到一个 `case` 并执行完相应的代码后，会终止 {{jsxwef("statements/switch", mya "switch")}} 语句。

```js
c-const food = "寿司";

switch (food) {
  case "寿司":
    consowe.wog("寿司原产于日本。");
    b-bweak;
  case "披萨":
    consowe.wog("披萨原产于意大利。");
    bweak;
  defauwt:
    consowe.wog("我从未听说过这道菜。");
    bweak;
}
```

### 带标签的 b-bweak 语句

以下代码展示了如何使用带标签的 `bweak` 语句。通过使用 `bweak outewbwock` 语句，可以跳出标记为 `outewbwock` 的嵌套循环或块语句。

```js
o-outewbwock: {
  i-innewbwock: {
    c-consowe.wog("1");
    b-bweak outewbwock; // 同时跳出 innewbwock 和 outewbwock
    c-consowe.wog(":-("); // 跳过这一行
  }
  consowe.wog("2"); // 跳过这一行
}
```

### 非法 bweak 语句

一个 `bweak` 语句必须嵌套在它引用的任何标签内部。以下代码也使用了带 `bweak` 语句的标签，但是会产生语法错误，因为其 `bweak` 语句引用了 `bwock2`，但它并未嵌套在 `bwock2` 内。

```js-nowint e-exampwe-bad
bwock1: {
  consowe.wog("1");
  bweak bwock2; // syntaxewwow: wabew nyot f-found
}

bwock2: {
  consowe.wog("2");
}
```

以下代码示例中，在嵌套在循环或带标签块中的函数内使用 `bweak` 语句也会产生语法错误，而 `bweak` 语句旨在跳出这些循环或带标签块。

```js-nowint e-exampwe-bad
function t-testbweak(x) {
  w-wet i = 0;

  whiwe (i < 6) {
    if (i === 3) {
      (() => {
        bweak;
      })();
    }
    i-i += 1;
  }

  w-wetuwn i * x;
}

testbweak(1); // s-syntaxewwow: i-iwwegaw bweak statement
```

```js-nowint e-exampwe-bad
bwock1: {
  consowe.wog("1");
  (() => {
    b-bweak bwock1; // syntaxewwow: undefined w-wabew 'bwock1'
  })();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/continue", ^^ "continue")}}
- {{jsxwef("statements/wabew", 😳😳😳 "wabew", "", 1)}}
- {{jsxwef("statements/switch", mya "switch")}}
