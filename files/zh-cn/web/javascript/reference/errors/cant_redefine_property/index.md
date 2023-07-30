---
title: 'TypeError: can''t redefine non-configurable property "x"'
slug: Web/JavaScript/Reference/Errors/Cant_redefine_property
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Cannot redefine property: "x" (Chrome)
```

## 错误类型

{{jsxref("TypeError")}}

## 哪里出错了？

这种错误的起因在于试图给对象重新定义一个属性，但是该属性是[不可配置的](/zh-CN/docs/Web/JavaScript/Data_structures#属性)。 `configurable` 特性控制着该属性是否可以从对象中删除，以及它的各个特性（除 writable 之外）是否可以修改。通常使用[对象初始化语句](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)定义的对象属性是可配置的。而使用 {{jsxref("Object.defineProperty()")}} 定义的属性则默认不可配置。

## 示例

### 使用 object.defineProperty 创建的不可配置属性

在使用 {{jsxref("Object.defineProperty()")}} 创建属性的时候，如果没有明确将其设定为可配置的，那么创建出来的属性就是不可配置的。

```js example-bad
var obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar" });

Object.defineProperty(obj, "foo", { value: "baz" });
// TypeError: can't redefine non-configurable property "foo"
```

如果想要稍后重新定义的话，那么需要将 "foo" 属性设置为可配置的。

```js example-good
var obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar", configurable: true });
Object.defineProperty(obj, "foo", { value: "baz", configurable: true });
```

## 参见

- [\[\[Configurable\]\]](/zh-CN/docs/Web/JavaScript/Data_structures#属性)
- {{jsxref("Object.defineProperty()")}}
