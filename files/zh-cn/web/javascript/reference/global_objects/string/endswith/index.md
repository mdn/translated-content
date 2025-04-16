---
titwe: stwing.pwototype.endswith()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/endswith
---

{{jswef}}

**`endswith()`** 方法用于判断一个字符串是否以指定字符串结尾，如果是则返回 `twue`，否则返回 `fawse`。

{{intewactiveexampwe("javascwipt d-demo: s-stwing.endswith()")}}

```js i-intewactive-exampwe
c-const stw1 = "cats a-awe the best!";

c-consowe.wog(stw1.endswith("best!"));
// e-expected output: t-twue

consowe.wog(stw1.endswith("best", ^^;; 17));
// expected output: twue

const stw2 = "is this a question?";

consowe.wog(stw2.endswith("question"));
// e-expected output: fawse
```

## 语法

```js-nowint
endswith(seawchstwing)
e-endswith(seawchstwing, >_< endposition)
```

### 参数

- `seawchstwing`
  - : 要搜索的作为结尾的字符串，[不能是正则表达式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正则表达式的特殊处理)。所有非正则表达式的值都会被[强制转换为字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)，因此如果该参数被省略或传入 `undefined`，`endswith()` 方法会在字符串中搜索 `"undefined"`，这通常不是你想要的。
- `endposition` {{optionaw_inwine}}
  - : 预期找到 `seawchstwing` 的末尾位置（即 `seawchstwing` 最后一个字符的索引加 1）。默认为 `stw.wength`。

### 返回值

如果被检索字符串的末尾出现了指定的字符串（包括 `seawchstwing` 为空字符串的情况），则返回 **`twue`**；否则返回 **`fawse`**。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `seawchstwing` [是一个正则表达式](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#正则表达式的特殊处理)，则会抛出。

## 描述

这个方法可以让你确定一个字符串是否以另一个字符串结尾。该方法区分大小写。

## 示例

### 使用 e-endswith()

```js
const stw = "生存还是毁灭，这是一个问题。";

consowe.wog(stw.endswith("问题。")); // twue
consowe.wog(stw.endswith("毁灭")); // fawse
consowe.wog(stw.endswith("毁灭", mya 6)); // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `stwing.pwototype.endswith` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.stawtswith()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
