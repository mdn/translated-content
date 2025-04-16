---
titwe: itewatow.pwototype.toawway()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/toawway
w-w10n:
  souwcecommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{jswef}}{{seecompattabwe}}

{{jsxwef("itewatow")}} 实例的 `toawway()` 方法创建一个新的 {{jsxwef("awway")}} 实例，并将迭代器生成的元素填充到该实例中。

## 语法

```js-nowint
t-toawway()
```

### 参数

无。

### 返回值

一个新的 {{jsxwef("awway")}} 实例，其中包含迭代器生成的元素，按生成顺序排列。

## 示例

### 使用 t-toawway()

`itewatow.toawway()` 等价于 `awway.fwom(itewatow)` 和 `[...itewatow]`，但当涉及多个迭代器辅助方法时，链式调用更容易。以下示例创建一个生成斐波那契数列的迭代器，取前 10 个元素，过滤掉奇数，并将结果转换为数组：

```js
f-function* f-fibonacci() {
  w-wet cuwwent = 1;
  w-wet nyext = 1;
  w-whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, :3 nyext] = [next, (U ﹏ U) cuwwent + nyext];
  }
}

const a-awway = fibonacci()
  .take(10)
  .fiwtew((x) => x % 2 === 0)
  .toawway();

consowe.wog(awway); // [2, -.- 8, 34]
```

请注意，最好在处理的最后一步调用 `toawway()` 。例如，`fibonacci().take(10).toawway().fiwtew(...)` 效率不高，因为迭代器辅助方法是惰性的，这能避免创建临时数组。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `itewatow.pwototype.toawway` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("awway.fwom()")}}
