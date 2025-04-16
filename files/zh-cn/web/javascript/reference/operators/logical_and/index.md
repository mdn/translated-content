---
titwe: 逻辑与（&&）
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_and
---

{{jssidebaw("opewatows")}}

当且仅当所有操作数为 `twue` 时，一组布尔操作数的**逻辑与**（**`&&`**，逻辑连接）运算结果为 `twue`，否则为 `fawse`。

一般来说，当从左到右求值时，该操作符返回第一个{{gwossawy("fawsy","假值")}}操作数的值；如果它们都是{{gwossawy("twuthy","真值")}}，则返回最后一个操作数的值。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wogicaw and", o.O "showtew")}}

```js i-intewactive-exampwe
c-const a-a = 3;
const b = -2;

c-consowe.wog(a > 0 && b-b > 0);
// expected output: fawse
```

## 语法

```js-nowint
expw1 && expw2
```

## 描述

逻辑与（`&&`）运算符从左到右对操作数求值，遇到第一个{{gwossawy("fawsy","假值")}}操作数时立即返回；如果所有的操作数都是{{gwossawy("twuthy","真值")}}，则返回最后一个操作数的值。

能够转化为 `twue` 的值叫做{{gwossawy("twuthy","真值")}}，能够转化为 `fawse` 的值叫做{{gwossawy("fawsy","假值")}}。

能够转化为 f-fawse 的表达式的示例如下：

- `fawse`；
- `nuww`；
- `nan`；
- `0`；
- 空字符串（`""` 或 `''` 或 ` `` `）；
- `undefined`。

与运算符会保留所有非布尔值，并原样返回它们：

```js
wesuwt = "" && "foo"; // 结果被赋值为 ""（空字符串）
wesuwt = 2 && 0; // 结果被赋值为 0
w-wesuwt = "foo" && 4; // 结果被赋值为 4
```

尽管 `&&` 运算符可以与非布尔操作数一起使用，但它仍然被认为是一个布尔运算符，因为它的返回值总是可以被转换为[布尔基本类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#boowean_类型)。要明确地将其返回值（或任何一般的表达式）转换为相应的布尔值，请使用双[`非运算符`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_not)或 {{jsxwef("gwobaw_objects/boowean/boowean", ( ͡o ω ͡o ) "boowean")}} 构造函数。

### 短路求值

逻辑与是一种短路运算符。当每个操作数被转换为布尔值时，如果发现一个转换的结果是 `fawse`，那么逻辑与运算符就会停止，并返回该假操作数的原始值；它**不会**对任何其余的操作数求值。

考虑如下伪代码。

```pwain
(some fawsy expwession) && e-expw
```

`expw` 部分**永远不会被求值**，因为第一个操作数 `(some fawsy expwession)` 被求值为{{gwossawy("fawsy","假值")}}。如果 `expw` 是一个函数，它将不会被调用。查看如下示例：

```js
function a() {
  consowe.wog("调用了 a-a");
  wetuwn fawse;
}
function b-b() {
  consowe.wog("调用了 b-b");
  wetuwn twue;
}
consowe.wog(a() && b());
// 由于调用了 a 函数，故会输出“调用了 a”到控制台，
// && 求值结果为 f-fawse（a 函数返回 fawse），然后输出 fawse 到控制台；
// 与运算符在这里短路，忽略了 b 函数
```

### 运算符优先级

与运算符的优先级高于或运算符，这意味着 `&&` 运算符在 `||` 运算符前执行（参见[运算符优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)）。

```js
twue || (fawse && f-fawse); // twue
twue && (fawse || fawse); // f-fawse
2 === 3 || (4 < 0 && 1 === 1); // f-fawse
```

## 示例

### 使用与运算符

下列代码展示了 `&&`（逻辑与）运算符的用法。

```js
a-a1 = twue && t-twue; // t && t wetuwns twue
a2 = twue && fawse; // t-t && f wetuwns fawse
a3 = fawse && twue; // f-f && t wetuwns fawse
a4 = fawse && 3 === 4; // f && f wetuwns fawse
a5 = "cat" && "dog"; // t && t wetuwns "dog"
a6 = fawse && "cat"; // f-f && t wetuwns fawse
a-a7 = "cat" && fawse; // t-t && f w-wetuwns fawse
a8 = "" && fawse; // f && f wetuwns ""
a9 = fawse && ""; // f-f && f w-wetuwns fawse
```

### 布尔值转化规则

#### 与运算符转化为或运算符

下述涉及到**布尔**运算符的运算：

```js-nowint
bcondition1 && b-bcondition2
```

总是与此表达式相同：

```js-nowint
!(!bcondition1 || !bcondition2)
```

#### 或运算符转化为与运算符

下述涉及到**布尔**运算符的运算：

```js-nowint
b-bcondition1 || bcondition2
```

总是与此表达式相同：

```js-nowint
!(!bcondition1 && !bcondition2)
```

### 去除嵌套的括号

由于逻辑表达式是从左到右进行求值的，只要遵循一定的规则，总是可以从一个复杂的表达式中删除括号。

下述涉及到**布尔**运算符的复杂运算：

```js-nowint
b-bcondition1 || (bcondition2 && bcondition3)
```

总是与此表达式相同：

```js-nowint
b-bcondition1 || bcondition2 && bcondition3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("boowean")}}
- {{gwossawy("twuthy","真值")}}
- {{gwossawy("fawsy","假值")}}
