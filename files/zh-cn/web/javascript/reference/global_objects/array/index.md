---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
tags:
  - 数组
  - 类
  - 示例
  - 全局对象
  - JavaScript
  - 参考手册
browser-compat: javascript.builtins.Array
translation_of: Web/JavaScript/Reference/Global_Objects/Array
---
{{JSRef}}

JavaScript的 **`Array`** 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。

## 描述

数组是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作。JavaScript 数组的长度和元素类型都是非固定的。因为数组的长度可随时改变，并且其数据在内存中也可以不连续，所以 JavaScript 数组不一定是密集型的，这取决于它的使用方式。一般来说，数组的这些特性会给使用带来方便，但如果这些特性不适用于你的特定使用场景的话，可以考虑使用类型数组 {{jsxref("TypedArray")}}。

只能用整数作为数组元素的索引，而不能用字符串。后者称为 [关联数组](https://en.wikipedia.org/wiki/Associative_array)。使用非整数并通过 [方括号](/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#对象和属性) 或 [点号](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_Accessors) 来访问或设置数组元素时，所操作的并不是数组列表中的元素，而是数组对象的 [属性集合](/zh-CN/docs/Web/JavaScript/Data_structures#属性) 上的变量。数组对象的属性和数组元素列表是分开存储的，并且数组的遍历和修改操作也不能作用于这些命名属性。

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

JavaScript 数组的索引是从0开始的，第一个元素的索引为0，最后一个元素的索引等于该数组的 {{jsxref("Array.length", "长度")}} 减1。

如果指定的索引是一个无效值，JavaScript 数组并不会报错，而是会返回 `undefined`。

```js
let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'
```

虽然数组元素可以看做是数组对象的属性，就像 `toString` 一样，但是下面的写法是错误的，运行时会抛出 `SyntaxError` 异常，而原因则是使用了非法的属性名：

```js
console.log(arr.0) // a syntax error
```

并不是 JavaScript 数组有什么特殊之处，而是因为在 JavaScript 中，以数字开头的属性不能用点号引用，必须用方括号。

比如，如果一个对象有一个名为 `3d` 的属性，那么只能用方括号来引用它。下面是具体的例子：

```js
let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(years.0)   // a syntax error
console.log(years[0])  // works properly
```

```js
renderer.3d.setTexture(model, 'character.png')     // a syntax error
renderer['3d'].setTexture(model, 'character.png')  // works properly
```

注意在 `3d` 那个例子中，引号是必须的。你也可以将数组的索引用引号引起来，比如 `years[2]` 可以写成 `years['2']`。

`years[2]` 中的 2 会被 JavaScript 解释器通过调用 `toString` 隐式转换成字符串。正因为这样，`'2'` 和 `'02'` 在 `years` 中所引用的可能是不同位置上的元素。而下面这个例子也可能会打印 `true`：

```js
console.log(years['2'] != years['02'])
```

### 数组长度与数字下标之间的关系

JavaScript 数组的 {{jsxref("Array.length", "length")}} 属性和其数字下标之间有着紧密的联系。

数组内置的几个方法（例如 {{jsxref("Array.join", "join")}}、{{jsxref("Array.slice", "slice")}}、{{jsxref("Array.indexOf", "indexOf")}} 等）都会考虑 {{jsxref("Array.length", "length")}} 的值。

另外还有一些方法（例如 {{jsxref("Array.push", "push")}}、{{jsxref("Array.splice", "splice")}} 等）还会改变 {{jsxref("Array.length", "length")}} 的值。

```js
const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3
```

使用一个合法的下标为数组元素赋值，并且该下标超出了当前数组的大小的时候，解释器会同时修改 {{jsxref("Array.length", "length")}} 的值：

```js
fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6
```

也可以显式地给 {{jsxref("Array.length", "length")}} 赋一个更大的值：

```js
fruits.length = 10
console.log(fruits)              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined
```

而为 {{jsxref("Array.length", "length")}} 赋一个更小的值则会删掉一部分元素：

```js
fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2
```

这一节的内容在 {{jsxref("Array.length")}} 中有更详细的介绍。

### 正则匹配结果所返回的数组

使用正则表达式匹配字符串可以得到一个数组。这个数组中包含本次匹配的相关信息和匹配结果。{{jsxref("RegExp.exec")}}、{{jsxref("String.match")}}、{{jsxref("String.replace")}} 都会返回这样的数组。

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

## 构造器

- {{jsxref("Array/Array", "Array()")}}
  - : 创建一个新的 `Array` 对象

## 静态属性

- {{jsxref("Array/@@species", "get Array[@@species]")}}
  - : 返回 Array 的构造函数

## 静态方法

- {{jsxref("Array.from()")}}
  - : 从类数组对象或者可迭代对象中创建一个新的数组实例
- {{jsxref("Array.isArray()")}}
  - : 用来判断某个变量是否是一个数组对象
- {{jsxref("Array.of()")}}
  - : 根据一组参数来创建新的数组实例，支持任意的参数数量和类型

## 实例属性

- {{jsxref("Array.prototype.length")}}
  - : 数组中的元素个数
- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}
  - : 包含了所有 ES2015 (ES6) 中新定义的、且并未被更早的 ECMAScript 标准收纳的属性名。这些属性被排除在由 [`with`](/zh-CN/docs/Web/JavaScript/Reference/Statements/with) 语句绑定的环境中

