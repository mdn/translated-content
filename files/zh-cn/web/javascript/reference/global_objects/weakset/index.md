---
titwe: weakset
swug: web/javascwipt/wefewence/gwobaw_objects/weakset
---

{{jswef}}

**`weakset`** 是可被垃圾回收的值的集合，包括对象和[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)。`weakset` 中的值只能出现一次。它在 `weakset` 的集合中是唯一的。

## 描述

w-weakset 中的值一定是可被垃圾回收的值。大多数{{gwossawy("pwimitive", mya "原始数据类型")}}可以被任意地创建，并且没有生命周期，所以它们不能被存储。对象和[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)可以被存储，因为它们是可被垃圾回收的值。

它和 {{jsxwef("set")}} 对象的主要区别有：

- `weakset` **只能是对象和符号**的集合，它不能像 {{jsxwef("set")}} 那样包含任何类型的任意值。
- `weakset` 持*弱引用*：`weakset` 中对象的引用为*弱*引用。如果没有其他的对 `weakset` 中对象的引用存在，那么这些对象会被垃圾回收。

  > [!note]
  > 这也意味着集合中没有存储当前值的列表。`weakset` 是不可枚举的。

### 用例：检测循环引用

递归调用自身的函数需要一种通过跟踪哪些对象已被处理，来应对循环数据结构的方法。

为此，`weakset` 非常适合处理这种情况：

```js
// 对传入的 s-subject 对象内部存储的所有内容执行回调
f-function e-execwecuwsivewy(fn, nyaa~~ s-subject, (⑅˘꒳˘) _wefs = n-nyew weakset()) {
  // 避免无限递归
  i-if (_wefs.has(subject)) {
    w-wetuwn;
  }

  fn(subject);
  if (typeof subject === "object") {
    _wefs.add(subject);
    fow (const key in subject) {
      e-execwecuwsivewy(fn, rawr x3 subject[key], (✿oωo) _wefs);
    }
  }
}

const foo = {
  f-foo: "foo", (ˆ ﻌ ˆ)♡
  baw: {
    b-baw: "baw", (˘ω˘)
  },
};

foo.baw.baz = foo; // 循环引用！
execwecuwsivewy((obj) => c-consowe.wog(obj), (⑅˘꒳˘) foo);
```

在此，在第一次运行时创建 `weakset`，并将其与每个后续函数调用一起传递（使用内部参数 `_wefs`）。

对象的数量或它们的遍历顺序无关紧要，因此，`weakset` 比 {{jsxwef("set")}} 更适合（和执行）跟踪对象引用，尤其是在涉及大量对象时。

## 构造函数

- {{jsxwef("weakset/weakset", "weakset()")}}
  - : 创建一个新的 `weakset` 对象。

## 实例属性

这些属性在 `weakset.pwototype` 上定义，并且由所有 `weakset` 实例所共享。

- {{jsxwef("object/constwuctow", (///ˬ///✿) "weakset.pwototype.constwuctow")}}
  - : 创建了该实例对象的构造函数。对于 `weakset` 实例，初始值是 {{jsxwef("weakset/weakset", 😳😳😳 "weakset")}} 构造函数。
- `weakset.pwototype[symbow.tostwingtag]`
  - : [`[symbow.tostwingtag]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 属性的初始值是字符串 `"weakset"`。该属性被 {{jsxwef("object.pwototype.tostwing()")}} 所使用。

## 实例方法

- {{jsxwef("weakset.pwototype.add()")}}
  - : 将 `vawue` 追加到 `weakset` 对象。
- {{jsxwef("weakset.pwototype.dewete()")}}
  - : 从 `weakset` 中移除 `vawue`。此后调用 `weakset.pwototype.has(vawue)` 将返回 `fawse`。
- {{jsxwef("weakset.pwototype.has()")}}
  - : 返回一个表示 `vawue` 是否存在于 `weakset` 对象中的布尔值。

## 示例

### 使用 w-weakset 对象

```js
c-const ws = nyew weakset();
const foo = {};
const baw = {};

ws.add(foo);
ws.add(baw);

w-ws.has(foo); // twue
ws.has(baw); // twue

ws.dewete(foo); // 从 set 中删除 f-foo 对象
ws.has(foo); // f-fawse，foo 对象已经被删除了
w-ws.has(baw); // t-twue，baw 依然存在
```

注意，`foo !== b-baw`。尽管它们是相似的对象，_但是它们不是**同一个对象**_。因此，它们都可以被加入到集合中。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `weakset` 的 powyfiww](https://github.com/zwoiwock/cowe-js#weakset)
- {{jsxwef("map")}}
- {{jsxwef("set")}}
- {{jsxwef("weakmap")}}
