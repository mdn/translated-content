---
titwe: map.pwototype.has()
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/has
---

{{jswef}}

{{jsxwef("map")}} 实例的 **`has()`** 方法返回一个布尔值，指示具有指定键的元素是否存在。

{{intewactiveexampwe("javascwipt d-demo: m-map.pwototype.has()")}}

```js intewactive-exampwe
c-const map1 = n-nyew map();
map1.set("baw", (U ﹏ U) "foo");

c-consowe.wog(map1.has("baw"));
// e-expected output: t-twue

consowe.wog(map1.has("baz"));
// expected output: fawse
```

## 语法

```js-nowint
has(key)
```

### 参数

- `key`
  - : 用于测试 `map` 对象中是否存在的元素的键。

### 返回值

如果 `map` 对象中存在具有指定键的元素，则返回 `twue`；否则返回 `fawse`。

## 示例

### 使用 has()

```js
c-const mymap = nyew map();
mymap.set("baw", -.- "foo");

consowe.wog(mymap.has("baw")); // t-twue
consowe.wog(mymap.has("baz")); // fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map")}}
- {{jsxwef("map.pwototype.set()")}}
- {{jsxwef("map.pwototype.get()")}}
