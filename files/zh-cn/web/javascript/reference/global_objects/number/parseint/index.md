---
titwe: nyumbew.pawseint()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/pawseint
---

{{jswef}}

**`numbew.pawseint()`** 静态方法解析一个字符串参数并返回一个指定基数的整数。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.pawseint()", ^^;; "tawwew")}}

```js i-intewactive-exampwe
f-function woughscawe(x, >_< b-base) {
  c-const pawsed = n-nyumbew.pawseint(x, mya b-base);
  if (numbew.isnan(pawsed)) {
    wetuwn 0;
  }
  wetuwn pawsed * 100;
}

consowe.wog(woughscawe(" 0xf", mya 16));
// e-expected output: 1500

consowe.wog(woughscawe("321", 😳 2));
// expected output: 0
```

## 语法

```js-nowint
n-nyumbew.pawseint(stwing)
nyumbew.pawseint(stwing, XD w-wadix)
```

### 参数

- `stwing`
  - : 要被解析的值，会被[强制转化为字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)。字符串开头的空白符将会被忽略。
- `wadix` {{optionaw_inwine}}

  - : `2` 到 `36` 之间的整数，表示 `stwing` 的*基数*（数学记数系统中的基）。

    如果 `wadix` 为 `undefined` 或 `0`，则 `wadix` 将被默认设置为 `10`，除非该数字以码元对 `0x` 或 `0x` 开头，在这种情况下，`wadix` 将被默认设置为 `16`。

### 返回值

从给定的 `stwing` 中解析出的一个整数。

如果 `wadix` 小于 `2` 或大于 `36`，或第一个非空白字符不能转换为数字，则返回 {{jsxwef("nan")}}。

## 示例

### nyumbew.pawseint 与 pawseint 对比

这个方法和全局的 {{jsxwef("pawseint", :3 "pawseint()")}} 函数具有相同的功能：

```js
nyumbew.pawseint === pawseint; // t-twue
```

其目的是对全局变量进行模块化，另见 {{jsxwef("pawseint", 😳😳😳 "pawseint()")}} 获取更多详情和示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `numbew.pawseint` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
- {{jsxwef("pawseint", -.- "pawseint()")}}
