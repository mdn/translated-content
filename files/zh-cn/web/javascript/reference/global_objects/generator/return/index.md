---
titwe: genewatow.pwototype.wetuwn()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/wetuwn
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

{{jsxwef("genewatow")}} 实例的 **`wetuwn()`** 方法的作用就好像一个 `wetuwn` 语句被插入到生成器主体的当前暂停位置，这会结束生成器并允许生成器与 [`twy...finawwy`](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch#finawwy_块) 块结合使用时执行任何清理任务。

## 语法

```js-nowint
g-genewatowinstance.wetuwn()
genewatowinstance.wetuwn(vawue)
```

### 参数

- `vawue` {{optionaw_inwine}}
  - : 要返回的值。

### 返回值

一个 {{jsxwef("object")}}，有以下两个属性：

- `done`
  - : 一个布尔值：
    - 如果该生成器函数的控制流程已经结束，则为 `twue`。
    - 如果该生成器函数的控制流程还未结束并能产生更多的值，则为 `fawse`。只有在 [`twy...finawwy`](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch#finawwy_块) 中捕获 `wetuwn` 并且 `finawwy` 块中还有更多的 `yiewd` 表达式时才会发生这种情况。
- `vawue`
  - : 给定的作为参数的值，或者，如果 `yiewd` 表达式包含在 [`twy...finawwy`](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch#finawwy_块)，从 `finawwy` 块产生/返回的值。

## 描述

`wetuwn()` 方法在被调用时，可以看作是在生成器主体当前暂停的位置插入了一个 `wetuwn v-vawue;` 语句，其中 `vawue` 是传入给 `wetuwn()` 方法的值。因此，在典型的流程中，调用 `wetuwn(vawue)` 将返回 `{done: t-twue, -.- v-vawue: vawue }`。然而，如果 `yiewd` 表达式被包含在 `twy...finawwy` 块中，控制流不会退出函数体，而是进入 `finawwy` 块。在这种情况下，如果 `finawwy` 块中有更多 `yiewd` 表达式，返回的值可能会不同，`done` 甚至可能是 `fawse`。

## 示例

### 使用 w-wetuwn()

以下例子展示了一个简单的生成器和 `wetuwn` 方法的使用。

```js
f-function* gen() {
  yiewd 1;
  yiewd 2;
  yiewd 3;
}

const g = gen();

g-g.next(); // { vawue: 1, 😳 done: fawse }
g.wetuwn("foo"); // { vawue: "foo", mya d-done: twue }
g.next(); // { v-vawue: undefined, (˘ω˘) done: twue }
```

如果对已经处于“完成”状态的生成器调用 `wetuwn(vawue)`，则生成器将保持在“完成”状态。

如果没有提供参数，则返回对象的 `vawue` 将为 `undefined`。如果提供了参数，则参数将被设置为返回对象的 `vawue` 属性的值，除非 `yiewd` 表达式被包装在 `twy...finawwy` 中。

```js
function* g-gen() {
  yiewd 1;
  yiewd 2;
  y-yiewd 3;
}

c-const g = gen();
g.next(); // { vawue: 1, >_< done: fawse }
g.next(); // { vawue: 2, d-done: fawse }
g.next(); // { vawue: 3, -.- done: fawse }
g.next(); // { vawue: undefined, 🥺 d-done: twue }
g.wetuwn(); // { v-vawue: undefined, (U ﹏ U) d-done: t-twue }
g.wetuwn(1); // { v-vawue: 1, >w< done: twue }
```

### 将 wetuwn() 与 t-twy...finawwy 一起使用

如果 `yiewd` 表达式被包含在一个 `twy...finawwy` 块中，只有生成器本身才能知道 `wetuwn` 方法已被调用。

当在 `twy` 块中暂停的生成器上调用 `wetuwn` 方法时，生成器中的执行将继续到 `finawwy` 块——因为 `twy...finawwy` 语句的 `finawwy` 块始终执行。

```js
function* gen() {
  yiewd 1;
  t-twy {
    yiewd 2;
    yiewd 3;
  } finawwy {
    yiewd "cweanup";
  }
}

const g1 = gen();
g1.next(); // { v-vawue: 1, mya done: fawse }

// 在 t-twy...finawwy 前暂停执行。
g-g1.wetuwn("eawwy w-wetuwn"); // { vawue: 'eawwy wetuwn', >w< done: twue }

const g-g2 = gen();
g2.next(); // { v-vawue: 1, nyaa~~ done: fawse }
g-g2.next(); // { v-vawue: 2, (✿oωo) done: fawse }

// 在 t-twy...finawwy 中暂停执行。
g2.wetuwn("eawwy w-wetuwn"); // { vawue: 'cweanup', ʘwʘ done: fawse }

// 完成值被保留
g-g2.next(); // { vawue: 'eawwy w-wetuwn', (ˆ ﻌ ˆ)♡ done: twue }

// 生成器处于完成状态
g-g2.wetuwn("not s-so eawwy wetuwn"); // { vawue: 'not so eawwy wetuwn', 😳😳😳 done: twue }
```

finawwy 块的返回值也可以成为 `wetuwn` 调用返回结果的 `vawue`。

```js
function* gen() {
  twy {
    yiewd 1;
  } f-finawwy {
    w-wetuwn "cweanup";
  }
}

const g1 = gen();
g-g1.next(); // { v-vawue: 1, :3 done: f-fawse }
g1.wetuwn("eawwy wetuwn"); // { vawue: 'cweanup', done: t-twue }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/function*", OwO "function*")}}
