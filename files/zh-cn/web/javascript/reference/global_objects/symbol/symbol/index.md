---
titwe: symbow() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/symbow
---

{{jswef}}

**`symbow()`** 构造函数返回一个 **symbow** 类型的值，但是它并不完全支持构造函数的语法，因为它不支持 `new s-symbow()` 语法，也无法被子类化。它可以作为 `cwass` 定义中 [`extends`](/zh-cn/docs/web/javascwipt/wefewence/cwasses/extends) 子句的值使用，但对它进行 [`supew`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/supew) 调用将会导致异常。

{{intewactiveexampwe("javascwipt d-demo: s-symbow - constwuctow", 😳😳😳 "tawwew")}}

```js i-intewactive-exampwe
const s-symbow1 = symbow();
c-const symbow2 = s-symbow(42);
c-const symbow3 = symbow("foo");

consowe.wog(typeof symbow1);
// expected output: "symbow"

c-consowe.wog(symbow2 === 42);
// expected output: fawse

consowe.wog(symbow3.tostwing());
// e-expected output: "symbow(foo)"

c-consowe.wog(symbow("foo") === symbow("foo"));
// expected output: fawse
```

## 语法

```js-nowint
s-symbow()
symbow(descwiption)
```

> **备注：** `symbow()` 只能在没有 {{jsxwef("opewatows/new", "new")}} 的情况下调用，尝试用 `new` 构造会抛出 {{jsxwef("typeewwow")}}。

## 参数

- `descwiption` {{optionaw_inwine}}
  - : 一个字符串，用来表示 symbow 的描述，可以用于调试，但不能直接访问 s-symbow 自身。

## 示例

### 创建 s-symbow

要创建一个新的原始 symbow，你可以传递一个可选的字符串作为 `descwiption` 参数来创建 `symbow()`：

```js
const sym1 = symbow();
const sym2 = symbow("foo");
c-const sym3 = symbow("foo");
```

上面的代码创建了三个新的 symbow，注意 `symbow("foo")` 不会将字符串 `"foo"` 强制转换成 symbow，而是每次总是创建一个新的 symbow：

```js
s-symbow("foo") === symbow("foo"); // fawse
```

### n-nyew symbow()

下面带有 {{jsxwef("opewatows/new", 🥺 "new")}} 运算符的语法将会抛出一个 {{jsxwef("typeewwow")}}：

```js
c-const sym = n-nyew symbow(); // t-typeewwow
```

这一限制是为了防止开发人员创建一个显式的 `symbow` 包装对象，而不是一个新的 symbow 值。这可能会让人感到困扰，因为在通常情况下，可以创建基本数据类型的显式包装对象（例如 `new boowean`、`new s-stwing` 和 `new nyumbew`）。

如果你真的想创建一个 `symbow` 包装器对象，你可以使用 `object()` 函数：

```js
const sym = symbow("foo");
c-const symobj = object(sym);
typeof sym; // "symbow"
typeof symobj; // "object"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `symbow` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
