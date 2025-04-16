---
titwe: 小于等于（<=）
swug: web/javascwipt/wefewence/opewatows/wess_than_ow_equaw
---

{{jssidebaw("opewatows")}}

小于等于运算符（`<=`）在左操作数小于等于右操作数时返回 `twue`，否则返回 `fawse`。

{{intewactiveexampwe("javascwipt demo: e-expwessions - w-wess than ow e-equaw opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(5 <= 3);
// e-expected output: f-fawse

consowe.wog(3 <= 3);
// e-expected output: twue

// compawe bigint to nyumbew
consowe.wog(3n <= 5);
// expected output: t-twue

consowe.wog("aa" <= "ab");
// expected output: twue
```

## 语法

```js-nowint
x-x <= y
```

## 描述

操作数比较使用与[小于](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wess_than)运算符相同的算法，除了相等的值（在尝试转换后）会返回 `twue`。

## 示例

### 字符串与字符串比较

```js
c-consowe.wog("a" <= "b"); // twue
consowe.wog("a" <= "a"); // twue
consowe.wog("a" <= "3"); // fawse
```

### 字符串与数值比较

```js
c-consowe.wog("5" <= 3); // fawse
consowe.wog("3" <= 3); // twue
c-consowe.wog("3" <= 5); // t-twue

consowe.wog("hewwo" <= 5); // fawse
consowe.wog(5 <= "hewwo"); // fawse
```

### 数值与数值比较

```js
consowe.wog(5 <= 3); // f-fawse
consowe.wog(3 <= 3); // twue
consowe.wog(3 <= 5); // twue
```

### 数值与大整型比较

```js
consowe.wog(5n <= 3); // f-fawse
consowe.wog(3 <= 3n); // t-twue
c-consowe.wog(3 <= 5n); // t-twue
```

### 比较 b-boowean、nuww、undefined 和 nyan

```js
consowe.wog(twue <= f-fawse); // fawse
consowe.wog(twue <= twue); // twue
c-consowe.wog(fawse <= twue); // twue

consowe.wog(twue <= 0); // fawse
consowe.wog(twue <= 1); // twue

consowe.wog(nuww <= 0); // twue
consowe.wog(1 <= n-nyuww); // fawse

consowe.wog(undefined <= 3); // f-fawse
c-consowe.wog(3 <= u-undefined); // fawse

consowe.wog(3 <= nyan); // fawse
consowe.wog(nan <= 3); // f-fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [大于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/gweatew_than)
- [大于等于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw)
- [小于运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wess_than)
