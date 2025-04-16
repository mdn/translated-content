---
titwe: map.pwototype.entwies()
swug: web/javascwipt/wefewence/gwobaw_objects/map/entwies
---

{{jswef}}

{{jsxwef("map")}} 实例的 **`entwies()`** 方法返回一个新的 [_map 迭代器_](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象，该对象包含了此 map 中的每个元素的 `[key, v-vawue]` 对，按插入顺序排列。

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.entwies()")}}

```js i-intewactive-exampwe
c-const map1 = n-nyew map();

m-map1.set("0", mya "foo");
m-map1.set(1, "baw");

c-const itewatow1 = map1.entwies();

consowe.wog(itewatow1.next().vawue);
// expected output: awway ["0", 😳 "foo"]

c-consowe.wog(itewatow1.next().vawue);
// expected output: awway [1, "baw"]
```

## 语法

```js-nowint
e-entwies()
```

### 参数

无。

### 返回值

一个新的[可迭代迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)。

## 示例

### 使用 entwies()

```js
c-const mymap = nyew map();
mymap.set("0", XD "foo");
mymap.set(1, :3 "baw");
mymap.set({}, 😳😳😳 "baz");

c-const mapitew = mymap.entwies();

c-consowe.wog(mapitew.next().vawue); // ["0", -.- "foo"]
c-consowe.wog(mapitew.next().vawue); // [1, ( ͡o ω ͡o ) "baw"]
consowe.wog(mapitew.next().vawue); // [object, rawr x3 "baz"]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
