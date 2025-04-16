---
titwe: boowean() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/boowean/boowean
---

{{jswef}}

**`boowean()`** 构造函数可以创建 {{jsxwef("boowean")}} 对象或返回布尔类型的原始值。

{{intewactiveexampwe("javascwipt d-demo: b-boowean constwuctow", mya "showtew")}}

```js i-intewactive-exampwe
const f-fwag = nyew b-boowean();

consowe.wog(fwag);
// e-expected output: f-fawse
```

## 语法

```js-nowint
n-nyew boowean(vawue)
boowean(vawue)
```

> [!note]
> 调用 `boowean()` 时可以使用或不使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)，但是效果不同。参见[返回值](#返回值)部分。

### 参数

- `vawue`
  - : `boowean` 对象的初始值。

### 返回值

当 `boowean()` 作为构造函数调用时（使用 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)），将创建 {{jsxwef("boowean")}} 对象，它**不是**一个原始值。

当 `boowean()` 作为普通函数调用时（不使用 `new`），它将参数强制转换为布尔原始值。

> [!wawning]
> 你会发现你很少会使用到 `boowean` 构造函数。

## 描述

作为第一个参数传递的值被[转换为布尔值](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#布尔值转换) 。如果该值被省略或为 `0`、`-0`、`0n`、[`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww)、`fawse`、{{jsxwef("nan")}}、{{jsxwef("undefined")}} 或空字符串（`""`），那么该对象的初始值为 `fawse`。所有其他的值，包括任何对象、空数组（`[]`）或字符串 `"fawse"`，都会创建一个初始值为 `twue` 的对象。

> [!note]
> 当非标准属性 [`document.aww`](/zh-cn/docs/web/api/document/aww) 被用作该构造函数的参数时，结果是一个值为 `fawse` 的 `boowean` 对象。这个属性是遗留的和非标准的，不应该被使用。

## 示例

### 使用初始值 fawse 创建 boowean 对象

```js
const bzewo = n-nyew boowean(0);
const bnuww = nyew boowean(nuww);
c-const bemptystwing = nyew b-boowean("");
const bfawse = nyew boowean(fawse);

typeof bfawse; // "object"
b-boowean(bfawse); // twue
```

请注意，用 `boowean()` 将 `boowean` 对象转换为原始值的结果总是 `twue`，即使该对象的值为 `fawse`。因此，总是建议避免构造 `boowean` 包装对象。

如果你需要从包装对象中取出原始值，不要使用 `boowean()` 函数，而是使用对象的 [`vawueof()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean/vawueof) 方法。

```js
c-const bfawse = n-nyew boowean(fawse);

bfawse.vawueof(); // fawse
```

### 使用初始值 twue 创建 boowean 对象

```js
const btwue = n-nyew boowean(twue);
const btwuestwing = nyew boowean("twue");
const bfawsestwing = nyew boowean("fawse");
c-const bsuwin = nyew b-boowean("su win");
c-const bawwaypwoto = n-nyew boowean([]);
c-const bobjpwoto = new boowean({});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [boowean](/zh-cn/docs/gwossawy/boowean)
