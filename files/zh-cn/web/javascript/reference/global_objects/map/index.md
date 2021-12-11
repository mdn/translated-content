---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Map
  - Reference
  - Polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Map
original_slug: Web/JavaScript/Reference/Global_Objects/Map
browser-compat: javascript.builtins.Map

---

{{JSRef}}

**`Map`** 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者[原始值](/zh-CN/docs/Glossary/Primitive)) 都可以作为一个键或一个值。



{{EmbedInteractiveExample("pages/js/map.html", "taller")}}

## 描述

一个 `Map` 对象根据对象中元素插入的顺序进行迭代， [`for...of`](zh-CN/docs/Web/JavaScript/Reference/Statements/for...of) 循环在每次迭代后会返回一个形式为 [key，value] 的数组。

### 键的相等性（Key equality）

- 键的比较基于 [`sameValueZero`](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality) 算法。
- {{jsxref("NaN")}} 与 `NaN` 是相等的 (即使`NaN !== NaN`)， 剩下所有其它的值是根据  `===`  运算符的结果判断是否相等。
- 在目前的ECMAScript规范中，`-0` 和 `+0` 被认为是相等的，尽管这在早期的草案中并不是这样。有关详细信息，请参阅[浏览器兼容性](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map#浏览器兼容性) 表中的 “ Value equality for -0 and 0 ”。

### Objects 和 Maps 的比较

{{jsxref("Object")}} 和 `Maps` 类似的是，它们都允许你按键存取一个值、删除键、检测一个键是否绑定了值。因此（并且也没有其他内建的替代方式了）过去我们一直都把对象当成 `Maps` 使用。

不过 `Maps` 和 `Objects` 有一些重要的区别，在下列情况里使用 `Map` 会是更好的选择：

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Map</th>
      <th scope="col">Object</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">意外的键</th>
      <td><code>Map</code> 默认情况不包含任何键。只包含显式插入的键。</td>
      <td>
        <p>
          一个 <code>Object</code> 拥有原型，所以它包含了默认值，如果不小心的话，可能会与你自己的键发生冲突。
        </p>
        <div class="notecard note">
          <p>
            <strong>注意:</strong> 虽然 ES5 开始可以用
						{{jsxref("Object.create", "Object.create(null)")}}
            来创建一个没有原型的对象，但是这种用法不太常见。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">键的类型</th>
      <td>
        一个<code>Map</code>的键可以是<strong>任意值</strong>，包括函数、对象或任意基本类型。
      </td>
      <td>
        一个<code>Object</code> 的键必须是一个 {{jsxref("String")}}或是{{jsxref("Symbol")}}。
      </td>
    </tr>
    <tr>
      <th scope="row">键的顺序</th>
      <td>
        <p>
          <code>Map</code> 中的键以一种简单明了的方式排序：一个
          <code>Map</code> 对象按照条目（entries）插入的顺序来迭代条目、键和值。
        </p>
      </td>
      <td>
        <p>
          尽管现在普通<code>Object</code>的键是有顺序的，但情况并不总是如此，而且顺序很复杂。
          因此，最好不要依赖属性的顺序。
        </p>
        <p>
          在 ECMAScript 2015 中，规范只定义了对象本身属性的顺序；而 ECMAScript
          2020 也为继承的属性定义了顺序。 详见
          <a href="https://tc39.es/ecma262/#sec-ordinaryownpropertykeys"
            >OrdinaryOwnPropertyKeys</a
          >
          和
          <a href="https://tc39.es/ecma262/#sec-enumerate-object-properties"
            >EnumerateObjectProperties</a
          >
          抽象的规范操作（abstract specification operations）。
          但要注意的是，
          没有一个机制会迭代一个对象的<strong>所有</strong>属性；各种机制都包括着不同的属性子集。
          ({{jsxref("Statements/for...in","for-in")}} 只包括了可枚举的 string
          类型的键的属性； {{jsxref("Object.keys")}}
          只包含了自身的、可枚举的、string 类型的键的属性；
          {{jsxref("Object.getOwnPropertyNames")}} 包含了自身的、string
          类型的键的属性，即使键是不可枚举也会被获取到；
          {{jsxref("Object.getOwnPropertySymbols")}} 只会获取到键类型为
          <code>symbol</code> 的属性, 等等。 )
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row"><p>Size</p></th>
      <td>
        <code>Map</code>
        的键值对个数可以轻易地通过{{jsxref("Map.prototype.size", "size")}}
        属性获取
      </td>
      <td>
       <code>Object</code> 的键值对个数只能手动计算
      </td>
    </tr>
    <tr>
      <th scope="row">迭代</th>
      <td>
        <code>Map</code> 是
        <a href="/en-US/docs/Web/JavaScript/Guide/iterable"
          >可迭代的（iterable）</a
        >
        的，所以可以直接被迭代。
      </td>
      <td>
        <p>
          <code>Object</code> 没有实现
          <a
            href="/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol"
          >
            迭代协议（iteration protocol）</a
          >, 因此 objects 并不能直接的使用 JavaScript 中的
          <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...of"
            >for...of</a
          >
          语句 (默认情况下)。
        </p>
        <div class="notecard note">
          <p><strong>注意：</strong></p>
          <ul>
            <li>
              一个对象是可以实现迭代协议的，不过你也可以通过
              <a
                href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
                ><code>Object.keys</code></a
              >
              或者
              <a
                href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
                ><code>Object.entries</code></a
              >
              获取一个可迭代的对象。
            </li>
            <li>
              <a href="/en-US/docs/Web/JavaScript/Reference/Statements/for...in"
                >for...in</a
              >
              语句允许你迭代对象中可枚举的属性。
            </li>
          </ul>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">性能</th>
      <td>
         <p>
           在频繁增删键值对的场景下表现更好。
         </p>
      </td>
      <td>
        <p>
          在频繁添加和删除键值对的场景下未作出优化。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">序列化和解析（Serialization and parsing）</th>
      <td>
        <p>JavaScript 原生并不支持序列化或者解析。</p>
        <p>
         不过你可以使用 {{jsxref("JSON.stringify()")}}方法的
          <em>replacer</em> 参数和 {{jsxref("JSON.parse()")}} 的
          <em>reviver</em> 参数为
          <code>Map</code> 构建一个你自己的序列化和解析支持。 详见 Stack
          Overflow 中的这个问题
          <a href="https://stackoverflow.com/q/29085197/"
            >How do you JSON.stringify an ES6 Map?</a
          >。
        </p>
      </td>
      <td>
        <p>
          通过 {{jsxref("JSON.stringify()")}}，原生支持将 {{jsxref("Object")}}
          序列化为 JSON。
        </p>
        <p>
          通过 {{jsxref("JSON.parse()")}}，原生支持将 JSON 解析为
          {{jsxref("Object")}}。
        </p>
      </td>
    </tr>
  </tbody>
</table>



### 设置对象属性

为 `Map` 设置对象属性也是可以的，但是可能引起大量的混乱。

所以，你还是*可以这样做.*..

```js example-bad
const wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
```

不过这种设置属性的方式并不会影响到 Map 的数据结构。该操作一个通用对象（generic object）的特征。'bla' 并不会存储到 Map 中以供查询。对数据的其它操作也会失败：

```js example-bad
wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
```

正确的做法是通过 `set(key, value)`  方法存储数据到 Map 中。

```js example-good
const contacts = new Map()
contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"})
contacts.has('Jessie') // true
contacts.get('Hilary') // undefined
contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"})
contacts.get('Jessie') // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete('Raymond') // false
contacts.delete('Jessie') // true
console.log(contacts.size) // 1
```

## 构造函数

- {{jsxref("Map/Map", "Map()")}}
  - 创建一个新的 `Map` 对象。

## 静态属性

- {{jsxref("Map.@@species", "get Map[@@species]")}}
  - 用来创建派生对象的构造函数。

## 实例属性

- {{jsxref("Map.prototype.size")}}
  - 返回一个 `Map` 对象中键值对的数量

## 实例方法

- {{jsxref("Map.prototype.clear()")}}
  - 清空 `Map` 对象上所有的键值对。
- {{jsxref("Map.delete", "Map.prototype.delete(<var>key</var>)")}}
  - 如果 `Map` 对象中存在一个元素，则删除该元素，并且返回 `true`。如果该元素不存在则返回 `false`。`Map.prototype.has(key)`  将会在删除方法完成之后返回 `false` 。
- {{jsxref("Map.get", "Map.prototype.get(<var>key</var>)")}}
  - 返回 `key` 所关联的值，如果没有则返回 `undefined`。
- {{jsxref("Map.has", "Map.prototype.has(<var>key</var>)")}}
  - 返回一个布尔值用于判断一个 `key` 是否在 `Map` 对象中  。
- {{jsxref("Map.set", "Map.prototype.set(<var>key</var>, <var>value</var>)")}}
  - 为 `Map` 对象的 `key` 设置 `value`。返回该 `Map` 。

### 迭代方法 Iteration methods

- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
  - 返回一个新的迭代器对象，其包含了 `Map` 对象中每一个元素，元素为一个数组 `[key, value]` ，且顺序为插入顺序。
- {{jsxref("Map.prototype.keys()")}}
  - 返回一个新的迭代器对象，其包含了 `Map` 对象中每一个元素的 **key**，且顺序为插入的顺序。
- {{jsxref("Map.prototype.values()")}}
  - 返回一个新的迭代器对象，其包含了 `Map`对象中每一个元素的 **values**，且顺序为插入顺序。
- {{jsxref("Map.prototype.entries()")}}
  - 返回一个新的迭代器对象，其包含了 `Map` 对象中每一个元素，元素为一个数组 `[key, value]` ，且顺序为插入顺序。
- {{jsxref("Map.forEach", "Map.prototype.forEach(<var>callbackFn</var>[,<var>thisArg</var>])")}}
  - 对 `Map` 对象中的每个键值对按插入顺序调用一次 `callbackFn`。如果为 `forEach` 方法 提供了 `thisArg` 参数，则每次回调都会使用该参数作为 `this` 值。

## 例子

### 使用 Map 对象

```js
const myMap = new Map()

const keyString = 'a string'
const keyObj    = {}
const keyFunc   = function() {}

// 设置 values
myMap.set(keyString, "和键 'a string' 关联的值")
myMap.set(keyObj, '和减 keyObj 关联的值')
myMap.set(keyFunc, '和键 keyFunc 关联的值')

myMap.size              // 3

// 获取 values
myMap.get(keyString)    // "和键 'a string' 关联的值'"
myMap.get(keyObj)       // "和减 keyObj 关联的值"
myMap.get(keyFunc)      // "和键 keyFunc 关联的值"

myMap.get('a string')    // "和键 keyFunc 关联的值"
                         // 因为 keyString === 'a string'
myMap.get({})            // undefined, 因为 keyObj !== {}
myMap.get(function() {}) // undefined, 因为 keyFunc !== function () {}
```

### 将 `NaN` 作为 `Map` 的 key

{{jsxref("NaN")}} 也可以用作 key。即使每一个 `NaN` 都不等于它自己（`NaN !== NaN` 为真），但下面的例子表明，`NaN`作为Map的键来说是没有区别的:

```js
const myMap = new Map()
myMap.set(NaN, 'not a number')

myMap.get(NaN)
// "not a number"

const otherNaN = Number('foo')
myMap.get(otherNaN)
// "not a number"
```

### 使用 `for...of` 语句迭代 `Map`

`Map` 可以使用 `for..of` 循环来实现迭代：

```js
const myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (const [key, value] of myMap) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one

for (const key of myMap.keys()) {
  console.log(key)
}
// 0
// 1

for (const value of myMap.values()) {
  console.log(value)
}
// zero
// one

for (const [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one
```

### 使用 `forEach()` 方法迭代 `Map`

`Map` 可以通过 {{jsxref("Map.prototype.forEach", "forEach()")}} 方法进行迭代：

```js
myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value)
})
// 0 = zero
// 1 = one
```

### `Map` 与数组的关系

```js
let kvArray = [["key1", "value1"], ["key2", "value2"]];

// 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
let myMap = new Map(kvArray);

myMap.get("key1"); // 返回值为 "value1"

// 使用Array.from函数可以将一个Map对象转换成一个二维键值对数组
console.log(Array.from(myMap)); // 输出和kvArray相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log([...myMap]);

// 或者在键或者值的迭代器上使用Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap.keys())); // 输出 ["key1", "key2"]
```

### 复制或者合并 `Maps`

Map 能像数组一样被复制：

```js
let original = new Map([
  [1, 'one']
]);

let clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false. 浅比较 不为同一个对象的引用
```

> **重要**：请记住，*数据本身*未被克隆。

Map对象间可以进行合并，但是会保持键的唯一性：

```js
let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开运算符本质上是将Map对象转换成数组。
let merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

Map对象也能与数组合并：

```js
let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// Map对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。
let merged = new Map([...first, ...second, [1, 'eins']]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Map` is available in
  [`core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}