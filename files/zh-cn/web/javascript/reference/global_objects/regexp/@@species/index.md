---
title: get RegExp[@@species]
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@species
---

{{JSRef}}

**`RegExp[@@species]`** 访问器属性返回`RegExp` 的构造器。

## 语法

```plain
RegExp[Symbol.species]
```

## 描述

`species` 访问器属性返回 `RegExp` 对象的默认构造器。子类构造器可能会覆盖它，来修改构造器的指派。

## 示例

`species`属性返回默认构造器函数，它是用于`RegExp` 对象的`RegExp`构造器：

```js
RegExp[Symbol.species]; // 函数 RegExp()
```

在派生的正则类（也就是你自定义的正则类 `MyRegExp`）中，`MyRegExp` 的 species 是 `MyRegExp` 构造器。但是，你可能希望覆盖它，以便在你的派生类方法中，返回 `RegExp` 父类对象：

```js
class MyRegExp extends RegExp {
  // 将 MyRegExp species 覆盖为 RegExp 父类构造器
  static get [Symbol.species]() {
    return RegExp;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("RegExp")}}
- {{jsxref("Symbol.species")}}
