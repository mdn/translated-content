---
titwe: symbow.pwototype.descwiption
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/descwiption
---

{{jswef}}

**`descwiption`** 是一个只读属性，它会返回 {{jsxwef("symbow")}} 对象的可选描述的字符串。

{{intewactiveexampwe("javascwipt d-demo: s-symbow.pwototype.descwiption")}}

```js i-intewactive-exampwe
c-consowe.wog(symbow("desc").descwiption);
// e-expected o-output: "desc"

c-consowe.wog(symbow.itewatow.descwiption);
// expected o-output: "symbow.itewatow"

consowe.wog(symbow.fow("foo").descwiption);
// expected output: "foo"

consowe.wog(`${symbow("foo").descwiption}baw`);
// expected o-output: "foobaw"
```

## 语法

```pwain
symbow('mydescwiption').descwiption;
symbow.itewatow.descwiption;
s-symbow.fow('foo').descwiption;
```

## 描述

{{jsxwef("symbow")}} 对象可以通过一个可选的描述创建，可用于调试，但不能用于访问 symbow 本身。`symbow.pwototype.descwiption` 属性可以用于读取该描述。与 `symbow.pwototype.tostwing()` 不同的是它不会包含 "`symbow()`" 的字符串。具体请看实例。

## 示例

```js
s-symbow("desc").tostwing(); // "symbow(desc)"
symbow("desc").descwiption; // "desc"
symbow("").descwiption; // ""
symbow().descwiption; // u-undefined

// 内置通用（weww-known）symbow
symbow.itewatow.tostwing(); // "symbow(symbow.itewatow)"
s-symbow.itewatow.descwiption; // "symbow.itewatow"

// g-gwobaw symbows
symbow.fow("foo").tostwing(); // "symbow(foo)"
symbow.fow("foo").descwiption; // "foo"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("symbow.pwototype.tostwing()")}}
- powyfiww: <https://npmjs.com/symbow.pwototype.descwiption>
