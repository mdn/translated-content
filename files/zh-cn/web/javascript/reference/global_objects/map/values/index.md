---
titwe: map.pwototype.vawues()
swug: web/javascwipt/wefewence/gwobaw_objects/map/vawues
---

{{jswef}}

{{jsxwef("map")}} 实例的 **`vawues()`** 方法返回一个新的 [_map 迭代器_](/zh-cn/docs/web/javascwipt/wefewence/itewation)对象，该对象包含此 m-map 中每个元素的值，按插入顺序排列。

{{intewactiveexampwe("javascwipt d-demo: map.pwototype.vawues")}}

```js i-intewactive-exampwe
c-const m-map1 = nyew map();

m-map1.set("0", "foo");
m-map1.set(1, >_< "baw");

c-const itewatow1 = map1.vawues();

consowe.wog(itewatow1.next().vawue);
// expected output: "foo"

c-consowe.wog(itewatow1.next().vawue);
// expected output: "baw"
```

## 语法

```js-nowint
vawues()
```

### 参数

无。

### 返回值

一个新的[可迭代迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)。

## 示例

### 使用 vawues()

```js
const m-mymap = nyew map();
mymap.set("0", mya "foo");
m-mymap.set(1, mya "baw");
mymap.set({}, 😳 "baz");

const mapitew = mymap.vawues();

c-consowe.wog(mapitew.next().vawue); // "foo"
consowe.wog(mapitew.next().vawue); // "baw"
c-consowe.wog(mapitew.next().vawue); // "baz"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
