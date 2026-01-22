---
title: WeakRef
slug: Web/JavaScript/Reference/Global_Objects/WeakRef
---

**`WeakRef`** 对象允许你保留对另一个对象的弱引用，但不会阻止垃圾回收（GC）清理被弱引用的对象。

## 描述

`WeakRef` 对象包含对对象的弱引用，这个弱引用被称为该 WeakRef 对象的 _target_ 或者是 _referent_。对象的*弱引用*是指该引用不会阻止 GC 回收这个对象。而与此相反的，一个普通的引用（或者说*强引用*）会将与之对应的对象保存在内存中。只有当该对象没有任何的强引用时，JavaScript 引擎 GC 才会销毁该对象并且回收该对象所占的内存空间。如果上述情况发生了，那么你就无法通过任何的弱引用来获取该对象。

> [!NOTE]
> 在使用前请阅读[尽量避免使用](#尽量避免使用)，对于 WeakRef 对象的使用要慎重考虑，**能不使用就尽量不要使用**

## 构造函数

- {{jsxref("WeakRef/WeakRef", "WeakRef()")}}
  - : 创建一个 WeakRef 对象

## 实例方法

- {{jsxref("WeakRef.deref", "WeakRef.prototype.deref()")}}
  - : 返回当前实例的 WeakRef 对象所绑定的 target 对象，如果该 target 对象已被 GC 回收则返回`undefined`

## 尽量避免使用

正确使用 WeakRef 对象需要仔细的考虑，最好尽量避免使用。避免依赖于规范没有保证的任何特定行为也是十分重要的。何时、如何以及是否发生垃圾回收取决于任何给定 JavaScript 引擎的实现。**GC 在一个 JavaScript 引擎中的行为有可能在另一个 JavaScript 引擎中的行为大相径庭，或者甚至在同一类引擎，不同版本中 GC 的行为都有可能有较大的差距**。GC 目前还是 JavaScript 引擎实现者不断改进和改进解决方案的一个难题。

以下是 WeakRef 提案的作者在其解释文件（[explainer document](https://github.com/tc39/proposal-weakrefs/blob/master/README.md)）中提出的一些具体观点

> [垃圾回收](<https://zh.wikipedia.org/wiki/垃圾回收_(計算機科學)>)是复杂的。如果某个应用或者库依赖于 GC 及时、可预测地清理 WeakRef 或者调用终结器的\[清理回调]。那么它很可能让人失望：清理工作可能比预期晚得多，甚至根本没有。差异的来源包括：
>
> - 由于分代收集等原因，即使两个对象同时变得不可达，其中一个对象也可能比另一个对象早得多被垃圾回收。
> - 垃圾回收工作可以通过增量和并发技术在一段时间内分散进行。
> - 引擎会使用多种运行时策略来平衡内存占用与响应速度。
> - JavaScript 引擎可能对看似不可达的对象持有引用（例如，在闭包中或内联缓存中）。
> - 不同的 JavaScript 引擎对这些处理方式可能存在差异，而且同一引擎可能随着版本改变其算法。
> - 一些复杂因素比如使用特定 API 也可能导致对象的存活时间超出预期。

## 关于 WeakRef 的说明

- 如果你的代码刚刚为目标对象创建了 WeakRef，或者从 WeakRef 的 deref 方法获取了目标对象，在当前 JavaScript [job](https://tc39.es/ecma262/#job) (包括在脚本作业末尾运行的任何 promise reaction 作业) 结束之前，不会回收该目标对象。也就是说，你只能“看到”在事件循环的两次循环之间回收的对象。这主要是为了避免在代码中显示任何给定 JavaScript 引擎的 GC 行为 ------ 因为如果不这样的话，那么人们会根据这个行为来编写代码，而当 GC 的行为改变时，就会造成不可预知的后果。(GC 是一个棘手的问题；JavaScript 引擎实现者依然不断地改进和改进它的工作方式)
- 如果多个`WeakRef`s 有相同的目标，那么他们的 target 对象是一样的。对其中一个调用 deref 的结果将与对另一个调用 deref 的结果匹配（在同一个作业中），你不会从其中一个获取目标对象，而是从另一个获取未定义的对象。
- 如果一个对象是 WeakRef 的 target，又是 in a {{jsxref("FinalizationRegistry")}},那么该 target 就会在调用与注册表关联的任何清理回调之前或者同时被清理。如果清理回调调用对象的 WeakRef 上的 deref，它将收到`undefined`
- 你不能更改 WeakRef 的 target，它将始终是第一次指定的 target 或者在回收该 target 时会定义
- WeakRef 可能永远不会从 deref 返回 undefined，即使没有什么东西能很好地保存 target，因为 GC 可能永远不会决定回收对象。

## 示例

### 使用 WeakRef 对象

这个例子演示了在一个 DOM 元素中启动一个计数器，当这个元素不存在时停止：

```js
class Counter {
  constructor(element) {
    // Remember a weak reference to the DOM element
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      // Get the element from the weak reference, if it still exists
      const element = this.ref.deref();
      if (element) {
        element.textContent = ++this.count;
      } else {
        // The element doesn't exist anymore
        console.log("The element is gone.");
        this.stop();
        this.ref = null;
      }
    };

    tick();
    this.timer = setInterval(tick, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

const counter = new Counter(document.getElementById("counter"));
counter.start();
setTimeout(() => {
  document.getElementById("counter").remove();
}, 5000);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("FinalizationRegistry")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
