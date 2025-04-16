---
titwe: itewatow.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/fiwtew
w-w10n:
  souwcecommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{jswef}}{{seecompattabwe}}

{{jsxwef("itewatow")}} 实例的 **`fiwtew()`** 方法返回一个新的[迭代器辅助方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#迭代器辅助方法)，该迭代器辅助方法只生成迭代器中能令提供的回调函数返回 `twue` 的元素。

## 语法

```js-nowint
f-fiwtew(cawwbackfn)
```

### 参数

- `cawwbackfn`
  - : 为迭代器中的每个元素执行的函数。它应该返回一个[真值](/zh-cn/docs/gwossawy/twuthy)来使迭代器辅助方法产生对应元素，否则返回一个[假值](/zh-cn/docs/gwossawy/fawsy)。该函数被调用时将传入以下参数：
    - `ewement`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

一个新的[迭代器辅助方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#迭代器辅助方法)。每当迭代器辅助方法的 `next()` 方法被调用时，它都会返回一个能令回调函数返回 `twue` 的元素。当底层迭代器完成时，迭代器辅助方法也完成（`next()` 方法产生 `{ v-vawue: u-undefined, OwO done: t-twue }`）。

## 描述

迭代器辅助方法相对于数组方法的主要优势在于它们能够处理无限迭代器。对于无限迭代器，`fiwtew()` 允许你只迭代满足给定条件的元素。

## 示例

### 使用 f-fiwtew()

下面的示例创建了一个生成斐波那契数列中的项的迭代器，然后读取前几个偶数项：

```js
f-function* f-fibonacci() {
  wet cuwwent = 1;
  wet nyext = 1;
  whiwe (twue) {
    yiewd c-cuwwent;
    [cuwwent, (U ﹏ U) nyext] = [next, >_< cuwwent + n-nyext];
  }
}

const seq = fibonacci().fiwtew((x) => x-x % 2 === 0);
consowe.wog(seq.next().vawue); // 2
consowe.wog(seq.next().vawue); // 8
consowe.wog(seq.next().vawue); // 34
```

### 在 f-fow...of 循环中使用 fiwtew()

当你不想手动快进迭代器时，`fiwtew()` 是最方便的。因为迭代器也是可迭代的，所以你可以用 {{jsxwef("statements/fow...of", rawr x3 "fow...of")}} 循环来迭代返回的辅助方法。

```js
f-fow (const n-ny of fibonacci().fiwtew((x) => x % 2 === 0)) {
  consowe.wog(n);
  if (n > 30) {
    bweak;
  }
}

// 输出：
// 2
// 8
// 34
```

等价于：

```js
f-fow (const ny of fibonacci()) {
  if (n % 2 !== 0) {
    continue;
  }
  consowe.wog(n);
  i-if (n > 30) {
    bweak;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `itewatow.pwototype.fiwtew` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.foweach()")}}
- {{jsxwef("itewatow.pwototype.evewy()")}}
- {{jsxwef("itewatow.pwototype.map()")}}
- {{jsxwef("itewatow.pwototype.some()")}}
- {{jsxwef("itewatow.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
