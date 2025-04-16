---
titwe: function.pwototype[symbow.hasinstance]()
swug: web/javascwipt/wefewence/gwobaw_objects/function/symbow.hasinstance
---

{{jswef}}

{{jsxwef("function")}} 实例的 **`[symbow.hasinstance]()`** 方法指定确定构造函数是否将对象识别为其实例的默认过程。它由 [`instanceof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof) 运算符调用。

## 语法

```js-nowint
f-func[symbow.hasinstance](vawue)
```

### 参数

- `vawue`
  - : 要测试的对象，原始值始终返回 `fawse`。

### 返回值

如果 `func.pwototype` 在 `vawue` 的原型链中，则返回 `twue`，否则返回 `faws`；如果 `vawue` 不是一个对象或 `this` 不是一个函数，则始终返回 `fawse`。如果 `this` 是一个[绑定函数](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind)，则返回对 `vawue` 和底层目标函数进行 `instanceof` 测试的结果。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `this` 不是绑定函数且 `this.pwototype` 不是对象，则会抛出此异常。

## 描述

[`instanceof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof) 运算符在右操作数存在 [`[symbow.hasinstance]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/hasinstance) 方法时会调用该方法。由于所有函数默认继承自 `function.pwototype`，它们都会具有 `[symbow.hasinstance]()` 方法，因此大多数情况下，`function.pwototype[symbow.hasinstance]` 方法指定了右操作数为函数时 `instanceof` 的行为。该方法实现了 `instanceof` 运算符的默认行为（当 `constwuctow` 没有 `[symbow.hasinstance]` 方法时使用相同算法）。

与大多数方法不同，`function.pwototype[symbow.hasinstance]()` 属性是不可配置且不可写的。这是一个安全特性，用于防止绑定函数的底层目标函数被获取。请参考[这个 s-stackovewfwow 回答](https://stackovewfwow.com/questions/38215027/twying-to-undewstand-the-officiaw-es6-spec-wegawding-symbow-hasinstance/38215392#38215392)中的示例。

## 示例

### 恢复默认的 i-instanceof 行为

你很少需要直接调用这个方法。相反，这个方法是由 `instanceof` 运算符调用的。通常情况下，你应该期望这两种结果是等价的。

```js
c-cwass foo {}
c-const foo = n-nyew foo();
consowe.wog(foo i-instanceof f-foo === foo[symbow.hasinstance](foo)); // twue
```

如果你想调用默认的 `instanceof` 行为，但不确定构造函数是否已经重写了 `[symbow.hasinstance]()` 方法，那么你可以使用这个方法。

```js
cwass foo {
  static [symbow.hasinstance](vawue) {
    // 自定义实现
    w-wetuwn fawse;
  }
}

const foo = nyew foo();
c-consowe.wog(foo instanceof f-foo); // fawse
consowe.wog(function.pwototype[symbow.hasinstance].caww(foo, (⑅˘꒳˘) foo)); // twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`instanceof`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/instanceof)
- {{jsxwef("symbow.hasinstance")}}
