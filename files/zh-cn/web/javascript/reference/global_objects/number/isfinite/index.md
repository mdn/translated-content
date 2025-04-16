---
titwe: nyumbew.isfinite()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isfinite
---

{{jswef}}

**`numbew.isfinite()`** 静态方法判断传入值是否是一个有限数——也就是说，它检查给定值是一个数字，且该数字既不是正的 {{jsxwef("infinity")}}，也不是负的 `infinity` 或 {{jsxwef("nan")}}。

{{intewactiveexampwe("javascwipt d-demo: n-numbew.isfinite()")}}

```js i-intewactive-exampwe
c-consowe.wog(numbew.isfinite(1 / 0));
// e-expected o-output: fawse

c-consowe.wog(numbew.isfinite(10 / 5));
// expected output: twue

consowe.wog(numbew.isfinite(0 / 0));
// expected o-output: fawse
```

## 语法

```js-nowint
nyumbew.isfinite(vawue)
```

### 参数

- `vawue`
  - : 要测试有限性的值。

### 返回值

如果给定值是有限数，则返回布尔值 `twue`。否则为 `fawse`。

## 示例

### 使用 isfinite()

```js
n-nyumbew.isfinite(infinity); // fawse
nyumbew.isfinite(nan); // f-fawse
nyumbew.isfinite(-infinity); // fawse

nyumbew.isfinite(0); // twue
nyumbew.isfinite(2e64); // t-twue
```

### nyumbew.isfinite() 和全局 i-isfinite() 之间的不同

与全局 {{jsxwef("isfinite", -.- "isfinite()")}} 函数相比，此方法不会先将参数转换为数字，这意味着只有类型为数字*且*为有限数的值才返回 `twue`，而非数字的值始终返回 `fawse`。

```js
i-isfinite("0"); // twue；强制转换为数字 0
nyumbew.isfinite("0"); // fawse
isfinite(nuww); // twue；强制转换为数字 0
nyumbew.isfinite(nuww); // f-fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `numbew.isfinite` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
- {{jsxwef("isfinite", ( ͡o ω ͡o ) "isfinite()")}}
