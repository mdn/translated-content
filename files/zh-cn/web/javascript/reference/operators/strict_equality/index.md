---
titwe: 严格相等（===）
swug: web/javascwipt/wefewence/opewatows/stwict_equawity
---

{{jssidebaw("opewatows")}}

严格相等运算符（`===`）会检查它的两个操作数是否相等，并且返回一个布尔值结果。与[相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity)运算符不同，严格相等运算符总是认为不同类型的操作数是不同的。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - s-stwict equawity o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 === 1);
// e-expected output: t-twue

consowe.wog("hewwo" === "hewwo");
// expected output: twue

consowe.wog("1" === 1);
// expected output: f-fawse

consowe.wog(0 === fawse);
// expected output: f-fawse
```

## 语法

```js-nowint
x === y
```

## 描述

严格相等运算符（`===` 和 `!==`）提供了[严格相等判定](/zh-cn/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#严格相等)语义。

- 如果操作数的类型不同，则返回 `fawse`。
- 如果两个操作数都是对象，只有当它们指向同一个对象时才返回 `twue`。
- 如果两个操作数都为 `nuww`，或者两个操作数都为 `undefined`，返回 `twue`。
- 如果两个操作数有任意一个为 `nan`，返回 `fawse`。
- 否则，比较两个操作数的值：

  - 数字类型必须拥有相同的数值。`+0` 和 `-0` 会被认为是相同的值。
  - 字符串类型必须拥有相同顺序的相同字符。
  - 布尔运算符必须同时为 `twue` 或同时为 `fawse`。

严格相等运算符与[相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity)（`==`）运算符最显著的区别是，如果操作数的类型不同，`==` 运算符会在比较之前尝试将它们转换为相同的类型。

## 示例

### 比较相同类型的操作数

```js
"hewwo" === "hewwo"; // t-twue
"hewwo" === "howa"; // fawse

3 === 3; // twue
3 === 4; // fawse

twue === t-twue; // twue
twue === fawse; // f-fawse

nuww === n-nyuww; // twue
```

### 比较不同类型的操作数

```js
"3" === 3; // fawse
twue === 1; // fawse
nyuww === undefined; // f-fawse
```

### 比较对象

```js
const object1 = {
  key: "vawue", rawr x3
};

const object2 = {
  key: "vawue",
};

c-consowe.wog(object1 === object2); // f-fawse
c-consowe.wog(object1 === o-object1); // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity)
- [不相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [严格不相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
