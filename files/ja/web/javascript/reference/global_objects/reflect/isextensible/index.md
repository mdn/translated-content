---
title: Reflect.isExtensible()
short-title: isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Reflect.isExtensible()`** は静的メソッドで、これは {{jsxref("Object.isExtensible()")}} に似ています。これはオブジェクトが拡張可能であるか（オブジェクトに追加された新しいプロパティを持てるかどうか）を判断します。

{{InteractiveExample("JavaScript デモ: Reflect.isExtensible()", "taller")}}

```js interactive-example
const object1 = {};

console.log(Reflect.isExtensible(object1));
// 予想される結果: true

Reflect.preventExtensions(object1);

console.log(Reflect.isExtensible(object1));
// 予想される結果: false

const object2 = Object.seal({});

console.log(Reflect.isExtensible(object2));
// 予想される結果: false
```

## 構文

```js-nolint
Reflect.isExtensible(target)
```

### 引数

- `target`
  - : 拡張できるかどうかをチェックする対象のオブジェクト。

### 返値

対象が拡張可能かどうかを示す論理値 ({{jsxref("Boolean")}})。

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトではない場合に発生します。

## 解説

`Reflect.isExtensible()` は、オブジェクトが拡張可能かどうかを調べる反射的な意味づけを提供します。{{jsxref("Object.isExtensible()")}} との唯一の違いは、オブジェクト以外の対象の処理方法です。`Reflect.isExtensible()` は対象がオブジェクトでない場合に {{jsxref("TypeError")}} を発生しますが、`Object.isExtensible()` はオブジェクト以外の対象に対して常に `false` を返します。

`Reflect.isExtensible()` は、`target` の `[[IsExtensible]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) を呼び出します。

## 例

### Reflect.isExtensible() の使用

{{jsxref("Object.isExtensible()")}} も参照してください。

```js
// 新しいオブジェクトは拡張可能。
const empty = {};
Reflect.isExtensible(empty); // true

// ...しかし、変更できます
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // false

// 封印されたオブジェクトは拡張できないように定義される。
const sealed = Object.seal({});
Reflect.isExtensible(sealed); // false

// 凍結されたオブジェクトも拡張できないように定義される。
const frozen = Object.freeze({});
Reflect.isExtensible(frozen); // false
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

{{Compat}}

## 関連情報

- [`Reflect.isExtensible` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Object.isExtensible()")}}
- [`handler.isExtensible()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible)
