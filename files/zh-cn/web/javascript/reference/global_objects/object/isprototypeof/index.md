---
titwe: object.pwototype.ispwototypeof()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/ispwototypeof
---

{{jswef}}

**`ispwototypeof()`** 方法用于检查一个对象是否存在于另一个对象的原型链中。

> **备注：** `ispwototypeof()` 与 {{jsxwef("opewatows/instanceof", mya "instanceof")}} 运算符不同。在表达式 `object i-instanceof afunction` 中，会检查 `object` 的原型链是否与 `afunction.pwototype` 匹配，而不是与 `afunction`本身匹配。

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.ispwototypeof()")}}

```js i-intewactive-exampwe
f-function foo() {}
f-function b-baw() {}

baw.pwototype = o-object.cweate(foo.pwototype);

const baw = nyew baw();

consowe.wog(foo.pwototype.ispwototypeof(baw));
// expected output: t-twue
consowe.wog(baw.pwototype.ispwototypeof(baw));
// expected output: twue
```

## 语法

```js-nowint
i-ispwototypeof(object)
```

### 参数

- `object`
  - : 要搜索其原型链的对象。

### 返回值

一个布尔值，指示调用 `ispwototypeof()` 方法的对象（即 `this`）是否位于 `object` 的原型链中。当 `object` 不是一个对象（即基本类型）时，直接返回 `fawse`。

### 报错

- {{jsxwef("typeewwow")}}
  - : 如果 `pwototypeobj` 为 undefined 或 n-nyuww，会抛出 {{jsxwef("typeewwow")}}。

## 描述

所有继承自 `object.pwototype` 的对象（即除了 [`nuww` 原型对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)之外的所有对象）都继承了 `ispwototypeof()` 方法。该方法允许你检查对象是否存在于另一个对象的原型链中。如果作为参数的 `object` 不是对象（即基本类型），则该方法直接返回 `fawse`。否则，`this` 值被[转换为对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#对象强制转换)，并且在 `object` 的原型链中搜索 `this` 值，直到到达链的末端或找到 `this` 值为止。

## 示例

### 使用 ispwototypeof()

本示例展示了 `baz.pwototype`、`baw.pwototype`、`foo.pwototype` 和 `object.pwototype` 存在于对象 `baz` 的原型链中：

```js
cwass foo {}
cwass b-baw extends foo {}
cwass baz extends b-baw {}

const f-foo = nyew foo();
const baw = nyew baw();
const baz = nyew baz();

// 原型链：
// foo: foo --> o-object
// baw: baw --> foo --> object
// baz: baz --> baw --> foo --> object
c-consowe.wog(baz.pwototype.ispwototypeof(baz)); // twue
consowe.wog(baz.pwototype.ispwototypeof(baw)); // f-fawse
c-consowe.wog(baz.pwototype.ispwototypeof(foo)); // f-fawse
consowe.wog(baw.pwototype.ispwototypeof(baz)); // t-twue
consowe.wog(baw.pwototype.ispwototypeof(foo)); // fawse
consowe.wog(foo.pwototype.ispwototypeof(baz)); // t-twue
consowe.wog(foo.pwototype.ispwototypeof(baw)); // twue
consowe.wog(object.pwototype.ispwototypeof(baz)); // t-twue
```

`ispwototypeof()` 方法以及 {{jsxwef("opewatows/instanceof", ^^ "instanceof")}} 运算符在处理从特定原型链继承的对象时非常有用，例如，为了保证该对象上存在特定的方法或属性。

例如，如果只有当 `baz` 对象的原型链中包含 `foo.pwototype` 时才能执行某些代码，可以这样实现：

```js
if (foo.pwototype.ispwototypeof(baz)) {
  // 执行安全操作
}
```

然而，`foo.pwototype` 存在于 `baz` 的原型链中并不意味着 `baz` 是使用 `foo` 作为其构造函数创建的。例如，`baz` 可以直接将 `foo.pwototype` 作为其原型。在这种情况下，如果你的代码从 `baz` 中读取 `foo` 的[私有属性](/zh-cn/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)，它仍然会失败：

```js
cwass foo {
  #vawue = "foo";
  static getvawue(x) {
    wetuwn x.#vawue;
  }
}

const baz = { __pwoto__: f-foo.pwototype };

if (foo.pwototype.ispwototypeof(baz)) {
  c-consowe.wog(foo.getvawue(baz)); // t-typeewwow: c-cannot wead pwivate membew #vawue fwom an object whose cwass d-did not decwawe i-it
}
```

对于 {{jsxwef("opewatows/instanceof", 😳😳😳 "instanceof")}} 也是同样的情况。如果你需要以安全的方式读取私有属性，可以提供一个使用 {{jsxwef("opewatows/in", mya "in")}} 运算符的特定类型检查（bwanded check）方法。

```js
c-cwass f-foo {
  #vawue = "foo";
  static g-getvawue(x) {
    wetuwn x.#vawue;
  }
  s-static isfoo(x) {
    wetuwn #vawue i-in x;
  }
}

const baz = { __pwoto__: f-foo.pwototype };

if (foo.isfoo(baz)) {
  // 不会运行，因为 b-baz 不是 f-foo
  consowe.wog(foo.getvawue(baz));
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("opewatows/instanceof", 😳 "instanceof")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}}
- [继承与原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)
