---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
---

{{JSRef}}

与其他编程语言中的数组一样，**`Array`** 对象支持[在单个变量名下存储多个元素](/zh-CN/docs/Learn/JavaScript/First_steps/arrays)，并具有[执行常见数组操作](#示例)的成员。

## 描述

在 JavaScript 中，数组不是[基本类型](/zh-CN/docs/Glossary/Primitive)，而是具有以下核心特征的 `Array` 对象：

- **JavaScript 数组是可调整大小的**，**并且可以包含不同的[数据类型](/zh-CN/docs/Web/JavaScript/Data_structures)**。（当不需要这些特征时，可以使用[类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)）

- **JavaScript 数组不是关联数组**，因此，[不能使用任意字符串作为索引访问数组元素](#备注)，但必须使用非负整数（或它们各自的字符串形式）作为索引访问。

- **JavaScript 数组的[索引从 0 开始](https://zh.wikipedia.org/zh-cn/從零開始的編號)**：数组的第一个元素在索引 `0` 处，第二个在索引 `1` 处，以此类推，最后一个元素是数组的 {{jsxref("Array/length", "length")}} 属性减去 `1` 的值。

- **JavaScript [数组复制操作](#复制数组)创建[浅拷贝](/zh-CN/docs/Glossary/Shallow_copy)**。（*所有* JavaScript 对象的标准内置复制操作都会创建浅拷贝，而不是[深拷贝](/zh-CN/docs/Glossary/Deep_copy)）。

## 构造函数

- {{jsxref("Array/Array", "Array()")}}
  - : 创建一个新的 `Array` 对象。

## 静态属性

- {{jsxref("Array/@@species", "get Array[@@species]")}}
  - : 返回 `Array` 构造函数。

## 静态方法

- {{jsxref("Array.from()")}}
  - : 从数组类对象或可迭代对象创建一个新的 `Array` 实例。
- {{jsxref("Array.isArray()")}}
  - : 如果参数是数组则返回 `true` ，否则返回 `false` 。
- {{jsxref("Array.of()")}}
  - : 创建一个新的 `Array` 实例，具有可变数量的参数，而不管参数的数量或类型。

## 实例属性

- {{jsxref("Array.prototype.length")}}
  - : 反映数组中元素的数量。
- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}
  - : 包含 ES2015 版本之前 ECMAScript 标准中没有包含的属性名，在使用 [`with`](/zh-CN/docs/Web/JavaScript/Reference/Statements/with) 绑定语句时会被忽略。

## 实例方法

- {{jsxref("Array.prototype.at()")}}
  - : 返回给定索引处的数组元素。接受从最后一项往回计算的负整数。
- {{jsxref("Array.prototype.concat()")}}
  - : 返回一个新数组，该数组由被调用的数组与其它数组或值连接形成。
- {{jsxref("Array.prototype.copyWithin()")}}
  - : 在数组内复制数组元素序列。
- {{jsxref("Array.prototype.entries()")}}
  - : 返回一个新的[*数组迭代器*](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)对象，其中包含数组中每个索引的键/值对。
- {{jsxref("Array.prototype.every()")}}
  - : 如果调用数组中的每个元素都满足测试函数，则返回 `true`。
- {{jsxref("Array.prototype.fill()")}}
  - : 用静态值填充数组中从开始索引到结束索引的所有元素。
- {{jsxref("Array.prototype.filter()")}}
  - : 返回一个新数组，其中包含调用所提供的筛选函数返回为 `true` 的所有数组元素。
- {{jsxref("Array.prototype.find()")}}
  - : 返回数组中满足提供的测试函数的第一个元素的值，如果没有找到合适的元素，则返回 `undefined`。
- {{jsxref("Array.prototype.findIndex()")}}
  - : 返回数组中满足提供的测试函数的第一个元素的索引，如果没有找到合适的元素，则返回 `-1`。
- {{jsxref("Array.prototype.findLast()")}}
  - : 返回数组中满足提供的测试函数的最后一个元素的值，如果没有找到合适的元素，则返回 `undefined`。
- {{jsxref("Array.prototype.findLastIndex()")}}
  - : 返回数组中满足所提供测试函数的最后一个元素的索引，如果没有找到合适的元素，则返回 `-1`。
- {{jsxref("Array.prototype.flat()")}}
  - : 返回一个新数组，所有子数组元素递归地连接到其中，直到指定的深度。
- {{jsxref("Array.prototype.flatMap()")}}
  - : 对调用数组的每个元素调用给定的回调函数，然后将结果平展一层，返回一个新数组。
- {{jsxref("Array.prototype.forEach()")}}
  - : 对调用数组中的每个元素调用函数。
- {{jsxref("Array.prototype.group()")}} {{Experimental_Inline}}
  - : 根据测试函数返回的字符串，将数组的元素分组到一个对象中。
- {{jsxref("Array.prototype.groupToMap()")}} {{Experimental_Inline}}
  - : 根据测试函数返回的值，将数组的元素分组到 {{jsxref("Map")}} 中。
- {{jsxref("Array.prototype.includes()")}}
  - : 确定调用数组是否包含一个值，根据情况返回 `true` 或 `false`。
- {{jsxref("Array.prototype.indexOf()")}}
  - : 返回在调用数组中可以找到给定元素的第一个（最小）索引。
- {{jsxref("Array.prototype.join()")}}
  - : 将数组的所有元素连接为字符串。
- {{jsxref("Array.prototype.keys()")}}
  - : 返回一个新的[*数组迭代器*](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)，其中包含调用数组中每个索引的键。
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : 返回在调用数组中可以找到给定元素的最后一个（最大）索引，如果找不到则返回 `-1`。
- {{jsxref("Array.prototype.map()")}}
  - : 返回一个新数组，其中包含对调用数组中的每个元素调用函数的结果。
- {{jsxref("Array.prototype.pop()")}}
  - : 从数组中移除最后一个元素并返回该元素。
- {{jsxref("Array.prototype.push()")}}
  - : 在数组末尾添加一个或多个元素，并返回数组新的 `length`。
- {{jsxref("Array.prototype.reduce()")}}
  - : 对数组的每个元素（从左到右）执行用户提供的 “reducer” 回调函数，将其简化为单个值。
- {{jsxref("Array.prototype.reduceRight()")}}
  - : 对数组的每个元素（从右到左）执行用户提供的 “reducer” 回调函数，将其简化为单个值。
- {{jsxref("Array.prototype.reverse()")}}
  - : 反转数组中元素的顺序。（前面变成后面，后面变成前面。）
- {{jsxref("Array.prototype.shift()")}}
  - : 从数组中移除第一个元素并返回该元素。
- {{jsxref("Array.prototype.slice()")}}
  - : 提取调用数组的一部分并返回一个新数组。
- {{jsxref("Array.prototype.some()")}}
  - : 如果调用数组中至少有一个元素满足提供的测试函数，则返回 `true`。
- {{jsxref("Array.prototype.sort()")}}
  - : 对数组的元素进行排序并返回该数组。
- {{jsxref("Array.prototype.splice()")}}
  - : 从数组中添加和/或删除元素。
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : 返回一个表示调用数组及其元素的本地化字符串。重写 {{jsxref("Object.prototype.toLocaleString()")}} 方法。
- {{jsxref("Array.prototype.toString()")}}
  - : 返回一个表示调用数组及其元素的字符串。重写 {{jsxref("Object.prototype.toString()")}} 方法。
- {{jsxref("Array.prototype.unshift()")}}
  - : 在数组的前面添加一个或多个元素，并返回数组新的 `length`。
- {{jsxref("Array.prototype.values()")}}
  - : 返回一个新的[*数组迭代器*](/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators)对象，该对象包含数组中每个索引的值。
- [`Array.prototype[@@iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
  - : 默认情况下，该方法为 [`values()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values) 方法的别名。

## 示例

### 常见操作

**创建数组**

```js
let fruits = ['Apple', 'Banana']

console.log(fruits.length)
// 2
```

**通过索引访问数组元素**

```js
let first = fruits[0]
// Apple

let last = fruits[fruits.length - 1]
// Banana
```

**遍历数组**

```js
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1
```

**添加元素到数组的末尾**

```js
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
```

**删除数组末尾的元素**

```js
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
```

**删除数组头部元素**

```js
let first = fruits.shift() // remove Apple from the front
// ["Banana"]
```

**添加元素到数组的头部**

```js
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
```

**找出某个元素在数组中的索引**

```js
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana')
// 1
```

**通过索引删除某个元素**

```js
let removedItem = fruits.splice(pos, 1) // this is how to remove an item

// ["Strawberry", "Mango"]
```

**从一个索引位置删除多个元素**

```js
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems)
// ["Turnip", "Radish"]
```

**复制一个数组**

```js
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]
```

### 访问数组元素

JavaScript 数组的索引是从 0 开始的，第一个元素的索引为 0，最后一个元素的索引等于该数组的 {{jsxref("Array.length", "长度")}} 减 1。

如果指定的索引是一个无效值，JavaScript 数组并不会报错，而是会返回 `undefined`。

```js
let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'
```

虽然数组元素可以看做是数组对象的属性，就像 `toString` 一样，但是下面的写法是错误的，运行时会抛出 `SyntaxError` 异常，而原因则是使用了非法的属性名：

```js
console.log(arr.0) // a syntax error
```

并不是 JavaScript 数组有什么特殊之处，而是因为在 JavaScript 中，以数字开头的属性不能用点号引用，必须用方括号。

比如，如果一个对象有一个名为 `3d` 的属性，那么只能用方括号来引用它。下面是具体的例子：

```js
let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(years.0)   // a syntax error
console.log(years[0])  // works properly
```

```js
renderer.3d.setTexture(model, 'character.png')     // a syntax error
renderer['3d'].setTexture(model, 'character.png')  // works properly
```

注意在 `3d` 那个例子中，引号是必须的。你也可以将数组的索引用引号引起来，比如 `years[2]` 可以写成 `years['2']`。

`years[2]` 中的 2 会被 JavaScript 解释器通过调用 `toString` 隐式转换成字符串。正因为这样，`'2'` 和 `'02'` 在 `years` 中所引用的可能是不同位置上的元素。而下面这个例子也可能会打印 `true`：

```js
console.log(years['2'] != years['02'])
```

### 数组长度与数字下标之间的关系

JavaScript 数组的 {{jsxref("Array.length", "length")}} 属性和其数字下标之间有着紧密的联系。

数组内置的几个方法（例如 {{jsxref("Array.join", "join")}}、{{jsxref("Array.slice", "slice")}}、{{jsxref("Array.indexOf", "indexOf")}} 等）都会考虑 {{jsxref("Array.length", "length")}} 的值。

另外还有一些方法（例如 {{jsxref("Array.push", "push")}}、{{jsxref("Array.splice", "splice")}} 等）还会改变 {{jsxref("Array.length", "length")}} 的值。

```js
const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3
```

使用一个合法的下标为数组元素赋值，并且该下标超出了当前数组的大小的时候，解释器会同时修改 {{jsxref("Array.length", "length")}} 的值：

```js
fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6
```

也可以显式地给 {{jsxref("Array.length", "length")}} 赋一个更大的值：

```js
fruits.length = 10
console.log(fruits)              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined
```

而为 {{jsxref("Array.length", "length")}} 赋一个更小的值则会删掉一部分元素：

```js
fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2
```

这一节的内容在 {{jsxref("Array.length")}} 中有更详细的介绍。

### 正则匹配结果所返回的数组

使用正则表达式匹配字符串可以得到一个数组。这个数组中包含本次匹配的相关信息和匹配结果。{{jsxref("RegExp.exec")}}、{{jsxref("String.match")}}、{{jsxref("String.replace")}} 都会返回这样的数组。

看下面的例子和例子下面的表格：

```js
// Match one d followed by one or more b's followed by one d
// Remember matched b's and the following d
// Ignore case

const myRe = /d(b+)(d)/i
const myArray = myRe.exec('cdbBdbsbz')
```

该正则匹配返回的数组包含以下属性和元素：

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">属性/元素</td>
      <th scope="col">说明</td>
      <th scope="col">示例</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>input</code><br />{{ReadOnlyInline}}</td>
      <td>正则表达式所匹配的原始字符串</td>
      <td><code>"cdbBdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>index</code><br />{{ReadOnlyInline}}</td>
      <td>匹配到的子串在原始字符串中的索引</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>[0]</code><br />{{ReadOnlyInline}}</td>
      <td>最后匹配到的子串</td>
      <td><code>"dbBd"</code></td>
    </tr>
    <tr>
      <td><code>[1], ...[n]</code><br />{{ReadOnlyInline}}</td>
      <td>正则表达式中所指定的分组所匹配到的子串，其数量由正则中的分组数量决定，无最大上限</td>
      <td>
        <code>[1]: "bB"<br />[2]: "d"</code>
      </td>
    </tr>
  </tbody>
</table>

## 其它示例

### 创建数组

### 创建二维数组

下面的例子创建了一个代表国际象棋棋盘的二维数组，然后将 `[6][4]` 上的 `p` (Pawn 兵) 拷贝到 `[4][4]`，而原本的 `[6][4]` 位置则被设置为空格。

```js
let board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ]

console.log(board.join('\n') + '\n\n')

// Move King's Pawn forward 2
board[4][4] = board[6][4]
board[6][4] = ' '
console.log(board.join('\n'))
```

下面是输出：

```plain
R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , ,p, , ,
 , , , , , , ,
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
```

### 用数组将一组值以表格形式显示

```js
values = []
for (let x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
}
console.table(values)
```

结果为：

```plain
// The first column is the index
0  1    0
1  2    2
2  4    8
3  8    18
4  16   32
5  32   50
6  64   72
7  128  98
8  256  128
9  512  162
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- JavaScript 指南：

  - [对象属性索引](/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#对象属性索引)
  - [索引集合类：数组对象](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#数组对象array_object)

- [Typed Arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- [RangeError: invalid array length](/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
