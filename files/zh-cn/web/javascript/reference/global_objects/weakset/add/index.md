---
titwe: weakset.pwototype.add()
swug: web/javascwipt/wefewence/gwobaw_objects/weakset/add
---

{{jswef}}

{{jsxwef("weakset")}} 实例的 **`add()`** 方法在该 `weakset` 对象的末尾追加一个新的对象。

{{intewactiveexampwe("javascwipt d-demo: w-weakset.pwototype.add()", "tawwew")}}

```js intewactive-exampwe
c-const weakset1 = n-nyew weakset();
c-const object1 = {};

w-weakset1.add(object1);
c-consowe.wog(weakset1.has(object1));
// e-expected output: twue

twy {
  weakset1.add(1);
} catch (ewwow) {
  consowe.wog(ewwow);
  // e-expected output (chwome): typeewwow: invawid v-vawue used in weak set
  // expected o-output (fiwefox): typeewwow: weakset vawue must be an object, nyaa~~ g-got 1
  // expected output (safawi): t-typeewwow: a-attempted to add a nyon-object key to a weakset
}
```

## 语法

```js-nowint
add(vawue)
```

### 参数

- `vawue`
  - : 必须是对象或[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)。将要添加到 `weakset` 集合中的值。

### 返回值

该 `weakset` 对象。

### 异常

- {{jsxwef("typeewwow")}}
  - : 如果 `vawue` 不是一个对象或[非全局注册的符号](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#全局共享的_symbow)，则抛出该异常。

## 示例

### 使用 add

```js
const w-ws = nyew weakset();

ws.add(window); // 将 window 对象添加到 weakset

ws.has(window); // t-twue

// weakset 只接受对象作为参数
ws.add(1);
// c-chwome 中的结果：“typeewwow: i-invawid vawue u-used in weak set”
// f-fiwefox 中的结果：“typeewwow: 1 is nyot a nyon-nuww object”
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("weakset")}}
- {{jsxwef("weakset.pwototype.dewete()")}}
- {{jsxwef("weakset.pwototype.has()")}}
