---
title: 函式
slug: Web/JavaScript/Guide/Functions
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

函式是構成 javascript 的基本要素之一。一個函式本身就是一段 JavaScript 程序—包含用於執行某一個任務或計算的語法。要呼叫某一個函式之前，你必需先在這個函式欲執行的 scope 中定義它。

## 定義函式

一個函式的定義由一系列的函式關鍵詞組成, 依次為：

- 函式的名稱。
- 包圍在括號()中，並由逗號區隔的一個函式參數列表。
- 包圍在大括號{}中，用於定義函式功能的一些 JavaScript 語句。

例如，以下的程式碼定義了一個名為 square 的簡單函式:

```js
function square(number) {
  return number * number;
}
```

函式 square 有一個參數，叫作 number。這個函式只有一行程式碼，它會回傳 number 自乘的結果。函式的 [`return`](/zh-TW/docs/JavaScript/Reference/Statements/return) 語法描述函式的返回值。

```js
return number * number;
```

原始參數（例如一個數字）被作為值傳遞給函式，如果呼叫的函式改變了這個參數的值，不會影響到函式外部的原始變數。

如果傳遞一個物件（例如 [`Array`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Array) 或自定義的其它物件）作為參數，而函式改變了這個物件的屬性，這樣的改變對函式外部是有作用的(因為是傳遞物件的位址)，如下面的例子所示：

```js
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = { make: "Honda", model: "Accord", year: 1998 },
  x,
  y;

x = mycar.make; // x 的值為 "Honda"

myFunc(mycar);
y = mycar.make; // y 的值為 "Toyota"
// (屬性 make 被 function 改變)
```

請注意，重新給參數指定一個對象(物件)，並不會對函式的外部有任何影響，因為這樣只是改變了參數的值，而不是改變了對象的一個屬性值：

```js
function myFunc(theObject) {
  theObject = { make: "Ford", model: "Focus", year: 2006 };
}

var mycar = { make: "Honda", model: "Accord", year: 1998 },
  x,
  y;

x = mycar.make; // x 的值為 "Honda"

myFunc(mycar);
y = mycar.make; // y 的值還是 "Honda"
```

儘管上述函式定義都是用的是陳述式，函式也同樣可以由函式表達式來定義。這樣的函式可以是匿名的；它不必有名稱。例如，上面提到的函式 square 也可這樣來定義：

```js
var square = function (number) {
  return number * number;
};
var x = square(4); //x 的值為 16
```

必要時，函式名稱可與函式表達式同時存在，並且可以用於在函式內部代指其本身(遞迴)：

```js
var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));
```

函式表達式在將函式作為一個參數傳遞給其它函式時十分方便。下面的例子展示了一個叫 map 的函式如何被定義，而後呼叫一個匿名函式作為其第一個參數：

```js
function map(f, a) {
  var result = [], // Create a new Array
    i;
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
```

下面的程式碼呼叫 map 函式並將一個匿名函式傳入作為第一個參數:

```js
map(
  function (x) {
    return x * x * x;
  },
  [0, 1, 2, 5, 10],
);
// 結果會回傳 [0, 1, 8, 125, 1000]
```

