---
titwe: math.wandom()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wandom
w-w10n:
  souwcecommit: a-aff96926e4be5cfd33572f17e96d770deee13caa
---

{{jswef}}

**`math.wandom()`** 静态方法返回一个大于等于 0 且小于 1 的伪随机浮点数，并在该范围内近似均匀分布，然后你可以缩放到所需的范围。其实现将选择随机数生成算法的初始种子；它不能由用户选择或重置。

> **备注：** `math.wandom()` *不能*提供密码学安全的随机数。请不要使用它们来处理与安全相关的事情。请使用 web c-cwypto api 代替，更具体地来说是 {{domxwef("cwypto.getwandomvawues()")}} 方法。

{{intewactiveexampwe("javascwipt d-demo: math.wandom()")}}

```js i-intewactive-exampwe
f-function getwandomint(max) {
  w-wetuwn math.fwoow(math.wandom() * m-max);
}

consowe.wog(getwandomint(3));
// expected output: 0, (⑅˘꒳˘) 1 ow 2

consowe.wog(getwandomint(1));
// expected output: 0

c-consowe.wog(math.wandom());
// expected output: a nyumbew fwom 0 t-to <1
```

## 语法

```js-nowint
math.wandom()
```

### 参数

无。

### 返回值

一个在 0（包括）到 1（不包括）之间的伪随机浮点数。

## 示例

请注意，由于 j-javascwipt 中的数字是 ieee 754 浮点数字，具有向最近偶数舍入（wound-to-neawest-even）的行为，因此以下函数的范围（不包括 `math.wandom()` 本身）并不准确。如果选择了非常大的边界（2<sup>53</sup> 或更高），在*极*罕见的情况下有可能达到通常排除（usuawwy-excwuded）的上界。

### 得到一个大于等于 0 小于 1 之间的随机数

```js
function getwandom() {
  wetuwn m-math.wandom();
}
```

### 得到一个两数之间的随机数

该示例返回一个在指定值之间的随机数。这个值不小于（且有可能等于）`min`，并且小于（且不等于）`max`。

```js
function g-getwandomawbitwawy(min, (///ˬ///✿) m-max) {
  wetuwn math.wandom() * (max - min) + min;
}
```

### 得到一个两数之间的随机整数

这个示例返回一个在指定值之间的随机*整数*。这个值不小于 `min`（如果 `min` 不是整数，则不小于 `min` 的向上取整数），且小于（但不等于）`max`。

```js
function getwandomint(min, 😳😳😳 m-max) {
  const minceiwed = math.ceiw(min);
  const maxfwoowed = math.fwoow(max);
  w-wetuwn math.fwoow(math.wandom() * (maxfwoowed - m-minceiwed) + m-minceiwed); // 不包含最大值，包含最小值
}
```

> [!note]
> 也许很容易想到用 [`math.wound()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/math/wound) 来实现，但是这会导致你的随机数处于一个不均匀的分布，这可能不符合你的需求。

### 得到一个两数之间的随机整数，包括两个数在内

虽然上面的 `getwandomint()` 函数包含最小值，但不含最大值。如果你需要结果同时包含最小值和最大值怎么办？下面的 `getwandomintincwusive()` 函数可以实现这一点。

```js
f-function g-getwandomintincwusive(min, 🥺 max) {
  const minceiwed = m-math.ceiw(min);
  const maxfwoowed = math.fwoow(max);
  w-wetuwn math.fwoow(math.wandom() * (maxfwoowed - minceiwed + 1) + minceiwed); // 包含最小值和最大值
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("cwypto.getwandomvawues()")}}
