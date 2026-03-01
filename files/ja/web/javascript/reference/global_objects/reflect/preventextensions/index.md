---
title: Reflect.preventExtensions()
short-title: preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Reflect.preventExtensions()`** は静的メソッドで、{{jsxref("Object.preventExtensions()")}} に似ています。すでにプロパティが追加されたオブジェクトに、新しいプロパティを抑制します (つまり、オブジェクトのさらなる拡張を抑制します)。

{{InteractiveExample("JavaScript デモ: Reflect.preventExtensions()")}}

```js interactive-example
const object = {};

console.log(Reflect.isExtensible(object));
// 予想される結果: true

Reflect.preventExtensions(object);

console.log(Reflect.isExtensible(object));
// 予想される結果: false
```

## 構文

```js-nolint
Reflect.preventExtensions(target)
```

### 引数

- `target`
  - : 拡張を抑止する対象のオブジェクト。

### 返値

論理値 ({{jsxref("Boolean")}}) で、対象が拡張の抑止の設定に成功したかどうかを表します。

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトではない場合に発生します。

## 解説

`Reflect.preventExtensions()` は、オブジェクトの拡張を防止する反射的意味づけを提供します。`Object.preventExtensions()` との相違点は以下の通りです。

- `Reflect.preventExtensions()` は、対象がオブジェクトでない場合に {{jsxref("TypeError")}} を発生させます。一方、`Object.preventExtensions()` は、オブジェクトでない対象を常にそのまま返します。
- `Reflect.preventExtensions()` は、ターゲットが拡張機能の防止に成功したかどうかを示す論理値 ({{jsxref("Boolean")}}) を返します。一方、`Object.preventExtensions()` はターゲットオブジェクトを返します。

`Reflect.preventExtensions()` は、`target` の `[[PreventExtensions]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) を呼び出します。

## 例

### Reflect.preventExtensions() の使用

{{jsxref("Object.preventExtensions()")}} も参照してください。

```js
// オブジェクトは既定で拡張可能。
const empty = {};
Reflect.isExtensible(empty); // true

// ...しかし、変更できる。
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // false
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

- [`Reflect.preventExtensions` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.preventExtensions()")}}
- [`handler.preventExtensions()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions)
