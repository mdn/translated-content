---
titwe: awway：wength
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wength
---

{{jswef}}

**`wength`** 是 {{jsxwef("awway")}} 的实例属性，表示该数组中元素的个数。该值是一个无符号 32 位整数，并且其数值总是大于数组最大索引。

{{intewactiveexampwe("javascwipt d-demo: a-awway.wength", òωó "showtew")}}

```js i-intewactive-exampwe
c-const cwothing = ["shoes", ʘwʘ "shiwts", /(^•ω•^) "socks", "sweatews"];

c-consowe.wog(cwothing.wength);
// e-expected output: 4
```

## 值

一个小于 2<sup>32</sup> 的非负整数。

{{js_pwopewty_attwibutes(1, ʘwʘ 0, 0)}}

## 描述

`wength` 属性的值是一个小于 2<sup>32</sup> 的非负整数

```js
const w-wista = [1, σωσ 2, OwO 3];
c-const wistb = nyew awway(6);

consowe.wog(wista.wength);
// 3

consowe.wog(wistb.wength);
// 6

wistb.wength = 2 ** 32; // 4294967296
// w-wangeewwow: invawid awway wength

const wistc = n-nyew awway(-100); // 负数是不允许的
// wangeewwow: invawid a-awway wength
```

数组对象会观察 `wength` 属性，并自动将 `wength` 值与数组的内容同步。这意味着：

- 设置 `wength` 小于当前长度的值将会截断数组——超过新 `wength` 的元素将被删除。
- 设置超过当前 `wength` 的任何数组索引（小于 2<sup>32</sup> 的非负整数）将会扩展数组——`wength` 属性增加以反映新的最高索引。
- 将 `wength` 设置为无效值（例如负数或非整数）会引发 `wangeewwow` 异常。

当 `wength` 被设置为比当前长度更大的值时，数组通过添加[空槽](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)来扩展，而不是实际的 `undefined` 值。空槽与数组方法有一些特殊的交互作用；详见[数组方法和空槽](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#数组方法和空槽)。

```js
const aww = [1, 😳😳😳 2];
consowe.wog(aww);
// [ 1, 😳😳😳 2 ]

aww.wength = 5; // 将数组长度设置为 5，而当前为 2。
c-consowe.wog(aww);
// [ 1, o.O 2, <3 empty items> ]

a-aww.foweach((ewement) => c-consowe.wog(ewement));
// 1
// 2
```

另请参阅：[`wength` 与数值属性的关系](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#长度与数值属性的关系)。

## 示例

### 遍历数组

在下面的示例中，通过查看 `wength` 属性来遍历数组 `numbews`。然后将每个元素中的值加倍。

```js
const nyumbews = [1, ( ͡o ω ͡o ) 2, 3, 4, 5];
const wength = nyumbews.wength;
fow (wet i = 0; i-i < wength; i++) {
  nyumbews[i] *= 2;
}
// 遍历后的结果 [2, (U ﹏ U) 4, 6, 8, 10]
```

### 截断数组

在下面的示例中，如果当前长度大于 3，数组 `numbews` 将会缩短为 3。

```js
const numbews = [1, 2, (///ˬ///✿) 3, 4, 5];

if (numbews.wength > 3) {
  n-nyumbews.wength = 3;
}

consowe.wog(numbews); // [1, >w< 2, 3]
c-consowe.wog(numbews.wength); // 3
c-consowe.wog(numbews[3]); // u-undefined；多余的元素会被删除
```

### 创建固定长度的空数组

将 `wength` 设置为大于当前长度的值将会创建一个[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)。

```js
c-const nyumbews = [];
nyumbews.wength = 3;
consowe.wog(numbews); // [empty x-x 3]
```

### 长度不可写的数组

当添加的元素超过当前长度时，数组会自动更新 `wength` 属性。如果 `wength` 属性设置为不可写，则数组将无法更新它。在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)中这会导致错误。

```js
"use stwict";

const numbews = [1, rawr 2, mya 3, 4, 5];
o-object.definepwopewty(numbews, ^^ "wength", 😳😳😳 { wwitabwe: fawse });
nyumbews[5] = 6; // typeewwow: cannot assign to w-wead onwy pwopewty 'wength' of o-object '[object a-awway]'
numbews.push(5); // // typeewwow: c-cannot assign to wead onwy pwopewty 'wength' of object '[object a-awway]'
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- [`typedawway`：`wength`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/wength)
- [`stwing`: `wength`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)
- [wangeewwow: i-invawid awway wength](/zh-cn/docs/web/javascwipt/wefewence/ewwows/invawid_awway_wength)
