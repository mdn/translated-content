---
title: 带键的集合
slug: Web/JavaScript/Guide/Keyed_collections
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_objects")}}

这一章介绍由 key 值标记的数据容器；Map 和 Set 对象承载的数据元素可以按照插入时的顺序被迭代遍历。

## 映射

### `Map`对象

ECMAScript 2015 引入了一个新的数据结构来将一个值映射到另一个值。一个{{jsxref("Map")}}对象就是一个简单的键值对映射集合，可以按照数据插入时的顺序遍历所有的元素。

下面的代码演示了使用`Map`进行的一些基本操作。请参考{{jsxref("Map")}}以获取更多的样例和完整的 API。你可以使用{{jsxref("Statements/for...of","for...of")}}循环来得到所有的`[key, value]`。

```js
var sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (var [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```

### `Object`和`Map`的比较

一般地，{{jsxref("Object", "objects", "", 1)}}会被用于将字符串类型映射到数值。`Object`允许设置键值对、根据键获取值、删除键、检测某个键是否存在。而`Map`具有更多的优势。

- `Object` 的键均为 `String` 类型，在 `Map` 里键可以是任意类型。
- 必须手动计算`Object`的尺寸，但是可以很容易地获取使用`Map`的尺寸。
- `Map`的遍历遵循元素的插入顺序。
- `Object`有原型，所以映射中有一些缺省的键。（可以用 `map = Object.create(null) 回避`）。

这三条提示可以帮你决定用`Map`还是`Object`：

- 如果键在运行时才能知道，或者所有的键类型相同，所有的值类型相同，那就使用`Map`。
- 如果需要将原始值存储为键，则使用`Map`，因为`Object`将每个键视为字符串，不管它是一个数字值、布尔值还是任何其他原始值。
- 如果需要对个别元素进行操作，使用`Object`。

### `WeakMap`对象

{{jsxref("WeakMap")}}对象也是键值对的集合。它的**键必须是对象类型**，值可以是任意类型。它的键被弱保持，也就是说，当其键所指对象没有其他地方引用的时候，它会被 GC 回收掉。`WeakMap`提供的接口与`Map`相同。

与`Map`对象不同的是，`WeakMap`的键是不可枚举的。不提供列出其键的方法。列表是否存在取决于垃圾回收器的状态，是不可预知的。

可以在"Why *Weak*Map?"{{jsxref("WeakMap")}}查看更多信息和示例。

`WeakMap`对象的一个用例是存储一个对象的私有数据或隐藏实施细节。Nick Fitzgerald 的博文["Hiding Implementation Details with ECMAScript 6 WeakMaps"](http://fitzgeraldnick.com/weblog/53/)提供了一个例子。对象内部的私有数据和方法被存储在`WeakMap`类型的`privates`变量中。所有暴露出的原型和情况都是公开的，而其他内容都是外界不可访问的，因为模块并未导出`privates`对象。

```js
const privates = new WeakMap();

function Public() {
  const me = {
    // Private data goes here
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // Do stuff with private data in `me`...
};

module.exports = Public;
```

## 集合

### `Set`对象

{{jsxref("Set")}}对象是一组值的集合，这些值是不重复的，可以按照添加顺序来遍历。

这里演示了`Set`的基本操作，更多示例和完整 API 可以参考{{jsxref("Set")}}。

```js
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
```

### 数组和集合的转换

可以使用{{jsxref("Array.from")}}或[展开操作符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator)来完成集合到数组的转换。同样，`Set`的构造器接受数组作为参数，可以完成从`Array`到`Set`的转换。需要重申的是，`Set`对象中的值不重复，所以数组转换为集合时，所有重复值将会被删除。

```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);
```

### `Array`和`Set`的对比

一般情况下，在 JavaScript 中使用数组来存储一组元素，而新的集合对象有这些优势：

- 数组中用于判断元素是否存在的{{jsxref("Array.indexOf", "indexOf")}} 函数效率低下。
- `Set`对象允许根据值删除元素，而数组中必须使用基于下标的 splice 方法。
- 数组的`indexOf`方法无法找到{{jsxref("NaN")}}值。
- `Set`对象存储不重复的值，所以不需要手动处理包含重复值的情况。

### `WeakSet`对象

{{jsxref("WeakSet")}}对象是一组对象的集合。`WeakSet`中的对象不重复且不可枚举。

与{{jsxref("Set")}}对象的主要区别有：

- `WeakSets`中的值必须是对象类型，不可以是别的类型
- `WeakSet`的“_weak_”指的是，对集合中的对象，如果不存在其他引用，那么该对象将可被垃圾回收。于是不存在一个当前可用对象组成的列表，所以`WeakSets`不可枚举

`WeakSet`的用例很有限，比如使用 DOM 元素作为键来追踪它们而不必担心内存泄漏。

## `Map`的键和`Set`的值的等值判断

`Map`的键和`Set`的值的等值判断都基于[same-value-zero algorithm](https://tc39.es/ecma262/#sec-samevaluezero)：

- 判断使用与`===`相似的规则。
- `-0`和`+0`相等。
- {{jsxref("NaN")}}与自身相等（与`===`有所不同）。

{{PreviousNext("Web/JavaScript/Guide/Indexed_Collections", "Web/JavaScript/Guide/Working_with_objects")}}
