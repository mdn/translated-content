---
title: Reflect.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
---

{{JSRef}}

静的な **`Reflect.setPrototypeOf()`** メソッドは、返値を除いて、 {{jsxref("Object.setPrototypeOf()")}} と同じメソッドです。これは指定されたオブジェクトのプロトタイプ (つまり、内部の `[[Prototype]]` プロパティ) にほかのオブジェクト、または {{jsxref("null")}} を設定し、操作が成功したなら `true` を、そうでないなら `false` を返します。

{{EmbedInteractiveExample("pages/js/reflect-setprototypeof.html")}}

## 構文

```
Reflect.setPrototypeOf(target, prototype)
```

### 引数

- `target`
  - : プロトタイプを設定する対象のオブジェクトです。
- `prototype`
  - : オブジェクトの新しいプロトタイプ (オブジェクトまたは {{jsxref("null")}}) です。

### 返値

プロトタイプが正常に設定されたかどうかを示す {{jsxref("Boolean")}} 値です。

### 例外

{{jsxref("TypeError")}}: `target` が {{jsxref("Object")}} ではない場合、または `prototype` がオブジェクトでも {{jsxref("null")}} でもない場合。

## 解説

`Reflect.setPrototypeOf` メソッドは、指定されたオブジェクトのプロトタイプ (つまり、内部の `[[Prototype]]` プロパティ) を変更します。

## 例

### Reflect.setPrototypeOf() の使用

```js
Reflect.setPrototypeOf({}, Object.prototype); // true

// オブジェクトの [[Prototype]] は null に変更できる。
Reflect.setPrototypeOf({}, null); // true

// 対象が拡張できない場合、false を返す。
Reflect.setPrototypeOf(Object.freeze({}), null); // false

// プロトタイプチェーンが循環する場合、false を返す。
let target = {};
let proto = Object.create(target);
Reflect.setPrototypeOf(target, proto); // false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("javascript.builtins.Reflect.setPrototypeOf")}}

## 関連情報

- {{jsxref("Reflect")}}
- {{jsxref("Object.setPrototypeOf()")}}
