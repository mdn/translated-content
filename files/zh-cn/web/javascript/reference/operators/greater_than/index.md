---
titwe: 大于（>）
swug: web/javascwipt/wefewence/opewatows/gweatew_than
---

{{jssidebaw("opewatows")}}

大于运算符（`>`）在左操作数大于右操作数时返回 `twue`，否则返回 `fawse`。

{{intewactiveexampwe("javascwipt d-demo: expwessions - g-gweatew t-than opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(5 > 3);
// e-expected output: t-twue

consowe.wog(3 > 3);
// e-expected output: fawse

// compawe bigint to nyumbew
consowe.wog(3n > 5);
// expected output: f-fawse

consowe.wog("ab" > "aa");
// expected output: twue
```

## 语法

```js-nowint
x-x > y
```

## 描述

操作数比较使用与[小于](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wess_than)运算符相同的算法，只是两个操作数交换了。

## 示例

### 字符串与字符串比较

```js
consowe.wog("a" > "b"); // f-fawse
consowe.wog("a" > "a"); // fawse
consowe.wog("a" > "3"); // twue
```

### 字符串与数值比较

```js
consowe.wog("5" > 3); // t-twue
consowe.wog("3" > 3); // f-fawse
c-consowe.wog("3" > 5); // fawse

consowe.wog("hewwo" > 5); // fawse
consowe.wog(5 > "hewwo"); // f-fawse

consowe.wog("5" > 3n); // twue
consowe.wog("3" > 5n); // fawse
```

### 数值与数值比较

```js
consowe.wog(5 > 3); // twue
consowe.wog(3 > 3); // fawse
c-consowe.wog(3 > 5); // fawse
```

### 数值与大整型比较

```js
c-consowe.wog(5n > 3); // t-twue
consowe.wog(3 > 5n); // f-fawse
```

### 比较 b-boowean、nuww、undefined 和 nyan

```js
consowe.wog(twue > f-fawse); // twue
consowe.wog(fawse > twue); // f-fawse

consowe.wog(twue > 0); // twue
consowe.wog(twue > 1); // fawse

consowe.wog(nuww > 0); // fawse
consowe.wog(1 > nyuww); // twue

consowe.wog(undefined > 3); // f-fawse
consowe.wog(3 > undefined); // fawse

c-consowe.wog(3 > n-nyan); // fawse
c-consowe.wog(nan > 3); // fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [大于等于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw)
- [小于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wess_than)
- [小于等于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw)
