---
title: 函数
slug: Web/JavaScript/Guide/Functions
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}

函数是 JavaScript 中的基本组件之一。JavaScript 中的函数类似于过程——一组执行任务或计算值的语句。但要成为函数，这个过程应该接受输入并返回与输入存在某些明显关系的输出。要使用一个函数，你必须将其定义在你希望调用它的作用域内。

参见 [JavaScript 函数的详细参考章节](/zh-CN/docs/Web/JavaScript/Reference/Functions)，以了解详情。

## 定义函数

### 函数声明

一个**函数定义**（也称为**函数声明**，或**函数语句**）由 [`function`](/zh-CN/docs/Web/JavaScript/Reference/Statements/function) 关键字，并跟随以下部分组成：

- 函数名称。
- 函数参数列表，包围在括号中并由逗号分隔。
- 定义函数的 JavaScript 语句，用大括号括起来，`{ /* … */ }`。

例如，以下的代码定义了一个简单的名为 `square` 的函数：

```js
function square(number) {
  return number * number;
}
```

函数 `square` 接收一个名为 `number` 的参数。这个函数只有一个语句，其表示该函数将函数的参数（即 `number`）自乘后返回。函数的 [`return`](/zh-CN/docs/Web/JavaScript/Reference/Statements/return) 语句指定了函数的返回值：`number * number`。

参数本质上是**按值**传递给函数的——因此，即使函数体的代码为传递给函数的参数赋了新值，**这个改变也不会反映到全局或调用该函数的代码中**。

如果你将对象作为参数传递，而函数改变了这个对象的属性，这样的改变对函数外部是可见的，如下面的例子所示：

```js
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"
```

如果你将数组作为参数传递，而函数改变了这个数组的值，这样的改变对函数外部也同样可见，如下面的例子所示：

```js
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
```

### 函数表达式

虽然上面的函数声明在语法上是一个语句，但函数也可以由[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)创建。

这样的函数可以是**匿名**的；它不必有一个名称。例如，函数 `square` 也可这样来定义：

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

然而，*也可以*为函数表达式提供名称，并且可以用于在函数内部代指其本身，或者在调试器堆栈跟踪中识别该函数：

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6
```

当将函数作为参数传递给另一个函数时，函数表达式很方便。下面的例子演示了一个叫 `map` 的函数，该函数接收函数作为第一个参数，接收数组作为第二个参数：

```js
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
```

在以下代码中，该函数接收由函数表达式定义的函数，并对作为第二个参数接收的数组的每个元素执行该函数：

```js
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const cube = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
```

在 JavaScript 中，可以根据条件来定义一个函数。比如下面的代码，当 `num` 等于 `0` 的时候才会定义 `myFunc`：

```js
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

除了上述的定义函数方法外，你也可以在运行时用 {{jsxref("Function")}} 构造函数从一个字符串创建一个函数，很像 {{jsxref("Global_Objects/eval", "eval()")}} 函数。

当一个函数是一个对象的属性时，称之为**方法**。了解更多关于对象和方法的知识，请阅读[使用对象](/zh-CN/docs/Web/JavaScript/Guide/Working_with_objects)。

## 调用函数

*定义*的函数并不会自动*执行*它。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。

**调用**函数才会以给定的参数真正执行这些动作。例如，一旦你定义了函数 `square`，你可以像这样调用它：

```js
square(5);
```

上述语句使用参数 `5` 来调用函数。函数执行完它的语句会返回值 `25`。

