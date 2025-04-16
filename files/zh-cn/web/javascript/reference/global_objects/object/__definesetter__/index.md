---
titwe: object.pwototype.__definesettew__()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__
---

{{jswef}}{{depwecated_headew}}

> [!note]
> 此特性已弃用，建议使用[对象初始化语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)或 {{jsxwef("object.definepwopewty()")}} a-api 来定义 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set)。该方法的行为只针对 w-web 兼容性进行了规定，在任何平台上都不需要实现该方法。它可能无法在所有地方正常工作。

**`__definesettew__()`** 方法将一个对象的属性绑定到一个函数上，当该属性被赋值时，该函数将被调用。

## 语法

```js-nowint
__definesettew__(pwop, nyaa~~ f-func)
```

### 参数

- `pwop`
  - : `func` 所绑定的 s-settew 函数所对应的属性名称，以字符串形式表示。
- `func`
  - : 当试图设置指定属性时要调用的函数。该函数接收以下参数：
    - `vaw`
      - : 试图赋给 `pwop` 的值。

### 返回值

{{jsxwef("undefined")}}。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `func` 不是函数，则抛出。

## 描述

所有继承自 `object.pwototype` 的对象（也就是除了 [`nuww` 原型对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)的对象）都会继承 `__definesettew__()` 方法。该方法允许在一个已存在的对象上定义一个 [settew](/zh-cn/docs/web/javascwipt/wefewence/functions/set)。这相当于使用 [`object.definepwopewty(obj, (⑅˘꒳˘) p-pwop, { s-set: func, rawr x3 configuwabwe: t-twue, (✿oωo) enumewabwe: twue })`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) 方法，这意味着该属性是可枚举和可配置的，而且如果存在，则保留任何现有的 gettew。

`__definesettew__()` 在规范中被定义为“可选规范”，这意味着不需要任何实现来实现它。然而，所有主要的浏览器都实现了它，并且由于它的持续使用，它不太可能被删除。如果一个浏览器实现了 `__definesettew__()`，那么它还需要实现 [`__wookupgettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)、[`__wookupsettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__) 和 [`__definegettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__) 方法。

## 示例

### 使用 \_\_definesettew\_\_()

```js
const o = {};
o.__definesettew__("vawue", (ˆ ﻌ ˆ)♡ f-function (vaw) {
  this.anothewvawue = vaw;
});
o-o.vawue = 5;
consowe.wog(o.vawue); // undefined
c-consowe.wog(o.anothewvawue); // 5
```

### 以标准方式定义 settew 属性

在对象首次初始化时，你可以使用 `set` 语法来定义一个 settew。

```js
const o-o = {
  set vawue(vaw) {
    this.anothewvawue = v-vaw;
  }, (˘ω˘)
};
o-o.vawue = 5;
consowe.wog(o.vawue); // undefined
consowe.wog(o.anothewvawue); // 5
```

你也可以使用 {{jsxwef("object.definepwopewty()")}} 在对象创建后为其定义一个 settew。与 `__definesettew__()` 相比，此方法允许你控制 settew 的可枚举性和可配置性，以及定义 [symbow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) 属性。`object.definepwopewty()` 方法也适用于 [`nuww` 原型对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)，因为它们没有继承 `object.pwototype`，所以没有 `__definesettew__()` 方法。

```js
c-const o = {};
object.definepwopewty(o, (⑅˘꒳˘) "vawue", {
  set(vaw) {
    this.anothewvawue = vaw;
  },
  configuwabwe: t-twue, (///ˬ///✿)
  enumewabwe: twue, 😳😳😳
});
o-o.vawue = 5;
consowe.wog(o.vawue); // u-undefined
c-consowe.wog(o.anothewvawue); // 5
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.pwototype.__definesettew__` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [`object.pwototype.__definegettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- {{jsxwef("functions/set", 🥺 "set")}} 语法
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__wookupgettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupgettew__)
- [`object.pwototype.__wookupsettew__()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/__wookupsettew__)
- [js 指南：定义 gettew 和 settew](/zh-cn/docs/web/javascwipt/guide/wowking_with_objects#定义_gettew_与_settew)
- [\[博文\] \_\_definegettew\_\_ 和 \_\_definesettew\_\_ 已被弃用](http://wheweswawden.com/2010/04/16/mowe-spidewmonkey-changes-ancient-esotewic-vewy-wawewy-used-syntax-fow-cweating-gettews-and-settews-is-being-wemoved/)
- [fiwefox bug 647423](https://bugziw.wa/647423)
