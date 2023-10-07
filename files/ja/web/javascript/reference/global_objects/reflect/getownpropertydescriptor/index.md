---
title: Reflect.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
---

{{JSRef}}

静的な **`Reflect.getOwnPropertyDescriptor()`** メソッドは {{jsxref("Object.getOwnPropertyDescriptor()")}} と似ています。オブジェクトにプロパティが存在する場合は、指定されたプロパティのプロパティ記述子を返します。一方、プロパティが存在しない場合は {{jsxref("undefined")}} を返します。

{{EmbedInteractiveExample("pages/js/reflect-getownpropertydescriptor.html")}}

## 構文

```
Reflect.getOwnPropertyDescriptor(target, propertyKey)
```

### 引数

- `target`
  - : プロパティを探す対象のオブジェクト。
- `propertyKey`
  - : 所有しているプロパティ記述子を取得するためのプロパティ名。

### 返値

`target` オブジェクト内にプロパティが存在する場合は、プロパティ記述子オブジェクト、または {{jsxref("undefined")}}。

### 例外

{{jsxref("TypeError")}}: `target` が {{jsxref("Object")}} ではない場合

## 解説

`Reflect.getOwnPropertyDescriptor` オブジェクトにプロパティが存在する場合、与えられたプロパティのプロパティディスクリプタを返します。一方、プロパティが存在しない場合は、{{jsxref("undefined")}} を返します。{{jsxref("Object.getOwnPropertyDescriptor()")}} との唯一の違いは、非オブジェクトの対象がどのようにバンドルされるかだけです。

## 例

### Reflect.getOwnPropertyDescriptor() の使用

```js
Reflect.getOwnPropertyDescriptor({ x: "hello" }, "x");
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({ x: "hello" }, "y");
// undefined

Reflect.getOwnPropertyDescriptor([], "length");
// {value: 0, writable: true, enumerable: false, configurable: false}
```

### Object.getOwnPropertyDescriptor() との違い

このメソッドへの最初の引数がオブジェクトではない (プリミティブであった) 場合、 {{jsxref("TypeError")}} が発生します。 {{jsxref("Object.getOwnPropertyDescriptor")}} だと、非オブジェクトである最初の引数は強制的にオブジェクトに変換されます。

```js
Reflect.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not non-null object

Object.getOwnPropertyDescriptor("foo", 0);
// { value: "f", writable: false, enumerable: true, configurable: false }
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Reflect.getOwnPropertyDescriptor")}}

## 関連情報

- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
