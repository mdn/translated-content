---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
---

{{JSRef}}

靜態方法 **`Object.defineProperty()`** 會直接對一個物件定義、或是修改現有的屬性。執行後會回傳定義完的物件。

> **備註：** 這個方法會直接針對 {{jsxref("Object")}} 呼叫建構子（constructor），而不是 `Object` 型別的實例。

{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}

## 語法

```js-nolint
Object.defineProperty(obj, prop, descriptor)
```

### 參數

- `obj`
  - : 要定義屬性的物件。
- `prop`
  - : 要被定義或修改的屬性名字。
- `descriptor`
  - : 要定義或修改物件敘述內容。

### 回傳值

被定義完或修改完屬性的物件。

## 描述

這個函式可以用來增加或修改物件中的屬性定義。在物件建立屬性後，這些屬性同時有被設定預設的設定，才能讓這些屬性被列舉、改變和刪除。而這個函式可以用來改變這些預設的設定。根據預設，被加到物件且使用`Object.defineProperty()`的值都是{{glossary("Immutable")}}。

物件內的屬性描述器（Property descriptor）主要有兩種：資料描述器（data descriptor）與訪問描述器（accessor descriptor）。_資料描述器_（data descriptor）是可以選擇能否覆寫的屬性。_訪問描述器_（accessor descriptor） is a property described by a getter-setter pair of functions. A descriptor must be one of these two flavors; it cannot be both.

data 和 accessor descriptors 皆為物件，兩者共享下面提及的 key：

- `configurable`
  - : `true` 則若且唯若此屬性則將可改變或刪除自相應物件。
    **預設為 `false`**
- `enumerable`
  - : `true` 如果且唯若相應物件被列舉，將會列舉此屬性。
    **預設為 `false`**

一個 data descriptor 還有以下可選的 key：

- `value`
  - : The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).
    **預設 {{jsxref("undefined")}}.**
- `writable`
  - : `true` 則該物件屬性可透過{{jsxref("Operators/Assignment_Operators", "賦予運算子", "", 1)}}改變其值。
    **預設 `false`**

一個 accessor descriptor 也擁有下述之 optional keys:

- `get`
  - : 作為 getter 形式，為屬性存在的函式，如果沒有 getter 的話則回傳 {{jsxref("undefined")}}。函式回傳將用於屬性值。
    **預設 {{jsxref("undefined")}}**
- `set`
  - : 作為 setter 形式，為屬性存在的函式，如果沒有 setter 的話則回傳 {{jsxref("undefined")}}。 The function will receive as only argument the new value being assigned to the property.
    **預設 {{jsxref("undefined")}}**

請注意，這些選項並不一定要是 descriptor 屬性，由原型鍊（prototype chain）繼承的屬性，也會被考慮到。要確保需要凍結（freeze）的 {{jsxref("Object.prototype")}} upfront 預設能被保存，請明確指定所有選項，或把 [`Object.prototype.__proto__`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) 屬性指向 {{jsxref("null")}}。

```js
// using __proto__
var obj = {};
Object.defineProperty(obj, "key", {
  __proto__: null, // no inherited properties
  value: "static", // not enumerable
  // not configurable
  // not writable
  // as defaults
});

// being explicit
Object.defineProperty(obj, "key", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// recycling same object
function withValue(value) {
  var d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null,
    });
  d.value = value;
  return d;
}
// ... and ...
Object.defineProperty(obj, "key", withValue("static"));

// if freeze is available, prevents adding or
// removing the object prototype properties
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);
```

## 範例

If you want to see how to use the `Object.defineProperty` method with a _binary-flags-like_ syntax, see [additional examples](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples).

### 建立屬性

When the property specified doesn't exist in the object, `Object.defineProperty()` creates a new property as described. Fields may be omitted from the descriptor, and default values for those fields are imputed. All of the Boolean-valued fields default to `false`. The `value`, `get`, and `set` fields default to {{jsxref("undefined")}}. A property which is defined without `get`/`set`/`value`/`writable` is called 「generic」 and is 「typed」 as a data descriptor.

```js
var o = {}; // Creates a new object

// Example of an object property added with defineProperty with a data property descriptor
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// 'a' property exists in the o object and its value is 37

// Example of an object property added with defineProperty with an accessor property descriptor
var bValue = 38;
Object.defineProperty(o, "b", {
  get: function () {
    return bValue;
  },
  set: function (newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// 'b' property exists in the o object and its value is 38
// The value of o.b is now always identical to bValue, unless o.b is redefined

// You cannot try to mix both:
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get: function () {
    return 0xdeadbeef;
  },
});
// throws a TypeError: value appears only in data descriptors, get appears only in accessor descriptors
```

### 修改屬性

如果該屬性已經存在, `Object.defineProperty()` 將會根據描述符內的值和物件當前的 configuration 來修改屬性。 如果舊的描述符之 `configurable` 的特徵為 false (屬性為 「non-configurable」), 那除了 `writable` 之外的特徵都將無法修改。 在這個情況，也不可能在 data 和 accessor 屬性類型中來回切換。

如果有一個屬性是 non-configurable, 那它的 `writable` 特徵只能被改變為 `false`.

若嘗試改變 non-configurable property attributes，將會丟出一個 {{jsxref("TypeError")}}，除非當前之值與新值相同。

#### Writable attribute

當 `writable` 屬性特徵被設為 `false`, 此屬性為 「non-writable」. 它將無法被重新賦值。

```js
var o = {}; // Creates a new object

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // logs 37
o.a = 25; // No error thrown (it would throw in strict mode, even if the value had been the same)
console.log(o.a); // logs 37. The assignment didn't work.
```

