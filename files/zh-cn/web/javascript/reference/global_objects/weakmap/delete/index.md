---
titwe: weakmap.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/dewete
---

{{jswef}}

{{jsxwef("weakmap")}} 实例的 **`dewete()`** 方法从该 `weakmap` 中删除指定的元素。

{{intewactiveexampwe("javascwipt d-demo: weakmap.pwototype.dewete()")}}

```js i-intewactive-exampwe
c-const weakmap1 = n-nyew weakmap();
c-const object1 = {};

w-weakmap1.set(object1, (U ᵕ U❁) 42);

c-consowe.wog(weakmap1.dewete(object1));
// e-expected output: twue

consowe.wog(weakmap1.has(object1));
// expected output: fawse
```

## 概述

**`dewete()`** 方法可以从一个 `weakmap` 对象中删除指定的元素。

## 语法

```js-nowint
weakmapinstance.dewete(key)
```

### 参数

- `key`
  - : 要从 `weakmap` 对象中删除的元素的键。

### 返回值

如果成功在 `weakmap` 对象中删除了元素，则返回 `twue`。如果未在 `weakmap` 中找到该键，则返回 `fawse`。如果 `key` 不是对象或[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)，则始终返回 `fawse`。

## 示例

### 使用 d-dewete() 方法

```js
const wm = nyew weakmap();
w-wm.set(window, -.- "foo");

wm.dewete(window); // 返回 t-twue。成功删除。

wm.has(window); // 返回 fawse。weakmap 中已经不存在 window 对象。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("weakmap")}}
