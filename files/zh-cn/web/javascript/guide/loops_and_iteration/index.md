---
title: 循环与迭代
slug: Web/JavaScript/Guide/Loops_and_iteration
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}

循环提供了一种快速和简单的方式去做一些重复的事。[JavaScript 入门](/zh-CN/docs/Web/JavaScript/Guide)的这个章节会介绍在 JavaScript 中存在哪些不同的迭代语句。

你可以把循环想成一种计算机化的游戏，告诉某人在一个方向上走 X 步，然后在另一个方向上走 Y 步；例如，“向东走 5 步”可以用一个循环来这样表达：

```js
var step;
for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
```

循环有很多种类，但本质上它们都做的是同一件事：它们把一个动作重复了很多次（实际上重复的次数有可能为 0）。各种循环机制提供了不同的方法去确定循环的开始和结束。不同情况下，某一种类型循环会比其他的循环用起来更简单。

JavaScript 中提供了这些循环语句：

- [for 语句](#for_语句)
- [do...while 语句](#do...while_语句)
- [while 语句](#while_语句)
- [label 语句](#label_语句)
- [break 语句](#break_语句)
- [continue 语句](#continue_语句)
- [for...in 语句](#for...in_语句)
- [for...of 语句](#for...of_语句)

## `for` 语句

一个 {{jsxref("statements/for","for")}} 循环会一直重复执行，直到指定的循环条件为 false。JavaScript 的 for 循环，和 Java、C 的 for 循环，是很相似的。一个 for 语句是这个样子的：

```plain
for ([initialExpression]; [condition]; [incrementExpression])
  statement
```

当一个 `for` 循环执行的时候，会发生以下过程：

1. 如果有初始化表达式 `initialExpression`，它将被执行。这个表达式通常会初始化一个或多个循环计数器，但语法上是允许一个任意复杂度的表达式的。这个表达式也可以声明变量。
2. 计算 `condition` 表达式的值。如果 `condition` 的值是 true，循环中的语句会被执行。如果 `condition` 的值是 false，`for` 循环终止。如果 `condition` 表达式整个都被省略掉了，condition 的值会被认为是 true。
3. 循环中的 `statement` 被执行。如果需要执行多条语句，可以使用块（`{ ... }`）来包裹这些语句。
4. 如果有更新表达式 `incrementExpression`，执行更新表达式。
5. 回到步骤 2。

### 示例

下面的函数包含一个含有 `for` 循环去计算一个滑动列表中被选中项目的个数（一个 {{HTMLElement("select")}} 元素允许选择多项）。`for` 循环声明了变量 i 并将它的初始值设为 0。它检查 `i` 是否比 `<select>` 元素中的选项数量少，执行了随后的 `if` 语句，然后在每次完成循环后，`i` 的值增加 1。

```html
<form name="selectForm">
  <p>
    <label for="musicTypes"
      >Choose some music types, then click the button below:</label
    >
    <select id="musicTypes" name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>爵士</option>
      <option>布鲁斯</option>
      <option>新纪元</option>
      <option>古典</option>
      <option>歌剧</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="选择了多少个选项？" /></p>
</form>

<script>
  function howMany(selectObject) {
    var numberSelected = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }

  var btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    alert("选择选项的数量是：" + howMany(document.selectForm.musicTypes));
  });
</script>
```

## `do...while` 语句

{{jsxref("statements/do...while", "do...while")}} 语句一直重复直到指定的条件求值得到假值（false）。一个 do...while 语句看起来像这样：

```plain
do
  statement
while (condition);
```

`statement` 在检查条件之前会执行一次。要执行多条语句（语句块），要使用块语句（`{ ... }`）包括起来。如果 `condition` 为真（true），`statement` 将再次执行。在每个执行的结尾会进行条件的检查。当 `condition` 为假（false），执行会停止并且把控制权交回给 `do...while` 后面的语句。

### 示例

在下面的例子中，这个 `do` 循环将至少重复一次，并且一直重复直到 `i` 不再小于 5。

```js
var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## `while` 语句

一个 {{jsxref("statements/while","while")}} 语句只要指定的条件求值为真（true）就会一直执行它的语句块。一个 `while` 语句看起来像这样：

```plain
while (condition)
  statement
```

如果这个条件变为假，循环里的 `statement` 将会停止执行并把控制权交回给 `while` 语句后面的代码。

条件检测会在每次 `statement` 执行之前发生。如果条件返回为真， `statement` 会被执行并紧接着再次测试条件。如果条件返回为假，执行将停止并把控制权交回给 while 后面的语句。

要执行多条语句（语句块），要使用语句块 (`{ ... }`) 包括起来。

### 示例 1

只要 `n` 小于 3，下面的 `while` 循环就会一直执行：

```js
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

在每次循环里， `n` 会增加 1，并被加到 `x` 上。所以，x 和 n 的变化是：

- 第一次完成后：`n` = 1，`x` = 1
- 第二次完成后：`n` = 2，`x` = 3
- 第三次完成后：`n` = 3，`x` = 6

在三次完成后，条件 `n < 3` 的结果不再为真，所以循环终止了。

### 示例 2

避免无穷循环（无限循环）。保证循环的条件结果最终会变成假；否则，循环永远不会停止。因为条件永远不会变成假值，下面这个 while 循环将会永远执行：

```js
while (true) {
  console.log("Hello, world");
}
```

## `label` 语句

一个 {{jsxref("statements/label","label")}} 提供了一个让你在程序中其他位置引用它的标识符。例如，你可以用 label 标识一个循环，然后使用 `break` 或者 `continue` 来指出程序是否该停止循环还是继续循环。

label 语句的语法看起来像这样：

```plain
label :
   statement
```

`label` 的值可以是任何的非保留字的 JavaScript 标识符， `statement` 可以是任意你想要标识的语句（块）。

### 示例

在这个例子里，标记 `markLoop` 标识了一个 `while` 循环。

```js
markLoop: while (theMark == true) {
  doSomething();
}
```

举一个比较典型的例子，看完后即明白 Label 的应用：

未添加 Label：

```js
var num = 0;
for (var i = 0; i < 10; i++) {
  // i 循环
  for (var j = 0; j < 10; j++) {
    // j 循环
    if (i == 5 && j == 5) {
      break; // i = 5，j = 5 时，会跳出 j 循环
    } // 但 i 循环会继续执行，等于跳出之后又继续执行更多次 j 循环
    num++;
  }
}

alert(num); // 输出 95
```

添加 Label 后：

```js
var num = 0;
outPoint: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break outPoint; // 在 i = 5，j = 5 时，跳出所有循环，
      // 返回到整个 outPoint 下方，继续执行
    }
    num++;
  }
}

alert(num); // 输出 55
```

使用 continue 语句，则可达到与未添加 label 相同的效果，但在这种有多层循环的情况下，循环的跳出进入流程更为明晰一些：

```js
var num = 0;
outPoint: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      continue outPoint;
    }
    num++;
  }
}
alert(num); // 95
```

从 alert(num) 的值可以看出，continue outPoint; 语句的作用是跳出当前循环，并跳转到 outPoint（标签）下的 for 循环继续执行。

## `break` 语句

使用 {{jsxref("statements/break","break")}} 语句来终止循环，`switch`，或者是链接到 label 语句。

- 当你使用不带 label 的 `break` 时，它会立即终止当前所在的 `while`，`do-while`，`for`，或者 `switch` 并把控制权交回这些结构后面的语句。
- 当你使用带 label 的 `break` 时，它会终止指定的带标记（label）的语句。

`break` 语句的语法看起来像这样：

```plain
break [label];
```

在语法中，被 `[]` 包裹的内容是可省略的，也就是 `label` 可以省略。若省略，则终止当前所在的循环或 `switch`；若不省略，则终止指定的 label 语句。

### 示例 1

下面的例子循环数组里的元素，直到找到一个等于 `theValue` 的值：

```js
for (i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
```

### 示例 2：终止一个 label

```js
var x = 0;
var z = 0;
labelCancelLoops: while (true) {
  console.log("外部循环：" + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("内部循环：" + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

## `continue` 语句

{{jsxref("statements/continue","continue")}} 语句可以用来继续执行（跳过代码块的剩余部分并进入下一循环）一个 `while`、`do-while`、`for`，或者 `label` 语句。

- 当你使用不带 label 的 `continue` 时，它终止当前 `while`，`do-while`，或者 for 语句到结尾的这次的循环并且继续执行下一次循环。
- 当你使用带 label 的 `continue` 时，它会应用被 label 标识的循环语句。

`continue` 语句的语法看起来像这样：

```plain
continue [label];
```

### 示例 1

The following example shows a `while` loop with a `continue` statement that executes when the value of `i` is three. Thus, `n` takes on the values one, three, seven, and twelve.

```js
var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12
```

```js
var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    // continue;
  }
  n += i;
  console.log(n);
}
// 1,3,6,10,15
```

### 示例 2

一个被标签为 `checkiandj` 的语句包含了一个标签为 `checkj` 的语句。

如果遇到 `continue` 语句，程序会结束当前 `chechj` 的迭代并开始下一轮的迭代。

每次遇到 `continue` 语句时，`checkj` 语句会一直重复执行，直到 `checkj` 语句的条件为 `false`。

当返回 `false` 后，将会执行 `checkiandj` 的剩余语句，`checkiandj` 会一直执行，直到 `checkiandj` 的条件为 `false`。

当 `checkiandj` 的返回值为 `false` 时，将会执行 `checkiandj` 的下面的语句。

如果 `continue` 有一个标记 `checkiandj`，程序将会从 `checkiandj` 语句块的顶部继续执行。

```js
var i = 0;
var j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 == 0) {
      continue checkj;
    }
    console.log(j + " 是奇数。");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}
```

## `for...in` 语句

{{jsxref("statements/for...in","for...in")}} 语句循环一个指定的变量来循环一个对象所有可枚举的属性。JavaScript 会为每一个不同的属性执行指定的语句。

```plain
for (variable in object) {
  statements
}
```

### 示例

下面的函数通过它的参数得到一个对象和这个对象的名字。然后循环这个对象的所有属性并且返回一个列出属性名和该属性值的字符串。

```js
function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}
```

对于一个拥有 `make` 和 `model` 属性的 `car` 对象来说，执行结果 `result` 是：

```
car.make = Ford
car.model = Mustang
```

### 数组

虽然使用 **for...in** 来迭代数组 {{jsxref("Array")}} 元素听起来很诱人，但是它返回的东西除了数字索引外，还有可能是你自定义的属性名字。因此还是用带有数字索引的传统的 {{jsxref("statements/for","for")}} 循环来迭代一个数组比较好，因为，如果你想改变数组对象，比如添加属性或者方法，**for...in** 语句迭代的是自定义的属性，而不是数组的元素。（译者注：下面的 `for...of` 语句，和 [`forEach()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)，也是理想的选择。）

## `for...of` 语句

{{jsxref("statements/for...of","for...of")}} 语句在[可迭代对象](/zh-CN/docs/Web/JavaScript/Guide/iterable)（包括{{jsxref("Array")}}、{{jsxref("Map")}}、{{jsxref("Set")}}、{{jsxref("functions/arguments","arguments")}} 等等）上创建了一个循环，对值的每一个独特属性调用一次迭代。

```plain
for (variable of object) {
  statement
}
```

下面的这个例子展示了 `for...of` 和 {{jsxref("statements/for...in","for...in")}} 两种循环语句之间的区别。 `for...in` 循环遍历的结果是数组元素的下标，而 `for...of` 遍历的结果是元素的值：

```js
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // 输出 "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // 输出 "3", "5", "7"
}

// 注意 for...of 的输出没有出现 "hello"
```

{{PreviousNext("Web/JavaScript/Guide/Control_flow_and_error_handling", "Web/JavaScript/Guide/Functions")}}
