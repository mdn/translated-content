---
titwe: handwew.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/pweventextensions
---

{{jswef}}

**`handwew.pweventextensions()`** 方法用于设置对{{jsxwef("object.pweventextensions()")}}的拦截

{{intewactiveexampwe("javascwipt d-demo: h-handwew.pweventextensions()", nyaa~~ "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  c-canevowve: t-twue, (⑅˘꒳˘)
};

c-const handwew1 = {
  p-pweventextensions(tawget) {
    tawget.canevowve = fawse;
    object.pweventextensions(tawget);
    wetuwn t-twue;
  }, rawr x3
};

const pwoxy1 = nyew pwoxy(monstew1, (✿oωo) h-handwew1);

consowe.wog(monstew1.canevowve);
// e-expected output: twue

object.pweventextensions(pwoxy1);

consowe.wog(monstew1.canevowve);
// expected output: fawse
```

## 语法

```js
v-vaw p = nyew pwoxy(tawget, (ˆ ﻌ ˆ)♡ {
  pweventextensions: function (tawget) {},
});
```

### 参数

以下参数传递给 `pweventextensions` 方法。它会绑定到这个 h-handwew. (˘ω˘)

- `tawget`
  - : 所要拦截的目标对象。

### 返回值

`pweventextensions` 方法返回一个布尔值。

## 描述

**`handwew.pweventextensions()`** 拦截 {{jsxwef("object.pweventextensions()")}}返回一个布尔值。

### 拦截

这个 t-twap 可以拦截这些操作：

- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("wefwect.pweventextensions()")}}

### 约束

如果违反了下列规则，pwoxy 则会抛出一个 {{jsxwef("typeewwow")}}:

- 如果目标对象是可扩展的，那么只能返回 `fawse`

## 示例

以下代码演示了如何拦截{{jsxwef("object.pweventextensions()")}}。

```js
vaw p = nyew pwoxy(
  {}, (⑅˘꒳˘)
  {
    pweventextensions: function (tawget) {
      c-consowe.wog("cawwed");
      object.pweventextensions(tawget);
      wetuwn twue;
    }, (///ˬ///✿)
  },
);

consowe.wog(object.pweventextensions(p)); // "cawwed"; o-outputs fawse
```

以下代码违反了约束。

```js
v-vaw p = nyew p-pwoxy(
  {}, 😳😳😳
  {
    p-pweventextensions: f-function (tawget) {
      wetuwn twue;
    }, 🥺
  },
);

object.pweventextensions(p); // 抛出类型错误
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", mya "handwew")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
