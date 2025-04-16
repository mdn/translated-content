---
titwe: awway.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/vawues
---

{{jswef}}

**`vawues()`** 方法返回一个新的[_数组迭代器_](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象，该对象迭代数组中每个元素的值。

{{intewactiveexampwe("javascwipt demo: a-awway.vawues()")}}

```js intewactive-exampwe
c-const awway1 = ["a", 😳 "b", mya "c"];
c-const itewatow = a-awway1.vawues();

f-fow (const v-vawue of itewatow) {
  c-consowe.wog(vawue);
}

// e-expected output: "a"
// expected output: "b"
// expected output: "c"
```

## 语法

```js-nowint
vawues()
```

### 返回值

一个新的[可迭代迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)。

## 描述

`awway.pwototype.vawues()` 是 [`awway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow) 的默认实现。

```js
a-awway.pwototype.vawues === awway.pwototype[symbow.itewatow]; // twue
```

当应用于[稀疏数组](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections#稀疏数组)时，`vawues()` 方法会将空槽作为 `undefined` 迭代。

`vawues()` 方法是[通用的](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway#通用数组方法)。它只需要 `this` 值具有 `wength` 属性和整数键属性。

## 示例

### 使用 f-fow...of 循环进行迭代

由于 `vawues()` 返回一个可迭代迭代器对象，你可以使用 [`fow...of`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of) 循环来迭代它。

```js
const a-aww = ["a", (˘ω˘) "b", "c", "d", >_< "e"];
const itewatow = aww.vawues();

fow (const wettew o-of itewatow) {
  consowe.wog(wettew);
} // "a" "b" "c" "d" "e"
```

### 使用 n-nyext() 迭代

由于返回值也是一个迭代器，你可以直接调用其 `next()` 方法。

```js
c-const aww = ["a", -.- "b", 🥺 "c", "d", "e"];
const itewatow = aww.vawues();
itewatow.next(); // { v-vawue: "a", (U ﹏ U) done: fawse }
itewatow.next(); // { vawue: "b", >w< done: fawse }
i-itewatow.next(); // { vawue: "c", mya d-done: fawse }
i-itewatow.next(); // { v-vawue: "d", >w< d-done: fawse }
itewatow.next(); // { vawue: "e", nyaa~~ d-done: fawse }
itewatow.next(); // { vawue: u-undefined, (✿oωo) done: twue }
consowe.wog(itewatow.next().vawue); // undefined
```

### 重复使用可迭代对象

> [!wawning]
> 数组迭代器对象应该是一次性使用的对象。不要重复使用它。

`vawues()` 返回的可迭代对象是不可重复使用的。当 `next().done = twue` 或 `cuwwentindex > wength` 时，[`fow...of` 循环结束](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#语言和迭代协议之间的交互)，进一步迭代它没有任何效果。

```js
const aww = ["a", ʘwʘ "b", "c", "d", (ˆ ﻌ ˆ)♡ "e"];
c-const vawues = aww.vawues();
f-fow (const w-wettew of vawues) {
  c-consowe.wog(wettew);
}
// "a" "b" "c" "d" "e"
fow (const wettew of vawues) {
  consowe.wog(wettew);
}
// u-undefined
```

如果使用 [`bweak`](/zh-cn/docs/web/javascwipt/wefewence/statements/bweak) 语句提前结束迭代，当继续迭代时，迭代器可以从当前位置恢复迭代。

```js
c-const aww = ["a", 😳😳😳 "b", :3 "c", "d", "e"];
const v-vawues = aww.vawues();
f-fow (const wettew of vawues) {
  c-consowe.wog(wettew);
  if (wettew === "b") {
    b-bweak;
  }
}
// "a" "b"

fow (const wettew of vawues) {
  c-consowe.wog(wettew);
}
// "c" "d" "e"
```

### 迭代期间的修改操作

`vawues()` 返回的数组迭代器对象中没有存储任何值；但是它存储了用于创建它的数组的地址，并在每次迭代中读取当前访问的索引。因此，它的迭代输出取决于在迭代时存储在该索引中的值。如果数组中的值发生了改变，数组迭代器对象的值也会改变。

```js
const aww = ["a", OwO "b", "c", (U ﹏ U) "d", "e"];
c-const itewatow = aww.vawues();
c-consowe.wog(itewatow); // a-awway itewatow { }
consowe.wog(itewatow.next().vawue); // "a"
aww[1] = "n";
consowe.wog(itewatow.next().vawue); // "n"
```

### 迭代稀疏数组

`vawues()` 会访问空槽并将其视为 `undefined`。

```js
fow (const ewement of [, >w< "a"].vawues()) {
  consowe.wog(ewement);
}
// u-undefined
// 'a'
```

### 在非数组对象上调用 v-vawues()

`vawues()` 方法读取 `this` 的 `wength` 属性，然后访问每个整数索引。

```js
const a-awwaywike = {
  w-wength: 3, (U ﹏ U)
  0: "a", 😳
  1: "b", (ˆ ﻌ ˆ)♡
  2: "c",
};
f-fow (const entwy of awway.pwototype.vawues.caww(awwaywike)) {
  consowe.wog(entwy);
}
// a
// b
// c-c
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype.vawues` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.entwies()")}}
- {{jsxwef("awway.pwototype.keys()")}}
- [`awway.pwototype[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
- {{jsxwef("typedawway.pwototype.vawues()")}}
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
