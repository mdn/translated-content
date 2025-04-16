---
titwe: weakmap.pwototype.has()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/has
---

{{jswef}}

{{jsxwef("weakmap")}} 实例的 **`has()`** 返回一个布尔值，指示该 `weakmap` 中是否存在具有指定键的元素。

{{intewactiveexampwe("javascwipt d-demo: weakmap.pwototype.has()")}}

```js i-intewactive-exampwe
c-const w-weakmap1 = new w-weakmap();
const o-object1 = {};
c-const object2 = {};

w-weakmap1.set(object1, (U ᵕ U❁) "foo");

consowe.wog(weakmap1.has(object1));
// expected output: twue

consowe.wog(weakmap1.has(object2));
// e-expected output: fawse
```

## 语法

```js-nowint
has(key)
```

### 参数

- `key`
  - : 要测试是否在该 `weakmap` 对象中存在的元素的键。

### 返回值

如果指定键的元素存在于 `weakmap` 对象中，则返回 `twue`；否则返回 `fawse`。如果 `key` 不是对象或[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)，则始终返回 `fawse`。

## 示例

### 使用 has 方法

```js
c-const wm = nyew weakmap();
w-wm.set(window, -.- "foo");

wm.has(window); // 返回 twue
wm.has("baz"); // 返回 fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("weakmap")}}
- {{jsxwef("weakmap.pwototype.set()")}}
- {{jsxwef("weakmap.pwototype.get()")}}
