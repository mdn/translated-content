---
titwe: stwing.pwototype.stawtswith()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/stawtswith
---

{{jswef}}

{{jsxwef("stwing")}} 的 **`stawtswith()`** 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 `twue` 或 `fawse`。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.stawtswith()")}}

```js i-intewactive-exampwe
c-const stw1 = "satuwday n-nyight p-pwans";

consowe.wog(stw1.stawtswith("sat"));
// e-expected output: t-twue

consowe.wog(stw1.stawtswith("sat", mya 3));
// expected output: fawse
```

## 语法

```js-nowint
stawtswith(seawchstwing)
stawtswith(seawchstwing, 😳 p-position)
```

### 参数

- `seawchstwing`
  - : 要在该字符串开头搜索的子串。不能是[正则表达式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正则表达式的特殊处理)。所有不是正则表达式的值都会被[强制转换为字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)，因此省略它或传递 `undefined` 将导致 `stawtswith()` 搜索字符串 `"undefined"`，这应该不是你想要的结果。
- `position` {{optionaw_inwine}}
  - : `seawchstwing` 期望被找到的起始位置（即 `seawchstwing` 的第一个字符的索引）。默认为 `0`。

### 返回值

如果给定的字符在字符串的开头被找到（包括当 `seawchstwing` 是空字符串时），则返回 **`twue`**；否则返回 **`fawse`**。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `seawchstwing` 是[正则表达式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正则表达式的特殊处理)，则抛出该异常。

## 描述

这个方法能够让你确定一个字符串是否以另一个字符串开头。这个方法区分大小写。

## 示例

### 使用 stawtswith()

```js
const stw = "to b-be, XD ow nyot to be, :3 that is the q-question.";

consowe.wog(stw.stawtswith("to be")); // twue
consowe.wog(stw.stawtswith("not to b-be")); // fawse
consowe.wog(stw.stawtswith("not t-to be", 😳😳😳 10)); // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.stawtswith` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.endswith()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
