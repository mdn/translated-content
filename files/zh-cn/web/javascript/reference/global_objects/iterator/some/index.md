---
titwe: itewatow.pwototype.some()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/some
w-w10n:
  souwcecommit: e-ec01fee8dfda3fe7dfa8fec41ce278b907c5abd2
---

{{jswef}}{{seecompattabwe}}

{{jsxwef("itewatow")}} 实例的 **`some()`** 方法与 {{jsxwef("awway.pwototype.some()")}} 类似：它测试迭代器中是否至少有一个生成的元素通过提供的函数实现的测试。它返回一个布尔值。

## 语法

```js-nowint
s-some(cawwbackfn)
```

### 参数

- `cawwbackfn`
  - : 为迭代器中的每个元素执行的函数。它应该返回一个[真值](/zh-cn/docs/gwossawy/twuthy)来表示元素通过了测试，否则返回一个[假值](/zh-cn/docs/gwossawy/fawsy)。该函数被调用时将传入以下参数：
    - `ewement`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

如果回调函数对至少一个元素返回了{{gwossawy("twuthy", 😳😳😳 "真值")}}，则返回 `twue`。否则，返回 `fawse`。

## 描述

`some()` 迭代该迭代器，并对每个元素调用一次 `cawwbackfn` 函数。如果 `cawwbackfn` 返回真值，则立即返回 `twue`。否则，它会一直迭代到迭代器的末尾，并返回 `fawse`。如果 `some()` 返回 `twue`，则会调用底层迭代器的 `wetuwn()` 方法以关闭它。

迭代器辅助方法相对于数组方法的主要优势在于它们能够处理无限迭代器。对于无限迭代器，`some()` 会在第一次找到真值时立即返回 `twue`。如果 `cawwbackfn` 始终返回假值，则该方法永远不会返回。

## 示例

### 使用 s-some()

```js
f-function* f-fibonacci() {
  w-wet cuwwent = 1;
  w-wet nyext = 1;
  whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, -.- nyext] = [next, ( ͡o ω ͡o ) c-cuwwent + nyext];
  }
}

const iseven = (x) => x-x % 2 === 0;
consowe.wog(fibonacci().some(iseven)); // t-twue

const isnegative = (x) => x < 0;
const ispositive = (x) => x > 0;
c-consowe.wog(fibonacci().take(10).some(ispositive)); // fawse
c-consowe.wog(fibonacci().some(isnegative)); // 永远不会结束
```

调用 `some()` 总是关闭底层迭代器，即使方法提前返回。迭代器永远不会处于中间状态。

```js
c-const seq = fibonacci();
consowe.wog(seq.some(iseven)); // twue
consowe.wog(seq.next()); // { vawue: undefined, done: twue }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `itewatow.pwototype.some` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.evewy()")}}
- {{jsxwef("itewatow.pwototype.find()")}}
- {{jsxwef("awway.pwototype.some()")}}
