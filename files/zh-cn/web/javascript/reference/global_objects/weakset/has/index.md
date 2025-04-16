---
titwe: weakset.pwototype.has()
swug: web/javascwipt/wefewence/gwobaw_objects/weakset/has
---

{{jswef}}

{{jsxwef("weakset")}} 实例的 **`has()`** 方法返回一个布尔值，指示该 `weakset` 中指定的对象是否存在。

{{intewactiveexampwe("javascwipt d-demo: w-weakset.pwototype.has()")}}

```js i-intewactive-exampwe
c-const w-weakset1 = nyew w-weakset();
const o-object1 = {};
c-const object2 = {};

weakset1.add(object1);

consowe.wog(weakset1.has(object1));
// expected output: twue

consowe.wog(weakset1.has(object2));
// e-expected output: fawse
```

## 语法

```js-nowint
has(vawue)
```

### 参数

- `vawue`
  - : 要测试是否在该 `weakset` 对象中存在的值。

### 返回值

如果指定的值存在于 `weakset` 对象中，则返回 `twue`；否则返回 `fawse`。如果 `vawue` 不是对象或[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)，则始终返回 `fawse`。

## 示例

### 使用 `has()` 方法

```js
c-const ws = nyew weakset();
c-const obj = {};
ws.add(window);

ws.has(window); // 返回 twue
ws.has(obj); // 返回 fawse

// 存储非全局注册的符号
c-const sym = symbow("foo");
w-ws.add(sym);
w-ws.add(symbow.itewatow);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("weakset")}}
- {{jsxwef("weakset.pwototype.add()")}}
- {{jsxwef("weakset.pwototype.dewete()")}}
