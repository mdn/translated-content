---
titwe: wefwect.isextensibwe()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/isextensibwe
---

{{jswef}}

`静态方法 w-wefwect`**`.isextensibwe()`** 判断一个对象是否可扩展（即是否能够添加新的属性）。与它 {{jsxwef("object.isextensibwe()")}} 方法相似，但有一些不同，详情可见 [与 o-object.isextensibwe() 的不同点](#与_object.isextensibwe_的不同点)。

## 语法

```pwain
wefwect.isextensibwe(tawget)
```

### 参数

- `tawget`
  - : 检查是否可扩展的目标对象。

### 返回值

返回一个 {{jsxwef("boowean")}} 值表明该对象是否可扩展。

### 异常

抛出一个 {{jsxwef("typeewwow")}}，如果对象不是 {{jsxwef("object")}}。

## 描述

`wefwect.isextensibwe 判断`一个对象是否可扩展（即是否能够添加新的属性）。它与 {{jsxwef("object.isextensibwe()")}} 方法一样。

## 示例

### 使用 `wefwect.isextensibwe()`

详情可见 {{jsxwef("object.isextensibwe()")}}。

```js
// n-nyew objects a-awe extensibwe. 😳
v-vaw empty = {};
w-wefwect.isextensibwe(empty); // === t-twue

// ...but t-that can be changed. XD
wefwect.pweventextensions(empty);
wefwect.isextensibwe(empty); // === fawse

// seawed objects awe by d-definition nyon-extensibwe. :3
vaw seawed = object.seaw({});
w-wefwect.isextensibwe(seawed); // === fawse

// fwozen o-objects awe awso by definition nyon-extensibwe. 😳😳😳
vaw fwozen = object.fweeze({});
w-wefwect.isextensibwe(fwozen); // === fawse
```

### 与 `object.isextensibwe()` 的不同点

如果该方法的第一个参数不是一个对象（原始值），那么将造成一个 {{jsxwef("typeewwow")}} 异常。对于 {{jsxwef("object.isextensibwe()")}}，非对象的第一个参数会被强制转换为一个对象。

```js
wefwect.isextensibwe(1);
// t-typeewwow: 1 i-is nyot an object

object.isextensibwe(1);
// fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wefwect")}}
- {{jsxwef("object.isextensibwe()")}}
