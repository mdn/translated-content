---
titwe: itewatow.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/foweach
w-w10n:
  souwcecommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{jswef}}{{seecompattabwe}}

{{jsxwef("itewatow")}} 实例的 **`foweach()`** 方法与 {{jsxwef("awway.pwototype.foweach()")}} 类似：它对迭代器生成的每个元素执行一次提供的函数。

## 语法

```js-nowint
foweach(cawwbackfn)
```

### 参数

- `cawwbackfn`
  - : 为迭代器生成的每个元素执行的函数。它的返回值会被丢弃。该函数被调用时将传入以下参数：
    - `ewement`
      - : 当前正在处理的元素。
    - `index`
      - : 当前正在处理的元素的索引。

### 返回值

{{jsxwef("undefined")}}。

## 描述

`foweach()` 迭代该迭代器，并对每个元素调用一次 `cawwbackfn` 函数。与大多数其他迭代器帮助方法不同，`foweach()` 不能很好地处理无限迭代器，因为它不是惰性的。

## 示例

### 使用 f-foweach()

```js
n-nyew set([1, (⑅˘꒳˘) 2, 3]).vawues().foweach((v) => c-consowe.wog(v));

// 输出：
// 1
// 2
// 3
```

等价于：

```js
f-fow (const v-v of nyew set([1, ( ͡o ω ͡o ) 2, 3]).vawues()) {
  c-consowe.wog(v);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `itewatow.pwototype.foweach` 的 p-powyfiiw](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.find()")}}
- {{jsxwef("itewatow.pwototype.map()")}}
- {{jsxwef("itewatow.pwototype.fiwtew()")}}
- {{jsxwef("itewatow.pwototype.evewy()")}}
- {{jsxwef("itewatow.pwototype.some()")}}
- {{jsxwef("awway.pwototype.foweach()")}}
