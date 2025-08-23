---
title: Reflect.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
---

{{JSRef}}

静的な **`Reflect.preventExtensions()`** メソッドは、すでにプロパティが追加されたオブジェクトに、新しいプロパティを抑制します (つまり、オブジェクトのさらなる拡張を抑制します)。 {{jsxref("Object.preventExtensions()")}} に似ていますが、[違いがあります](#difference_from_object.preventextensions)。

{{InteractiveExample("JavaScript デモ: Reflect.preventExtensions()")}}

```js interactive-example
const object1 = {};

console.log(Reflect.isExtensible(object1));
// Expected output: true

Reflect.preventExtensions(object1);

console.log(Reflect.isExtensible(object1));
// Expected output: false
```

## 構文

```
Reflect.preventExtensions(target)
```

### 引数

- `target`
  - : 拡張を抑止する対象のオブジェクト。

### 返値

{{jsxref("Boolean")}} で、対象が拡張の抑止の設定に成功したかどうかを表します。

### 例外

{{jsxref("TypeError")}}: `target` が {{jsxref("Object")}} ではない場合

## 解説

`Reflect.preventExtensions` メソッドは、すでにプロパティが追加されたオブジェクトに、新しいプロパティを抑制します (つまり、オブジェクトのさらなる拡張を抑制します)。これは {{jsxref("Object.preventExtensions()")}} と同様のメソッドです。

## 例

### Reflect.preventExtensions() の使用

{{jsxref("Object.preventExtensions()")}} も参照してください。

```js
// オブジェクトは既定で拡張可能。
let empty = {};
Reflect.isExtensible(empty); // === true

// ...しかし、変更できる。
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // === false
```

### Object.preventExtensions() との違い

このメソッドへの最初の引数がオブジェクトではない (プリミティブである) 場合、 {{jsxref("TypeError")}} が発生します。 {{jsxref("Object.preventExtensions()")}} では、 `target` がオブジェクトではない場合はオブジェクトに強制的に変換されます。

```js
Reflect.preventExtensions(1);
// TypeError: 1 is not an object

Object.preventExtensions(1);
// 1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Reflect")}}
- {{jsxref("Object.isExtensible()")}}
