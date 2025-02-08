---
title: JavaScript 代码示例编写指南
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
---

以下指南涵盖了如何为 MDN Web Docs 编写 JavaScript 示例代码。本文列出了编写简洁示例的规则，以期这些示例将被尽可能多的人理解。

## JavaScript 代码示例常规指南

本节解释了编写 JavaScript 代码示例时要牢记的一般准则。后面的部分将涵盖更具体的细节。

### 选择格式

关于正确缩进、空格和行的长度方面的观点一直存在争议。对这些主题的讨论会分散创作和维护内容的注意力。

在 MDN Web Docs，我们使用 [Prettier](https://prettier.io/) 作为代码格式化工具以保持代码样式的一致性（同时避免偏离主题的讨论）。你可以查阅我们的[配置文件](https://github.com/mdn/content/blob/main/.prettierrc.json)了解当前规则，并阅读 [Prettier 文档](https://prettier.io/docs/en/index.html)。

Prettier 格式化所有代码并保持风格一致。尽管如此，你还需要遵守一些额外的规则。

### 使用现代 JavaScript 特性

如果新的特性被每个主流的浏览器——Chrome、Edge、Firefox 和 Safari 所支持，你就可以使用它们。

## 数组

### 创建数组

请使用字面量而非构造函数来创建数组。

像这样来创建数组：

```js example-good
const visitedCities = [];
```

而不要这样创建数组：

```js example-bad
const visitedCities = new Array(length);
```

### 添加元素

向数组添加元素时，请使用 [`push()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 而非直接赋值。考虑有如下数组：

```js
const pets = [];
```

像这样向数组添加元素：

```js example-good
pets.push("cat");
```

而不要像这样向数组添加元素：

```js example-bad
pets[pets.length] = "cat";
```

## 异步方法

编写异步代码可以提高性能，应尽可能使用。特别是，你可以使用：

- [Promise](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/zh-CN/docs/Web/JavaScript/Reference/Operators/await)

当两种语法都可行时，我们倾向于使用更简单的 `async`/`await` 语法。不幸的是，你不能在顶层使用 `await`，除非你在 ECMAScript 模块中。但 Node.js 使用 CommonJS 模块而不是 ES 模块。因此，如果你打算在所有地方使用该示例，请避免顶层的 `await`。

## 注释

注释对于编写良好的代码示例非常重要。它们清楚地阐明了代码的意图，并帮助开发者理解它。因此要特别注意它们。

- 如果代码的目的或逻辑不明显，请添加表明你的意图的注释，就像下面这样：

  ```js example-good
  let total = 0;

  // 计算数组 arr 的前四个元素的和
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  另一方面，请不要用文字重述代码来作为注释：

  ```js example-bad
  let total = 0;

  // 从 1 到 4 的 for 循环
  for (let i = 0; i < 4; i++) {
    // 将值累加到总和（total）
    total += arr[i];
  }
  ```

- 当函数的名称清楚地描述了它们的作用时，不需要再注释。如：

  ```js example-good
  closeConnection();
  ```

  不要写像下面这样的注释：

  ```js example-bad
  closeConnection(); // 关闭连接
  ```

### 使用单行注释

单行注释用 `//` 标记，与包含在 `/* … */` 之间的块注释相反。

通常情况下，使用单行注释来注释代码。编写者必须用 `//` 标记每一行的注释，这样就更容易直观地注意到注释掉的代码。此外，这种约定允许在调试时使用 `/* … */` 注释掉部分代码。

- 在斜杠和空格之间留一个空格。（英文的）注释以大写字母开头，就像句子一样，但不要在结尾加句号。

  ```js example-good
  // 这是一个良好的单行注释
  ```

- 如果一个注释没有在新缩进级别之后开始，请在空行后添加注释。这将创建一个代码块，使得注释与代码的关联更加清晰。此外，将你的注释放在它们所指的代码之前的单独一行上。如下例所示：

  ```js example-good
  function checkout(goodsPrice, shipmentPrice, taxes) {
    // 计算总价
    const total = goodsPrice + shipmentPrice + taxes;

    // 创建一个文档并向其添加一个新的段落
    const para = document.createElement("p");
    para.textContent = `总价是 ${total}`;
    document.body.appendChild(para);
  }
  ```

### 打印的输出

- 对于预期在生产环境中运行的代码，你很少会需要对打印语句进行注释。在代码示例中，我们经常使用 `console.log()`、`console.error()` 或类似的函数来输出重要的值。为了帮助读者在不运行代码的情况下理解会发生什么，你可以在打印函数*之后*注释输出的内容。比如：

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket); // ['香蕉', '芒果', '橙子']
  }
  ```

  请不要这样写：

  ```js example-bad
  function exampleFunc(fruitBasket) {
    // 输出：['香蕉', '芒果', '橙子']
    console.log(fruitBasket);
  }
  ```

- 如果这样会让行变得太长，请将注释*放在*函数之后，如下所示：

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['香蕉', '芒果', '橙子', '苹果', '梨', '榴莲', '柠檬']
  }
  ```

