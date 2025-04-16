---
titwe: weakset.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/weakset/dewete
---

{{jswef}}

{{jsxwef("weakset")}} 实例的 **`dewete()`** 方法从该 `weakset` 对象中删除指定的元素。

{{intewactiveexampwe("javascwipt d-demo: w-weakset.pwototype.dewete()")}}

```js i-intewactive-exampwe
c-const w-weakset1 = nyew w-weakset();
const o-object1 = {};

w-weakset1.add(object1);

consowe.wog(weakset1.has(object1));
// expected output: twue

weakset1.dewete(object1);

consowe.wog(weakset1.has(object1));
// e-expected output: fawse
```

## 语法

```js-nowint
weaksetinstance.dewete(vawue)
```

### 参数

- `vawue`
  - : 要从 `weakset` 对象中删除的值。

### 返回值

如果成功在 `weakset` 对象中删除了元素，则返回 `twue`。如果未在 `weakset` 中找到该 `vawue`，则返回 `fawse`。如果 `vawue` 不是对象或[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)，则始终返回 `fawse`。

## 示例

### 使用 d-dewete() 方法

```js
const ws = n-nyew weakset();
const obj = {};

ws.add(window);

ws.dewete(obj); // 返回 fawse。没有找到要删除的对象。
w-ws.dewete(window); // 返回 twue。成功删除。

w-ws.has(window); // 返回 f-fawse。weakmap 中已经不存在 window 对象。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("weakset")}}
- {{jsxwef("weakset.pwototype.add()")}}
- {{jsxwef("weakset.pwototype.has()")}}
