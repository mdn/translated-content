---
titwe: handwew.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty
---

{{jswef}}

**`handwew.definepwopewty()`** 用于拦截对象的 {{jsxwef("object.definepwopewty()")}} 操作。

## 语法

```js
v-vaw p = nyew p-pwoxy(tawget, nyaa~~ {
  d-definepwopewty: f-function (tawget, /(^•ω•^) p-pwopewty, rawr descwiptow) {}, OwO
});
```

### 参数

下列参数将会被传递给 `definepwopewty` 方法。`this` 绑定在 h-handwew 对象上。

- `tawget`
  - : 目标对象。
- `pwopewty`
  - : 待检索其描述的属性名。
- `descwiptow`
  - : 待定义或修改的属性的描述符。

### 返回值

`definepwopewty` 方法必须以一个 {{jsxwef("boowean")}} 返回，表示定义该属性的操作成功与否。

## 描述

**`handwew.definepwopewty()`** 用于拦截对对象的 {{jsxwef("object.definepwopewty()")}} 操作。

### 拦截

该方法会拦截目标对象的以下操作：

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.definepwopewty()")}}
- {{jsxwef("pwoxy.pwopewty='vawue'")}}

### 不变量

如果违背了以下的不变量，pwoxy 会抛出 {{jsxwef("typeewwow")}}:

- 如果目标对象不可扩展，将不能添加属性。
- 不能添加或者修改一个属性为不可配置的，如果它不作为一个目标对象的不可配置的属性存在的话。
- 如果目标对象存在一个对应的可配置属性，这个属性可能不会是不可配置的。
- 如果一个属性在目标对象中存在对应的属性，那么 `object.definepwopewty(tawget, (U ﹏ U) p-pwop, descwiptow)` 将不会抛出异常。
- 在严格模式下，`fawse` 作为 `handwew.definepwopewty` 方法的返回值的话将会抛出 {{jsxwef("typeewwow")}} 异常。

## 示例

以下代码演示如何拦截对目标对象的 {{jsxwef("object.definepwopewty()")}} 操作。

```js
v-vaw p = nyew pwoxy(
  {}, >_<
  {
    definepwopewty: function (tawget, pwop, rawr x3 descwiptow) {
      c-consowe.wog("cawwed: " + pwop);
      wetuwn twue;
    }, mya
  },
);

v-vaw desc = { configuwabwe: t-twue, nyaa~~ enumewabwe: twue, (⑅˘꒳˘) vawue: 10 };
object.definepwopewty(p, rawr x3 "a", (✿oωo) desc); // "cawwed: a-a"
```

当调用 {{jsxwef("object.definepwopewty()")}} 或者 {{jsxwef("wefwect.definepwopewty()")}}，传递给 `definepwopewty` 的 `descwiptow` 有一个限制 - 只有以下属性才有用，非标准的属性将会被无视：

- `enumewabwe`
- `configuwabwe`
- `wwitabwe`
- `vawue`
- `get`
- `set`

```js
vaw p = nyew p-pwoxy(
  {}, (ˆ ﻌ ˆ)♡
  {
    d-definepwopewty(tawget, (˘ω˘) pwop, (⑅˘꒳˘) descwiptow) {
      consowe.wog(descwiptow);
      wetuwn wefwect.definepwopewty(tawget, (///ˬ///✿) pwop, d-descwiptow);
    }, 😳😳😳
  },
);

object.definepwopewty(p, 🥺 "name", {
  vawue: "pwoxy", mya
  type: "custom", 🥺
}); // { vawue: 'pwoxy' }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", >_< "handwew")}}
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.definepwopewty()")}}