除了上述的定義方式以外，我們也可以透過 [`Function` constructor](/zh-TW/docs/JavaScript/Guide/Predefined_Core_Objects#Function_Object) 來定義，類似 [`eval()`](/zh-TW/docs/JavaScript/Guide/Functions#eval_Function)。

## 呼叫函式

定義一個函式並不會自動的執行它。定義了函式僅僅是賦予函式以名稱並明確函式被呼叫時該做些什麼。呼叫函式才會以給定的參數真正執行這些動作。例如，一旦你定義了函式 square，你可以如下這樣呼叫它：

```js
square(5);
```

上述程式碼把 5 傳遞給 square 函式。函式執行完會回傳 25。

函式必須在呼叫區塊的可視範圍內，但函數也可以宣告在使用處的下面，如下列範例:

```js
console.log(square(5));
/* ... */
function square(n) {
  return n * n;
}
```

The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level. Note that this works only when defining the function using the above syntax (i.e. `function funcName(){}`). The code below will not work.

```js
console.log(square(5));
square = function (n) {
  return n * n;
};
```

The arguments of a function are not limited to strings and numbers. You can pass whole objects to a function, too. The `show_props` function (defined in [Working with Objects](/zh-TW/docs/JavaScript/Guide/Working_with_Objects#Objects_and_Properties)) is an example of a function that takes an object as an argument.

A function can be recursive; that is, it can call itself. For example, here is a function that computes factorials recursively:

```js
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}
```

You could then compute the factorials of one through five as follows:

```js
var a, b, c, d, e;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
d = factorial(4); // d gets the value 24
e = factorial(5); // e gets the value 120
```

There are other ways to call functions. There are often cases where a function needs to be called dynamically, or the number of arguments to a function vary, or in which the context of the function call needs to be set to a specific object determined at runtime. It turns out that functions are, themselves, objects, and these objects in turn have methods (see the [`Function` object](/zh-TW/docs/JavaScript/Guide/Obsolete_Pages/Predefined_Core_Objects/Function_Object)). One of these, the [`apply()`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Function/apply) method, can be used to achieve this goal.

## Function scope

Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined. In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in it's parent function and any other variable to which the parent function has access.

```js
// The following variables are defined in the global scope
var num1 = 20,
  num2 = 3,
  name = "Chamahk";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Returns "Chamahk scored 5"
```

## 閉包

閉包是 JavaScript 最強大的特性之一。JavaScript 允許巢狀函式（nesting of functions）並給予內部函式完全訪問（full access）所有變數、與外部函式定義的函式（還有所有外部函式內的變數與函式）不過，外部函式並不能訪問內部函式的變數與函式。這保障了內部函式的變數安全。另外，由於內部函式能訪問外部函式定義的變數與函式，將存活得比外部函式還久。A closure is created when the inner function is somehow made available to any scope outside the outer function.

```js
var pet = function (name) {
    // The outer function defines a variable called "name"
    var getName = function () {
      return name; // The inner function has access to the "name" variable of the outer function
    };

    return getName; // Return the inner function, thereby exposing it to outer scopes
  },
  myPet = pet("Vivie");

myPet(); // Returns "Vivie"
```

It can be much more complex than the code above. An object containing methods for manipulating the inner variables of the outer function can be returned.

```js
var createPet = function (name) {
  var sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex == "string" &&
        (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")
      ) {
        sex = newSex;
      }
    },
  };
};

var pet = createPet("Vivie");
pet.getName(); // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver
```

In the codes above, the `name` variable of the outer function is accessible to the inner functions, and there is no other way to access the inner variables except through the inner functions. The inner variables of the inner function act as safe stores for the inner functions. They hold "persistent", yet secure, data for the inner functions to work with. The functions do not even have to be assigned to a variable, or have a name.

```js
var getCode = (function () {
  var secureCode = "0]Eal(eh&2"; // A code we do not want outsiders to be able to modify...

  return function () {
    return secureCode;
  };
})();

getCode(); // Returns the secret code
```

There are, however, a number of pitfalls to watch out for when using closures. If an enclosed function defines a variable with the same name as the name of a variable in the outer scope, there is no way to refer to the variable in the outer scope again.

```js
var createPet = function (name) {
  // Outer function defines a variable called "name"
  return {
    setName: function (name) {
      // Enclosed function also defines a variable called "name"
      name = name; // ??? How do we access the "name" defined by the outer function ???
    },
  };
};
```

The magical `this` variable is very tricky in closures. They have to be used carefully, as what `this` refers to depends completely on where the function was called, rather than where it was defined. An excellent and elaborate article on closures can be found [here](http://jibbering.com/faq/notes/closures/).

## Using the arguments object

The arguments of a function are maintained in an array-like object. Within a function, you can address the arguments passed to it as follows:

```js
arguments[i];
```

where `i` is the ordinal number of the argument, starting at zero. So, the first argument passed to a function would be `arguments[0]`. The total number of arguments is indicated by `arguments.length`.

Using the `arguments` object, you can call a function with more arguments than it is formally declared to accept. This is often useful if you don't know in advance how many arguments will be passed to the function. You can use `arguments.length` to determine the number of arguments actually passed to the function, and then access each argument using the `arguments` object.

For example, consider a function that concatenates several strings. The only formal argument for the function is a string that specifies the characters that separate the items to concatenate. The function is defined as follows:

```js
function myConcat(separator) {
  var result = "", // initialize list
    i;
  // iterate through arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
```

You can pass any number of arguments to this function, and it concatenates each argument into a string "list":

```js
// returns "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// returns "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// returns "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

Please note that the `arguments` variable is "array-like", but not an array. It is array-like in that is has a numbered index and a `length` property. However, it does not possess all of the array-manipulation methods.

See the [`Function` object](/zh-TW/docs/JavaScript/Reference/Global_Objects/Function) in the JavaScript Reference for more information.

## Predefined functions

JavaScript has several top-level predefined functions:

- [eval](#eval_function)
- [isFinite](#isFinite_function)
- [isNaN](#isNaN_function)
- [parseInt and parseFloat](#parseInt_and_parseFloat_functions)
- [Number and String](#Number_and_String_functions)
- [encodeURI, decodeURI, encodeURIComponent, and decodeURIComponent](#escape_and_unescape_functions) (all available with Javascript 1.5 and later).

The following sections introduce these functions. See the [JavaScript Reference](/zh-TW/docs/JavaScript/Reference) for detailed information on all of these functions.

### eval Function

The `eval` function evaluates a string of JavaScript code without reference to a particular object. The syntax of `eval` is:

```js
eval(expr);
```

where `expr` is a string to be evaluated.

If the string represents an expression, `eval` evaluates the expression. If the argument represents one or more JavaScript statements, eval performs the statements. The scope of `eval` code is identical to the scope of the calling code. Do not call `eval` to evaluate an arithmetic expression; JavaScript evaluates arithmetic expressions automatically.

### isFinite function

The `isFinite` function evaluates an argument to determine whether it is a finite number. The syntax of `isFinite` is:

```js
isFinite(number);
```

where `number` is the number to evaluate.

If the argument is `NaN`, positive infinity or negative infinity, this method returns `false`, otherwise it returns `true`.

The following code checks client input to determine whether it is a finite number.

```js
if (isFinite(ClientInput)) {
  /* take specific steps */
}
```

### isNaN function

The `isNaN` function evaluates an argument to determine if it is "NaN" (not a number). The syntax of `isNaN` is:

```js
isNaN(testValue);
```

where `testValue` is the value you want to evaluate.

The `parseFloat` and `parseInt` functions return "NaN" when they evaluate a value that is not a number. `isNaN` returns true if passed "NaN," and false otherwise.

The following code evaluates `floatValue` to determine if it is a number and then calls a procedure accordingly:

```js
var floatValue = parseFloat(toFloat);

if (isNaN(floatValue)) {
  notFloat();
} else {
  isFloat();
}
```

### parseInt and parseFloat functions

The two "parse" functions, `parseInt` and `parseFloat`, return a numeric value when given a string as an argument.

The syntax of `parseFloat` is:

```js
parseFloat(str);
```

where `parseFloat` parses its argument, the string `str`, and attempts to return a floating-point number. If it encounters a character other than a sign (+ or -), a numeral (0-9), a decimal point, or an exponent, then it returns the value up to that point and ignores that character and all succeeding characters. If the first character cannot be converted to a number, it returns "NaN" (not a number).

The syntax of `parseInt` is:

```js
parseInt(str [, radix]);
```

`parseInt` parses its first argument, the string `str`, and attempts to return an integer of the specified `radix` (base), indicated by the second, optional argument, `radix`. For example, a radix of ten indicates to convert to a decimal number, eight octal, sixteen hexadecimal, and so on. For radixes above ten, the letters of the alphabet indicate numerals greater than nine. For example, for hexadecimal numbers (base 16), A through F are used.

If `parseInt` encounters a character that is not a numeral in the specified radix, it ignores it and all succeeding characters and returns the integer value parsed up to that point. If the first character cannot be converted to a number in the specified radix, it returns "NaN." The `parseInt` function truncates the string to integer values.

### Number and String functions

The `Number` and `String` functions let you convert an object to a number or a string. The syntax of these functions is:

```js
var objRef;
objRef = Number(objRef);
objRef = String(objRef);
```

`objRef 是物件的參照`。 Number uses the valueOf() method of the object; String uses the toString() method of the object.

下列範例將 [`日期`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Date) 物件轉換為可讀字串。

```js
var D = new Date(430054663215),
  x;
x = String(D); // x 等於 "星期二 八月 18 04:37:43 GMT-0700  1983"
```

下列範例將 [`字串`](/zh-TW/docs/JavaScript/Reference/Global_Objects/String) 物件轉換為 [`數字`](/zh-TW/docs/JavaScript/Reference/Global_Objects/Number) 物件。

```js
var str = "12",
  num;
num = Number(字串);
```

使用 DOM 方法 `write()` 與 JavaScript `typeof` 運算子.

```js
var str = "12",
  num;
document.write(typeof str);
document.write("<br/>");
num = Number(str);
document.write(typeof num);
```

### escape 與 unescape 函式(JavaScript 1.5 後去除)

`escape` 與 `unescape` 對於非 ASCII 字元無法處理。 在 JavaScript 1.5 之後改用 [`encodeURI`](/zh-TW/docs/JavaScript/Reference/Global_Objects/encodeURI), [`decodeURI`](/zh-TW/docs/JavaScript/Reference/Global_Objects/decodeURI), [`encodeURIComponent`](/zh-TW/docs/JavaScript/Reference/Global_Objects/encodeURIComponent), 與 [`decodeURIComponent`](/zh-TW/docs/JavaScript/Reference/Global_Objects/decodeURIComponent).

`escape` 與 `unescape` 用於編碼與解碼字串。 `escape` 函式回傳十六進位編碼。 `unescape` 函式會將十六進位的編碼轉換回 ASCII 字串。

這些函式的語法是:

```js
escape(字串);
unescape(字串);
```

這些函式常被用於伺服器後端中處理姓名等資料。