### 多行注释

简短的注释通常更好，所以尝试将他们保持在 60–80 个字符的单行中。如果这不可能，请在每行的开头使用 `//`：

```js example-good
// 这是一个多行注释的示例。
// 假设下面的函数有一些我想指出的不寻常的局限性。
// 局限 1
// 局限 2
```

请不要使用 `/* … */`：

```js example-bad
/* 这是一个多行注释的示例。
  假设下面的函数有一些我想指出的不寻常的局限性。
  局限 1
  局限 2 */
```

## 使用注释来标记省略号

为了保持示例简短，我们需要使用省略号（…）来跳过冗余代码。尽管如此，编写者应该仔细考虑，因为开发者经常复制粘贴示例到他们的代码中，所以我们所有的示例代码都应该是有效的 JavaScript。

在 JavaScript 中，你应该将省略号（`…`）放在注释之中。可能的话，请指出重用此代码片段的人预计会添加什么操作。

对省略号（…）使用注释更加明确，可以防止开发人员复制和粘贴示例代码时出现错误。比如：

```js example-good
function exampleFunc() {
  // 在此处添加你的代码
  // …
}
```

请不要像这样这样使用省略号（…）：

```js example-bad
function exampleFunc() {
  …
}
```

### 注释掉参数

在编写代码时，你通常会省略你不需要的参数。但在某些代码示例中，你想要显式的说明你没有使用某些可能的参数。

为此，请在参数列表中使用 `/* … */`。这是只使用单行注释（`//`）的规则的一个例外。

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## 函数

### 函数名称

对于函数名称，请使用以小写字母开头的{{Glossary("camel_case", "小驼峰式")}}命名。酌情使用简洁、可读的和语义化的名称。

以下是函数名称的正确示例：

```js example-good
function sayHello() {
  console.log("你好！");
}
```

请不要使用像这样的函数名称：

```js example-bad
function SayHello() {
  console.log("你好！");
}

function doIt() {
  console.log("你好！");
}
```

### 函数声明

- 在可能的情况下，请使用函数声明而不是函数表达式来定义函数。

  以下是声明函数的推荐方式：

  ```js example-good
  function sum(a, b) {
    return a + b;
  }
  ```

  以下不是定义函数的好方法：

  ```js example-bad
  let sum = function (a, b) {
    return a + b;
  };
  ```

- 当使用匿名函数作为回调（传递给另一个方法调用的函数），如果你不需要访问 `this`，使用箭头函数可以让代码更加简洁明了。

  以下是推荐的方式：

  ```js example-good
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce((a, b) => a + b);
  ```

  而不是这样：

  ```js example-bad
  const array1 = [1, 2, 3, 4];
  const sum = array1.reduce(function (a, b) {
    return a + b;
  });
  ```

