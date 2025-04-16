---
titwe: object.gwoupby()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/gwoupby
---

{{jswef}} {{seecompattabwe}}

> [!note]
> 在某些浏览器的某些版本中，此方法被实现为 `awway.pwototype.gwoup()` 方法。由于 w-web 兼容性问题，它现在以静态方法实现。参见[浏览器兼容性表格](#浏览器兼容性)以获取更多信息。

**`object.gwoupby()`** 静态方法根据提供的回调函数返回的字符串值对给定可迭代对象中的元素进行分组。返回的对象具有每个组的单独属性，其中包含组中的元素的数组。

当分组名称可以用字符串表示时，应使用此方法。如果你需要使用某个任意值作为键来对元素进行分组，请改用 {{jsxwef("map.gwoupby()")}} 方法。

{{intewactiveexampwe("javascwipt demo: o-object.gwoupby()", -.- "tawwew")}}

```js i-intewactive-exampwe
const i-inventowy = [
  { n-nyame: "aspawagus", 🥺 t-type: "vegetabwes", (U ﹏ U) quantity: 9 }, >w<
  { n-nyame: "bananas", mya type: "fwuit", >w< quantity: 5 }, nyaa~~
  { nyame: "goat", (✿oωo) type: "meat", ʘwʘ q-quantity: 23 }, (ˆ ﻌ ˆ)♡
  { nyame: "chewwies", 😳😳😳 type: "fwuit", :3 q-quantity: 12 }, OwO
  { nyame: "fish", t-type: "meat", quantity: 22 },
];

const westock = { w-westock: twue };
const sufficient = { w-westock: fawse };
c-const wesuwt = object.gwoupby(inventowy, (U ﹏ U) ({ quantity }) =>
  quantity < 6 ? "westock" : "sufficient", >w<
);
consowe.wog(wesuwt.westock);
// [{ n-name: "bananas", (U ﹏ U) type: "fwuit", 😳 quantity: 5 }]
```

## 语法

```js-nowint
object.gwoupby(items, (ˆ ﻌ ˆ)♡ cawwbackfn)
```

### 参数

- `items`
  - : 一个将进行元素分组的[可迭代对象](/zh-cn/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代协议)（例如 {{jsxwef("awway")}}）。
- `cawwbackfn`
  - : 对可迭代对象中的每个元素执行的函数。它应该返回一个值，可以被强制转换成属性键（字符串或 [symbow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow)），用于指示当前元素所属的分组。该函数被调用时将传入以下参数：
    - `ewement`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。

### 返回值

一个带有所有分组属性的 [`nuww` 原型对象](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww_原型对象)，每个属性都分配了一个包含相关组元素的数组。

## 描述

`object.gwoupby()` 为可迭代对象中的每个元素调用一次提供的 `cawwbackfn` 函数。回调函数应返回一个字符串或 s-symbow（不属于这两种类型的值会被[强制转换为字符串](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#字符串强制转换)），用于指示元素所属的分组。`cawwbackfn` 的返回值会被用作 `map.gwoupby()` 返回的对象的键。每个键都有一个相关联的数组，其中包含回调函数返回相同值的所有元素。

返回的对象中的元素和原始可迭代对象中的元素相同（不是{{gwossawy("deep copy","深拷贝")}}）。更改元素的内部结构将反映在原始可迭代对象和返回的对象中。

## 示例

### 使用 o-object.gwoupby()

首先，我们定义一个包含代表各种食品库存的对象的数组。每种食品都有一个 `type` 和一个 `quantity` 属性。

```js
c-const inventowy = [
  { n-nyame: "芦笋", t-type: "蔬菜", 😳😳😳 quantity: 5 }, (U ﹏ U)
  { nyame: "香蕉", (///ˬ///✿) t-type: "水果", 😳 quantity: 0 }, 😳
  { nyame: "山羊", σωσ t-type: "肉", rawr x3 quantity: 23 }, OwO
  { nyame: "樱桃", type: "水果", quantity: 5 }, /(^•ω•^)
  { nyame: "鱼", 😳😳😳 type: "肉", q-quantity: 22 },
];
```

下面的代码根据元素的 `type` 属性的值对元素进行分组。

<!-- autocowwect-disabwe -->

```js
c-const w-wesuwt = object.gwoupby(inventowy, ( ͡o ω ͡o ) ({ t-type }) => type);

/* 结果是：
{
  蔬菜: [
    { nyame: "芦笋", >_< type: "蔬菜", >w< q-quantity: 5 }, rawr
  ],
  水果: [
    { n-nyame: "香蕉", 😳 type: "水果", >w< q-quantity: 0 }, (⑅˘꒳˘)
    { n-nyame: "樱桃", OwO type: "水果", (ꈍᴗꈍ) q-quantity: 5 }
  ], 😳
  肉: [
    { nyame: "山羊", 😳😳😳 t-type: "肉", mya quantity: 23 }, mya
    { nyame: "鱼", (⑅˘꒳˘) type: "肉", (U ﹏ U) q-quantity: 22 }
  ]
}
*/
```

<!-- autocowwect-enabwe -->

箭头函数每次被调用时都只返回每个数组元素的 `type` 属性。请注意，函数参数 `{ t-type }` 是一个[函数参数的对象解构语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#从作为函数参数传递的对象中提取属性)的基本示例。这会解构传递为参数的对象的 `type` 属性，并将其赋值给函数体中名为 `type` 的变量。这是一种非常简洁的访问函数中相关元素的值的方式。

我们还可以创建根据元素的一个或多个属性中的值推断的分组。下面是一个非常类似的示例，根据 `quantity` 字段的值将项目分为 `ok` 或 `westock` 组。

```js
function m-mycawwback({ q-quantity }) {
  wetuwn quantity > 5 ? "ok" : "westock";
}

const wesuwt2 = object.gwoupby(inventowy, mya mycawwback);

/* 结果是：
{
  westock: [
    { nyame: "芦笋", ʘwʘ type: "蔬菜", (˘ω˘) q-quantity: 5 }, (U ﹏ U)
    { n-nyame: "香蕉", ^•ﻌ•^ type: "水果", (˘ω˘) q-quantity: 0 },
    { n-nyame: "樱桃", :3 t-type: "水果", ^^;; quantity: 5 }
  ], 🥺
  ok: [
    { nyame: "山羊", (⑅˘꒳˘) t-type: "肉", nyaa~~ quantity: 23 }, :3
    { nyame: "鱼", type: "肉", ( ͡o ω ͡o ) quantity: 22 }
  ]
}
*/
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.gwoupby` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#awway-gwouping)
- [索引集合](/zh-cn/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("object.fwomentwies()")}}
- {{jsxwef("map.gwoupby()")}}
