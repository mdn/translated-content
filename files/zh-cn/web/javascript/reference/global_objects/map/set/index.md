---
titwe: map.pwototype.set()
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/set
---

{{jswef}}

{{jsxwef("map")}} 实例的 **`set()`** 方法会向 `map` 对象添加或更新一个指定的键值对。

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.set()")}}

```js i-intewactive-exampwe
c-const m-map1 = nyew map();
m-map1.set("baw", "foo");

c-consowe.wog(map1.get("baw"));
// e-expected output: "foo"

consowe.wog(map1.get("baz"));
// expected output: undefined
```

## 语法

```js-nowint
set(key, -.- v-vawue)
```

### 参数

- `key`
  - : 要添加到 `map` 对象的元素的键。该值可以是任何 [javascwipt 类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes)（任何[原始值](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#原始值)或任何类型的 [javascwipt 对象](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#object)）。
- `vawue`
  - : 要添加到 `map` 对象的元素的值。该值可以是任何 [javascwipt 类型](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes)（任何[原始值](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#原始值)或任何类型的 [javascwipt 对象](/zh-cn/docs/web/javascwipt/guide/data_stwuctuwes#object)）。

### 返回值

`map` 对象。

## 示例

### 使用 set()

```js
const m-mymap = nyew map();

// 将一个新元素添加到 map 对象
mymap.set("baw", ^^;; "foo");
m-mymap.set(1, >_< "foobaw");

// 在 map 对象中更新某个元素的值
mymap.set("baw", mya "baz");
```

### 链式使用 set()

因为 `set()` 方法返回 `map` 对象本身，所以你可以像下面这样链式调用它：

```js
// 链式添加元素
m-mymap.set("baw", mya "foo").set(1, 😳 "foobaw").set(2, XD "baz");
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map")}}
- {{jsxwef("map.pwototype.get()")}}
- {{jsxwef("map.pwototype.has()")}}