As seen in the example, trying to write into the non-writable property doesn't change it but doesn't throw an error either.

#### 可列舉 attribute

The `enumerable` property attribute defines whether the property shows up in a {{jsxref("Statements/for...in", "for...in")}} loop and {{jsxref("Object.keys()")}} or not.

```js
var o = {};
Object.defineProperty(o, "a", { value: 1, enumerable: true });
Object.defineProperty(o, "b", { value: 2, enumerable: false });
Object.defineProperty(o, "c", { value: 3 }); // enumerable defaults to false
o.d = 4; // enumerable defaults to true when creating a property by setting it

for (var i in o) {
  console.log(i);
}
// logs 'a' and 'd' (in undefined order)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
```

#### 可設定 attribute

The `configurable` attribute controls at the same time whether the property can be deleted from the object and whether its attributes (other than `writable`) can be changed.

```js
var o = {};
Object.defineProperty(o, "a", {
  get: function () {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", { configurable: true }); // throws a TypeError
Object.defineProperty(o, "a", { enumerable: true }); // throws a TypeError
Object.defineProperty(o, "a", { set: function () {} }); // throws a TypeError (set was undefined previously)
Object.defineProperty(o, "a", {
  get: function () {
    return 1;
  },
}); // throws a TypeError (even though the new get does exactly the same thing)
Object.defineProperty(o, "a", { value: 12 }); // throws a TypeError

console.log(o.a); // logs 1
delete o.a; // Nothing happens
console.log(o.a); // logs 1
```

If the `configurable` attribute of `o.a` had been `true`, none of the errors would be thrown and the property would be deleted at the end.

### 新增多個屬性及賦予初始值

It's important to consider the way default values of attributes are applied. There is often a difference between simply using dot notation to assign a value and using `Object.defineProperty()`, as shown in the example below.

```js
var o = {};

o.a = 1;
// is equivalent to:
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// On the other hand,
Object.defineProperty(o, "a", { value: 1 });
// is equivalent to:
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### Custom Setters and Getters

Example below shows how to implement a self-archiving object. When `temperature` property is set, the `archive` array gets a log entry.

```js
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, "temperature", {
    get: function () {
      console.log("get!");
      return temperature;
    },
    set: function (value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

or

```js
var pattern = {
  get: function () {
    return "I always return this string, whatever you have assigned";
  },
  set: function () {
    this.myname = "this is my name string";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myproperty", pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = "test";
console.log(instance.myproperty); // I always return this string, whatever you have assigned

console.log(instance.myname); // this is my name string
```

## 規格

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Compatibility notes

### Redefining the `length` property of an `Array` object

It is possible to redefine the {{jsxref("Array.length", "length")}} property of arrays, subject to the usual redefinition restrictions. (The {{jsxref("Array.length", "length")}} property is initially non-configurable, non-enumerable, and writable. Thus on an unaltered array, it's possible to change the {{jsxref("Array.length", "length")}} property's value or to make it non-writable. It is not allowed to change its enumerability or configurability, or if it is non-writable to change its value or writability.) However, not all browsers permit this redefinition.

Firefox 4 through 22 will throw a {{jsxref("TypeError")}} on any attempt whatsoever (whether permitted or not) to redefine the {{jsxref("Array.length", "length")}} property of an array.

Versions of Chrome which implement `Object.defineProperty()` in some circumstances ignore a length value different from the array's current {{jsxref("Array.length", "length")}} property. In some circumstances changing writability seems to silently not work (and not throw an exception). Also, relatedly, some array-mutating methods like {{jsxref("Array.prototype.push")}} don't respect a non-writable length.

Versions of Safari which implement `Object.defineProperty()` ignore a `length` value different from the array's current {{jsxref("Array.length", "length")}} property, and attempts to change writability execute without error but do not actually change the property's writability.

Only Internet Explorer 9 and later, and Firefox 23 and later, appear to fully and correctly implement redefinition of the {{jsxref("Array.length", "length")}} property of arrays. For now, don't rely on redefining the {{jsxref("Array.length", "length")}} property of an array to either work, or to work in a particular manner. And even when you _can_ rely on it, [there's really no good reason to do so](http://whereswalden.com/2013/08/05/new-in-firefox-23-the-length-property-of-an-array-can-be-made-non-writable-but-you-shouldnt-do-it/).

### Internet Explorer 8 specific notes

Internet Explorer 8 implemented a `Object.defineProperty()` method that could [only be used on DOM objects](https://msdn.microsoft.com/en-us/library/dd229916%28VS.85%29.aspx). A few things need to be noted:

- Trying to use `Object.defineProperty()` on native objects throws an error.
- Property attributes must be set to some values. The `configurable`, `enumerable` and `writable` attributes should all be set to `true` for data descriptor and `true` for `configurable`, `false` for `enumerable` for accessor descriptor.(?) Any attempt to provide other value(?) will result in an error being thrown.
- Reconfiguring a property requires first deleting the property. If the property isn't deleted, it stays as it was before the reconfiguration attempt.

## 參閱

- [Enumerability and ownership of properties](/zh-TW/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.prototype.watch()")}}
- {{jsxref("Object.prototype.unwatch()")}}
- {{jsxref("Operators/get", "get")}}
- {{jsxref("Operators/set", "set")}}
- {{jsxref("Object.create()")}}
- [Additional `Object.defineProperty` examples](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty/Additional_examples)
- {{jsxref("Reflect.defineProperty()")}}