函数一定要处于调用它们的*作用域中*，但是函数的声明可以被[提升](#函数提升)（出现在调用语句之后）。函数声明的范围是声明它的函数（或者，如果它是在顶层声明的，则为整个程序）之内。

函数的参数并不局限于字符串或数字。你也可以将整个对象传递给函数。函数 `showProps()`（其定义参见[使用对象](/zh-CN/docs/Web/JavaScript/Guide/Working_with_objects#对象和属性)）就是一个将对象作为参数的示例。

函数可以调用其本身。例如，下面这个函数就是用递归计算阶乘：

```js
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```

你可以这样计算 `1` 到 `5` 的阶乘：

```js
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
```

还有其他的方式来调用函数。常见的一些情形是某些地方需要动态调用函数，或者函数的实参数量是变化的，或者调用函数的上下文需要指定为在运行时确定的特定对象。

显然，_函数本身就是对象_，因此这些对象也有方法（参见 {{jsxref("Function")}} 对象）。[`call()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 和 [`apply()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 方法可用于实现这些目的。

### 函数提升

考虑以下示例：

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

尽管 `square()` 函数在声明之前被调用，但此代码的运行并没有任何错误。这是因为 JavaScript 解释器会将整个函数声明提升到当前作用域的顶部，因此上面的代码等价于：

```js
// 所有函数声明实际上都位于作用域的顶部
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

函数提升仅适用于函数*声明*，而不适用于函数*表达式*。以下代码无法运行：

```js example-bad
console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

## 函数作用域

在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的作用域内定义。相对应的，一个函数可以访问定义在其范围内的任何变量和函数。

换言之，定义在全局域中的函数可以访问所有定义在全局域中的变量。在另一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量。

```js
// 下面的变量定义在全局作用域中
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// 此函数定义在全局作用域中
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// 嵌套函数示例
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} 的得分为 ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh 的得分为 5"
```

## 作用域和函数栈

### 递归

一个函数可以指向并调用自身。有三种方法可以达到这个目的：

1. 函数名
2. [`arguments.callee`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee)
3. 作用域内一个指向该函数的变量名

例如，思考如下的函数定义：

```js
const foo = function bar() {
  // 这里编写语句
};
```

在这个函数体内，以下的语句是等价的：

1. `bar()`
2. `arguments.callee()`
3. `foo()`

调用自身的函数我们称之为*递归函数*。在某种意义上说，递归近似于循环。两者都重复执行相同的代码，并且两者都需要一个终止条件（避免无限循环，或者在这种情况下更确切地说是无限递归）。

例如，考虑以下的循环：

```js
let x = 0;
// “x < 10”是循环条件
while (x < 10) {
  // 做些什么
  x++;
}
```

可以被转化成一个递归函数声明，然后调用该函数：

```js
function loop(x) {
  // “x >= 10”是退出条件（等同于“!(x < 10)”）
  if (x >= 10) {
    return;
  }
  // 做些什么
  loop(x + 1); // 递归调用
}
loop(0);
```

不过，有些算法并不能简单的用迭代来实现。例如，获取树结构（例如 [DOM](/zh-CN/docs/Web/API/Document_Object_Model)）中所有的节点时，使用递归实现要容易得多：

```js
function walkTree(node) {
  if (node === null) {
    return;
  }
  // 对节点做些什么
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

跟 `loop` 函数相比，这里每个递归调用都产生了更多的递归调用。

将递归算法转换为非递归算法是可能的，不过逻辑上通常会更加复杂，而且需要使用栈。

事实上，递归本身就使用了栈：函数栈。类似栈的行为可以在以下示例中看到：

```js
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`开始：${i}`);
  foo(i - 1);
  console.log(`结束：${i}`);
}
foo(3);

// 打印：
// 开始：3
// 开始：2
// 开始：1
// 开始：0
// 结束：0
// 结束：1
// 结束：2
// 结束：3
```

### 嵌套函数和闭包

你可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。

它自身也形成了一个*闭包*（closure）。闭包是可以拥有独立变量以及绑定了这些变量的环境（“封闭”了表达式）的表达式（通常是函数）。

既然嵌套函数是一个闭包，就意味着一个嵌套函数可以“继承”容器函数的参数和变量。换句话说，内部函数包含外部函数的作用域。

可以总结如下：

- 内部函数只可以在外部函数中访问。
- 内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量。

下面的例子展示了嵌套函数：

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41
```

由于内部函数形成了闭包，因此你可以调用外部函数并为外部函数和内部函数指定参数：

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // 可以这样想：给我一个可以将提供的值加上 3 的函数
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8
```

### 保存变量

注意到上例中 `inside` 被返回时 `x` 是怎么被保留下来的。一个闭包必须保存它可见作用域中所有参数和变量。因为每一次调用传入的参数都可能不同，每一次对外部函数的调用实际上重新创建了一遍这个闭包。只有当返回的 `inside` 没有再被引用时，内存才会被释放。

这与在其他对象中存储引用没什么不同，但是通常不太明显，因为并不能直接设置引用，也不能检查它们。

### 多层嵌套函数

函数可以被多层嵌套。例如：

- 函数（`A`）可以包含函数（`B`），后者可以再包含函数（`C`）。
- 这里的函数 `B` 和 `C` 都形成了闭包，所以 `B` 可以访问 `A`，`C` 可以访问 `B`。
- 此外，因为 `C` 可以访问 `B`（而 `B` 可以访问 `A`），所以 `C` 也可以访问 `A`。

因此，闭包可以包含多个作用域；它们递归地包含了所有包含它的函数作用域。这个称之为*作用域链*。（稍后解释它被称为“链”的原因。）

思考以下示例：

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // 打印 6（即 1 + 2 + 3）
```

在这个示例中，`C` 可以访问 `B` 的 `y` 和 `A` 的 `x`。

这是因为：

1. `B` 形成了一个包含 `A` 的闭包（即，`B` 可以访问 `A` 的参数和变量）
2. `C` 形成了一个包含 `B` 的闭包。
3. `C` 的闭包包含 `B`，且 `B` 的闭包包含 `A`，所以 `C` 的闭包也包含 `A`。这意味着 `C` *同时*可以访问 `B` _和_ `A` 的参数和变量。换言之，`C` *用这个顺序链接*了 `B` 和 `A` 的作用域。

反过来却不是这样。`A` 不能访问 `C`，因为 `A` 不能访问 `B` 中的参数和变量，`C` 是 `B` 中的一个变量，所以 `C` 是 `B` 私有的。

### 命名冲突

当同一个闭包作用域下两个参数或者变量同名时，就会产生*命名冲突*。更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先级最低。这就是作用域链。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。考虑以下示例：

```js
function outside() {
  const x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

console.log(outside()(10)); // 20（而不是 10）
```

命名冲突发生在语句 `return x * 2` 上，`inside` 的参数 `x` 和 `outside` 的变量 `x` 发生了冲突。这里的作用链域是 {`inside`、`outside`、全局对象}。因此 `inside` 的 `x` 优先于 `outside` 的 `x`，因此返回 `20`（`inside` 的 `x`）而不是 `10`（`outside` 的 `x`）。

## 闭包

闭包是 JavaScript 中最强大的特性之一。JavaScript 允许函数嵌套，并且内部函数具有定义在外部函数中的所有变量和函数（以及外部函数能访问的所有变量和函数）的完全访问权限。

但是，外部函数却*不能*访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一种封装。

此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行的持续时间要长。当内部函数以某一种方式被任何一个外部函数之外的任何作用域访问时，就会创建闭包。

```js
// 外部函数定义了一个名为“name”的变量
const pet = function (name) {
  const getName = function () {
    // 内部函数可以访问外部函数的“name”变量
    return name;
  };
  return getName; // 返回内部函数，从而将其暴露给外部作用域
};
const myPet = pet("Vivie");

console.log(myPet()); // "Vivie"
```

实际上可能会比上面的代码复杂的多。它可以返回一个包含用于操作外部函数的内部变量的方法的对象。

```js
const createPet = function (name) {
  let sex;

  const pet = {
    // 在这个上下文中：setName(newName) 等价于 setName: function (newName)
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver
```

在上面的代码中，外部函数的 `name` 变量对内部函数来说是可访问的，而除了通过内部函数本身，没有其他任何方法可以取得内部的变量。内部函数的内部变量就像对外部参数和变量的保险柜。它们会为内部函数保留“稳定”而又“被封装”的数据参与运行。而这些内部函数甚至不会被分配给一个变量，或者有个名称。

```js
const getCode = (function () {
  const apiCode = "0]Eal(eh&2"; // 我们不希望外部能够修改的代码......

  return function () {
    return apiCode;
  };
})();

console.log(getCode()); // "0]Eal(eh&2"
```

> **备注：** 使用闭包时需要注意许多陷阱！
>
> 如果一个闭包的函数定义了一个和外部外部的某个变量名称相同的变量，那么这个闭包将无法引用外部作用域中的这个变量。（内部作用域的变量“覆盖”外部作用域，直至程序退出内部作用域。可以将其视作[命名冲突](#命名冲突)。）
>
> ```js example-bad
> const createPet = function (name) {
>   // 外部函数定义了一个名为“name”的变量。
>   return {
>     setName(name) {
>       // 闭包函数还定义了一个名为“name”的变量。
>       name = name; // 我们如何访问外部函数定义的“name”？
>     },
>   };
> };
> ```

## 使用 arguments 对象

函数的实际参数会被保存在一个类似数组的 arguments 对象中。在函数内，你可以按如下方式找出传入的参数：

```js
arguments[i];
```

其中 `i` 是参数的序号，从 `0` 开始。所以第一个传入函数的参数会是 `arguments[0]`。参数的数量由 `arguments.length` 表示。

使用 `arguments` 对象，你可以处理比声明更多的参数来调用函数。这在你事先不知道会需要将多少参数传递给函数时十分有用。你可以用 `arguments.length` 来获得实际传递给函数的参数的数量，然后用 `arguments` 对象来访问每个参数。

例如，考虑有一个用来连接字符串的函数。唯一正式的参数是在连接后的字符串中用来分隔各个连接部分的字符。该函数定义如下：

```js
function myConcat(separator) {
  let result = ""; // 初始化列表
  // 迭代 arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
```

你可以给这个函数传递任意数量的参数，它会将各个参数连接成一个字符串“列表”：

```js
console.log(myConcat("、", "红", "橙", "蓝"));
// "红、橙、蓝、"

console.log(myConcat("；", "大象", "长颈鹿", "狮子", "猎豹"));
// "大象；长颈鹿；狮子；猎豹；"

console.log(myConcat("。", "智者", "罗勒", "牛至", "胡椒", "香菜"));
// "智者。罗勒。牛至。胡椒。香菜。"
```

> **备注：** `arguments` 变量只是“类数组”，而不是数组。它与数组类似，有索引编号和 `length` 属性。尽管如此，它并不*具备* Array 对象的所有数组操作方法。

更多信息请阅读 JavaScript 参考中的 {{jsxref("Function")}} 对象。

## 函数参数

有两种特殊的参数语法：*默认参数*和*剩余参数*。

### 默认参数

在 JavaScript 中，函数参数的默认值是 `undefined`。然而，在某些情况下设置不同的默认值可能会很有用。这正是默认参数的作用。

在过去，用于设定默认参数的一般策略是在函数的主体中测试参数值是否为 `undefined`，如果是则赋予这个参数一个默认值。

在下面的示例中，如果调用函数时没有给 `b` 提供值，那么它的值就是 `undefined`，在执行 `a*b` 时，调用乘法通常会返回 `NaN`。但是，这已经被示例的第二行所避免了：

```js
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

console.log(multiply(5)); // 5
```

使用*默认参数*，在函数体的手动检查就不再必要了。现在，你可以在函数头简单地把 `1` 设定为 `b` 的默认值：

```js
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5
```

见参考的[默认参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters)，以获取详情。

### 剩余参数

[剩余参数](/zh-CN/docs/Web/JavaScript/Reference/Functions/rest_parameters)语法允许将不确定数量的参数表示为数组。

在下面的示例中，`multiply` 函数使用*剩余参数*收集从第二个参数开始到最后的参数。然后，该函数将它们与第一个参数相乘。

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## 箭头函数

[箭头函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)（也称*胖箭头*，以区分未来 JavaScript 中假设的 `->` 语法）相比函数表达式具有较短的语法且没有它自己的 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this)、[`arguments`](/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)、[`super`](/zh-CN/docs/Web/JavaScript/Reference/Operators/super) 和 [`new.target`](/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target)。箭头函数总是匿名的。

有两个因素会影响对箭头函数的引入：*更简洁的函数*和 `this` 的*无绑定性*。

### 更简洁的函数

在一些函数模式中，更简洁的函数很受欢迎。对比一下：

```js
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]
```

### 无单独的 this

在箭头函数出现之前，每一个新函数都定义了自己的 [`this`](/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 值（在构造函数中是一个新的对象；在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下是 undefined；在作为“对象方法”调用的函数中指向这个对象；等等）。事实证明，这对于面向对象的编程风格来说并不理想。

```js
function Person() {
  // 构造函数 Person() 将 `this` 定义为自身。
  this.age = 0;

  setInterval(function growUp() {
    // 在非严格模式下，growUp() 函数将 `this` 定义为“全局对象”，
    // 这与 Person() 定义的 `this` 不同。
    this.age++;
  }, 1000);
}

const p = new Person();
```

在 ECMAScript 3/5 中，通过把 `this` 的值赋值给一个变量可以修复这个问题。

```js
function Person() {
  // 有的人习惯用 `that` 而不是 `self`。
  // 请选择一种方式，并保持前后代码的一致性
  const self = this;
  self.age = 0;

  setInterval(function growUp() {
    // 回调引用 `self` 变量，其值为预期的对象。
    self.age++;
  }, 1000);
}
```

另外，创建一个[绑定函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)可以使得 `this` 值被正确传递给 `growUp()` 函数。

箭头函数没有自己的 `this`，而是使用封闭执行上下文的 `this` 值。因此，在以下代码中，传递到 `setInterval` 中的函数内的 `this` 与闭包函数中的 `this` 相同：

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++; // 这里的 `this` 正确地指向 person 对象
  }, 1000);
}

