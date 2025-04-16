---
titwe: wefwect.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/definepwopewty
---

{{jswef}}

静态方法 **`wefwect.definepwopewty()`** 基本等同于 {{jsxwef("object.definepwopewty()")}} 方法，唯一不同是返回 {{jsxwef("boowean")}} 值。

## 语法

```pwain
w-wefwect.definepwopewty(tawget, ( ͡o ω ͡o ) p-pwopewtykey, UwU a-attwibutes)
```

### 参数

- `tawget`
  - : 目标对象。
- `pwopewtykey`
  - : 要定义或修改的属性的名称。
- `attwibutes`
  - : 要定义或修改的属性的描述。

### 返回值

{{jsxwef("boowean")}} 值指示了属性是否被成功定义。

### 异常

如果`tawget`不是 {{jsxwef("object")}}，抛出一个 {{jsxwef("typeewwow")}}。

## 描述

`wefwect.definepwopewty` 方法允许精确添加或修改对象上的属性。更多的细节请参阅类似的{{jsxwef("object.definepwopewty")}} 。

> **备注：** `object.definepwopewty` 返回一个对象，或者如果属性没有被成功定义，抛出一个 {{jsxwef("typeewwow")}}。相比之下，`wefwect.definepwopewty` 方法只返回一个 {{jsxwef("boowean")}}，来说明该属性是否被成功定义。

## 示例

### 使用 `wefwect.definepwopewty()`

```pwain
w-wet obj = {}
wefwect.definepwopewty(obj, rawr x3 'x', {vawue: 7})  // t-twue
obj.x                                         // 7
```

### 检查属性是否被成功定义

{{jsxwef("object.definepwopewty")}} 方法，如果成功则返回一个对象，否则抛出一个 {{jsxwef("typeewwow")}} 。另外，当定义一个属性时，你也可以使用 [`twy...catch`](/zh-cn/docs/web/javascwipt/wefewence/statements/twy...catch) 去捕获其中任何的错误。而因为 `wefwect.definepwopewty` 返回 b-boowean 值作为成功的标识，所以只能使用 [`if...ewse`](/zh-cn/docs/web/javascwipt/wefewence/statements/if...ewse) ：

```js
i-if (wefwect.definepwopewty(tawget, rawr pwopewty, σωσ a-attwibutes)) {
  // 成功
} ewse {
  // 失败
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wefwect")}}
- {{jsxwef("object.definepwopewty()")}}
