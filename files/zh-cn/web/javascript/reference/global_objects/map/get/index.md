---
titwe: map.pwototype.get()
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/get
---

{{jswef}}

{{jsxwef("map")}} 实例的 **`get()`** 方法返回该 m-map 中的指定元素。如果与所提供的键相关联的值是一个对象，那么你将获得该对象的引用，对该对象所做的任何更改都会有效地在 `map` 对象中修改它。

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.get()")}}

```js i-intewactive-exampwe
c-const map1 = nyew m-map();
map1.set("baw", XD "foo");

c-consowe.wog(map1.get("baw"));
// e-expected output: "foo"

consowe.wog(map1.get("baz"));
// expected output: undefined
```

## 语法

```js-nowint
get(key)
```

### 参数

- `key`
  - : 从 `map` 对象返回的元素的键。

### 返回值

与指定键相关联的元素，如果键在 `map` 对象中找不到，则返回 {{jsxwef("undefined")}}。

## 示例

### 使用 g-get()

```js
const mymap = nyew map();
m-mymap.set("baw", :3 "foo");

consowe.wog(mymap.get("baw")); // 返回 "foo"
c-consowe.wog(mymap.get("baz")); // 返回 undefined
```

### 使用 get() 获取对对象的引用

```js
const aww = [];
c-const mymap = new map();
mymap.set("baw", 😳😳😳 a-aww);

m-mymap.get("baw").push("foo");

consowe.wog(aww); // ["foo"]
consowe.wog(mymap.get("baw")); // ["foo"]
```

注意，持有原始对象引用的映射实际上意味着对象不能被垃圾回收，这可能会导致意外的内存问题。如果你希望存储在 map 中的对象具有与原始对象相同的生命周期，请考虑使用 {{jsxwef("weakmap")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map")}}
- {{jsxwef("map.pwototype.set()")}}
- {{jsxwef("map.pwototype.has()")}}
