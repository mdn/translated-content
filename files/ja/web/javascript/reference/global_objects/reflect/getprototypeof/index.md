---
title: Reflect.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
---

{{JSRef}}

静的な **`Reflect.getPrototypeOf()`** メソッドは、{{jsxref("Object.getPrototypeOf()")}} とほぼ同じメソッドです。これは指定したオブジェクトのプロトタイプ (つまり、内部の `[[Prototype]]` プロパティの値) を返します。

{{EmbedInteractiveExample("pages/js/reflect-getprototypeof.html")}}

## 構文

```
Reflect.getPrototypeOf(target)
```

### 引数

- `target`
  - : プロトタイプを取得する対象のオブジェクトです。

### 返値

与えられたオブジェクトのプロトタイプです。継承されたプロパティがない場合、{{jsxref("null")}} を返します。

### 例外

`target` が {{jsxref("Object")}} でない場合に {{jsxref("TypeError")}} がスローされます。

## 解説

`Reflect.getPrototypeOf` メソッドは、指定したオブジェクトのプロトタイプ (つまり、内部の `[[Prototype]]` プロパティの値) を返します。

## 例

### Reflect.getPrototypeOf() の使用

```js
Reflect.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf(Object.prototype); // null
Reflect.getPrototypeOf(Object.create(null)); // null
```

### Object.getPrototypeOf() との比較

```js
// Object の結果は同じです
Object.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf({}); // Object.prototype

// ES5 上では非Objectの結果は両方とも例外です
Object.getPrototypeOf("foo"); // Throws TypeError
Reflect.getPrototypeOf("foo"); // Throws TypeError

// ES2015 上では Reflect のみ例外で、Object は 非Object を Object として扱います
Object.getPrototypeOf("foo"); // String.prototype
Reflect.getPrototypeOf("foo"); // Throws TypeError

// To mimic the Object ES2015 behavior you need to coerce
Reflect.getPrototypeOf(Object("foo")); // String.prototype
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Reflect.getPrototypeOf")}}

## 関連情報

- {{jsxref("Reflect")}}
- {{jsxref("Object.getPrototypeOf()")}}
