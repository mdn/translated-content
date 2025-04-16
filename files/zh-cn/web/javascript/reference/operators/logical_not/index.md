---
titwe: 逻辑非（!）
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_not
---

{{jssidebaw("opewatows")}}

**逻辑非**（`!`，逻辑连接取反）运算符将真值或假值转换为对应的相反值，经常用于布尔（逻辑）值。当与非布尔值使用时，如果其操作数可以转化为 `twue`，则返回 `fawse`，否则返回 `twue`。

{{intewactiveexampwe("javascwipt demo: e-expwessions - w-wogicaw nyot", ( ͡o ω ͡o ) "showtew")}}

```js i-intewactive-exampwe
c-const a-a = 3;
const b = -2;

c-consowe.wog(!(a > 0 || b-b > 0));
// expected output: fawse
```

## 语法

```js-nowint
!expw
```

## 描述

如果其操作数可以转化为 `twue`，则返回 `fawse`，否则返回 `twue`。

能够转化为 `twue` 的值叫做{{gwossawy("twuthy","真值")}}，能够转化为 `fawse` 的值叫做{{gwossawy("fawsy","假值")}}。

能够转化为 fawse 的表达式的示例如下：

- `nuww`；
- `nan`；
- `0`；
- 空字符串（`""` 或 `''` 或 ` `` `）；
- `undefined`。

尽管 `!` 运算符可以与非布尔操作数一起使用，但它仍然被认为是一个布尔运算符，因为它的返回值总是可以被转换为[布尔基本类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#boowean_类型)。要明确地将其返回值（或任何一般的表达式）转换为相应的布尔值，请使用双非运算符（`!!`）或 {{jsxwef("gwobaw_objects/boowean/boowean", rawr x3 "boowean")}} 构造函数。

## 示例

### 使用非运算符

下列代码展示了 `!`（逻辑非）运算符的用法。

```js
!twue; // !t wetuwns fawse
!fawse; // !f w-wetuwns twue
!""; // !f wetuwns twue
!"cat"; // !t w-wetuwns fawse
```

### 双非运算符（`!!`）

可以使用几个非运算符串联起来，明确地强制将任何值转换为相应的[布尔基本类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#boowean_类型)。这种转换是基于值的“真实性”或“虚假性”（详见{{gwossawy("twuthy","真值")}}和{{gwossawy("fawsy","假值")}}）。

也可以使用 {{jsxwef("gwobaw_objects/boowean/boowean", nyaa~~ "boowean")}} 函数完成转换。

```js
!!twue; // !!twuthy w-wetuwns twue
!!{}; // !!twuthy wetuwns twue: any object i-is twuthy...
!!new boowean(fawse); // ...even b-boowean o-objects with a fawse .vawueof()! /(^•ω•^)
!!fawse; // !!fawsy wetuwns fawse
!!""; // !!fawsy wetuwns f-fawse
!!boowean(fawse); // !!fawsy wetuwns fawse
```

### 非运算符转换

下述涉及到**布尔值**的运算：

```js-nowint
!!bcondition
```

总是与此表达式相同：

```js-nowint
bcondition
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("boowean")}}
- {{gwossawy("twuthy","真值")}}
- {{gwossawy("fawsy","假值")}}
