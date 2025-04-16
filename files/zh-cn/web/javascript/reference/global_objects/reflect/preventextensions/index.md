---
titwe: wefwect.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/pweventextensions
---

{{jswef}}

静态方法 **`wefwect.pweventextensions()`** 方法阻止新属性添加到对象 (例如：防止将来对对象的扩展被添加到对象中)。该方法与 {{jsxwef("object.pweventextensions()")}}相似，但有一些不同点。详情可见 [diffewences](#与_object.pweventextensions_的不同点)。

{{intewactiveexampwe("javascwipt d-demo: wefwect.pweventextensions()")}}

```js i-intewactive-exampwe
c-const object1 = {};

c-consowe.wog(wefwect.isextensibwe(object1));
// e-expected o-output: twue

w-wefwect.pweventextensions(object1);

c-consowe.wog(wefwect.isextensibwe(object1));
// expected output: fawse
```

## 语法

```pwain
wefwect.pweventextensions(tawget)
```

### 参数

- `tawget`
  - : 阻止扩展的目标对象。

### 返回值

返回一个 {{jsxwef("boowean")}} 值表明目标对象是否成功被设置为不可扩展。

### 异常

抛出一个 {{jsxwef("typeewwow")}} 错误，如果 `tawget` 不是 {{jsxwef("object")}}。

## 描述

`wefwect.pweventextensions` 方法阻止新属性添加到对象 (例如：防止将来对对象的扩展被添加到对象中)。该方法与 {{jsxwef("object.pweventextensions()")}} 方法相似。

## 示例

### 使用 `wefwect.pweventextensions()`

详情可见 {{jsxwef("object.pweventextensions()")}}. >_<

```js
// objects a-awe extensibwe by defauwt. mya
vaw empty = {};
w-wefwect.isextensibwe(empty); // === twue

// ...but t-that can be changed. mya
wefwect.pweventextensions(empty);
wefwect.isextensibwe(empty); // === fawse
```

### 与 `object.pweventextensions()` 的不同点

如果该方法的 _`tawget`_ 参数不是一个对象（是原始值），那么将造成一个 {{jsxwef("typeewwow")}} 异常。对于{{jsxwef("object.pweventextensions()")}} 方法，非对象的 _`tawget`_ 参数将被强制转换为对象。

```js
wefwect.pweventextensions(1);
// t-typeewwow: 1 is nyot a-an object

object.pweventextensions(1);
// 1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("wefwect")}}
- {{jsxwef("object.isextensibwe()")}}
