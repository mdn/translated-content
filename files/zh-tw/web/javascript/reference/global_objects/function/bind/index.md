---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
---

{{JSRef}}

**`bind()`** 方法，會建立一個新函式。該函式被呼叫時，會將 `this` 關鍵字設為給定的參數，並在呼叫時，帶有提供之前，給定順序的參數。

## 語法

```js-nolint
fun.bind(thisArg[, arg1[, arg2[, ...]]])
```

### 參數

- `thisArg`
  - : The value to be passed as the `this` parameter to the target function when the bound function is called. The value is ignored if the bound function is constructed using the {{jsxref("Operators/new", "new")}} operator.
- `arg1, arg2, ...`
  - : Arguments to prepend to arguments provided to the bound function when invoking the target function.

### 回傳值

A copy of the given function with the specified **`this`** value and initial arguments.

## 敘述

**bind()** 函式建立了一個新的**綁定函式（BF）**。**BF** 是個包裝了原有函式物件的 **exotic function object**（**ECMAScript 2015** 的術語）。通常，呼叫 **BF** 會執行該 **wrapped function**。**BF** 含有以下內部屬性：

- **\[\[BoundTargetFunction]]** - the wrapped function object;
- **\[\[BoundThis]]** - the value that is always passed as **this** value when calling the wrapped function.
- **\[\[BoundArguments]]** - a list of values whose elements are used as the first arguments to any call to the wrapped function.
- **\[\[Call]]** - executes code associated with this object. Invoked via a function call expression. The arguments to the internal method are a **this** value and a list containing the arguments passed to the function by a call expression.

When bound function is called, it calls internal method **\[\[Call]]** on **\[\[BoundTargetFunction]],** with following arguments **Call(_boundThis_, _args_).** Where, **_boundThis_** is **\[\[BoundThis]]**, **args** is **\[\[BoundArguments]]** followed by the arguments passed by the function call.

A bound function may also be constructed using the [`new`](/zh-TW/docs/Web/JavaScript/Reference/Operators/new) operator: doing so acts as though the target function had instead been constructed. The provided **`this`** value is ignored, while prepended arguments are provided to the emulated function.

## 範例

### 建立綁定函式

The simplest use of `bind()` is to make a function that, no matter how it is called, is called with a particular **`this`** value. A common mistake for new JavaScript programmers is to extract a method from an object, then to later call that function and expect it to use the original object as its `this` (e.g. by using that method in callback-based code). Without special care, however, the original object is usually lost. Creating a bound function from the function, using the original object, neatly solves this problem:

```js
this.x = 9; // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

### Partially applied functions

The next simplest use of `bind()` is to make a function with pre-specified initial arguments. These arguments (if any) follow the provided `this` value and are then inserted at the start of the arguments passed to the target function, followed by the arguments passed to the bound function, whenever the bound function is called.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList();
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]
```

### 配合 `setTimeout`

By default within {{domxref("window.setTimeout()")}}, the `this` keyword will be set to the {{ domxref("window") }} (or `global`) object. When working with class methods that require `this` to refer to class instances, you may explicitly bind `this` to the callback function, in order to maintain the instance.

```js
function LateBloomer() {
  this.petalCount = Math.floor(Math.random() * 12) + 1;
}

// Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
  console.log("I am a beautiful flower with " + this.petalCount + " petals!");
};

var flower = new LateBloomer();
flower.bloom();
// after 1 second, triggers the 'declare' method
```

### Bound functions used as constructors

> **警告：** This section demonstrates JavaScript capabilities and documents some edge cases of the `bind()` method. The methods shown below are not the best way to do things and probably should not be used in any production environment.

Bound functions are automatically suitable for use with the {{jsxref("Operators/new", "new")}} operator to construct new instances created by the target function. When a bound function is used to construct a value, the provided `this` is ignored. However, provided arguments are still prepended to the constructor call:

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return this.x + "," + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

// not supported in the polyfill below,

// works fine with native bind:

var YAxisPoint = Point.bind(null, 0 /*x*/);

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true
```

Note that you need do nothing special to create a bound function for use with {{jsxref("Operators/new", "new")}}. The corollary is that you need do nothing special to create a bound function to be called plainly, even if you would rather require the bound function to only be called using {{jsxref("Operators/new", "new")}}.

```js
// Example can be run directly in your JavaScript console
// ...continuing from above

// Can still be called as a normal function
// (although usually this is undesired)
YAxisPoint(13);

emptyObj.x + "," + emptyObj.y;
// >  '0,13'
```

If you wish to support the use of a bound function only using {{jsxref("Operators/new", "new")}}, or only by calling it, the target function must enforce that restriction.

### Creating shortcuts

`bind()` is also helpful in cases where you want to create a shortcut to a function which requires a specific **`this`** value.

Take {{jsxref("Array.prototype.slice")}}, for example, which you want to use for converting an array-like object to a real array. You could create a shortcut like this:

```js
var slice = Array.prototype.slice;

// ...

slice.apply(arguments);
```

With `bind()`, this can be simplified. In the following piece of code, `slice` is a bound function to the {{jsxref("Function.prototype.apply()", "apply()")}} function of {{jsxref("Function.prototype")}}, with the **`this`** value set to the {{jsxref("Array.prototype.slice()", "slice()")}} function of {{jsxref("Array.prototype")}}. This means that additional `apply()` calls can be eliminated:

```js
// same as "slice" in the previous example
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
```

## Polyfill

You can partially work around this by inserting the following code at the beginning of your scripts, allowing use of much of the functionality of `bind()` in implementations that do not natively support it.

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError(
        "Function.prototype.bind - what is trying to be bound is not callable",
      );
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () {},
      fBound = function () {
        return fToBind.apply(
          this instanceof fNOP ? this : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments)),
        );
      };

    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
```

Some of the many differences (there may well be others, as this list does not seriously attempt to be exhaustive) between this algorithm and the specified algorithm are:

- The partial implementation relies on {{jsxref("Array.prototype.slice()")}}, {{jsxref("Array.prototype.concat()")}}, {{jsxref("Function.prototype.call()")}} and {{jsxref("Function.prototype.apply()")}}, built-in methods to have their original values.
- The partial implementation creates functions that do not have immutable "poison pill" {{jsxref("Function.caller", "caller")}} and `arguments` properties that throw a {{jsxref("Global_Objects/TypeError", "TypeError")}} upon get, set, or deletion. (This could be added if the implementation supports {{jsxref("Object.defineProperty")}}, or partially implemented \[without throw-on-delete behavior] if the implementation supports the [`Object.prototype.__defineGetter__()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) and [`Object.prototype.__defineSetter__()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) extensions.)
- The partial implementation creates functions that have a `prototype` property. (Proper bound functions have none.)
- The partial implementation creates bound functions whose {{jsxref("Function.length", "length")}} property does not agree with that mandated by ECMA-262: it creates functions with length 0, while a full implementation, depending on the length of the target function and the number of pre-specified arguments, may return a non-zero length.

If you choose to use this partial implementation, **you must not rely on those cases where behavior deviates from ECMA-262, 5th edition!** With some care, however (and perhaps with additional modification to suit specific needs), this partial implementation may be a reasonable bridge to the time when `bind()` is widely implemented according to the specification.

Please check <https://github.com/Raynos/function-bind> for a more thorough solution!

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 相關連結

- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions", "", 1)}}
