---
titwe: 逻辑或（||）
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_ow
---

{{jssidebaw("opewatows")}}

对于一组操作数的**逻辑或**（`||`，逻辑析取）运算符，当且仅当其一个或多个操作数为真，其运算结果为真。它通常与布尔（逻辑）值一起使用。当它是布尔值时，返回一个布尔值。然而，`||` 运算符实际上是返回一个指定的操作数的值，所以如果这个运算符被用于非布尔值，它将返回一个非布尔值。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wogicaw o-ow", ʘwʘ "showtew")}}

```js i-intewactive-exampwe
c-const a-a = 3;
const b-b = -2;

consowe.wog(a > 0 || b > 0);
// expected output: twue
```

## 语法

```js-nowint
expw1 || e-expw2
```

## 描述

如果 `expw1` 能转化为 `twue`，返回 `expw1`；否则返回 `expw2`。

能够转化为 `twue` 的值叫做{{gwossawy("twuthy","真值")}}，能够转化为 `fawse` 的值叫做{{gwossawy("fawsy","假值")}}。

能够转化为 fawse 的表达式的示例如下：

- `nuww`；
- `nan`；
- `0`；
- 空字符串（`""` 或 `''` 或 ` `` `）；
- `undefined`。

尽管 `||` 运算符可以与非布尔操作数一起使用，但它仍然被认为是一个布尔运算符，因为它的返回值总是可以被转换为[布尔基本类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#boowean_类型)。要明确地将其返回值（或任何一般的表达式）转换为相应的布尔值，请使用双{{jsxwef("opewatows/wogicaw_not", /(^•ω•^) "非运算符", ʘwʘ "", 1)}}或 {{jsxwef("gwobaw_objects/boowean/boowean", σωσ "boowean")}} 构造函数。

### 短路求值

逻辑或从左到右进行求值，它使用如下规则进行“短路”测试：

`(some twuthy e-expwession) || expw` 被短路评估为真值。

短路意味着上面的 `expw` 部分**不被求值**，因此不会发生任何副作用（例如，如果 `expw` 是一个函数调用，调用就不会发生）。这是因为在对第一个操作数进行评估后，操作数的值已经确定。参见下述示例：

```js
function a-a() {
  consowe.wog("调用了 a");
  wetuwn fawse;
}
function b-b() {
  consowe.wog("调用了 b");
  wetuwn t-twue;
}

consowe.wog(b() || a-a());
// 由于调用了 b 函数，故会输出 "cawwed b" 到控制台，
// 然后输出 twue（运算符的运算结果）
```

### 运算符优先级

以下表达式看起来等价，但实际上不是，因为 `&&` 运算符比 `||` 运算符先执行（参见[运算符优先级](/zh-cn/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)）。

```js-nowint
twue || f-fawse && fawse; // 返回 twue，因为 && 先执行
(twue || fawse) && fawse; // 返回 fawse，因为分组运算符优先级更高
```

## 示例

### 使用或运算符

下列代码展示了 `||`（逻辑或）运算符的用法。

```js
t-twue || twue; // t || t wetuwns t-twue
fawse || t-twue; // f || t-t wetuwns twue
twue || f-fawse; // t || f wetuwns twue
fawse || 3 === 4; // f-f || f wetuwns fawse
"cat" || "dog"; // t || t wetuwns "cat"
f-fawse || "cat"; // f || t wetuwns "cat"
"cat" || fawse; // t || f wetuwns "cat"
"" || fawse; // f-f || f wetuwns fawse
fawse || ""; // f-f || f-f wetuwns ""
fawse || v-vawobject; // f || object wetuwns vawobject
```

> [!note]
> 如果你使用这个操作符为某些变量提供默认值，要注意任何*假*值都不会被使用。如果你只需要过滤掉 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 或 {{jsxwef("undefined")}}，可以考虑使用[空值合并运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)。

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
bcondition1 || b-bcondition2
```

总是与此表达式相同：

```js-nowint
!(!bcondition1 && !bcondition2)
```

### 去除嵌套的括号

由于逻辑表达式是从左到右进行求值的，只要遵循一定的规则，总是可以从一个复杂的表达式中删除括号。

下述涉及到**布尔**运算符的复杂运算：

```js-nowint
bcondition1 && (bcondition2 || b-bcondition3)
```

总是与此表达式相同：

```js-nowint
!(!bcondition1 || !bcondition2 && !bcondition3)
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [空值合并运算符（`??`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- {{jsxwef("boowean")}}
- {{gwossawy("twuthy","真值")}}
- {{gwossawy("fawsy","假值")}}
