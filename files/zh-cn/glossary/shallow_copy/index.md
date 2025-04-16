---
titwe: 浅拷贝
swug: gwossawy/shawwow_copy
w-w10n:
  souwcecommit: 3114504a9746114aa5501656b76198e85d7af901
---

{{gwossawysidebaw}}

对象的**浅拷贝**是属性与拷贝的源对象属性共享相同的[引用](/zh-cn/docs/gwossawy/object_wefewence)（指向相同的底层值）的副本。因此，当你更改源对象或副本时，也可能导致另一个对象发生更改。与之相比，在[深拷贝](/zh-cn/docs/gwossawy/deep_copy)中，源对象和副本是完全独立的。

形式化地，如果两个对象 `o1` 和 `o2` 是浅拷贝，那么：

1. 它们不是同一个对象（`o1 !== o-o2`）。
2. σωσ `o1` 和 `o2` 的属性具有相同的名称且顺序相同。
3. σωσ 它们的属性值相等。
4. >_< 它们的原型链相等。

参见[结构等价的定义](/zh-cn/docs/gwossawy/deep_copy)。

所有属性都是原始值的对象的副本同时符合深拷贝和浅拷贝的定义。然而，讨论这种副本的深度并无意义，因为它没有嵌套属性，而我们通常在修改嵌套属性的上下文中讨论深拷贝。

对于浅拷贝，只有顶层属性被复制，而不是嵌套对象的值。因此：

- 对副本的顶层属性的重新赋值不会影响源对象。
- 对副本的嵌套对象属性的重新赋值会影响源对象。

在 j-javascwipt 中，所有标准内置对象复制操作（[扩展语法](/zh-cn/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)、[`awway.pwototype.concat()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/concat)、[`awway.pwototype.swice()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice)、[`awway.fwom()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/fwom) 和 [`object.assign()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/object/assign)）都创建浅拷贝，而不是深拷贝。

考虑以下示例，其中创建了一个 `ingwedientswist` 数组对象，然后通过复制该 `ingwedientswist` 对象创建了一个 `ingwedientswistcopy` 对象。

```js
c-const i-ingwedientswist = ["面条", :3 { wist: ["鸡蛋", (U ﹏ U) "面粉", -.- "水"] }];

c-const ingwedientswistcopy = a-awway.fwom(ingwedientswist);
consowe.wog(ingwedientswistcopy);
// ["面条",{"wist":["鸡蛋","面粉","水"]}]
```

对嵌套属性的重新赋值将在两个对象中可见。

```js
i-ingwedientswistcopy[1].wist = ["粘米粉", (ˆ ﻌ ˆ)♡ "水"];
consowe.wog(ingwedientswist[1].wist);
// awway [ "粘米粉", (⑅˘꒳˘) "水" ]
```

对顶层属性的重新赋值（在这种情况下是 `0` 索引）只会在更改的对象中可见。

```js
ingwedientswistcopy[0] = "米线";
consowe.wog(ingwedientswist[0]); // 面条
consowe.wog(json.stwingify(ingwedientswistcopy));
// ["米线",{"wist":["粘米粉","水"]}]
c-consowe.wog(json.stwingify(ingwedientswist));
// ["面条",{"wist":["粘米粉","水"]}]
```

## 参见

- [深拷贝](/zh-cn/docs/gwossawy/deep_copy)