## 实例方法

- {{jsxref("Array.prototype.at()")}}{{Experimental_Inline}}
  - : Returns the array item at the given index. Accepts negative integers, which count back from the last item.
- {{jsxref("Array.prototype.concat()")}}
  - : 用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
- {{jsxref("Array.prototype.copyWithin()")}}
  - : 浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度
- {{jsxref("Array.prototype.entries()")}}
  - : 返回一个新的 `Array Iterator` 对象，该对象包含数组中每个索引的键/值对
- {{jsxref("Array.prototype.every()")}}
  - : 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值
- {{jsxref("Array.prototype.fill()")}}
  - : 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素
- {{jsxref("Array.prototype.filter()")}}
  - : 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
- {{jsxref("Array.prototype.find()")}}
  - : 返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`
- {{jsxref("Array.prototype.findIndex()")}}
  - : 返回数组中满足提供的测试函数的第一个元素的**索引**。若没有找到对应元素则返回 `-1`
- {{jsxref("Array.prototype.flat()")}}
  - : 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回 
- {{jsxref("Array.prototype.flatMap()")}}
  - : 使用映射函数映射每个元素，然后将结果压缩成一个新数组
- {{jsxref("Array.prototype.forEach()")}}
  - : 对数组的每个元素执行一次给定的函数
- {{jsxref("Array.prototype.includes()")}}
  - : 判断一个数组是否包含一个指定的值，如果包含则返回 `true`，否则返回 `false`
- {{jsxref("Array.prototype.indexOf()")}}
  - : 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回 `-1`
- {{jsxref("Array.prototype.join()")}}
  - : 将一个数组的所有元素连接成一个字符串并返回这个字符串
- {{jsxref("Array.prototype.keys()")}}
  - : 返回一个包含数组中每个索引键的 `Array Iterator` 对象
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : 返回指定元素在数组中的最后一个的索引，如果不存在则返回 `-1`
- {{jsxref("Array.prototype.map()")}}
  - : 返回一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值
- {{jsxref("Array.prototype.pop()")}}
  - : 从数组中删除最后一个元素，并返回该元素的值
- {{jsxref("Array.prototype.push()")}}
  - : 将一个或多个元素添加到数组的末尾，并返回该数组的新长度
- {{jsxref("Array.prototype.reduce()")}}
  - : 对数组中的每个元素执行一个由您提供的reducer函数（升序执行），将其结果汇总为单个返回值
- {{jsxref("Array.prototype.reduceRight()")}}
  - : 接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值
- {{jsxref("Array.prototype.reverse()")}}
  - : 将数组中元素的位置颠倒，并返回该数组。该方法会改变原数组
- {{jsxref("Array.prototype.shift()")}}
  - : 从数组中删除第一个元素，并返回该元素的值
- {{jsxref("Array.prototype.slice()")}}
  - : 提取源数组的一部分并返回一个新数组
- {{jsxref("Array.prototype.some()")}}
  - : 测试数组中是不是至少有一个元素通过了被提供的函数测试
- {{jsxref("Array.prototype.sort()")}}
  - : 对数组元素进行原地排序并返回此数组
- {{jsxref("Array.prototype.splice()")}}
  - : 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 {{jsxref("Object.prototype.toLocaleString()")}} 方法转成字符串
- {{jsxref("Array.prototype.toString()")}}
  - : 返回一个字符串表示指定的数组及其元素。数组中的元素将使用各自的 {{jsxref("Object.prototype.toString()")}} 方法转成字符串
- {{jsxref("Array.prototype.unshift()")}}
  - : 将一个或多个元素添加到数组的头部，并返回该数组的新长度
- {{jsxref("Array.prototype.values()")}}
  - : 返回一个新的 `Array Iterator 对象`，该对象包含数组每个索引的值
- {{jsxref("Array.prototype.@@iterator()", "Array.prototype[@@iterator]()")}}
  - : 返回一个新的 `Array Iterator 对象`，该对象包含数组每个索引的值

## 示例

### 创建数组

下面这个例子创建了一个长度为 `0` 的数组 `msgArray`，然后给 `msgArray[0]` 和 `msgArray[99]` 赋值，从而导致数组长度变为了 `100`。

```js
let msgArray = []
msgArray[0] = 'Hello'
msgArray[99] = 'world'

if (msgArray.length === 100) {
  console.log('The length is 100.')
}
```

### 创建二维数组

下面的例子创建了一个代表国际象棋棋盘的二维数组，然后将 `[6][4]` 上的 `p` (Pawn 兵) 拷贝到 `[4][4]`，而原本的 `[6][4]` 位置则被设置为空格。

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
0	1	0
1	2	2
2	4	8
3	8	18
4	16	32
5	32	50
6	64	72
7	128	98
8	256	128
9	512	162
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- JavaScript 指南:

  - [对象属性索引](/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#对象属性索引)
  - [索引集合类: 数组对象](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#数组对象array_object)

- [Typed Arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- [RangeError: invalid array length](/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
