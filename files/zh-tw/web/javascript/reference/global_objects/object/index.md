---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
---

{{JSRef}}

**`Object`** 建構式可用於建立物件包裝（object wrapper）。

## 語法

```plain
// Object initialiser or literal
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// Called as a constructor
new Object([value])
```

### 參數

- `nameValuePair1, nameValuePair2, ... nameValuePairN`
  - : Pairs of names (strings) and values (any value) where the name is separated from the value by a colon.
- `value`
  - : 任意值。

## 描述

The `Object` constructor creates an object wrapper for the given value. If the value is {{jsxref("null")}} or {{jsxref("undefined")}}, it will create and return an empty object, otherwise, it will return an object of a Type that corresponds to the given value. If the value is an object already, it will return the value.

When called in a non-constructor context, `Object` behaves identically to `new Object()`.

也可以參考 [object initializer / literal syntax](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## `Object` 建構式屬性

- `Object.length`
  - : Has a value of 1.
- {{jsxref("Object.prototype")}}
  - : Allows the addition of properties to all objects of type Object.

## `Object` 建構式方法

- {{jsxref("Object.assign()")}}
  - : Creates a new object by copying the values of all enumerable own properties from one or more source objects to a target object.
- {{jsxref("Object.create()")}}
  - : Creates a new object with the specified prototype object and properties.
- {{jsxref("Object.defineProperty()")}}
  - : Adds the named property described by a given descriptor to an object.
- {{jsxref("Object.defineProperties()")}}
  - : Adds the named properties described by the given descriptors to an object.
- {{jsxref("Object.entries()")}} {{experimental_inline}}
  - : Returns an array of a given object's own enumerable property `[key, value]` pairs.
- {{jsxref("Object.freeze()")}}
  - : Freezes an object: other code can't delete or change any properties.
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Returns a property descriptor for a named property on an object.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Returns an object containing all own property descriptors for an object.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Returns an array containing the names of all of the given object's **own** enumerable and non-enumerable properties.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Returns an array of all symbol properties found directly upon a given object.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Returns the prototype of the specified object.
- {{jsxref("Object.is()")}}
  - : Compares if two values are distinguishable (ie. the same)
- {{jsxref("Object.isExtensible()")}}
  - : Determines if extending of an object is allowed.
- {{jsxref("Object.isFrozen()")}}
  - : Determines if an object was frozen.
- {{jsxref("Object.isSealed()")}}
  - : Determines if an object is sealed.
- {{jsxref("Object.keys()")}}
  - : Returns an array containing the names of all of the given object's **own** enumerable properties.
- {{jsxref("Object.preventExtensions()")}}
  - : Prevents any extensions of an object.
- {{jsxref("Object.seal()")}}
  - : Prevents other code from deleting properties of an object.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Sets the prototype (i.e., the internal `[[Prototype]]` property)
- {{jsxref("Object.values()")}} {{experimental_inline}}
  - : Returns an array of a given object's own enumerable values.

## `Object` 物件實體與 `Object` 原型物件

All objects in JavaScript are descended from `Object`; all objects inherit methods and properties from {{jsxref("Object.prototype")}}, although they may be overridden. For example, other constructors' prototypes override the `constructor` property and provide their own `toString()` methods. Changes to the `Object` prototype object are propagated to all objects unless the properties and methods subject to those changes are overridden further along the prototype chain.

### 屬性

{{page('/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', '屬性') }}

### 方法

{{page('/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype', '方法') }}

## 範例

### Using `Object` given `undefined` and `null` types

下面例子儲存一個空物件至變數 o

```js
var o = new Object();
```

```js
var o = new Object(undefined);
```

```js
var o = new Object(null);
```

### Using `Object` to create `Boolean` objects

下面例子儲存 {{jsxref("Boolean")}} 物件在 `o`:

```js
// equivalent to o = new Boolean(true);
var o = new Object(true);
```

```js
// equivalent to o = new Boolean(false);
var o = new Object(Boolean());
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Object initializer](/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer)
