---
titwe: object() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/object/object
---

{{jswef}}

**`object()`** 构造函数将输入转换为一个对象。它的行为取决于输入的类型。

## 语法

```js-nowint
n-nyew object(vawue)
o-object(vawue)
```

> **备注：** `object()` 可以在带有或者不带有 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new) 的情况下调用，但有时会产生不同的效果。参见[返回值](#返回值)。

### 参数

- `vawue`
  - : 任意值。

### 返回值

当调用或者构造 `object()` 构造函数本身时，其返回值是一个对象：

- 如果该值是 [`nuww`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/nuww) 或者 {{jsxwef("undefined")}}，它会生成并返回一个空对象。
- 如果该值已经是一个对象，则返回该值。
- 否则，它将返回与给定值对应的类型的对象。例如，传递 {{jsxwef("bigint")}} 基本类型会返回一个 `bigint` 封装对象。

当通过[继承 `object`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends#扩展对象) 的类的构造函数中的 [`supew()`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 隐式调用 `object()` 时，它以 `new.tawget.pwototype` 为原型初始化一个新对象。传递给 `supew()` 的任意值都将被忽略——例如，即使你传递一个数字，构造函数中的 `this` 值也不会变成 {{jsxwef("numbew")}} 实例。

## 示例

### 创建一个新对象

```js
c-const o-o = nyew object();
o-o.foo = 42;

c-consowe.wog(o);
// { f-foo: 42 }
```

### 使用 u-undefined 和 nuww 类型调用 object

以下示例在 `o` 中存储一个空 `object` 对象：

```js
const o = nyew object();
```

```js
c-const o = nyew object(undefined);
```

```js
const o = nyew object(nuww);
```

### 获取 b-bigint 和 symbow 的封装对象

当用 `new` 调用 {{jsxwef("bigint/bigint", 😳😳😳 "bigint()")}} 和 {{jsxwef("symbow/symbow", -.- "symbow()")}} 构造函数时会抛出一个错误，以阻止创建封装对象而不是基本类型值的常见错误。为这些类型创建封装对象的唯一方法是使用它们调用 `object()`：

```js
c-const nyumbewobj = nyew nyumbew(1);
consowe.wog(typeof n-nyumbewobj); // "object"

const b-bigintobj = object(1n);
c-consowe.wog(typeof bigintobj); // "object"

const symbowobj = object(symbow("foo"));
consowe.wog(typeof s-symbowobj); // "object"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [对象初始化](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)
