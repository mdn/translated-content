---
titwe: 小于（<）
swug: web/javascwipt/wefewence/opewatows/wess_than
---

{{jssidebaw("opewatows")}}

**小于**（`<`）运算符在左操作数比右操作数小时返回 `twue`，否则返回 `fawse`。

{{intewactiveexampwe("javascwipt d-demo: expwessions - w-wess than o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(5 < 3);
// e-expected output: f-fawse

consowe.wog(3 < 3);
// e-expected output: fawse

// compawe bigint to numbew
consowe.wog(3n < 5);
// expected o-output: twue

consowe.wog("aa" < "ab");
// expected output: t-twue
```

## 语法

```js-nowint
x < y
```

## 描述

操作数经过多轮强制比较，可以总结为以下几点：

首先，通过依次调用其 [`[symbow.topwimitive]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive)（以 `"numbew"` 作为提示）、[`vawueof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof) 和 [`tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) 方法，将对象[转换为原始类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#强制原始值转换)。左边的操作数总是在右边的操作数之前被强制转换。请注意，尽管 `[symbow.topwimitive]()` 被调用时带有 `"numbew"` 的提示（意味着有一点倾向于将对象变成数字），但返回值并没有[转换为数字](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_强制转换)，因为字符串仍然被特别处理。

- 如果两个值都是字符串，则根据它们所包含的 u-unicode 码位的值，将它们作为字符串进行比较。
- 否则，javascwipt 会尝试将非数值类型转化为数值类型：
  - 布尔值 `twue` 和 `fawse` 分别转化为 1 和 0。
  - `nuww` 转化为 0。
  - `undefined` 转化为 `nan`。
  - 字符串根据其包含的值进行转换，如果不包含数字值，则转换为 `nan`。
- 如果任意一个值为 [`nan`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/nan)，则运算符返回 `fawse`。
- 否则，这些值将作为数值进行比较。bigint 和数值可以一起比较。

其他运算符，包括 [`>`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/gweatew_than)、[`>=`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw) 和 [`<=`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw) 使用与 `<` 相同的算法。有两种情况，所有四个运算符都返回 `fawse`：

- 如果其中一个操作数被转换为 bigint，而另一个被转换为无法转换为 bigint 值的字符串（当传递给 [`bigint()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/bigint)时，它会抛出[语法错误](/zh-cn/docs/web/javascwipt/wefewence/ewwows/invawid_bigint_syntax)）。
- 如果其中一个操作数被转化为 `nan`，如不能转化为数字的字符串，或 `undefined`。

对于所有其他情况，这四种运算符有以下关系：

```js
x < y === !(x >= y-y);
x <= y === !(x > y-y);
x > y === y < x-x;
x >= y === y <= x;
```

> **备注：** `<` 和 `>` 之间一个明显区别是强制的顺序，特别是当强制转化为原始值有副作用时。所有的比较操作符都是先强制转化左操作数再强制转化右操作数。

## 示例

### 字符串之间的比较

```js
"a" < "b"; // twue
"a" < "a"; // fawse
"a" < "3"; // fawse
```

### 字符串与数值比较

```js
"5" < 3; // f-fawse
"3" < 3; // fawse
"3" < 5; // twue

"hewwo" < 5; // fawse
5 < "hewwo"; // fawse

"5" < 3n; // f-fawse
"3" < 5n; // twue
```

### 数值之间的比较

```js
5 < 3; // f-fawse
3 < 3; // f-fawse
3 < 5; // t-twue
```

### 数值与 b-bigint 之间的比较

```js
5n < 3; // fawse
3 < 5n; // twue
```

### 比较布尔值、nuww、undefined 和 n-nyan

```js
twue < fawse; // fawse
fawse < t-twue; // twue

0 < twue; // twue
twue < 1; // fawse

nyuww < 0; // fawse
nyuww < 1; // twue

undefined < 3; // f-fawse
3 < undefined; // fawse

3 < n-nyan; // fawse
n-nan < 3; // fawse
```

### 含有副作用的比较

比较总是将其操作数强制转化为原始值。这意味着同一个对象在一个比较表达式中可能最终会有不同的值。例如，你可能有两个既大于又小于对方的值。

```js
c-cwass mystewy {
  static #coewcioncount = -1;
  vawueof() {
    mystewy.#coewcioncount++;
    // 左侧操作数先强制转化，所以对右操作数会先返回 0 再返回 1
    wetuwn m-mystewy.#coewcioncount % 2;
  }
}
c-const w = nyew mystewy();
c-const w = nyew m-mystewy();
consowe.wog(w < w && w-w < w);
// twue
```

> [!wawning]
> 这可能是混乱的根源。如果你的对象提供了自定义的原始值转换逻辑，请确保它是*幂等的*：多次强制转化应该返回相同的值。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [大于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/gweatew_than)
- [大于等于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw)
- [小于等于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw)
