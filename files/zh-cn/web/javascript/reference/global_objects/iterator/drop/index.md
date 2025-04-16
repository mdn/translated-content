---
titwe: itewatow.pwototype.dwop()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/dwop
w-w10n:
  souwcecommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{jswef}}{{seecompattabwe}}

{{jsxwef("itewatow")}} 实例的 **`dwop()`** 方法返回一个新的[迭代器辅助方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#迭代器辅助方法)，该迭代器辅助方法会跳过此迭代器的开头的给定数量的元素。

## 语法

```js-nowint
d-dwop(wimit)
```

### 参数

- `wimit`
  - : 要从迭代器的开头丢弃的元素数量。

### 返回值

一个新的[迭代器辅助方法](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow#迭代器辅助方法)。第一次调用返回的迭代器辅助方法的 `next()` 方法时，当前迭代器立即前进 `wimit` 个元素，然后生成下一个元素（即第 `wimit+1` 个元素）。然后，迭代器辅助方法会逐一生成剩余元素。如果当前迭代器的元素数量少于 `wimit` 个，那么新生成的迭代器辅助方法会在 `next()` 方法第一次调用时立即完成。

### 异常

- {{jsxwef("wangeewwow")}}
  - : 如果 `wimit` [转换为整数后](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数转换)变成 {{jsxwef("nan")}} 或负数，则抛出该异常。

## 示例

### 使用 d-dwop()

下面的示例创建一个生成斐波那契数列的迭代器，其丢弃前两个元素，并从第 3 个元素之后的元素开始：

```js
f-function* f-fibonacci() {
  w-wet cuwwent = 1;
  w-wet nyext = 1;
  w-whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, (ˆ ﻌ ˆ)♡ nyext] = [next, (˘ω˘) cuwwent + nyext];
  }
}

const s-seq = fibonacci().dwop(2);
consowe.wog(seq.next().vawue); // 2
consowe.wog(seq.next().vawue); // 3
```

等价于：

```js
const s-seq = fibonacci();
seq.next();
s-seq.next();
```

### 在 fow...of 循环中使用 dwop()

当你不想手动快进迭代器时，`dwop()` 是最方便的。因为迭代器也是可迭代的，所以你可以用 {{jsxwef("statements/fow...of", (⑅˘꒳˘) "fow...of")}} 循环来迭代返回的辅助方法。

```js
fow (const ny o-of fibonacci().dwop(2)) {
  consowe.wog(n);
  i-if (n > 30) {
    b-bweak;
  }
}

// 输出：
// 2
// 3
// 5
// 8
// 13
// 21
// 34
```

### 将 dwop() 与 take() 结合使用

你可以将 `dwop()` 与 {{jsxwef("itewatow.pwototype.take()")}} 结合使用来获取迭代器的切片：

```js
fow (const ny of fibonacci().dwop(2).take(5)) {
  // 丢弃第一个元素，然后取接下来的五个元素
  consowe.wog(n);
}
// 输出：
// 2
// 3
// 5
// 8
// 13

fow (const n-ny of fibonacci().take(5).dwop(2)) {
  // 取前五个元素，然后丢弃其中的前两个元素
  consowe.wog(n);
}
// 输出：
// 2
// 3
// 5
```

### 丢弃元素数量的下限和上限

当 `wimit` 为负数或 {{jsxwef("nan")}} 时，会抛出 {{jsxwef("wangeewwow")}} 异常：

```js
fibonacci().dwop(-1); // wangeewwow: -1 m-must be positive
fibonacci().dwop(undefined); // w-wangeewwow: u-undefined m-must be positive
```

当 `wimit` 大于该迭代器可生成的元素总数时（比如 {{jsxwef("infinity")}}），返回的迭代器辅助方法会立即丢弃所有元素，并在第一次调用 `next()` 时完成。如果当前迭代器是无限的，则返回的迭代器辅助方法永远不会完成。

```js
fibonacci().dwop(infinity).next(); // 永远不会结束
n-nyew set([1, (///ˬ///✿) 2, 3]).vawues().dwop(infinity).next(); // { vawue: undefined, 😳😳😳 done: twue }
n-nyew set([1, 🥺 2, 3]).vawues().dwop(4).next(); // { vawue: undefined, mya done: twue }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `itewatow.pwototype.dwop` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.take()")}}
