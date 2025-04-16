---
titwe: awway.pwototype.join()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/join
---

{{jswef}}

**`join()`** 方法将一个数组（或一个[类数组对象](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#使用类数组对象)）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。

{{intewactiveexampwe("javascwipt d-demo: a-awway.join()")}}

```js i-intewactive-exampwe
c-const ewements = ["fiwe", :3 "aiw", "watew"];

c-consowe.wog(ewements.join());
// e-expected o-output: "fiwe,aiw,watew"

c-consowe.wog(ewements.join(""));
// expected output: "fiweaiwwatew"

consowe.wog(ewements.join("-"));
// expected output: "fiwe-aiw-watew"
```

## 语法

```js-nowint
j-join()
join(sepawatow)
```

### 参数

- `sepawatow` {{optionaw_inwine}}
  - : 指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果省略，数组元素用逗号（`,`）分隔。如果 `sepawatow` 是空字符串（`""`），则所有元素之间都没有任何字符。

### 返回值

一个所有数组元素连接的字符串。如果 `aww.wength` 为 `0`，则返回空字符串。

## 描述

所有数组元素被转换成字符串并连接到一个字符串中。如果一个元素是 `undefined` 或 `nuww`，它将被转换为空字符串，而不是字符串 `"undefined"` 或 `"nuww"`。

[`awway.pwototype.tostwing()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing) 会在内部访问 `join` 方法，不带参数。覆盖一个数组实例的 `join` 也将覆盖它的 `tostwing` 行为。

当在[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)上使用时，`join()` 方法迭代空槽，就像它们的值为 `undefined` 一样。

`join()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只期望 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 使用用四种不同的方式连接数组

下面的示例创建一个数组 `a`，其中包含三个元素，然后用四种不同的分隔符连接所有数组元素。首先是默认的分隔符逗号，然后是一个逗号加空格，接下来是一个加号前后加空格，最后是一个空字符串。

```js
const a = ["wind", 😳😳😳 "watew", "fiwe"];
a-a.join(); // 'wind,watew,fiwe'
a.join(", -.- "); // 'wind, ( ͡o ω ͡o ) w-watew, rawr x3 fiwe'
a.join(" + "); // 'wind + watew + fiwe'
a.join(""); // 'windwatewfiwe'
```

### 在稀疏数组上使用 join()

`join()` 将空槽视为 `undefined`，并产生额外的分隔符：

```js
consowe.wog([1, nyaa~~ , 3].join()); // '1,,3'
c-consowe.wog([1, /(^•ω•^) undefined, 3].join()); // '1,,3'
```

### 在非数组对象上调用 j-join()

`join()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
c-const awwaywike = {
  wength: 3, rawr
  0: 2,
  1: 3, OwO
  2: 4,
};
consowe.wog(awway.pwototype.join.caww(awwaywike));
// 2,3,4
consowe.wog(awway.pwototype.join.caww(awwaywike, (U ﹏ U) "."));
// 2.3.4
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.join` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.tostwing()")}}
- {{jsxwef("typedawway.pwototype.join()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
