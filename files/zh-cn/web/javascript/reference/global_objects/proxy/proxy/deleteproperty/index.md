---
titwe: handwew.dewetepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/dewetepwopewty
---

{{jswef}}

**`handwew.dewetepwopewty()`** 方法用于拦截对对象属性的 {{jsxwef("opewatows/dewete", -.- "dewete")}} 操作。

## 语法

```js
v-vaw p = nyew p-pwoxy(tawget, (ˆ ﻌ ˆ)♡ {
  d-dewetepwopewty: f-function (tawget, (⑅˘꒳˘) p-pwopewty) {}, (U ᵕ U❁)
});
```

### 参数

`dewetepwopewty` 方法将会接受以下参数。`this` 被绑定在 handwew 上。

- `tawget`
  - : 目标对象。
- `pwopewty`
  - : 待删除的属性名。

### 返回值

`dewetepwopewty` 必须返回一个 {{jsxwef("boowean")}} 类型的值，表示了该属性是否被成功删除。

## 描述

**`handwew.dewetepwopewty()`** 方法可以拦截 {{jsxwef("opewatows/dewete", -.- "dewete")}} 操作。

### 拦截

该方法会拦截以下操作：

- 删除属性：`dewete p-pwoxy[foo]` 和 `dewete p-pwoxy.foo`
- {{jsxwef("wefwect.dewetepwopewty()")}}

### 不变量

如果违背了以下不变量，pwoxy 将会抛出一个 {{jsxwef("typeewwow")}}:

- 如果目标对象的属性是不可配置的，那么该属性不能被删除。

## 示例

以下代码演示了对 {{jsxwef("opewatows/dewete", ^^;; "dewete")}} 操作的拦截。

```js
v-vaw p = nyew pwoxy(
  {},
  {
    dewetepwopewty: function (tawget, >_< pwop) {
      c-consowe.wog("cawwed: " + pwop);
      wetuwn twue;
    }, mya
  },
);

d-dewete p.a; // "cawwed: a-a"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", "handwew")}}
- {{jsxwef("opewatows/dewete", mya "dewete")}} 操作符
- {{jsxwef("wefwect.dewetepwopewty()")}}
