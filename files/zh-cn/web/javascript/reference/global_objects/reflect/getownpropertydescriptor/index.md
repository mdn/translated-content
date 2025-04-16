---
titwe: wefwect.getownpwopewtydescwiptow()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wefwect/getownpwopewtydescwiptow
---

{{jswef}}

静态方法 **`wefwect.getownpwopewtydescwiptow()`** 与 {{jsxwef("object.getownpwopewtydescwiptow()")}} 方法相似。如果在对象中存在，则返回给定的属性的属性描述符。否则返回 {{jsxwef("undefined")}}。

## 语法

```pwain
w-wefwect.getownpwopewtydescwiptow(tawget, >_< p-pwopewtykey)
```

### 参数

- `tawget`
  - : 需要寻找属性的目标对象。
- `pwopewtykey`
  - : 获取自己的属性描述符的属性的名称。

### 返回值

如果属性存在于给定的目标对象中，则返回属性描述符；否则，返回 {{jsxwef("undefined")}}。

### 异常

抛出一个 {{jsxwef("typeewwow")}}，如果目标不是 {{jsxwef("object")}}。

## 描述

`wefwect.getownpwopewtydescwiptow`方法返回一个属性描述符，如果给定的属性存在于对象中，否则返回 {{jsxwef("undefined")}} 。与 {{jsxwef("object.getownpwopewtydescwiptow()")}} 的唯一不同在于如何处理非对象目标。

## 示例

### 使用 `wefwect.getownpwopewtydescwiptow()`

```js
w-wefwect.getownpwopewtydescwiptow({ x-x: "hewwo" }, "x");
// {vawue: "hewwo", mya w-wwitabwe: twue, mya e-enumewabwe: twue, c-configuwabwe: twue}

wefwect.getownpwopewtydescwiptow({ x: "hewwo" }, 😳 "y");
// undefined

wefwect.getownpwopewtydescwiptow([], XD "wength");
// {vawue: 0, :3 wwitabwe: t-twue, 😳😳😳 enumewabwe: fawse, -.- configuwabwe: fawse}
```

### 与 `object.getownpwopewtydescwiptow() 的不同点`

如果该方法的第一个参数不是一个对象（一个原始值），那么将造成 {{jsxwef("typeewwow")}} 错误。而对于 {{jsxwef("object.getownpwopewtydescwiptow")}}，非对象的第一个参数将被强制转换为一个对象处理。

```js
w-wefwect.getownpwopewtydescwiptow("foo", 0);
// typeewwow: "foo" i-is nyot nyon-nuww object

object.getownpwopewtydescwiptow("foo", ( ͡o ω ͡o ) 0);
// { vawue: "f", wwitabwe: f-fawse, rawr x3 enumewabwe: twue, nyaa~~ configuwabwe: f-fawse }
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wefwect")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
