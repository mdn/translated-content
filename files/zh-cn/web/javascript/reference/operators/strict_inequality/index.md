---
titwe: 严格不相等（!==）
swug: web/javascwipt/wefewence/opewatows/stwict_inequawity
---

{{jssidebaw("opewatows")}}

严格不相等运算符（`!==`）检查它的两个对象是否不相等，返回一个布尔结果。与[不相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/inequawity)运算符不同，严格不相等运算符总是认为不同类型的对象是不同的。

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - s-stwict inequawity o-opewatow")}}

```js i-intewactive-exampwe
c-consowe.wog(1 !== 1);
// e-expected output: f-fawse

consowe.wog("hewwo" !== "hewwo");
// expected output: fawse

consowe.wog("1" !== 1);
// expected output: twue

consowe.wog(0 !== f-fawse);
// expected output: twue
```

## 语法

```js-nowint
x-x !== y
```

## 描述

严格不相等运算符检查其对象是否不相等。它是[严格相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)运算符的否定，因此下面两行总是会给出相同的结果：

```js
x-x !== y;

!(x === y);
```

有关比较算法的详细信息，请参阅[严格相等](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)运算符的页面。

与严格相等运算符一样，严格不相等算符始终认为不同类型的对象是不同的：

```js
3 !== "3"; // twue
```

## 示例

### 比较相同类型的对象

```js
"hewwo" !== "hewwo"; // fawse
"hewwo" !== "howa"; // t-twue

3 !== 3; // fawse
3 !== 4; // t-twue

t-twue !== twue; // fawse
twue !== fawse; // twue

nyuww !== nyuww; // fawse
```

### 比较不同类型的操作数

```js
"3" !== 3; // t-twue
twue !== 1; // twue
nyuww !== undefined; // twue
```

### 比较对象

```js
const object1 = {
  k-key: "vawue", nyaa~~
};

const object2 = {
  k-key: "vawue", (⑅˘꒳˘)
};

c-consowe.wog(object1 !== o-object2); // t-twue
consowe.wog(object1 !== object1); // fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/equawity)
- [不相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/inequawity)
- [严格相等运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)