- 考虑避免使用箭头函数将函数分配给标识符。尤其是，不要对方法使用箭头函数。使用带有关键字 `function` 的函数声明：

  ```js example-good
  function x() {
    // …
  }
  ```

  不要这样：

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- 使用箭头函数时，尽可能使用[隐式返回](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions#函数体)（也称为*表达式主体*）：

  ```js example-good
  arr.map((e) => e.id);
  ```

  而不是：

  ```js example-bad
  arr.map((e) => {
    return e.id;
  });
  ```

## 循环和条件语句

### 循环初始化

当需要[循环](/zh-CN/docs/Learn_web_development/Core/Scripting/Loops)时，从 [`for(;;)`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for)、[`for...of`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of)、[`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 等中选择合适的。

- 在遍历集合中的所有元素时，避免使用传统的 `for (;;)` 循环；优先使用 `for...of` 或 `forEach()`。请注意，如果你使用的是一个不是 `Array` 的集合，你必须检查 `for...of` 是否真的被支持（它需要变量是可迭代的），或者 `forEach()` 方法是否存在。

  使用 `for...of`：

  ```js example-good
  const dogs = ["旺财", "来福"];
  for (const dog of dogs) {
    console.log(dog);
  }
  ```

  或 `forEach()`：

  ```js example-good
  const dogs = ["旺财", "来福"];
  dogs.forEach((dog) => {
    console.log(dog);
  });
  ```

  请不要使用 `for (;;)`——你不仅需要添加额外的索引 `i`，你还必须跟踪数组的长度。这对于初学者来说很容易出错。

  ```js example-bad
  const dogs = ["旺财", "来福"];
  for (let i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
  ```

- 确保你正确地定义了初始化器，对 `for...of` 使用 `const` 关键字，或对其他循环使用 `let`。注意不要遗漏。以下是正确的示例：

  ```js example-good
  const cats = ["汤姆", "胖橘"];
  for (const cat of cats) {
    console.log(cat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  下面的示例没有遵循推荐的初始化准则（它隐式创建了全局变量，并且在严格模式下会失败）：

  ```js example-bad
  const cats = ["汤姆", "胖橘"];
  for (i of cats) {
    console.log(i);
  }
  ```

- 但是需要同时范围值和索引时，你可以使用 `.forEach()` 而不是 `for (;;)`。例如：

  ```js example-good
  const gerbils = ["舒克", "贝塔"];
  gerbils.forEach((gerbil, i) => {
    console.log(`沙鼠 ${i} 号：${gerbil}`);
  });
  ```

  请不要这样写：

  ```js example-bad
  const gerbils = ["舒克", "贝塔"];
  for (let i = 0; i < gerbils.length; i++) {
    console.log(`沙鼠 ${i} 号：${gerbil}`);
  }
  ```

> [!WARNING]
> 切勿使用 `for...in` 遍历数组和字符串。

> [!NOTE]
> 考虑完全不使用 `for` 循环。如果你正在使用 [`Array`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)（或者在某些操作中使用 [`String`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)），请考虑使用更具语义的迭代方法，比如 [`map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)、[`every()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)、[`findIndex()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)、[`find()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)、[`includes()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) 等。

### 控制语句

对于 `if...else` 控制语句，有一个值得注意的情况。如果 `if` 语句以 `return` 结尾，则不要添加 `else` 语句。

在 `if` 语句后继续，例如：

```js example-good
if (test) {
  // 如果 test 为真则执行某些操作
  // …
  return;
}

// 如果 test 为假则执行某些操作
// …
```

请不要这样写：

```js example-bad
if (test) {
  //  如果 test 为真则执行某些操作
  // …
  return;
} else {
  // 如果 test 为假则执行某些操作
  // …
}
```

### 将大括号与控制流语句和循环一起使用

虽然像 `if`、`for` 和 `while` 的控制流语句不需要在内容中只有一个语句时使用大括号，但你总是应该使用大括号。比如：

```js example-good
for (const car of storedCars) {
  car.paint("红色");
}
```

不要这样写：

```js example-bad
for (const car of storedCars) car.paint("红色");
```

这可以防止忘记在添加更多语句时添加大括号。

### Switch 语句

switch 语句可能有点棘手。

- 不要在 `return` 语句后添加 `break` 语句。相反，请像下面这样编写 `return` 语句：

  ```js example-good
  switch (species) {
    case "chicken":
      return farm.shed;
    case "horse":
      return corral.entry;
    default:
      return "";
  }
  ```

  如果你添加了 `break` 语句，它会是不可达的。不要这样写：

  ```js example-bad
  switch (species) {
    case "chicken":
      return farm.shed;
      break;
    case "horse":
      return corral.entry;
      break;
    default:
      return "";
  }
  ```

- 使用 `default` 作为最后一个 case，不要在 `default` 后面添加 `break` 语句。如果你需要做不同的事情，请添加注释来解释为什么。

- 请记住，当你为一个 case 声明一个局部变量时，你需要使用大括号来定义作用域：

  ```js
  switch (fruits) {
    case "Orange": {
      const slice = fruit.slice();
      eat(slice);
      break;
    }
    case "Apple": {
      const core = fruit.extractCore();
      recycle(core);
      break;
    }
  }
  ```

### 错误处理

- 如果程序的某些状态引发未捕获的错误，它们会停止执行，并可能降低示例的可用性。因此，你应该使用 [`try...catch`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch) 块来捕获错误，如下所示：

  ```js example-good
  try {
    console.log(getResult());
  } catch (e) {
    console.error(e);
  }
  ```

- 在你不需要 `catch` 语句的参数时，请省略它：

  ```js example-good
  try {
    console.log(getResult());
  } catch {
    console.error("发生了一个错误！");
  }
  ```

> [!NOTE]
> 请记住，只有*可恢复*的错误才应该被捕获和处理。所有不可恢复的错误都应该被抛出，并在调用栈中逐级向上冒泡。

## 对象

### 对象名称

- 当定义一个类时，使用*大驼峰式*（以大写字母开头）来命名类，使用*小驼峰式*（以小写字母开头）来命名对象属性和方法名。

- 当定义一个对象实例时，使用字面量或构造函数，请使用*小驼峰式*（以小写字母开头）为实例命名。比如：

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "he/him");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "he/him",
  };
  ```

### 创建对象

对于创建普通对象（即，当不涉及类时），请使用字面量而非构造函数。

例如，这样做：

```js example-good
const object = {};
```

不要像这样创建普通对象：

```js example-bad
const object = new Object();
```

#### 对象类

- 使用新的 ES 类语法进行定义，而不是构造函数。

  例如，这是推荐的方式：

  ```js example-good
  class Person {
    constructor(name, age, pronouns) {
      this.name = name;
      this.age = age;
      this.pronouns = pronouns;
    }

    greeting() {
      console.log(`你好！我是 ${this.name}`);
    }
  }
  ```

- 使用 `extends` 进行继承：

  ```js example-good
  class Teacher extends Person {
    // …
  }
  ```

### 方法

要定义方法，请使用方法定义语法：

```js example-good
const obj = {
  foo() {
    // …
  },
  bar() {
    // …
  },
};
```

而不是：

```js example-bad
const obj = {
  foo: function () {
    // …
  },
  bar: function () {
    // …
  },
};
```

### 对象属性

- [`Object.prototype.hasOwnProperty()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) 方法已被弃用，取而代之的是 [`Object.hasOwn()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)。
- 在可能的情况下，使用简写来避免属性标识符的重复。比如：

  ```js example-good
  function createObject(name, age) {
    return { name, age };
  }
  ```

  不要这样写：

  ```js example-bad
  function createObject(name, age) {
    return { name: name, age: age };
  }
  ```

## 运算符

本节列出了我们对使用哪些运算符以及何时使用的建议。

### 条件运算符

当你想要根据条件将一个字面量存储到变量中时，请使用[条件（三元）运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator)而不是 `if...else` 语句。此规则也适用于返回值时。比如：

```js example-good
const x = condition ? 1 : 2;
```

而不要这样：

```js example-bad
let x;
if (condition) {
  x = 1;
} else {
  x = 2;
}
```

条件运算符在创建用来打印新信息的字符串时很有帮助。在这种情况下，使用常规的 `if...else` 语句会导致像打印日志这样的副操作变成长代码块，会混淆示例的重点。

### 严格相等运算符

优先使用[严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Strict_equality)（三等号）和不等运算符，而不是相等运算符（双等号）和不等运算符。

像这样使用严格相等和不等运算符：

```js example-good
name === "Shilpa";
age !== 25;
```

不要像下面这样使用宽松相等和不等运算符：

```js example-bad
name == "Shilpa";
age != 25;
```

如果你需要使用 `==` 或 `!=`，请记住 `== null` 是唯一可接受的情况。由于 TypeScript 在所有其他情况下都会失败，因此我们不希望在示例代码中使用。考虑添加注释来解释你为什么需要它。

### 布尔值测试的简便方式

优先使用简便布尔值测试。例如，使用 `if (x)` 和 `if (!x)`，而不是 `if (x === true)` 和 `if (x === false)`，除非以不同的方式处理不同种类的真值或假值。

## 字符串

字符串字面量可以用单引号包含起来，比如 `'A string'`，也可以用双引号包含起来，比如 `"A string"`。不过，请不要在意需要选择使用哪个，Prettier 会保持一致。

### 模版字面量

要将值插入字符串，请使用[模板字面量](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)。

- 这里是一个推荐的使用模板字面量的例子。它们的使用可以防止大量的空格错误。

  ```js example-good
  const name = "Shilpa";
  console.log(`你好！我是 ${name}！`);
  ```

  请不要像这样串联字符串：

  ```js example-bad
  const name = "Shilpa";
  console.log("你好！我是 " + name + "！"); // 你好！我是 Shilpa！
  ```

- 请不要过度使用模版字面量。如果没有替换的话，请使用普通字符串。

## 变量

### 变量名称

好的变量名对理解代码至关重要。

- 使用简短的标识符，并避免不常用的缩写。好的变量名通常在 3 到 10 个字符之间，但这只是一个提示。例如，`accelerometer` 比为了字符长度而减短的缩写 `acclmtr` 更具描述性。
- 尝试使用现实世界相关的例子，其中每个变量都有清晰的语义。只有在示例简单且随意时才使用占位名称，比如 `foo` 和 `bar`。
- 不要使用[匈牙利命名法](https://zh.wikipedia.org/wiki/匈牙利命名法)命名约定。不要在变量名前面加上类型。比如，不要写成 `bBought = oCar.sBuyer != null` 或 `sName = "John Doe"`，而是写成 `bought = car.buyer !== null` 或 `sName = "John Doe"`。
- 对于集合，避免在命名中添加例如列表、数组、队列这样的类型名称。使用复数形式的内容名称。例如，对于汽车数组，使用 `cars` 而不是 `carArray` 或 `carList`。有时会有例外，比如你想在没有特定应用程序的上下文中展示一个特性的抽象形式。
- 对于原始值，使用*小驼峰命名法*，以小写字母开头。不要使用 `_`。在适当的情况下，使用简洁、可读性好且语义化的名称。比如，使用 `currencyName` 而不是 `currency_name`。
- 避免使用冠词和所有格，例如，使用 `car` 而不是 `myCar` 或 `aCar`。有时会有例外，比如你想在没有特定应用程序的上下文中展示一个特性的抽象形式。
- 使用变量名如下所示：

  ```js example-good
  const playerScore = 0;
  const speed = distance / time;
  ```

  不要像这样命名变量：

  ```js example-bad
  const thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;
  const s = d / t;
  ```

> [!NOTE]
> 唯一不允许使用可读性好的语义名称的地方是存在非常公认的惯例，例如将 `i` 和 `j` 用于循环迭代器。

### 变量声明

在声明变量和常量时，使用 [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 和 [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 关键字，而不是 [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var)。下面的例子展示了 MDN Web 文档上推荐的和不推荐的用法：

- 如果一个变量不会被重新赋值，请使用 `const`，如下所示：

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- 如果你会改变变量的值，请使用 `let`，如下所示：

  ```js example-good
  let age = 40;
  age++;
  console.log("生日快乐！");
  ```

- 下面的示例在应该使用 `const` 的地方使用了 `let`，代码仍然可以运行，但我们希望在 MDN Web 文档代码示例中避免这种用法。

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- 下面的示例使用 `const` 声明了一个变量，该变量会被重新赋值。重新赋值会抛出一个错误。

  ```js example-bad
  const age = 40;
  age++;
  console.log("生日快乐！");
  ```

- 下面的示例使用了 `var`，这会污染全局作用域：

  ```js example-bad
  var age = 40;
  var name = "Shilpa";
  ```

- 一行声明一个变量，如下所示：

  ```js example-good
  let var1;
  let var2;
  let var3 = "张三";
  let var4 = var3;
  ```

  不要在一行中通过逗号或链式声明来声明多个变量。避免像这样声明变量：

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "张三"; // var4 被隐式创建为全局变量；这在严格模式下会失败
  ```

### 强制类型转换

避免隐式强制类型转换。特别是，避免 `+val` 以强制将值转换未为数字，以及 `"" + val` 来将其强制转换为字符串。改为在不使用 `new` 的情况下使用 `Number()` 和 `String()`。例如：

```js example-good
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = String(name);
    this.#birthYear = Number(year);
  }
}
```

不要这样写：

```js example-bad
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = "" + name;
    this.#birthYear = +year;
  }
}
```

## 要避免的 Web API

除了这些 JavaScript 语言特性之外，我们还建议你牢记一些与 Web API 相关的准则。

### 避免浏览器前缀

如果所有主流浏览器（Chrome、Edge、Firefox 和 Safari）都支持某个特性，请不要在该特性前面加上前缀。比如：

```js example-good
const context = new AudioContext();
```

避免增加前缀的复杂性，不要这样写：

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

同样的规则也适用于 CSS 前缀。

### 避免已弃用的 API

当一个方法、属性或一整个接口都已经弃用，不要使用它（除了它的文档）。相反，使用现代的 API。

以下是要避免的 Web API 以及用什么来替换它们的非详尽列表：

- 使用 `fetch()` 来替代 XHR（`XMLHttpRequest`）。
- 在 Web 音频 API 中使用 `AudioWorklet` 来替代 `ScriptProcessorNode`。

### 使用安全可靠的 API

- 请不要使用 {{DOMxRef("Element.innerHTML")}} 将纯文本内容插入到元素中；而是使用 {{DOMxRef("Node.textContent")}} 替代。`innerHTML` 属性可能会导致安全问题，如果开发人员不控制参数。作为编写者，我们越避免使用它，开发者复制和粘贴我们的代码时产生的安全漏洞就越少。

  下面的示例演示了 `textContent` 的用法。

  ```js example-good
  const text = "父老乡亲们大家好";
  const para = document.createElement("p");
  para.textContent = text;
  ```

  不要使用 `innerHTML` 将*纯文本*插入到 DOM 节点中。

  ```js example-bad
  const text = "父老乡亲们大家好";
  const para = document.createElement("p");
  para.innerHTML = text;
  ```

- `alert()` 函数是不可靠的。在 MDN Web 文档，它在嵌入到 {{HTMLElement("iframe")}} 中的实时示例内无法正常工作。此外，它是对整个窗口的模态提示，这很令人讨厌。在静态代码示例中，使用 `console.log()` 或 `console.error()`。在[实时示例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)中，避免使用 `console.log()` 和 `console.error()`，因为它们不会显示。而是使用专用的 UI 元素。

### 使用合适的打印方法

- 当打印一个消息时，使用 `console.log()`。
- 当打印一个错误时，使用 `console.error()`。

## 参见

[JavaScript 参考](/zh-CN/docs/Web/JavaScript/Reference)——浏览我们的 JavaScript 参考页面，查看一些优秀、简洁、有意义的 JavaScript 代码片段。
