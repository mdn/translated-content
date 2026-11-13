---
title: 内存管理
slug: Web/JavaScript/Guide/Memory_management
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

底层语言（如 C 语言）拥有手动的内存管理原语，例如：[`malloc()`](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) 和 [`free()`](https://zh.wikipedia.org/wiki/C动态内存分配#函数概述)。相反，JavaScript 是在创建对象时自动分配内存，并在不再使用时自动释放内存（_垃圾回收_）。这个自动性是混乱的潜在根源：它让开发者错误地以为他们不需要担心内存管理。

## 内存生命周期

不管什么程序语言，内存生命周期基本是一致的：

1. 分配你所需要的内存
2. 使用分配到的内存（读、写）
3. 不需要时将其释放

在所有语言中，第二点都是显式的。在底层语言中，第一点和第三点是显式的，但在高级语言中（如 JavaScript），大多数是隐式的。

### JavaScript 的内存分配

#### 值的初始化

为了不让程序员费心内存分配，JavaScript 在值初次声明时自动分配内存。

```js
const n = 123; // 为数值分配内存
const s = "azerty"; // 为字符串分配内存

const o = {
  a: 1,
  b: null,
}; // 为对象及其包含的值分配内存

// 为数组及其包含的值分配内存（就像对象一样）
const a = [1, null, "abra"];

function f(a) {
  return a + 2;
} // 为函数（可调用的对象）分配内存

// 函数表达式也会分配内存
someElement.addEventListener(
  "click",
  function () {
    someElement.style.backgroundColor = "blue";
  },
  false,
);
```

#### 通过函数调用分配内存

有些函数调用的结果是为对象分配内存：

```js
const d = new Date(); // 为 Date 对象分配内存

const e = document.createElement("div"); // 为 DOM 元素分配内存
```

有些方法为新值或新对象分配内存：

```js
const s = "azerty";
const s2 = s.substr(0, 3); // s2 是一个新的字符串
// 因为字符串是不可变的值，
// JavaScript 可能决定不分配内存，
// 只是存储了 [0-3] 的范围。

const a = ["yeah yeah", "no no"];
const a2 = ["generation", "no no"];
const a3 = a.concat(a2);
// 有四个元素的新数组，由 a 和 a2 其中的元素连接而成。
```

### 使用值

使用值基本上是指在分配的内存上进行读写。读写变量值或对象的属性值，甚至给函数传递参数都会使用值。

### 当内存不再需要使用时释放

大多数内存管理的问题出现在这个阶段。这个阶段最难的任务是确定已分配的内存何时不再需要了。

底层语言要求开发人员手动确定在程序的哪个点不再需要已分配的内存并释放这块内存。

一些高级语言（如 JavaScript）使用的是自动内存管理（也就是[垃圾回收](<https://zh.wikipedia.org/wiki/垃圾回收_(計算機科學)>)（GC））的形式。垃圾回收器的目的是监控内存分配和确定一块已分配的内存何时不再需要并释放这块内存。这个自动过程是个近似的说法，因为确定一块特定的内存是否仍然需要这个一般性问题是[无法判定的](http://en.wikipedia.org/wiki/Decidability_%28logic%29)。

## 垃圾回收

如上文所述，自动寻找一些内存是否“不再需要”这个一般性问题是无法判定的。因此，垃圾回收器对这个一般性问题实现了一个存在限制的解决方案。本节将解释理解主要的垃圾回收算法及其对应的局限所必须的概念。

### 引用

垃圾回收算法依赖的主要概念是引用。在内存管理的上下文中，如果一个对象有访问另一个对象的权限（隐式或者显式），称作前面的对象引用后面的对象。例如，一个 JavaScript 对象具有对它的[原型](/zh-CN/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)的引用（隐式引用）和对它属性的引用（显式引用）。

在这个上下文中，“对象”的概念不仅指常规的 JavaScript 对象，还包括函数作用域（或者全局词法作用域）。

### 引用计数垃圾回收

> [!NOTE]
> 现代 JavaScript 引擎不再使用引用计数进行垃圾回收。

这是最初级的垃圾回收算法。此算法把确定对象是否仍然需要这个问题简化为确定对象是否仍有其他引用它的对象。如果没有指向该对象的引用，那么该对象称作“垃圾”或者可回收的。

示例

```js
let x = {
  a: {
    b: 2,
  },
};
// 创建了两个对象。一个作为另一个的属性被引用。
// 另一个被赋值给变量‘x’。
// 很显然，没有可以被垃圾回收的对象。

let y = x;
// 变量‘y’是第二个拥有对象引用的变量。

x = 1;
// 现在，起初在‘x’中的对象有唯一的引用，就是变量‘y’。

let z = y.a;
// 引用对象的‘a’属性。
// 现在，这个对象有两个引用，一个作为属性，
// 另一个作为变量‘z’。

y = "mozilla";
// 起初在‘x’中的对象现在是零引用了。它可以被垃圾回收了。
// 但是，它的属性‘a’仍被变量‘z’引用，所以这个对象还不能回收。

z = null;
// 起初在 x 中的对象的属性‘a’是零引用了。这个对象可以被垃圾回收了。
```

循环引用是一个限制。在下面的例子中，创建了两个对象，一个对象的属性引用另一个对象，形成了一个循环。在函数调用结束之后，它们离开了函数作用域。在那个点，它们不再被需要了，为它们分配的内存应该被回收。然而，引用计数算法不会认为它们可以被回收，因为每个对象至少还有一个指向自己的引用，这样的结果就是它们两个都不会被标记为可以被垃圾回收。循环引用是内存泄露的常见原因。

```js
function f() {
  const x = {};
  const y = {};
  x.a = y; // x 引用 y
  y.a = x; // y 引用 x

  return "azerty";
}

f();
```

### 标记清除算法

这个算法将“对象不再需要”这个定义简化为“对象不可达”。

这个算法假定有一组叫做*根*的对象。在 JavaScript 中，根是全局对象。垃圾回收器将定期从这些根开始，找到从这些根能引用到的所有对象，然后找到从这些对象能引用到的所有对象，等等。从根开始，垃圾回收器将找到所有*可到达*的对象并收集所有不能到达的对象。

这个算法是对上一个算法的改进。因为对于引用计数算法，有零引用的对象实际上是不可达的，但是有引用的对象却不一定，就像在循环引用中看到的那样。

当前，所有现代的引擎搭载的是标记清除垃圾回收器。过去几年中，在 JavaScript 垃圾回收领域做出的改进（分代/增量/并发/并行垃圾回收）都是这个算法的实现改进，而不是垃圾回收算法本身的改进，也不是何时“对象不再需要”这个定义的简化。

这个方法的直接好处就是循环不再是一个问题。在上面的示例中，在函数调用返回之后，从全局对象可达的任何资源都将不再引用这两个对象。因此，垃圾回收器会认为它们不可达并回收为它们分配的内存。

然而，手动控制垃圾回收的能力仍不存在。有时候手动决定何时释放内存以及释放哪块内存会很方便。为了释放对象的内存，需要显式地变成不可达。在 JavaScript 中，编程式地触发垃圾回收也不可能——永不可能出现在核心语言中，尽管引擎可能在可选的标志中暴露了相关的 API。

## 配置引擎的内存模型

JavaScript 引擎典型地提供了暴露内存模型的标志。例如，Node.js 为配置和调试内存问题提供了暴露底层的 V8 机制的额外选项和工具。这个配置可能在浏览器中不能使用，Web 页面更不用说（通过 HTTP 标头，等等）。

最大可用堆内存可以通过使用标志来增加：

```bash
node --max-old-space-size=6000 index.js
```

使用标志和 [Chrome 调试器](https://nodejs.org/en/learn/getting-started/debugging) 也能为调试内存问题暴露垃圾回收器：

```bash
node --expose-gc --inspect index.js
```

## 帮助内存管理的数据结构

尽管 JavaScript 没有直接暴露垃圾回收器 API。但语言提供几个间接观察垃圾回收的数据结构，能用于内存管理。

### WeakMap 和 WeakSet

[`WeakMap`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) 和 [`WeakSet`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) 的 API 几乎镜像非 weak 版的：[`Map`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) 和 [`Set`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)。`WeakMap` 维护一个键 - 值对的集合，而 `WeakSet` 维护一个唯一值的集合，两者都能高效的添加、删除和查询。

`WeakMap` 和 `WeakSet` 的名字来源于*弱引用*值的概念。假设 `x` 被 `y` 弱引用，这意味着尽管你能通过 `y` 访问 `x` 的值，但如果 `x` 不再被*强引用*的话，标记清除算法不会认为 `x` 是可达的。大多数数据结构，除了在这讨论的这两个，都是强引用传入的对象，这样你才能在任意时间取回这些对象。只要程序中不再有键的引用，`WeakMap` 和 `WeakSet` 的键能被垃圾回收（对 `WeakMap` 对象，值接着也适合被回收）。这一点由两个特性确保：

- `WeakMap` 和 `WeakSet` 仅能存储对象或 symbol。这是因为仅对象是可垃圾回收的——原始值总是被复制的（也就是，`1 === 1` 但 `{} !== {}`），这让原始值永远呆在集合中。[已注册的 symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)（如 `Symbol.for("key")`）也是被复制，因此也不是可垃圾回收的，但是用 `Symbol("key")` 创建的 symbol 是可垃圾回收的。[内置通用 symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#内置通用（well-known）symbol)（如 `Symbol.iterator`）来自于一组固定的集合，在程序的整个声明周期中是唯一的，类似于固有对象（如 `Array.prototype`），所以它们也能作为键。
- `WeakMap` 和 `WeakSet` 是不可迭代的。这禁止你使用 `Array.from(map.keys()).length` 观察对象的存活性或获取任意适合垃圾回收的键的引用（垃圾回收应尽可能不可见）。

在典型的 `WeakMap` 和 `WeakSet` 的解释中（就像上面那样），通常暗示，键首先被垃圾回收，然后值也被垃圾回收。然而，考虑值引用键这个例子：

```js
const wm = new WeakMap();
const key = {};
wm.set(key, { key });
// 现在 `key` 不能被垃圾回收，
// 因为值引用了键，
// 并且值在 map 中是强引用！
```

假设 `key` 存储为真实的引用，它将创建一个循环引用，让键和值都不适合垃圾回收，即使在 `key` 没有被引用时——因为假设 `key` 被垃圾回收了，这意味着在某个特定的时刻，`value.key` 将指向一个不存在的地址，而这是非法的。为了修复这个，`WeakMap` 和 `WeakSet` 的条目不是真正的引用，而是[临时对象](https://dl.acm.org/doi/pdf/10.1145/263700.263733)（对标记清除机制的增强）。[Barros 等人](https://www.jucs.org/jucs_14_21/eliminating_cycles_in_weak/jucs_14_21_3481_3497_barros.pdf)对算法提供了一个很好的总结（第 4 页）。引用一段：

> 临时对象是 weak pairs 的改进，在 pairs 中，键和值都不分类为弱或强。键的连接性决定了值的连接性，但值的连接性不会影响键的连接性。[...]当垃圾回收提供临时对象的支持时，它会出现三个阶段而不是两个（标记和清除）。

作为一个粗糙但走心的模型，将下列的实现当作 `WeakMap` 的实现：

> [!WARNING]
> 这不是 polyfill，也不接近引擎中的实现（引擎中的实现 hook 进了垃圾回收机制）。

```js
class MyWeakMap {
  #marker = Symbol("MyWeakMapData");
  get(key) {
    return key[this.#marker];
  }
  set(key, value) {
    key[this.#marker] = value;
  }
  has(key) {
    return this.#marker in key;
  }
  delete(key) {
    delete key[this.#marker];
  }
}
```

正如你所看到的，`MyWeakMap` 实际上永远没有保存一个键集合。它简单地将元数据添加到传入的每个对象中。对象接着通过标记清除被垃圾回收。因此，在 `WeakMap` 上进行迭代是不可能的，清除 `WeakMap` 也是不可能的（因为那也依赖于完整的键集合信息）。

更多有关它们的 API 的信息，参见[带键的集合](/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections)指南。

### WeakRefs 和 FinalizationRegistry

> [!NOTE]
> `WeakRef` 和 `FinalizationRegistry` 能直接内省进垃圾回收机制。[尽量避免使用](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef#尽量避免使用)，因为运行时语义几乎完全不受保证。

所有用对象作为值的变量都是那个对象的引用。然而，这样的引用是*强引用*——它们的存在会阻止垃圾回收器将对象标记为适合回收。[`WeakRef`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) 是对象的*弱引用*，这让对象能被垃圾回收，同时在对象的声明周期期间仍保留了读取对象的内容的能力。

一个 `WeakRef` 用例是将字符串 URL 映射为大对象的缓存系统。这个缓存系统我们不能使用 `WeakMap`。因为 `WeakMap` 对象的*键*是弱引用的，而不是*值*——如果你访问键，你将总是确定地得到值（因为能访问键意味着键仍然有效）。这里，从键得到的是 `undefined` 是没问题的（如果对应的值不再有效），因为我们只需要重新计算，但是我们不想让不可达的对象呆在缓存中。在这个例子中，我们使用普通的 `Map`，但是值使用 `WeakRef` 对象，而不是真正的对象值。

```js
function cached(getter) {
  // 一个 Map：从字符串 URL 到 WeakRef 结果
  const cache = new Map();
  return async (key) => {
    if (cache.has(key)) {
      const dereferencedValue = cache.get(key).deref();
      if (dereferencedValue !== undefined) {
        return dereferencedValue;
      }
    }
    const value = await getter(key);
    cache.set(key, new WeakRef(value));
    return value;
  };
}

const getImage = cached((url) => fetch(url).then((res) => res.blob()));
```

[`FinalizationRegistry`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) 提供了一个更强的机制观察垃圾回收。它让你注册对象以及对象被垃圾回收时得到通知。例如，对于上面的缓存系统这个例子，即使在 blob 自身被垃圾回收时，引用 blob 的 `WeakRef` 对象不会被垃圾回收——随着时间的积累，`Map` 可能积聚大量的无用条目。在这里的例子中，使用 `FinalizationRegistry` 能执行清除。

```js
function cached(getter) {
  // 一个 Map：从字符串 URL 到 WeakRef 结果
  const cache = new Map();
  // 每次值被垃圾回收之后，用缓存中的 key 作为参数调用回调，能移除缓存条目
  const registry = new FinalizationRegistry((key) => {
    // 注意：测试 WeakRef 真的为空很重要。否则，回调可能在用这个 key 添加新对象之后调用，然后那个新的、有效的对象就被删除了
    if (!cache.get(key)?.deref()) {
      cache.delete(key);
    }
  });
  return async (key) => {
    if (cache.has(key)) {
      return cache.get(key).deref();
    }
    const value = await getter(key);
    cache.set(key, new WeakRef(value));
    registry.register(value, key);
    return value;
  };
}

const getImage = cached((url) => fetch(url).then((res) => res.blob()));
```

出于性能和安全考虑，不会保证何时调用回调，或者是否会调用。它应该仅用于清除——非关键的清除。有其他更确定的资源管理的方式，例如 [`try...finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch)，总是会执行 `finally` 块。`WeakRef` 和 `FinalizationRegistry` 仅用于长时间运行的程序中的内存用量优化。

更多有关 [`WeakRef`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakRef) 和 [`FinalizationRegistry`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) 的 API 的信息，参见对应的参考页面。
