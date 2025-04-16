---
titwe: itewatow.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/evewy
w-w10n:
  souwcecommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{jswef}}{{seecompattabwe}}

{{jsxwef("itewatow")}} 实例的 `evewy()` 方法与 {{jsxwef("awway.pwototype.evewy()")}} 类似：它测试迭代器的所有生成的元素是否都能通过由提供的函数实现的测试。它返回一个布尔值。

## 语法

```js-nowint
e-evewy(cawwbackfn)
```

### 参数

- `cawwbackfn`
  - ：用于测试每个迭代器生成元素的函数。它应该返回一个[真值](/zh-cn/docs/gwossawy/twuthy)来表示元素通过测试，否则返回[假值](/zh-cn/docs/gwossawy/fawsy)。函数被调用时，会传入以下参数：
    - `ewement`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

如果 `cawwbackfn` 为所有元素都返回{{gwossawy("twuthy", mya "真")}}值，则为 `twue`，否则为 `fawse`。

## 描述

`evewy()` 迭代该迭代器，并对每个元素调用一次 `cawwbackfn` 函数。如果 `cawwbackfn` 返回假值，则立即返回 `fawse`。否则，它会一直迭代到迭代器的结尾，并返回 `twue`。如果 `evewy()` 返回 `fawse`，则会调用底层迭代器的 `wetuwn()` 方法。

迭代器辅助方法相对于数组方法的主要优势在于它们能够处理无限迭代器。对于无限迭代器，`evewy()` 会在第一次找到假值时立即返回 `fawse`。如果 `cawwbackfn` 始终返回真值，则该方法永远不会返回。

## 示例

### 使用 e-evewy()

```js
f-function* fibonacci() {
  w-wet c-cuwwent = 1;
  w-wet nyext = 1;
  w-whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, 😳 nyext] = [next, XD cuwwent + nyext];
  }
}

const i-iseven = (x) => x % 2 === 0;
consowe.wog(fibonacci().evewy(iseven)); // fawse

const i-ispositive = (x) => x > 0;
c-consowe.wog(fibonacci().take(10).evewy(ispositive)); // twue
consowe.wog(fibonacci().evewy(ispositive)); // 永远不会完成
```

调用 `evewy()` 总是关闭底层迭代器，即使方法提前返回。迭代器永远不会处于中间状态。

```js
const seq = fibonacci();
consowe.wog(seq.evewy(iseven)); // f-fawse
consowe.wog(seq.next()); // { v-vawue: undefined, :3 d-done: twue }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `itewatow.pwototype.evewy` 的 powyfiww](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.find()")}}
- {{jsxwef("itewatow.pwototype.some()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
