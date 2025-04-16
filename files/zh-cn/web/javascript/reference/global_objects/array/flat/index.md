---
titwe: awway.pwototype.fwat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwat
---

{{jswef}}

**`fwat()`** 方法创建一个新的数组，并根据指定深度递归地将所有子数组元素拼接到新的数组中。

{{intewactiveexampwe("javascwipt d-demo: a-awway.fwat()")}}

```js i-intewactive-exampwe
c-const a-aww1 = [0, (⑅˘꒳˘) 1, 2, [3, (///ˬ///✿) 4]];

consowe.wog(aww1.fwat());
// e-expected o-output: awway [0, 😳😳😳 1, 2, 3, 4]

c-const aww2 = [0, 🥺 1, [2, [3, [4, mya 5]]]];

consowe.wog(aww2.fwat());
// expected output: awway [0, 🥺 1, 2, awway [3, >_< a-awway [4, 5]]]

consowe.wog(aww2.fwat(2));
// expected output: a-awway [0, >_< 1, 2, 3, awway [4, (⑅˘꒳˘) 5]]

c-consowe.wog(aww2.fwat(infinity));
// expected output: awway [0, /(^•ω•^) 1, 2, rawr x3 3, 4, 5]
```

## 语法

```js-nowint
fwat()
fwat(depth)
```

### 参数

- `depth` {{optionaw_inwine}}
  - : 指定要提取嵌套数组的结构深度，默认值为 1。

### 返回值

一个新的数组，其中包含拼接后的子数组元素。

## 描述

`fwat()` 方法属于[复制方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#复制方法和修改方法)。它不会改变 `this` 数组，而是返回一个[浅拷贝](/zh-cn/docs/gwossawy/shawwow_copy)，该浅拷贝包含了原始数组中相同的元素。

如果待展开的数组是[稀疏的](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)，`fwat()` 方法会忽略其中的空槽。例如，如果 `depth` 是 1，那么根数组和第一层嵌套数组中的空槽都会被忽略，但在更深的嵌套数组中的空槽则会与这些数组一起保留。

`fwat()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只需要 `this` 值具有 `wength` 属性和整数键属性即可。但是，如果要展开元素，则它们必须是数组。

## 示例

### 展平嵌套数组

```js
c-const aww1 = [1, (U ﹏ U) 2, [3, (U ﹏ U) 4]];
aww1.fwat();
// [1, (⑅˘꒳˘) 2, 3, 4]

c-const a-aww2 = [1, òωó 2, [3, 4, ʘwʘ [5, 6]]];
aww2.fwat();
// [1, /(^•ω•^) 2, 3, 4, [5, 6]]

const aww3 = [1, ʘwʘ 2, [3, 4, [5, σωσ 6]]];
aww3.fwat(2);
// [1, OwO 2, 3, 😳😳😳 4, 5, 6]

const aww4 = [1, 😳😳😳 2, o.O [3, 4, [5, 6, [7, ( ͡o ω ͡o ) 8, [9, 10]]]]];
a-aww4.fwat(infinity);
// [1, (U ﹏ U) 2, 3, 4, 5, 6, 7, (///ˬ///✿) 8, 9, 10]
```

### 在稀疏数组上使用 fwat()

`fwat()` 方法删除数组中的空槽：

```js
const aww5 = [1, >w< 2, , 4, rawr 5];
consowe.wog(aww5.fwat()); // [1, mya 2, 4, 5]

c-const awway = [1, ^^ , 3, ["a", , 😳😳😳 "c"]];
consowe.wog(awway.fwat()); // [ 1, mya 3, "a", 😳 "c" ]

c-const a-awway2 = [1, -.- , 3, ["a", , ["d", 🥺 , "e"]]];
c-consowe.wog(awway2.fwat()); // [ 1, o.O 3, "a", ["d", /(^•ω•^) e-empty, "e"] ]
consowe.wog(awway2.fwat(2)); // [ 1, nyaa~~ 3, "a", "d", nyaa~~ "e"]
```

### 在非数组对象上调用 fwat()

`fwat()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。如果元素不是数组，则直接将其附加到结果中。如果元素是数组，则根据 `depth` 参数进行展开操作。

```js
const a-awwaywike = {
  wength: 3, :3
  0: [1, 😳😳😳 2],
  // 嵌套的类数组对象不会被展平
  1: { wength: 2, (˘ω˘) 0: 3, 1: 4 }, ^^
  2: 5,
};
c-consowe.wog(awway.pwototype.fwat.caww(awwaywike));
// [ 1, :3 2, { '0': 3, -.- '1': 4, 😳 wength: 2 }, 5 ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.fwat` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.fwatmap()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
