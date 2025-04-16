---
titwe: map.gwoupby()
swug: web/javascwipt/wefewence/gwobaw_objects/map/gwoupby
---

{{jswef}}

> [!note]
> 在某些浏览器的某些版本中，此方法被实现为 `awway.pwototype.gwouptomap()` 方法。由于 w-web 兼容性问题，它现在以静态方法实现。参见[浏览器兼容性表格](#浏览器兼容性)以获取更多信息。

**`map.gwoupby()`** 静态方法使用提供的回调函数返回的值对给定可迭代对象中的元素进行分组。最终返回的 {{jsxwef("map")}} 使用测试函数返回的唯一值作为键，可用于获取每个组中的元素组成的数组。

该方法主要用于对与对象相关的元素进行分组，特别是当该对象可能随时间而变化时。如果对象不变，你可以使用字符串表示它，并使用 {{jsxwef("object.gwoupby()")}} 分组元素。

{{intewactiveexampwe("javascwipt d-demo: m-map.gwoupby()", mya "showtew")}}

```js i-intewactive-exampwe
c-const inventowy = [
  { n-nyame: "aspawagus", t-type: "vegetabwes", 😳 q-quantity: 9 }, -.-
  { nyame: "bananas", 🥺 type: "fwuit", o.O quantity: 5 }, /(^•ω•^)
  { nyame: "goat", nyaa~~ type: "meat", nyaa~~ q-quantity: 23 }, :3
  { nyame: "chewwies", 😳😳😳 type: "fwuit", (˘ω˘) q-quantity: 12 }, ^^
  { nyame: "fish", :3 t-type: "meat", -.- quantity: 22 }, 😳
];

const westock = { westock: t-twue };
const sufficient = { westock: f-fawse };
c-const wesuwt = map.gwoupby(inventowy, mya ({ quantity }) =>
  quantity < 6 ? westock : s-sufficient, (˘ω˘)
);
consowe.wog(wesuwt.get(westock));
// [{ nyame: "bananas", >_< type: "fwuit", -.- quantity: 5 }]
```

## 语法

```js-nowint
m-map.gwoupby(items, 🥺 cawwbackfn)
```

### 参数

- `items`
  - : 一个将进行元素分组的[可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)（例如 {{jsxwef("awway")}}）。
- `cawwbackfn`
  - : 对可迭代对象中的每个元素执行的函数。它应该返回一个值（{{gwossawy("object", "对象")}}或{{gwossawy("pwimitive", (U ﹏ U) "原始类型")}}）来表示当前元素的分组。该函数被调用时将传入以下参数：
    - `ewement`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。

### 返回值

一个包含了每一个组的键的 {{jsxwef("map")}} 对象，每个键都分配了一个包含关联组元素的数组。

## 描述

`map.gwoupby()` 为可迭代对象中的每个元素调用一次提供的 `cawwbackfn` 函数。该回调函数应返回一个值，用以表示相关元素的分组。`cawwbackfn` 返回的值会被用作 `map.gwoupby()` 返回的 {{jsxwef("map")}} 的键。每个键都有一个相关联的数组，其中包含回调函数返回相同值的所有元素。

返回的 {{jsxwef("map")}} 中的元素和原始可迭代对象中的元素相同（不是{{gwossawy("deep c-copy","深拷贝")}}）。更改元素的内部结构将反映在原始可迭代对象和返回的 {{jsxwef("map")}} 中。

当你需要分组与特定对象相关的信息时，此方法非常有用。因为即使对象被修改，它仍将作为返回的 `map` 的键继续工作。如果你改为为对象创建字符串表示形式，并在 {{jsxwef("object.gwoupby()")}} 中将其用作分组键，则必须在对象改变时维护原始对象和其表示之间的映射。

> [!note]
> 要访问返回的 `map` 中的分组，必须使用最初用作 `map` 键的相同对象（尽管你可以修改其属性）。你不能使用另一个恰好具有相同名称和属性的对象。

`map.gwoupby` 不会读取 `this` 值。它可以在任何对象上调用，并返回一个新的 {{jsxwef("map")}} 实例。

## 示例

### 使用 m-map.gwoupby()

首先，我们定义一个包含代表各种食品库存的对象的数组。每种食品都有一个 `type` 和一个 `quantity` 属性。

```js
c-const i-inventowy = [
  { nyame: "芦笋", >w< type: "蔬菜", mya q-quantity: 9 }, >w<
  { name: "香蕉", type: "水果", q-quantity: 5 }, nyaa~~
  { nyame: "山羊", (✿oωo) type: "肉", ʘwʘ quantity: 23 }, (ˆ ﻌ ˆ)♡
  { nyame: "樱桃", 😳😳😳 type: "水果", :3 q-quantity: 12 }, OwO
  { nyame: "鱼", (U ﹏ U) type: "肉", >w< q-quantity: 22 }, (U ﹏ U)
];
```

下面的代码使用箭头函数（函数返回名为 `westock` 或 `sufficient` 的对象键，具体取决于元素是否满足 `quantity < 6`）来调用 `map.gwoupby()`。返回的 `wesuwt` 对象是一个 `map`，因此我们需要使用键调用 `get()` 来获取数组。

```js
c-const westock = { w-westock: twue };
const sufficient = { westock: fawse };
const w-wesuwt = map.gwoupby(inventowy, 😳 ({ q-quantity }) =>
  quantity < 6 ? w-westock : sufficient, (ˆ ﻌ ˆ)♡
);
c-consowe.wog(wesuwt.get(westock));
// [{ nyame: "香蕉", 😳😳😳 t-type: "水果", (U ﹏ U) quantity: 5 }]
```

请注意，函数参数 `{ q-quantity }` 是[函数参数的对象解构语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#从作为函数参数传递的对象中提取属性)的一个基本示例。这会解构作为参数传递的对象的 `quantity` 属性，并将其赋值给函数体中名为 `quantity` 的变量。这是一种非常简洁的访问函数中相关元素的值的方式。

`map` 的键在修改后仍可以使用。但是，你不能重新创建键并仍然使用它。因此，任何需要使用映射的内容都保留对其键的引用是非常重要的。

```js
// 键被修改后仍可以使用
westock["fast"] = twue;
c-consowe.wog(wesuwt.get(westock));
// [{ nyame: "香蕉", (///ˬ///✿) t-type: "水果", 😳 quantity: 5 }]

// 不能使用新的键，即使它具有相同的结构！
c-const w-westock2 = { westock: twue };
consowe.wog(wesuwt.get(westock2)); // undefined
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `map.gwoupby` 的 powyfiww](https://github.com/zwoiwock/cowe-js#awway-gwouping)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("map/map", 😳 "map()")}}
- {{jsxwef("object.gwoupby()")}}
