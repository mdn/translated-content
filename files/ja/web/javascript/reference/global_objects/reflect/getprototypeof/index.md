---
title: Reflect.getPrototypeOf()
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Reflect.getPrototypeOf()`** は静的メソッドで、{{jsxref("Object.getPrototypeOf()")}} とほぼ同じメソッドです。これは指定したオブジェクトのプロトタイプを返します。

{{InteractiveExample("JavaScript デモ: Reflect.getPrototypeOf()")}}

```js interactive-example
const object = {
  foo: 42,
};

const proto = Reflect.getPrototypeOf(object);

console.log(proto);
// 予想される結果: Object {  }

console.log(Reflect.getPrototypeOf(proto));
// 予想される結果: null
```

## 構文

```js-nolint
Reflect.getPrototypeOf(target)
```

### 引数

- `target`
  - : プロトタイプを取得する対象のオブジェクトです。

### 返値

与えられたオブジェクトのプロトタイプです。継承されたプロパティがない場合、`null` を返します。

### 例外

- {{jsxref("TypeError")}}
  - : `target` がオブジェクトではない場合に発生します。

## 解説

`Reflect.getPrototypeOf()` は、オブジェクトのプロトタイプを取得する反射的意味づけを提供します。`Object.getPrototypeOf()` との唯一の違いは、オブジェクト以外の対象を処理する方法です。`Reflect.getPrototypeOf()` は対象がオブジェクトでない場合に {{jsxref("TypeError")}} を発生しますが、`Object.getPrototypeOf()` はオブジェクトに変換します。

`Reflect.getPrototypeOf()` は、`target` の `[[GetPrototypeOf]]` [オブジェクト内部メソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) を呼び出します。

## 例

### Reflect.getPrototypeOf() の使用

```js
Reflect.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf(Object.prototype); // null
Reflect.getPrototypeOf(Object.create(null)); // null
```

### Object.getPrototypeOf() との比較

```js
// Object の結果は同じ
Object.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf({}); // Object.prototype

// ES5 上では非Objectの結果は両方とも例外
Object.getPrototypeOf("foo"); // Throws TypeError
Reflect.getPrototypeOf("foo"); // Throws TypeError

// ES2015 上では Reflect のみ例外で、Object は 非Object を Object として扱う
Object.getPrototypeOf("foo"); // String.prototype
Reflect.getPrototypeOf("foo"); // Throws TypeError

// Object ES2015 の動作を模倣するには、型変換が必要
Reflect.getPrototypeOf(Object("foo")); // String.prototype
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Reflect.getPrototypeOf` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-reflect)
- [es-shims による `Reflect.getPrototypeOf` のポリフィル](https://www.npmjs.com/package/reflect.getprototypeof)
- {{jsxref("Reflect")}}
- {{jsxref("Object.getPrototypeOf()")}}
- [`handler.getPrototypeOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf)
