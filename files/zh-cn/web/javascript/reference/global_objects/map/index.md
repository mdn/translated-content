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
browser-compat: javascript.builtins.Map
---
{{JSRef}}

**`Map`** 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者{{Glossary("Primitive", "基本类型")}}）都可以作为一个键或一个值。

{{EmbedInteractiveExample("pages/js/map.html", "taller")}}

## 描述

一个 `Map` 对象在迭代时会根据对象中元素的插入顺序来进行——一个 {{jsxref("Statements/for...of", "for...of")}} 循环在每次迭代后会返回一个形式为 `[key，value]` 的数组。

### 键的相等

- 键的比较基于[零值相等](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#零值相等)算法。
- {{jsxref("NaN")}} 是与 `NaN` 相等的（虽然 `NaN !== NaN`），剩下所有其它的值是根据 `===` 运算符的结果判断是否相等。
- 在目前的 ECMAScript 规范中，`-0` 和 `+0` 被认为是相等的，尽管这在早期的草案中并不是这样。有关详细信息，请参阅[浏览器兼容性](#浏览器兼容性)表中的“Value equality for -0 and 0”。

### Objects 和 maps 的比较

{{jsxref("Object")}} 和 `Map` 类似的是，它们都允许你按键存取一个值、删除键、检测一个键是否绑定了值。因此（并且也没有其他内建的替代方式了）过去我们一直都把对象当成 `Map` 使用。

不过 `Map` 和 `Object` 有一些重要的区别，在下列情况中使用 `Map` 会是更好的选择：

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
        <p>一个 <code>Object</code> 有一个原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。</p>
        <div class="notecard note">
          <p><strong>备注：</strong>虽然从 ES5 开始可以用 {{jsxref("Object.create", "Object.create(null)")}} 来创建一个没有原型的对象，但是这种用法不太常见。</p>
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">键的类型</th>
      <td>一个 <code>Map</code> 的键可以是<strong>任意值</strong>，包括函数、对象或任意基本类型。</td>
      <td>一个 <code>Object</code> 的键必须是一个 {{jsxref("String")}} 或是 {{jsxref("Symbol")}}。</td>
    </tr>
    <tr>
      <th scope="row">键的顺序</th>
      <td>
        <p><code>Map</code> 中的键是有序的。因此，当迭代的时候，一个 <code>Map</code> 对象以插入的顺序返回键值。</p>
      </td>
      <td>
        <p>虽然 <code>Object</code> 的键目前是有序的，但并不总是这样，而且这个顺序是复杂的。因此，最好不要依赖属性的顺序。</p>
        <p>自 ECMAScript 2015 规范以来，对象的属性被定义为是有序的；ECMAScript 2020 则额外定义了继承属性的顺序。参见 <a href="https://tc39.es/ecma262/#sec-ordinaryownpropertykeys"
        >OrdinaryOwnPropertyKeys</a
        >
        和
        <a href="https://tc39.es/ecma262/#sec-enumerate-object-properties"
          >EnumerateObjectProperties</a
        > 抽象规范说明。但是，请注意没有可以迭代对象所有属性的机制，每一种机制只包含了属性的不同子集。（{{jsxref("Statements/for...in","for-in")}}
        仅包含了以字符串为键的属性；{{jsxref("Object.keys")}}
        仅包含了对象自身的、可枚举的、以字符串为键的属性；{{jsxref("Object.getOwnPropertyNames")}}
        包含了所有以字符串为键的属性，即使是不可枚举的；{{jsxref("Object.getOwnPropertySymbols")}}
        与前者类似，但其包含的是以 <code>Symbol</code> 为键的属性，等等。）
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Size</th>
      <td><code>Map</code> 的键值对个数可以轻易地通过 {{jsxref("Map.prototype.size", "size")}} 属性获取。</td>
      <td><code>Object</code> 的键值对个数只能手动计算.</td>
    </tr>
    <tr>
    <th scope="row">迭代</th>
    <td><code>Map</code> 是 <a href="/zh-CN/docs/Web/JavaScript/Guide/iterable">可迭代的</a> 的，所以可以直接被迭代。</td>
    <td>
      <p><code>Object</code> 没有实现 <a
       href="/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol"
        >迭代协议</a
      >，所以使用 JavaSctipt 的 <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of"
        >for...of</a
      > 表达式并不能直接迭代对象。</p>
      <div class="notecard note">
        <p><strong>备注：</strong></p>
        <ul>
        <li>
          对象可以实现迭代协议，或者你可以使用 <a
            href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
            ><code>Object.keys</code></a
          > 或 <a
            href="/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"
            ><code>Object.entries</code></a
          >。
        </li>
        <li>
          <a href="/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in"
            >for...in</a
          >
          表达式允许你迭代一个对象的<em>可枚举</em>属性。
        </li>
        </ul>
      </div>
    </td>
    </tr>
    <tr>
      <th scope="row">性能</th>
      <td>
        <p>在频繁增删键值对的场景下表现更好。</p>
      </td>
      <td>
        <p>在频繁添加和删除键值对的场景下未作出优化。</p>
      </td>
    </tr>
    <tr>
      <th scope="row">序列化和解析</th>
      <td>
        <p>没有元素的序列化和解析的支持。</p>
        <p>（但是你可以使用携带 <em>replacer</em> 参数的 {{jsxref("JSON.stringify()")}} 创建一个自己的对 <code>Map</code> 的序列化和解析支持。参见 Stack Overflow 上的提问：<a href="https://stackoverflow.com/q/29085197/">How do you JSON.stringify an ES6 Map?</a>）</p>
      </td>
      <td>
        <p>原生的由 {{jsxref("Object")}} 到 JSON 的序列化支持，使用 {{jsxref("JSON.stringify()")}}。</p>
        <p>原生的由 JSON 到 {{jsxref("Object")}} 的解析支持，使用 {{jsxref("JSON.parse()")}}。</p>
      </td>
    </tr>
  </tbody>
</table>

### 设置对象属性

设置对象属性同样适用于 Map 对象，但容易造成困扰。

即，以下的代码能够正常运行（但不推荐）：

```js example-bad
const wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
```

但这种设置属性的方式不会改变 Map 的数据结构。它使用的是通用对象的特性。`'bla'` 的值未被存储在 Map 中，无法被查询到。其它的对这一数据的操作也会失败：

```js example-bad
wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
```

正确的存储数据到 Map 中的方式是使用 `set(key, value)` 方法。

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
  - : 创建 `Map` 对象

## 静态属性

- {{jsxref("Map.@@species", "get Map[@@species]")}}
  - : 用于创建派生对象的构造函数。

## 实例属性

- {{jsxref("Map.prototype.size")}}
  - : 返回 `Map` 对象中的键值对数量。

## 实例方法

- {{jsxref("Map.prototype.clear()")}}
  - : 移除 `Map` 对象中所有的键值对。
- {{jsxref("Map.delete", "Map.prototype.delete(<var>key</var>)")}}
  - : 移除 `Map` 对象中指定的键值对，如果键值对存在并成功被移除，返回 `true`，否则返回 `false`。调用 `delete` 后再调用 `Map.prototype.has(key)` 将返回 `false`。
- {{jsxref("Map.get", "Map.prototype.get(<var>key</var>)")}}
  - : 返回与 `key` 关联的值，若不存在关联的值，则返回 `undefined`。
- {{jsxref("Map.has", "Map.prototype.has(<var>key</var>)")}}
  - : 返回一个布尔值，用来表明 `Map` 对象中是否存在与 `key` 关联的值。
- {{jsxref("Map.set", "Map.prototype.set(<var>key</var>, <var>value</var>)")}}
  - : 在 `Map` 对象中设置与指定的键 `key` 关联的值 `value`，并返回 `Map` 对象。

### 迭代方法

- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
  - : 返回一个新的迭代对象，其为一个包含 `Map` 对象中所有键值对的 **`[key, value]` 数组**，并以插入 `Map` 对象的顺序排列。
- {{jsxref("Map.prototype.keys()")}}
  - : 返回一个新的迭代对象，其中包含 `Map` 对象中所有的**键**，并以插入 `Map` 对象的顺序排列。
- {{jsxref("Map.prototype.values()")}}
  - : 返回一个新的迭代对象，其中包含 `Map` 对象中所有的**值**，并以插入 `Map` 对象的顺序排列。
- {{jsxref("Map.prototype.entries()")}}
  - : 返回一个新的迭代对象，其为一个包含 `Map` 对象中所有键值对的 **`[key, value]` 数组**，并以插入 `Map` 对象的顺序排列。
- {{jsxref("Map.forEach", "Map.prototype.forEach(<var>callbackFn</var>[,
    <var>thisArg</var>])")}}
  - : 以插入的顺序对 `Map` 对象中存在的键值对分别调用一次 `callbackFn`。如果给定了 `thisArg` 参数，这个参数将会是回调函数中 `this` 的值。

## 示例

### 使用 Map 对象

```js
const myMap = new Map();

const keyString = 'a string';
const keyObj = {};
const keyFunc = function() {};

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键 keyObj 关联的值");
myMap.set(keyFunc, "和键 keyFunc 关联的值");

myMap.size; // 3

// 读取值
myMap.get(keyString);    // "和键'a string'关联的值"
myMap.get(keyObj);       // "和键 keyObj 关联的值"
myMap.get(keyFunc);      // "和键 keyFunc 关联的值"

myMap.get('a string');   // "和键'a string'关联的值"
                         // 因为 keyString === 'a string'
myMap.get({});           // undefined，因为 keyObj !== {}
myMap.get(function() {}); // undefined，因为 keyFunc !== function () {}
```

### 将 NaN 作为 Map 的键

`NaN` 也可以作为 `Map` 对象的键。虽然 `NaN` 与任何值甚至与自己都不相等（`NaN !== NaN` 返回 true），但是因为所有的 `NaN` 的值都是无法区分的，所以下面的例子成立：

```js
const myMap = new Map()
myMap.set(NaN, 'not a number')

myMap.get(NaN)
// "not a number"

const otherNaN = Number('foo')
myMap.get(otherNaN)
// "not a number"
```

### 使用 for..of 方法迭代 Map

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

### 使用 forEach() 方法迭代 Map

`Map` 也可以通过 {{jsxref("Map.prototype.forEach", "forEach()")}} 方法迭代：

```js
myMap.forEach(function(value, key) {
  console.log(key + ' = ' + value)
})
// 0 = zero
// 1 = one
```

### Map 与数组的关系

```js
const kvArray = [["key1", "value1"], ["key2", "value2"]];

// 使用常规的 Map 构造函数可以将一个二维键值对数组转换成一个 Map 对象
const myMap = new Map(kvArray);

myMap.get("key1"); // 返回值为 "value1"

// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
console.log(Array.from(myMap)); // 输出和 kvArray 相同的数组

// 更简洁的方法来做如上同样的事情，使用展开运算符
console.log([...myMap]);

// 或者在键或者值的迭代器上使用 Array.from，进而得到只含有键或者值的数组
console.log(Array.from(myMap.keys())); // 输出 ["key1", "key2"]
```

### 复制或合并 Maps

`Map` 能像数组一样被复制：

```js
const original = new Map([
  [1, 'one']
]);

const clone = new Map(original);

console.log(clone.get(1)); // one
console.log(original === clone); // false. 浅比较 不为同一个对象的引用
```

> **备注：** 请记住，*数据本身*未被克隆。

`Map` 对象间可以进行合并，但是会保持键的唯一性。

```js
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的。
// 展开运算符本质上是将 Map 对象转换成数组。
const merged = new Map([...first, ...second]);

console.log(merged.get(1)); // uno
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

`Map` 对象也能与数组合并：

```js
const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// Map 对象同数组进行合并时，如果有重复的键值，则后面的会覆盖前面的。
const merged = new Map([...first, ...second, [1, 'eins']]);

console.log(merged.get(1)); // eins
console.log(merged.get(2)); // dos
console.log(merged.get(3)); // three
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- A polyfill of `Map` is available in
  [`core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
