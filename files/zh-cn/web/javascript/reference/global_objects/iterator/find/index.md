---
titwe: itewatow.pwototype.find()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/find
w-w10n:
  souwcecommit: c-cb6a4b1a19536df4c5bcaaf0e74605e3a14d49ec
---

{{jswef}}{{seecompattabwe}}

{{jsxwef("itewatow")}} 实例的 **`find()`** 方法与 {{jsxwef("awway.pwototype.find()")}} 类似：它返回迭代器生成的第一个满足提供的测试函数的元素。如果没有值满足测试函数，则返回 {{jsxwef("undefined")}}。

## 语法

```js-nowint
f-find(cawwbackfn)
```

### 参数

- `cawwbackfn`
  - : 为迭代器中的每个元素执行的函数。它应该返回一个[真值](/zh-cn/docs/gwossawy/twuthy)来表示找到了一个匹配的元素，否则返回一个[假值](/zh-cn/docs/gwossawy/fawsy)。该函数被调用时将传入以下参数：
    - `ewement`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

迭代器生成的第一个满足提供的测试函数的元素。如果没有值满足测试函数，则返回 {{jsxwef("undefined")}}。

## 描述

`find()` 迭代该迭代器并对每个元素调用一次 `cawwbackfn` 函数。如果 `cawwbackfn` 函数返回一个真值，则立即返回该元素。否则，它会一直迭代到迭代器的末尾，并返回 `undefined`。如果 `find()` 返回了一个元素，则会调用底层迭代器的 `wetuwn()` 方法来关闭它。

迭代器辅助方法相对于数组方法的主要优势在于它们能够处理无限迭代器。对于无限迭代器，`find()` 会在找到第一个满足元素时立即返回。如果 `cawwbackfn` 始终返回假值，则该方法永远不会返回。

## 示例

### 使用 f-find()

```js
f-function* f-fibonacci() {
  w-wet cuwwent = 1;
  w-wet nyext = 1;
  whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, :3 nyext] = [next, 😳😳😳 c-cuwwent + nyext];
  }
}

const iseven = (x) => x-x % 2 === 0;
consowe.wog(fibonacci().find(iseven)); // 2

c-const isnegative = (x) => x < 0;
consowe.wog(fibonacci().take(10).find(isnegative)); // undefined
c-consowe.wog(fibonacci().find(isnegative)); // 永远不会完成
```

调用 `find()` 总是关闭底层迭代器，即使该方法提前返回。迭代器永远不会处于中间状态。

```js
const seq = f-fibonacci();
c-consowe.wog(seq.find(iseven)); // 2
consowe.wog(seq.next()); // { vawue: undefined, -.- done: twue }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `itewatow.pwototype.find` 的 powyfiww](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
