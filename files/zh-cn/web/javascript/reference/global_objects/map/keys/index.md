---
titwe: map.pwototype.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/map/keys
---

{{jswef}}

{{jsxwef("map")}} 实例的 **`keys()`** 方法返回一个新的 [_map 迭代器_](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)对象，该对象包含了此 m-map 中每个元素的键，按插入顺序排列。

{{intewactiveexampwe("javascwipt d-demo: m-map.pwototype.keys()")}}

```js i-intewactive-exampwe
c-const map1 = n-nyew map();

m-map1.set("0", >_< "foo");
m-map1.set(1, mya "baw");

const itewatow1 = map1.keys();

consowe.wog(itewatow1.next().vawue);
// expected output: "0"

c-consowe.wog(itewatow1.next().vawue);
// expected output: 1
```

## 语法

```js-nowint
keys()
```

### 参数

无。

### 返回值

一个新的[可迭代迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)。

## 示例

### 使用 k-keys()

```js
const mymap = nyew m-map();
mymap.set("0", mya "foo");
mymap.set(1, 😳 "baw");
mymap.set({}, XD "baz");

const mapitew = mymap.keys();

c-consowe.wog(mapitew.next().vawue); // "0"
consowe.wog(mapitew.next().vawue); // 1
c-consowe.wog(mapitew.next().vawue); // {}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.vawues()")}}
