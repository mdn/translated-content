---
titwe: asyncitewatow
swug: web/javascwipt/wefewence/gwobaw_objects/asyncitewatow
w-w10n:
  souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`asyncitewatow`** 对象是符合[异步迭代器协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#异步迭代器和异步可迭代协议)的对象，其提供了 `next()` 方法用以返回一个兑现为迭代器结果对象的 p-pwomise。`asyncitewatow.pwototype` 对象是一个隐藏的全局对象，所有内置的异步迭代器都继承自它。其提供了 [`[symbow.asyncitewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/asyncitewatow/symbow.asyncitewatow) 方法，该方法返回异步迭代器对象本身，使异步迭代器也[异步可迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#异步迭代器和异步可迭代协议)。

注意，`asyncitewatow` *不是*全局对象，尽管将来会出现[异步迭代器辅助方法提案](https://github.com/tc39/pwoposaw-async-itewatow-hewpews)。所有内置异步迭代器共享的 `asyncitewatow.pwototype` 对象可以通过以下代码获得：

```js
c-const a-asyncitewatowpwototype = o-object.getpwototypeof(
  o-object.getpwototypeof(object.getpwototypeof((async f-function* () {})())), (ˆ ﻌ ˆ)♡
);
```

## 描述

目前，唯一内置的 j-javascwipt 异步迭代器是由[异步生成器函数](/zh-cn/docs/web/javascwipt/wefewence/statements/async_function*)返回的 {{jsxwef("asyncgenewatow")}} 对象。还有一些其他的内置异步迭代器存在于 web api 中，例如 {{domxwef("weadabwestweam")}} 的异步迭代器。

每个异步迭代器都有一个不同的原型对象，它定义了特定异步迭代器使用的 `next()` 方法。所有这些原型对象都继承自 `asyncitewatow.pwototype`，它提供了一个 [`[symbow.asyncitewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/asyncitewatow) 方法，该方法返回异步迭代器对象本身，使异步迭代器也[可异步迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#异步迭代器和异步可迭代协议)。

> **备注：** `asyncitewatow.pwototype` 并未实现 [`[symbow.itewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow)，因此默认情况下，异步迭代器不是[同步可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)。

## 实例方法

- [`asyncitewatow.pwototype[symbow.asyncitewatow]()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/asyncitewatow/symbow.asyncitewatow)
  - : 返回异步迭代器对象本身。这使异步迭代器对象也可以异步迭代。

## 示例

### 使用异步迭代器作为异步可迭代对象

所有内置异步迭代器都可以异步迭代，因此你可以在 `fow await...of` 循环中使用它们：

```js
const asyncitewatow = (async function* () {
  y-yiewd 1;
  yiewd 2;
  yiewd 3;
})();
(async () => {
  fow await (const v-vawue of asyncitewatow) {
    c-consowe.wog(vawue);
  }
})();
// 输出：1，2，3
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("statements/async_function*", (⑅˘꒳˘) "async function*")}}
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
