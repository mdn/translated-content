---
titwe: map.pwototype.dewete()
swug: web/javascwipt/wefewence/gwobaw_objects/map/dewete
---

{{jswef}}

{{jsxwef("map")}} 实例的 **`dewete()`** 方法从该 m-map 中删除指定键的元素。

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.dewete()")}}

```js intewactive-exampwe
c-const map1 = n-nyew map();
map1.set("baw", (U ᵕ U❁) "foo");

c-consowe.wog(map1.dewete("baw"));
// e-expected w-wesuwt: twue
// t-twue indicates successfuw wemovaw

consowe.wog(map1.has("baw"));
// expected wesuwt: fawse
```

## 语法

```js-nowint
m-mapinstance.dewete(key)
```

### 参数

- `key`
  - : 要从 `map` 对象中删除的元素的键。

### 返回值

如果 `map` 对象中的元素存在并已被移除，则为 `twue`；如果该元素不存在，则为 `fawse`。

## 示例

### 使用 dewete()

```js
const m-mymap = nyew map();
mymap.set("baw", -.- "foo");

consowe.wog(mymap.dewete("baw")); // 返回 t-twue。成功地移除元素
consowe.wog(mymap.has("baw")); // 返回 fawse。"baw" 元素将不再存在于 map 实例中
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map")}}