const p = new Person();
```

## 预定义函数

JavaScript 语言有几个顶级的内置函数：

- {{jsxref("Global_Objects/eval", "eval()")}}
  - : **`eval()`** 方法执行方法计算以字符串表示的 JavaScript 代码。
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
  - : **`isFinite()`** 全局函数判断传入的值是否是有限的数值。如果需要的话，其参数首先被转换为一个数值。
- {{jsxref("Global_Objects/isNaN", "isNaN()")}}
  - : **`isNaN()`** 函数判断一个值是否是 {{jsxref("Global_Objects/NaN", "NaN")}}。注意：`isNaN` 函数内部的强制转换规则十分[有趣](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN#描述)。你也可以使用 {{jsxref("Number.isNaN()")}} 来判断该值是否为 NaN。
- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}
  - : **`parseFloat()`** 函数解析字符串参数，并返回一个浮点数。
- {{jsxref("Global_Objects/parseInt", "parseInt()")}}
  - : **`parseInt()`** 函数解析字符串参数，并返回指定的基数（基础数学中的数制）的整数。
- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}
  - : **`decodeURI()`** 函数对先前经过 {{jsxref("Global_Objects/encodeURI", "encodeURI")}} 函数或者其他类似方法编码过的统一资源标志符（URI）进行解码。
- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}
  - : **`decodeURIComponent()`** 方法对先前经过 {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}} 函数或者其他类似方法编码的统一资源标志符（URI）进行解码。
- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}
  - : **`encodeURI()`** 方法通过以表示字符的 UTF-8 编码的一个、两个、三个或四个转义序列替换统一资源标识符（URI）的某些字符来进行编码（对于由两个“代理（surrogate）”字符组成的字符，只会编码为四个转义序列）。
- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}
  - : **`encodeURIComponent()`** 方法通过以表示字符的 UTF-8 编码的一个、两个、三个或四个转义序列替换统一资源标识符（URI）的某些字符来进行编码（对于由两个“代理”字符组成的字符，只会编码为四个转义序列）。
- {{jsxref("Global_Objects/escape", "escape()")}} {{Deprecated_Inline}}
  - : **`escape()`** 方法生成一个新的字符串，其中的某些字符已被替换为十六进制转义序列。其已被弃用，请使用 {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} 或 {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}} 代替。
- {{jsxref("Global_Objects/unescape", "unescape()")}} {{Deprecated_Inline}}
  - : **`unescape()`** 方法计算生成一个新的字符串，其中的十六进制转义序列将被其表示的字符替换。上述的转义序列就像 {{jsxref("Global_Objects/escape", "escape")}} 介绍的一样。其已被弃用，请使用 {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} 或 {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}} 替代。

{{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_operators")}}
