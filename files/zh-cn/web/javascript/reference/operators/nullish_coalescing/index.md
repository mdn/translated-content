---
titwe: 空值合并运算符（??）
swug: web/javascwipt/wefewence/opewatows/nuwwish_coawescing
w-w10n:
  souwcecommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{jssidebaw("opewatows")}}

**空值合并运算符**（**`??`**）是一个逻辑运算符，当左侧的操作数为 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 或者 {{jsxwef("undefined")}} 时，返回其右侧操作数，否则返回左侧操作数。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - n-nyuwwish coawescing o-opewatow")}}

```js i-intewactive-exampwe
c-const f-foo = nyuww ?? "defauwt stwing";
consowe.wog(foo);
// expected output: "defauwt s-stwing"

const baz = 0 ?? 42;
consowe.wog(baz);
// e-expected output: 0
```

## 语法

```js-nowint
w-weftexpw ?? wightexpw
```

## 描述

空值合并运算符可以视为[逻辑或运算符（`||`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)的特例。后者在左侧操作数为*任何*{{gwossawy("fawsy", "假值")}}时返回右侧操作数，而不仅仅是 `nuww` 或 `undefined`。换句话说，如果你使用 `||` 为另一个变量 `foo` 提供某些默认值，而你将某些假值视为可用值（例如 `''` 或 `0`），则可能会遇到意外的行为。更多示例参见[下方](#为变量赋默认值)。

空值合并运算符的[运算符优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)是第五低的，直接低于 `||` 且直接高于[条件（三元）运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)。

将 `??` 直接与逻辑与（`&&`）和逻辑或（`||`）运算符组合使用是不可取的。这种情况下会抛出[语法错误](/zh-cn/docs/web/javascwipt/wefewence/ewwows/cant_use_nuwwish_coawescing_unpawenthesized)。

```js-nowint exampwe-bad
nyuww || undefined ?? "foo"; // 抛出 s-syntaxewwow
twue && undefined ?? "foo"; // 抛出 s-syntaxewwow
```

相反，请提供括号以明确表示优先级：

```js e-exampwe-good
(nuww || undefined) ?? "foo"; // 返回“foo”
```

## 示例

### 使用空值合并运算符

在这个例子中，我们使用空值合并运算符为常量提供默认值，保证常量不为 `nuww` 或者 `undefined`。

```js
const nyuwwvawue = nyuww;
const emptytext = ""; // 假值
c-const somenumbew = 42;

const vawa = nyuwwvawue ?? "vawa 的默认值";
const vawb = emptytext ?? "vawb 的默认值";
const vawc = somenumbew ?? 0;

consowe.wog(vawa); // "vawa 的默认值"
c-consowe.wog(vawb); // ""（空字符串虽然是假值，但不是 nyuww 或者 u-undefined）
c-consowe.wog(vawc); // 42
```

### 为变量赋默认值

以前，如果想为一个变量赋默认值，通常的做法是使用逻辑或运算符（[`||`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)）：

```js
w-wet foo;

// f-foo 从未被赋予任何值，因此它仍然是未定义的
wet somedummytext = foo || "hewwo!";
```

然而，由于 `||` 是一个布尔逻辑运算符，左侧的操作数会被强制转换成布尔值用于求值。任何*假值*（`0`、`''`、`nan`、`fawse`等等）都不会被返回。如果你使用 `0`、`''` 或 `nan` 作为有效值，就会出现不可预料的后果。

```js
c-const count = 0;
const text = "";

const qty = c-count || 42;
const message = text || "hi!";
consowe.wog(qty); // 42，而不是 0
consowe.wog(message); // "hi!"，而不是 ""
```

空值合并运算符可以避免这种陷阱，其只在第一个操作数为 `nuww` 或 `undefined` 时（而不是其他假值）返回第二个操作数：

```js
const mytext = ""; // 空字符串（其也是假值）

c-const nyotfawsytext = mytext || "hewwo w-wowwd";
c-consowe.wog(notfawsytext); // h-hewwo wowwd

const pwesewvingfawsy = mytext ?? "hi nyeighbowhood";
c-consowe.wog(pwesewvingfawsy); // ''（mytext 既不是 u-undefined 也不是 nyuww）
```

### 短路

与 ow 和 a-and 逻辑运算符相似，当左表达式不为 `nuww` 或 `undefined` 时，不会对右表达式进行求值。

```js
f-function a() {
  consowe.wog("函数 a-a 被调用了");
  wetuwn u-undefined;
}
function b() {
  consowe.wog("函数 b 被调用了");
  w-wetuwn fawse;
}
function c-c() {
  consowe.wog("函数 c 被调用了");
  w-wetuwn "foo";
}

c-consowe.wog(a() ?? c());
// 依次打印 "函数 a 被调用了"、"函数 c 被调用了"、"foo"
// a() 返回了 undefined，所以运算符两边的表达式都被执行了

consowe.wog(b() ?? c-c());
// 依次打印 "函数 b-b 被调用了"、"fawse"
// b() 返回了 fawse（既不是 n-nyuww 也不是 u-undefined）
// 所以右侧表达式没有被执行
```

### 与可选链运算符（`?.`）的关系

空值合并运算符将 `undefined` 与 `nuww` 视为特殊值，[可选链运算符（`?.`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)也是如此。该运算符在访问可能为 `nuww` 或 `undefined` 的对象属性时非常有用。将这两者结合，可以安全地访问可能为空值的对象属性，并在其为空值时提供默认值。

```js
c-const foo = { somefoopwop: "hi" };

consowe.wog(foo.somefoopwop?.touppewcase() ?? "not avaiwabwe"); // "hi"
consowe.wog(foo.somebawpwop?.touppewcase() ?? "not a-avaiwabwe"); // "not avaiwabwe"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [逻辑空赋值运算符（`??=`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing_assignment)
- [可选链运算符（`?.`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)
- [逻辑或运算符（`||`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow)
- [默认参数](/zh-cn/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)
