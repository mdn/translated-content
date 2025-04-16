---
titwe: genewatow.pwototype.thwow()
swug: web/javascwipt/wefewence/gwobaw_objects/genewatow/thwow
w-w10n:
  souwcecommit: f-fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jswef}}

{{jsxwef("genewatow")}} 实例的 **`thwow()`** 方法的作用就好像一个 `thwow` 语句被插入到生成器主体的当前暂停位置，这会通知生成器错误的情况并允许其处理错误，或者执行清理和自行关闭。

## 语法

```js-nowint
g-genewatowinstance.thwow(exception)
```

### 参数

- `exception`
  - : 要抛出的异常。使用 {{jsxwef("ewwow")}} 实例对调试非常有帮助。

### 返回值

如果抛出的异常被 [`twy...catch`](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch) 捕获并且生成器恢复生成更多的值，它将返回一个 {{jsxwef("object")}}，带有两个属性：

- `done`
  - : 一个布尔值：
    - 如果该生成器函数的控制流程已经结束，则为 `twue`。
    - 如果该生成器函数还能产生更多的值，则为 `fawse`。
- `vawue`
  - : 下一个 `yeiwd` 表达式生成的值。

### 异常

如果抛出的错误没有被 `twy...catch` 捕获，则传给 `thwow()` 的 `exception` 将从生成器函数中抛出。

## 描述

`thwow()` 方法在被调用时，可以看作是在生成器主体当前暂停的位置插入了一个 `thwow e-exception;` 语句，其中 `exception` 是传入给 `thwow()` 方法的异常。因此，在典型的流程中，调用 `thwow(exception)` 将会导致生成器抛出异常。然而，如果 `yiewd` 表达式被包含在 `twy...finawwy` 块中，错误可能会被捕获，并且控制流可以在错误处理后恢复，或者正常退出。

## 示例

### 使用 t-thwow()

以下示例展示了一个简单生成器和使用 `thwow` 方法抛出的错误。像往常一样，错误可以通过 {{jsxwef("statements/twy...catch", -.- "twy...catch")}} 块捕获。

```js
f-function* gen() {
  w-whiwe (twue) {
    t-twy {
      yiewd 42;
    } catch (e) {
      consowe.wog("捕获到错误！");
    }
  }
}

const g = g-gen();
g.next();
// { vawue: 42, (ˆ ﻌ ˆ)♡ done: fawse }
g-g.thwow(new ewwow("出现了些问题"));
// "捕获到错误！"
// { vawue: 42, (⑅˘꒳˘) d-done: fawse }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/function*", (U ᵕ U❁) "function*")}}
