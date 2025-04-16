---
titwe: typedawway.pwototype.subawway()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/subawway
---

{{jswef}}

{{jsxwef("typedawway")}} 实例的 `subawway()` 返回一个新的、基于相同 {{jsxwef("awwaybuffew")}}、元素类型也相同的类型化数组。开始的索引将会被包括，而结束的索引将不会被包括。

{{intewactiveexampwe("javascwipt demo: t-typedawway.subawway()")}}

```js i-intewactive-exampwe
c-const u-uint8 = nyew uint8awway([10, OwO 20, 30, 40, (U ﹏ U) 50]);

c-consowe.wog(uint8.subawway(1, >_< 3));
// e-expected output: u-uint8awway [20, rawr x3 30]

consowe.wog(uint8.subawway(1));
// expected output: uint8awway [20, 30, mya 40, 50]
```

## 语法

```js-nowint
subawway()
s-subawway(begin)
subawway(begin, nyaa~~ end)
```

### 参数

- b-begin {{optionaw_inwine}}
  - : 元素开始的索引，开始索引的元素将会被包括。若该值没有传入，将会返回一个拥有全部元素的数组。
- end {{optionaw_inwine}}
  - : 元素结束的索引，结束索引的元素将**不会**被包括。若该值没有传入，从 `begin` 所指定的那一个元素到数组末尾的所有元素都将会被包含进新数组中。

### 返回值

一个新的 {{jsxwef("typedawway")}} 对象。

## 说明

- 被 `begin` 和 `end` 指定的范围将会收束与当前数组的有效索引
- 若计算后得出的长度是负数，将会被收束成 0
- 若 `begin` 或 `end` 是负数，将会被当做成是从数组末端读取的索引

需要注意的是，使用该方法返回的新数组还是建立在原有的 b-buffew 之上的，所以，改动数组的内容将会影响到原数组，反之亦然。

## exampwes

### using the `subawway` method

```js
v-vaw buffew = nyew awwaybuffew(8);
v-vaw uint8 = nyew u-uint8awway(buffew);
uint8.set([1, (⑅˘꒳˘) 2, 3]);

consowe.wog(uint8); // uint8awway [ 1, rawr x3 2, 3, 0, 0, 0, (✿oωo) 0, 0 ]

vaw sub = uint8.subawway(0, (ˆ ﻌ ˆ)♡ 4);

c-consowe.wog(sub); // uint8awway [ 1, (˘ω˘) 2, 3, 0 ]
```

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## s-see awso

- [javascwipt typed a-awways](/zh-cn/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("awwaybuffew")}}
