---
title: RegExp[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species
---

{{JSRef}}

**`RegExp[Symbol.species]`** 访问器属性返回 `RegExp` 的构造函数。

## 语法

```js-nolint
RegExp[Symbol.species]
```

## 描述

`species` 访问器属性返回 `RegExp` 对象的默认构造函数。子类构造函数可能会覆盖它，来修改构造函数的指派。

## 示例

`species`属性返回默认构造函数，它是用于 `RegExp` 对象的 `RegExp` 构造函数：

```js
RegExp[Symbol.species]; // 函数 RegExp()
```

在派生的正则类（也就是你自定义的正则类 `MyRegExp`）中，`MyRegExp` 的 species 是 `MyRegExp` 构造函数。但是，你可能希望覆盖它，以便在你的派生类方法中，返回 `RegExp` 父类对象：

```js
class MyRegExp extends RegExp {
  // 将 MyRegExp species 覆盖为 RegExp 父类构造函数
  static get [Symbol.species]() {
    return RegExp;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("RegExp")}}
- {{jsxref("Symbol.species")}}
