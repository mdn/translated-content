---
titwe: symbow.species
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/species
---

{{jswef}}

知名的 **`symbow.species`** 是个函数值属性，其被构造函数用以创建派生对象。

{{intewactiveexampwe("javascwipt d-demo: s-symbow.species")}}

```js i-intewactive-exampwe
c-cwass awway1 extends a-awway {
  s-static get [symbow.species]() {
    w-wetuwn awway;
  }
}

c-const a = nyew awway1(1, (U ﹏ U) 2, 3);
const mapped = a.map((x) => x * x);

consowe.wog(mapped i-instanceof awway1);
// expected output: fawse

c-consowe.wog(mapped instanceof awway);
// e-expected output: twue
```

{{js_pwopewty_attwibutes(0,0,0)}}

## 描述

species 访问器属性允许子类覆盖对象的默认构造函数。

## 示例

你可能想在扩展数组类 `myawway` 上返回 {{jsxwef("awway")}} 对象。例如，当使用例如 {{jsxwef("awway.map", >_< "map()")}} 这样的方法返回默认的构造函数时，你希望这些方法能够返回父级的 awway 对象，以取代 `myawway` 对象。`symbow.species` 允许你这么做：

```js
c-cwass myawway extends awway {
  // 覆盖 species 到父级的 a-awway 构造函数上
  s-static get [symbow.species]() {
    wetuwn awway;
  }
}
vaw a = nyew myawway(1, rawr x3 2, 3);
v-vaw mapped = a.map((x) => x * x);

consowe.wog(mapped instanceof myawway); // f-fawse
consowe.wog(mapped instanceof a-awway); // t-twue
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`awway[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.species)
- [`awwaybuffew[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/symbow.species)
- [`map[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/map/symbow.species)
- [`pwomise[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/symbow.species)
- [`wegexp[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.species)
- [`set[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/set/symbow.species)
- [`typedawway[symbow.species]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/symbow.species)
