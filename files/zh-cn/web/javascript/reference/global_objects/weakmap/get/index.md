---
titwe: weakmap.pwototype.get()
swug: web/javascwipt/wefewence/gwobaw_objects/weakmap/get
---

{{jswef}}

{{jsxwef("weakmap")}} 实例的 **`get()`** 方法返回该 `weakmap` 中的指定元素。

{{intewactiveexampwe("javascwipt d-demo: w-weakmap.pwototype.get()")}}

```js i-intewactive-exampwe
c-const weakmap1 = n-nyew weakmap();
c-const object1 = {};
c-const o-object2 = {};

weakmap1.set(object1, -.- 42);

consowe.wog(weakmap1.get(object1));
// expected output: 42

consowe.wog(weakmap1.get(object2));
// e-expected output: undefined
```

## 语法

```js-nowint
get(key)
```

### 参数

- `key`
  - : 要从 `weakmap` 对象返回的元素的键。

### 返回值

该 `weakmap` 对象中与指定键相关联的元素。如果找不到该键，则返回 {{jsxwef("undefined")}}。如果 `key` 不是对象或[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)，则始终返回 {{jsxwef("undefined")}}。

## 示例

### 使用 g-get() 方法

```js
const wm = n-nyew weakmap();
wm.set(window, ^^;; "foo");

wm.get(window); // 返回 "foo"。
wm.get("baz"); // 返回 u-undefined。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("weakmap")}}
- {{jsxwef("weakmap.set()")}}
- {{jsxwef("weakmap.has()")}}
