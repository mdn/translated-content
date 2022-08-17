---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
---
{{JSRef}}

**`map()`** 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

{{EmbedInteractiveExample("pages/js/array-map.html")}}

## 语法

```js
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array
}[, thisArg])
```

### 参数

- `callback`

  - : 生成新数组元素的函数，使用三个参数：

    - `currentValue`
      - : `callback` 数组中正在处理的当前元素。
    - `index`{{optional_inline}}
      - : `callback` 数组中正在处理的当前元素的索引。
    - `array`{{optional_inline}}
      - : `map` 方法调用的数组。

- `thisArg`{{optional_inline}}
  - : 执行 `callback` 函数时值被用作`this`。

### 返回值

一个由原数组每个元素执行回调函数的结果组成的新数组。

## 描述

`map` 方法会给原数组中的每个元素都按顺序调用一次 `callback` 函数。`callback` 每次执行后的返回值（包括 {{jsxref("undefined")}}）组合起来形成一个新数组。 `callback` 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 `delete` 删除的索引则不会被调用。

因为`map`生成一个新数组，当你不打算使用返回的新数组却使用`map`是违背设计初衷的，请用[`forEach`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)或者[`for-of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)替代。你不该使用`map`: A) 你不打算使用返回的新数组，或/且 B) 你没有从回调函数中返回值。

`callback` 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。

如果 `thisArg` 参数提供给`map`，则会被用作回调函数的`this`值。否则 {{jsxref("undefined")}} 会被用作回调函数的`this`值。`this`的值最终相对于`callback`函数的可观察性是依据[the usual rules for determining the this seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this)决定的

`map` 不修改调用它的原数组本身（当然可以在 `callback` 执行时改变原数组）

`map` 方法处理数组元素的范围是在 `callback` 方法第一次调用之前就已经确定了。调用`map`方法之后追加的数组元素不会被`callback`访问。如果存在的数组元素改变了，那么传给`callback`的值是`map`访问该元素时的值。在`map`函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。

根据规范中定义的算法，如果被 map 调用的数组是离散的，新数组将也是离散的保持相同的索引为空。

## 示例

### 求数组中每个元素的平方根

下面的代码创建了一个新数组，值为原数组中对应数字的平方根。

```js
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots 的值为 [1, 2, 3], numbers 的值仍为 [1, 4, 9]
```

### 使用 map 重新格式化数组中的对象

以下代码使用一个包含对象的数组来重新创建一个格式化后的数组。

```js
var kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(function(obj) {
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});

// reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}],

// kvArray 数组未被修改：
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```

### 使用一个包含一个参数的函数来 mapping(构建) 一个数字数组

下面的代码表示了当函数需要一个参数时 map 的工作方式。当 map 循环遍历原始数组时，这个参数会自动被分配成数组中对应的每个元素。

```js
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

// doubles 数组的值为： [2, 8, 18]
// numbers 数组未被修改： [1, 4, 9]
```

### 一般的`map` 方法

下面的例子演示如何在一个 {{jsxref("String")}} 上使用 map 方法获取字符串中每个字符所对应的 ASCII 码组成的数组：

```js
var map = Array.prototype.map
var a = map.call("Hello World", function(x) {
  return x.charCodeAt(0);
})
// a 的值为 [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

### `querySelectorAll 应用`

下面代码展示了如何去遍历用 `querySelectorAll` 得到的动态对象集合。在这里，我们获得了文档里所有选中的选项，并将其打印：

```js
var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
```

### 使用技巧案例

[(原文地址)](http://www.wirfs-brock.com/allen/posts/166)

通常情况下，`map` 方法中的 `callback` 函数只需要接受一个参数，就是正在被遍历的数组元素本身。但这并不意味着 `map` 只给 `callback` 传了一个参数。这个思维惯性可能会让我们犯一个很容易犯的错误。

考虑下例：

```js
["1", "2", "3"].map(parseInt);
```

我们期望输出 `[1, 2, 3]`, 而实际结果是 `[1, NaN, NaN]`.

parseInt 经常被带着一个参数使用，但是这里接受两个。第一个参数是一个表达式而第二个是 callback function 的基，`Array.prototype.map` 传递 3 个参数：

- the element
- the index
- the array

第三个参数被 parseInt 忽视了，但不是第二个。因此可能出现混淆。下面是迭代步骤的简明示例：

```js
// parseInt(string, radix) -> map(parseInt(value, index))
/*  first iteration (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/*  third iteration (index is 2): */ parseInt("3", 2); // NaN
```

下面让我们来讨论解决方案：

```js
function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
['1', '2', '3'].map( str => parseInt(str) );

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
// For comparison, if we use parseInt() on the array above:
['1.1', '2.2e2', '3e300'].map( str => parseInt(str) ); // [1, 2, 3]
```

一个 map 方法调用 parseInt 作为一个参数的等效输出运行如下：

```js
var xs = ['10', '10', '10'];

xs = xs.map(parseInt);

console.log(xs);  // 输出结果为：[10, NaN, 2]
// Actual result of 10,NaN,2 may be unexpected based on the above description.
```

### Mapping 含 undefined 的数组

当返回 undefined 或没有返回任何内容时：

```js
var numbers = [1, 2, 3, 4];
var filteredNumbers = numbers.map(function(num, index) {
  if(index < 3) {
     return num;
  }
});
//index goes from 0,so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
```

## Polyfill

`map` was added to the ECMA-262 standard in the 5th edition; as such it may not be present in all implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of `map` in implementations which do not natively support it. This algorithm is exactly the one specified in ECMA-262, 5th edition, assuming {{jsxref("Object")}}, {{jsxref("TypeError")}}, and {{jsxref("Array")}} have their original values and that `callback.call` evaluates to the original value of `{{jsxref("Function.prototype.call")}}`.

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: https://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

  Array.prototype.map = function(callback/*, thisArg*/) {

    var T, A, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this|
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len)
    //    where Array is the standard built-in constructor with that name and
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal
        //     method of callback with T as the this value and argument
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map")}} object
- {{jsxref("Array.from()")}}
