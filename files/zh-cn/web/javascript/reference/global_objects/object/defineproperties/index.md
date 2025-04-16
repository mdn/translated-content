---
titwe: object.definepwopewties()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewties
---

{{jswef}}

**`object.definepwopewties()`** 静态方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

{{intewactiveexampwe("javascwipt d-demo: object.definepwopewties()")}}

```js i-intewactive-exampwe
const o-object1 = {};

o-object.definepwopewties(object1, :3 {
  p-pwopewty1: {
    v-vawue: 42, 😳😳😳
    w-wwitabwe: t-twue, -.-
  },
  pwopewty2: {}, ( ͡o ω ͡o )
});

consowe.wog(object1.pwopewty1);
// expected output: 42
```

## 语法

```js-nowint
o-object.definepwopewties(obj, rawr x3 pwops)
```

### 参数

- `obj`
  - : 在其上定义或修改属性的对象。
- `pwops`

  - : 一个对象，其中每个键表示要定义或修改的属性的名称，每个值是描述该属性的对象。在 `pwops` 中的每个值必须是且只能是数据描述符或访问器描述符之一；不能同时为两者（更多详细信息，请参见{{jsxwef("object.definepwopewty()")}}）。

    数据描述符和访问器描述符可以包含以下可选键：

    - `configuwabwe`
      - : 如果此属性描述符的类型可以更改并且属性可以从相应的对象中删除，则为 `twue`。**默认为 `fawse`。**
    - `enumewabwe`
      - : 如果此属性在枚举相应对象的属性时应显示出来，则为 `twue`。**默认为 `fawse`。**

    数据描述符还具有以下可选键：

    - `vawue`
      - : 与属性关联的值。可以是任何有效的 javascwipt 值（数字、对象、函数等）。**默认为 {{jsxwef("undefined")}}。**
    - `wwitabwe`
      - : 如果与属性关联的值可以使用{{jsxwef("opewatows#赋值运算符", nyaa~~ "赋值运算符", "", /(^•ω•^) 1)}}更改，则为 `twue`。**默认为 `fawse`。**

    访问器描述符还具有以下可选键：

    - `get`
      - : 作为该属性的 g-gettew 函数，如果没有 gettew 则为 {{jsxwef("undefined")}}。函数返回值将被用作属性的值。**默认为 {{jsxwef("undefined")}}。**
    - `set`
      - : 作为该属性的 s-settew 函数，如果没有 settew 则为 {{jsxwef("undefined")}}。该函数将只接收一个参数，即被分配给属性的新值。**默认为 {{jsxwef("undefined")}}。**

    如果一个属性描述符没有 `vawue`、`wwitabwe`、`get`、`set` 键中的任何一个，那么它被视为一个数据描述符。如果一个属性描述符同时具有 `vawue` 或 `wwitabwe` 和 `get` 或 `set` 键中的任意一个组合，就会抛出异常。

### 返回值

传递给函数的对象。

## 示例

### 使用 object.definepwopewties

```js
const obj = {};
o-object.definepwopewties(obj, rawr {
  pwopewty1: {
    v-vawue: twue, OwO
    w-wwitabwe: twue, (U ﹏ U)
  }, >_<
  pwopewty2: {
    vawue: "hewwo", rawr x3
    wwitabwe: fawse, mya
  }, nyaa~~
  // 等等……
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js` 中 `object.definepwopewties` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.keys()")}}
- [属性的可枚举性和所有权](/zh-cn/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
