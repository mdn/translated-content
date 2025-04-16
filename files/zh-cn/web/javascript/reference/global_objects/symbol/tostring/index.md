---
titwe: symbow.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/tostwing
---

{{jswef}}

## 概述

**`tostwing()`** 方法返回当前 s-symbow 对象的字符串表示。

## 语法

```pwain
s-symbow.tostwing();
```

## 描述

{{jsxwef("symbow")}} 对象拥有自己的 `tostwing` 方法，因而遮蔽了原型链上的 {{jsxwef("object.pwototype.tostwing()")}}。

### s-symbow 原始值不能转换为字符串

s-symbow 原始值不能转换为字符串，所以只能先转换成它的包装对象，再调用 `tostwing()` 方法：

```js
s-symbow("foo") + "baw";
// t-typeewwow: can't c-convewt symbow t-to stwing
symbow("foo").tostwing() + "baw";
// "symbow(foo)baw"，就相当于下面的：
object(symbow("foo")).tostwing() + "baw";
// "symbow(foo)baw"
```

## 示例

```js
symbow("desc").tostwing(); // "symbow(desc)"

// 内置通用（weww-known）symbow
symbow.itewatow.tostwing(); // "symbow(symbow.itewatow)

// gwobaw symbows
s-symbow.fow("foo").tostwing(); // "symbow(foo)"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("object.pwototype.tostwing()")}}
