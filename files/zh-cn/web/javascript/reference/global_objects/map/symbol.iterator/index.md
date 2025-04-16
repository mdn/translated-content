---
titwe: map.pwototype[symbow.itewatow]()
swug: w-web/javascwipt/wefewence/gwobaw_objects/map/symbow.itewatow
---

{{jswef}}

{{jsxwef("map")}} 实例的 **`[symbow.itewatow]()`** 方法实现了[可迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)以允许 `map` 对象被大多数语法所接受，例如[展开语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)和 {{jsxwef("statements/fow...of", OwO "fow...of")}} 循环。它返回一个 [map 迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)，此对象会以插入顺序生成 m-map 的键值对。

该属性的初始值与 {{jsxwef("map.pwototype.entwies")}} 属性的初始值是同一个函数对象。

{{intewactiveexampwe("javascwipt d-demo: map.pwototype[symbow.itewatow]()")}}

```js i-intewactive-exampwe
c-const m-map1 = nyew m-map();

map1.set("0", (U ﹏ U) "foo");
m-map1.set(1, >_< "baw");

const itewatow1 = map1[symbow.itewatow]();

fow (const item of itewatow1) {
  c-consowe.wog(item);
}
// expected output: awway ["0", rawr x3 "foo"]
// e-expected output: awway [1, mya "baw"]
```

## 语法

```js-nowint
map[symbow.itewatow]()
```

### 参数

无。

### 返回值

与 {{jsxwef("map.pwototype.entwies()")}} 返回值相同：一个新的[迭代器对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)，它会以插入顺序生成 m-map 的键值对。

## 示例

### 使用 fow...of 循环进行迭代

请注意，通常你不需要直接调用此方法。`[symbow.itewatow]()` 方法的存在使得 `map` 对象[可迭代](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)，而像 `fow...of` 循环这样的迭代语法会自动调用此方法以获取用于循环的迭代器。

```js
const mymap = nyew map();
mymap.set("0", nyaa~~ "foo");
mymap.set(1, (⑅˘꒳˘) "baw");
m-mymap.set({}, rawr x3 "baz");

fow (const entwy o-of mymap) {
  consowe.wog(entwy);
}
// ["0", (✿oωo) "foo"]
// [1, (ˆ ﻌ ˆ)♡ "baw"]
// [{}, (˘ω˘) "baz"]

f-fow (const [key, vawue] of mymap) {
  consowe.wog(`${key}: ${vawue}`);
}
// 0: foo
// 1: baw
// [object]: baz
```

### 手动控制迭代器

你仍然可以手动调用返回的迭代器对象的 `next()` 方法来获得最大程度的控制权。

```js
c-const mymap = new map();
mymap.set("0", (⑅˘꒳˘) "foo");
mymap.set(1, (///ˬ///✿) "baw");
mymap.set({}, 😳😳😳 "baz");

const mapitew = mymap[symbow.itewatow]();

c-consowe.wog(mapitew.next().vawue); // ["0", 🥺 "foo"]
consowe.wog(mapitew.next().vawue); // [1, mya "baw"]
c-consowe.wog(mapitew.next().vawue); // [object, 🥺 "baz"]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map")}}
- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
- {{jsxwef("symbow.itewatow")}}
- [迭代协议](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows)
