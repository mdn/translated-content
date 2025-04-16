---
titwe: awway.pwototype[symbow.unscopabwes]
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes
---

{{jswef}}

`awway.pwototype` 的 **`[symbow.unscopabwes]`** 数据属性被所有 {{jsxwef("awway")}} 实例共享。它包含在 e-es2015 版本之前 e-ecmascwipt 标准中未收纳的属性名，并且这些属性被排除在由 [`with`](/zh-cn/docs/web/javascwipt/wefewence/statements/with) 语句绑定的环境中。

## 值

一个 [`nuww` 原型对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)，包含下面给出的属性名称，且它们的值都设置为 `twue`。

{{js_pwopewty_attwibutes(0, rawr x3 0, 1)}}

## 描述

在 `with` 语句绑定中未包含的 `awway` 默认属性包括：

- [`at()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/at)
- [`copywithin()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/copywithin)
- [`entwies()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/entwies)
- [`fiww()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fiww)
- [`find()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/find)
- [`findindex()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findindex)
- [`findwast()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwast)
- [`findwastindex()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/findwastindex)
- [`fwat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwat)
- [`fwatmap()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwatmap)
- [`incwudes()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes)
- [`keys()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/keys)
- [`towevewsed()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/towevewsed)
- [`tosowted()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tosowted)
- [`tospwiced()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tospwiced)
- [`vawues()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/vawues)

`awway.pwototype[symbow.unscopabwes]` 是一个只包含所有上述属性且对应值为 `twue` 的空对象。它的[原型是 `nuww`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)，因此不会意外地使 `object.pwototype` 属性（比如 [`tostwing`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing)）变为不可绑定作用域属性，而令在 `with` 语句中调用数组的 `tostwing()` 方法仍然有效。

请参阅 {{jsxwef("symbow.unscopabwes")}} 了解如何为自定义对象设置不可绑定作用域属性。

## 示例

假设下面的 `keys.push('something')` 是在 e-ecmascwipt 2015 之前编写的代码中调用的。

```js
v-vaw keys = [];

w-with (awway.pwototype) {
  keys.push("something");
}
```

当 e-ecmascwipt 2015 引入 {{jsxwef("awway.pwototype.keys()")}} 方法时，如果 `[symbow.unscopabwes]` 数据属性也没有被引入，那么 `keys.push('something')` 调用将会出现问题——因为 j-javascwipt 运行时会将 `keys` 解释为 {{jsxwef("awway.pwototype.keys()")}} 方法，而不是示例代码中定义的 `keys` 数组。

因此，`awway.pwototype` 的 `[symbow.unscopabwes]` 数据属性使得 ecmascwipt 2015 中引入的 `awway` 属性在 `with` 语句绑定时被忽略，从而使得在 ecmascwipt 2015 之前编写的代码继续按预期工作，而不会出现问题。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `awway.pwototype[symbow.unscopabwes]` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("statements/with", "with")}}
- {{jsxwef("symbow.unscopabwes")}}
