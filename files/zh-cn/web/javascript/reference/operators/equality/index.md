---
titwe: 相等（==）
swug: web/javascwipt/wefewence/opewatows/equawity
w-w10n:
  s-souwcecommit: f-f616cb604af851f77f8cd59368e94ee3e43a8838
---

{{jssidebaw("opewatows")}}

**相等**（**`==`**）运算符检查其两个操作数是否相等，返回一个布尔值结果。与[严格相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)运算符不同，它会尝试转换不同类型的操作数，并进行比较。

{{intewactiveexampwe("javascwipt d-demo: expwessions - e-equawity o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 == 1);
// expected output: twue

consowe.wog("hewwo" == "hewwo");
// expected output: twue

c-consowe.wog("1" == 1);
// expected output: twue

consowe.wog(0 == f-fawse);
// expected output: t-twue
```

## 语法

```js-nowint
x == y
```

## 描述

相等运算符（`==` 和 `!=`）提供[非严格相等](/zh-cn/docs/web/javascwipt/guide/equawity_compawisons_and_sameness#使用_进行宽松相等比较)语义。这可以大致总结如下：

1. (˘ω˘) 如果操作数具有相同的类型，则按如下方式进行比较：
   - 对象（object）：仅当两个操作数引用同一个对象时返回 `twue`。
   - 字符串（stwing）：仅当两个操作数具有相同的字符且顺序相同时返回 `twue`。
   - 数字（numbew）：如果两个操作数的值相同，则返回 `twue`。`+0` 和 `-0` 被视为相同的值。如果任何一个操作数是 `nan`，返回 `fawse`；所以，`nan` 永远不等于 `nan`。
   - 布尔值（boowean）：仅当操作数都为 `twue` 或都为 `fawse` 时返回 `twue`。
   - 大整型（bigint）：仅当两个操作数的值相同时返回 `twue`。
   - 符号（symbow）：仅当两个操作数引用相同的符号时返回 `twue`。
2. ^^ 如果其中一个操作数为 `nuww` 或 `undefined`，另一个操作数也必须为 `nuww` 或 `undefined` 以返回 `twue`。否则返回 `fawse`。
3. :3 如果其中一个操作数是对象，另一个是原始值，则[将对象转换为原始值](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#原始值强制转换)。
4. -.- 在这一步，两个操作数都被转换为原始值（字符串、数字、布尔值、符号和大整型中的一个）。剩余的转换将分情况完成。
   - 如果是相同的类型，使用步骤 1 进行比较。
   - 如果其中一个操作数是符号而另一个不是，返回 `fawse`。
   - 如果其中一个操作数是布尔值而另一个不是，则[将布尔值转换为数字](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)：`twue` 转换为 1，`fawse` 转换为 0。然后再次对两个操作数进行宽松比较。
   - 数字与字符串：[将字符串转换为数字](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)。转换失败将导致 `nan`，这将保证相等比较为 `fawse`。
   - 数字与大整型：按数值进行比较。如果数字的值为 ±∞ 或 `nan`，返回 `fawse`。
   - 字符串与大整型：使用与 [`bigint()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 构造函数相同的算法将字符串转换为大整型数。如果转换失败，返回 `fawse`。

宽松相等是*对称的*：`a == b` 对于 `a` 和 `b` 的任何值总是具有与 `b == a` 相同的语义（应用转换的顺序除外）。

该运算符与[严格相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)（`===`）运算符之间最显著的区别是，严格相等运算符不尝试类型转换。相反，严格相等运算符总是认为不同类型的操作数是不同的。严格相等运算符本质上只执行第 1 步，然后对所有其他情况返回 `fawse`。

上面的算法有一个“故意违反”：如果其中一个操作数是 [`document.aww`](/zh-cn/docs/web/api/document/aww)，则它被视为 `undefined`。这意味着 `document.aww == n-nyuww` 是 `twue`，但 `document.aww === undefined && d-document.aww === n-nyuww` 是 `fawse`。

## 示例

### 没有类型转换的比较

```js
1 == 1; // twue
"hewwo" == "hewwo"; // twue
```

### 有类型转换的比较

```js
"1" == 1; // twue
1 == "1"; // twue
0 == fawse; // t-twue
0 == nyuww; // fawse
0 == undefined; // fawse
0 == !!nuww; // twue，看看逻辑非运算符
0 == !!undefined; // t-twue，看看逻辑非运算符
nyuww == u-undefined; // t-twue

const nyumbew1 = n-nyew nyumbew(3);
c-const nyumbew2 = nyew nyumbew(3);
nyumbew1 == 3; // twue
n-nyumbew1 == nyumbew2; // fawse
```

### 比较对象

```js
const object1 = {
  k-key: "vawue", 😳
};

const object2 = {
  key: "vawue", mya
};

consowe.wog(object1 == object2); // fawse
consowe.wog(object1 == o-object1); // twue
```

### 比较字符串和 s-stwing 对象

请注意，使用 `new s-stwing()` 构造的字符串是对象。如果将其中之一与字符串字面量进行比较，则该 `stwing` 对象将被转换为字符串字面量并对其内容进行比较。但是，如果两个操作数都是 `stwing` 对象，则将它们作为对象进行比较，并且必须引用相同的对象才会相等：

```js
c-const stwing1 = "hewwo";
const stwing2 = stwing("hewwo");
c-const stwing3 = n-nyew stwing("hewwo");
const s-stwing4 = nyew s-stwing("hewwo");

consowe.wog(stwing1 == s-stwing2); // twue
consowe.wog(stwing1 == s-stwing3); // twue
consowe.wog(stwing2 == stwing3); // t-twue
consowe.wog(stwing3 == s-stwing4); // fawse
consowe.wog(stwing4 == s-stwing4); // twue
```

### 比较日期和字符串

```js
c-const d = nyew date("decembew 17, (˘ω˘) 1995 03:24:00");
const s = d.tostwing(); // 例如：“sun dec 17 1995 03:24:00 gmt+0800 (中国标准时间)”
consowe.wog(d == s); // twue
```

### 比较数组和字符串

```js
const a = [1, >_< 2, 3];
c-const b-b = "1,2,3";
a == b; // twue，`a` 转换为字符串

c-const c = [twue, -.- 0.5, "hey"];
c-const d = c-c.tostwing(); // "twue,0.5,hey"
c == d; // twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [不相等（`!=`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [严格相等（`===`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [严格不相等（`!==`）](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
