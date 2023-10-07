---
title: Reflect.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
---

{{JSRef}}

静的な **`Reflect.isExtensible()`** メソッドは 、オブジェクトを拡張できるかを測定します (オブジェクトに追加された新しいプロパティを持てるかどうか)。これは {{jsxref("Object.isExtensible()")}} に似ていますが、いくつかの[違いがあります](#Difference_to_Object.isExtensible)。

{{EmbedInteractiveExample("pages/js/reflect-isextensible.html", "taller")}}

## 構文

```
Reflect.isExtensible(target)
```

### 引数

- `target`
  - : 拡張できるかどうかをチェックする対象のオブジェクト。

### 返値

対象が拡張可能かどうかを示す {{jsxref("Boolean")}} 値。

### 例外

{{jsxref("TypeError")}}: `target` が {{jsxref("Object")}} ではなかった場合。

## 解説

`Reflect.isExtensible` メソッドは 、オブジェクトを拡張できるかを測定します（オブジェクトに追加された新しいプロパティを持てるかどうか）。これは {{jsxref("Object.isExtensible()")}} と同じメソッドです。

## 例

### Reflect.isExtensible() の使用

{{jsxref("Object.isExtensible()")}} も見てください。

```js
// 今オブジェクトは拡張可能。
let empty = {};
Reflect.isExtensible(empty); // === true

// ...しかし、変更できます
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // === false

// シールドオブジェクトは拡張できないように定義される。
let sealed = Object.seal({});
Reflect.isExtensible(sealed); // === false

// フローズンオブジェクトも拡張できないように定義される。
let frozen = Object.freeze({});
Reflect.isExtensible(frozen); // === false
```

### Object.isExtensible() との違い

このメソッドへの最初の引数がオブジェクトではなかった (プリミティブであった) 場合、これは {{jsxref("TypeError")}} を引き起こします。{{jsxref("Object.isExtensible()")}} だと、オブジェクトではない最初の引数はオブジェクトに強制的に変換されます。

```js
Reflect.isExtensible(1);
// TypeError: 1 はオブジェクトではない

Object.isExtensible(1);
// false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Reflect.isExtensible")}}

## 関連情報

- {{jsxref("Reflect")}}
- {{jsxref("Object.isExtensible()")}}
