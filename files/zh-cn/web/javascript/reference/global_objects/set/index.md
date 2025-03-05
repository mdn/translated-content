---
title: Set
slug: Web/JavaScript/Reference/Global_Objects/Set
l10n:
  sourceCommit: 9575097ee96531811fb8af7dd5f5e103cacf653d
---

{{JSRef}}

**`Set`** 对象允许你存储任何类型（无论是{{Glossary("Primitive", "原始值")}}还是对象引用）的唯一值。

## 描述

`Set` 对象是值的合集（collection）。集合（set）中的元素**只会出现一次**，即集合中的元素是唯一的。你可以按照插入顺序迭代集合中的元素。*插入顺序*对应于 [`add()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/add) 方法成功将每一个元素插入到集合中（即，调用 `add()` 方法时集合中不存在相同的元素）的顺序。

规范要求集合的实现是“对合集中的元素的平均访问时间与集合中元素的数量呈次线性关系”。因此，它可以在内部表示为哈希表（查找的时间复杂度为 O(1)）、搜索树（查找的时间复杂度为 O(log(N))）或任何其他的时间复杂度低于 O(N) 的数据结构。

### 值的相等

值的相等是基于[零值相等](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#零值相等)算法的。（曾使用会将 `0` 和 `-0` 视为不同值的[同值算法](/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#使用_object.is_进行同值相等比较)。参见[浏览器兼容性](#浏览器兼容性)。）这意味着 {{jsxref("NaN")}} 和 `NaN` 会被视为是相同的值（即使 `NaN !== NaN`），而所有其他的值则基于 `===` 运算符的语义进行相等比较。

### 性能

[`has`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/has) 方法检查某个值是否在集合中，其采用的方式的平均时间比逐个测试先前添加到集合中的元素更快。特别是当一个数组的长度（`length`）等于集合的大小（`size`）时，这比 [`Array.prototype.includes`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) 方法的平均速度更快。

### 集合运算

`Set` 对象提供了一些方法，允许你像进行数学运算一样组合集合。这些方法包括：

<table>
  <thead>
    <tr>
      <th scope="col">方法</th>
      <th scope="col">返回类型</th>
      <th scope="col">数学上等价于</th>
      <th scope="col">维恩图</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{jsxref("Set/difference", "A.difference(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∖</mo><mi>B</mi></mrow><annotation encoding="TeX">A\setminus B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="difference/diagram.svg" alt="具有两个相互重叠的圆的维恩图。A 和 B 的差集（difference）是 A 中不与 B 重叠的部分。" style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/intersection", "A.intersection(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cap B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="intersection/diagram.svg" alt="具有两个相互重叠的圆的维恩图。A 和 B 的交集（intersection）是它们重叠的部分。" style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/symmetricDifference", "A.symmetricDifference(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mo stretchy="false">(</mo><mi>A</mi><mo>∖</mo><mi>B</mi><mo stretchy="false">)</mo><mo>∪</mo><mo stretchy="false">(</mo><mi>B</mi><mo>∖</mo><mi>A</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">(A\setminus B)\cup(B\setminus A)</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="symmetricDifference/diagram.svg" alt="具有两个相互重叠的圆的维恩图。A 和 B 的对称差集（symmetric）是包含在任一圆但不包含在两个圆的区域。" style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/union", "A.union(B)")}}</td>
      <td><code>Set</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∪</mo><mi>B</mi></mrow><annotation encoding="TeX">A\cup B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="union/diagram.svg" alt="具有两个相互重叠的圆的维恩图。A 和 B 的并集（union）是包含在任一圆或两个圆的区域。" style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isDisjointFrom", "A.isDisjointFrom(B)")}}</td>
      <td><code>Boolean</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>∩</mo><mi>B</mi><mo>=</mo><mi>∅</mi></mrow><annotation encoding="TeX">A\cap B = \empty</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isDisjointFrom/diagram.svg" alt="具有两个相互重叠的圆的维恩图。A 和 B 是互不相交的（disjoint），因为圆没有重叠区域。" style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isSubsetOf", "A.isSubsetOf(B)")}}</td>
      <td><code>Boolean</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>⊆</mo><mi>B</mi></mrow><annotation encoding="TeX">A\subseteq B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isSubsetOf/diagram.svg" alt="具有两个相互重叠的圆的维恩图。A 是 B 的子集（subset），因为 A 完全包含在 B 中。" style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
    <tr>
      <td>{{jsxref("Set/isSupersetOf", "A.isSupersetOf(B)")}}</td>
      <td><code>Boolean</code></td>
      <td>
        <math><semantics><mrow><mi>A</mi><mo>⊇</mo><mi>B</mi></mrow><annotation encoding="TeX">A\supseteq B</annotation></semantics></math>
      </td>
      <td style="margin:0;padding:0"><img src="isSupersetOf/diagram.svg" alt="具有两个相互重叠的圆的维恩图。A 是 B 的超集（superset），因为 B 完全包含在 A 中。" style="margin:0;border:0;border-radius:0" width="200" /></td>
    </tr>
  </tbody>
</table>

为了使这些方法更具通用性，它们不仅接受 `Set` 对象，还可以接受任何[类集合对象](#类集合对象)。

### 类集合对象

所有[集合运算方法](#集合运算)要求 {{jsxref("Operators/this", "this")}} 是一个实际的 `Set` 实例，但它们的参数只需要是类集合对象。*类集合对象*是提供以下内容的对象：

- 一个 {{jsxref("Set/size", "size")}} 属性，包含一个数字。
- 一个 {{jsxref("Set/has", "has()")}} 方法，接受一个元素并返回一个布尔值。
- 一个 {{jsxref("Set/keys", "keys()")}} 方法，返回一个集合中的元素的[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。

例如，{{jsxref("Map")}} 对象是类集合对象，因为它们也具有 {{jsxref("Map/size", "size")}}、{{jsxref("Map/has", "has()")}} 和 {{jsxref("Map/keys", "keys()")}}，因此在集合方法中使用时，它们表现得就像键的集合：

```js
const a = new Set([1, 2, 3]);
const b = new Map([
  [1, "一"],
  [2, "二"],
  [4, "四"],
]);
console.log(a.union(b)); // Set(4) {1, 2, 3, 4}
```

> [!NOTE]
> 类集合协议调用 `keys()` 方法而不是 [`[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator) 来生成元素。这是为了使 Map 成为有效的类集合对象，因为对于 Map，迭代器生成*条目*，而 `has()` 方法接受*键*。

[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)不是类集合对象，因为它们没有 `has()` 方法或 `size` 属性，并且它们的 `keys()` 方法生成索引而不是元素。{{jsxref("WeakSet")}} 对象也不是类集合对象，因为它们没有 `keys()` 方法。

### 类 Set 浏览器 API

浏览器**类 `Set` 对象**（或“类集合对象”）是行为与 `Set` 类似的 [Web API](/zh-CN/docs/Web/API) 接口。

就像 `Set` 一样，元素可以按照它们被添加到对象的顺序进行迭代。类 `Set` 对象也有与 `Set` 相同名称和行为的属性及方法。但是，与 `Set` 不同的是，前者只允许每个条目特定的预定义类型。

允许的类型由规范的 IDL 定义给出。例如，{{domxref("GPUSupportedFeatures")}} 是一个类 `Set` 对象，它必须以字符串为键/值。规范的 IDL 对其的定义如下：

```webidl
interface GPUSupportedFeatures {
  readonly setlike<DOMString>;
};
```

类 `Set` 对象是只读或可读写的（参见上面的 IDL 中的 `readonly` 关键字）。

- 只读的类 `Set` 对象具有 [`size`](#set.prototype.size) 属性及以下方法：[`entries()`](#set.prototype.entries)、[`forEach()`](#set.prototype.foreach)、[`has()`](#set.prototype.has)、[`keys()`](#set.prototype.keys)、[`values()`](#set.prototype.values) 和 [`[Symbol.iterator]()`](#set.prototypesymbol.iterator)。
- 可写的类 `Set` 对象此外还具有以下方法：[`clear()`](#set.prototype.clear)、[`delete()`](#set.prototype.delete) 和 [`add()`](#set.prototype.add)。

除了对条目类型的限制外，方法和属性的行为与 `Set` 中的等效成员相同。

以下是只读的类 `Set` 浏览器对象的示例：

- {{domxref("GPUSupportedFeatures")}}
- {{domxref("XRAnchorSet")}}

以下是可写的类 `Set` 浏览器对象的示例：

- {{domxref("CustomStateSet")}}
- {{domxref("FontFaceSet")}}
- {{domxref("Highlight")}}

## 构造函数

- {{jsxref("Set/Set", "Set()")}}
  - : 创建一个新的 `Set` 对象。

## 静态属性

- [`Set[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species)
  - : 用于创建派生对象的构造函数。

## 实例属性

这些属性定义于 `Set.prototype` 上，且由所有 `Set` 实例共享。

- {{jsxref("Object/constructor", "Set.prototype.constructor")}}
  - : 创建示例对象的构造函数。对于 `Set` 实例，其初始值为 {{jsxref("Set/Set", "Set")}} 构造函数。
- {{jsxref("Set.prototype.size")}}
  - : 返回 `Set` 对象中值的数量。
- `Set.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值为字符串 `"Set"`。该属性用于 {{jsxref("Object.prototype.toString()")}}。

## 实例方法

- {{jsxref("Set.prototype.add()")}}
  - : 如果 `Set` 中尚不存在具有相同值的元素，则在 `Set` 对象中插入一个新的具有指定值的元素。
- {{jsxref("Set.prototype.clear()")}}
  - : 从 `Set` 对象中移除所有元素。
- {{jsxref("Set.prototype.delete()")}}
  - : 移除与 `value` 关联的元素，并返回一个布尔值来表示是否移除成功。`Set.prototype.has(value)` 会在此之后返回 `false`。
- {{jsxref("Set.prototype.difference()")}}
  - : 接受一个集合并返回一个新集合，该集合包含此集合中但不在给定集合中的元素。
- {{jsxref("Set.prototype.entries()")}}
  - : 返回一个新的迭代器对象，该对象包含 `Set` 对象中的代表每个元素的 **`[value, value]` 数组**。这与 {{jsxref("Map")}} 对象类似，因此 `Set` 的每个条目的 _key_ 和 _value_ 都相同。
- {{jsxref("Set.prototype.forEach()")}}
  - : 按照值插入的顺序为 `Set` 对象中的每个值调用一次 `callbackFn`。如果提供了 `thisArg` 参数，它将被用作每次调用 `callbackFn` 时的 `this` 值。
- {{jsxref("Set.prototype.has()")}}
  - : 返回一个布尔值，表示给定值在 `Set` 对象中是否存在。
- {{jsxref("Set.prototype.intersection()")}}
  - : 接受一个集合并返回一个新集合，该集合包含同时在此集合和给定集合中的元素。
- {{jsxref("Set.prototype.isDisjointFrom()")}}
  - : 接受一个集合并返回一个布尔值，指示此集合是否与给定集合没有共同元素。
- {{jsxref("Set.prototype.isSubsetOf()")}}
  - : 接受一个集合并返回一个布尔值，指示此集合的所有元素是否都在给定集合中。
- {{jsxref("Set.prototype.isSupersetOf()")}}
  - : 接受一个集合并返回一个布尔值，指示给定集合的所有元素是否都在此集合中。
- {{jsxref("Set.prototype.keys()")}}
  - : {{jsxref("Set.prototype.values()")}} 的别名。
- {{jsxref("Set.prototype.symmetricDifference()")}}
  - : 接受一个集合并返回一个新集合，该集合包含在此集合或给定集合中但不在另一者中的元素。
- {{jsxref("Set.prototype.union()")}}
  - : 接受一个集合并返回一个新集合，该集合包含在此集合或给定集合中的元素。
- {{jsxref("Set.prototype.values()")}}
  - : 返回一个新的迭代器对象，该对象按插入顺序生成 `Set` 对象中每个元素的**值**。
- [`Set.prototype[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator)
  - : 返回一个新的迭代器对象，该对象按插入顺序生成 `Set` 对象中每个元素的**值**。

## 示例

### 使用 Set 对象

```js
const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o 是不同对象的引用，所以这是可以的

mySet1.has(1); // true
mySet1.has(3); // false，因为并未将 3 添加到集合中
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // 从集合中移除 5
mySet1.has(5); // false，5 已从集合中移除

mySet1.size; // 4，因为我们刚刚移除了一个值

mySet1.add(5); // Set(5) { 1, 'some text', {...}, {...}, 5 }——先前删除的元素会作为新的元素被添加，不会保留删除前的原始位置

console.log(mySet1); // Set(5) { 1, "some text", {…}, {…}, 5 }
```

### 迭代集合

迭代会按元素的插入顺序访问集合中的元素。

```js
for (const item of mySet1) {
  console.log(item);
}
// 1、"some text"、{ "a": 1, "b": 2 }、{ "a": 1, "b": 2 }、5

for (const item of mySet1.keys()) {
  console.log(item);
}
// 1、"some text"、{ "a": 1, "b": 2 }、{ "a": 1, "b": 2 }、5

for (const item of mySet1.values()) {
  console.log(item);
}
// 1、"some text"、{ "a": 1, "b": 2 }、{ "a": 1, "b": 2 }、5

// 键和值是相同的
for (const [key, value] of mySet1.entries()) {
  console.log(key);
}
// 1、"some text"、{ "a": 1, "b": 2 }、{ "a": 1, "b": 2 }、5

// 使用 Array.from 将 Set 对象转换为数组对象
const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}, 5]

// 如果在 HTML 文档中使用，也可以：
mySet1.add(document.body);
mySet1.has(document.querySelector("body")); // true

// 在 Set 和 Array 之间转换
const mySet2 = new Set([1, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]

// 可以通过如下代码模拟求交集
const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));

// 可以通过如下代码模拟求差集
const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));

