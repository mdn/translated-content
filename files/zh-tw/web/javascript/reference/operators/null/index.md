---
title: 'null'
slug: Web/JavaScript/Reference/Operators/null
original_slug: Web/JavaScript/Reference/Global_Objects/null
---

{{jsSidebar("Objects")}}

The value `null` represents the intentional absence of any object value. It is one of JavaScript's {{Glossary("Primitive", "primitive values")}}.

## 語法

```plain
null
```

## 描述

The value `null` is written with a literal, `null` (it's not an identifier for a property of the global object like {{jsxref("Global_Objects/undefined","undefined")}} can be). In APIs, `null` is often retrieved in place where an object can be expected but no object is relevant. When checking for null or undefined beware of the [differences between equality (==) and identity (===) operators](/zh-TW/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) (type-conversion is performed with the former).

```js
// foo does not exist. It is not defined and has never been initialized:
> foo
"ReferenceError: foo is not defined"

// foo is known to exist now but it has no type or value:
> var foo = null; foo
"null"
```

### Difference between `null` and `undefined`

```js
typeof null        // object (bug in ECMAScript, should be null)
typeof undefined   // undefined
null === undefined // false
null  == undefined // true
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("undefined")}}
- {{jsxref("NaN")}}
