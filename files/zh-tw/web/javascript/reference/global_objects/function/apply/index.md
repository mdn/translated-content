---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
---

{{JSRef}}

`apply()` 方法會呼叫一個以 this 的代表值和一個陣列形式的值組（或是一個 [array-like object](/zh-TW/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)）為參數的函式。

> [!NOTE]
> 這個函式的語法和 {{jsxref("Function.call", "call()")}} 幾乎一樣，最大的不同是 `call()` 接受**一連串的參數**，而 `apply()` 接受一組陣列形式的參數。

## 語法

```js-nolint
fun.apply(thisArg, [argsArray])
```

### 參數

- `thisArg`
  - : 讓 _`fun`_ 呼叫時可以視為 this 的值。注意，這可能並不是最後會在方法裡看見的值：如果這是一個在非 {{jsxref("Strict_mode", "non-strict mode", "", 1)}} 下運作的程式碼，{{jsxref("null")}} 及 {{jsxref("undefined")}} 將會被全域物件取代，而原始類別將被封裝。
- `argsArray`
  - : 一個 array-like 物件 ，定義了 _`fun`_ 要呼叫的一組參數，如果沒有需要提供，可以傳入 {{jsxref("null")}} 或 {{jsxref("undefined")}}。從 ECMAScript 5 開始，這些參數不僅可以是泛型的 array-like 物件，而不一定要是一組陣列。查看下方的[瀏覽器相容性](#瀏覽器相容性)資訊。

### 回傳值

傳入 `this` 值及一組參數後得到的結果。

## 描述

在呼叫一個現存的函式時，你可以傳入不同的 `this` 物件值。this 參考到現在的物件，也就是正在執行的物件。apply 讓你可以只寫一次方法後，讓其他物件也繼承到這個方法，而不用一再重寫。

`apply` 與 {{jsxref("Function.call", "call()")}} 非常相似，不同的是支援的傳入參數類型。使用陣列形式的參數，而不是命名過的接收參數。使用 `apply` 時，你可以選擇使用陣列實字：`fun.apply(this, ['eat', 'bananas']);` 或是 {{jsxref("Array")}} 物件：`fun.apply(this, new Array('eat', 'bananas'))`。

除此之外，你也可以使用 {{jsxref("Functions/arguments", "arguments")}} 代表 `argsArray` 參數。arguments 是在函式裡的區域變數，可用來存取所有沒有特別被所呼叫物件指定的傳入參數。因此，使用 apply 時你不需要知道所呼叫函式的指定參數。使用 `arguments` 把所有參數傳入呼叫的方法裡，而被呼叫的方法會接手處理這些參數。

從 ECMAScript 5th 版本後，也可以使用陣列形式的物件，在實踐上這代表他會擁有 `length` 以及整數範圍 `(0...length-1)` 的屬性。舉例來說，你可以使用 {{domxref("NodeList")}} 或是一個像這樣的自定義屬性：`{ 'length': 2, '0': 'eat', '1': 'bananas' }`。

> [!NOTE]
> 一般瀏覽器，包括 Chrome 14 及 Internet Explorer 9，仍不支援陣列形式的物件，所以會對此丟出一個錯誤。

## 範例

### 使用 `apply` 與建構子鏈結

你可以使用 `apply` 鏈結 {{jsxref("Operators/new", "constructors", "", 1)}} 一個物件，與 Java 相似，如下範例中我們可以建立一個全域的 {{jsxref("Function")}} 方法叫 `construct`，使你可以使用類陣列的物件與建構子去替代參數列表。

```js
Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
```

> [!NOTE]
> 如上範例的 `Object.create()` 方法是屬於比較新的寫法。如需使用閉包的替代方法，請參考以下的範例：
>
> ```js
> Function.prototype.construct = function (aArgs) {
>   var fConstructor = this,
>     fNewConstr = function () {
>       fConstructor.apply(this, aArgs);
>     };
>   fNewConstr.prototype = fConstructor.prototype;
>   return new fNewConstr();
> };
> ```

使用範例：

```js
function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this["property" + nProp] = arguments[nProp];
  }
}

var myArray = [4, "Hello world!", false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1); // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor); // logs 'MyConstructor'
```

> [!NOTE]
> This non-native `Function.construct` method will not work with some native constructors (like {{jsxref("Date")}}, for example). In these cases you have to use the {{jsxref("Function.prototype.bind")}} method (for example, imagine having an array like the following, to be used with {{jsxref("Global_Objects/Date", "Date")}} constructor: `[2012, 11, 4]`; in this case you have to write something like: `new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()` — anyhow this is not the best way to do things and probably should not be used in any production environment).

### 使用 `apply` 於內建的函數

apply 可以巧妙的在某些任務中使用內建函數，否則可能會循環遍歷整個陣列來寫入。如下範例，我們使用 `Math.max/Math.min` 來找出陣列中最大/最小的值。

```js
// min/max number in an array
var numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
var max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], ...)
// or Math.max(5, 6, ...)

var min = Math.min.apply(null, numbers);

// vs. simple loop based algorithm
(max = -Infinity), (min = +Infinity);

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
```

But beware: in using `apply` this way, you run the risk of exceeding the JavaScript engine's argument length limit. The consequences of applying a function with too many arguments (think more than tens of thousands of arguments) vary across engines (JavaScriptCore has hard-coded [argument limit of 65536](https://bugs.webkit.org/show_bug.cgi?id=80797)), because the limit (indeed even the nature of any excessively-large-stack behavior) is unspecified. Some engines will throw an exception. More perniciously, others will arbitrarily limit the number of arguments actually passed to the applied function. (To illustrate this latter case: if such an engine had a limit of four arguments \[actual limits are of course significantly higher], it would be as if the arguments `5, 6, 2, 3` had been passed to `apply` in the examples above, rather than the full array.) If your value array might grow into the tens of thousands, use a hybrid strategy: apply your function to chunks of the array at a time:

```js
function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);
```

### Using apply in "monkey-patching"

Apply can be the best way to monkey-patch a built-in function of Firefox, or JS libraries. Given `someobject.foo` function, you can modify the function in a somewhat hacky way, like so:

```js
var originalfoo = someobject.foo;
someobject.foo = function () {
  // Do stuff before calling function
  console.log(arguments);
  // Call the function as it would have been called normally:
  originalfoo.apply(this, arguments);
  // Run stuff after, here.
};
```

This method is especially handy where you want to debug events, or interface with something that has no API like the various `.on([event]...` events, such as those usable on the [Devtools Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#developer_api)).

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Functions/arguments", "arguments")}} object
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions and function scope", "", 1)}}
- {{jsxref("Reflect.apply()")}}
