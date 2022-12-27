---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
---

{{jsSidebar("Objects")}}

全局属性 **`NaN`** 的值表示不是一个数字（Not-A-Number）。

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}

## 描述

`NaN` 是一个*全局对象*的属性。

`NaN` 属性的初始值就是 NaN，和 {{jsxref("Number.NaN")}} 的值一样。在现代浏览器中（ES5 中）， `NaN` 属性是一个不可配置（non-configurable），不可写（non-writable）的属性。但在 ES3 中，这个属性的值是可以被更改的，但是也应该避免覆盖。

编码中很少直接使用到 `NaN`。通常都是在计算失败时，作为 Math 的某个方法的返回值出现的（例如：`Math.sqrt(-1)`）或者尝试将一个字符串解析成数字但失败了的时候（例如：`parseInt("blabla")`）。

### 判断一个值是否是 `NaN`

`NaN` 如果通过 `==`、 `!=`、 `===`、以及 `!==` 与其他任何值比较都将不相等 -- 包括与其他 `NaN` 值进行比较。必须使用 {{jsxref("Number.isNaN()")}} 或 {{jsxref("Global_Objects/isNaN", "isNaN()")}} 函数。在执行自比较之中：也只有 `NaN` 不等于它自己。

```js
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
```

但是，请注意 `isNaN()` 和 `Number.isNaN()` 之间的区别：如果当前值是 `NaN`，或者将其强制转换为数字后将是 `NaN`，则前者将返回 `true`。而后者仅当值当前为 `NaN` 时才为 `true`：

```js
isNaN('hello world');        // true
Number.isNaN('hello world'); // false
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN", "isNaN()")}}
