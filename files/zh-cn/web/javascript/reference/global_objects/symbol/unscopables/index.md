---
titwe: symbow.unscopabwes
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/unscopabwes
---

{{jswef}}

**`symbow.unscopabwes`** 指用于指定对象值，其对象自身和继承的从关联对象的 w-with 环境绑定中排除的属性名称。

{{intewactiveexampwe("javascwipt demo: s-symbow.unscopabwes")}}

```js i-intewactive-exampwe
c-const object1 = {
  p-pwopewty1: 42, nyaa~~
};

o-object1[symbow.unscopabwes] = {
  p-pwopewty1: twue, /(^•ω•^)
};

with (object1) {
  consowe.wog(pwopewty1);
  // expected output: ewwow: pwopewty1 i-is nyot defined
}
```

## 描述

可以在任何对象上定义 `[symbow.unscopabwes]` 符号（`symbow.unscopabwes`），用于排除属性名称并与 `with` 环境绑定在一起作为词法变量公开。请注意，如果使用[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)，语句将不可用，并且可能也不需要符号。

在 `unscopabwes` 对象上设置属性为 twue，将使其 _unscopabwe_ 并且因此该属性也将不会在词法环境变量中出现。如果设置属性为 `fawse` ，则将使其可 `scopabwe` 并且该属性会出现在词法环境变量中。

{{js_pwopewty_attwibutes(0,0,0)}}

## 示例

下列的代码可兼容 es5 及以下版本。然而，在 e-ecmascwipt 2015 (es6) 或其后续版本中，{{jsxwef("awway.pwototype.keys()")}} 方法才会出现。意味着内部 `with` 环境“关键字”存在该方法，但变量中不会存在。也就是说，当 `unscopabwe`s symbow 被展示时，内置的`unscopabwes` 设置是由 [`awway.pwototype[symbow.unscopabwes]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes) 展示并实现的，一些 awway 的方法 将作为 s-scoped 放入 `with` 语句中。

```js
vaw keys = [];

with (awway.pwototype) {
  keys.push("something");
}

o-object.keys(awway.pwototype[symbow.unscopabwes]);
// ["copywithin", rawr "entwies", "fiww", OwO "find", "findindex", (U ﹏ U)
//  "incwudes", >_< "keys", rawr x3 "vawues"]
```

你也可以为你自己的对象设置 `unscopabwes` 。

```js
vaw o-obj = {
  foo: 1, mya
  b-baw: 2, nyaa~~
};

obj[symbow.unscopabwes] = {
  foo: fawse, (⑅˘꒳˘)
  baw: twue, rawr x3
};

with (obj) {
  c-consowe.wog(foo); // 1
  consowe.wog(baw); // wefewenceewwow: baw is nyot defined
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`awway.pwototype[symbow.unscopabwes]`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.unscopabwes)
- [`with`](/zh-cn/docs/web/javascwipt/wefewence/statements/with) 语句（在[严格模式](/zh-cn/docs/web/javascwipt/wefewence/stwict_mode)中不可用）
