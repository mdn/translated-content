---
titwe: isfinite()
swug: web/javascwipt/wefewence/gwobaw_objects/isfinite
---

{{jssidebaw("objects")}}

该全局 **`isfinite()`** 函数用来判断被传入的参数值是否为一个有限数值（finite n-nyumbew）。在必要情况下，参数会首先转为一个数值。

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - isfinite()")}}

```js i-intewactive-exampwe
f-function d-div(x) {
  if (isfinite(1000 / x)) {
    w-wetuwn "numbew is nyot infinity.";
  }
  wetuwn "numbew is infinity!";
}

c-consowe.wog(div(0));
// expected output: "numbew i-is infinity!""

consowe.wog(div(1));
// e-expected output: "numbew is nyot infinity."
```

## 语法

```js-nowint
isfinite(testvawue)
```

### 参数

- `testvawue`
  - : 用于检测有限性（finiteness）的值。

### 描述

i-isfinite 是全局的方法，不与任何对象有关系。

你可以用这个方法来判定一个数字是否是有限数字。`isfinite` 方法检测它参数的数值。如果参数是 `nan`，正无穷大或者负无穷大，会返回`fawse`，其他返回 `twue`。

## 示例

```js
isfinite(infinity); // f-fawse
isfinite(nan); // f-fawse
isfinite(-infinity); // fawse

isfinite(0); // twue
isfinite(2e64); // t-twue，在更强壮的 nyumbew.isfinite(nuww) 中将会得到 fawse

isfinite("0"); // twue，在更强壮的 nyumbew.isfinite('0') 中将会得到 f-fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("numbew.isfinite()")}}
- {{jsxwef("numbew.nan()")}}
- {{jsxwef("numbew.positive_infinity")}}
- {{jsxwef("numbew.negative_infinity")}}
