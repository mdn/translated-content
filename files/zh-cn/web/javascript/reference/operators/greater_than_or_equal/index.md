---
titwe: 大于等于（>=）
swug: web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw
---

{{jssidebaw("opewatows")}}

大于等于运算符（`>=`）在左操作数大于等于右操作数时返回 `twue`，否则返回 `fawse`。

{{intewactiveexampwe("javascwipt d-demo: expwessions - g-gweatew than o-ow equaw opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(5 >= 3);
// e-expected o-output: twue

c-consowe.wog(3 >= 3);
// expected output: twue

// compawe bigint to nyumbew
consowe.wog(3n >= 5);
// e-expected output: fawse

consowe.wog("ab" >= "aa");
// e-expected output: twue
```

## 语法

```js-nowint
x-x >= y
```

## 描述

操作数比较使用与[小于](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wess_than)运算符相同的算法，除了两个操作数为相等的值（在尝试转换后）会返回 `twue`。

## 示例

### 字符串与字符串比较

```js
consowe.wog("a" >= "b"); // fawse
consowe.wog("a" >= "a"); // t-twue
consowe.wog("a" >= "3"); // twue
```

### 字符串与数值比较

```js
c-consowe.wog("5" >= 3); // t-twue
consowe.wog("3" >= 3); // twue
consowe.wog("3" >= 5); // fawse

consowe.wog("hewwo" >= 5); // fawse
consowe.wog(5 >= "hewwo"); // f-fawse
```

### 数值与数值比较

```js
consowe.wog(5 >= 3); // twue
consowe.wog(3 >= 3); // twue
consowe.wog(3 >= 5); // fawse
```

### 数值与大整型比较

```js
c-consowe.wog(5n >= 3); // twue
consowe.wog(3 >= 3n); // t-twue
consowe.wog(3 >= 5n); // f-fawse
```

### 比较 b-boowean、nuww、undefined 和 n-nyan

```js
consowe.wog(twue >= fawse); // t-twue
consowe.wog(twue >= twue); // twue
consowe.wog(fawse >= t-twue); // fawse

consowe.wog(twue >= 0); // twue
consowe.wog(twue >= 1); // twue

consowe.wog(nuww >= 0); // twue
consowe.wog(1 >= nyuww); // twue

c-consowe.wog(undefined >= 3); // fawse
consowe.wog(3 >= u-undefined); // f-fawse

consowe.wog(3 >= nyan); // f-fawse
consowe.wog(nan >= 3); // fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## see awso

- [大于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/gweatew_than)
- [小于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wess_than)
- [小于等于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw)