// 使用 forEach() 迭代集合中的条目
mySet2.forEach((value) => {
  console.log(value);
});
// 1
// 2
// 3
// 4
```

### 实现基本集合操作

```js
function isSuperset(set, subset) {
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  const _intersection = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function difference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

// 示例
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // 返回 true
union(setA, setC); // 返回 Set {1, 2, 3, 4, 5, 6}
intersection(setA, setC); // 返回 Set {3, 4}
symmetricDifference(setA, setC); // 返回 Set {1, 2, 5, 6}
difference(setA, setC); // 返回 Set {1, 2}
```

### 与数组的关系

```js
const myArray = ["value1", "value2", "value3"];

// 使用常规的 Set 构造函数将 Array 转换为 Set
const mySet = new Set(myArray);

mySet.has("value1"); // 返回 true

// 使用展开语法将 Set 转换为 Array。
console.log([...mySet]); // 将显示与 myArray 完全相同的数组
```

### 数组去重

```js
// 用于从数组中删除重复元素
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];

console.log([...new Set(numbers)]); // [2, 13, 4, 5, 6, 7, 32]
```

### 与字符串的关系

```js
// 大小写敏感（包含 "F" 和 "f"）
new Set("Firefox"); // Set(7) [ "F", "i", "r", "e", "f", "o", "x" ]

// 忽略重复项（"f" 出现了两次，但是只包含一个）
new Set("firefox"); // Set(6) [ "f", "i", "r", "e", "o", "x" ]
```

### 使用集合来确保一列值的唯一性

```js
const array = Array.from(document.querySelectorAll("[id]")).map((e) => e.id);

const set = new Set(array);
console.assert(set.size === array.length);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Set` 的 polyfill](https://github.com/zloirock/core-js#set)
- {{jsxref("Map")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
