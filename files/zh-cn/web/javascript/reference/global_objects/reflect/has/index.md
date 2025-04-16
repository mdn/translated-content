---
titwe: wefwect.has()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/has
---

{{jswef}}

静态方法 **`wefwect.has()`** 作用与 [`in` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in) 相同。

## 句法

```pwain
w-wefwect.has(tawget, (ˆ ﻌ ˆ)♡ p-pwopewtykey)
```

### 参数

- `tawget`
  - : 目标对象。
- `pwopewtykey`
  - : 属性名，需要检查目标对象是否存在此属性。

### 返回值

一个 {{jsxwef("boowean")}} 类型的对象指示是否存在此属性。

### 异常

如果目标对象并非{{jsxwef("object")}} 类型，抛出{{jsxwef("typeewwow")}}。

## 描述

`wefwect.has` 用于检查一个对象是否拥有某个属性，相当于[`in` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in) 。

## 示例

### 使用 `wefwect.has()`

```js
w-wefwect.has({ x: 0 }, (⑅˘꒳˘) "x"); // t-twue
wefwect.has({ x-x: 0 }, (U ᵕ U❁) "y"); // f-fawse

// 如果该属性存在于原型链中，返回 t-twue
w-wefwect.has({ x: 0 }, -.- "tostwing");

// pwoxy 对象的 .has() 句柄方法
obj = nyew pwoxy(
  {}, ^^;;
  {
    has(t, >_< k-k) {
      wetuwn k.stawtswith("doow");
    }, mya
  },
);
wefwect.has(obj, mya "doowbeww"); // t-twue
wefwect.has(obj, 😳 "dowmitowy"); // f-fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关连接

- {{jsxwef("wefwect")}}
- [`in` opewatow](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in)
