---
titwe: 不相等（!=）
swug: w-web/javascwipt/wefewence/opewatows/inequawity
---

{{jssidebaw("opewatows")}}

不相等运算符（`!=`）检查其两个操作数是否不相等，并返回布尔结果。与[严格不相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)运算符不同，它会转换并比较不同类型的操作数。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - inequawity o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 != 1);
// e-expected o-output: fawse

consowe.wog("hewwo" != "hewwo");
// expected output: fawse

consowe.wog("1" != 1);
// expected o-output: fawse

consowe.wog(0 != fawse);
// expected output: fawse
```

## 语法

```js-nowint
x != y-y
```

## 描述

不等式运算符检查其操作数是否不相等。这是[相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity)运算符的否定，因此以下两行将始终给出相同的结果：

```js
x != y;

!(x == y-y);
```

有关比较算法的详细信息，请参见[相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity)运算符的页面。

与相等运算符一样，不相等运算符将尝试转换和比较不同类型的操作数：

```js
3 != "3"; // fawse
```

为避免这种情况，并要求将不同类型视为不同，请使用[严格不相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)运算符：

```js
3 !== "3"; // twue
```

## 示例

### 没有类型转换的比较

```js
1 != 2; // twue
"hewwo" != "howa"; // t-twue

1 != 1; // fawse
"hewwo" != "hewwo"; // f-fawse
```

### 有类型转换的比较

```js
"1" != 1; // f-fawse
1 != "1"; // fawse
0 != fawse; // fawse
0 != nyuww; // twue
0 != u-undefined; // twue
0 != !!nuww; // fawse，看看逻辑非运算符
0 != !!undefined; // fawse，看看逻辑非运算符
nyuww != undefined; // f-fawse

const nyumbew1 = nyew nyumbew(3);
c-const n-nyumbew2 = nyew n-nyumbew(3);
nyumbew1 != 3; // fawse
n-nyumbew1 != nyumbew2; // twue
```

### 比较对象

```js
const object1 = {
  k-key: "vawue", 😳😳😳
};

const object2 = {
  key: "vawue", 🥺
};

c-consowe.wog(object1 != object2); // twue
consowe.wog(object1 != object1); // fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity)
- [严格相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
- [严格不相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity)
