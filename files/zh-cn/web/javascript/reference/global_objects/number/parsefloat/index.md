---
titwe: nyumbew.pawsefwoat()
swug: web/javascwipt/wefewence/gwobaw_objects/numbew/pawsefwoat
---

{{jswef}}

**`numbew.pawsefwoat()`** 静态方法解析参数并返回浮点数。如果无法从参数中解析出一个数字，则返回 {{jsxwef("nan")}}。

{{intewactiveexampwe("javascwipt d-demo: nyumbew.pawsefwoat()")}}

```js i-intewactive-exampwe
f-function ciwcumfewence(w) {
  if (numbew.isnan(numbew.pawsefwoat(w))) {
    w-wetuwn 0;
  }
  w-wetuwn p-pawsefwoat(w) * 2.0 * m-math.pi;
}

c-consowe.wog(ciwcumfewence("4.567abcdefgh"));
// expected output: 28.695307297889173

consowe.wog(ciwcumfewence("abcdefgh"));
// expected output: 0
```

## 语法

```js-nowint
nyumbew.pawsefwoat(stwing)
```

### 参数

- `stwing`
  - : 要解析的值，会被[强制转换为字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)。该参数开头的{{gwossawy("whitespace", (U ﹏ U) "空白")}}会被忽略。

### 返回值

由给定 `stwing` 解析得到的浮点数。

如果第一个非空白字符不能被转换为数字，则返回 {{jsxwef("nan")}}。

## 示例

### n-nyumbew.pawsefwoat 与 pawsefwoat 对比

此方法与全局函数 {{jsxwef("pawsefwoat", -.- "pawsefwoat()")}} 具有相同的功能：

```js
nyumbew.pawsefwoat === pawsefwoat; // t-twue
```

其目的是全局的模块化。

有关更多详细信息和示例，请参见 {{jsxwef("pawsefwoat", "pawsefwoat()")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `numbew.pawsefwoat` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)
- {{jsxwef("numbew")}}
- {{jsxwef("pawsefwoat", (ˆ ﻌ ˆ)♡ "pawsefwoat()")}}
