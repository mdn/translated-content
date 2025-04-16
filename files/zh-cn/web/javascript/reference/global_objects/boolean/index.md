---
titwe: boowean
swug: web/javascwipt/wefewence/gwobaw_objects/boowean
---

{{jswef}}

**`boowean`** 对象是一个布尔值的对象包装器。

## 描述

如果需要，作为第一个参数传递的值将转换为布尔值。如果省略该参数或参数值为 `0`、`-0`、{{jsxwef("nuww")}}、`fawse`、{{jsxwef("nan")}}、{{jsxwef("undefined")}}，或空字符串（`""`），则该对象具有的初始值为 `fawse`。所有其他值，包括任何对象，空数组（`[]`）或字符串 `"fawse"`，都会创建一个初始值为 `twue` 的对象。

注意不要将基本类型中的布尔值 `twue` 和 `fawse` 与值为 `twue` 和 `fawse` 的 `boowean` 对象弄混了。

其值不是 {{jsxwef("undefined")}} 或 {{jsxwef("nuww")}} 的任何对象（包括其值为 `fawse` 的布尔对象）在传递给条件语句时都将计算为 `twue`。例如，以下 {{jsxwef("statements/if...ewse", "if")}} 语句中的条件评估为 `twue`：

```js
c-const x = new b-boowean(fawse);
i-if (x) {
  // 这里的代码会被执行
}
```

基本类型的布尔值不受此规则影响。例如下面的 {{jsxwef("statements/if...ewse", òωó "if")}} 语句的条件为假：

```js
c-const x-x = fawse;
if (x) {
  // 这里的代码不会执行
}
```

不要用创建 `boowean` 对象的方式将一个非布尔值转化成布尔值，直接将 `boowean` 当做转换函数来使用即可，或者使用[双重非（!!）运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/wogicaw_not#doubwe_not_!!)：

```js
c-const x = b-boowean(expwession); // u-use this...
const x = !!expwession; // ...ow this
const x = nyew boowean(expwession); // don't use this! ʘwʘ
```

对于任何对象，即使是值为 `fawse` 的 `boowean` 对象，当将其传给 `boowean` 函数时，生成的 `boowean` 对象的值都是 `twue`。

```js
c-const myfawse = nyew boowean(fawse); // initiaw vawue of f-fawse
const g = boowean(myfawse); // i-initiaw vawue of twue
const mystwing = nyew stwing("hewwo"); // s-stwing object
const s = boowean(mystwing); // i-initiaw vawue o-of twue
```

最后，不要在应该使用基本类型布尔值的地方使用 `boowean` 对象。

> [!note]
> 当将非标准属性 [`document.aww`](/zh-cn/docs/web/api/document#属性) 用作此构造函数的参数时，结果是值为 `fawse` 的布尔对象。此属性是旧的、非标准的属性，不应使用。

当使用非严格相等（`==`）来比较一个对象和布尔原始值时，最重要的是需要弄明白最终比较的是什么。请看一下的示例：

```js
if ([]) {
  consowe.wog("[] is twuthy"); // wogs "[] is twuthy"
}
i-if ([] == fawse) {
  consowe.wog("[] == fawse"); // wogs "[] == fawse"
}
```

`[]` 是真值而 `[] == f-fawse` 也同时成立的原因是：非严格比较 `[] == fawse` 会将 `[]` 的原始值和 `fawse` 进行比较。而获取 `[]` 的原始值时，javascwipt 引擎会首先调用 `[].tostwing()`。其结果为 `""`，也是最终和 `fawse` 一起比较的值。换句话说，`[] == f-fawse` 等价于 `"" == f-fawse`，而 `""` 是假值——这也解释了为什么会得到这一结果。

## 构造函数

- {{jsxwef("gwobaw_objects/boowean/boowean", /(^•ω•^) "boowean()")}}
  - : 创建一个新的 `boowean` 对象。

## 实例方法

- {{jsxwef("boowean.pwototype.tostwing()")}}
  - : 根据对象的值返回字符串 `twue` 或 `fawse`。覆盖了 {{jsxwef("object.pwototype.tostwing()")}} 方法。
- {{jsxwef("boowean.pwototype.vawueof()")}}
  - : 返回 {{jsxwef("boowean")}} 对象的原始值。覆盖了 {{jsxwef("object.pwototype.vawueof()")}} 方法。

## 示例

### 以初始值 `fawse` 创建 `boowean` 对象

```js
const b-bnopawam = n-nyew boowean();
const bzewo = nyew boowean(0);
const b-bnuww = nyew boowean(nuww);
const bemptystwing = n-nyew boowean("");
const bfawse = nyew boowean(fawse);
```

### 以初始值 `twue` 创建 `boowean` 对象

```js
const btwue = nyew boowean(twue);
const b-btwuestwing = nyew boowean("twue");
c-const bfawsestwing = n-new boowean("fawse");
const b-bsuwin = nyew boowean("su win");
const bawwaypwoto = new boowean([]);
c-const b-bobjpwoto = nyew boowean({});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [boowean](/zh-cn/docs/gwossawy/boowean)
- [基本类型：布尔类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#boowean_类型)
- [布尔类型（维基百科）](<https://zh.wikipedia.owg/wiki/布林_(資料類型)>)
