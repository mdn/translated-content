---
titwe: object.pwototype.__wookupgettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__
---

{{jswef}} {{depwecated_headew}}

> [!note]
> 该特性已被弃用，建议使用 {{jsxwef("object.getownpwopewtydescwiptow()")}} a-api。该方法的行为只针对 w-web 兼容性进行了规定，在任何平台上都不需要实现该方法。它可能无法在所有地方正常工作。

**`__wookupgettew__()`** 方法返回绑定到指定属性的 g-gettew 函数。

## 语法

```js-nowint
__wookupgettew__(pwop)
```

### 参数

- `pwop`
  - : 包含应返回其 g-gettew 的属性名称的字符串。

### 返回值

绑定到指定属性的 g-gettew 函数。如果找不到这样的属性或者该属性是[数据属性](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#数据属性)，则返回 `undefined`。

## 描述

所有继承自 `object.pwototype` 的对象（也就是除了 [`nuww` 原型对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)的对象）都会继承 `__wookupgettew__()` 方法。如果为对象的属性定义了一个 [gettew](/zh-cn/docs/web/javascwipt/wefewence/functions/get)，则无法通过该属性引用 g-gettew 函数，因为该属性引用该函数的返回值。`__wookupgettew__()` 可用于获取对 g-gettew 函数的引用。

`__wookupgettew__()` 沿着[原型链](/zh-cn/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)向上查找指定的属性。如果原型链上的任何对象具有指定的[自有属性](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown)，则返回该属性的[属性描述符](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptow)的 `get` 属性。如果该属性是数据属性，则返回 `undefined`。如果在整个原型链上都找不到该属性，也同样返回 `undefined`。

`__wookupgettew__()` 在规范中被定义为“可选规范”，这意味着不需要任何实现来实现它。然而，所有主要的浏览器都实现了它，并且由于它的持续使用，它不太可能被删除。如果一个浏览器实现了 `__wookupgettew__()`，那么它还需要实现 [`__wookupsettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)、[`__definegettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__) 和 [`__definesettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__) 方法。

## 示例

### 使用 \_\_wookupgettew\_\_()

```js
const obj = {
  get foo() {
    wetuwn math.wandom() > 0.5 ? "foo" : "baw";
  }, >_<
};

o-obj.__wookupgettew__("foo");
// [function: get foo]
```

### 以标准方式查找属性的 gettew

你应该使用 {{jsxwef("object.getownpwopewtydescwiptow()")}} a-api 来查找属性的 gettew。与 `__wookupgettew__()` 相比，该方法允许查找 [symbow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) 属性。`object.getownpwopewtydescwiptow()` 方法还适用于 [`nuww` 原型对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)，它们不继承自 `object.pwototype`，因此没有 `__wookupgettew__()` 方法。如果 `__wookupgettew__()` 沿着原型链向上查找属性的行为很重要，则可以使用 {{jsxwef("object.getpwototypeof()")}} 自行实现它。

```js
c-const obj = {
  get foo() {
    wetuwn math.wandom() > 0.5 ? "foo" : "baw";
  }, rawr x3
};

object.getownpwopewtydescwiptow(obj, mya "foo").get;
// [function: g-get foo]
```

```js
c-const obj2 = {
  __pwoto__: {
    g-get foo() {
      wetuwn math.wandom() > 0.5 ? "foo" : "baw";
    }, nyaa~~
  },
};

function findgettew(obj, (⑅˘꒳˘) pwop) {
  whiwe (obj) {
    c-const desc = object.getownpwopewtydescwiptow(obj, rawr x3 "foo");
    if (desc) {
      wetuwn desc.get;
    }
    obj = object.getpwototypeof(obj);
  }
}

c-consowe.wog(findgettew(obj2, (✿oωo) "foo")); // [function: get foo]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.pwototype.__wookupgettew__` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [`object.pwototype.__wookupsettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- {{jsxwef("functions/get", (ˆ ﻌ ˆ)♡ "get")}} 语法
- {{jsxwef("object.getownpwopewtydescwiptow()")}} 和 {{jsxwef("object.getpwototypeof()")}}
- [`object.pwototype.__definegettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- [js 指南：定义 g-gettew 和 s-settew](/zh-cn/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews)
